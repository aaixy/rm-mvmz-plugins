//=============================================================================
// A XueYu Plugins - SingleImgSVActor
// AXY_SingleImgSVActor.js
// Version: 1.03
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.03 Allows actors using single img in battle.
 * @author A XueYu Plugins
 *
 * @help
 * Introduction
 * This plugin allows actors using single img in battle.
 *
 * Usage: 
 * set note use below this:
 * <axysingle:axySingleImgSVActor1> //flag the actor use single battle img, It's necessary;
 * <axysingle_scalex:0.8> //scale actor in x, It's not necessary. default is 1;
 * <axysingle_scaley:0.8> //scale actor in y, It's not necessary. default is 1;
 * <axysingle_rotation:0> //rotate death actor, It's not necessary. default is 0;
 * <axysingle_hue:0> //hue actor in 0-360, It's not necessary. default is 0;
 * 
 * It's not necessary below:
 * <axysingle_death:axySingleImgSVActorDeath1> //flag the actor use single death img in battle, It's not necessary. default is your define above on single battle img;
 * <axysingle_death_scalex:1> //scale death actor in x, It's not necessary. default is axysingle_scalex;
 * <axysingle_death_scaley:1> //scale death actor in x, It's not necessary. default is axysingle_scaley;
 * <axysingle_death_rotation:0> //rotate death actor, It's not necessary. default is axysingle_rotation;
 * <axysingle_death_hue:50> //hue actor in 0-360, It's not necessary. default is axysingle_hue;
 * 
 * <axysingle_damage:axySingleImgSVActorDamage1> //flag the actor use single damage img in battle, It's not necessary. default is your define above on single battle img;
 * <axysingle_damage_scalex:1> //scale damage actor in x, It's not necessary. default is axysingle_scalex;
 * <axysingle_damage_scaley:1> //scale damage actor in x, It's not necessary. default is axysingle_scaley;
 * <axysingle_damage_rotation:0> //rotate damage actor, It's not necessary. default is axysingle_rotation;
 * <axysingle_damage_hue:50> //hue actor in 0-360, It's not necessary. default is axysingle_hue;
 * 
 * <axysingle_recovery:axySingleImgSVActorRecovery1> //flag the actor use single recovery img in battle, It's not necessary. default is your define above on single battle img;
 * <axysingle_recovery_scalex:1> //scale recovery actor in x, It's not necessary. default is axysingle_scalex;
 * <axysingle_recovery_scaley:1> //scale recovery actor in x, It's not necessary. default is axysingle_scaley;
 * <axysingle_recovery_rotation:0> //rotate recovery actor, It's not necessary. default is axysingle_rotation;
 * <axysingle_recovery_hue:50> //hue actor in 0-360, It's not necessary. default is axysingle_hue;
 * 
 *
 * changelog
 * 1.03 2019.11.5
 * add: class meta support, class meta has higher priority;
 * fix: death image has no effect;
 * 1.02 2019.10.31
 * add: damage image support;
 * add: recovery image support;
 * add: main image rotation and hue support;
 * change: License from BSD to MIT;
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
AXY.SingleImgSVActor.Alias = AXY.SingleImgSVActor.Alias || {};

AXY.SingleImgSVActor.Param.SVActor = [];

// Main
Spriteset_Battle.prototype.createActors = function () {
	this._actorSprites = [];
	for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
		var actorId = $gameParty._actors[i];

		this._actorSprites[i] = new Sprite_Actor();

		//console.log($gameParty);
		//console.log(this);

		if (actorId) {
			//console.log($gameActors.actor(actorId));
			//var name = $gameActors._data[actorId]._battlerName;
			//console.log($gameActors._data[actorId]._battlerName);
			//console.log($dataActors[actorId]);
			var _metaClass = $gameActors.actor(actorId).currentClass().meta;
			var _metaActor = $dataActors[actorId].meta;
			var AXYSingleImgSVActorFileName = _metaActor.axysingle;
			//console.log(isAXYSingleImgSVActor);
			var AXYSingleImgSVActorScaleX = _metaClass.axysingle_scalex ? _metaClass.axysingle_scalex : _metaActor.axysingle_scalex;
			var AXYSingleImgSVActorScaleY = _metaClass.axysingle_scaley ? _metaClass.axysingle_scaley : _metaActor.axysingle_scaley;
			var AXYSingleImgSVActorRotation = _metaClass.axysingle_rotation ? _metaClass.axysingle_rotation : _metaActor.axysingle_rotation;
			var AXYSingleImgSVActorHUE = _metaClass.axysingle_hue ? _metaClass.axysingle_hue : _metaActor.axysingle_hue ? _metaActor.axysingle_hue : 0;


			if (AXYSingleImgSVActorFileName) {
				//Delete last battle
				//console.log(AXY.SingleImgSVActor.Param.SVActor[i]);
				if (AXY.SingleImgSVActor.Param.SVActor[actorId]) {
					delete AXY.SingleImgSVActor.Param.SVActor[actorId];
				}

				//create new
				AXY.SingleImgSVActor.Param.SVActor[actorId] = new Sprite();
				//console.log(AXY.SingleImgSVActor.Param.SVActor[i]);
				AXY.SingleImgSVActor.Param.SVActor[actorId].bitmap = ImageManager.loadSvActor(AXYSingleImgSVActorFileName, AXYSingleImgSVActorHUE);

				AXY.SingleImgSVActor.Param.SVActor[actorId].anchor.x = 0.5;
				AXY.SingleImgSVActor.Param.SVActor[actorId].anchor.y = 1;

				//initialize
				if (AXY.SingleImgSVActor.Param.SVActor[actorId]) {
					//tell whether a battler is a SingleImgSVActor
					$gameActors.actor(actorId).isAXYSingleImgSVActor = true;

					//set scale
					if (AXYSingleImgSVActorScaleX) {
						AXY.SingleImgSVActor.Param.SVActor[actorId].scale.x = AXYSingleImgSVActorScaleX;
					}
					if (AXYSingleImgSVActorScaleY) {
						AXY.SingleImgSVActor.Param.SVActor[actorId].scale.y = AXYSingleImgSVActorScaleY;
					}
					if (AXYSingleImgSVActorRotation) {
						AXY.SingleImgSVActor.Param.SVActor[actorId].rotation = AXYSingleImgSVActorRotation;
					}
					this._actorSprites[i].addChild(AXY.SingleImgSVActor.Param.SVActor[actorId]);
				}
			}
		}
		this._battleField.addChild(this._actorSprites[i]);
	}
};

//Replace Actor default death animation
AXY.SingleImgSVActor.Alias.Game_Actor_prototype_performCollapse = Game_Actor.prototype.performCollapse;
Game_Actor.prototype.performCollapse = function () {
	Game_Battler.prototype.performCollapse.call(this);
	if ($gameParty.inBattle()) {
		if (this.isAXYSingleImgSVActor === true) {
			//console.log('isAXYSingleImgSVActor dead');
			//console.log(this);

			//console.log($gameParty);
			//console.log($gameActors.actor(this._actorId));
			var actorId = this._actorId;
			SoundManager.playActorCollapse();
			//console.log(AXY.SingleImgSVActor.Param.SVActor[this._actorId]);
			var _metaClass = $gameActors.actor(actorId).currentClass().meta;
			var _metaActor = $dataActors[actorId].meta;

			var AXYSingleImgSVActorFileName = _metaActor.axysingle_death ? _metaActor.axysingle_death : _metaActor.axysingle;
			var AXYSingleImgSVActorScaleX = _metaClass.axysingle_death_scalex ? _metaClass.axysingle_death_scalex : _metaActor.axysingle_death_scalex ? _metaActor.axysingle_death_scalex : _metaActor.axysingle_scalex;
			var AXYSingleImgSVActorScaleY = _metaClass.axysingle_death_scaley ? _metaClass.axysingle_death_scaley : _metaActor.axysingle_death_scaley ? _metaActor.axysingle_death_scaley : _metaActor.axysingle_scaley;
			var AXYSingleImgSVActorRotation = _metaClass.axysingle_death_rotation ? _metaClass.axysingle_death_rotation : _metaActor.axysingle_death_rotation ? _metaActor.axysingle_death_rotation : _metaActor.axysingle_rotation;
			var AXYSingleImgSVActorHUE = _metaClass.axysingle_death_hue ? _metaClass.axysingle_death_hue : _metaActor.axysingle_death_hue ? _metaActor.axysingle_death_hue : _metaActor.axysingle_hue;

			if (AXYSingleImgSVActorScaleX) {
				AXY.SingleImgSVActor.Param.SVActor[actorId].scale.x = AXYSingleImgSVActorScaleX;
			}
			if (AXYSingleImgSVActorScaleY) {
				AXY.SingleImgSVActor.Param.SVActor[actorId].scale.y = AXYSingleImgSVActorScaleY;
			}
			if (AXYSingleImgSVActorRotation) {
				AXY.SingleImgSVActor.Param.SVActor[actorId].rotation = AXYSingleImgSVActorRotation;
			}
			//AXY.SingleImgSVActor.Param.SVActor[this._actorId].bitmap.alpha = 0.5;
			//AXY.SingleImgSVActor.Param.SVActor[this._actorId].bitmap.textColor = 'rgba(0,255,0,0)';

			if (AXYSingleImgSVActorFileName) {
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


		} else {
			AXY.SingleImgSVActor.Alias.Game_Actor_prototype_performCollapse.call(this);
		}
	}
};

//Replace Actor default Damage animation
AXY.SingleImgSVActor.Alias.Game_Actor_prototype_performDamage = Game_Actor.prototype.performDamage;
Game_Actor.prototype.performDamage = function () {
	Game_Battler.prototype.performDamage.call(this);
	if ($gameParty.inBattle()) {
		if (this.isAXYSingleImgSVActor === true && this.isDead() !== true) {
			//console.log('isAXYSingleImgSVActor dead');
			//console.log(this);

			//console.log($gameParty);
			//console.log($gameActors.actor(this._actorId));
			var actorId = this._actorId;
			SoundManager.playActorDamage();
			//console.log(AXY.SingleImgSVActor.Param.SVActor[this._actorId]);
			var _metaClass = $gameActors.actor(actorId).currentClass().meta;
			var _metaActor = $dataActors[actorId].meta;

			var AXYSingleImgSVActorFileName = _metaActor.axysingle_damage ? _metaActor.axysingle_damage : _metaActor.axysingle;
			var AXYSingleImgSVActorScaleX = _metaClass.axysingle_damage_scalex ? _metaClass.axysingle_damage_scalex : _metaActor.axysingle_damage_scalex ? _metaActor.axysingle_damage_scalex : _metaActor.axysingle_scalex;
			var AXYSingleImgSVActorScaleY = _metaClass.axysingle_damage_scaley ? _metaClass.axysingle_damage_scaley : _metaActor.axysingle_damage_scaley ? _metaActor.axysingle_damage_scaley : _metaActor.axysingle_scaley;
			var AXYSingleImgSVActorRotation = _metaClass.axysingle_damage_rotation ? _metaClass.axysingle_damage_rotation : _metaActor.axysingle_damage_rotation ? _metaActor.axysingle_damage_rotation : _metaActor.axysingle_rotation;
			var AXYSingleImgSVActorHUE = _metaClass.axysingle_damage_hue ? _metaClass.axysingle_damage_hue : _metaActor.axysingle_damage_hue ? _metaActor.axysingle_damage_hue : _metaActor.axysingle_hue;

			if (AXYSingleImgSVActorScaleX) {
				AXY.SingleImgSVActor.Param.SVActor[actorId].scale.x = AXYSingleImgSVActorScaleX;
			}
			if (AXYSingleImgSVActorScaleY) {
				AXY.SingleImgSVActor.Param.SVActor[actorId].scale.y = AXYSingleImgSVActorScaleY;
			}
			if (AXYSingleImgSVActorRotation) {
				AXY.SingleImgSVActor.Param.SVActor[actorId].rotation = AXYSingleImgSVActorRotation;
			}
			//AXY.SingleImgSVActor.Param.SVActor[this._actorId].bitmap.alpha = 0.5;
			//AXY.SingleImgSVActor.Param.SVActor[this._actorId].bitmap.textColor = 'rgba(0,255,0,0)';

			if (AXYSingleImgSVActorFileName) {
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


		} else {
			AXY.SingleImgSVActor.Alias.Game_Actor_prototype_performDamage.call(this);
		}
	}
};

/*Game_Battler.prototype.performRecovery = function () {
	SoundManager.playRecovery();
};*/
//Replace Actor default Recovery animation
AXY.SingleImgSVActor.Alias.Game_Actor_prototype_performRecovery = Game_Actor.prototype.performRecovery;
Game_Actor.prototype.performRecovery = function () {
	Game_Battler.prototype.performRecovery.call(this);
	if ($gameParty.inBattle()) {
		if (this.isAXYSingleImgSVActor === true && this.isDead() !== true) {
			//console.log('isAXYSingleImgSVActor dead');
			//console.log(this);

			//console.log($gameParty);
			//console.log($gameActors.actor(this._actorId));
			var actorId = this._actorId;
			SoundManager.playRecovery();
			//console.log(AXY.SingleImgSVActor.Param.SVActor[this._actorId]);
			var _metaClass = $gameActors.actor(actorId).currentClass().meta;
			var _metaActor = $dataActors[actorId].meta;

			var AXYSingleImgSVActorFileName = _metaActor.axysingle_recovery ? _metaActor.axysingle_recovery : _metaActor.axysingle;
			var AXYSingleImgSVActorScaleX = _metaClass.axysingle_recovery_scalex ? _metaClass.axysingle_recovery_scalex : _metaActor.axysingle_recovery_scalex ? _metaActor.axysingle_recovery_scalex : _metaActor.axysingle_scalex;
			var AXYSingleImgSVActorScaleY = _metaClass.axysingle_recovery_scaley ? _metaClass.axysingle_recovery_scaley : _metaActor.axysingle_recovery_scaley ? _metaActor.axysingle_recovery_scaley : _metaActor.axysingle_scaley;
			var AXYSingleImgSVActorRotation = _metaClass.axysingle_recovery_rotation ? _metaClass.axysingle_recovery_rotation : _metaActor.axysingle_recovery_rotation ? _metaActor.axysingle_recovery_rotation : _metaActor.axysingle_rotation;
			var AXYSingleImgSVActorHUE = _metaClass.axysingle_recovery_hue ? _metaClass.axysingle_recovery_hue : _metaActor.axysingle_recovery_hue ? _metaActor.axysingle_recovery_hue : _metaActor.axysingle_hue;

			if (AXYSingleImgSVActorScaleX) {
				AXY.SingleImgSVActor.Param.SVActor[actorId].scale.x = AXYSingleImgSVActorScaleX;
			}
			if (AXYSingleImgSVActorScaleY) {
				AXY.SingleImgSVActor.Param.SVActor[actorId].scale.y = AXYSingleImgSVActorScaleY;
			}
			if (AXYSingleImgSVActorRotation) {
				AXY.SingleImgSVActor.Param.SVActor[actorId].rotation = AXYSingleImgSVActorRotation;
			}
			//AXY.SingleImgSVActor.Param.SVActor[this._actorId].bitmap.alpha = 0.5;
			//AXY.SingleImgSVActor.Param.SVActor[this._actorId].bitmap.textColor = 'rgba(0,255,0,0)';

			if (AXYSingleImgSVActorFileName) {
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


		} else {
			AXY.SingleImgSVActor.Alias.Game_Actor_prototype_performRecovery.call(this);
		}
	}
};