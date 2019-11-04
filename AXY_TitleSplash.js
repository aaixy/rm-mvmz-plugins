//=============================================================================
// XueYu Plugins - Title Splash
// AXY_TitleSplash.js
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
 * @default by AXY Plugins 2016|Splash 1.0
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
 * @desc break new line with '|'
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
 * @desc break new line with '|'
 * @default AXY Plugins 2016
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
Imported.AXY_TitleSplash = true;

// Parameter Variables
var AXY = AXY || {};
AXY.TitleSplash = AXY.TitleSplash || {};

AXY.TitleSplash.Parameters = PluginManager.parameters('AXY_TitleSplash');
AXY.TitleSplash.Param = AXY.TitleSplash.Param || {};

// DisplayVersion1
AXY.TitleSplash.Param.DisplayVersion1 = AXY.TitleSplash.Parameters['DisplayVersion1'].toLowerCase() === 'true';
AXY.TitleSplash.Param.FontSize1 = parseInt(AXY.TitleSplash.Parameters['FontSize1']);
AXY.TitleSplash.Param.X1 = parseInt(AXY.TitleSplash.Parameters['X1']);
AXY.TitleSplash.Param.Y1 = parseInt(AXY.TitleSplash.Parameters['Y1']);
AXY.TitleSplash.Param.LineSpacing1 = parseInt(AXY.TitleSplash.Parameters['LineSpacing1']);
AXY.TitleSplash.Param.Align1 = AXY.TitleSplash.Parameters['Align1'].toLowerCase();
AXY.TitleSplash.Param.OutlineColor1 = String(AXY.TitleSplash.Parameters['OutlineColor1']);
AXY.TitleSplash.Param.OutlineWidth1 = parseInt(AXY.TitleSplash.Parameters['OutlineWidth1']);
AXY.TitleSplash.Param.TextColor1 = String(AXY.TitleSplash.Parameters['TextColor1']);
AXY.TitleSplash.Param.TextContent1 = String(AXY.TitleSplash.Parameters['TextContent1']);
// DisplayVersion2
AXY.TitleSplash.Param.DisplayVersion2 = AXY.TitleSplash.Parameters['DisplayVersion2'].toLowerCase() === 'true';
AXY.TitleSplash.Param.FontSize2 = parseInt(AXY.TitleSplash.Parameters['FontSize2']);
AXY.TitleSplash.Param.X2 = parseInt(AXY.TitleSplash.Parameters['X2']);
AXY.TitleSplash.Param.Y2 = parseInt(AXY.TitleSplash.Parameters['Y2']);
AXY.TitleSplash.Param.LineSpacing2 = parseInt(AXY.TitleSplash.Parameters['LineSpacing2']);
AXY.TitleSplash.Param.Align2 = AXY.TitleSplash.Parameters['Align2'].toLowerCase();
AXY.TitleSplash.Param.OutlineColor2 = String(AXY.TitleSplash.Parameters['OutlineColor2']);
AXY.TitleSplash.Param.OutlineWidth2 = parseInt(AXY.TitleSplash.Parameters['OutlineWidth2']);
AXY.TitleSplash.Param.TextColor2 = String(AXY.TitleSplash.Parameters['TextColor2']);
AXY.TitleSplash.Param.TextContent2 = String(AXY.TitleSplash.Parameters['TextContent2']);
// DisplayVersion3
AXY.TitleSplash.Param.DisplayVersion3 = AXY.TitleSplash.Parameters['DisplayVersion3'].toLowerCase() === 'true';
AXY.TitleSplash.Param.FontSize3 = parseInt(AXY.TitleSplash.Parameters['FontSize3']);
AXY.TitleSplash.Param.X3 = parseInt(AXY.TitleSplash.Parameters['X3']);
AXY.TitleSplash.Param.Y3 = parseInt(AXY.TitleSplash.Parameters['Y3']);
AXY.TitleSplash.Param.LineSpacing3 = parseInt(AXY.TitleSplash.Parameters['LineSpacing3']);
AXY.TitleSplash.Param.Align3 = AXY.TitleSplash.Parameters['Align3'].toLowerCase();
AXY.TitleSplash.Param.OutlineColor3 = String(AXY.TitleSplash.Parameters['OutlineColor3']);
AXY.TitleSplash.Param.OutlineWidth3 = parseInt(AXY.TitleSplash.Parameters['OutlineWidth3']);
AXY.TitleSplash.Param.TextColor3 = String(AXY.TitleSplash.Parameters['TextColor3']);
AXY.TitleSplash.Param.TextContent3 = String(AXY.TitleSplash.Parameters['TextContent3']);
// DisplayVersion4
AXY.TitleSplash.Param.DisplayVersion4 = AXY.TitleSplash.Parameters['DisplayVersion4'].toLowerCase() === 'true';
AXY.TitleSplash.Param.FontSize4 = parseInt(AXY.TitleSplash.Parameters['FontSize4']);
AXY.TitleSplash.Param.X4 = parseInt(AXY.TitleSplash.Parameters['X4']);
AXY.TitleSplash.Param.Y4 = parseInt(AXY.TitleSplash.Parameters['Y4']);
AXY.TitleSplash.Param.LineSpacing4 = parseInt(AXY.TitleSplash.Parameters['LineSpacing4']);
AXY.TitleSplash.Param.Align4 = AXY.TitleSplash.Parameters['Align4'].toLowerCase();
AXY.TitleSplash.Param.OutlineColor4 = String(AXY.TitleSplash.Parameters['OutlineColor4']);
AXY.TitleSplash.Param.OutlineWidth4 = parseInt(AXY.TitleSplash.Parameters['OutlineWidth4']);
AXY.TitleSplash.Param.TextColor4 = String(AXY.TitleSplash.Parameters['TextColor4']);
AXY.TitleSplash.Param.TextContent4 = String(AXY.TitleSplash.Parameters['TextContent4']);
// Fade
AXY.TitleSplash.Param.SplashDuration = Number(AXY.TitleSplash.Parameters['SplashDuration'] || 60);
AXY.TitleSplash.Param.SplashFadeSpeed = Number(AXY.TitleSplash.Parameters['SplashFadeSpeed'] || 2);

// Main
AXY.TitleSplash.Scene_Boot_Display_Splash = Scene_Boot.prototype.start
Scene_Boot.prototype.start = function() {
	if (!DataManager.isBattleTest() && !DataManager.isEventTest()) {
	   SceneManager.goto(AXY_TitleSplash_Scene_Splash_Screen);
	   return
    }
	AXY.TitleSplash.Scene_Boot_Display_Splash.call(this);
};

function AXY_TitleSplash_Scene_Splash_Screen() {
    this.initialize.apply(this, arguments);
}
AXY_TitleSplash_Scene_Splash_Screen.prototype = Object.create(Scene_Base.prototype);
AXY_TitleSplash_Scene_Splash_Screen.prototype.constructor = AXY_TitleSplash_Scene_Splash_Screen;

AXY_TitleSplash_Scene_Splash_Screen.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

AXY_TitleSplash_Scene_Splash_Screen.prototype.create = function() {	
    Scene_Base.prototype.create.call(this);
	this._splashData = [0,0, Math.max(AXY.TitleSplash.Param.SplashDuration,1),Math.max(AXY.TitleSplash.Param.SplashFadeSpeed, 1)];
    this._splashSprite = [];

	//draw bitmap in sprite
	if (AXY.TitleSplash.Param.DisplayVersion1 && AXY.TitleSplash.Param.TextContent1 !== undefined) {
		this._titleSplashSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		//do not display now
		//this.addChild(this._titleSplashSprite);
	
		this._titleSplashSprite.bitmap.outlineColor = AXY.TitleSplash.Param.OutlineColor1;
		this._titleSplashSprite.bitmap.outlineWidth = AXY.TitleSplash.Param.OutlineWidth1;
		this._titleSplashSprite.bitmap.fontSize = AXY.TitleSplash.Param.FontSize1;
		this._titleSplashSprite.bitmap.textColor = AXY.TitleSplash.Param.TextColor1;
		
		var y = AXY.TitleSplash.Param.Y1;
		
		var versionText = AXY.TitleSplash.Param.TextContent1.split("|");
		versionText.forEach(function(vt) {
			y -= AXY.TitleSplash.Param.FontSize1 + AXY.TitleSplash.Param.LineSpacing1;
			this._titleSplashSprite.bitmap.drawText(vt, AXY.TitleSplash.Param.X1, y, Graphics.width, AXY.TitleSplash.Param.FontSize1, AXY.TitleSplash.Param.Align1);
		}, this);
		
		//push sprite to array;
		this._splashSprite.push(this._titleSplashSprite);
	}
	
	if (AXY.TitleSplash.Param.DisplayVersion2 && AXY.TitleSplash.Param.TextContent2 !== undefined) {
		this._titleSplashSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		//this.addChild(this._titleSplashSprite);
		
		this._titleSplashSprite.bitmap.outlineColor = AXY.TitleSplash.Param.OutlineColor2;
		this._titleSplashSprite.bitmap.outlineWidth = AXY.TitleSplash.Param.OutlineWidth2;
		this._titleSplashSprite.bitmap.fontSize = AXY.TitleSplash.Param.FontSize2;
		this._titleSplashSprite.bitmap.textColor = AXY.TitleSplash.Param.TextColor2;
		
		var y = AXY.TitleSplash.Param.Y2;
		
		var versionText = AXY.TitleSplash.Param.TextContent2.split("|");
		versionText.forEach(function(vt) {
			this._titleSplashSprite.bitmap.drawText(vt, AXY.TitleSplash.Param.X2, y, Graphics.width, AXY.TitleSplash.Param.FontSize2, AXY.TitleSplash.Param.Align2);
			// from top to bottom different from bottom to top, must display before change y. 
			y += AXY.TitleSplash.Param.FontSize2 + AXY.TitleSplash.Param.LineSpacing2;
		}, this);
		
		this._splashSprite.push(this._titleSplashSprite);
	}
	
	if (AXY.TitleSplash.Param.DisplayVersion3 && AXY.TitleSplash.Param.TextContent3 !== undefined) {
		this._titleSplashSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		
		this._titleSplashSprite.bitmap.outlineColor = AXY.TitleSplash.Param.OutlineColor3;
		this._titleSplashSprite.bitmap.outlineWidth = AXY.TitleSplash.Param.OutlineWidth3;
		this._titleSplashSprite.bitmap.fontSize = AXY.TitleSplash.Param.FontSize3;
		this._titleSplashSprite.bitmap.textColor = AXY.TitleSplash.Param.TextColor3;
		
		var y = AXY.TitleSplash.Param.Y3;
		
		var versionText = AXY.TitleSplash.Param.TextContent3.split("|");
		versionText.forEach(function(vt) {
			this._titleSplashSprite.bitmap.drawText(vt, AXY.TitleSplash.Param.X3, y, Graphics.width, AXY.TitleSplash.Param.FontSize3, AXY.TitleSplash.Param.Align3);
			// from top to bottom different from bottom to top, must display before change y. 
			y += AXY.TitleSplash.Param.FontSize3 + AXY.TitleSplash.Param.LineSpacing3;
		}, this);
		
		this._splashSprite.push(this._titleSplashSprite);
	}
	
	if (AXY.TitleSplash.Param.DisplayVersion4 && AXY.TitleSplash.Param.TextContent4 !== undefined) {
		this._titleSplashSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
		
		this._titleSplashSprite.bitmap.outlineColor = AXY.TitleSplash.Param.OutlineColor4;
		this._titleSplashSprite.bitmap.outlineWidth = AXY.TitleSplash.Param.OutlineWidth4;
		this._titleSplashSprite.bitmap.fontSize = AXY.TitleSplash.Param.FontSize4;
		this._titleSplashSprite.bitmap.textColor = AXY.TitleSplash.Param.TextColor4;
		
		var y = AXY.TitleSplash.Param.Y4;
		
		var versionText = AXY.TitleSplash.Param.TextContent4.split("|");
		versionText.forEach(function(vt) {
			this._titleSplashSprite.bitmap.drawText(vt, AXY.TitleSplash.Param.X4, y, Graphics.width, AXY.TitleSplash.Param.FontSize4, AXY.TitleSplash.Param.Align4);
			// from top to bottom different from bottom to top, must display before change y. 
			y += AXY.TitleSplash.Param.FontSize4 + AXY.TitleSplash.Param.LineSpacing4;
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

AXY_TitleSplash_Scene_Splash_Screen.prototype.refresh_splash_screen = function() {
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

AXY_TitleSplash_Scene_Splash_Screen.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startFadeIn(this.fadeSpeed(), false);
};

AXY_TitleSplash_Scene_Splash_Screen.prototype.update = function() {
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