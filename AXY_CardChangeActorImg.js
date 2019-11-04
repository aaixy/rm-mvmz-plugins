//=============================================================================
// XueYu Plugins - Change Actor Img Card
// AXY_CardChangeActorImg.js
// Version: 1.0
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.00 Allows player to Change Actor's Img by them self.
 * @author XueYu Plugins
 *
 * @param ItemId
 * @desc The Id of item that you will Change Actor Img.
 * @default 1
 *
 * @help
 * Introduction
 * This plugin allows you to set a item to Change Actor's Img.
 * Example: 1.set the item, the item id is 1 or others;
 *			2.name it as Change Actor Img card or others;
 *			3.set the range is user;
 *			4.set a empty common events or play a music etc. to the item.
 *			5.set the plugin in plugin manager.
 *			6.use this item to Change Actor's Img.
 */

// Imported
var Imported = Imported || {};
Imported.AXY_CardChangeActorImg = true;

// Parameter Variables
var AXY = AXY || {};
AXY.CardChangeActorImg = AXY.CardChangeActorImg || {};

AXY.CardChangeActorImg.Parameters = PluginManager.parameters('AXY_CardChangeActorImg');
AXY.CardChangeActorImg.Param = AXY.CardChangeActorImg.Param || {};

AXY.CardChangeActorImg.Param.ItemId = parseInt(AXY.CardChangeActorImg.Parameters['ItemId']);

// Main
AXY.CardChangeActorImg.Scene_ItemBase_useItem = Scene_ItemBase.prototype.useItem;
Scene_ItemBase.prototype.useItem = function() {
    AXY.CardChangeActorImg.Scene_ItemBase_useItem.call(this);
	//alert('itemid='+this.item().id+',_actorId='+$gameParty.members()[this._actorWindow.index()]._actorId+',name='+$gameParty.members()[this._actorWindow.index()]._name);
	if(this.item().id==AXY.CardChangeActorImg.Param.ItemId){
		if (!$gameParty.inBattle()) {
			if ($dataActors[$gameParty.members()[this._actorWindow.index()]._actorId]) {
				var args = [$gameParty.members()[this._actorWindow.index()]._actorId];
				Game_Interpreter.prototype.pluginCommand('OpenCharacterCreator', args);
			}
		}
	}
};