//=============================================================================
// XueYu Plugins - Title Version
// XY_TitleVersion.js
// Version: 1.0
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.00 Display Version or Multiple lines of text in Title Screen.
 * @author XueYu Plugins
 *
 * @param DisplayVersion1
 * @desc Display version text from bottom to top? true/false
 * @default true
 *
 * @param FontSize1
 * @desc 
 * @default 16
 *
 * @param X1
 * @desc Offset Position for align left/center/right
 * @default -4
 *
 * @param Y1
 * @desc Screen's Y Position.
 * @default 624
 *
 * @param LineSpacing1
 * @desc 
 * @default 4
 *
 * @param Align1
 * @desc left/center/right
 * @default right
 *
 * @param OutlineColor1
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #000000
 *
 * @param OutlineWidth1
 * @desc
 * @default 3
 *
 * @param TextColor1
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #FFFFFF
 *
 * @param TextContent1
 * @desc break new line with '|'
 * @default by XY Plugins 2016|Ver 1.0
 *
 * @param DisplayVersion2
 * @desc Display version text from top to bottom? true/false
 * @default true
 *
 * @param FontSize2
 * @desc
 * @default 24
 *
 * @param X2
 * @desc Offset Position for align left/center/right
 * @default 8
 *
 * @param Y2
 * @desc Screen's Position
 * @default 8
 *
 * @param LineSpacing2
 * @desc 
 * @default 8
 *
 * @param Align2
 * @desc left/center/right
 * @default left
 *
 * @param OutlineColor2
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #000000
 *
 * @param OutlineWidth2
 * @desc
 * @default 3
 *
 * @param TextColor2
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #FFFFFF
 *
 * @param TextContent2
 * @desc break new line with '|'
 * @default XY Plugins 2016
 *
 * @param DisplayVersion3
 * @desc Display version text from top to bottom? true/false
 * @default true
 *
 * @param FontSize3
 * @desc
 * @default 48
 *
 * @param X3
 * @desc Offset Position for align left/center/right
 * @default 0
 *
 * @param Y3
 * @desc Screen's Position
 * @default 200
 *
 * @param LineSpacing3
 * @desc 
 * @default 8
 *
 * @param Align3
 * @desc left/center/right
 * @default center
 *
 * @param OutlineColor3
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default yellow
 *
 * @param OutlineWidth3
 * @desc
 * @default 3
 *
 * @param TextColor3
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default blue
 *
 * @param TextContent3
 * @desc break new line with '|'
 * @default XY Plugins 2016
 *
 * @param DisplayVersion4
 * @desc Display version text from top to bottom? true/false
 * @default true
 *
 * @param FontSize4
 * @desc
 * @default 16
 *
 * @param X4
 * @desc Offset Position for align left/center/right
 * @default 0
 *
 * @param Y4
 * @desc Screen's Position
 * @default 0
 *
 * @param LineSpacing4
 * @desc 
 * @default 0
 *
 * @param Align4
 * @desc left/center/right
 * @default right
 *
 * @param OutlineColor4
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #000000
 *
 * @param OutlineWidth4
 * @desc
 * @default 3
 *
 * @param TextColor4
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #FFFFFF
 *
 * @param TextContent4
 * @desc break new line with '|'
 * @default XY Plugins 2016
 *
 * @help
 * Introduction
 * This plugin allows you to place a "version" or Multiple lines of text 
 * to your home page at the title screen.
 */

// Imported
var Imported = Imported || {};
Imported.XY_TitleVersion = true;

// Parameter Variables
var XY = XY || {};
XY.TitleVersion = XY.TitleVersion || {};

XY.TitleVersion.Parameters = PluginManager.parameters('XY_TitleVersion');
XY.TitleVersion.Param = XY.TitleVersion.Param || {};

// DisplayVersion1
XY.TitleVersion.Param.DisplayVersion1 = XY.TitleVersion.Parameters['DisplayVersion1'].toLowerCase() === 'true';
XY.TitleVersion.Param.FontSize1 = parseInt(XY.TitleVersion.Parameters['FontSize1']);
XY.TitleVersion.Param.X1 = parseInt(XY.TitleVersion.Parameters['X1']);
XY.TitleVersion.Param.Y1 = parseInt(XY.TitleVersion.Parameters['Y1']);
XY.TitleVersion.Param.LineSpacing1 = parseInt(XY.TitleVersion.Parameters['LineSpacing1']);
XY.TitleVersion.Param.Align1 = XY.TitleVersion.Parameters['Align1'].toLowerCase();
XY.TitleVersion.Param.OutlineColor1 = String(XY.TitleVersion.Parameters['OutlineColor1']);
XY.TitleVersion.Param.OutlineWidth1 = parseInt(XY.TitleVersion.Parameters['OutlineWidth1']);
XY.TitleVersion.Param.TextColor1 = String(XY.TitleVersion.Parameters['TextColor1']);
XY.TitleVersion.Param.TextContent1 = String(XY.TitleVersion.Parameters['TextContent1']);
// DisplayVersion2
XY.TitleVersion.Param.DisplayVersion2 = XY.TitleVersion.Parameters['DisplayVersion2'].toLowerCase() === 'true';
XY.TitleVersion.Param.FontSize2 = parseInt(XY.TitleVersion.Parameters['FontSize2']);
XY.TitleVersion.Param.X2 = parseInt(XY.TitleVersion.Parameters['X2']);
XY.TitleVersion.Param.Y2 = parseInt(XY.TitleVersion.Parameters['Y2']);
XY.TitleVersion.Param.LineSpacing2 = parseInt(XY.TitleVersion.Parameters['LineSpacing2']);
XY.TitleVersion.Param.Align2 = XY.TitleVersion.Parameters['Align2'].toLowerCase();
XY.TitleVersion.Param.OutlineColor2 = String(XY.TitleVersion.Parameters['OutlineColor2']);
XY.TitleVersion.Param.OutlineWidth2 = parseInt(XY.TitleVersion.Parameters['OutlineWidth2']);
XY.TitleVersion.Param.TextColor2 = String(XY.TitleVersion.Parameters['TextColor2']);
XY.TitleVersion.Param.TextContent2 = String(XY.TitleVersion.Parameters['TextContent2']);
// DisplayVersion3
XY.TitleVersion.Param.DisplayVersion3 = XY.TitleVersion.Parameters['DisplayVersion3'].toLowerCase() === 'true';
XY.TitleVersion.Param.FontSize3 = parseInt(XY.TitleVersion.Parameters['FontSize3']);
XY.TitleVersion.Param.X3 = parseInt(XY.TitleVersion.Parameters['X3']);
XY.TitleVersion.Param.Y3 = parseInt(XY.TitleVersion.Parameters['Y3']);
XY.TitleVersion.Param.LineSpacing3 = parseInt(XY.TitleVersion.Parameters['LineSpacing3']);
XY.TitleVersion.Param.Align3 = XY.TitleVersion.Parameters['Align3'].toLowerCase();
XY.TitleVersion.Param.OutlineColor3 = String(XY.TitleVersion.Parameters['OutlineColor3']);
XY.TitleVersion.Param.OutlineWidth3 = parseInt(XY.TitleVersion.Parameters['OutlineWidth3']);
XY.TitleVersion.Param.TextColor3 = String(XY.TitleVersion.Parameters['TextColor3']);
XY.TitleVersion.Param.TextContent3 = String(XY.TitleVersion.Parameters['TextContent3']);
// DisplayVersion4
XY.TitleVersion.Param.DisplayVersion4 = XY.TitleVersion.Parameters['DisplayVersion4'].toLowerCase() === 'true';
XY.TitleVersion.Param.FontSize4 = parseInt(XY.TitleVersion.Parameters['FontSize4']);
XY.TitleVersion.Param.X4 = parseInt(XY.TitleVersion.Parameters['X4']);
XY.TitleVersion.Param.Y4 = parseInt(XY.TitleVersion.Parameters['Y4']);
XY.TitleVersion.Param.LineSpacing4 = parseInt(XY.TitleVersion.Parameters['LineSpacing4']);
XY.TitleVersion.Param.Align4 = XY.TitleVersion.Parameters['Align4'].toLowerCase();
XY.TitleVersion.Param.OutlineColor4 = String(XY.TitleVersion.Parameters['OutlineColor4']);
XY.TitleVersion.Param.OutlineWidth4 = parseInt(XY.TitleVersion.Parameters['OutlineWidth4']);
XY.TitleVersion.Param.TextColor4 = String(XY.TitleVersion.Parameters['TextColor4']);
XY.TitleVersion.Param.TextContent4 = String(XY.TitleVersion.Parameters['TextContent4']);

// Main
XY.TitleVersion.Scene_Title_Display_Version = Scene_Title.prototype.createForeground;
Scene_Title.prototype.createForeground = function() {
    XY.TitleVersion.Scene_Title_Display_Version.call(this);

	this._titleVersionSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
	this.addChild(this._titleVersionSprite);
	
	//draw text
	if (XY.TitleVersion.Param.DisplayVersion1 && XY.TitleVersion.Param.TextContent1 !== undefined) {
		this._titleVersionSprite.bitmap.outlineColor = XY.TitleVersion.Param.OutlineColor1;
		this._titleVersionSprite.bitmap.outlineWidth = XY.TitleVersion.Param.OutlineWidth1;
		this._titleVersionSprite.bitmap.fontSize = XY.TitleVersion.Param.FontSize1;
		this._titleVersionSprite.bitmap.textColor = XY.TitleVersion.Param.TextColor1;
		
		var y = XY.TitleVersion.Param.Y1;
		
		var versionText = XY.TitleVersion.Param.TextContent1.split("|");
		versionText.forEach(function(vt) {
			y -= XY.TitleVersion.Param.FontSize1 + XY.TitleVersion.Param.LineSpacing1;
			this._titleVersionSprite.bitmap.drawText(vt, XY.TitleVersion.Param.X1, y, Graphics.width, XY.TitleVersion.Param.FontSize1, XY.TitleVersion.Param.Align1);
		}, this);
	}
	
	if (XY.TitleVersion.Param.DisplayVersion2 && XY.TitleVersion.Param.TextContent2 !== undefined) {
		this._titleVersionSprite.bitmap.outlineColor = XY.TitleVersion.Param.OutlineColor2;
		this._titleVersionSprite.bitmap.outlineWidth = XY.TitleVersion.Param.OutlineWidth2;
		this._titleVersionSprite.bitmap.fontSize = XY.TitleVersion.Param.FontSize2;
		this._titleVersionSprite.bitmap.textColor = XY.TitleVersion.Param.TextColor2;
		
		var y = XY.TitleVersion.Param.Y2;
		
		var versionText = XY.TitleVersion.Param.TextContent2.split("|");
		versionText.forEach(function(vt) {
			this._titleVersionSprite.bitmap.drawText(vt, XY.TitleVersion.Param.X2, y, Graphics.width, XY.TitleVersion.Param.FontSize2, XY.TitleVersion.Param.Align2);
			// from top to bottom different from bottom to top, must display before change y. 
			y += XY.TitleVersion.Param.FontSize2 + XY.TitleVersion.Param.LineSpacing2;
		}, this);
	}
	
	if (XY.TitleVersion.Param.DisplayVersion3 && XY.TitleVersion.Param.TextContent3 !== undefined) {
		this._titleVersionSprite.bitmap.outlineColor = XY.TitleVersion.Param.OutlineColor3;
		this._titleVersionSprite.bitmap.outlineWidth = XY.TitleVersion.Param.OutlineWidth3;
		this._titleVersionSprite.bitmap.fontSize = XY.TitleVersion.Param.FontSize3;
		this._titleVersionSprite.bitmap.textColor = XY.TitleVersion.Param.TextColor3;
		
		var y = XY.TitleVersion.Param.Y3;
		
		var versionText = XY.TitleVersion.Param.TextContent3.split("|");
		versionText.forEach(function(vt) {
			this._titleVersionSprite.bitmap.drawText(vt, XY.TitleVersion.Param.X3, y, Graphics.width, XY.TitleVersion.Param.FontSize3, XY.TitleVersion.Param.Align3);
			// from top to bottom different from bottom to top, must display before change y. 
			y += XY.TitleVersion.Param.FontSize3 + XY.TitleVersion.Param.LineSpacing3;
		}, this);
	}
	
	if (XY.TitleVersion.Param.DisplayVersion4 && XY.TitleVersion.Param.TextContent4 !== undefined) {
		this._titleVersionSprite.bitmap.outlineColor = XY.TitleVersion.Param.OutlineColor4;
		this._titleVersionSprite.bitmap.outlineWidth = XY.TitleVersion.Param.OutlineWidth4;
		this._titleVersionSprite.bitmap.fontSize = XY.TitleVersion.Param.FontSize4;
		this._titleVersionSprite.bitmap.textColor = XY.TitleVersion.Param.TextColor4;
		
		var y = XY.TitleVersion.Param.Y4;
		
		var versionText = XY.TitleVersion.Param.TextContent4.split("|");
		versionText.forEach(function(vt) {
			this._titleVersionSprite.bitmap.drawText(vt, XY.TitleVersion.Param.X4, y, Graphics.width, XY.TitleVersion.Param.FontSize4, XY.TitleVersion.Param.Align4);
			// from top to bottom different from bottom to top, must display before change y. 
			y += XY.TitleVersion.Param.FontSize4 + XY.TitleVersion.Param.LineSpacing4;
		}, this);
	}
};