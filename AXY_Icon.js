//=============================================================================
// A XueYu Plugins - Icon
// AXY_Icon.js
// Version: 1.01
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.01 Display large icon of item, armor, weapon.
 * @author A XueYu Plugins
 *
 * @help
 * Introduction
 * This plugin allows display large icon of item, armor, weapon.
 * Depends on YEP_ItemCore.js and place after it.
 * Github: https://github.com/aaixy/rmmv-plugins
 *
 * Usage:
 * Write
 * <axy_icon:weapon>
 * and/or these unnecessary:
 * <axy_icon_hue:100>, if not define, default by plugin params;
 * to meta note box,
 * such as item, weapon, armor;
 * This plugin must be place after YEP_ItemCore.js;
 *
 * changelog
 * 1.01 2019.11.29
 * add: mass hacker yep item core;
 * 1.00 2019.11.27
 * first release.
 *
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 *
 * @param iconFolder
 * @text Icon Folder
 * @desc Icon Folder. default: img/icon
 * @type file
 * @default img/icon
 *
 * @param defaultHue
 * @text Default Hue
 * @desc Default Hue. default: 0
 * @type number
 * @default 0
 * 
 * @param width
 * @text Width
 * @desc Icon Width. Set 0 to use icon origin width. default: 0
 * @type number
 * @default 0
 * 
 * @param height
 * @text Height
 * @desc Icon Height. Set 0 to use icon origin height. default: 0
 * @type number
 * @default 0
 * 
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Icon = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Icon = AXY.Icon || {};

AXY.Icon.Parameters = PluginManager.parameters('AXY_Icon');
AXY.Icon.Param = AXY.Icon.Param || {};
AXY.Icon.Alias = AXY.Icon.Alias || {};
AXY.Icon.Variables = AXY.Icon.Variables || {};

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
Object.keys(AXY.Icon.Parameters).forEach(function (key) {
	return (AXY.Icon.Param[key] = Utils.recursiveParse(
		AXY.Icon.Parameters[key]
	));
});

// Main
(function () {
	if (Imported.YEP_ItemCore) {



		//=============================================================================
		// Scene_Item Update
		//=============================================================================

		//if (Yanfly.Param.ItemSceneItem) {

		//=============================================================================
		// Window_ItemCategory
		//=============================================================================

		//Yanfly.Item.Window_ItemCategory_windowWidth =
		//	Window_ItemCategory.prototype.windowWidth;
		Window_ItemCategory.prototype.windowWidth = function () {
			if (SceneManager._scene instanceof Scene_Item) return Graphics.boxWidth / 2;
			return Yanfly.Item.Window_ItemCategory_windowWidth.call(this);
		};

		//Yanfly.Item.Window_ItemCategory_numVisibleRows =
		//	Window_ItemCategory.prototype.numVisibleRows;
		Window_ItemCategory.prototype.numVisibleRows = function () {
			if (SceneManager._scene instanceof Scene_Item) return 2;
			return Yanfly.Item.Window_ItemCategory_numVisibleRows.call(this);
		};

		//Yanfly.Item.Window_ItemCategory_maxCols = Window_ItemCategory.prototype.maxCols;
		Window_ItemCategory.prototype.maxCols = function () {
			if (SceneManager._scene instanceof Scene_Item) return 4;
			return Yanfly.Item.Window_ItemCategory_maxCols.call(this);
		};

		//Yanfly.Item.Window_ItemCategory_itemTextAlign =
		//	Window_ItemCategory.prototype.itemTextAlign;
		Window_ItemCategory.prototype.itemTextAlign = function () {
			if (SceneManager._scene instanceof Scene_Item) {
				return Yanfly.Param.ItemCmdAlign;
			}
			return Yanfly.Item.Window_ItemCategory_itemTextAlign.call(this);
		};

		//=============================================================================
		// Window_ItemList
		//=============================================================================

		//Yanfly.Item.Window_ItemList_initialize = Window_ItemList.prototype.initialize;
		Window_ItemList.prototype.initialize = function (x, y, width, height) {
			if (SceneManager._scene instanceof Scene_Item) {
				width = Graphics.boxWidth / 2;
			}
			Yanfly.Item.Window_ItemList_initialize.call(this, x, y, width, height);
		};

		//Yanfly.Item.Window_ItemList_maxCols = Window_ItemList.prototype.maxCols;
		Window_ItemList.prototype.maxCols = function () {
			if (SceneManager._scene instanceof Scene_Item) return 1;
			return Yanfly.Item.Window_ItemList_maxCols.call(this);
		};

		//Yanfly.Item.Window_ItemList_isEnabled = Window_ItemList.prototype.isEnabled;
		Window_ItemList.prototype.isEnabled = function (item) {
			if (!item) return false;
			if (SceneManager._scene instanceof Scene_Item) return true;
			return Yanfly.Item.Window_ItemList_isEnabled.call(this, item);
		};

		Window_ItemList.prototype.setStatusWindow = function (statusWindow) {
			this._statusWindow = statusWindow;
			this.update();
		};

		Window_ItemList.prototype.setInfoWindow = function (infoWindow) {
			this._infoWindow = infoWindow;
			this.update();
		};

		//Yanfly.Item.Window_ItemList_updateHelp = Window_ItemList.prototype.updateHelp;
		Window_ItemList.prototype.updateHelp = function () {
			Yanfly.Item.Window_ItemList_updateHelp.call(this);
			if (SceneManager._scene instanceof Scene_Item && this._statusWindow) {
				this._statusWindow.setItem(this.item());
			}
			if (SceneManager._scene instanceof Scene_Item && this._infoWindow) {
				this._infoWindow.setItem(this.item());
			}
		};

		//=============================================================================
		// Window_ItemStatus
		//=============================================================================

		function Window_ItemStatus() {
			this.initialize.apply(this, arguments);
		}

		Window_ItemStatus.prototype = Object.create(Window_Base.prototype);
		Window_ItemStatus.prototype.constructor = Window_ItemStatus;

		Window_ItemStatus.prototype.initialize = function (x, y, width, height) {
			Window_Base.prototype.initialize.call(this, x, y, width, height);
			this._item = null;
			this.deactivate();
			this.refresh();
		};

		Window_ItemStatus.prototype.setItem = function (item) {
			if (this._item === item) return;
			this._item = item;
			this.refresh();
		};

		Window_ItemStatus.prototype.refresh = function () {
			this.contents.clear();
			this.drawDarkRectEntries();
			if (!this._item) return;
			this.contents.fontSize = Yanfly.Param.ItemFontSize;
			this.drawItemEntry();
		};

		Window_ItemStatus.prototype.drawDarkRectEntries = function () {
			var rect = new Rectangle();
			if (Yanfly.Param.ItemShowIcon) {
				rect.width = this._width / 2;
				rect.height = this._width / 2;
				//console.log(rect.width)
				//console.log(rect.height)
				this.drawDarkRect(rect.x, rect.y, rect.width, rect.height);
				rect.width = (this._width - rect.width) / 1;
			} else {
				rect.width = this._width / 1;
			}
			rect.height = this.lineHeight() - this._margin / 2;
			for (var i = 0; i < 8; ++i) {
				rect = this.getRectPosition(rect, i);
				this.drawDarkRect(rect.x, rect.y, rect.width, rect.height);
			}
		};

		Window_ItemStatus.prototype.drawDarkRect = function (dx, dy, dw, dh) {
			var color = this.gaugeBackColor();
			this.changePaintOpacity(false);
			this.contents.fillRect(dx + 0, dy + 0, dw - 0, dh - 0, color);
			this.changePaintOpacity(true);
		};

		Window_ItemStatus.prototype.getRectPosition = function (rect, i) {
			if (i % 1 === 0) {
				if (Yanfly.Param.ItemShowIcon) {
					rect.x = this._width / 2 + this._margin / 2;
				} else {
					rect.x = 0;
				}
				rect.y = i / 1 * (this.lineHeight() - this._margin / 2 + this._margin / 2);
			} else {
				if (Yanfly.Param.ItemShowIcon) {
					rect.x = this._width / 2 + rect.width;
				} else {
					rect.x = rect.width;
				}
			}
			return rect;
		};

		Window_ItemStatus.prototype.drawItemEntry = function () {
			var item = this._item;
			if (Yanfly.Param.ItemShowIcon) this.drawItemIcon(item);
			if (DataManager.isItem(item)) this.drawItemInfo(item);
			if (DataManager.isWeapon(item)) this.drawEquipInfo(item);
			if (DataManager.isArmor(item)) this.drawEquipInfo(item);
		};

		Window_ItemStatus.prototype.drawItemIcon = function () {
			this.drawLargeIcon();
		};

		var _iconfolder = AXY.Icon.Param.iconFolder.split('/');
		AXY.Icon.Variables.iconFolder = _iconfolder[0] + '/' + _iconfolder[1] + '/';
		//console.log(AXY.Icon.Variables.iconFolder);
		Window_ItemStatus.prototype.drawLargeIcon = function () {
			var iconIndex = this._item.iconIndex;
			//console.log(this._item);
			if (this._item.meta.axy_icon) {
				var bitmap = ImageManager.loadBitmap(AXY.Icon.Variables.iconFolder, this._item.meta.axy_icon, this._item.meta.axy_icon_hue || AXY.Icon.Param.defaultHue, true);
				//console.log(this._item.meta.axy_icon);

			} else {
				var bitmap = ImageManager.loadSystem('IconSet');
			}
			/*var pw = Window_Base._iconWidth;
			var ph = Window_Base._iconHeight;
			var sx = iconIndex % 16 * pw;
			var sy = Math.floor(iconIndex / 16) * ph;
			var dw = AXY.Icon.Param.width;
			var dh = AXY.Icon.Param.height;
			console.log(this._width);
			var dx = (this._width / 2 - dw) / 2;
			var dy = (this._width / 2 - dh) / 2;
			this.contents._context.imageSmoothingEnabled = false;*/
			if (this._item.meta.axy_icon) {
				//var pw = Window_Base._iconWidth;
				//var ph = Window_Base._iconHeight;
				//var sx = iconIndex % 16 * pw;
				//var sy = Math.floor(iconIndex / 16) * ph;
				if (AXY.Icon.Param.width > 0 && AXY.Icon.Param.height > 0) {
					var dw = AXY.Icon.Param.width;
					var dh = AXY.Icon.Param.height;
				} else {
					var _max = Math.max(bitmap.width, bitmap.height);
					//var _min = Math.min(bitmap.width, bitmap.height);
					if (_max > this._width / 2) {
						var _r = this._width / 2 / _max;
						if (_max == bitmap.width) {
							var dw = Math.floor(this._width / 2);
							var dh = Math.floor(bitmap.height * _r);
						} else {
							var dh = Math.floor(this._width / 2);
							var dw = Math.floor(bitmap.width * _r);
						}
					} else {
						var dw = bitmap.width;
						var dh = bitmap.height;
					}
				}
				//console.log(this._width);
				var dx = (this._width / 2 - dw) / 2;
				var dy = (this._width / 2 - dh) / 2;
				//console.log('r=' + _r);
				//console.log('max=' + _max);
				//console.log('dw=' + dw);
				//console.log('dh=' + dh);
				//console.log('dx=' + dx);
				//console.log('dy=' + dy);
				this.contents._context.imageSmoothingEnabled = false;
				this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, dx, dy, dw, dh);
			} else {
				var pw = Window_Base._iconWidth;
				var ph = Window_Base._iconHeight;
				var sx = iconIndex % 16 * pw;
				var sy = Math.floor(iconIndex / 16) * ph;
				var dw = AXY.Icon.Param.width > 0 ? AXY.Icon.Param.width : Window_Base._iconWidth; //32
				var dh = AXY.Icon.Param.height > 0 ? AXY.Icon.Param.height : Window_Base._iconHeight; //32
				//console.log(this._width);
				var dx = (this._width / 2 - dw) / 2;
				var dy = (this._width / 2 - dh) / 2;
				this.contents._context.imageSmoothingEnabled = false;
				this.contents.blt(bitmap, sx, sy, pw, ph, dx, dy, dw, dh);
			}
			this.contents._context.imageSmoothingEnabled = true;
		};

		Window_ItemStatus.prototype.drawEquipInfo = function (item) {
			var rect = new Rectangle();
			if (eval(Yanfly.Param.ItemShowIcon)) {
				rect.width = (this.contents.width - Window_Base._faceWidth) / 2;
			} else {
				rect.width = this.contents.width / 2;
			}
			for (var i = 0; i < 8; ++i) {
				rect = this.getRectPosition(rect, i);
				var dx = rect.x + this.textPadding();
				var dw = rect.width - this.textPadding() * 2;
				this.changeTextColor(this.systemColor());
				this.drawText(TextManager.param(i), dx, rect.y, dw);
				this.changeTextColor(this.paramchangeTextColor(item.params[i]));
				var text = Yanfly.Util.toGroup(item.params[i]);
				if (item.params[i] >= 0) text = '+' + text;
				if (text === '+0') this.changePaintOpacity(false);
				this.drawText(text, dx, rect.y, dw, 'right');
				this.changePaintOpacity(true);
			}
		};

		Window_ItemStatus.prototype.drawItemInfo = function (item) {
			var rect = new Rectangle();
			if (eval(Yanfly.Param.ItemShowIcon)) {
				rect.width = (this.contents.width - Window_Base._faceWidth) / 2;
			} else {
				rect.width = this.contents.width / 2;
			}
			for (var i = 0; i < 8; ++i) {
				rect = this.getRectPosition(rect, i);
				var dx = rect.x + this.textPadding();
				var dw = rect.width - this.textPadding() * 2;
				this.changeTextColor(this.systemColor());
				var text = this.getItemInfoCategory(i);
				this.drawText(text, dx, rect.y, dw);
				this.drawItemData(i, dx, rect.y, dw);
			}
		};

		Window_ItemStatus.prototype.getItemInfoCategory = function (i) {
			var fmt = Yanfly.Param.ItemRecoverFmt;
			if (i === 0) return fmt.format(TextManager.param(0));
			if (i === 1) return fmt.format(TextManager.hp);
			if (i === 2) return fmt.format(TextManager.param(1));
			if (i === 3) return fmt.format(TextManager.mp);
			if (i === 4) return Yanfly.Param.ItemAddState;
			if (i === 5) return Yanfly.Param.ItemRemoveState;
			if (i === 6) return Yanfly.Param.ItemAddBuff;
			if (i === 7) return Yanfly.Param.ItemRemoveBuff;
			return '';
		};

		Window_ItemStatus.prototype.drawItemData = function (i, dx, dy, dw) {
			if (!this._item) return;
			var effect;
			var value = '---';
			var pre = '';
			var text = '';
			var icons = [];
			if (i === 0) {
				effect = this.getEffect(Game_Action.EFFECT_RECOVER_HP);
				value = (effect) ? effect.value1 : '---';
				if (value === 0) value = '---';
				if (value !== '---' && value !== 0) value *= 100;
			}
			if (i === 1) {
				effect = this.getEffect(Game_Action.EFFECT_RECOVER_HP);
				value = (effect) ? effect.value2 : '---';
				if (value === 0) value = '---';
			}
			if (i === 2) {
				effect = this.getEffect(Game_Action.EFFECT_RECOVER_MP);
				value = (effect) ? effect.value1 : '---';
				if (value === 0) value = '---';
				if (value !== '---' && value !== 0) value *= 100;
			}
			if (i === 3) {
				effect = this.getEffect(Game_Action.EFFECT_RECOVER_MP);
				value = (effect) ? effect.value2 : '---';
				if (value === 0) value = '---';
			}
			if (i >= 4) {
				icons = this.getItemIcons(i, icons);
			}
			this.changeTextColor(this.normalColor());
			if (value === '---') {
				this.changePaintOpacity(false);
			} else if (i < 4) {
				if (value > 0) pre = '+';
				value = Yanfly.Util.toGroup(parseInt(value));
				if ([0, 2].contains(i)) text = '%';
			}
			if (icons.length > 0) {
				this.changePaintOpacity(true);
				dx = dx + dw - icons.length * Window_Base._iconWidth;
				dx += this.textPadding() - 2;
				for (var j = 0; j < icons.length; ++j) {
					var icon = icons[j];
					this.drawIcon(icon, dx, dy + 2);
					dx += Window_Base._iconWidth;
				}
			} else {
				text = pre + value + text;
				this.drawText(text, dx, dy, dw, 'right');
				this.changePaintOpacity(true);
			}
		};

		Window_ItemStatus.prototype.getEffect = function (code) {
			var targetEffect;
			this._item.effects.forEach(function (effect) {
				if (effect.code === code) targetEffect = effect;
			}, this);
			return targetEffect;
		};

		Window_ItemStatus.prototype.getItemIcons = function (i, array) {
			this._item.effects.forEach(function (effect) {
				if (i === 4 && effect.code === Game_Action.EFFECT_ADD_STATE) {
					var state = $dataStates[effect.dataId];
					if (state && state.iconIndex !== 0) array.push(state.iconIndex);
				}
				if (i === 5 && effect.code === Game_Action.EFFECT_REMOVE_STATE) {
					var state = $dataStates[effect.dataId];
					if (state && state.iconIndex !== 0) array.push(state.iconIndex);
				}
				if (i === 6 && effect.code === Game_Action.EFFECT_ADD_BUFF) {
					var icon = Game_BattlerBase.ICON_BUFF_START + effect.dataId;
					array.push(icon);
				}
				if (i === 6 && effect.code === Game_Action.EFFECT_ADD_DEBUFF) {
					var icon = Game_BattlerBase.ICON_DEBUFF_START + effect.dataId;
					array.push(icon);
				}
				if (i === 7 && effect.code === Game_Action.EFFECT_REMOVE_BUFF) {
					var icon = Game_BattlerBase.ICON_BUFF_START + effect.dataId;
					array.push(icon);
				}
				if (i === 7 && effect.code === Game_Action.EFFECT_REMOVE_DEBUFF) {
					var icon = Game_BattlerBase.ICON_DEBUFF_START + effect.dataId;
					array.push(icon);
				}
			}, this);
			array = array.slice(0, Yanfly.Param.ItemMaxIcons);
			return array;
		};

		//=============================================================================
		// Window_ItemInfo
		//=============================================================================

		function Window_ItemInfo() {
			this.initialize.apply(this, arguments);
		}

		Window_ItemInfo.prototype = Object.create(Window_Base.prototype);
		Window_ItemInfo.prototype.constructor = Window_ItemInfo;

		Window_ItemInfo.prototype.initialize = function (x, y, width, height) {
			Window_Base.prototype.initialize.call(this, x, y, width, height);
			this._item = null;
			this.deactivate();
			this.refresh();
		};

		Window_ItemInfo.prototype.setItem = function (item) {
			if (this._item === item) return;
			this._item = item;
			this.refresh();
		};

		Window_ItemInfo.prototype.refresh = function () {
			this.contents.clear();
			var dy = 0;
			if (!this._item) return dy;
			this.preInfoEval();
			dy = this.drawPreItemInfo(dy);
			dy = this.drawItemInfo(dy);
			dy = this.drawItemInfoA(dy);
			dy = this.drawItemInfoB(dy);
			dy = this.drawItemInfoC(dy);
			dy = this.drawItemInfoD(dy);
			dy = this.drawItemInfoE(dy);
			return this.drawItemInfoF(dy);
		};

		Window_ItemInfo.prototype.preInfoEval = function () {
			var item = this._item;
			if (item.infoEval === undefined) {
				item.infoEval = DataManager.getBaseItem(item).infoEval;
			}
			if (item.infoEval === '') return;
			var weapon = this._item;
			var armor = this._item;
			var s = $gameSwitches._data;
			var v = $gameVariables._data;
			var code = item.infoEval;
			try {
				eval(code);
			} catch (e) {
				Yanfly.Util.displayError(e, code, 'ITEM WINDOW PRE INFO EVAL ERROR');
			}
		};

		Window_ItemInfo.prototype.drawPreItemInfo = function (dy) {
			return dy;
		};

		Window_ItemInfo.prototype.drawItemInfo = function (dy) {
			var dx = this.textPadding();
			var dw = this.contents.width - this.textPadding() * 2;
			this.resetFontSettings();
			this.drawItemName(this._item, dx, dy, dw);
			return dy + this.lineHeight() - this._margin / 2;
		};

		Window_ItemInfo.prototype.drawItemInfoA = function (dy) {
			dy = this.drawInfoTextTop(dy);
			return dy;
		};

		Window_ItemInfo.prototype.drawItemInfoB = function (dy) {
			return dy;
		};

		Window_ItemInfo.prototype.drawItemInfoC = function (dy) {
			return dy;
		};

		Window_ItemInfo.prototype.drawItemInfoD = function (dy) {
			return dy;
		};

		Window_ItemInfo.prototype.drawItemInfoE = function (dy) {
			return dy;
		};

		Window_ItemInfo.prototype.drawItemInfoF = function (dy) {
			dy = this.drawInfoTextBottom(dy);
			return dy;
		};

		Window_ItemInfo.prototype.drawDarkRect = function (dx, dy, dw, dh) {
			var color = this.gaugeBackColor();
			this.changePaintOpacity(false);
			this.contents.fillRect(dx + 1, dy + 1, dw - 2, dh - 2, color);
			this.changePaintOpacity(true);
		};

		Window_ItemInfo.prototype.drawInfoTextTop = function (dy) {
			var item = this._item;
			if (item.infoTextTop === undefined) {
				item.infoTextTop = DataManager.getBaseItem(item).infoTextTop;
			}
			if (item.infoTextTop === '') return dy;
			var info = item.infoTextTop.split(/[\r\n]+/);
			for (var i = 0; i < info.length; ++i) {
				var line = info[i];
				this.resetFontSettings();
				this.drawTextEx(line, this.textPadding(), dy);
				dy += this.contents.fontSize + 8;
			}
			return dy;
		};

		Window_ItemInfo.prototype.drawInfoTextBottom = function (dy) {
			var item = this._item;
			if (item.infoTextBottom === undefined) {
				item.infoTextBottom = DataManager.getBaseItem(item).infoTextBottom;
			}
			if (item.infoTextBottom === '') return dy;
			var info = item.infoTextBottom.split(/[\r\n]+/);
			for (var i = 0; i < info.length; ++i) {
				var line = info[i];
				this.resetFontSettings();
				this.drawTextEx(line, this.textPadding(), dy);
				dy += this.contents.fontSize + 8;
			}
			return dy;
		};

		//=============================================================================
		// Window_ItemActionCommand
		//=============================================================================

		function Window_ItemActionCommand() {
			this.initialize.apply(this, arguments);
		}

		Window_ItemActionCommand.prototype = Object.create(Window_Command.prototype);
		Window_ItemActionCommand.prototype.constructor = Window_ItemActionCommand;

		Window_ItemActionCommand.prototype.initialize = function (x, y) {
			this._windowHeight = Graphics.boxHeight - y;
			Window_Command.prototype.initialize.call(this, x, y);
			this._item = null;
			this.hide();
			this.deactivate();
		};

		Window_ItemActionCommand.prototype.windowWidth = function () {
			return Graphics.boxWidth / 2;
		};

		Window_ItemActionCommand.prototype.setItem = function (item) {
			this._item = item;
			this.refresh();
			this.show();
			this.activate();
			this.select(0);
		};

		Window_ItemActionCommand.prototype.windowHeight = function () {
			return this._windowHeight;
		};

		Window_ItemActionCommand.prototype.makeCommandList = function () {
			if (!this._item) return;
			this.addUseCommand();
			this.addCustomCommandsA();
			this.addCustomCommandsB();
			this.addCustomCommandsC();
			this.addCustomCommandsD();
			this.addCustomCommandsE();
			this.addCustomCommandsF();
			this.addCancelCommand();
		};

		Window_ItemActionCommand.prototype.addUseCommand = function () {
			var enabled = this.isEnabled(this._item);
			var fmt = Yanfly.Param.ItemUseCmd;
			text = '\\i[' + this._item.iconIndex + ']';
			if (this._item.textColor !== undefined) {
				text += '\\c[' + this._item.textColor + ']';
			}
			text += this._item.name;
			text = fmt.format(text);
			this.addCommand(text, 'use', enabled);
		};

		Window_ItemActionCommand.prototype.isEnabled = function (item) {
			if (!item) return false;
			return $gameParty.canUse(item);
		};

		Window_ItemActionCommand.prototype.addCustomCommandsA = function () {};

		Window_ItemActionCommand.prototype.addCustomCommandsB = function () {};

		Window_ItemActionCommand.prototype.addCustomCommandsC = function () {};

		Window_ItemActionCommand.prototype.addCustomCommandsD = function () {};

		Window_ItemActionCommand.prototype.addCustomCommandsE = function () {};

		Window_ItemActionCommand.prototype.addCustomCommandsF = function () {};

		Window_ItemActionCommand.prototype.addCancelCommand = function () {
			this.addCommand(TextManager.cancel, 'cancel');
		};

		Window_ItemActionCommand.prototype.drawItem = function (index) {
			var rect = this.itemRectForText(index);
			var align = this.itemTextAlign();
			this.resetTextColor();
			this.changePaintOpacity(this.isCommandEnabled(index));
			this.drawTextEx(this.commandName(index), rect.x, rect.y);
		};

		//=============================================================================
		// Scene_Item
		//=============================================================================

		//Yanfly.Item.Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
		Scene_Item.prototype.createItemWindow = function () {
			Yanfly.Item.Scene_Item_createItemWindow.call(this);
			this.createStatusWindow();
			this.createInfoWindow();
			this.createActionWindow();
			this._categoryWindow.setHandler('cancel', this.exitScene.bind(this));
		};

		Scene_Item.prototype.createStatusWindow = function () {
			var wx = this._categoryWindow.width;
			var wy = this._helpWindow.height;
			var ww = Graphics.boxWidth - wx;
			var wh = (Graphics.boxWidth - wx) / 2;
			//console.log('ww=' + ww);
			//console.log('Graphics.boxWidth=' + Graphics.boxWidth);
			this._statusWindow = new Window_ItemStatus(wx, wy, ww, wh);
			this._itemWindow.setStatusWindow(this._statusWindow);
			this.addWindow(this._statusWindow);
		};

		Scene_Item.prototype.createInfoWindow = function () {
			var wx = this._itemWindow.width;
			var wy = this._statusWindow.height;
			var ww = Graphics.boxWidth - wx;
			var wh = Graphics.boxHeight - this._statusWindow.height;
			this._infoWindow = new Window_ItemInfo(wx, wy, ww, wh);
			this._itemWindow.setInfoWindow(this._infoWindow);
			this.addWindow(this._infoWindow);
		};

		Scene_Item.prototype.createActionWindow = function () {
			var wy = this._itemWindow.y;
			this._itemActionWindow = new Window_ItemActionCommand(0, wy);
			this._itemActionWindow.setHandler('use', this.onActionUse.bind(this));
			this._itemActionWindow.setHandler('cancel', this.onActionCancel.bind(this));
			this.addWindow(this._itemActionWindow);
		};

		Scene_Item.prototype.isCursorLeft = function () {
			return true;
		};

		Scene_Item.prototype.onItemOk = function () {
			var item = this.item();
			this._itemActionWindow.setItem(item);
		};

		//Yanfly.Item.Scene_Item_onItemCancel = Scene_Item.prototype.onItemCancel;
		Scene_Item.prototype.onItemCancel = function () {
			Yanfly.Item.Scene_Item_onItemCancel.call(this);
			this._statusWindow.setItem(null);
			this._infoWindow.setItem(null);
		};

		Scene_Item.prototype.onActionUse = function () {
			this._itemActionWindow.hide();
			this._itemActionWindow.deactivate();
			$gameParty.setLastItem(this.item());
			this.determineItem();
		};

		Scene_Item.prototype.onActionCancel = function () {
			this._itemActionWindow.hide();
			this._itemActionWindow.deactivate();
			this._itemWindow.activate();
		};

		//Yanfly.Item.Scene_Item_applyItem = Scene_Item.prototype.applyItem;
		Scene_Item.prototype.applyItem = function () {
			Yanfly.Item.Scene_Item_applyItem.call(this);
			if (DataManager.isIndependent(this.item())) this.onActorCancel();
		};

		Scene_Item.prototype.exitScene = function () {
			var length = $gameParty.members().length;
			for (var i = 0; i < length; ++i) {
				var member = $gameParty.members()[i];
				if (member) member.refresh();
			}
			this.popScene();
		};

		//=============================================================================
		// Scene_Item Update
		//=============================================================================

	}; // End Scene_Item
	//}
})();