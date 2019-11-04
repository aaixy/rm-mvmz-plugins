//=============================================================================
// XueYu Plugins - Title Menu
// XY_TitleMenu.js
// Version: 1.0
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.00 Display Multiple Menu in Title Screen.
 * @author XueYu Plugins
 *
 * @param DisplayJumpToMap
 * @desc Display Jump To Map? true/false
 * @default true
 *
 * @param JumpToMapText
 * @desc The name will be display in title screen's command window.
 * @default JumpToMap
 *
 * @param JumpToMapId
 * @desc The Id of map that you will jump to. 1,2,3...etc.
 * @default 1
 *
 * @param JumpToMapSwitchId
 * @desc The id of Switch that you will use to after jump to map.
 * 1,2,3...etc. Set to 0 to disable.
 * @default 0
 *
 * @param DisplayExit
 * @desc Display exit? true/false
 * @default true
 *
 * @param ExitText
 * @desc The name will be display in title screen's command window.
 * @default Exit
 *
 * @param MaxCols
 * @desc The title screen command window MaxCols.
 * @default 5
 *
 * @param WindowWidth
 * @desc The title screen command window width.
 * @default 840
 *
 * @param X
 * @desc The x position of command window.
 * default:(Graphics.boxWidth - this.width) / 2
 * @default (Graphics.boxWidth - this.width) / 2
 *
 * @param Y
 * @desc The y position of command window.
 * default:Graphics.boxHeight - this.height - 96
 * @default Graphics.boxHeight - this.height - 96
 *
 * @param WindowSkin
 * @desc Default is Window, it means the window skin
 * is the file img/system/Window.png.
 * @default Window
 *
 * @param Align
 * @desc left/center/right
 * @default center
 *
 * @param TextColor
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default yellow
 *
 * @help
 * Introduction
 * This plugin allows you to place Multiple Menu command
 * to your title screen.
 */

// Imported
var Imported = Imported || {};
Imported.XY_TitleMenu = true;

// Parameter Variables
var XY = XY || {};
XY.TitleMenu = XY.TitleMenu || {};

XY.TitleMenu.Parameters = PluginManager.parameters('XY_TitleMenu');
XY.TitleMenu.Param = XY.TitleMenu.Param || {};

// Display Multiple Menu
XY.TitleMenu.Param.DisplayJumpToMap = XY.TitleMenu.Parameters['DisplayJumpToMap'].toLowerCase() === 'true';
XY.TitleMenu.Param.JumpToMapText = String(XY.TitleMenu.Parameters['JumpToMapText']);
XY.TitleMenu.Param.JumpToMapId = parseInt(XY.TitleMenu.Parameters['JumpToMapId']);
XY.TitleMenu.Param.JumpToMapSwitchId = parseInt(XY.TitleMenu.Parameters['JumpToMapSwitchId']);
XY.TitleMenu.Param.DisplayExit = XY.TitleMenu.Parameters['DisplayExit'].toLowerCase() === 'true';
XY.TitleMenu.Param.ExitText = String(XY.TitleMenu.Parameters['ExitText']);
XY.TitleMenu.Param.MaxCols = parseInt(XY.TitleMenu.Parameters['MaxCols']);
XY.TitleMenu.Param.WindowWidth = parseInt(XY.TitleMenu.Parameters['WindowWidth']);
XY.TitleMenu.Param.X = String(XY.TitleMenu.Parameters['X']);
XY.TitleMenu.Param.Y = String(XY.TitleMenu.Parameters['Y']);
XY.TitleMenu.Param.WindowSkin = String(XY.TitleMenu.Parameters['WindowSkin']);
XY.TitleMenu.Param.Align = String(XY.TitleMenu.Parameters['Align']);
XY.TitleMenu.Param.TextColor = String(XY.TitleMenu.Parameters['TextColor']);

// Main
// Window_TitleCommand
XY.TitleMenu.Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
    XY.TitleMenu.Window_TitleCommand_makeCommandList.call(this);
	this.XY_TitleMenu_addCommand();
};

Window_TitleCommand.prototype.XY_TitleMenu_addCommand = function() {
	if(XY.TitleMenu.Param.DisplayJumpToMap){
		this.addCommand(XY.TitleMenu.Param.JumpToMapText, 'JumpToMap');
	}
	if(XY.TitleMenu.Param.DisplayExit){
		this.addCommand(XY.TitleMenu.Param.ExitText, 'Exit');
	}
	
};

Window_TitleCommand.prototype.maxCols = function() {
    return XY.TitleMenu.Param.MaxCols;
};

Window_TitleCommand.prototype.windowWidth = function() {
    return XY.TitleMenu.Param.WindowWidth;
};

Window_TitleCommand.prototype.updatePlacement = function() {
    this.x = eval(XY.TitleMenu.Param.X);
    this.y = eval(XY.TitleMenu.Param.Y);
};

Window_TitleCommand.prototype.loadWindowskin = function() {
this.windowskin = ImageManager.loadSystem(XY.TitleMenu.Param.WindowSkin);
};

Window_TitleCommand.prototype.itemTextAlign = function() {
    return XY.TitleMenu.Param.Align;
};

Window_TitleCommand.prototype.resetTextColor = function() {
	/*this.outlineColor = 'rgba(255, 0, 0, 0.5)';
    this.outlineWidth = 4;*/
	this.changeTextColor(XY.TitleMenu.Param.TextColor);
};

// Scene_Base
XY.TitleMenu.Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    XY.TitleMenu.Scene_Title_createCommandWindow.call(this);
	
	if(XY.TitleMenu.Param.DisplayJumpToMap){
		this._commandWindow.setHandler('JumpToMap',  this.commandJumpToMap.bind(this));
	}
	if(XY.TitleMenu.Param.DisplayExit){
		this._commandWindow.setHandler('Exit',  this.commandExit.bind(this));
	}
};

Scene_Title.prototype.commandExit = function() {
    this._commandWindow.close();
    SceneManager.exit();
};

Scene_Title.prototype.commandJumpToMap = function() {
    DataManager.setupNewGame();
    this._commandWindow.close();
    this.fadeOutAll();
    SceneManager.goto(Scene_JumpToMap_Map);
};

// Scene_JumpToMap_Map
// The scene class of the map screen.
function Scene_JumpToMap_Map() {
    this.initialize.apply(this, arguments);
}

Scene_JumpToMap_Map.prototype = Object.create(Scene_Map.prototype);
Scene_JumpToMap_Map.prototype.constructor = Scene_JumpToMap_Map;

Scene_JumpToMap_Map.prototype.initialize = function() {
    Scene_Map.prototype.initialize.call(this);
    this._waitCount = 0;
    this._encounterEffectDuration = 0;
    this._mapLoaded = false;
    this._touchCount = 0;
};

Scene_JumpToMap_Map.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
	$gameSwitches.setValue(XY.TitleMenu.Param.JumpToMapSwitchId, true);
    this._transfer = $gamePlayer.isTransferring();
    DataManager.loadMapData(XY.TitleMenu.Param.JumpToMapId);
};