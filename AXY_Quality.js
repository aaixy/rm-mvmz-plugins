//=============================================================================
// A XueYu Plugins - Quality
// AXY_Quality.js
// Version: 1.02
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.02 Display colorful name of actor, class, enemy, item, armor, weapon, skill, etc.
 * @author A XueYu Plugins
 *
 * @help
 * Introduction
 * This plugin allows you to set colorful name of actor, class, enemy, item, armor, weapon, skill, etc.
 * Github: https://github.com/aaixy/rmmv-plugins
 *
 * Usage:
 * Write <quality:3> to meta note box,
 * such as actor, class, item, weapon, armor, enemy, state;
 * This plugin must be place before YEP_ItemCore.js and BOB_SocketsEx.js;
 * I have to hacked YEP_ItemCore.js about drawEquippedActor to draw current name color;
 * If you use YEP_VictoryAftermath.js, the order is no matter.
 * But if you use MOG_BattleResult.js or MOG_TreasurePopup.js, 
 * This plugin must be place after MOG_BattleResult.js and MOG_TreasurePopup.js;
 * actor color> class color;
 * default class or actor color is index by param default set;
 * default others color is index by param default set;
 * script:
 * AXY.Quality.get(type, id);
 * return quality value or null;
 * AXY.Quality.set(type, id, value);
 * return true or false;
 * type can be: actor, class, item, weapon, armor, enemy;
 * Example:
 * AXY.Quality.get('actor', 1);
 * AXY.Quality.set('actor', 1, 2);
 *
 * changelog
 * 1.02 2019.11.25
 * add: compatible with MOG_BattleResult.js v1.1
 * add: compatible with MOG_TreasurePopup.js v1.1
 * 1.01 2019.11.24
 * add: param: default;
 * 1.00 2019.11.19
 * first release.
 *
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 *
 * @param quality
 * @text Quality Settings
 * @desc name and color.
 * @type struct<qualityStruct>[]
 * @default ["{\"name\":\"Incomplete\",\"color\":\"rgba(255,255,255,1)\"}","{\"name\":\"Damaged\",\" Color\":\"rgba(128,255,28,1)\"}","{\"name\":\"Ordinary\",\"color\":\"rgba(57,185,255,1)\"} ","{\"name\":\"Good\",\"color\":\"rgba(255,255,0,1)\"}","{\"name\":\"Exquisite\" ,\"color\":\"rgba(128,100,254,1)\"}","{\"name\":\"Excellent\",\"color\":\"rgba(255,0,100,1) \"}","{\"name\":\"Best\",\"color\":\"rgba(255,40,255,1)\"}","{\"name\":\" Perfect\",\"color\":\"rgba(255,128,0,1)\"}","{\"name\":\"Legend\",\"color\":\"rgba(255,128 ,0,1)\"}","{\"name\":\"Epic\",\"color\":\"rgba(255,128,0,1)\"}"]
 *
 * @param default
 * @text Default Quality
 * @desc Default Quality. default: 2
 * @type number
 * @default 2
 */

/*~struct~qualityStruct:
 * @param name
 * @text Name
 * @desc Name it.
 * @type text
 * @default
 *
 * @param color
 * @text Color
 * @desc Color it. format: rgba(0~255,0~255,0~255,0~1), #000000~#ffffff, red, green, blue, yellow, etc.
 * @type text
 * @default
 *
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Quality = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Quality = AXY.Quality || {};

AXY.Quality.Parameters = PluginManager.parameters('AXY_Quality');
AXY.Quality.Param = AXY.Quality.Param || {};
AXY.Quality.Alias = AXY.Quality.Alias || {};
AXY.Quality.Variables = AXY.Quality.Variables || {};
var RJO = RJO || {};
RJO.IQ = RJO.IQ || {};
RJO.HE = RJO.HE || {};

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
Object.keys(AXY.Quality.Parameters).forEach(function (key) {
	return (AXY.Quality.Param[key] = Utils.recursiveParse(
		AXY.Quality.Parameters[key]
	));
});

// Main
(function () {
	AXY.Quality.get = function (type, id) {
		switch (type) {
			case 'actor':
				return $gameActors.actor(id).actor().meta.quality;
			case 'class':
				return $gameActors.actor(id).currentClass().meta.quality;
			case 'item':
				return $dataItems[id].meta.quality;
			case 'weapon':
				return $dataWeapons[id].meta.quality;
			case 'armor':
				return $$dataArmors[id].meta.quality;
			case 'enemy':
				return $dataEnemies[id].meta.quality;
			default:
				return null;
		}
	};

	AXY.Quality.set = function (type, id, value) {
		switch (type) {
			case 'actor':
				$gameActors.actor(id).actor().meta.quality = value;
				break;
			case 'class':
				$gameActors.actor(id).currentClass().meta.quality = value;
				break;
			case 'item':
				$dataItems[id].meta.quality = value;
				break;
			case 'weapon':
				$dataWeapons[id].meta.quality = value;
				break;
			case 'armor':
				$$dataArmors[id].meta.quality = value;
				break;
			case 'enemy':
				$dataEnemies[id].meta.quality = value;
				break;
			default:
				return false;
		}
		return true;
	};

	RJO.IQ.getItemExtraDescParams2 = RJO.HE.getItemExtraDescParams2;
	RJO.HE.normalcolor = function (item) {
		//console.log(item.meta);
		return AXY.Quality.Param.quality[
			item.meta.quality || AXY.Quality.Param.default
		].color;
	};
	RJO.HE.namecolor = function (item) {
		//console.log(item.meta);
		return AXY.Quality.Param.quality[
			item.meta.quality || AXY.Quality.Param.default
		].color;
	};
	RJO.HE.getItemExtraDescParams2 = function (item, type) {
		//console.log(item.meta);
		RJO.IQ.getItemExtraDescParams2.call(this, item, type);
		var text =
			'<pos=AD text=品质：' +
			AXY.Quality.Param.quality[
				item.meta.quality || AXY.Quality.Param.default
			].name +
			' size=18 color=normalcolor line=false align=0>';
		this.processExtraDescParams(item, text);
	};

	Window_Base.prototype.drawActorName = function (actor, x, y, width) {
		width = width || 168;
		var _color = AXY.Quality.Param.quality[AXY.Quality.Param.default].color;
		if (this.hpColor(actor) == this.normalColor()) {
			if (actor.actor().meta.quality) {
				_color =
					AXY.Quality.Param.quality[actor.actor().meta.quality].color;
			} else if (actor.currentClass().meta.quality) {
				_color =
					AXY.Quality.Param.quality[actor.currentClass().meta.quality]
					.color;
			} else {
				_color =
					AXY.Quality.Param.quality[AXY.Quality.Param.default].color;
			}
		} else {
			_color = this.hpColor(actor);
		}
		this.changeTextColor(_color);
		this.drawText(actor.name(), x, y, width);
	};

	Window_Base.prototype.drawActorClass = function (actor, x, y, width) {
		width = width || 168;
		//this.resetTextColor();
		this.changeTextColor(
			AXY.Quality.Param.quality[
				actor.currentClass().meta.quality || AXY.Quality.Param.default
			].color
		);
		this.drawText(actor.currentClass().name, x, y, width);
	};

	Window_BattleEnemy.prototype.drawItem = function (index) {
		//this.resetTextColor();
		this.changeTextColor(
			AXY.Quality.Param.quality[
				$dataEnemies[this._enemies[index]._enemyId].meta.quality ||
				AXY.Quality.Param.default
			].color
		);
		var name = this._enemies[index].name();
		var rect = this.itemRectForText(index);
		this.drawText(name, rect.x, rect.y, rect.width);
	};

	Window_Base.prototype.drawItemName = function (item, x, y, width) {
		width = width || 312;
		//console.log(item);
		if (item) {
			var iconBoxWidth = Window_Base._iconWidth + 4;
			//this.resetTextColor();
			this.changeTextColor(
				AXY.Quality.Param.quality[
					item.meta.quality || AXY.Quality.Param.default
				].color
			);
			this.drawIcon(item.iconIndex, x + 2, y + 2);
			this.drawText(item.name, x + iconBoxWidth, y, width - iconBoxWidth);
		}
	};

	Window_ItemList.prototype.drawItemNumber = function (item, x, y, width) {
		if (this.needsNumber()) {
			this.resetTextColor();
			this.drawText(':', x, y, width - this.textWidth('00'), 'right');
			this.drawText($gameParty.numItems(item), x, y, width, 'right');
		}
	};

	Sprite_ItemHelp.prototype.standardLineColor = function () {
		//console.log(this);
		return this.item ?
			AXY.Quality.Param.quality[
				this.item.meta.quality || AXY.Quality.Param.default
			].color :
			RJO.HE.ItemDescLineColor;
		//return AXY.Quality.Param.quality[this.item.meta.quality || 0].color;
	};

	if (Imported.MOG_TreasurePopup) {
		//==============================
		// * refresh Name
		//==============================
		TreasureIcons.prototype.refreshName = function () {
			this._name.bitmap.clear();
			var name = this._item ? this._item.name + " x " + this._amount : this._amount;
			//console.log(this._item);
			if (this._item) {
				this._name.bitmap.textColor =
					AXY.Quality.Param.quality[
						this._item.meta.quality || AXY.Quality.Param.default
					].color;
			}
			this._name.bitmap.drawText(name, 0, 0, 145, 32);
		};
	}

	if (Imported.MOG_BattleResult) {
		//==============================
		// * Add ICon
		//==============================
		BattleResult.prototype.addIcon = function (sprite, data) {
			var icon = new Sprite(this._icon_img);
			var w = Window_Base._iconWidth;
			var h = Window_Base._iconHeight;
			var sx = data.iconIndex % 16 * w;
			var sy = Math.floor(data.iconIndex / 16) * h;
			icon.setFrame(sx, sy, w, h);
			sprite.addChild(icon);
			var name = new Sprite(new Bitmap(160, 32));
			//console.log(data);
			name.bitmap.textColor =
				AXY.Quality.Param.quality[
					data.meta.quality || AXY.Quality.Param.default
				].color;
			name.bitmap.drawText(data.name, 0, 0, 160, 32);
			name.x = w + 4;
			sprite.addChild(name);
		};
		//==============================
		// * Create Actor Name
		//==============================
		BattleResult.prototype.createActorName = function () {
			this._name = new Sprite(new Bitmap(140, 32));
			this._name.opacity = 0;
			//console.log(this._actor);
			var _color = AXY.Quality.Param.quality[AXY.Quality.Param.default].color;
			if (this._actor.actor().meta.quality) {
				_color =
					AXY.Quality.Param.quality[this._actor.actor().meta.quality].color;
			} else if (this._actor.currentClass().meta.quality) {
				_color =
					AXY.Quality.Param.quality[this._actor.currentClass().meta.quality]
					.color;
			} else {
				_color =
					AXY.Quality.Param.quality[AXY.Quality.Param.default].color;
			}
			this._name.bitmap.textColor = _color;
			this._name.bitmap.drawText(this._actor._name, 0, 0, 140, 32);
			this._name.x = Moghunter.bresult_name_x;
			this._name.y = Moghunter.bresult_name_y;
			this.addChild(this._name);
		};
	}
})();