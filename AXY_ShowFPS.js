//=============================================================================
// XueYu Plugins - Show FPS
// AXY_ShowFPS.js
// Version: 1.0
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.00 Allows player to show/hide fps meter in options menu.
 * @author XueYu Plugins
 *
 * @param Enable
 * @desc Enable/Disable this plugin. yes/no
 * @default yes
 *
 * @help
 * Introduction
 * This plugin allows player to show/hide fps meter in options menu.
 */

// Imported
var Imported = Imported || {};
Imported.AXY_ShowFPS = true;

// Parameter Variables
var AXY = AXY || {};
AXY.ShowFPS = AXY.ShowFPS || {};
AXY.ShowFPS.Alias = AXY.ShowFPS.Alias || {};

AXY.ShowFPS.Parameters = PluginManager.parameters('AXY_ShowFPS');
AXY.ShowFPS.Param = AXY.ShowFPS.Param || {};

AXY.ShowFPS.Param.Enable = String(AXY.ShowFPS.Parameters['Enable']) == "yes" ? true : false;

// Main
if(AXY.ShowFPS.Param.Enable){
	//-----------------------------------------------------------------------------
	// Window_Options
	//
	// The window for changing various settings on the options screen.	
	AXY.ShowFPS.Alias.System_initialize=Game_System.prototype.initialize;
	Game_System.prototype.initialize = function() {
		AXY.ShowFPS.Alias.System_initialize.call(this);
		this._show_fps = false;
	};

	Game_System.prototype.show_fps = function() {
		this._show_fps = this._show_fps || false;
		return this._show_fps;
	};

	AXY.ShowFPS.Alias.makeCommandList= Window_Options.prototype.makeCommandList;
	Window_Options.prototype.makeCommandList = function() {
		AXY.ShowFPS.Alias.makeCommandList.call(this);
		this.addCommand("FPS", 'show_fps');
	};

	/*Window_Options.prototype.statusText = function(index) {
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (this.isVolumeSymbol(symbol)) {
			return this.volumeStatusText(value);
		} else {
			if (this.commandSymbol(index) === 'show_fps'){
				 return $gameSystem.show_fps() ? '开' : '关';
			}else{
				return this.booleanStatusText(value);
			}
			
		}
	};*/
		
	AXY.ShowFPS.Alias.processOk=Window_Options.prototype.processOk;
	Window_Options.prototype.processOk = function() {
		if (this.commandSymbol(this.index()) === 'show_fps') {
			var index = this.index();
			var symbol = this.commandSymbol(index);
			var value = this.getConfigValue(symbol);
			if (Utils.isMobileDevice()){//安卓端的情况下
				if (value==null){
					value = false;
				}
				$gameSystem._show_fps=value;
				this.changeValue(symbol, !value);
				SoundManager.playCursor();
				if(!value){
					Graphics.showFps();
				}
				else{
					Graphics.hideFps();
				}
			}else{
				if (value==null){
					value = false;
				}
				$gameSystem._show_fps=value;
				this.changeValue(symbol, !value);
				SoundManager.playCursor();
				if(!value){
					Graphics.showFps();
				}
				else{
					Graphics.hideFps();
				}
			}
		}else{
			AXY.ShowFPS.Alias.processOk.call(this) 
		}
	};
	AXY.ShowFPS.Alias.cursorRight=Window_Options.prototype.cursorRight
	Window_Options.prototype.cursorRight = function(wrap) {
		if (this.commandSymbol(this.index()) === 'show_fps') {
		var index = this.index();
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (!this.isVolumeSymbol(symbol)) {
			$gameSystem._show_fps=true
			this.changeValue(symbol, true);
			SoundManager.playCursor();
			//Graphics._switchFPSMeter();
			Graphics.showFps();
		}
		 }else{
			AXY.ShowFPS.Alias.cursorRight.call(this,wrap) 
		 }
	};
	AXY.ShowFPS.Alias.cursorLeft=Window_Options.prototype.cursorLeft
	Window_Options.prototype.cursorLeft = function(wrap) {
		if (this.commandSymbol(this.index()) === 'show_fps') {
		var index = this.index();
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (!this.isVolumeSymbol(symbol)) {
			$gameSystem._show_fps=false
			this.changeValue(symbol, false);
			SoundManager.playCursor();
			//Graphics._switchFPSMeter();
			Graphics.hideFps();
		}
		 }else{
			AXY.ShowFPS.Alias.cursorLeft.call(this,wrap) 
		 }
	};
}