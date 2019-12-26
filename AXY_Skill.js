//=============================================================================
// A XueYu Plugins - Skill
// AXY_Skill.js
// Version: 1.01
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.01 Set param about skill.
 * @author A XueYu Plugins
 *
 * @help
 * Introduction
 * This plugin allows to set param about skill.
 * Github: https://github.com/aaixy/rmmv-plugins
 *
 * Usage:
 * Write
 * <axy_skill_repeat:10>
 * <axy_skill_mode:a> //one by one, totals = repeats*targets
 * <axy_skill_mode:b> //one by one, totals = repeats
 * <axy_skill_mode:c> //round by round, totals = repeats*targets
 * <axy_skill_mode:d> //round by round, totals = repeats
 * to skill meta note box;
 *
 * changelog
 * 1.01 2019.12.25
 * add: abcd four repeat mode;
 * 1.00 2019.11.28
 * first release.
 *
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 *
 * 
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Skill = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Skill = AXY.Skill || {};

AXY.Skill.Parameters = PluginManager.parameters('AXY_Skill');
AXY.Skill.Param = AXY.Skill.Param || {};
AXY.Skill.Alias = AXY.Skill.Alias || {};
AXY.Skill.Variables = AXY.Skill.Variables || {};

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
Object.keys(AXY.Skill.Parameters).forEach(function (key) {
	return (AXY.Skill.Param[key] = Utils.recursiveParse(
		AXY.Skill.Parameters[key]
	));
});

// Main
(function () {
	Game_Action.prototype.numRepeats = function () {
		//console.log(this.item());
		var repeats = this.item().meta.axy_skill_repeat || this.item().repeats;
		if (this.isAttack()) {
			repeats += this.subject().attackTimesAdd();
		}
		return Math.floor(repeats);
	};

	Game_Action.prototype.repeatTargets = function (targets) {
		var repeatedTargets = [];
		var repeats = this.numRepeats();

		//console.log(this.item().meta.axy_skill_mode);
		var _tmp = this.item().meta.axy_skill_mode;
		switch (_tmp == undefined ? '' : _tmp.toLowerCase()) {
			case 'a': //one by one, totals = repeats*targets
				for (var j = 0; j < repeats; j++) {
					for (var i = 0; i < targets.length; i++) {
						var target = targets[i];
						if (target) {
							repeatedTargets.push(target);
							//console.log('a');
						}
					}
				}
				break;
			case 'b': //one by one, totals = repeats
				for (var j = 0; j < repeats;) {
					for (var i = 0; i < targets.length; i++) {
						var target = targets[i];
						if (target) {
							repeatedTargets.push(target);
							j++;
							//console.log('b');
						}
					}
				}
				break;
			case 'c': //round by round, totals = repeats*targets
				for (var j = 0; j < repeats; j++) {
					targets = [];
					if (!this._forcing && this.subject().isConfused()) {
						targets = [this.confusionTarget()];
					} else if (this.isForOpponent()) {
						targets = this.targetsForOpponents();
					} else if (this.isForFriend()) {
						targets = this.targetsForFriends();
					}
					for (var i = 0; i < targets.length; i++) {
						var target = targets[i];
						if (target) {
							repeatedTargets.push(target);
							//console.log('c');
						}
					}
				}
				break;
			case 'd': //round by round, totals = repeats
				for (var j = 0; j < repeats;) {
					targets = [];
					if (!this._forcing && this.subject().isConfused()) {
						targets = [this.confusionTarget()];
					} else if (this.isForOpponent()) {
						targets = this.targetsForOpponents();
					} else if (this.isForFriend()) {
						targets = this.targetsForFriends();
					}
					for (var i = 0; i < targets.length; i++) {
						var target = targets[i];
						if (target) {
							repeatedTargets.push(target);
							j++;
							//console.log('d');
						}
					}
				}
				break;
			default:
				for (var i = 0; i < targets.length; i++) {
					var target = targets[i];
					if (target) {
						for (var j = 0; j < repeats; j++) {
							repeatedTargets.push(target);
						}
					}
				}
				break;
		}
		return repeatedTargets;
	};
})();