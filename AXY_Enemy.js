//=============================================================================
// XueYu Plugins - Enemy
// AXY_Enemy.js
// Version: 1.01
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.01 Allows add Enemy in battle.
 * @author XueYu Plugins
 *
 * @help
 * Introduction
 * This plugin allows add Enemy in battle.
 *
 * Example: 
 * add one enemy on x=100,y=200 and enemy id is 1 in battle
 * AXY.Enemy.add(1,100,200);
 * use Variables
 * AXY.Enemy.add($gameVariables.value(1),$gameVariables.value(2),$gameVariables.value(3));
 *
 * changelog
 * 1.01 2017.2.14
 * fix some bug that add if Troops and release Enemys when used;
 * 1.00 2017.2.9
 * first release;
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Enemy = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Enemy = AXY.Enemy || {};

AXY.Enemy.Parameters = PluginManager.parameters('AXY_Enemy');
AXY.Enemy.Param = AXY.Enemy.Param || {};

AXY.Enemy.Param.Enemys = [];
AXY.Enemy.Param.Troops = [];

// Main
AXY.Enemy.add = function(enemyId, x, y){
    AXY.Enemy.Param.Enemys.push({enemyId: enemyId,hidden: false,x: x,y: y});
};

AXY.Enemy.Game_Troop_setup = Game_Troop.prototype.setup;
Game_Troop.prototype.setup = function(troopId) {
	if(!AXY.Enemy.Param.Troops[troopId]){
		AXY.Enemy.Param.Enemys.forEach(function(member) {
			$dataTroops[troopId].members.push(member);
		});
		AXY.Enemy.Param.Troops[troopId] = true;
	}
	
	AXY.Enemy.Game_Troop_setup.call(this, troopId);
	AXY.Enemy.Param.Enemys = [];
	//console.log(AXY.Enemy.Param.Enemys);
};