//=============================================================================
// A XueYu Plugins - SingleImgSVActor
// AXY_SingleImgSVActor.js
// Version: 1.01
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.01 Allows actors using single img in battle.
 * @author A XueYu Plugins
 *
 * @help
 * Introduction
 * This plugin allows actors using single img in battle.
 *
 * Usage: 
 * set note use below this:
 * <axysingle:axySingleImgSVActor1> //flag the actor use single battle img;
 * <axysingle_scalex:0.8> //scale actor in x, It's not necessary. default is 1;
 * <axysingle_scaley:0.8> //scale actor in y, It's not necessary. default is 1;
 * <axysingle_death:axySingleImgSVActorDeath1> //flag the actor use single death img in battle, It's not necessary. default is your define above on single battle img;
 * <axysingle_death_scalex:1> //scale death actor in x, It's not necessary. default is 1;
 * <axysingle_death_scaley:1> //scale death actor in x, It's not necessary. default is 1;
 * <axysingle_death_rotation:0> //rotate death actor, It's not necessary. default is 0;
 * <axysingle_death_hue:50> //hue actor in 0-360, It's not necessary. default is 0;
 * 
 *
 * changelog
 * 1.01 2017.9.6
 * add death animation;
 * 1.00 2017.9.5
 * first release;
 */

// Imported
var Imported = Imported || {};
Imported.AXY_SingleImgSVActor = true;

// Parameter Variables
var AXY = AXY || {};
AXY.SingleImgSVActor = AXY.SingleImgSVActor || {};

AXY.SingleImgSVActor.Parameters = PluginManager.parameters('AXY_SingleImgSVActor');
AXY.SingleImgSVActor.Param = AXY.SingleImgSVActor.Param || {};

AXY.SingleImgSVActor.Param.SVActor = [];

// Main
Spriteset_Battle.prototype.createActors = function() {
	this._actorSprites = [];
	for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
		var actorId = $gameParty._actors[i];
		
		this._actorSprites[i] = new Sprite_Actor();

		
		//console.log($gameParty);
		
		if(actorId)
		{
			//console.log($gameActors.actor(actorId));
			//var name = $gameActors._data[actorId]._battlerName;
			//console.log($gameActors._data[actorId]._battlerName);
			//console.log($dataActors[actorId]);
			var AXYSingleImgSVActorFileName = $dataActors[actorId].meta.axysingle;
			//console.log(isAXYSingleImgSVActor);
			var tempScaleX = $dataActors[actorId].meta.axysingle_scalex;
			var tempScaleY = $dataActors[actorId].meta.axysingle_scaley;
			
			if(AXYSingleImgSVActorFileName)
			{
				//Delete last battle
				//console.log(AXY.SingleImgSVActor.Param.SVActor[i]);
				if(AXY.SingleImgSVActor.Param.SVActor[actorId])
				{
					delete AXY.SingleImgSVActor.Param.SVActor[actorId];
				}

				//create new
				AXY.SingleImgSVActor.Param.SVActor[actorId] = new Sprite();
				//console.log(AXY.SingleImgSVActor.Param.SVActor[i]);
				AXY.SingleImgSVActor.Param.SVActor[actorId].bitmap = ImageManager.loadSvActor(AXYSingleImgSVActorFileName);
				
				AXY.SingleImgSVActor.Param.SVActor[actorId].anchor.x = 0.5;
				AXY.SingleImgSVActor.Param.SVActor[actorId].anchor.y = 1;

				//initialize
				if(AXY.SingleImgSVActor.Param.SVActor[actorId])
				{
					//tell whether a battler is a SingleImgSVActor
					$gameActors.actor(actorId).isAXYSingleImgSVActor = true;
					
					//set scale
					if(tempScaleX)
					{
						AXY.SingleImgSVActor.Param.SVActor[actorId].scale.x = tempScaleX;
					}
					if(tempScaleY)
					{
						AXY.SingleImgSVActor.Param.SVActor[actorId].scale.y = tempScaleY;
					}
					this._actorSprites[i].addChild(AXY.SingleImgSVActor.Param.SVActor[actorId]);
				}                    
			}
		}

		this._battleField.addChild(this._actorSprites[i]);
	}
};

//Replace Actor default death animation
var AXY_alias_Game_Actor_prototype_performCollapse = Game_Actor.prototype.performCollapse;
Game_Actor.prototype.performCollapse = function() {
    Game_Battler.prototype.performCollapse.call(this);
    if ($gameParty.inBattle()) {
        if(this.isAXYSingleImgSVActor === true)
		{
			//console.log('isAXYSingleImgSVActor dead');
			//console.log(this);
			
			//console.log($gameParty);
			//console.log($gameActors.actor(this._actorId));
			var actorId = this._actorId;
			SoundManager.playActorCollapse();
			console.log(AXY.SingleImgSVActor.Param.SVActor[this._actorId]);
			
			var AXYSingleImgSVActorFileName = $dataActors[actorId].meta.axysingle_death ? $dataActors[actorId].meta.axysingle_death : $dataActors[actorId].meta.axysingle;
			var AXYSingleImgSVActorScaleX = $dataActors[actorId].meta.axysingle_death_scalex;
			var AXYSingleImgSVActorScaleY = $dataActors[actorId].meta.axysingle_death_scaley;
			var AXYSingleImgSVActorRotation = $dataActors[actorId].meta.axysingle_death_rotation;
			var AXYSingleImgSVActorHUE = $dataActors[actorId].meta.axysingle_death_hue ? $dataActors[actorId].meta.axysingle_death_hue : 0;
			
			if(AXYSingleImgSVActorScaleX)
			{
				AXY.SingleImgSVActor.Param.SVActor[actorId].scale.x = AXYSingleImgSVActorScaleX;
			}
			if(AXYSingleImgSVActorScaleY)
			{
				AXY.SingleImgSVActor.Param.SVActor[actorId].scale.y = AXYSingleImgSVActorScaleY;
			}
			if(AXYSingleImgSVActorRotation)
			{
				AXY.SingleImgSVActor.Param.SVActor[actorId].rotation = AXYSingleImgSVActorRotation;
			}
			//AXY.SingleImgSVActor.Param.SVActor[this._actorId].bitmap.alpha = 0.5;
			//AXY.SingleImgSVActor.Param.SVActor[this._actorId].bitmap.textColor = 'rgba(0,255,0,0)';

			if(AXYSingleImgSVActorFileName)
			{
				AXY.SingleImgSVActor.Param.SVActor[this._actorId].bitmap = ImageManager.loadSvActor(AXYSingleImgSVActorFileName, AXYSingleImgSVActorHUE);
			}
			//this._actor.battlerHue();
			//this.requestMotion('escape');
			
			//this.addNewState(6);
            //this.refresh();
			
			//todo
			//death animation
			
			
			/*Sprite_Enemy.prototype.updateBitmap = function() {
    	Sprite_Battler.prototype.updateBitmap.call(this);
    	var name = this._enemy.battlerName();
    	var hue = this._enemy.battlerHue();
    	if (this._battlerName !== name || this._battlerHue !== hue) {
        	this._battlerName = name;
        	this._battlerHue = hue;
        	var huePlugins = hue + this._enemy.isElite() ? 100 : 0;
        	this.loadBitmap(name, huePlugins);
        	this.initVisibility();
        }
        if (Morpho_EliteEnemy_Plugins_Size == "true") {
        	this.scale.x = this._enemy.isElite() ? 1.2 : 1;
        	this.scale.y = this._enemy.isElite() ? 1.2 : 1;
    	}
	};*/
	
	
		}
		else{
			AXY_alias_Game_Actor_prototype_performCollapse.call(this);
		}
    }
};