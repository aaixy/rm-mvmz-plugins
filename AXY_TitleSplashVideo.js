//=============================================================================
// A XueYu Plugins - Title Splash Video
// AXY_TitleSplashVideo.js
// Version: 1.00
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.00 Display Splash Video before the Title Screen.
 * @author A XueYu Plugins
 * 
 * @help
 * Introduction
 * This plugin allows you to place a Splash video 
 * to your boot page before the title screen.
 * 
 * changelog
 * 1.00 2019.11.13
 * first release.
 * 
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 *
 * @param videoName
 * @text Video Name
 * @desc File name for the video without ext name in movies folder
 * @type text
 * 
 * @param imageName
 * @text Image Name
 * @desc File path for the image shown when the video is loading
 * @type file
 * @dir img
 * @require 1
 * 
 * @param x
 * @text X
 * @desc The x position of video upper left corner. default:0
 * @type number
 * @default 0
 *
 * @param y
 * @text Y
 * @desc The y position of video upper left corner. default:0
 * @type number
 * @default 0
 *
 * @param width
 * @text Width
 * @desc The video box width. default:816
 * @type number
 * @default 816
 *
 * @param height
 * @text Height
 * @desc The video box height. default:624
 * @type number
 * @default 624
 * 
 * @param muted
 * @text Muted
 * @desc Video muted? true/false default:false
 * @type boolean
 * @default false
 * 
 * @param loop
 * @text Loop
 * @desc Video loop? true/false default:false
 * @type boolean
 * @default false
 *
 * @param SplashDuration
 * @text Splash Duration
 * @desc Splash Duration
 * @type number
 * @default 60
 *
 * @param SplashFadeSpeed
 * @text Splash Fade Speed
 * @desc Splash Fade Speed
 * @type number
 * @default 2
 *
 * 
 */

// Imported
var Imported = Imported || {};
Imported.AXY_TitleSplashVideo = true;

// Parameter Variables
var AXY = AXY || {};
AXY.TitleSplashVideo = AXY.TitleSplashVideo || {};

AXY.TitleSplashVideo.Parameters = PluginManager.parameters('AXY_TitleSplashVideo');
AXY.TitleSplashVideo.Param = AXY.TitleSplashVideo.Param || {};
AXY.TitleSplashVideo.Alias = AXY.TitleSplashVideo.Alias || {};
AXY.TitleSplashVideo.Variables = AXY.TitleSplashVideo.Variables || {};

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
Object.keys(AXY.TitleSplashVideo.Parameters).forEach(function (key) {
	return AXY.TitleSplashVideo.Param[key] = Utils.recursiveParse(AXY.TitleSplashVideo.Parameters[key]);
});

// Main
AXY.TitleSplashVideo.Alias.Scene_Boot_Display_Splash = Scene_Boot.prototype.start
Scene_Boot.prototype.start = function () {
	if (!DataManager.isBattleTest() && !DataManager.isEventTest()) {
		SceneManager.push(AXY_TitleSplashVideo_Scene_Splash_Screen);
		return
	}
	AXY.TitleSplashVideo.Alias.Scene_Boot_Display_Splash.call(this);
};

function AXY_TitleSplashVideo_Scene_Splash_Screen() {
	this.initialize.apply(this, arguments);
}
AXY_TitleSplashVideo_Scene_Splash_Screen.prototype = Object.create(Scene_Base.prototype);
AXY_TitleSplashVideo_Scene_Splash_Screen.prototype.constructor = AXY_TitleSplashVideo_Scene_Splash_Screen;

AXY_TitleSplashVideo_Scene_Splash_Screen.prototype.initialize = function () {
	Scene_Base.prototype.initialize.call(this);
};

AXY_TitleSplashVideo_Scene_Splash_Screen.prototype.create = function () {
	Scene_Base.prototype.create.call(this);
	this._splashData = [0, 0, Math.max(AXY.TitleSplashVideo.Param.SplashDuration, 1), Math.max(AXY.TitleSplashVideo.Param.SplashFadeSpeed, 1)];
	this._splashSprite = [];

	this.videoName = 'movies/' + AXY.TitleSplashVideo.Param.videoName + Game_Interpreter.prototype.videoFileExt();
	this.imageName = 'img/' + AXY.TitleSplashVideo.Param.imageName + '.png';
	if (Decrypter.hasEncryptedImages) {
		this.imageName = Decrypter.extToEncryptExt(this.imageName);
	}

	this._texture = PIXI.Texture.from(this.videoName);
	//console.log(this._texture);

	this._videoSource = this._texture.baseTexture.source;
	//console.log(this._videoSource);
	if (AXY.TitleSplashVideo.Param.loop == true) {
		this._videoSource.loop = true;
	} else {
		this._videoSource.loop = false;
	}
	if (AXY.TitleSplashVideo.Param.muted == true) {
		this._videoSource.muted = true;
	} else {
		this._videoSource.muted = false;
	}
	if (this.imageName.trim() != '') {
		this._videoSource.poster = this.imageName;
	}
	var _that = this;
	this._videoSource.addEventListener('ended', function (event) {
		_that.terminate();
	})
	//this._videoSource.onended = this.terminate();

	this._spriteVideo = new PIXI.Sprite(this._texture);
	this._spriteVideo.width = AXY.TitleSplashVideo.Param.width;
	this._spriteVideo.height = AXY.TitleSplashVideo.Param.height;
	this._spriteVideo.x = AXY.TitleSplashVideo.Param.x;
	this._spriteVideo.y = AXY.TitleSplashVideo.Param.y;

	//push sprite to array;
	this._splashSprite.push(this._spriteVideo);
	//console.log(this._spriteVideo);

	this.addChild(this._spriteVideo);

	//this.refresh_splash_screen();
};

AXY_TitleSplashVideo_Scene_Splash_Screen.prototype.refresh_splash_screen = function () {
	if (this._splashData[0] >= this._splashSprite.length) {
		this.terminate();
	};
	//this._titleSplashSprite.bitmap = this._spriteVideo.bitmap;
	this._spriteVideo.opacity = 0;
	this._splashData[0] += 1;
	this._splashData[1] = this._splashData[2];
};

AXY_TitleSplashVideo_Scene_Splash_Screen.prototype.start = function () {
	Scene_Base.prototype.start.call(this);
	this.startFadeIn(this.fadeSpeed(), false);
};

AXY_TitleSplashVideo_Scene_Splash_Screen.prototype.update = function () {
	Scene_Base.prototype.update.call(this);
	//this.refresh_splash_screen();
	if (Input.isTriggered("ok") || TouchInput.isTriggered()) {
		this.terminate();
	}
}

AXY_TitleSplashVideo_Scene_Splash_Screen.prototype.terminate = function () {
	Scene_Base.prototype.terminate.call(this);
	//console.log(this);
	//console.log(this._videoSource.paused);
	if (!this._videoSource.paused) {
		this.pauseVideo();
		//console.log('111');
	}

	//this.videoTitle.removeVideo();
	SceneManager.snapForBackground();
	if (typeof XY_TitleSplash_Scene_Splash_Screen === "function") {
		SceneManager.goto(XY_TitleSplash_Scene_Splash_Screen);
		//SceneManager.pop();
	} else {
		DataManager.setupNewGame();
		SceneManager.goto(Scene_Title);
		Window_TitleCommand.initCommandPosition();
	}
	//SceneManager.push();
	//SceneManager.pop();


	return;
};

AXY_TitleSplashVideo_Scene_Splash_Screen.prototype.pauseVideo = function () {
	this._videoSource.pause();
};

AXY_TitleSplashVideo_Scene_Splash_Screen.prototype.playVideo = function () {
	this._videoSource.play();
};

AXY_TitleSplashVideo_Scene_Splash_Screen.prototype.removeVideo = function () {
	this._videoSource.pause();
	this._videoSource.src = null;
	this._videoSource.removeAttribute('src');
	this._videoSource.load();
};