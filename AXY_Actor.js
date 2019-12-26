//=============================================================================
// A XueYu Plugins - Actor
// AXY_Actor.js
// Version: 1.02
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.02 Allows to change Actor's staff.
 * @author A XueYu Plugins
 *
 * @help
 * Introduction
 * This plugin allows to change Actor's staff.
 * Github: https://github.com/aaixy/rmmv-plugins
 *
 * Usage:
 * Write
 * <axy_actor_hue:100>
 * <axy_actor_mhp:10000000>
 * <axy_actor_mmp:10000000>
 * <axy_actor_matk:10000000>
 * <axy_actor_mdef:10000000>
 * <axy_actor_mmat:10000000>
 * <axy_actor_mmdf:10000000>
 * <axy_actor_magi:10000000>
 * <axy_actor_mluk:10000000>
 * <axy_actor_exp_basis:10000000>
 * <axy_actor_exp_extra:10000000>
 * <axy_actor_exp_acc_a:10000000>
 * <axy_actor_exp_acc_b:10000000>
 * <axy_actor_exp:10000000> //this will overwrite above four exp params and make level up linner.
 * if you want to set general then Write
 * <axy_actor_hp:10000000>
 * <axy_actor_mp:10000000>
 * <axy_actor_atk:10000000>
 * <axy_actor_def:10000000>
 * <axy_actor_mat:10000000>
 * <axy_actor_mdf:10000000>
 * <axy_actor_agi:10000000>
 * <axy_actor_luk:10000000>
 * to Actor or Class meta note box, Class has higher priority;
 * 
 * Example: 
 * not yet
 *
 * changelog
 * 1.02 2019.12.25
 * add: exp support;
 * 1.01 2019.12.22
 * add: face hue support;
 * add: character hue support;
 * 1.00 2019.12.12
 * first release;
 * 
 * @param mhp
 * @text Max HP
 * @desc Max HP, default: 9999
 * @type number
 * @min 1
 * @default 9999
 * 
 * @param mmp
 * @text Max MP
 * @desc Max MP, default: 9999
 * @type number
 * @min 0
 * @default 9999
 * 
 * @param matk
 * @text Max ATK
 * @desc Max ATK, default: 999
 * @type number
 * @min 0
 * @default 999
 * 
 * @param mdef
 * @text Max DEF
 * @desc Max DEF, default: 999
 * @type number
 * @min 0
 * @default 999
 * 
 * @param mmat
 * @text Max MAT
 * @desc Max MAT, default: 999
 * @type number
 * @min 0
 * @default 999
 * 
 * @param mmdf
 * @text Max MDF
 * @desc Max MDF, default: 999
 * @type number
 * @min 0
 * @default 999
 * 
 * @param magi
 * @text Max AGI
 * @desc Max AGI, default: 999
 * @type number
 * @min 0
 * @default 999
 * 
 * @param mluk
 * @text Max LUK
 * @desc Max LUK, default: 999
 * @type number
 * @min 0
 * @default 999
 * 
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Actor = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Actor = AXY.Actor || {};

AXY.Actor.Parameters = PluginManager.parameters('AXY_Actor');
AXY.Actor.Param = AXY.Actor.Param || {};
AXY.Actor.Alias = AXY.Actor.Alias || {};
AXY.Actor.Variables = AXY.Actor.Variables || {};

//=============================================================================
// Utils
//=============================================================================
// Create a utility function to parse complex parameters.
//=============================================================================
Utils.recursiveParse = function (param) {
	try {
		if (typeof JSON.parse(param) == "object") {
			return JSON.parse(param, function (key, value) {
				try {
					return this.recursiveParse(value);
				} catch (e) {
					return value;
				}
			}.bind(this));
		} else {
			return JSON.parse(param, function (key, value) {
				return value;
			}.bind(this));
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
Object.keys(AXY.Actor.Parameters).forEach(function (key) {
	return AXY.Actor.Param[key] = Utils.recursiveParse(AXY.Actor.Parameters[key]);
});

// Main
Game_Actor.prototype.expForLevel = function (level) {
	var _metaClass = this.currentClass().meta;
	var _metaActor = this.actor().meta;
	var _tmp = parseInt(_metaClass.axy_actor_exp) || parseInt(_metaActor.axy_actor_exp) || 0;
	if (_tmp) {
		return Math.round(_tmp * level);
	} else {
		var c = this.currentClass();
		var basis = parseInt(_metaClass.axy_actor_exp_basis) || parseInt(_metaActor.axy_actor_exp_basis) || c.expParams[0];
		var extra = parseInt(_metaClass.axy_actor_exp_extra) || parseInt(_metaActor.axy_actor_exp_extra) || c.expParams[1];
		var acc_a = parseInt(_metaClass.axy_actor_exp_acc_a) || parseInt(_metaActor.axy_actor_exp_acc_a) || c.expParams[2];
		var acc_b = parseInt(_metaClass.axy_actor_exp_acc_b) || parseInt(_metaActor.axy_actor_exp_acc_b) || c.expParams[3];
		return Math.round(basis * (Math.pow(level - 1, 0.9 + acc_a / 250)) * level *
			(level + 1) / (6 + Math.pow(level, 2) / 50 / acc_b) + (level - 1) * extra);
	}
};

Window_Base.prototype.drawActorFace = function (actor, x, y, width, height) {
	var _metaClass = actor.currentClass().meta;
	var _metaActor = actor.actor().meta;
	var _hue = parseInt(_metaClass.axy_actor_hue) || parseInt(_metaActor.axy_actor_hue) || 0;
	this.drawFace(actor.faceName(), actor.faceIndex(), x, y, width, height, _hue);
};

Window_Base.prototype.drawFace = function (faceName, faceIndex, x, y, width, height, hue) {
	width = width || Window_Base._faceWidth;
	height = height || Window_Base._faceHeight;
	var bitmap = ImageManager.loadFace(faceName, hue);
	var pw = Window_Base._faceWidth;
	var ph = Window_Base._faceHeight;
	var sw = Math.min(width, pw);
	var sh = Math.min(height, ph);
	var dx = Math.floor(x + Math.max(width - pw, 0) / 2);
	var dy = Math.floor(y + Math.max(height - ph, 0) / 2);
	var sx = faceIndex % 4 * pw + (pw - sw) / 2;
	var sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
	this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);
};
if (Imported.YEP_BattleStatusWindow) {
	Window_BattleStatus.prototype.drawFace = function (fn, fi, x, y, width, height, hue) {
		width = width || Window_Base._faceWidth;
		height = height || Window_Base._faceHeight;
		var bitmap = ImageManager.loadFace(fn, hue);
		var pw = Window_Base._faceWidth;
		var ph = Window_Base._faceHeight;
		var sw = Math.min(width, pw);
		var sh = Math.min(height, ph);
		var dx = Math.floor(x + Math.max(width - pw, 0) / 2);
		var dy = Math.floor(y + Math.max(height - ph, 0) / 2);
		var sx = fi % 4 * pw + (pw - sw) / 2;
		var sy = Math.floor(fi / 4) * ph + (ph - sh) / 2;
		this._faceContents.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy);
	};
}

Sprite_Character.prototype.setCharacterBitmap = function () {
	this.bitmap = ImageManager.loadCharacter(this._characterName, this._character._characterHue);
	this._isBigCharacter = ImageManager.isBigCharacter(this._characterName);
};
/*
Spriteset_Map.prototype.createCharacters = function () {
	this._characterSprites = [];
	$gameMap.events().forEach(function (event) {
		this._characterSprites.push(new Sprite_Character(event));
	}, this);
	$gameMap.vehicles().forEach(function (vehicle) {
		this._characterSprites.push(new Sprite_Character(vehicle));
	}, this);
	$gamePlayer.followers().reverseEach(function (follower) {

		this._characterSprites.push(new Sprite_Character(follower));
	}, this);
	this._characterSprites.push(new Sprite_Character($gamePlayer));
	for (var i = 0; i < this._characterSprites.length; i++) {
		this._tilemap.addChild(this._characterSprites[i]);
	}
};
Game_Actor.prototype.initImages = function () {
	var actor = this.actor();
	this._characterName = actor.characterName;
	this._characterIndex = actor.characterIndex;
	this._faceName = actor.faceName;
	this._faceIndex = actor.faceIndex;
	this._battlerName = actor.battlerName;

	var _metaClass = this.currentClass().meta;
	var _metaActor = this.actor().meta;
	var _hue = parseInt(_metaClass.axy_actor_hue) || parseInt(_metaActor.axy_actor_hue) || 0;
	this._hue = _hue;
	console.log(_hue);
	console.log(this._hue);
};
Game_Actor.prototype.characterHue = function () {
	return this._hue;
};*/

Game_CharacterBase.prototype.characterHue = function () {
	return this._characterHue;
};

Game_CharacterBase.prototype.setImage = function (characterName, characterIndex, characterHue) {
	this._tileId = 0;
	this._characterName = characterName;
	this._characterIndex = characterIndex;
	this._isObjectCharacter = ImageManager.isObjectCharacter(characterName);
	this._characterHue = characterHue;
};

Game_Player.prototype.refresh = function () {
	var actor = $gameParty.leader();
	var characterName = actor ? actor.characterName() : '';
	var characterIndex = actor ? actor.characterIndex() : 0;
	var _metaClass = actor.currentClass().meta;
	var _metaActor = actor.actor().meta;
	var _hue = parseInt(_metaClass.axy_actor_hue) || parseInt(_metaActor.axy_actor_hue) || 0;
	var characterHue = actor ? _hue : 0;
	this.setImage(characterName, characterIndex, characterHue);
	this._followers.refresh();
};

Game_Follower.prototype.refresh = function () {
	var characterName = this.isVisible() ? this.actor().characterName() : '';
	var characterIndex = this.isVisible() ? this.actor().characterIndex() : 0;
	var _metaClass = this.isVisible() ? this.actor().currentClass().meta : 0;
	var _metaActor = this.isVisible() ? this.actor().actor().meta : 0;
	var _hue = parseInt(_metaClass.axy_actor_hue) || parseInt(_metaActor.axy_actor_hue) || 0;
	var characterHue = this.isVisible() ? _hue : 0;
	this.setImage(characterName, characterIndex, characterHue);
};

//rmmv miss actor info, so these blow can not use hue except modify rmmv whoel core lower logic.
/*
Window_Base.prototype.drawActorCharacter = function (actor, x, y) {
	console.log(actor);
	var _metaClass = actor.currentClass().meta;
	var _metaActor = actor.actor().meta;
	var _hue = parseInt(_metaClass.axy_actor_hue) || parseInt(_metaActor.axy_actor_hue) || 0;
	this.drawCharacter(actor.characterName(), actor.characterIndex(), x, y, _hue);
};

Window_Base.prototype.drawCharacter = function (characterName, characterIndex, x, y, hue) {
	console.log(hue);
	var bitmap = ImageManager.loadCharacter(characterName, hue);
	var big = ImageManager.isBigCharacter(characterName);
	var pw = bitmap.width / (big ? 3 : 12);
	var ph = bitmap.height / (big ? 4 : 8);
	var n = characterIndex;
	var sx = (n % 4 * 3 + 1) * pw;
	var sy = (Math.floor(n / 4) * 4) * ph;
	this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
};

Window_SavefileList.prototype.drawPartyCharacters = function (info, x, y) {
	console.log(info);
	if (info.characters) {
		for (var i = 0; i < info.characters.length; i++) {
			var data = info.characters[i];
			this.drawCharacter(data[0], data[1], x + i * 48, y, 100);
		}
	}
};*/

Game_Party.prototype.charactersForSavefile = function () {
	return this.battleMembers().map(function (actor) {
		return [actor.characterName(), actor.characterIndex()];
	});
};

Game_Actor.prototype.paramMax = function (paramId) {
	var _metaClass = this.currentClass().meta;
	var _metaActor = this.actor().meta;
	switch (paramId) {
		case 0: // MHP
			var _tmp = parseInt(_metaClass.axy_actor_mhp) || parseInt(_metaActor.axy_actor_mhp) || AXY.Actor.Param.mhp;
			return _tmp;
		case 1: // MMP
			var _tmp = parseInt(_metaClass.axy_actor_mmp) || parseInt(_metaActor.axy_actor_mmp) || AXY.Actor.Param.mmp;
			return _tmp;
		case 2: //ATK
			var _tmp = parseInt(_metaClass.axy_actor_matk) || parseInt(_metaActor.axy_actor_matk) || AXY.Actor.Param.matk;
			return _tmp;
		case 3: //DEF
			var _tmp = parseInt(_metaClass.axy_actor_mdef) || parseInt(_metaActor.axy_actor_mdef) || AXY.Actor.Param.mdef;
			return _tmp;
		case 4: //MAT
			var _tmp = parseInt(_metaClass.axy_actor_mmat) || parseInt(_metaActor.axy_actor_mmat) || AXY.Actor.Param.mmat;
			return _tmp;
		case 5: //MDF
			var _tmp = parseInt(_metaClass.axy_actor_mmdf) || parseInt(_metaActor.axy_actor_mmdf) || AXY.Actor.Param.mmdf;
			return _tmp;
		case 6: //AGI
			var _tmp = parseInt(_metaClass.axy_actor_magi) || parseInt(_metaActor.axy_actor_magi) || AXY.Actor.Param.magi;
			return _tmp;
		case 7: //LUK
			var _tmp = parseInt(_metaClass.axy_actor_mluk) || parseInt(_metaActor.axy_actor_mluk) || AXY.Actor.Param.mluk;
			return _tmp;
	}
	return Game_Battler.prototype.paramMax.call(this, paramId);
};

Game_Actor.prototype.paramBase = function (paramId) {
	var _metaClass = this.currentClass().meta;
	var _metaActor = this.actor().meta;
	switch (paramId) {
		case 0: // MHP
			var _mtmp = parseInt(_metaClass.axy_actor_mhp) || parseInt(_metaActor.axy_actor_mhp);
			var _tmp = parseInt(_metaClass.axy_actor_hp) || parseInt(_metaActor.axy_actor_hp);
			if (_tmp) {
				var _t = _tmp;
			} else if (_mtmp) {
				var _t = (this._level + 1) * _mtmp / 100;
			} else {
				var _t = this.currentClass().params[paramId][this._level];
			}
			return _t;
		case 1: // MMP
			var _mtmp = parseInt(_metaClass.axy_actor_mmp) || parseInt(_metaActor.axy_actor_mmp);
			var _tmp = parseInt(_metaClass.axy_actor_mp) || parseInt(_metaActor.axy_actor_mp);
			if (_tmp) {
				var _t = _tmp;
			} else if (_mtmp) {
				var _t = (this._level + 1) * _mtmp / 100;
			} else {
				var _t = this.currentClass().params[paramId][this._level];
			}
			return _t;
		case 2: //ATK
			var _mtmp = parseInt(_metaClass.axy_actor_matk) || parseInt(_metaActor.axy_actor_matk);
			var _tmp = parseInt(_metaClass.axy_actor_atk) || parseInt(_metaActor.axy_actor_atk);
			if (_tmp) {
				var _t = _tmp;
			} else if (_mtmp) {
				var _t = (this._level + 1) * _mtmp / 100;
			} else {
				var _t = this.currentClass().params[paramId][this._level];
			}
			return _t;
		case 3: //DEF
			var _mtmp = parseInt(_metaClass.axy_actor_mdef) || parseInt(_metaActor.axy_actor_mdef);
			var _tmp = parseInt(_metaClass.axy_actor_def) || parseInt(_metaActor.axy_actor_def);
			if (_tmp) {
				var _t = _tmp;
			} else if (_mtmp) {
				var _t = (this._level + 1) * _mtmp / 100;
			} else {
				var _t = this.currentClass().params[paramId][this._level];
			}
			return _t;
		case 4: //MAT
			var _mtmp = parseInt(_metaClass.axy_actor_mmat) || parseInt(_metaActor.axy_actor_mmat);
			var _tmp = parseInt(_metaClass.axy_actor_mat) || parseInt(_metaActor.axy_actor_mat);
			if (_tmp) {
				var _t = _tmp;
			} else if (_mtmp) {
				var _t = (this._level + 1) * _mtmp / 100;
			} else {
				var _t = this.currentClass().params[paramId][this._level];
			}
			return _t;
		case 5: //MDF
			var _mtmp = parseInt(_metaClass.axy_actor_mmdf) || parseInt(_metaActor.axy_actor_mmdf);
			var _tmp = parseInt(_metaClass.axy_actor_mdf) || parseInt(_metaActor.axy_actor_mdf);
			if (_tmp) {
				var _t = _tmp;
			} else if (_mtmp) {
				var _t = (this._level + 1) * _mtmp / 100;
			} else {
				var _t = this.currentClass().params[paramId][this._level];
			}
			return _t;
		case 6: //AGI
			var _mtmp = parseInt(_metaClass.axy_actor_magi) || parseInt(_metaActor.axy_actor_magi);
			var _tmp = parseInt(_metaClass.axy_actor_agi) || parseInt(_metaActor.axy_actor_agi);
			if (_tmp) {
				var _t = _tmp;
			} else if (_mtmp) {
				var _t = (this._level + 1) * _mtmp / 100;
			} else {
				var _t = this.currentClass().params[paramId][this._level];
			}
			return _t;
		case 7: //LUK
			var _mtmp = parseInt(_metaClass.axy_actor_mluk) || parseInt(_metaActor.axy_actor_mluk);
			var _tmp = parseInt(_metaClass.axy_actor_luk) || parseInt(_metaActor.axy_actor_luk);
			if (_tmp) {
				var _t = _tmp;
			} else if (_mtmp) {
				var _t = (this._level + 1) * _mtmp / 100;
			} else {
				var _t = this.currentClass().params[paramId][this._level];
			}
			return _t;
	}
	return this.currentClass().params[paramId][this._level];
};