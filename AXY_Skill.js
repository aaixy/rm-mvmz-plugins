//=============================================================================
// A XueYu Plugins - Skill
// AXY_Skill.js
// Version: 1.00
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.00 Set param about skill.
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
 * to skill meta note box;
 *
 * changelog
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
})();