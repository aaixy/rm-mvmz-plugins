//=============================================================================
// XueYu Plugins - Title Splash
// XY_TitleSplash.js
// Version: 1.0
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.00 Display Splash Multiple lines of text in Title Screen.
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
 * @default by XY Plugins 2016|Splash 1.0
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
 * @param SplashDuration
 * @desc 
 * @default 60
 *
 * @param SplashFadeSpeed
 * @desc 
 * @default 2
 *
 * @help
 * Introduction
 * This plugin allows you to place a Splash Multiple lines of text 
 * to your boot page before the title screen.
 */

// Imported
var Imported = Imported || {};
Imported.XY_TitleSplash = true;

// Parameter Variables
var XY = XY || {};
XY.TitleSplash = XY.TitleSplash || {};

XY.TitleSplash.Parameters = PluginManager.parameters('XY_TitleSplash');
XY.TitleSplash.Param = XY.TitleSplash.Param || {};

// DisplayVersion1
XY.TitleSplash.Param.DisplayVersion1 = XY.TitleSplash.Parameters['DisplayVersion1'].toLowerCase() === 'true';
XY.TitleSplash.Param.FontSize1 = parseInt(XY.TitleSplash.Parameters['FontSize1']);
XY.TitleSplash.Param.X1 = parseInt(XY.TitleSplash.Parameters['X1']);
XY.TitleSplash.Param.Y1 = parseInt(XY.TitleSplash.Parameters['Y1']);
XY.TitleSplash.Param.LineSpacing1 = parseInt(XY.TitleSplash.Parameters['LineSpacing1']);
XY.TitleSplash.Param.Align1 = XY.TitleSplash.Parameters['Align1'].toLowerCase();
XY.TitleSplash.Param.OutlineColor1 = String(XY.TitleSplash.Parameters['OutlineColor1']);
XY.TitleSplash.Param.OutlineWidth1 = parseInt(XY.TitleSplash.Parameters['OutlineWidth1']);
XY.TitleSplash.Param.TextColor1 = String(XY.TitleSplash.Parameters['TextColor1']);
XY.TitleSplash.Param.TextContent1 = String(XY.TitleSplash.Parameters['TextContent1']);
// DisplayVersion2
XY.TitleSplash.Param.DisplayVersion2 = XY.TitleSplash.Parameters['DisplayVersion2'].toLowerCase() === 'true';
XY.TitleSplash.Param.FontSize2 = parseInt(XY.TitleSplash.Parameters['FontSize2']);
XY.TitleSplash.Param.X2 = parseInt(XY.TitleSplash.Parameters['X2']);
XY.TitleSplash.Param.Y2 = parseInt(XY.TitleSplash.Parameters['Y2']);
XY.TitleSplash.Param.LineSpacing2 = parseInt(XY.TitleSplash.Parameters['LineSpacing2']);
XY.TitleSplash.Param.Align2 = XY.TitleSplash.Parameters['Align2'].toLowerCase();
XY.TitleSplash.Param.OutlineColor2 = String(XY.TitleSplash.Parameters['OutlineColor2']);
XY.TitleSplash.Param.OutlineWidth2 = parseInt(XY.TitleSplash.Parameters['OutlineWidth2']);
XY.TitleSplash.Param.TextColor2 = String(XY.TitleSplash.Parameters['TextColor2']);
XY.TitleSplash.Param.TextContent2 = String(XY.TitleSplash.Parameters['TextContent2']);
// DisplayVersion3
XY.TitleSplash.Param.DisplayVersion3 = XY.TitleSplash.Parameters['DisplayVersion3'].toLowerCase() === 'true';
XY.TitleSplash.Param.FontSize3 = parseInt(XY.TitleSplash.Parameters['FontSize3']);
XY.TitleSplash.Param.X3 = parseInt(XY.TitleSplash.Parameters['X3']);
XY.TitleSplash.Param.Y3 = parseInt(XY.TitleSplash.Parameters['Y3']);
XY.TitleSplash.Param.LineSpacing3 = parseInt(XY.TitleSplash.Parameters['LineSpacing3']);
XY.TitleSplash.Param.Align3 = XY.TitleSplash.Parameters['Align3'].toLowerCase();
XY.TitleSplash.Param.OutlineColor3 = String(XY.TitleSplash.Parameters['OutlineColor3']);
XY.TitleSplash.Param.OutlineWidth3 = parseInt(XY.TitleSplash.Parameters['OutlineWidth3']);
XY.TitleSplash.Param.TextColor3 = String(XY.TitleSplash.Parameters['TextColor3']);
XY.TitleSplash.Param.TextContent3 = String(XY.TitleSplash.Parameters['TextContent3']);
// DisplayVersion4
XY.TitleSplash.Param.DisplayVersion4 = XY.TitleSplash.Parameters['DisplayVersion4'].toLowerCase() === 'true';
XY.TitleSplash.Param.FontSize4 = parseInt(XY.TitleSplash.Parameters['FontSize4']);
XY.TitleSplash.Param.X4 = parseInt(XY.TitleSplash.Parameters['X4']);
XY.TitleSplash.Param.Y4 = parseInt(XY.TitleSplash.Parameters['Y4']);
XY.TitleSplash.Param.LineSpacing4 = parseInt(XY.TitleSplash.Parameters['LineSpacing4']);
XY.TitleSplash.Param.Align4 = XY.TitleSplash.Parameters['Align4'].toLowerCase();
XY.TitleSplash.Param.OutlineColor4 = String(XY.TitleSplash.Parameters['OutlineColor4']);
XY.TitleSplash.Param.OutlineWidth4 = parseInt(XY.TitleSplash.Parameters['OutlineWidth4']);
XY.TitleSplash.Param.TextColor4 = String(XY.TitleSplash.Parameters['TextColor4']);
XY.TitleSplash.Param.TextContent4 = String(XY.TitleSplash.Parameters['TextContent4']);
// Fade
XY.TitleSplash.Param.SplashDuration = Number(XY.TitleSplash.Parameters['SplashDuration'] || 60);
XY.TitleSplash.Param.SplashFadeSpeed = Number(XY.TitleSplash.Parameters['SplashFadeSpeed'] || 2);

// Main
XY.TitleSplash.Scene_Boot_Display_Splash = Scene_Boot.prototype.start
Scene_Boot.prototype.start = function() {
	if (!DataManager.isBattleTest() && !DataManager.isEventTest()) {
	   SceneManager.goto(XY_TitleSplash_Scene_Splash_Screen);
	   return
    }
	XY.TitleSplash.Scene_Boot_Display_Splash.call(this);
};

function XY_TitleSplash_Scene_Splash_Screen() {
    this.initialize.apply(this, arguments);
}
XY_TitleSplash_Scene_Splash_Screen.prototype = Object.create(Scene_Base.prototype);
XY_TitleSplash_Scene_Splash_Screen.prototype.constructor = XY_TitleSplash_Scene_Splash_Screen;

XY_TitleSplash_Scene_Splash_Screen.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

XY_TitleSplash_Scene_Splash_Screen.prototype.create = function() {	
    Scene_Base.prototype.create.call(this);
	this._splashData = [0,0, Math.max(XY.TitleSplash.Param.SplashDuration,1),Math.max(XY.TitleSplash.Param.SplashFadeSpeed, 1)];
    this._splashSprite = [];

	//draw bitmap in sprite
	if (XY.TitleSplash.Param.DisplayVersion1 && XY.TitleSplash.Param.TextContent1 !== undefined) {
		this._titleSplashSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		//do not display now
		//this.addChild(this._titleSplashSprite);
	
		this._titleSplashSprite.bitmap.outlineColor = XY.TitleSplash.Param.OutlineColor1;
		this._titleSplashSprite.bitmap.outlineWidth = XY.TitleSplash.Param.OutlineWidth1;
		this._titleSplashSprite.bitmap.fontSize = XY.TitleSplash.Param.FontSize1;
		this._titleSplashSprite.bitmap.textColor = XY.TitleSplash.Param.TextColor1;
		
		var y = XY.TitleSplash.Param.Y1;
		
		var versionText = XY.TitleSplash.Param.TextContent1.split("|");
		versionText.forEach(function(vt) {
			y -= XY.TitleSplash.Param.FontSize1 + XY.TitleSplash.Param.LineSpacing1;
			this._titleSplashSprite.bitmap.drawText(vt, XY.TitleSplash.Param.X1, y, Graphics.width, XY.TitleSplash.Param.FontSize1, XY.TitleSplash.Param.Align1);
		}, this);
		
		//push sprite to array;
		this._splashSprite.push(this._titleSplashSprite);
	}
	
	if (XY.TitleSplash.Param.DisplayVersion2 && XY.TitleSplash.Param.TextContent2 !== undefined) {
		this._titleSplashSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		//this.addChild(this._titleSplashSprite);
		
		this._titleSplashSprite.bitmap.outlineColor = XY.TitleSplash.Param.OutlineColor2;
		this._titleSplashSprite.bitmap.outlineWidth = XY.TitleSplash.Param.OutlineWidth2;
		this._titleSplashSprite.bitmap.fontSize = XY.TitleSplash.Param.FontSize2;
		this._titleSplashSprite.bitmap.textColor = XY.TitleSplash.Param.TextColor2;
		
		var y = XY.TitleSplash.Param.Y2;
		
		var versionText = XY.TitleSplash.Param.TextContent2.split("|");
		versionText.forEach(function(vt) {
			this._titleSplashSprite.bitmap.drawText(vt, XY.TitleSplash.Param.X2, y, Graphics.width, XY.TitleSplash.Param.FontSize2, XY.TitleSplash.Param.Align2);
			// from top to bottom different from bottom to top, must display before change y. 
			y += XY.TitleSplash.Param.FontSize2 + XY.TitleSplash.Param.LineSpacing2;
		}, this);
		
		this._splashSprite.push(this._titleSplashSprite);
	}
	
	if (XY.TitleSplash.Param.DisplayVersion3 && XY.TitleSplash.Param.TextContent3 !== undefined) {
		this._titleSplashSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		
		this._titleSplashSprite.bitmap.outlineColor = XY.TitleSplash.Param.OutlineColor3;
		this._titleSplashSprite.bitmap.outlineWidth = XY.TitleSplash.Param.OutlineWidth3;
		this._titleSplashSprite.bitmap.fontSize = XY.TitleSplash.Param.FontSize3;
		this._titleSplashSprite.bitmap.textColor = XY.TitleSplash.Param.TextColor3;
		
		var y = XY.TitleSplash.Param.Y3;
		
		var versionText = XY.TitleSplash.Param.TextContent3.split("|");
		versionText.forEach(function(vt) {
			this._titleSplashSprite.bitmap.drawText(vt, XY.TitleSplash.Param.X3, y, Graphics.width, XY.TitleSplash.Param.FontSize3, XY.TitleSplash.Param.Align3);
			// from top to bottom different from bottom to top, must display before change y. 
			y += XY.TitleSplash.Param.FontSize3 + XY.TitleSplash.Param.LineSpacing3;
		}, this);
		
		this._splashSprite.push(this._titleSplashSprite);
	}
	
	if (XY.TitleSplash.Param.DisplayVersion4 && XY.TitleSplash.Param.TextContent4 !== undefined) {
		this._titleSplashSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		
		this._titleSplashSprite.bitmap.outlineColor = XY.TitleSplash.Param.OutlineColor4;
		this._titleSplashSprite.bitmap.outlineWidth = XY.TitleSplash.Param.OutlineWidth4;
		this._titleSplashSprite.bitmap.fontSize = XY.TitleSplash.Param.FontSize4;
		this._titleSplashSprite.bitmap.textColor = XY.TitleSplash.Param.TextColor4;
		
		var y = XY.TitleSplash.Param.Y4;
		
		var versionText = XY.TitleSplash.Param.TextContent4.split("|");
		versionText.forEach(function(vt) {
			this._titleSplashSprite.bitmap.drawText(vt, XY.TitleSplash.Param.X4, y, Graphics.width, XY.TitleSplash.Param.FontSize4, XY.TitleSplash.Param.Align4);
			// from top to bottom different from bottom to top, must display before change y. 
			y += XY.TitleSplash.Param.FontSize4 + XY.TitleSplash.Param.LineSpacing4;
		}, this);
		
		this._splashSprite.push(this._titleSplashSprite);
	}

	//create empty sprite without bitmap and then display.
	this._titleSplashSprite = new Sprite();
    this._titleSplashSprite.anchor.x = 0.5;
    this._titleSplashSprite.anchor.y = 0.5;
	this._titleSplashSprite.x = Graphics.boxWidth / 2;
	this._titleSplashSprite.y = Graphics.boxHeight / 2;
	this.addChild(this._titleSplashSprite);
	
	//in the empty sprite, display each bitmap created above
	this.refresh_splash_screen();
};

XY_TitleSplash_Scene_Splash_Screen.prototype.refresh_splash_screen = function() {
	if (this._splashData[0] >= this._splashSprite.length) {
		AudioManager.stopMe();
		DataManager.setupNewGame();
		SceneManager.goto(Scene_Title);
		Window_TitleCommand.initCommandPosition();	
		return;
	};
	this._titleSplashSprite.bitmap = this._splashSprite[this._splashData[0]].bitmap;
	this._titleSplashSprite.opacity = 0;
	this._splashData[0] += 1;
	this._splashData[1] = this._splashData[2];
};

XY_TitleSplash_Scene_Splash_Screen.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startFadeIn(this.fadeSpeed(), false);
};

XY_TitleSplash_Scene_Splash_Screen.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	if (this._splashData[1] <= 0) {
		this._titleSplashSprite.opacity -= this._splashData[3];
	    if (Input.isTriggered("ok") || TouchInput.isTriggered()) {this._splashData[0] = this._splashSprite.length};		
		if (this._titleSplashSprite.opacity <= 0) {this.refresh_splash_screen()};
	}
	else {
	  this._titleSplashSprite.opacity += this._splashData[3];
	  if ((Input.isTriggered("ok") || TouchInput.isTriggered()) && this._titleSplashSprite.opacity > 60) {
		  this._splashData[1] = 0; this._splashData[0] = this._splashSprite.length};
	  if (this._titleSplashSprite.opacity >= 255) {this._splashData[1] -= 1};
	};
};