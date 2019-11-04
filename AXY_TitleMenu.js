//=============================================================================
// XueYu Plugins - Title Menu
// AXY_TitleMenu.js
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
Imported.AXY_TitleMenu = true;

// Parameter Variables
var AXY = AXY || {};
AXY.TitleMenu = AXY.TitleMenu || {};

AXY.TitleMenu.Parameters = PluginManager.parameters('AXY_TitleMenu');
AXY.TitleMenu.Param = AXY.TitleMenu.Param || {};

// Display Multiple Menu
AXY.TitleMenu.Param.DisplayJumpToMap = AXY.TitleMenu.Parameters['DisplayJumpToMap'].toLowerCase() === 'true';
AXY.TitleMenu.Param.JumpToMapText = String(AXY.TitleMenu.Parameters['JumpToMapText']);
AXY.TitleMenu.Param.JumpToMapId = parseInt(AXY.TitleMenu.Parameters['JumpToMapId']);
AXY.TitleMenu.Param.JumpToMapSwitchId = parseInt(AXY.TitleMenu.Parameters['JumpToMapSwitchId']);
AXY.TitleMenu.Param.DisplayExit = AXY.TitleMenu.Parameters['DisplayExit'].toLowerCase() === 'true';
AXY.TitleMenu.Param.ExitText = String(AXY.TitleMenu.Parameters['ExitText']);
AXY.TitleMenu.Param.MaxCols = parseInt(AXY.TitleMenu.Parameters['MaxCols']);
AXY.TitleMenu.Param.WindowWidth = parseInt(AXY.TitleMenu.Parameters['WindowWidth']);
AXY.TitleMenu.Param.X = String(AXY.TitleMenu.Parameters['X']);
AXY.TitleMenu.Param.Y = String(AXY.TitleMenu.Parameters['Y']);
AXY.TitleMenu.Param.WindowSkin = String(AXY.TitleMenu.Parameters['WindowSkin']);
AXY.TitleMenu.Param.Align = String(AXY.TitleMenu.Parameters['Align']);
AXY.TitleMenu.Param.TextColor = String(AXY.TitleMenu.Parameters['TextColor']);

// Main
// Window_TitleCommand
AXY.TitleMenu.Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
    AXY.TitleMenu.Window_TitleCommand_makeCommandList.call(this);
	this.AXY_TitleMenu_addCommand();
};

Window_TitleCommand.prototype.AXY_TitleMenu_addCommand = function() {
	if(AXY.TitleMenu.Param.DisplayJumpToMap){
		this.addCommand(AXY.TitleMenu.Param.JumpToMapText, 'JumpToMap');
	}
	if(AXY.TitleMenu.Param.DisplayExit){
		this.addCommand(AXY.TitleMenu.Param.ExitText, 'Exit');
	}
	
};

Window_TitleCommand.prototype.maxCols = function() {
    return AXY.TitleMenu.Param.MaxCols;
};

Window_TitleCommand.prototype.windowWidth = function() {
    return AXY.TitleMenu.Param.WindowWidth;
};

Window_TitleCommand.prototype.updatePlacement = function() {
    this.x = eval(AXY.TitleMenu.Param.X);
    this.y = eval(AXY.TitleMenu.Param.Y);
};

Window_TitleCommand.prototype.loadWindowskin = function() {
this.windowskin = ImageManager.loadSystem(AXY.TitleMenu.Param.WindowSkin);
};

Window_TitleCommand.prototype.itemTextAlign = function() {
    return AXY.TitleMenu.Param.Align;
};

Window_TitleCommand.prototype.resetTextColor = function() {
	/*this.outlineColor = 'rgba(255, 0, 0, 0.5)';
    this.outlineWidth = 4;*/
	this.changeTextColor(AXY.TitleMenu.Param.TextColor);
};

// Scene_Base
AXY.TitleMenu.Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    AXY.TitleMenu.Scene_Title_createCommandWindow.call(this);
	
	if(AXY.TitleMenu.Param.DisplayJumpToMap){
		this._commandWindow.setHandler('JumpToMap',  this.commandJumpToMap.bind(this));
	}
	if(AXY.TitleMenu.Param.DisplayExit){
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
	$gameSwitches.setValue(AXY.TitleMenu.Param.JumpToMapSwitchId, true);
    this._transfer = $gamePlayer.isTransferring();
    DataManager.loadMapData(AXY.TitleMenu.Param.JumpToMapId);
};