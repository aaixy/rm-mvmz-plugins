//=============================================================================
// XueYu Plugins - Secret Channel
// AXY_SecretChannel.js
// Version: 1.0
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.00 Allows add Secret Channel in map.
 * @author XueYu Plugins
 *
 * @param bushRegionID
 * @desc The Region Id that actor is in bush.
 * @default 253
 *
 * @param blockRegionID
 * @desc The Region Id that you can not pass.
 * @default 254
 *
 * @param passRegionID
 * @desc The Region Id that you can pass.
 * @default 255
 *
 * @help
 * Introduction
 * This plugin allows add Secret Channel in map.
 *
 * Example: 
 * draw bushRegionID/passRegionID on the wall's edge/path and draw blockRegionID on wall if you want to block actor.
 *
 * changelog
 * 1.0 2017.2.11
 * first release;
 */

// Imported
var Imported = Imported || {};
Imported.AXY_SecretChannel = true;

// Parameter Variables
var AXY = AXY || {};
AXY.SecretChannel = AXY.SecretChannel || {};

AXY.SecretChannel.Parameters = PluginManager.parameters('AXY_SecretChannel');
AXY.SecretChannel.Param = AXY.SecretChannel.Param || {};
// Param
AXY.SecretChannel.Param.passRegionID = parseInt(AXY.SecretChannel.Parameters['passRegionID']);
AXY.SecretChannel.Param.blockRegionID = parseInt(AXY.SecretChannel.Parameters['blockRegionID']);
AXY.SecretChannel.Param.bushRegionID = parseInt(AXY.SecretChannel.Parameters['bushRegionID']);

// Main
AXY.SecretChannel.Tilemap_isOverpassPosition = Tilemap.prototype._isOverpassPosition;
Tilemap.prototype._isOverpassPosition = function(mx, my) {
	var regionId = this._readMapData(mx, my, 5);
	if (regionId == AXY.SecretChannel.Param.passRegionID || regionId == AXY.SecretChannel.Param.bushRegionID) {
		return true;
	} else {
		return AXY.SecretChannel.Tilemap_isOverpassPosition.call(this, mx, my);
	}
};

AXY.SecretChannel.Game_Map_checkPassage = Game_Map.prototype.checkPassage;
Game_Map.prototype.checkPassage = function(x, y, bit) {
    var regionId = $gameMap.regionId(x,y);
	if (regionId == AXY.SecretChannel.Param.passRegionID || regionId == AXY.SecretChannel.Param.bushRegionID) {
		return true;
	} else if (regionId == AXY.SecretChannel.Param.blockRegionID) {
		return false;
	} else{
		return AXY.SecretChannel.Game_Map_checkPassage.call(this, x, y, bit);
	}
};

AXY.SecretChannel.Game_CharacterBase_refreshBushDepth = Game_CharacterBase.prototype.refreshBushDepth;
Game_CharacterBase.prototype.refreshBushDepth = function() {
	AXY.SecretChannel.Game_CharacterBase_refreshBushDepth.call(this);
	var regionId = this.regionId();
	//console.log(regionId);
	//console.log(this);
	if (regionId == AXY.SecretChannel.Param.bushRegionID) {
		this._bushDepth = 48;
	} else if (regionId == AXY.SecretChannel.Param.passRegionID){
		this._opacity = 0;
	} else{
		//AXY.SecretChannel.Game_CharacterBase_refreshBushDepth.call(this);
		this._opacity = 255;
		//this._bushDepth = 0;
	}
};