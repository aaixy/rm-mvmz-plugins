//=============================================================================
// A XueYu Plugins - Save
// AXY_Save.js
// Version: 1.03
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.03 Allows to Change save's staff.
 * @author A XueYu Plugins
 *
 *  * @help
 * Introduction
 * This plugin allows to Change save's staff.
 * Example: 
 * 1.It's very simple, so there's no example.
 * 2.You can use script command such as: AXY_Save.save(); which use default savefileid you define or AXY_Save.save(21); which use you direct define.
 *
 * changelog
 * 1.03 2020.4.18
 * fix: missed help;
 * 1.02 2019.12.24
 * modify: param struct;
 * 1.01 2019.9.25
 * Upgrade DataManager.saveGame to rmmv1.6.1 origin method;
 * Add feature: Make save folder customizable;
 * 1.0 2019.7.5
 * first release.
 * 
 * @param MaxSaveFile
 * @desc The MaxSaveFile could expand the number of save files. Default: 22
 * @default 22
 *
 * @param DefaultSaveFileId
 * @desc If you do not define The SaveFile id, then the DefaultSaveFileId will be uses. Default: 21
 * @default 21
 *
 * @param SaveFolder
 * @desc Specify the save folder. This is relative to the directory where the current Game/Game_boxed.exe is located. Default: save
 * @default save
 * 
 * @param ReadOnlySaveFile
 * @text ReadOnly SaveFile Settings
 * @type struct<ReadOnlySaveFileStruct>[]
 * @desc If you do not allows player to overwrite SaveFile, then the ReadOnlySaveFile will be uses.
 * 
 */

/*~struct~ReadOnlySaveFileStruct:
 * @param id
 * @text ID
 * @desc SaveFile Id.
 * @type number
 * 
 * @param title
 * @text Title
 * @desc The SaveFile Title.
 * @type text
 * 
 * @param notice
 * @text Notice
 * @desc Notice the player when they overwrite the SaveFile. Default: You can not overwrite this save file. This is readonly.
 * @type text
 * @default You can not overwrite this save file. This is readonly.
 * 
 */



// Imported
var Imported = Imported || {};
Imported.AXY_Save = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Save = AXY.Save || {};

AXY.Save.Parameters = PluginManager.parameters('AXY_Save');
AXY.Save.Param = AXY.Save.Param || {};
AXY.Save.Variable = AXY.Save.Variable || {};

AXY.Save.Param.MaxSaveFile = parseInt(AXY.Save.Parameters['MaxSaveFile']);
AXY.Save.Param.DefaultSaveFileId = parseInt(AXY.Save.Parameters['DefaultSaveFileId']);
AXY.Save.Param.SaveFileTitle = String(AXY.Save.Parameters['SaveFileTitle']);
AXY.Save.Param.ReadOnlySaveFileId = String(AXY.Save.Parameters['ReadOnlySaveFileId']);
AXY.Save.Param.OverWriteNotice = String(AXY.Save.Parameters['OverWriteNotice']);
AXY.Save.Param.SaveFolder = String(AXY.Save.Parameters['SaveFolder']);

AXY.Save.Variable.arr = [];
AXY.Save.Variable.filenamearr = [];
AXY.Save.Variable.ReadOnlySaveFileIdarr = [];

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
Object.keys(AXY.Save.Parameters).forEach(function (key) {
	return AXY.Save.Param[key] = Utils.recursiveParse(AXY.Save.Parameters[key]);
});

// Main
AXY_Save = {
	save: function () {
		//console.log(arguments[0]);
		var fileid = arguments[0] ? arguments[0] : AXY.Save.Param.DefaultSaveFileId;
		$gameSystem.onBeforeSave();
		DataManager.saveGameWithoutRescue(fileid);
	}
};

//AXY.Save.DataManager_maxSavefiles = DataManager.maxSavefiles;
DataManager.maxSavefiles = function () {
	//AXY.Save.DataManager_maxSavefiles.call(this);
	return AXY.Save.Param.MaxSaveFile;
};

AXY.Save.Variable.arr = AXY.Save.Param.SaveFileTitle.split(',');
AXY.Save.Window_SavefileList_drawFileId = Window_SavefileList.prototype.drawFileId;
Window_SavefileList.prototype.drawFileId = function (id, x, y) {
	AXY.Save.Window_SavefileList_drawFileId.call(this);

	AXY.Save.Variable.filenamearr[id] = TextManager.file;
	/*for (var i = 0; i < AXY.Save.Variable.arr.length; i++) {
		var arrTitle = AXY.Save.Variable.arr[i].split(':');
		if (id == arrTitle[0]) {
			AXY.Save.Variable.filenamearr[id] = arrTitle[1];
		}
	};*/
	for (var i in AXY.Save.Param.ReadOnlySaveFile) {
		if (id == AXY.Save.Param.ReadOnlySaveFile[i].id) {
			AXY.Save.Variable.filenamearr[id] = AXY.Save.Param.ReadOnlySaveFile[i].title;
		}
	}

	this.drawText(AXY.Save.Variable.filenamearr[id] + ' ' + id, x, y, 180);
};

AXY.Save.Variable.ReadOnlySaveFileIdarr = AXY.Save.Param.ReadOnlySaveFileId.split(',');
//AXY.Save.DataManager_saveGame = DataManager.saveGame;
DataManager.saveGame = function (savefileId) {
	//AXY.Save.DataManager_saveGame.call(this);

	function inArray(search, array) {
		for (var i in array) {
			if (array[i].id == search) {
				return i;
			}
		}
		return false;
	}

	var index = inArray(savefileId + "", AXY.Save.Param.ReadOnlySaveFile);
	if (index !== false) {
		//SoundManager.playBuzzer();
		$.toaster({
			message: "" + AXY.Save.Param.ReadOnlySaveFile[index].notice + ""
		});
		return false;
	} else {
		$gameSystem.onBeforeSave();
		try {
			StorageManager.backup(savefileId);
			return this.saveGameWithoutRescue(savefileId);
		} catch (e) {
			console.error(e);
			try {
				StorageManager.remove(savefileId);
				StorageManager.restoreBackup(savefileId);
			} catch (e2) {}
			return false;
		}
	}

};

StorageManager.localFileDirectoryPath = function () {
	var path = require('path');
	var base = path.dirname(process.mainModule.filename);
	if (base.indexOf("www") != -1) {
		return path.join(base, '..', AXY.Save.Param.SaveFolder, '/');
	} else {
		return path.join(base, AXY.Save.Param.SaveFolder, '/');
	}
};