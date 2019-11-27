//=============================================================================
// A XueYu Plugins - Icon
// AXY_Icon.js
// Version: 1.00
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.00 Display large icon of item, armor, weapon.
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
			var pw = Window_Base._iconWidth;
			var ph = Window_Base._iconHeight;
			var sx = iconIndex % 16 * pw;
			var sy = Math.floor(iconIndex / 16) * ph;
			var dw = Yanfly.Param.ItemIconSize;
			var dh = Yanfly.Param.ItemIconSize;
			var dx = (Window_Base._faceWidth - dw) / 2;
			var dy = (Window_Base._faceHeight - dh) / 2;
			this.contents._context.imageSmoothingEnabled = false;
			if (this._item.meta.axy_icon) {
				this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, dx, dy, dw, dh);
			} else {
				this.contents.blt(bitmap, sx, sy, pw, ph, dx, dy, dw, dh);
			}
			this.contents._context.imageSmoothingEnabled = true;
		};
	}
})();