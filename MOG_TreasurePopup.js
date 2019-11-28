//=============================================================================
// MOG_TreasurePopup.js
//=============================================================================
/*:
 * @plugindesc AXY edit on 2019.11.28 for optimize and fix logic checkTreasurePopup. (v1.1) Apresenta o ícone e o nome do tesouro ganho.
 * @author Moghunter
 *
 * @param Duration
 * @desc Duração de apresentação do tesouro.
 * @default 15
 *
 * @param Fade Speed
 * @desc Velocidade de Fade.
 * @default 5
 *
 * @param X - Axis
 * @desc Posição X-Axis.
 * @default 0
 *
 * @param Y - Axis
 * @desc Posição Y-Axis.
 * @default -32
 *
 * @param Random Movement
 * @desc Movimento aleatório.
 * @default false
 *
 * @param X Speed
 * @desc Velocidade de movimento X-Axis.
 * @default 0
 *
 * @param Y Speed
 * @desc Velocidade de movimento Y-Axis.
 * @default 1
 *
 * @param Font Size
 * @desc Definição do tamanho da fonte.
 * @default 16
 *
 * @param Icon Scale
 * @desc Zoom do ícone de 0.10 a 3.00.
 * @default 0.60
 *
 * @param Treasure Space Y-Axis
 * @desc Espaço entre um tesouro e outro.
 * @default 20
 *
 * @param Zoom Effect
 * @desc Ativar efeito de zoom.
 * @default false
 *
 * @param Gold Popup
 * @desc Apresentar o dinheiro.
 * @default true
 *
 * @param Gold Icon Index
 * @desc Index do ícone do ouro na imagem de ícones.
 * @default 163
 *
 * @help
 * =============================================================================
 * +++ MOG - Treasure Popup (v1.1) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta o ícone e o nome do tesouro ganho.
 * =============================================================================
 * PLUGIN COMMAND
 * =============================================================================
 * Para ativar ou desativar o sistema use os comandos abaixo.
 *
 * hide_treasure_popup
 *
 * show_treasure_popup
 *
 * ============================================================================
 * HISTÓRICO
 * ============================================================================
 * (v1.1) - Melhoria da codificação e na compatibilidade de plugins.
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
var Imported = Imported || {};
Imported.MOG_TreasurePopup = true;
var Moghunter = Moghunter || {};

Moghunter.parameters = PluginManager.parameters('MOG_TreasurePopup');
Moghunter.trpopup_X = Number(Moghunter.parameters['X - Axis'] || 0);
Moghunter.trpopup_Y = Number(Moghunter.parameters['Y - Axis'] || 0);
Moghunter.trpopup_GoldVisible = String(
	Moghunter.parameters['Gold Popup'] || 'true'
);
Moghunter.trpopup_Random = String(
	Moghunter.parameters['Random Movement'] || 'false'
);
Moghunter.trpopup_SX = Number(Moghunter.parameters['X Speed'] || 0);
Moghunter.trpopup_SY = Number(Moghunter.parameters['Y Speed'] || 1);
Moghunter.trpopup_IconScale = Number(Moghunter.parameters['Icon Scale'] || 0.6);
Moghunter.trpopup_ItemSpace = Number(
	Moghunter.parameters['Treasure Space Y-Axis'] || 20
);
Moghunter.trpopup_waitD = Number(Moghunter.parameters['Duration'] || 15);
Moghunter.trpopup_Zoom = String(Moghunter.parameters['Zoom Effect'] || 'false');
Moghunter.trpopup_fadeSpeed = Number(Moghunter.parameters['Fade Speed'] || 5);
Moghunter.trpopup_goldIconIndex = Number(
	Moghunter.parameters['Gold Icon Index'] || 163
);
Moghunter.trpopup_fontSize = Number(Moghunter.parameters['Font Size'] || 16);

//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_treapopup_Gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_treapopup_Gsys_initialize.call(this);
	this._trspupData = [];
	this._trspupSprData = null;
	this._trspupVisible = true;
	this._trspupMapID = 0;
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// * Terminate
//==============================
var _mog_treapopup_scMap_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
	_mog_treapopup_scMap_terminate.call(this);
	if (this._spriteset) {
		this._spriteset.recordTreasureData();
	}
};

//=============================================================================
// ** Game Interpreter
//=============================================================================

//==============================
// * Command 125
//==============================
var _mog_treaPopUP_gint_command125 = Game_Interpreter.prototype.command125;
Game_Interpreter.prototype.command125 = function() {
	_mog_treaPopUP_gint_command125.call(this);
	if (Moghunter.trpopup_GoldVisible === 'true') {
		this.checkTreasurePopup(3);
	}
	return true;
};

//==============================
// * Command 126
//==============================
var _mog_treaPopUP_gint_command126 = Game_Interpreter.prototype.command126;
Game_Interpreter.prototype.command126 = function() {
	_mog_treaPopUP_gint_command126.call(this);
	this.checkTreasurePopup(0);
	return true;
};

//==============================
// * command 127
//==============================
var _mog_treaPopUP_gint_command127 = Game_Interpreter.prototype.command127;
Game_Interpreter.prototype.command127 = function() {
	_mog_treaPopUP_gint_command127.call(this);
	this.checkTreasurePopup(1);
	return true;
};

//==============================
// * command 128
//==============================
var _mog_treaPopUP_gint_command128 = Game_Interpreter.prototype.command128;
Game_Interpreter.prototype.command128 = function() {
	_mog_treaPopUP_gint_command128.call(this);
	this.checkTreasurePopup(2);
	return true;
};

//==============================
// * command 128
//==============================
Game_Interpreter.prototype.checkTreasurePopup = function(type) {
	if ($gameSystem._trspupVisible) {
		if (type > 2) {
			var amount = this.operateValue(
				this._params[0],
				this._params[1],
				this._params[2]
			);
		} else {
			var amount = this.operateValue(
				this._params[1],
				this._params[2],
				this._params[3]
			);
		}
		//console.log(this);
		if (
			amount > 0 &&
			SceneManager._scene.constructor.name === 'Scene_Map'
		) {
			/*for (i = 0; i < $gameMap.events().length; i++) {
				var eve = $gameMap.events()[i];
				//console.log(eve);
				if (eve && this._eventId === eve._eventId) {
					var x = eve.screenX();
					var y = eve.screenY();
					$gameSystem._trspupData.push([
						this.trPopupType(type),
						amount,
						x,
						y
					]);
				}
			}*/
			if (this._eventId == 0) {
				$gameSystem._trspupData.push([
					this.trPopupType(type),
					amount,
					$gamePlayer.screenX(),
					$gamePlayer.screenY()
				]);
			} else {
				$gameSystem._trspupData.push([
					this.trPopupType(type),
					amount,
					$gameMap._events[this._eventId].screenX(),
					$gameMap._events[this._eventId].screenY()
				]);
			}
		}
	}
};

//==============================
// * Tr popup Type
//==============================
Game_Interpreter.prototype.trPopupType = function(type) {
	if (type === 0) {
		return $dataItems[this._params[0]];
	}
	if (type === 1) {
		return $dataWeapons[this._params[0]];
	}
	if (type === 2) {
		return $dataArmors[this._params[0]];
	}
	return null;
};

//==============================
// * PluginCommand
//==============================
var _alias_mog_theaPopUP_pluginCommand =
	Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_theaPopUP_pluginCommand.call(this, command, args);
	if (command === 'show_treasure_popup') {
		$gameSystem._trspupVisible = true;
	}
	if (command === 'hide_treasure_popup') {
		$gameSystem._trspupVisible = false;
	}
	return true;
};

//=============================================================================
// ** SpriteSet Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Spriteset_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Spriteset_Base.prototype.sortMz = function() {
	this._hudField.children.sort(function(a, b) {
		return a.mz - b.mz;
	});
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//==============================
// ** create Lower Layer
//==============================
var _mog_TrePopup_sprMap_createLowerLayer =
	Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function() {
	_mog_TrePopup_sprMap_createLowerLayer.call(this);
	if (!this._hudField) {
		this.createHudField();
	}
};

//==============================
// * create Upper Layer
//==============================
var _mog_treapopup_sprmap_createUpperLayer =
	Spriteset_Map.prototype.createUpperLayer;
Spriteset_Map.prototype.createUpperLayer = function() {
	_mog_treapopup_sprmap_createUpperLayer.call(this);
	this.createTreasureField();
	if (
		$gameSystem._trspupSprData &&
		$gameSystem._trspupMapID === $gameMap._mapId
	) {
		this.loadTreasureIcons();
	} else {
		$gameSystem._trspupData = [];
		$gameSystem._trspupSprData = null;
	}
	$gameSystem._trspupMapID = $gameMap._mapId;
};

//==============================
// * record Treasure Data
//==============================
Spriteset_Map.prototype.recordTreasureData = function() {
	if (!this._treasureIcons || this._treasureIcons.length === 0) {
		return;
	}
	$gameSystem._trspupSprData = [];
	for (i = 0; i < this._treasureIcons.length; i++) {
		$gameSystem._trspupSprData[i] = {};
		$gameSystem._trspupSprData[i]._item = this._treasureIcons[i]._item;
		$gameSystem._trspupSprData[i]._amount = this._treasureIcons[i]._amount;
		$gameSystem._trspupSprData[i].x = this._treasureIcons[i].x;
		$gameSystem._trspupSprData[i].y = this._treasureIcons[i].y;
		$gameSystem._trspupSprData[i].opacity = this._treasureIcons[i].opacity;
		$gameSystem._trspupSprData[i].scale = this._treasureIcons[i].scale.x;
		$gameSystem._trspupSprData[i]._sx = this._treasureIcons[i]._sx;
		$gameSystem._trspupSprData[i]._sy = this._treasureIcons[i]._sy;
		$gameSystem._trspupSprData[i]._cx = this._treasureIcons[i]._cx;
		$gameSystem._trspupSprData[i]._cy = this._treasureIcons[i]._cy;
		$gameSystem._trspupSprData[i]._wait = this._treasureIcons[i]._wait;
	}
};

//==============================
// * create Treasure Field
//==============================
Spriteset_Map.prototype.createTreasureField = function() {
	this._treasureIcons = [];
	this._treasureField = new Sprite();
	this._treasureField.mz = 110;
	this.addChild(this._treasureField);
	this.sortMz();
};

//==============================
// * create Upper Layer
//==============================
var _mog_treapopup_sprmap_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
	_mog_treapopup_sprmap_update.call(this);
	if (this._treasureField) {
		this.updateTreasureIcons();
	}
};

//==============================
// * load Treasure Icons
//==============================
Spriteset_Map.prototype.loadTreasureIcons = function() {
	for (i = 0; i < $gameSystem._trspupSprData.length; i++) {
		this._treasureIcons.push(
			new TreasureIcons(
				null,
				$gameSystem._trspupSprData[i],
				i,
				$gameSystem._trspupSprData.length
			)
		);
		this._treasureField.addChild(this._treasureIcons[i]);
	}
	$gameSystem._trspupSprData = null;
};

//==============================
// * refresh Treasure Icons
//==============================
Spriteset_Map.prototype.refreshTreasureIcons = function() {
	for (i = 0; i < $gameSystem._trspupData.length; i++) {
		this._treasureIcons.push(
			new TreasureIcons(
				$gameSystem._trspupData[i],
				null,
				i,
				$gameSystem._trspupData.length
			)
		);
		this._treasureField.addChild(
			this._treasureIcons[this._treasureIcons.length - 1]
		);
	}
	$gameSystem._trspupData = [];
};

//==============================
// * need Refresh Treasure Icons
//==============================
Spriteset_Map.prototype.needRefreshTreasureIcons = function() {
	if ($gameSystem._trspupData.length > 0) {
		return true;
	}
	return false;
};

//==============================
// * create Treasure Icons
//==============================
Spriteset_Map.prototype.updateTreasureIcons = function() {
	if (this.needRefreshTreasureIcons()) {
		this.refreshTreasureIcons();
	}
	for (i = 0; i < this._treasureIcons.length; i++) {
		if (
			this._treasureIcons[i].opacity === 0 &&
			this._treasureIcons[i]._wait[1] <= 0
		) {
			this._treasureField.removeChild(this._treasureField[i]);
			this._treasureIcons.splice(i, 1);
		}
	}
};

//=============================================================================
// * Treasure Icons
//=============================================================================
function TreasureIcons() {
	this.initialize.apply(this, arguments);
}

TreasureIcons.prototype = Object.create(Sprite.prototype);
TreasureIcons.prototype.constructor = TreasureIcons;

//==============================
// * Initialize
//==============================
TreasureIcons.prototype.initialize = function(data, dataOld, fx, fmax) {
	Sprite.prototype.initialize.call(this);
	this._fadeSpeed = Math.min(Math.max(Moghunter.trpopup_fadeSpeed, 1), 100);
	this._waitR = Math.min(Math.max(Moghunter.trpopup_waitD, 1), 999);
	this._zoomAn = String(Moghunter.trpopup_Zoom) === 'true' ? true : false;
	this._fx = fx;
	this._fmax = fmax * this.waitD();
	this.createName();
	this.createIcon();
	if (dataOld) {
		this.setupOld(dataOld);
	} else {
		this.setupNew(data);
	}
	this.refreshIcon();
	this.refreshName();
	this.x = -this.screenX() + this._cx;
	this.y = -this.screenY() + this._cy;
};

//==============================
// * SetupOld
//==============================
TreasureIcons.prototype.setupOld = function(data) {
	this._item = data._item;
	this._amount = data._amount;
	this.x = data.x;
	this.y = data.y;
	this.scale.x = data.scale;
	this.scale.y = data.scale;
	this.opacity = data.opacity;
	this._sx = data._sx;
	this._sy = data._sy;
	this._cx = data._cx;
	this._cy = data._cy;
	this._wait = data._wait;
};

//==============================
// * wait D
//==============================
TreasureIcons.prototype.waitD = function() {
	return this._waitR;
};

//==============================
// * SetupNew
//==============================
TreasureIcons.prototype.setupNew = function(data) {
	this._item = data[0];
	this._amount = data[1];
	var name = this._item
		? this._item.name + ' x ' + this._amount
		: this._amount;
	var wd = this._name.bitmap.measureTextWidth(name);
	this._cx =
		data[2] -
		(Window_Base._iconWidth + 12 + wd) / 2 +
		Moghunter.trpopup_X +
		this.screenX();
	this._cy =
		data[3] -
		Window_Base._iconHeight +
		Moghunter.trpopup_Y +
		this.screenY();
	this._cy -= this._fx * Moghunter.trpopup_ItemSpace;
	var iw = this._fx * this.waitD();
	var iw2 = this.waitD() + (this._fmax - iw);
	this._wait = [15, iw2];
	this.opacity = 0;
	if (String(Moghunter.trpopup_Random) === 'true') {
		var d = Math.randomInt(2);
		var sx = Math.random() * this.sxi() + this.sxi();
		this._sx = d === 0 ? sx : -sx;
		this._sy = -(Math.random() + this.syi());
	} else {
		this._sx = this.sxi();
		this._sy = -this.syi();
	}
};

//==============================
// * sxi
//==============================
TreasureIcons.prototype.sxi = function() {
	return Moghunter.trpopup_SX;
};

//==============================
// * syi
//==============================
TreasureIcons.prototype.syi = function() {
	return Moghunter.trpopup_SY;
};

//==============================
// * createIcon
//==============================
TreasureIcons.prototype.createIcon = function() {
	this._iconImg = ImageManager.loadSystem('IconSet');
	this._icon = new Sprite(this._iconImg);
	this._icon.scale.x = Math.min(
		Math.max(Moghunter.trpopup_IconScale, 0.1),
		3.0
	);
	this._icon.scale.y = this._icon.scale.x;
	this._icon.anchor.x = 0.5;
	this._icon.anchor.y = 0.5;
	this._icon.x = Window_Base._iconWidth / 2;
	this._icon.y = Window_Base._iconHeight / 2;
	this.addChild(this._icon);
};

//==============================
// * refresh Icon
//==============================
TreasureIcons.prototype.refreshIcon = function() {
	var w = Window_Base._iconWidth;
	var h = Window_Base._iconHeight;
	var iconindex = this._item
		? this._item.iconIndex
		: Moghunter.trpopup_goldIconIndex;
	var sx = (iconindex % 16) * w;
	var sy = Math.floor(iconindex / 16) * h;
	this._icon.setFrame(sx, sy, w, h);
};

//==============================
// * create Name
//==============================
TreasureIcons.prototype.createName = function() {
	this._name = new Sprite(new Bitmap(150, 32));
	this._name.x = Window_Base._iconWidth + 4;
	this._name.bitmap.fontSize = Moghunter.trpopup_fontSize;
	this.addChild(this._name);
};

//==============================
// * refresh Name
//==============================
TreasureIcons.prototype.refreshName = function() {
	this._name.bitmap.clear();
	var name = this._item
		? this._item.name + ' x ' + this._amount
		: this._amount;
	this._name.bitmap.drawText(name, 0, 0, 145, 32);
};

//==============================
// * screen Y
//==============================
TreasureIcons.prototype.screenX = function() {
	return $gameMap.displayX() * $gameMap.tileWidth();
};

//==============================
// * screen Y
//==============================
TreasureIcons.prototype.screenY = function() {
	return $gameMap.displayY() * $gameMap.tileHeight();
};

//==============================
// * Update Position
//==============================
TreasureIcons.prototype.updatePosition = function() {
	this.x = -this.screenX() + this._cx;
	this.y = -this.screenY() + this._cy;
};

//==============================
// * Update Movement
//==============================
TreasureIcons.prototype.updateMovement = function() {
	this._cx += this._sx;
	this._cy += this._sy;
};

//==============================
// * Update Other
//==============================
TreasureIcons.prototype.updateOther = function() {
	this.opacity -= this._fadeSpeed;
	if (this._zoomAn) {
		this.scale.x += 0.01;
		this.scale.y = this.scale.x;
	}
};

//==============================
// * Update
//==============================
TreasureIcons.prototype.update = function() {
	Sprite.prototype.update.call(this);
	if (this._wait[0] > 0) {
		this._wait[0]--;
		this.opacity += 17;
		this.updatePosition();
		if (this._wait[1] <= 0) {
			this.opacity += 255;
			this._wait[0] = 0;
		}
		return;
	}
	if (this._wait[1] > 0) {
		this._wait[1]--;
		this.updatePosition();
		return;
	}
	this.updateMovement();
	this.updateOther();
	this.updatePosition();
};
