//=============================================================================
// MOG_Music_Book.js
//=============================================================================

/*:
 * @plugindesc (v1.5) O plugin adiciona a cena Livro de Músicas.
 * @author Moghunter
 *
 * @param Command Menu
 * @desc Ativar o comando da cena de música.
 * @default true
 *
 * @param Command Word
 * @desc Definição do nome do comando.
 * @default Music Book
 *
 * @param List Fade Duration
 * @desc Tempo para dar fade na lista.
 * @default 120
 *
 * @param Completion Word
 * @desc Definição da palavra completado.
 * @default Completion
 *
 * @param Meter X-Axis
 * @desc Posição do medidor de tempo X-Axis
 * @default 90
 *
 * @param Meter Y-Axis
 * @desc Posição do medidor de tempo Y-Axis
 * @default 0 
 *
 * @param Point X-Axis
 * @desc Posição do ponteiro do tempo X-Axis
 * @default 0  
 *
 * @param Point Y-Axis
 * @desc Posição do ponteiro do tempo Y-Axis
 * @default 5  
 *
 * @param Number X-Axis
 * @desc Posição do ponteiro do tempo X-Axis
 * @default 350
 *
 * @param Number Y-Axis
 * @desc Posição do ponteiro do tempo Y-Axis
 * @default 16
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Music Book (v1.5) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * O plugin adiciona uma cena onde podem ser acessadas as músicas tocadas no
 * jogo.
 * =============================================================================
 * Para chamar o cena use o comando abaixo através do Plugin Command.
 * Por padrão a cena de Música pode ser acessada pelo Menu principal.
 *
 * music_book
 *
 * =============================================================================
 * As imagens correspondentes as músicas devem ser gravadas na pasta
 *
 * /img/musicbook/ 
 *
 * E as imagem deve ter o nome igual ao arquivo de música para aparecerem na 
 * tela.
 * =============================================================================
 * A descrição e o titulo da música devem ser feitas no arquivo 
 *
 * Music_Titles.txt
 *
 * Este arquivo deve estar gravado na pasta /Data/
 *
 * =============================================================================
 * Para configurar o script escreva estes comentários no arquivo Music_Titles.txt
 * O arquivo pode ser aberto com o programa de "Bloco de Notas" comum.
 *
 * FILE_NAME : TITLE_OF_MUSIC : DESCRIPTION : PARTICLE_NAME : PX : PY
 *
 * FILE_NAME      - Nome do arquivo da música.
 * TITLE_OF_MUSIC - Titulo da música.
 * DESCRIPTION    - Descrição da música.
 * PARTICLE_NAME  - Nome do arquivo da partícula. (Opcional)
 * PX             - Velocidade da partícula horizontal.
 * PY             - Velocidade da partícula vertical.
 *
 * Exemplo
 *
 * Battle3:Battle For Freedom:Battle Theme 3 (Rpg Maker MV)
 * Dungeon1:Empire Of Angels:Dungeon Theme 1 (Rpg Maker MV):particle_1:0:-1
 * Field1:Our Destiny:FieldTheme 1 (Rpg Maker MV)
 * 
 * =============================================================================
 * HISTÓRICO 
 * =============================================================================
 * (1.5) Correção do bug Required no modo WEB, no entanto a quantidade de músicas
 *       será baseado no setup do Plugin. 
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_Music_Book = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_Music_BookModifyByAXY');
    Moghunter.musicbook_command_menu = String(Moghunter.parameters['Command Menu'] || "true");
    Moghunter.musicbook_command_name = String(Moghunter.parameters['Command Word'] || "Music Book");
	Moghunter.musicbook_fade_time = Number(Moghunter.parameters['List Fade Duration'] || 120);
	Moghunter.musicbook_completion_word = String(Moghunter.parameters['Completion Word'] || "Completion");
	Moghunter.musicbook_meter_x = Number(Moghunter.parameters['Meter X-Axis'] || 90);
	Moghunter.musicbook_meter_y = Number(Moghunter.parameters['Meter Y-Axis'] || 0);
	Moghunter.musicbook_point_x = Number(Moghunter.parameters['Point X-Axis'] || 0);
	Moghunter.musicbook_point_y = Number(Moghunter.parameters['Point Y-Axis'] || 5);	
    Moghunter.musicbook_time_number_x = Number(Moghunter.parameters['Number X-Axis'] || 350);
	Moghunter.musicbook_time_number_y = Number(Moghunter.parameters['Number Y-Axis'] || 16);
	
	
//=============================================================================
// ** TITLES SETTING
//=============================================================================	
	Moghunter.musicbook_titles = [
		["001start","标题页面","门仓聪","particle_1",0,-1],
		["002hunligangqinqu","婚礼进行曲","大神"],
		["002name","输入名称","大神"],
		["003yongshizhilian","勇士之恋","门仓聪"],
		["013yuanwuqu","圆舞曲","门仓聪"],
		["022liuliang","流浪","masaki"],
		["033bayinheherolove","八音盒勇士之恋","门仓聪"],
		["beishangsaiwaixue","悲伤塞外雪","张永","particle_1",0,-1],
		["youmei8yin","优美八音","大神"],
		["001hunlihuyanbin","悲伤婚礼","胡彦斌"],
		["my001zgzmn","中国丈母娘","何龙雨"],
		["tank1","坦克坦克，爆裂坦克","门仓聪","particle_1",0,-1]
	];
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Music Book
//==============================
ImageManager.loadmusicbook = function(filename) {
    return this.loadBitmap('img/musicbook/', filename, 0, true);
};	

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_music_book_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_music_book_pluginCommand.call(this,command, args)
	if (command === "music_book")  {$gameSystem.music_book();};
	return true;
};

//=============================================================================
// ** AudioManager
//=============================================================================	

//==============================
// * Play Bgm
//==============================
var _alias_mog_musicbook_aumngr_playBgm = AudioManager.playBgm
AudioManager.playBgm = function(bgm, pos) {
    _alias_mog_musicbook_aumngr_playBgm.call(this,bgm,pos);
	//console.log($gameSystem);
	if($gameSystem != null){//by xy 2016.12.29
		if ($gameSystem._music_list && bgm.name) {
		for (var i = 0; i < $gameSystem._music_list.length; i++) {
		if ($gameSystem._music_list[i][1] === bgm.name) {$gameSystem._music_list[i][0] = true}; 
		};};	
		$gameTemp._bgmBuffer = this._bgmBuffer;
	}
};

//==============================
// * Stop Bgm
//==============================
var _alias_mog_musicbook_stopBgm = AudioManager.stopBgm;
AudioManager.stopBgm = function() {
    _alias_mog_musicbook_stopBgm.call(this);
	//$gameTemp._bgmBuffer = null;
};

//==============================
// * Fade OutBgm
//==============================
var _alias_mog_musicbook_fadeOutBgm = AudioManager.fadeOutBgm;
AudioManager.fadeOutBgm = function(duration) {
    _alias_mog_musicbook_fadeOutBgm.call(this,duration);
	$gameTemp._bgmBuffer = null;
};

//=============================================================================
// ** Game_Temp
//=============================================================================	

//==============================
// * Initialize
//==============================
var _alias_mog_musicbook_gtemp_initialize = Game_Temp.prototype.initialize
Game_Temp.prototype.initialize = function() {
	_alias_mog_musicbook_gtemp_initialize.call(this);
	this._bgmBuffer = null;
};

//=============================================================================
// ** Game_System
//=============================================================================	

//==============================
// * Bgm Duration
//==============================
Game_System.prototype.bgm_duration = function(type) {
	if (!$gameTemp._bgmBuffer || !$gameTemp._bgmBuffer.isReady()) {return 0};
	var duration = $gameTemp._bgmBuffer._totalTime / $gameTemp._bgmBuffer._pitch
	if (type === 0) {duration = Math.floor(duration);}
	return duration 
};

//==============================
// * Bgm pos
//==============================
Game_System.prototype.bgm_pos = function(type) {
	if (!$gameTemp._bgmBuffer || !$gameTemp._bgmBuffer.isReady()) {return 0};
    if (type === 0) {return Math.floor($gameTemp._bgmBuffer.seek());}
	else {return $gameTemp._bgmBuffer.seek()};
};

//==============================
// * Bgm bgm_loopLength
//==============================
Game_System.prototype.bgm_loopLength = function(type) {
	if (!$gameTemp._bgmBuffer || !$gameTemp._bgmBuffer.isReady()) {return 0};
    return $gameTemp._bgmBuffer._loopStart
};

//==============================
// * Bgm Length Text
//==============================
Game_System.prototype.bgmLengthText = function() {
    var hour = Math.floor(this.bgm_duration(0) / 60 / 60);
    var min = Math.floor(this.bgm_duration(0) / 60) % 60;
    var sec = this.bgm_duration(0) % 60;
    return hour.padZero(1) + ':' + min.padZero(2) + ':' + sec.padZero(2);
};

//==============================
// * Bgm Pos Text
//==============================
Game_System.prototype.bgmPosText = function() {
    var hour = Math.floor(this.bgm_pos(0) / 60 / 60);
    var min = Math.floor(this.bgm_pos(0) / 60) % 60;
    var sec = this.bgm_pos(0) % 60;
    return hour.padZero(1) + ':' + min.padZero(2) + ':' + sec.padZero(2);
};

//==============================
// * Make Music List
//==============================
Game_System.prototype.make_music_list = function() {
	var music_data = Moghunter.musicbook_titles;
	this._music_list = [];
	for (var i = 0; i < music_data.length; i++) {
		 var e = true;
		 var t = "";
		 var h = "";
		 var pn = null;
		 var px = 0;
		 var py = 0;		 
		 if (music_data[i][0] === $dataSystem.titleBgm.name) {e = true};
	     if (music_data[i][1]) {t = music_data[i][1]};
		 if (music_data[i][2]) {h = music_data[i][2]};
		 if (music_data[i][3]) {pn = music_data[i][3]};
		 if (music_data[i][4]) {px = music_data[i][4]};
		 if (music_data[i][5]) {py = music_data[i][5]};
		 this._music_list[i] = [e,music_data[i][0],t,h,pn,px,py];
	};	
};

//==============================
// * Music Book
//==============================
Game_System.prototype.music_book = function() {
	if (!this._music_list) {return};
    SoundManager.playOk();
    SceneManager.push(Scene_Music_Book);
};

//=============================================================================
// ** Scene Map
//=============================================================================	

//==============================
// * Initialize
//==============================
var _alias_mog_music_book_create = Scene_Map.prototype.create
Scene_Map.prototype.create = function() {
	_alias_mog_music_book_create.call(this)
	if (!$gameSystem._music_list) {$gameSystem.make_music_list();};
}

//=============================================================================
// ** Window Music List
//=============================================================================	
function Window_MusicList() {
    this.initialize.apply(this, arguments);
};

Window_MusicList.prototype = Object.create(Window_Selectable.prototype);
Window_MusicList.prototype.constructor = Window_MusicList;

//==============================
// * Initialize
//==============================
Window_MusicList.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	this._ismoved = false;
	this._data = $gameSystem._music_list;
	this.activate();
	this.select(0);	
	this.refresh();
};

//==============================
// * Set Top Row
//==============================
var _alias_mog_music_book_setTopRow = Window_MusicList.prototype.setTopRow;
Window_MusicList.prototype.setTopRow = function(row) {
    _alias_mog_music_book_setTopRow.call(this,row);
	this._ismoved = true;
};

//==============================
// * ScrollDown
//==============================
var _alias_mog_music_book_wm_scrollDown = Window_MusicList.prototype.scrollDown
Window_MusicList.prototype.scrollDown = function() {
   _alias_mog_music_book_wm_scrollDown.call(this);
   this._ismoved = true;
};

//==============================
// * ScrollUp
//==============================
var _alias_mog_music_book_wm_scrollUp = Window_MusicList.prototype.scrollUp
Window_MusicList.prototype.scrollUp = function() {
    _alias_mog_music_book_wm_scrollUp.call(this);
    this._ismoved = true;   
};

//==============================
// * PageDown
//==============================
var _alias_mog_music_book_wm_cursorPagedown = Window_MusicList.prototype.cursorPagedown
Window_MusicList.prototype.cursorPagedown = function() {
	_alias_mog_music_book_wm_cursorPagedown.call(this)
    this._ismoved = true; 
};

//==============================
// * PageUP
//==============================
var _alias_mog_music_book_wm_cursorPageup = Window_MusicList.prototype.cursorPageup
Window_MusicList.prototype.cursorPageup = function() {
	_alias_mog_music_book_wm_cursorPageup.call(this)
	this._ismoved = true; 
};

//==============================
// * MaxCols
//==============================
Window_MusicList.prototype.maxCols = function() {
    return 1;
};

//==============================
// * MaxItems
//==============================
Window_MusicList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

//==============================
// * IsCurrentItemEnabled
//==============================
Window_MusicList.prototype.isCurrentItemEnabled = function(i) {
    return this._data[i][0];
};

//==============================
// * Refresh
//==============================
Window_MusicList.prototype.refresh = function() {
	this.createContents();	
	this.contents.clear();	
	this.contents.fontItalic = true;
    this.drawAllItems();
};

//==============================
// * DrawItem
//==============================
Window_MusicList.prototype.drawItem = function(i) {
    if (this._data[i]) {
		 this.changePaintOpacity(this.isCurrentItemEnabled(i));
			 var rect = this.itemRect(i);
			 rect.width -= this.textPadding();				 
			 if (this.isCurrentItemEnabled(i)) {
			     if (this._data[i][2] != "") {
				    this.drawText(this._data[i][2] , rect.x, rect.y, this.width - 60,"center");
				 }
				 else {
			       this.drawText(this._data[i][1] , rect.x, rect.y, this.width - 60,"center");
				 };
			 }
	    else {		 
			 this.drawText("????" , rect.x, rect.y, this.width - 60,"center");
		 };
         this.changePaintOpacity(1);
    };
};

//==============================
// * Process OK
//==============================
Window_MusicList.prototype.processOk = function() {
};

//==============================
// * isOKEnable
//==============================
Window_MusicList.prototype.isOkEnabled = function() {
    return true;
};

//==============================
// * processCancel
//==============================
var _alias_mog_music_book_processCancel = Window_Selectable.prototype.processCancel
Window_MusicList.prototype.processCancel = function() {
	_alias_mog_music_book_processCancel.call(this);
	AudioManager.stopBgm();
	BattleManager.replayBgmAndBgs()
};


//=============================================================================
// ** Window_MusicComp
//=============================================================================	
function Window_MusicComp() {
    this.initialize.apply(this, arguments);
}

Window_MusicComp.prototype = Object.create(Window_Base.prototype);
Window_MusicComp.prototype.constructor = Window_MusicComp;

//==============================
// * Initialize
//==============================
Window_MusicComp.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
	this._data = $gameSystem._music_list;
	this._data_comp = [];
	for (var i = 0; i < this._data.length; i++) {
		if (this._data[i][0]) {this._data_comp.push(this._data[i])};
	};
    this.refresh();
};

//==============================
// * Refresh
//==============================
Window_MusicComp.prototype.refresh = function() {
    this.contents.clear();
	var comp = Math.floor((this._data_comp.length / this._data.length) * 100)
	var comp2 = "(" + this._data_comp.length + "/" + this._data.length + ")"	
    this.drawText(Moghunter.musicbook_completion_word + " " + comp + " % ", 0, 0, 200,"left");
	this.drawText(comp2, 0, 0, (this.width - 32),"right");
};

//=============================================================================
// ** Window Help
//=============================================================================	

//==============================
// * Set Text Rv
//==============================
Window_Help.prototype.setText_rv = function(text) {
    if (this._text !== text) {
		var words = text.split(' ');
		var text1 = "";
		var text2 = "";
		this.textWidth(text1)
		for (var i = 0; i < words.length; i++) {
			 if (this.textWidth(text1 + words[i]) < (this.width - 32)) {text1 += words[i] + " " }
		     else {text2 += words[i] + " "};			 
		};
        this._text = text;
        this.contents.clear();
		this.drawText(text1,0,0,(this.width - 32));
		this.drawText(text2,0,this.lineHeight(),(this.width - 32));
    };
};

if (String(Moghunter.musicbook_command_menu) === "true") {
//=============================================================================
// ** Window MenuCommand
//=============================================================================	

//==============================
// * make Command List
//==============================
var _alias_mog_music_book_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
	_alias_mog_music_book_addOriginalCommands.call(this);
	this.addMusicBook();
};
	
//==============================
// * Add Music Book
//==============================	
Window_MenuCommand.prototype.addMusicBook = function() {
    this.addCommand(String(Moghunter.musicbook_command_name), 'music_book', true);
};	
	
//=============================================================================
// ** Scene Menu
//=============================================================================	

//==============================
// * create Command Window
//==============================
var _alias_mog_music_book_reateCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	_alias_mog_music_book_reateCommandWindow.call(this); 
    this._commandWindow.setHandler('music_book',      this.commandMusicBook.bind(this));
	this._commandWindow.height -= this._commandWindow.itemHeight();  
};

//==============================
// * Music Book
//==============================
Scene_Menu.prototype.commandMusicBook = function() {
	if (!$gameSystem._music_list) {return};
    SceneManager.push(Scene_Music_Book);
};

};

//=============================================================================
// ** Scene Music Book
//=============================================================================	
function Scene_Music_Book() {
    this.initialize.apply(this, arguments);
}
Scene_Music_Book.prototype = Object.create(Scene_Base.prototype);
Scene_Music_Book.prototype.constructor = Scene_Music_Book;

//==============================
// * Initialize
//==============================
Scene_Music_Book.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
	BattleManager.saveBgmAndBgs();
	AudioManager.fadeOutBgm(1);
	AudioManager.stopBgs();
	this._playing_index = -1;
	this._bgmPos_old = -1;
	this._bgmduration_old = -1;
	this._data = $gameSystem._music_list;
	this._cover_fade = false;
	this._fade_time = Math.max(Moghunter.musicbook_fade_time,1);	
    this.create_backgrounds();
	this.create_particles();
	this.create_position();
	this.create_number_time();
    this.create_window_music_list();
    this.create_window_comp();		  
    this.create_window_help();
	for (var i = 0; i < this._sprite_particles.length; i++) {
		this.reset_particles(i);
	};
};

//==============================
// * Music
//==============================
Scene_Music_Book.prototype.music = function() {
	if (!this._w_music_list) {return null}
	return this._data[this._w_music_list._index];
};

//==============================
// * Create Window Music List
//==============================
Scene_Music_Book.prototype.create_backgrounds = function() {
	this._background = new Sprite(ImageManager.loadmusicbook("Music_Book_A"));
	this.addChild(this._background);
	this._cover = new Sprite();
    this._cover.anchor.x = 0.5;
    this._cover.anchor.y = 0.5;	
	this.addChild(this._cover);	
};

//==============================
// * Create Particles
//==============================
Scene_Music_Book.prototype.create_particles = function() {	
	this._sprite_particles = [];
	this._sprite_particles_data = [];	
    for (i = 0; i < 30; i++) {
	  this._sprite_particles.push(new Sprite());
	  this.addChild(this._sprite_particles[i]);
	  this._sprite_particles_data[i] = []	  
	  this.reset_particles(i);
	  this._sprite_particles[i].x = Math.floor((Math.random() * Graphics.boxWidth));
	  this._sprite_particles[i].y = Math.floor((Math.random() * Graphics.boxHeight));
	  this._sprite_particles[i].opacity = 0;
	  this._sprite_particles[i].blendMode = 1;
    };
};
	
//==============================
// * Refresh Particles
//==============================
Scene_Music_Book.prototype.refresh_particles = function() {
   if (!this.music()[4]) {return};
   for (i = 0; i < this._sprite_particles.length; i++){
	   this._sprite_particles[i].bitmap = ImageManager.loadmusicbook(String(this.music()[4]));
	   this.reset_particles(i);
       this._sprite_particles[i].x = Math.floor((Math.random() * Graphics.boxWidth));
	   this._sprite_particles[i].y = Math.floor((Math.random() * Graphics.boxHeight));	   
   };
};

//==============================
// * Clear Particles
//==============================
Scene_Music_Book.prototype.clear_particles = function() {
   for (i = 0; i < this._sprite_particles.length; i++){
	   this._sprite_particles[i].bitmap = null;
   };
};

//==============================
// * Reset Particles
//==============================	
Scene_Music_Book.prototype.reset_particles = function(i) {	
    if (!this.music()) {return};
	this._sprite_particles_data[i][0] = Math.floor((Math.random() * 2) * this.music()[5])
	this._sprite_particles_data[i][1] = Math.floor((Math.random() * 2) * this.music()[6])
	this._sprite_particles_data[i][2] = ((Math.random() * Moghunter.title_particle_a));
	this._sprite_particles[i].opacity = 0;
	this._sprite_particles[i].x = Math.floor((Math.random() * Graphics.boxWidth));
	var pz = ((Math.random() * 0.5) * 1);
	this._sprite_particles[i].scale = new PIXI.Point(0.5 + Number(pz), 0.5 + Number(pz));
	if (Moghunter.title_particle_sy < 0) { 
	    this._sprite_particles[i].y = Graphics.boxHeight + this._sprite_particles[i].height * 2;
	}
	else if (Moghunter.title_particle_sy > 0)
	{
		this._sprite_particles[i].y = -this._sprite_particles[i].height * 2;
	}
	else {
	    this._sprite_particles[i].y = Math.floor((Math.random() * Graphics.boxHeight));
    }
	if (this._sprite_particles_data[i][0] == 0 && this._sprite_particles_data[i][1] == 0) {
        this._sprite_particles[i].x = -this._sprite_particles[i].width * 5;
		this._sprite_particles_data[i][0] = 9999;
		this._sprite_particles_data[i][1] = 9999;
	};
};

//==============================
// * Reset Particles C
//==============================	
Scene_Music_Book.prototype.reset_particles_c = function(i) {
	if (!this._sprite_particles_data) {return false};
	if (this._sprite_particles[i].x < -this._sprite_particles[i].width * 2 || this._sprite_particles[i].x > Graphics.boxWidth + this._sprite_particles[i].width * 2) {return true};
	if (this._sprite_particles[i].y < -this._sprite_particles[i].height * 2 || this._sprite_particles[i].y > Graphics.boxHeight + this._sprite_particles[i].height * 2 ) {return true};
	return false;
};

//==============================
// * Update Particles
//==============================
Scene_Music_Book.prototype.update_particles = function() {	
   if (!this._sprite_particles_data) {return}
   for (var i = 0; i < this._sprite_particles.length; i++) {
        this._sprite_particles[i].x += this._sprite_particles_data[i][0];
		this._sprite_particles[i].y += this._sprite_particles_data[i][1];
		this._sprite_particles[i].opacity += 2;
		this._sprite_particles[i].rotation += this._sprite_particles_data[i][2];
    	if (this.reset_particles_c(i)) { this.reset_particles(i);};
	};
};

//==============================
// * Create Number Time
//==============================
Scene_Music_Book.prototype.create_number_time = function() {
      this._number_refresh = 0;
	  this._number_pos_data = [Moghunter.musicbook_time_number_x,Moghunter.musicbook_time_number_y];
      this._sprite_number = new Sprite(new Bitmap(300,32))
	  this._sprite_number.x = this._number_pos_data[0];
	  this._sprite_number.y = this._number_pos_data[1];
	  this.addChild(this._sprite_number);
	  this.refresh_number();
};

//==============================
// * Refresh Number
//==============================
Scene_Music_Book.prototype.refresh_number = function() {
	this._bgmPos_old = $gameSystem.bgm_pos(0);
	this._bgmduration_old = $gameSystem.bgm_duration(0);
	this._sprite_number.bitmap.clear();
	var text = $gameSystem.bgmPosText() + " : " + $gameSystem.bgmLengthText();
	this._sprite_number.bitmap.drawText(String(text),0,0,300,32,'center');
};

//==============================
// * Create Position
//==============================
Scene_Music_Book.prototype.create_position = function() {
      this._position_data = [Moghunter.musicbook_meter_x,Moghunter.musicbook_meter_y,-1,
	  Moghunter.musicbook_point_x,Moghunter.musicbook_point_y,0,0,0];
      this._sprite_pos_4 = new Sprite(ImageManager.loadmusicbook("Music_Book_B"))
	  this._sprite_pos_4.x = this._position_data[0];
	  this._sprite_pos_4.y = this._position_data[1];
	  this.addChild(this._sprite_pos_4);		  
      this._sprite_pos_1 = new Sprite(ImageManager.loadmusicbook("Music_Book_B"))
	  this._sprite_pos_1.x = this._position_data[0];
	  this._sprite_pos_1.y = this._position_data[1];
	  this.addChild(this._sprite_pos_1);
      this._sprite_pos_3 = new Sprite(ImageManager.loadmusicbook("Music_Book_B"))
	  this._sprite_pos_3.x = this._position_data[0];
	  this._sprite_pos_3.y = this._position_data[1];
	  this.addChild(this._sprite_pos_3);	  
      this._sprite_pos_2 = new Sprite(ImageManager.loadmusicbook("Music_Book_C"))
	  this._position_data[5] = this._position_data[0] + this._position_data[3];
	  this._sprite_pos_2.x = this._position_data[5];
	  this._sprite_pos_2.y = this._position_data[1] + this._position_data[4];
	  this._sprite_pos_2.anchor.x = 0.5;
	  this._sprite_pos_2.anchor.y = 0.5;
	  this.addChild(this._sprite_pos_2);	  
};

//==============================
// * Create Position
//==============================
Scene_Music_Book.prototype.refresh_position_data = function() {
	this._position_data[6] = this._sprite_pos_1.bitmap.height / 3;
	this._position_data[2] = this._sprite_pos_1.bitmap.width;
	this._position_data[1] -= this._position_data[6] + this._w_music_list.height;
	this._sprite_pos_1.setFrame(0,0, this._position_data[2], this._position_data[6]);
};

//==============================
// * Update Meter
//==============================
Scene_Music_Book.prototype.update_meter = function() {
    this._sprite_pos_3.setFrame(0,this._position_data[6], this.m_rate, this._position_data[6]);
	var loop_range = this._position_data[2] * $gameSystem.bgm_loopLength() / $gameSystem.bgm_duration(1);
	this._sprite_pos_4.setFrame(0,this._position_data[6] * 2, loop_range, this._position_data[6]);
};

//==============================
// * Set M Rate
//==============================
Scene_Music_Book.prototype.set_m_rate = function() {
	return this._position_data[2] * $gameSystem.bgm_pos(1) / $gameSystem.bgm_duration(1);
};

//==============================
// * Update Position
//==============================
Scene_Music_Book.prototype.update_position = function() {
    this._sprite_pos_2.x = this._position_data[5] + this.m_rate;
};

//==============================
// * Create Window Music List
//==============================
Scene_Music_Book.prototype.create_window_music_list = function() {
    var w = Graphics.boxWidth;
    var h = 180;	
    var x = 0;
    var y = Graphics.boxHeight - h;	
	this._w_music_list = new Window_MusicList(x,y,w,h);
	this._w_music_list.setHandler('cancel',   this.popScene.bind(this));	
	this.addChild(this._w_music_list);
	this._fade = [0,0,Graphics.height + 72,
	              Graphics.height - this._w_music_list.height];	
}; 

//==============================
// * Create Window Comp
//==============================
Scene_Music_Book.prototype.create_window_comp = function() {
    var w = Graphics.boxWidth;
    var h = 72;	
    var x = 0;
    var y = this._w_music_list.y - h
	this._w_music_comp = new Window_MusicComp(x,y,w,h)
	this.addChild(this._w_music_comp);
	this._fade2 = [0,0,this._fade[2] - this._w_music_comp.height,
	              this._fade[3] - this._w_music_comp.height];		
};
	
//==============================
// * Initialize
//==============================
Scene_Music_Book.prototype.create_window_help = function() {
    this._helpWindow = new Window_Help();
	this._helpWindow.contents.fontItalic = true;
    this.addChild(this._helpWindow);
};

//==============================
// * Refresh Music
//==============================
Scene_Music_Book.prototype.refresh_music = function() {
	this._number_refresh = 0;
	if (!this.music()[0]) {this.nodata_effect();return};		
	SoundManager.playOk();
	if (this._playing_index === this._w_music_list._index) {return;};
	var text = this.music()[2] + " - " + this.music()[3];
	this._helpWindow.setText_rv(text);
    //this.refresh_cover();
	this.play_music();
	this._playing_index = this._w_music_list._index;
    this.clear_particles();
    this.refresh_particles();	
};

//==============================
// * No Data Effect
//==============================
Scene_Music_Book.prototype.nodata_effect = function() {
   SoundManager.playBuzzer();
   this._cover_fade = true;
   this.clear_particles();
   this._helpWindow.setText_rv("");
   AudioManager.stopBgm();
   this._playing_index = this._w_music_list._index;
};

//==============================
// * Refresh Cover
//==============================
Scene_Music_Book.prototype.refresh_cover = function() {	
	var file_name = String(this.music()[1]) + ".png"
	var path = "img/musicbook/"
	this._cover_fade = false;
	this._cover.bitmap = ImageManager.loadmusicbook(this.music()[1])
	this._cover.opacity = 0;
	this._cover.scale.x = 1.5;
	this._cover.scale.y = this._cover.scale.x;
	this._cover.x = Graphics.width / 2;
	this._cover.y = Graphics.height / 2;
};

//==============================
// * Play Music
//==============================
Scene_Music_Book.prototype.play_music = function() {  	
	var bgm = [];
	bgm.name = this.music()[1];	bgm.volume = 100;bgm.pitch = 100;bgm.pan = 0;
 	AudioManager.playBgm(bgm,0);
};

//==============================
// * Need Refresh
//==============================
Scene_Music_Book.prototype.need_refresh = function() {  
     if (this._w_music_list._ismoved) {return true};
     if (TouchInput.isTriggered()) {return true};
     if (Input.isTriggered("ok")) {return true};
     if (Input.isTriggered('up')) {return true}; 
	 if (Input.isTriggered('right')) {return true};
	 if (Input.isTriggered('left')) {return true};
	 if (Input.isTriggered('down')) {return true};
     return false;
};

//==============================
// * Update Window
//==============================
Scene_Music_Book.prototype.update_window = function() {  
	if (this._fade[0] > 0){this._fade[0] -= 1};
	if (this.need_refresh()) {this._fade[0] = this._fade_time}
	if (this._fade[0] === 0) {	
		this._w_music_list.y += 5;
		this._w_music_comp.y += 5;
		this._w_music_list.opacity -= 5;
		if (this._w_music_list.y > this._fade[2]) {this._w_music_list.y = this._fade[2];};
		if (this._w_music_comp.y > this._fade2[2]) {this._w_music_comp.y = this._fade2[2];};
	}
	else { 
	    this._w_music_list.y -= 15;
		this._w_music_comp.y -= 15;
		this._w_music_list.opacity += 10;
		if (this._w_music_list.y < this._fade[3]) {this._w_music_list.y = this._fade[3];};
		if (this._w_music_comp.y < this._fade2[3]) {this._w_music_comp.y = this._fade2[3];};
   };
   if (this._cover_fade ) {this._cover.opacity -= 5;}
   else {this._cover.opacity += 5;};
   this._w_music_list._ismoved = false;
   this._w_music_list.contentsOpacity = this._w_music_list.opacity;
   this._w_music_comp.opacity = this._w_music_list.opacity;
   this._w_music_comp.contentsOpacity = this._w_music_list.opacity;
   this._helpWindow.opacity = this._w_music_list.opacity;
   if (this._cover.scale.x > 1.00) {this._cover.scale.x -= 0.01}
   this._cover.scale.y = this._cover.scale.x;
   this._sprite_pos_1.y = this._w_music_list.y + this._position_data[1];
   this._sprite_pos_2.y = this._sprite_pos_1.y + this._position_data[4];
   this._sprite_pos_3.y = this._sprite_pos_1.y;
   this._sprite_pos_4.y = this._sprite_pos_3.y + this._position_data[6] / 2;
   this._sprite_number.x = this._number_pos_data[0] + this._sprite_pos_1.x;
   this._sprite_number.y = this._number_pos_data[1] + this._sprite_pos_1.y;   
}; 
  
//==============================
// * Need Refresh Number
//==============================
Scene_Music_Book.prototype.need_refresh_number = function() { 
	if (this._bgmPos_old != $gameSystem.bgm_pos(0)) {return true};
	if (this._bgmduration_old != $gameSystem.bgm_duration(0)) {return true};
	return false;
};

//==============================
// * Update
//==============================
Scene_Music_Book.prototype.update = function() {   
    Scene_Base.prototype.update.call(this);	
	if (!this.music()) {return};
	this._number_refresh += 1
	this.m_rate = this.set_m_rate();
	if (this.need_refresh_number()) {this.refresh_number();this._number_refresh = 0};
	if (Input.isTriggered("ok") || (TouchInput.isTriggered() && this._w_music_list.isTouchedInsideFrame())) {this.refresh_music()};
    if (this._position_data[2] === -1 && this._sprite_pos_1.bitmap.isReady()) {this.refresh_position_data()};
	if (this._position_data[2] > -1) {this.update_position()};
	this.update_particles();
	this.update_meter();
    this.update_window();
};
