//=============================================================================
// A XueYu Plugins - Battle
// AXY_Battle.js
// Version: 1.00
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.00 Allows to adjust battle's staff.
 * @author A XueYu Plugins
 *
 * @help
 * Introduction
 * This plugin allows to adjust battle's staff.
 *
 * Example: 
 * not yet
 *
 * changelog
 * 1.00 2019.11.23
 * first release;
 * 
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 * 
 * @param messageSpeed
 * @text Message Speed
 * @desc Message Speed. default: 16
 * @type number
 * @default 16
 *
 * @param animationBaseDelay
 * @text Animation Base Delay
 * @desc Animation Base Delay. default: 8
 * @type number
 * @default 8
 * 
 * @param animationNextDelay
 * @text Animation Next Delay
 * @desc Animation Next Delay. default: 12
 * @type number
 * @default 12
 * 
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Battle = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Battle = AXY.Battle || {};

AXY.Battle.Parameters = PluginManager.parameters('AXY_Battle');
AXY.Battle.Param = AXY.Battle.Param || {};
AXY.Battle.Alias = AXY.Battle.Alias || {};

//=============================================================================
// Utils
//=============================================================================
// Create a utility function to parse complex parameters.
//=============================================================================
Utils.recursiveParse = function (param) {
	try {
		if (typeof JSON.parse(param) == 'object') {
			return JSON.parse(
				param,
				function (key, value) {
					try {
						return this.recursiveParse(value);
					} catch (e) {
						return value;
					}
				}.bind(this)
			);
		} else {
			return JSON.parse(
				param,
				function (key, value) {
					return value;
				}.bind(this)
			);
		}
	} catch (e) {
		return param;
	}
};

//=============================================================================
// Parameters
//=============================================================================
// Read and parse parameters into a locally scoped Parameters object.
//=============================================================================
Object.keys(AXY.Battle.Parameters).forEach(function (key) {
	return (AXY.Battle.Param[key] = Utils.recursiveParse(
		AXY.Battle.Parameters[key]
	));
});

// Main
(function () {
	/*Window_BattleLog.prototype.showAnimation = function (subject, targets, animationId) {
		if (animationId < 0) {
			this.showAttackAnimation(subject, targets);
		} else {
			this.showNormalAnimation(targets, animationId);
		}
		console.log(subject);
		console.log(targets);
	};*/

	/*AXY.Battle.Alias.Window_BattleLog_prototype_startAction = Window_BattleLog.prototype.startAction;
	Window_BattleLog.prototype.startAction = function (subject, action, targets) {
		AXY.Battle.Alias.Window_BattleLog_prototype_startAction.call(this, subject, action, targets);
		var item = action.item();
		this.push('performActionStart', subject, action);
		this.push('waitForMovement');
		this.push('performAction', subject, action);
		this.push('showAnimation1', subject, targets.clone(), item.animationId, item);
		this.displayAction(subject, item);
		//console.log(item);
	};

	AXY.Battle.Alias.Window_BattleLog_prototype_showAnimation = Window_BattleLog.prototype.showAnimation;
	Window_BattleLog.prototype.showAnimation = function (subject, targets, animationId, item) {
		AXY.Battle.Alias.Window_BattleLog_prototype_showAnimation.call(this, subject, targets, animationId);
		console.log(item);
		if (animationId < 0) {
			this.showAttackAnimation(subject, targets);
		} else {
			this.showNormalAnimation(targets, animationId, false, item);
		}
	};

	AXY.Battle.Alias.Window_BattleLog_prototype_showNormalAnimation = Window_BattleLog.prototype.showNormalAnimation;
	Window_BattleLog.prototype.showNormalAnimation = function (targets, animationId, mirror, item) {
		console.log(item);
		AXY.Battle.Alias.Window_BattleLog_prototype_showNormalAnimation.call(this, targets, animationId, mirror);
		var animation = $dataAnimations[animationId];
		if (animation) {
			var delay = this.animationBaseDelay();
			var nextDelay = this.animationNextDelay();
			targets.forEach(function (target) {
				target.startAnimation(animationId, mirror, delay);
				delay += nextDelay;
			});
		}
		console.log(item);
	};*/

	Window_BattleLog.prototype.messageSpeed = function () {
		return AXY.Battle.Param.messageSpeed;
	};

	Window_BattleLog.prototype.animationBaseDelay = function () {
		return AXY.Battle.Param.animationBaseDelay;
	};

	Window_BattleLog.prototype.animationNextDelay = function () {
		return AXY.Battle.Param.animationNextDelay;
	};
})();