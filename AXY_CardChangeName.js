//=============================================================================
// XueYu Plugins - Change Name Card
// AXY_CardChangeName.js
// Version: 1.0
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.00 Allows player to change actor's name by them self.
 * @author XueYu Plugins
 *
 * @param ItemId
 * @desc The Id of item that you will change name.
 * @default 1
 *
 * @param NameLength
 * @desc The lenght of name that you want to limits.
 * @default 8
 *
 * @help
 * Introduction
 * This plugin allows you to set a item to change actor's name.
 * Example: 1.set the item, the item id is 1 or others;
 *			2.name it as change name card or others;
 *			3.set the range is user;
 *			4.set a empty common events or play a music etc. to the item.
 *			5.set the plugin in plugin manager.
 *			6.use this item to change actor's name.
 */

// Imported
var Imported = Imported || {};
Imported.AXY_CardChangeName = true;

// Parameter Variables
var AXY = AXY || {};
AXY.CardChangeName = AXY.CardChangeName || {};

AXY.CardChangeName.Parameters = PluginManager.parameters('AXY_CardChangeName');
AXY.CardChangeName.Param = AXY.CardChangeName.Param || {};

AXY.CardChangeName.Param.ItemId = parseInt(AXY.CardChangeName.Parameters['ItemId']);
AXY.CardChangeName.Param.NameLength = parseInt(AXY.CardChangeName.Parameters['NameLength']);

// Main
AXY.CardChangeName.Scene_ItemBase_useItem = Scene_ItemBase.prototype.useItem;
Scene_ItemBase.prototype.useItem = function() {
    AXY.CardChangeName.Scene_ItemBase_useItem.call(this);
	//alert('itemid='+this.item().id+',_actorId='+$gameParty.members()[this._actorWindow.index()]._actorId+',name='+$gameParty.members()[this._actorWindow.index()]._name);
	if(this.item().id==AXY.CardChangeName.Param.ItemId){
		if (!$gameParty.inBattle()) {
			if ($dataActors[$gameParty.members()[this._actorWindow.index()]._actorId]) {
				SceneManager.push(Scene_Name);
				SceneManager.prepareNextScene($gameParty.members()[this._actorWindow.index()]._actorId, AXY.CardChangeName.Param.NameLength);
			}
		}
	}
};