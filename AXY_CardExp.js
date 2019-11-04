//=============================================================================
// XueYu Plugins - Gain Exp Card
// AXY_CardExp.js
// Version: 1.01
// License: MIT
//=============================================================================
 /*:
 * @plugindesc v1.01 Allows player to gain actor's exp by them self.
 * @author A XueYu Plugins
 *
 * @param ItemId
 * @desc The Id of item that you will gain exp.
 * @default 1,2,3
 *
 * @param DefaultExp
 * @desc The exp that you want to gain.
 * @default 1000
 *
 * @help
 * Introduction
 * This plugin allows you to set a item to gain actor's exp.
 * Example: 1.set the items, the item's id is 1 or others;
 *			2.name it as gain exp card or others and set the meta <exp:2000> or <exp:20000> you need;
 *			3.set the range is user;
 *			4.set a empty common events or play a music etc. to the item.
 *			5.set the plugin in plugin manager.
 *			6.use this item to gain actor's exp.
 * changelog
 * 1.01 2019.5.20
 * change param ItemId from single to multi separate with comma;
 * change param Exp to DefaultExp;
 * change License from BSD to MIT;
 * 1.00 2017.1.6
 * first release;
 */

// Imported
var Imported = Imported || {};
Imported.AXY_CardExp = true;

// Parameter Variables
var AXY = AXY || {};
AXY.CardExp = AXY.CardExp || {};

AXY.CardExp.Parameters = PluginManager.parameters('AXY_CardExp');
AXY.CardExp.Param = AXY.CardExp.Param || {};

AXY.CardExp.Param.ItemId = String(AXY.CardExp.Parameters['ItemId']);
AXY.CardExp.Param.Exp = parseInt(AXY.CardExp.Parameters['DefaultExp']);

// Main
AXY.CardExp.Scene_ItemBase_useItem = Scene_ItemBase.prototype.useItem;
Scene_ItemBase.prototype.useItem = function() {
    AXY.CardExp.Scene_ItemBase_useItem.call(this);
	//alert('itemid='+this.item().id+',_actorId='+$gameParty.members()[this._actorWindow.index()]._actorId+',name='+$gameParty.members()[this._actorWindow.index()]._name);
	var itemArray = AXY.CardExp.Param.ItemId.split(",");
	if( inArray(this.item().id, itemArray) ){
		if (!$gameParty.inBattle()) {
			if ($dataActors[$gameParty.members()[this._actorWindow.index()]._actorId]) {
				//SceneManager.push(Scene_Name);
				var expTmp = parseInt(this.item().meta.exp);
				exp = expTmp ? expTmp : AXY.CardExp.Param.Exp;
				$gameParty.members()[this._actorWindow.index()].gainExp(exp);
			}
		}
	}
};

function inArray(search, array){
    for(var i in array){
        if(array[i]==search){
            return true;
        }
    }
    return false;
}