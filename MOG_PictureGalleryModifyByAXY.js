//=============================================================================
// MOG_PictureGallery.js
//=============================================================================

/*:
 * @plugindesc (v1.5) O plugin adiciona uma cena de galeria de imagens.
 * @author Moghunter
 *
 * @param Number of Pictures
 * @desc Definição da quantidade de imagens.
 * @default 4
 *
 * @param Command Menu
 * @desc Ativar o comando da cena da galeria.
 * @default true
 *
 * @param Command Word
 * @desc Definição do nome do comando.
 * @default Picture Gallery
 *
 * @param Completion Word
 * @desc Definição da palavra completado.
 * @default Completion
 *
 * @param Number Word
 * @desc Definição da palavra completado.
 * @default Pic 
 *
 * @param Thumbnails For Line
 * @desc Definição da quantidade de Thumb por linha.
 * @default 3
 * 
 * @param Thumbnail X-Axis
 * @desc Definição da imagem prévia X-Axis.
 * @default 23
 *
 * @param Thumbnail Y-Axis
 * @desc Definição da imagem prévia Y-Axis.
 * @default 25 
 *
 * @param Number X-Axis
 * @desc Definição do numero X-Axis.
 * @default 0
 *
 * @param Number Y-Axis
 * @desc Definição do numero Y-Axis.
 * @default -32
 *
 * @param Info Visible
 * @desc Ativar a janela de Informação.
 * @default true
 *
 * @param Info X-Axis
 * @desc Definição X-Axis da janela de informação.
 * @default 0
 *
 * @param Info Y-Axis
 * @desc Definição Y-Axis da janela de informação.
 * @default 0
 *
 * @param Info Duration
 * @desc Duração da janela de informação.
 * @default 90
 * 
 * @param Double Click Speed
 * @desc Definição do tempo para clicar 2x
 * e cancelar a imagem.
 * @default 10
 *
 * @param File Directory
 * @desc Definição do diretório das imagens.
 * @default img/pictures/
 *
 * @param File Name
 * @desc Definição do nome dos arquivos que aparecerão na galeria de imagens.
 * @default Pic_
 *
 * @param Fit Screen Key
 * @desc Definição da Tecla que ajusta imagem ao tamanho da tela.
 * @default pagedown
 *
 * @param Set Wallpaper
 * @desc Ativar a função definir Wallpaper.
 * @default true
 *
 * @param Set Wallpaper Key
 * @desc Definição da Tecla que define o papel de parede.
 * @default pageup
 *
 * @help  
 * =============================================================================
 * +++ MOG - Picture Gallery (v1.5) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * O plugin adiciona uma cena de galeria de imagens.
 * =============================================================================
 * As imagens devem ser gravadas na pasta
 *
 * img/picturegallery/
 *
 * Serão necessários ter as imagens.
 *
 * Pic_Thumb.png
 * Pic_Info.png
 *
 * =============================================================================
 * Para chamar o cena use o comando abaixo através do Plugin Command.
 * Por padrão a cena da Galeria pode ser acessada pelo Menu principal.
 *
 * picture_gallery
 *
 * =============================================================================
 * Para ativar ou desativar as imagens use o comando abaixo  através do
 * plugin command
 *
 * enable_picture : ID
 * disable_picture : ID
 *
 * =============================================================================
 * HISTÓRICO
 * =============================================================================
 * (v1.5) - Possibilidade de definir o papel de parede usando a galeria de imagens.
 *          (Requer o plugin do Menu Background)
 *        - Melhores efeitos.
 * (v1.4) - Compatibilidade com MOG Menu Cursor. 
 * (v1.3) - Correção do bug Required no modo WEB, no entanto a quantidade de pictures
 *        deverá ser definido pelo plugin. 
 * (v1.2) - Correção de não ler os arquivos quando o sistema é convertido para
 *          outras plataformas. (Deployment) 
 * (v1.1) - Possibilidade de definir o diretório das imagens, por padrão as 
 *          imagens ficarão gravadas na pasta img/pictures/ , dessa forma é
 *          possível usar as pictures no meio do jogo e na galeria ao
 *          mesmo tempo.
 *        - Adicionado a função Fit Screen. 
 * ============================================================================= 
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_PictureGallery = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_PictureGalleryModifyByAXY');
    Moghunter.picturegallery_picture_number = Number(Moghunter.parameters['Number of Pictures'] || 3);
	Moghunter.picturegallery_setWallpaper = String(Moghunter.parameters['Set Wallpaper'] || "true");
    Moghunter.picturegallery_command_menu = String(Moghunter.parameters['Command Menu'] || "true");
    Moghunter.picturegallery_command_name = String(Moghunter.parameters['Command Word'] || "Picture Gallery");
	Moghunter.picturegallery_completion_word = String(Moghunter.parameters['Completion Word'] || "Completion");
	Moghunter.picturegallery_number_word = String(Moghunter.parameters['Number Word'] || "Pic");
	Moghunter.picturegallery_thumbnail_x = Number(Moghunter.parameters['Thumbnail X-Axis'] || 23);
	Moghunter.picturegallery_thumbnail_y = Number(Moghunter.parameters['Thumbnail Y-Axis'] || 25);
	Moghunter.picturegallery_cols = Number(Moghunter.parameters['Thumbnails For Line'] || 3);
	Moghunter.picturegallery_number_x = Number(Moghunter.parameters['Number X-Axis'] || 0);
	Moghunter.picturegallery_number_y = Number(Moghunter.parameters['Number Y-Axis'] || -32);	
	Moghunter.picturegallery_double_click_speed = Number(Moghunter.parameters['Double Click Speed'] || 10);	
	Moghunter.picturegallery_directory = String(Moghunter.parameters['File Directory'] || "img/pictures/");	
	Moghunter.picturegallery_file_name = String(Moghunter.parameters['File Name'] || "Pic_");	
	Moghunter.picturegallery_fit_screen_key = String(Moghunter.parameters['Fit Screen Key'] || 'pagedown');
	Moghunter.picturegallery_wallpaper_key = String(Moghunter.parameters['Set Wallpaper Key'] || 'pageup');
	Moghunter.picturegallery_info = String(Moghunter.parameters['Info Visible'] || 'true');
	Moghunter.picturegallery_infoX = Number(Moghunter.parameters['Inof X-Axis'] || 0);
	Moghunter.picturegallery_infoY = Number(Moghunter.parameters['Inof Y-Axis'] || 0);
	Moghunter.picturegallery_infoDuration = Number(Moghunter.parameters['Info Duration'] || 90);
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Picture Gallery
//==============================
ImageManager.picturegallery = function(filename) {
    return this.loadBitmap(Moghunter.picturegallery_directory, filename, 0, true);
};	

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_picturegallery_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_picturegallery_pluginCommand.call(this,command, args)
	if (command === "picture_gallery")  {$gameSystem.picturegallery()};
	if (command === "enable_picture")  {$gameSystem.enable_picture(Number(args[0].replace(':','')),true)};
	if (command === "disable_picture")  {$gameSystem.enable_picture(Number(args[0].replace(':','')),false)};
	return true;
};
 
//=============================================================================
// ** Game_System
//=============================================================================	

//==============================
// * Make Picture List
//==============================
Game_System.prototype.make_picture_list = function() {
	this._picgl_data = [];	
	for (var i = 0; i < Moghunter.picturegallery_picture_number; i++) {
		this._picgl_data[i] = [false,String(Moghunter.picturegallery_file_name + (i + 1))]
	};
};

//==============================
// * Enable Picture
//==============================
Game_System.prototype.enable_picture = function(value,enable) {
	var pic_id = Math.max(value - 1,0)
	if (!this._picgl_data || !this._picgl_data[pic_id]) {return};
    if (!this._picgl_data[pic_id]) {this._picgl_data[pic_id] = [true,""]};
	this._picgl_data[pic_id][0] = enable;
};

//==============================
// * Picture Gallery
//==============================
Game_System.prototype.picturegallery = function() {
	if (!this._picgl_data || this._picgl_data.length === 0) {//SoundManager.playBuzzer();
	alert("There are no " + Moghunter.picturegallery_file_name + ".png files in this /" + Moghunter.picturegallery_directory + " folder...");
    SceneManager.exit();return};
    SoundManager.playOk();
    SceneManager.push(Scene_Picture_Gallery);
};

//=============================================================================
// ** Scene Map
//=============================================================================	

//==============================
// * Initialize
//==============================
var _alias_mog_picturegallery_create = Scene_Map.prototype.create
Scene_Map.prototype.create = function() {
	_alias_mog_picturegallery_create.call(this)
	if (!$gameSystem._picgl_data) {$gameSystem.make_picture_list();};
}

//=============================================================================
// ** Window Picture List
//=============================================================================	
function Window_PictureList() {
    this.initialize.apply(this, arguments);
};

Window_PictureList.prototype = Object.create(Window_Selectable.prototype);
Window_PictureList.prototype.constructor = Window_PictureList;

//==============================
// * Initialize
//==============================
Window_PictureList.prototype.initialize = function(x, y, width, height,pictures,no_data_pic) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	this._pictures = pictures;
	this._pic_no_data = no_data_pic;
	this._pic_thumb = [];
	this._pic_name = [];
	this._check_data = false;
	this._data = $gameSystem._picgl_data;
	this.activate();
	this.select(0);	
	this.refresh();
};

//==============================
// * MaxCols
//==============================
Window_PictureList.prototype.maxCols = function() {
    return Moghunter.picturegallery_cols;
};

//==============================
// * MaxItems
//==============================
Window_PictureList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

//==============================
// * IsCurrentItemEnabled
//==============================
Window_PictureList.prototype.isCurrentItemEnabled = function(i) {
    return this._data[i][0];
};

//==============================
// * itemHeight
//==============================
Window_PictureList.prototype.itemHeight = function() {
    return this.itemWidth() - (this.itemWidth() / 3);
};

//==============================
// * Refresh
//==============================
Window_PictureList.prototype.refresh = function() {
	this.createContents();	
	this.contents.clear();	
	for (var i = 0; i < this._pic_thumb.length; i++) {
		 this._pic_thumb[i].visible = false;
		 this._pic_name[i].visible = false;
	};	
　  this.drawAllItems();
};

//==============================
// * DrawItem
//==============================
Window_PictureList.prototype.drawItem = function(i) {	
    if (this._data[i]) {
		var rect = this.itemRect(i);
		 if (!this._pic_thumb[i]) {this.create_thumb(i,rect)};
         this.refresh_position(i,rect)
    };
};

//==============================
// * Refresh Position
//==============================
Window_PictureList.prototype.refresh_position = function(i,rect) {	
	 this._pic_thumb[i].x = rect.x + Moghunter.picturegallery_thumbnail_x;
	 this._pic_thumb[i].y = rect.y + Moghunter.picturegallery_thumbnail_y;
	 this._pic_name[i].x = 	this._pic_thumb[i].x + Moghunter.picturegallery_number_x;	 
	 this._pic_name[i].y = 	this._pic_thumb[i].y + rect.height + Moghunter.picturegallery_number_y;
	 this._pic_thumb[i].visible = true;
	 this._pic_name[i].visible = true;
};

//==============================
// * Create Thumb
//==============================
Window_PictureList.prototype.create_thumb = function(i,rect) {
    var pic_w = rect.width - 10;
    var pic_h = rect.height - 15;	
	if (this.isCurrentItemEnabled(i)) {
        this._pic_thumb[i] = new Sprite(this._pictures[i]);
		this._pic_thumb[i].scX = pic_w / this._pictures[i].width;
		this._pic_thumb[i].scY = pic_h / this._pictures[i].height;
        this._pic_thumb[i].scale.x = this._pic_thumb[i].scX;
	    this._pic_thumb[i].scale.y = this._pic_thumb[i].scY;
	}
	else {
		this._pic_thumb[i] = new Sprite(this._pic_no_data);
		this._pic_thumb[i].scX = pic_w / this._pic_no_data.width;
		this._pic_thumb[i].scY = pic_h	/ this._pic_no_data.height;		
        this._pic_thumb[i].scale.x = this._pic_thumb[i].scX;
	    this._pic_thumb[i].scale.y = this._pic_thumb[i].scY;
	};
	this.addChild(this._pic_thumb[i]);		
	this._pic_name[i] = new Sprite(new Bitmap(rect.width - 10, 32))
	this._pic_name[i].bitmap.fontSize = 20; 
	this._pic_name[i].bitmap.drawText(Moghunter.picturegallery_number_word + " " + String(i + 1), 0, 0, rect.width - 10,32,"center");
	this.addChild(this._pic_name[i]);
};

//==============================
// * Update
//==============================
Window_PictureList.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
	if (this.opacity === 0) {this.visible = false}
	else {this.visible = true};
	for (var i = 0; i < this._pic_thumb.length; i++) {
		 //console.log(this._pic_thumb);
		 //console.log(i);
		 this._pic_thumb[i].opacity = this.contentsOpacity;
		 this._pic_name[i].opacity = this.contentsOpacity;
	};
};

//==============================
// * Process OK
//==============================
Window_PictureList.prototype.processOk = function() {
	this._check_data = true;
};

//==============================
// * isOKEnable
//==============================
Window_PictureList.prototype.isOkEnabled = function() {
    return true;
};

//==============================
// * Max Com
//==============================
Window_PictureList.prototype.maxCom = function() {
    return this._pic_thumb.length
};

//==============================
// * processWheel
//==============================
Window_PictureList.prototype.processWheel = function() {
	if (Imported.MOG_MenuCursor) {return};
    if (this.active) {
        var threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this._index++;
			//console.log(this._index);
			SoundManager.playCursor();
			if (this._index > (this.maxItems() - 1)) {this._index = 0};	
			this.select(this._index)		
        };
        if (TouchInput.wheelY <= -threshold) {
            //console.log(this._index);
			//console.log(this.maxItems());
			this._index--;
			//if()
			//console.log(this._index);
			SoundManager.playCursor();
			//if (this._index < 0) {this._index = (this.maxItems()  - 1)};
			if (this._index < 0) {this._index = (this._pic_thumb.length  - 1)};
			//console.log(this._index);
			this.select(this._index)	
        };
    };
};

//==============================
// * Need Update Back Opacity
//==============================
Window_PictureList.prototype.needUpdateBackOpacity = function() {
   return false;
};

//=============================================================================
// ** Window_PictureComp
//=============================================================================	
function Window_PictureComp() {
    this.initialize.apply(this, arguments);
}

Window_PictureComp.prototype = Object.create(Window_Base.prototype);
Window_PictureComp.prototype.constructor = Window_PictureComp;

//==============================
// * Initialize
//==============================
Window_PictureComp.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
	this._data = $gameSystem._picgl_data;
	this._comp_word = Moghunter.picturegallery_completion_word;
	this._data_comp = [];
	for (var i = 0; i < this._data.length; i++) {
		if (this._data[i][0]) {this._data_comp.push(this._data[i])};
	};
    this.refresh();
};

//==============================
// * Refresh
//==============================
Window_PictureComp.prototype.refresh = function() {
    this.contents.clear();
	var comp = Math.floor((this._data_comp.length / this._data.length) * 100)
	var comp2 = "(" + this._data_comp.length + "/" + this._data.length + ")"	
    this.drawText(this._comp_word + " " + comp + " % ", 0, 0, 200,"left");
	this.drawText(comp2, 0, 0, (this.width - 36),"right");
};

//==============================
// * Need Update Back Opacity
//==============================
Window_PictureComp.prototype.needUpdateBackOpacity = function() {
   return false;
};

if (String(Moghunter.picturegallery_command_menu) === "true") {
//=============================================================================
// ** Window MenuCommand
//=============================================================================	

//==============================
// * make Command List
//==============================
var _alias_mog_picgal_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
	_alias_mog_picgal_addOriginalCommands.call(this);
	this.addPictureGallery();
};
	
//==============================
// * Add Music Book
//==============================	
Window_MenuCommand.prototype.addPictureGallery = function() {
    this.addCommand(String(Moghunter.picturegallery_command_name), 'picture_gallery', true);
};	
	
//=============================================================================
// ** Scene Menu
//=============================================================================	

//==============================
// * create Command Window
//==============================
var _alias_mog_picgal_reateCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	_alias_mog_picgal_reateCommandWindow.call(this); 
    this._commandWindow.setHandler('picture_gallery',      this.commandPictureGallery.bind(this));
  	if (Imported.MOG_TimeSystem && Moghunter.timeWindow_menu) {	
	    this._commandWindow.height -= this._commandWindow.itemHeight();
	};
};

//==============================
// * Picture Gallery
//==============================
Scene_Menu.prototype.commandPictureGallery = function() {	
	$gameSystem.picturegallery();
};
};

//=============================================================================
// ** Scene Picture Gallery
//=============================================================================	
function Scene_Picture_Gallery() {
    this.initialize.apply(this, arguments);
}
Scene_Picture_Gallery.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Picture_Gallery.prototype.constructor = Scene_Picture_Gallery;

//==============================
// * Initialize
//==============================
Scene_Picture_Gallery.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
	this._data = $gameSystem._picgl_data;
	this._playing_index = -1;
    this.load_all_pictures();
	this.press_cancel = [0,0];
	this.show = [false,0];
	this._pxy = [0,0,0,0];
	this._pxy_old = [0,0,0,0,1];
	this._mxy = [0,0];
	this._wheel_d = 0;
	this._txv = null;
	this._fullMode = false;
	this._wallpaper = String(Moghunter.picturegallery_setWallpaper) === "true" ? true : false;
	this._wheelY_old = TouchInput.wheelY;
	this._fit_screen_key = String(Moghunter.picturegallery_fit_screen_key);
	this._wallpaper_key = String(Moghunter.picturegallery_wallpaper_key);
};

//==============================
// * Load All Pictures
//==============================
Scene_Picture_Gallery.prototype.load_all_pictures = function() {
	this._picture_cache = [];
	this._picture_data = [];
	this._no_data_pic = ImageManager.picturegallery("Pic_Thumb");
	for (var i = 0; i < this._data.length; i++) {
	   this._picture_cache.push(ImageManager.picturegallery(this._data[i][1]))
	   this._picture_data[i] = [-1,-1]
	};
};

//==============================
// * Refresh Picture Data
//==============================
Scene_Picture_Gallery.prototype.refresh_picture_data = function() {
	for (var i = 0; i < this._picture_cache.length; i++) {
		this._picture_data[i][0] = this._picture_cache[i].width;
		this._picture_data[i][1] = this._picture_cache[i].height;
	};
	this.create_window_comp();
    this.create_window_list();		
	this.create_backgrounds();
	if (String(Moghunter.picturegallery_info) === "true") {this.createInfo()};
};

//==============================
// * Pic Move
//==============================
Scene_Picture_Gallery.prototype.createInfo = function() {
    this._info = new Sprite(ImageManager.picturegallery("Pic_Info"));
	this._info.visible = false;
	this._info._duration = 0;
	this._info._phase = [0,-1,0];
	this._info._index = 0;
	this._info.org = [Moghunter.picturegallery_infoX,Moghunter.picturegallery_infoY];
	this._info.x = this._info.org[0];
	this._info.y = this._info.org[1] - 50;
	this.addChild(this._info);
};

//==============================
// * Pic Move
//==============================
Scene_Picture_Gallery.prototype.move_to = function(type,value) {
	if (this._fullMode) {return};
	this._pxy[type] += value;
	this._pxy[type] = this._pxy[type].clamp(this._pxy[type + 2], 0);
};

//==============================
// * Move Speed
//==============================
Scene_Picture_Gallery.prototype.move_speed = function(type,value) {
	return (this._picture_data[this.index()][0] / 120) + 1
};

//==============================
// * Limit X
//==============================
Scene_Picture_Gallery.prototype.limitX = function() {
	return (Graphics.boxWidth - this._picture_data[this.index()][0]);
};

//==============================
// * Limit Y
//==============================
Scene_Picture_Gallery.prototype.limitY = function() {
	return Graphics.boxHeight - this._picture_data[this.index()][1];
};

//==============================
// * Data
//==============================
Scene_Picture_Gallery.prototype.data = function() {
	if (!this._w_list) {return null}
	return this._data[this._w_list._index];
};

//==============================
// * Index
//==============================
Scene_Picture_Gallery.prototype.index = function() {
   if (!this._w_list) {return -1};
   return this._w_list._index;
};

//==============================
// * Create Background
//==============================
Scene_Picture_Gallery.prototype.create_backgrounds = function() {
    this._picture = new Sprite();
	this._picture._ani = [false,0,0,0];
	this.addChild(this._picture);	
};

//==============================
// * Create Window Comp
//==============================
Scene_Picture_Gallery.prototype.create_window_comp = function() {
    var w = Graphics.boxWidth;
    var h = 72;	
    var x = 0;
    var y = 0;
	this._w_comp = new Window_PictureComp(x,y,w,h)
	this.addChild(this._w_comp);
};

//==============================
// * Create Window List
//==============================
Scene_Picture_Gallery.prototype.create_window_list = function() {
    var w = Graphics.boxWidth;
    var h = Graphics.boxHeight - this._w_comp.height;	
    var x = 0;
    var y = this._w_comp.height;	
	this._w_list = new Window_PictureList(x,y,w,h,this._picture_cache,this._no_data_pic);
	this._w_list.setHandler('cancel',   this.popScene.bind(this));	
	this.addChild(this._w_list);
}; 

//==============================
// * Refresh Data
//==============================
Scene_Picture_Gallery.prototype.refresh_data = function() {
	this._w_list._check_data = false;
	this.show[1] = 2;
	if (!this.data()[0]) {this.nodata_effect();return}
	if (this.show[0]) {this.show[0] = false ; return};
	SoundManager.playOk();
    this.set_new_data();
	this._playing_index = this.index();
};

//==============================
// * Set Full Mode
//==============================
Scene_Picture_Gallery.prototype.set_FullMode = function() {
	this._fullMode = true;
	this._pxy_old = [this._pxy[0],this._pxy[1],
	this._picture.anchor.x,this._picture.anchor.y,this._picture.scale.x];
	this._pxy[0] = Graphics.boxWidth / 2;
	this._pxy[1] = Graphics.boxHeight / 2;
	this._picture.anchor.x = 0.5;
	this._picture.anchor.y = 0.5;
    var pic_w = Graphics.boxWidth;
    var pic_h = Graphics.boxHeight;
    this._picture.scale.x = pic_w / this._picture.width;
    this._picture.scale.y = pic_h / this._picture.height;
};

//==============================
// * Set Normal Mode
//==============================
Scene_Picture_Gallery.prototype.set_NormalMode = function() {
	this._fullMode = false;
	this._pxy[0] = this._pxy_old[0];
	this._pxy[1] = this._pxy_old[1];
	this._picture.anchor.x = this._pxy_old[2];
	this._picture.anchor.y = this._pxy_old[3];
    this._picture.scale.x = this._pxy_old[4];
    this._picture.scale.y = this._pxy_old[4];
};

//==============================
// * Change Picture Mode
//==============================
Scene_Picture_Gallery.prototype.changePictureMode = function() {
	SoundManager.playCursor();	
    if (!this._fullMode) {this.set_FullMode()}
	else {this.set_NormalMode()};
};

//==============================
// * SeT zoom
//==============================
Scene_Picture_Gallery.prototype.set_zoom = function(value) {
      if (this._fullMode) {return};
	  this._picture.scale.x += value;
      if (this._picture.scale.x > 1.50) {this._picture.scale.x = 1.50};
	  if (this._picture.scale.x < 1.00) {this._picture.scale.x = 1.00};
	  this._picture.scale.y = this._picture.scale.x;
};

//==============================
// * No Data Effect
//==============================
Scene_Picture_Gallery.prototype.nodata_effect = function() {
   SoundManager.playBuzzer();
   this.show[0] = false;
   this._playing_index = this.index();
};

//==============================
// * Set New Data
//==============================
Scene_Picture_Gallery.prototype.set_new_data = function() {
   this.show[0] = true;
   this._info._phase[0] = 1;
   this.press_cancel[1] = 20;
   this._pxy = [this.limitX() / 2,this.limitY() / 2,this.limitX(),this.limitY()];
   this._pxy[0] = this._pxy[0].clamp(this._pxy[2], 0);
   this._pxy[1] = this._pxy[1].clamp(this._pxy[3], 0);
   this._picture.bitmap = this._picture_cache[this.index()];
   this._picture.anchor.x = 0;
   this._picture.anchor.y = 0;
   this._picture.opacity = 0;
   this._picture.scale.x = 1.00;
   this._picture.scale.y = 1.00;
   if (this.limitX() > 0) {this._picture.anchor.x = 0.5};
   if (this.limitY() > 0) {this._picture.anchor.y = 0.5};
   this._fullMode = false;
};

//==============================
// * Update Window
//==============================
Scene_Picture_Gallery.prototype.update_window = function() {
	 if (this.show[1] > 0) {this.show[1] -= 1};
	 this._w_list.active = !this.show[0];		 
     if (this.show[0]) {
		 this._w_list.opacity -= 100;
		 this._w_list.contentsOpacity -= 25;
	     this._picture.opacity += 15;
	 } else {
		this._w_list.opacity += 25;
		this._w_list.contentsOpacity += 25;
		if (Imported.MOG_MenuBackground) {
			if (this._w_list.opacity >= Moghunter.mback_opacity) {
				this._w_list.opacity = Moghunter.mback_opacity;
			};
		};
		this._picture.opacity -= 15;
	 };
	 this._w_comp.opacity = this._w_list.opacity;
	 this._w_comp.contentsOpacity = this._w_list.contentsOpacity;
	 if (this._backgroundSpriteNew) {
	     this._backgroundSpriteNew.opacity = this._w_list.contentsOpacity;
	 };
}; 

//==============================
// * Update Picture Animation
//==============================
Scene_Picture_Gallery.prototype.updatePictureAnimation = function() {
     this._picture.opacity -= 15;
	 this._picture.scale.x += 0.01;
	 this._picture.scale.y = this._picture.scale.x;
	 if (this._picture.opacity <= 0) {
		 this._picture._ani[0] = false;
		 this.refresh_data();
	 };
};

//==============================
// * Update Input For Picture
//==============================
Scene_Picture_Gallery.prototype.update_input_for_picture = function() {  
    this.update_Input();
    this.update_TouchInput();
    this.update_picture_position();
};

//==============================
// * Update Picture Position
//==============================
Scene_Picture_Gallery.prototype.update_picture_position = function() {  
	if (this._pxy[2] <= 0) {this._picture.x = this._pxy[0];}
	else {this._picture.x = (Graphics.boxWidth / 2)};
	if (this._pxy[3] <= 0) {this._picture.y = this._pxy[1];}
	else {this._picture.y = (Graphics.boxHeight / 2)};
	this._picture.scale.y = this._picture.scale.x;	
};

//==============================
// * Update Input
//==============================
Scene_Picture_Gallery.prototype.update_Input = function() { 
    if (this.needReturnToList()) {this.return_to_data_list();};
	if (Input.isPressed("right")) {this.move_to(0,-this.move_speed())};
    if (Input.isPressed("left")) {this.move_to(0,this.move_speed())};
	if (Input.isPressed("down")) {this.move_to(1,-this.move_speed())};
	if (Input.isPressed("up")) {this.move_to(1,this.move_speed())};
	if (Input.isTriggered(this._fit_screen_key)) {this.changePictureMode()};
	if (Input.isTriggered(this._wallpaper_key)) {this.setBackground()};
};
  
//==============================
// * Need Return to List
//==============================
Scene_Picture_Gallery.prototype.needReturnToList = function() { 
   if (TouchInput.isCancelled() && !TouchInput.isPressed()) {return true};
   if (Input.isTriggered("cancel")) {return true};
   if (Input.isTriggered("ok")) {return true};
   return false;
};
  
//==============================
// * Return To Data List
//==============================
Scene_Picture_Gallery.prototype.return_to_data_list = function() {  
    SoundManager.playCancel();
	this._info._phase[0] = 0;
    this.refresh_data();
};

//==============================
// * Set Background
//==============================
Scene_Picture_Gallery.prototype.setBackground = function() {  
    $gameSystem._backgroundName = String(Moghunter.picturegallery_file_name +  (this._w_list._index + 1));
	this.set_FullMode();
	this._info._phase[0] = 0;
	this._picture._ani[0] = true;
	SoundManager.playOk();
};

//==============================
// * Set Wheel Action
//==============================
Scene_Picture_Gallery.prototype.setWheelAction = function() {  
    this._wheel_d = 5;
	if (Imported.MOG_MenuBackground && this._wallpaper) {
		if (TouchInput.wheelY > 0) {
		   this.changePictureMode();
		} else {
		   this.setBackground();
		};
	} else {
		this.changePictureMode();
	};
};



//==============================
// * Update Touch Input
//==============================
Scene_Picture_Gallery.prototype.update_TouchInput = function() {     
    if (TouchInput.isTriggered() && this.press_cancel[0] > 0 && this.press_cancel[1] === 0) {this.return_to_data_list();};
   	if (this._wheel_d > 0) {this._wheel_d -= 1}
	if (this._wheel_d === 0 && TouchInput.wheelY != 0) {this.setWheelAction()};
	if (TouchInput.isPressed()) {
		if (TouchInput.isCancelled()) {this.setBackground()};
		this.press_cancel[0] = Moghunter.picturegallery_double_click_speed;
        this._moveTo_TouchInput();
	} else {
		this._txv = null;
	};	
};

//==============================
// * MoveTo Touch Input
//==============================
Scene_Picture_Gallery.prototype._moveTo_TouchInput = function() {
    	if (this._fullMode) {return};
		if (!this._txv) {this._txv = [this._picture.x + TouchInput._x,this._picture.y + TouchInput._y];
			this._mxy[0] = TouchInput._x - this._txv[0];
			this._mxy[1] = TouchInput._y - this._txv[1];		
		};
		var mv = (this._mxy[0]) - (TouchInput._x - this._txv[0]);
		this.move_to(0,-mv);
		var mv = this._mxy[1] - (TouchInput._y - this._txv[1]);
		this.move_to(1,-mv)	;
    	this._mxy[0] = TouchInput._x - this._txv[0];
	    this._mxy[1] = TouchInput._y - this._txv[1];
};

//==============================
// * Need Update Input
//==============================
Scene_Picture_Gallery.prototype.needUpdateInput = function() {
	if (this.show[1] != 0) {return false};
	if (this._w_list.active) {return false};
	if (this._picture._ani[0]) {return false};
	return true;
};

//==============================
// * Refresh Info
//==============================
Scene_Picture_Gallery.prototype.refreshInfo = function() {
	var w = this._info.bitmap.width;
	var h = this._info.bitmap.height / 2;
	var i = h * this._info._phase[0];
	this._info.setFrame(0,i,w,h)
    this._info.opacity = 0;
    this._info._phase[1] = this._info._phase[0];
	this._info._phase[2] = 0;
	this._info._duration = Number(Moghunter.picturegallery_infoDuration);
	this._info.y = this._info.org[1] - 50;
	this._info.visible = true;
};

//==============================
// * Update Pic Info
//==============================
Scene_Picture_Gallery.prototype.updateInfo = function() {    
	if (this._info._phase[0] != this._info._phase[1]) {this.refreshInfo()};
	if (this._info._phase[2] === 0) {
		this._info.opacity += 5;
		if (this._info.y < this._info.org[1]) {
			this._info.y += 3
		    if (this._info.y > this._info.org[1]) {this._info.y = this._info.org[1]};
		};
		if (this._info.opacity >= 255) {this._info._phase[2] = 1};
	} else if (this._info._phase[2] === 1) {
		this._info.y = this._info.org[1];
		this._info._duration--;
		if (this._info._duration <= 0) {this._info._phase[2] = 2};
	} else {
		if (this._info.opacity > 0) {
			this._info.opacity -= 5;
			this._info.y -= 3;
		};
	};
};

//==============================
// * Update
//==============================
Scene_Picture_Gallery.prototype.update = function() {
	Scene_MenuBase.prototype.update.call(this);
	if (this._picture_data[0][1] === -1 && this._picture_cache[0].isReady()) {this.refresh_picture_data()};
	if (this._picture_data[0][1] === -1) {return;};
	if (!this.data()) {return};
	if (this._w_list._check_data) {this.refresh_data()};
    if (!this._picture._ani[0]) {
		this.update_window(); 
	} else {
		this.updatePictureAnimation();
	};
	if (this.needUpdateInput()) {this.update_input_for_picture()};
	if (this._info && this._info.bitmap.isReady()) {this.updateInfo()};
	if (this.press_cancel[0] > 0) {this.press_cancel[0] -= 1};
	if (this.press_cancel[1] > 0) {this.press_cancel[1] -= 1};
};