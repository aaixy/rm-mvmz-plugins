//=============================================================================
// XueYu Plugins - Kick Actor Card
// AXY_CardKickActor.js
// Version: 1.0
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.00 Allows player to kick actor by them self.
 * @author XueYu Plugins
 *
 * @param ItemId
 * @desc The Id of item that you will kick actor.
 * @default 1
 *
 * @help
 * Introduction
 * This plugin allows you to set a item to kick actor.
 * Example: 1.set the item, the item id is 1 or others;
 *			2.name it as kick actor card or others;
 *			3.set the range is user;
 *			4.set a empty common events or play a music etc. to the item.
 *			5.set the plugin in plugin manager.
 *			6.use this item to kick actor.
 */

// Imported
var Imported = Imported || {};
Imported.AXY_CardKickActor = true;

// Parameter Variables
var AXY = AXY || {};
AXY.CardKickActor = AXY.CardKickActor || {};

AXY.CardKickActor.Parameters = PluginManager.parameters('AXY_CardKickActor');
AXY.CardKickActor.Param = AXY.CardKickActor.Param || {};

AXY.CardKickActor.Param.ItemId = parseInt(AXY.CardKickActor.Parameters['ItemId']);

// Main
AXY.CardKickActor.Scene_ItemBase_useItem = Scene_ItemBase.prototype.useItem;
Scene_ItemBase.prototype.useItem = function() {
    AXY.CardKickActor.Scene_ItemBase_useItem.call(this);
	//alert('itemid='+this.item().id+',_actorId='+$gameParty.members()[this._actorWindow.index()]._actorId+',name='+$gameParty.members()[this._actorWindow.index()]._name);
	if(this.item().id==AXY.CardKickActor.Param.ItemId){
		if (!$gameParty.inBattle()) {
			if ($dataActors[$gameParty.members()[this._actorWindow.index()]._actorId]) {
				$gameParty.removeActor($gameParty.members()[this._actorWindow.index()]._actorId);
			}
		}
	}
};