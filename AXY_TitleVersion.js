//=============================================================================
// A XueYu Plugins - Title Version
// AXY_TitleVersion.js
// Version: 1.02
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.02 Display Version or Multiple lines of text in Title Screen.
 * @author A XueYu Plugins
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
 * @desc break new line with '|', Formulas are allowed.
 * @default by AXY Plugins 2016|Ver 1.0
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
 * @desc break new line with '|', Formulas are allowed.
 * @default AXY Plugins 2016
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
 * @desc break new line with '|', Formulas are allowed.
 * @default AXY Plugins 2016
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
 * @desc break new line with '|', Formulas are allowed.
 * @default AXY Plugins 2016
 *
 * @help
 * Introduction
 * This plugin allows you to place a "version" or Multiple lines of text 
 * to your home page at the title screen.
 * 
 * changelog
 * 1.02 2019.12.15
 * fix: eval incompatiable with |;
 * 1.01 2019.9.26
 * add eval on text, so formulas are allowed.
 * change xy to axy;
 * change license from BSD to MIT;
 * 1.0 2016.12.10
 * first release.
 */

// Imported
var Imported = Imported || {};
Imported.AXY_TitleVersion = true;

// Parameter Variables
var AXY = AXY || {};
AXY.TitleVersion = AXY.TitleVersion || {};

AXY.TitleVersion.Parameters = PluginManager.parameters('AXY_TitleVersion');
AXY.TitleVersion.Param = AXY.TitleVersion.Param || {};

// DisplayVersion1
AXY.TitleVersion.Param.DisplayVersion1 = AXY.TitleVersion.Parameters['DisplayVersion1'].toLowerCase() === 'true';
AXY.TitleVersion.Param.FontSize1 = parseInt(AXY.TitleVersion.Parameters['FontSize1']);
AXY.TitleVersion.Param.X1 = parseInt(AXY.TitleVersion.Parameters['X1']);
AXY.TitleVersion.Param.Y1 = parseInt(AXY.TitleVersion.Parameters['Y1']);
AXY.TitleVersion.Param.LineSpacing1 = parseInt(AXY.TitleVersion.Parameters['LineSpacing1']);
AXY.TitleVersion.Param.Align1 = AXY.TitleVersion.Parameters['Align1'].toLowerCase();
AXY.TitleVersion.Param.OutlineColor1 = String(AXY.TitleVersion.Parameters['OutlineColor1']);
AXY.TitleVersion.Param.OutlineWidth1 = parseInt(AXY.TitleVersion.Parameters['OutlineWidth1']);
AXY.TitleVersion.Param.TextColor1 = String(AXY.TitleVersion.Parameters['TextColor1']);
AXY.TitleVersion.Param.TextContent1 = String(AXY.TitleVersion.Parameters['TextContent1']);
// DisplayVersion2
AXY.TitleVersion.Param.DisplayVersion2 = AXY.TitleVersion.Parameters['DisplayVersion2'].toLowerCase() === 'true';
AXY.TitleVersion.Param.FontSize2 = parseInt(AXY.TitleVersion.Parameters['FontSize2']);
AXY.TitleVersion.Param.X2 = parseInt(AXY.TitleVersion.Parameters['X2']);
AXY.TitleVersion.Param.Y2 = parseInt(AXY.TitleVersion.Parameters['Y2']);
AXY.TitleVersion.Param.LineSpacing2 = parseInt(AXY.TitleVersion.Parameters['LineSpacing2']);
AXY.TitleVersion.Param.Align2 = AXY.TitleVersion.Parameters['Align2'].toLowerCase();
AXY.TitleVersion.Param.OutlineColor2 = String(AXY.TitleVersion.Parameters['OutlineColor2']);
AXY.TitleVersion.Param.OutlineWidth2 = parseInt(AXY.TitleVersion.Parameters['OutlineWidth2']);
AXY.TitleVersion.Param.TextColor2 = String(AXY.TitleVersion.Parameters['TextColor2']);
AXY.TitleVersion.Param.TextContent2 = String(AXY.TitleVersion.Parameters['TextContent2']);
// DisplayVersion3
AXY.TitleVersion.Param.DisplayVersion3 = AXY.TitleVersion.Parameters['DisplayVersion3'].toLowerCase() === 'true';
AXY.TitleVersion.Param.FontSize3 = parseInt(AXY.TitleVersion.Parameters['FontSize3']);
AXY.TitleVersion.Param.X3 = parseInt(AXY.TitleVersion.Parameters['X3']);
AXY.TitleVersion.Param.Y3 = parseInt(AXY.TitleVersion.Parameters['Y3']);
AXY.TitleVersion.Param.LineSpacing3 = parseInt(AXY.TitleVersion.Parameters['LineSpacing3']);
AXY.TitleVersion.Param.Align3 = AXY.TitleVersion.Parameters['Align3'].toLowerCase();
AXY.TitleVersion.Param.OutlineColor3 = String(AXY.TitleVersion.Parameters['OutlineColor3']);
AXY.TitleVersion.Param.OutlineWidth3 = parseInt(AXY.TitleVersion.Parameters['OutlineWidth3']);
AXY.TitleVersion.Param.TextColor3 = String(AXY.TitleVersion.Parameters['TextColor3']);
AXY.TitleVersion.Param.TextContent3 = String(AXY.TitleVersion.Parameters['TextContent3']);
// DisplayVersion4
AXY.TitleVersion.Param.DisplayVersion4 = AXY.TitleVersion.Parameters['DisplayVersion4'].toLowerCase() === 'true';
AXY.TitleVersion.Param.FontSize4 = parseInt(AXY.TitleVersion.Parameters['FontSize4']);
AXY.TitleVersion.Param.X4 = parseInt(AXY.TitleVersion.Parameters['X4']);
AXY.TitleVersion.Param.Y4 = parseInt(AXY.TitleVersion.Parameters['Y4']);
AXY.TitleVersion.Param.LineSpacing4 = parseInt(AXY.TitleVersion.Parameters['LineSpacing4']);
AXY.TitleVersion.Param.Align4 = AXY.TitleVersion.Parameters['Align4'].toLowerCase();
AXY.TitleVersion.Param.OutlineColor4 = String(AXY.TitleVersion.Parameters['OutlineColor4']);
AXY.TitleVersion.Param.OutlineWidth4 = parseInt(AXY.TitleVersion.Parameters['OutlineWidth4']);
AXY.TitleVersion.Param.TextColor4 = String(AXY.TitleVersion.Parameters['TextColor4']);
AXY.TitleVersion.Param.TextContent4 = String(AXY.TitleVersion.Parameters['TextContent4']);

// Main
AXY.TitleVersion.Scene_Title_Display_Version = Scene_Title.prototype.createForeground;
Scene_Title.prototype.createForeground = function () {
	AXY.TitleVersion.Scene_Title_Display_Version.call(this);

	this._titleVersionSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
	this.addChild(this._titleVersionSprite);

	//draw text
	if (AXY.TitleVersion.Param.DisplayVersion1 && AXY.TitleVersion.Param.TextContent1 !== undefined) {
		this._titleVersionSprite.bitmap.outlineColor = AXY.TitleVersion.Param.OutlineColor1;
		this._titleVersionSprite.bitmap.outlineWidth = AXY.TitleVersion.Param.OutlineWidth1;
		this._titleVersionSprite.bitmap.fontSize = AXY.TitleVersion.Param.FontSize1;
		this._titleVersionSprite.bitmap.textColor = AXY.TitleVersion.Param.TextColor1;

		var y = AXY.TitleVersion.Param.Y1;

		var versionText = AXY.TitleVersion.Param.TextContent1.split("|");
		versionText.forEach(function (vt) {
			y -= AXY.TitleVersion.Param.FontSize1 + AXY.TitleVersion.Param.LineSpacing1;
			this._titleVersionSprite.bitmap.drawText(vt, AXY.TitleVersion.Param.X1, y, Graphics.width, AXY.TitleVersion.Param.FontSize1, AXY.TitleVersion.Param.Align1);
		}, this);
	}

	if (AXY.TitleVersion.Param.DisplayVersion2 && AXY.TitleVersion.Param.TextContent2 !== undefined) {
		this._titleVersionSprite.bitmap.outlineColor = AXY.TitleVersion.Param.OutlineColor2;
		this._titleVersionSprite.bitmap.outlineWidth = AXY.TitleVersion.Param.OutlineWidth2;
		this._titleVersionSprite.bitmap.fontSize = AXY.TitleVersion.Param.FontSize2;
		this._titleVersionSprite.bitmap.textColor = AXY.TitleVersion.Param.TextColor2;

		var y = AXY.TitleVersion.Param.Y2;

		var versionText = AXY.TitleVersion.Param.TextContent2.split("|");
		versionText.forEach(function (vt) {
			this._titleVersionSprite.bitmap.drawText(vt, AXY.TitleVersion.Param.X2, y, Graphics.width, AXY.TitleVersion.Param.FontSize2, AXY.TitleVersion.Param.Align2);
			// from top to bottom different from bottom to top, must display before change y. 
			y += AXY.TitleVersion.Param.FontSize2 + AXY.TitleVersion.Param.LineSpacing2;
		}, this);
	}

	if (AXY.TitleVersion.Param.DisplayVersion3 && AXY.TitleVersion.Param.TextContent3 !== undefined) {
		this._titleVersionSprite.bitmap.outlineColor = AXY.TitleVersion.Param.OutlineColor3;
		this._titleVersionSprite.bitmap.outlineWidth = AXY.TitleVersion.Param.OutlineWidth3;
		this._titleVersionSprite.bitmap.fontSize = AXY.TitleVersion.Param.FontSize3;
		this._titleVersionSprite.bitmap.textColor = AXY.TitleVersion.Param.TextColor3;

		var y = AXY.TitleVersion.Param.Y3;

		var versionText = AXY.TitleVersion.Param.TextContent3.split("|");
		versionText.forEach(function (vt) {
			this._titleVersionSprite.bitmap.drawText(vt, AXY.TitleVersion.Param.X3, y, Graphics.width, AXY.TitleVersion.Param.FontSize3, AXY.TitleVersion.Param.Align3);
			// from top to bottom different from bottom to top, must display before change y. 
			y += AXY.TitleVersion.Param.FontSize3 + AXY.TitleVersion.Param.LineSpacing3;
		}, this);
	}

	if (AXY.TitleVersion.Param.DisplayVersion4 && AXY.TitleVersion.Param.TextContent4 !== undefined) {
		this._titleVersionSprite.bitmap.outlineColor = AXY.TitleVersion.Param.OutlineColor4;
		this._titleVersionSprite.bitmap.outlineWidth = AXY.TitleVersion.Param.OutlineWidth4;
		this._titleVersionSprite.bitmap.fontSize = AXY.TitleVersion.Param.FontSize4;
		this._titleVersionSprite.bitmap.textColor = AXY.TitleVersion.Param.TextColor4;

		var y = AXY.TitleVersion.Param.Y4;

		var versionText = eval(AXY.TitleVersion.Param.TextContent4).split("|");
		versionText.forEach(function (vt) {
			this._titleVersionSprite.bitmap.drawText(vt, AXY.TitleVersion.Param.X4, y, Graphics.width, AXY.TitleVersion.Param.FontSize4, AXY.TitleVersion.Param.Align4);
			// from top to bottom different from bottom to top, must display before change y. 
			y += AXY.TitleVersion.Param.FontSize4 + AXY.TitleVersion.Param.LineSpacing4;
		}, this);
	}
};