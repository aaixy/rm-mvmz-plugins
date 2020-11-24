//=============================================================================
// A XueYu Plugins - Title Video
// AXY_TitleVideo.js
//=============================================================================

// Imported
var Imported = Imported || {};
Imported.AXY_TitleVideo = true;

// Parameter Variables
var AXY = AXY || {};
AXY.TitleVideo = AXY.TitleVideo || {};
AXY.TitleVideo.TAG = "AXY_TitleVideo";

//=============================================================================
/*:
 * @plugindesc v1.08 Allows to Change Title Screen Background to Video.
 * @author A XueYu Plugins
 * @url https://666rpg.com/
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin allows to Change Title Screen Background to Video.
 *
 * changelog
 * 1.08 2020.10.28
 * optimize: Dependence Detection;
 * fix: a tag incorrect bug;
 * 1.07 2020.10.27
 * refactor: with AXY_Core.js plugin;
 * optimize: video play and many others behavior;
 * remove: License: MIT;
 * 1.06 2020.4.5
 * modify: video full name with extension;
 * 1.05 2019.11.16
 * add: pause() in setVideoTexture();
 * add: autoPlay = false;setAttribute('controls', '');setAttribute('preload', 'auto'); in setControlOptions();
 * add: playPromise in playVideo();
 * 1.04 2019.11.15
 * add: Continue the video after returning from other scenes;
 * fix: In some cases the problem of the video staying on the first frame;
 * 1.03 2019.11.14
 * add: param: title1Alpha, videoAlpha, title2Alpha. If you want to set the transparent of the video, title1 or title2 ;
 * 1.02 2019.11.13
 * add: click or touch event, pause or play video;
 * add: support system title2 layer, so you can put a title image on the video;
 * 1.01 2019.11.12
 * add: support mobile device;
 * fix: black title screen background when play video but sound is normal play;
 * fix: always play video when leave title screen;
 * modify: use new param format;
 * modify: video name without ext;
 * modify: image name chooser;
 * optimize: memory and performance;
 * 1.00 2019.11.11
 * first release.
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 *
 * @param videoName
 * @text Video Name
 * @desc File name for the video without ext name in movies folder, or full filename that with ext, or filename with ".{$ext}"
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
 * @desc Video loop? true/false default:true
 * @type boolean
 * @default true
 *
 * @param title1Alpha
 * @text Title 1 Alpha
 * @desc The alpha of title 1 that is lower layer. ranges:0-1 default:1
 * @type text
 * @default 1
 *
 * @param videoAlpha
 * @text Video Alpha
 * @desc The alpha of video that is middle layer. ranges:0-1 default:0.5
 * @type text
 * @default 0.5
 *
 * @param title2Alpha
 * @text Title 2 Alpha
 * @desc The alpha of title 2 that is upper layer. ranges:0-1 default:0.5
 * @type text
 * @default 0.5
 *
 *
 */
//================================================================================================//
var a0_0x4995=['.webm','clearStack','<font\x20color=\x22yellow\x22><b>','<style>#AXY_ErrorInfo{text-align:\x20center;\x20text-shadow:\x20rgb(0,\x200,\x200)\x201px\x201px\x203px;\x20font-size:\x2020px;\x20z-index:\x2099;\x20position:\x20absolute;\x20margin:\x20auto;\x20top:\x200px;\x20left:\x200px;\x20right:\x200px;\x20bottom:\x200px;\x20width:\x20100%;\x20height:\x2040px;}</style>','Core','snapForBackground','appendChild','createObjectURL','titleVideo','userAgent','playsinline','controls','then','width','title2Name','Texture','TAG','</b></font><font\x20color=\x22white\x22>','terminate','now','_videoSource','createVideoElement','toLowerCase','prototype','trim','responseType','playVideo\x20URL.createObjectURL(blob):\x20','from','poster','none','.{\x5c$ext}','setControlOptions','title2Alpha','_backSprite1','videoAlpha','indexOf','TitleVideo','paused','pauseVideo','Variables','_texture','body','update','name.endWith(\x22\x22):\x20','loadAndPlayVideo','innerHTML','fadeSpeed','open','createElement','addChild','log','videoFileExt','keys','status','loop','_backSprite2','anonymous','_isSceneTitleReady','loadTitle2','hasEncryptedImages','response','pause','_spriteVideo','setAttribute','createForeground','GET','video','parameters','send','createWindowLayer','extToEncryptExt','playVideo','console','Scene_Title_update','Parameters','.ogv','_video','onload','_isReady','getElementById','playStatus','source','imageName','chrome','playTitleMusic','<font\x20color=\x22yellow\x22><b>Plugin\x20Dependence\x20Detection</b></font><br>','removeAttribute','playback\x20failed:\x20','muted','create','isTriggered','src','name.endWith(\x22.{$ext}\x22):\x20','crossorigin','loadTitle1','createCommandWindow','videoName','lastRunTime','Param','endWith','isReady','AXY_ErrorInfo','replace','img/','removeVideo','playback\x20started!','div','Alias','Log','alpha','preload','play','call','start'];(function(_0x466e74,_0x499534){var _0x1932c0=function(_0x11884b){while(--_0x11884b){_0x466e74['push'](_0x466e74['shift']());}};_0x1932c0(++_0x499534);}(a0_0x4995,0x18c));var a0_0x1932=function(_0x466e74,_0x499534){_0x466e74=_0x466e74-0x0;var _0x1932c0=a0_0x4995[_0x466e74];return _0x1932c0;};var isDependenceReady=![];if(Imported['AXY_Core'])isDependenceReady=!![];else{isDependenceReady=![];const tag=AXY[a0_0x1932('0x60')][a0_0x1932('0x4c')],str='Need\x20AXY_Core.js\x20Imported\x20before!';if(navigator[a0_0x1932('0x45')][a0_0x1932('0x52')]()[a0_0x1932('0x5f')](a0_0x1932('0x1d'))>-0x1||navigator[a0_0x1932('0x45')]['toLowerCase']()[a0_0x1932('0x5f')]('firefox')>-0x1)console['log']('%c'+tag+':\x20'+'%c'+str,'color:\x20black;\x20font-weight:\x20bold;','color:\x20red;');else window[a0_0x1932('0x12')]&&window[a0_0x1932('0x12')][a0_0x1932('0x6e')](str);const errdivstrtitle=a0_0x1932('0x1f'),errdivstr=a0_0x1932('0x3e')+tag+':\x20'+a0_0x1932('0x4d')+str+'</font><br>',errdivstyle=a0_0x1932('0x3f');if(document[a0_0x1932('0x19')](a0_0x1932('0x2f')))document[a0_0x1932('0x19')](a0_0x1932('0x2f'))[a0_0x1932('0x69')]+=errdivstr;else{var errdiv=document[a0_0x1932('0x6c')](a0_0x1932('0x34'));errdiv['id']=a0_0x1932('0x2f'),errdiv[a0_0x1932('0x69')]=errdivstyle+errdivstrtitle+errdivstr,document[a0_0x1932('0x65')][a0_0x1932('0x42')](errdiv);}}isDependenceReady&&(AXY[a0_0x1932('0x60')][a0_0x1932('0x14')]=PluginManager[a0_0x1932('0xd')]('AXY_TitleVideo'),AXY[a0_0x1932('0x60')][a0_0x1932('0x2c')]=AXY[a0_0x1932('0x60')]['Param']||{},AXY[a0_0x1932('0x60')]['Alias']=AXY[a0_0x1932('0x60')][a0_0x1932('0x35')]||{},AXY[a0_0x1932('0x60')]['Variables']=AXY[a0_0x1932('0x60')]['Variables']||{},Object[a0_0x1932('0x70')](AXY['TitleVideo'][a0_0x1932('0x14')])['forEach'](function(_0x54ddff){return AXY[a0_0x1932('0x60')][a0_0x1932('0x2c')][_0x54ddff]=Utils['recursiveParse'](AXY['TitleVideo'][a0_0x1932('0x14')][_0x54ddff]);}),AXY['TitleVideo'][a0_0x1932('0x63')][a0_0x1932('0x1a')]=![],AXY[a0_0x1932('0x60')][a0_0x1932('0x63')][a0_0x1932('0x2b')]=Date[a0_0x1932('0x4f')](),function(){var _0x4b6c13=null;TitleVideo=function(){this[a0_0x1932('0x18')]=![];var _0x3cce8d=AXY[a0_0x1932('0x60')][a0_0x1932('0x2c')][a0_0x1932('0x2a')];if(_0x3cce8d['endWith']('.mp4')||_0x3cce8d['endWith'](a0_0x1932('0x3c'))||_0x3cce8d[a0_0x1932('0x2d')](a0_0x1932('0x15')))AXY['Core'][a0_0x1932('0x36')]['i'](AXY['TitleVideo']['TAG'],'name.endWith(\x22.mp4\x22)\x20||\x20name.endWith(\x22.webm\x22)\x20||\x20name.endWith(\x22.ogv\x22):\x20'+_0x3cce8d);else _0x3cce8d[a0_0x1932('0x2d')](a0_0x1932('0x5a'))?(_0x3cce8d=_0x3cce8d[a0_0x1932('0x30')]('.{$ext}',Game_Interpreter[a0_0x1932('0x53')][a0_0x1932('0x6f')]()),AXY['Core']['Log']['i'](AXY[a0_0x1932('0x60')][a0_0x1932('0x4c')],a0_0x1932('0x26')+_0x3cce8d)):(_0x3cce8d+=Game_Interpreter[a0_0x1932('0x53')][a0_0x1932('0x6f')](),AXY[a0_0x1932('0x40')][a0_0x1932('0x36')]['i'](AXY[a0_0x1932('0x60')][a0_0x1932('0x4c')],a0_0x1932('0x67')+_0x3cce8d));this[a0_0x1932('0x2a')]='movies/'+_0x3cce8d,this['imageName']=a0_0x1932('0x31')+AXY[a0_0x1932('0x60')]['Param']['imageName']+'.png',Decrypter[a0_0x1932('0x5')]&&(this[a0_0x1932('0x1c')]=Decrypter[a0_0x1932('0x10')](this[a0_0x1932('0x1c')])),this[a0_0x1932('0x51')](),this[a0_0x1932('0x5b')](),this[a0_0x1932('0x68')]();},TitleVideo[a0_0x1932('0x53')]['constructor']=TitleVideo,TitleVideo[a0_0x1932('0x53')][a0_0x1932('0x51')]=function(){this[a0_0x1932('0x16')]=document[a0_0x1932('0x6c')](a0_0x1932('0xc')),this['_video'][a0_0x1932('0x9')](a0_0x1932('0x46'),''),this[a0_0x1932('0x16')][a0_0x1932('0x9')](a0_0x1932('0x27'),a0_0x1932('0x2')),this[a0_0x1932('0x16')]['setAttribute'](a0_0x1932('0x38'),a0_0x1932('0x59')),this[a0_0x1932('0x16')]['volume']=Graphics['_videoVolume'];},TitleVideo[a0_0x1932('0x53')]['setVideoTexture']=function(){this[a0_0x1932('0x64')]=PIXI[a0_0x1932('0x4b')][a0_0x1932('0x57')](this[a0_0x1932('0x16')]),this[a0_0x1932('0x50')]=this['_texture']['baseTexture'][a0_0x1932('0x1b')],this[a0_0x1932('0x8')]=new PIXI['Sprite'](this[a0_0x1932('0x64')]),this['_spriteVideo'][a0_0x1932('0x49')]=AXY['TitleVideo'][a0_0x1932('0x2c')][a0_0x1932('0x49')],this[a0_0x1932('0x8')]['height']=AXY[a0_0x1932('0x60')]['Param']['height'],this[a0_0x1932('0x8')]['x']=AXY[a0_0x1932('0x60')]['Param']['x'],this[a0_0x1932('0x8')]['y']=AXY[a0_0x1932('0x60')]['Param']['y'];},TitleVideo['prototype'][a0_0x1932('0x5b')]=function(){AXY[a0_0x1932('0x60')][a0_0x1932('0x2c')][a0_0x1932('0x0')]==!![]?this['_video']['loop']=!![]:this[a0_0x1932('0x16')][a0_0x1932('0x0')]=![],AXY[a0_0x1932('0x60')][a0_0x1932('0x2c')][a0_0x1932('0x22')]==!![]?this[a0_0x1932('0x16')][a0_0x1932('0x22')]=!![]:this[a0_0x1932('0x16')][a0_0x1932('0x22')]=![],this[a0_0x1932('0x1c')][a0_0x1932('0x54')]()!=''&&(this[a0_0x1932('0x16')][a0_0x1932('0x58')]=this[a0_0x1932('0x1c')]),this[a0_0x1932('0x16')]['autoPlay']=![],this[a0_0x1932('0x16')]['setAttribute'](a0_0x1932('0x47'),''),this[a0_0x1932('0x16')]['setAttribute'](a0_0x1932('0x38'),a0_0x1932('0x59'));},TitleVideo['prototype']['pauseVideo']=function(){this[a0_0x1932('0x50')]['pause']();},TitleVideo['prototype']['playVideo']=function(){this[a0_0x1932('0x50')][a0_0x1932('0x39')]();},TitleVideo['prototype'][a0_0x1932('0x2e')]=function(){return this[a0_0x1932('0x18')];},TitleVideo['prototype']['loadAndPlayVideo']=function(){var _0x2f51bc=this,_0x3feda6=new XMLHttpRequest();_0x3feda6[a0_0x1932('0x6b')](a0_0x1932('0xb'),this['videoName'],!![]),_0x3feda6[a0_0x1932('0x55')]='blob',_0x3feda6[a0_0x1932('0x17')]=function(_0xe812df){if(this[a0_0x1932('0x71')]==0xc8){var _0x5ab0d7=this[a0_0x1932('0x6')];AXY[a0_0x1932('0x40')][a0_0x1932('0x36')]['i'](AXY['TitleVideo'][a0_0x1932('0x4c')],_0x5ab0d7),_0x2f51bc[a0_0x1932('0x16')][a0_0x1932('0x25')]=URL[a0_0x1932('0x43')](_0x5ab0d7),AXY['Core']['Log']['i'](AXY['TitleVideo'][a0_0x1932('0x4c')],a0_0x1932('0x56')+URL[a0_0x1932('0x43')](_0x5ab0d7));var _0x207cef=_0x2f51bc[a0_0x1932('0x16')][a0_0x1932('0x39')]();_0x207cef!==undefined&&_0x207cef[a0_0x1932('0x48')](function(){AXY[a0_0x1932('0x40')][a0_0x1932('0x36')]['i'](AXY[a0_0x1932('0x60')][a0_0x1932('0x4c')],a0_0x1932('0x33')),_0x2f51bc['setVideoTexture'](),_0x2f51bc[a0_0x1932('0x18')]=!![];})['catch'](function(_0x595137){AXY[a0_0x1932('0x40')]['Log']['e'](AXY[a0_0x1932('0x60')][a0_0x1932('0x4c')],a0_0x1932('0x21')+_0x595137);});}},_0x3feda6[a0_0x1932('0xe')]();},TitleVideo[a0_0x1932('0x53')][a0_0x1932('0x32')]=function(){this['_videoSource'][a0_0x1932('0x7')](),this[a0_0x1932('0x50')][a0_0x1932('0x25')]=null,this[a0_0x1932('0x50')][a0_0x1932('0x20')]('src'),this[a0_0x1932('0x50')]['load']();},TitleVideo[a0_0x1932('0x53')][a0_0x1932('0x66')]=function(){this[a0_0x1932('0x64')][a0_0x1932('0x66')](),(Input['isTriggered']('ok')||TouchInput[a0_0x1932('0x24')]())&&(this['_videoSource'][a0_0x1932('0x61')]?this[a0_0x1932('0x11')]():this[a0_0x1932('0x62')]());},Scene_Title[a0_0x1932('0x53')][a0_0x1932('0x23')]=function(){this[a0_0x1932('0x3')]=![];_0x4b6c13===null?(_0x4b6c13=new TitleVideo(),this[a0_0x1932('0x44')]=_0x4b6c13):(this[a0_0x1932('0x44')]=_0x4b6c13,this['titleVideo'][a0_0x1932('0x11')]());var _0x513393=setInterval(()=>{this[a0_0x1932('0x44')][a0_0x1932('0x2e')]()&&(clearInterval(_0x513393),_0x513393=null,this[a0_0x1932('0x5d')]=new Sprite(ImageManager[a0_0x1932('0x28')]($dataSystem['title1Name'])),this[a0_0x1932('0x5d')]['alpha']=AXY['TitleVideo'][a0_0x1932('0x2c')]['title1Alpha'],this[a0_0x1932('0x6d')](this[a0_0x1932('0x5d')]),this[a0_0x1932('0x44')]['_spriteVideo'][a0_0x1932('0x37')]=AXY[a0_0x1932('0x60')][a0_0x1932('0x2c')][a0_0x1932('0x5e')],this[a0_0x1932('0x6d')](this['titleVideo'][a0_0x1932('0x8')]),this[a0_0x1932('0x1')]=new Sprite(ImageManager[a0_0x1932('0x4')]($dataSystem[a0_0x1932('0x4a')])),this[a0_0x1932('0x1')][a0_0x1932('0x37')]=AXY[a0_0x1932('0x60')][a0_0x1932('0x2c')][a0_0x1932('0x5c')],this[a0_0x1932('0x6d')](this[a0_0x1932('0x1')]),this[a0_0x1932('0xa')](),this[a0_0x1932('0xf')](),this[a0_0x1932('0x29')](),this[a0_0x1932('0x3')]=!![]);},0x64);},Scene_Title[a0_0x1932('0x53')][a0_0x1932('0x3b')]=function(){Scene_Base[a0_0x1932('0x53')][a0_0x1932('0x3b')][a0_0x1932('0x3a')](this),SceneManager[a0_0x1932('0x3d')](),AXY['TitleVideo'][a0_0x1932('0x2c')][a0_0x1932('0x22')]==!![]&&this[a0_0x1932('0x1e')](),this['startFadeIn'](this[a0_0x1932('0x6a')](),![]);},Scene_Title[a0_0x1932('0x53')][a0_0x1932('0x4e')]=function(){Scene_Base[a0_0x1932('0x53')][a0_0x1932('0x4e')][a0_0x1932('0x3a')](this),this['titleVideo'][a0_0x1932('0x62')](),SceneManager[a0_0x1932('0x41')]();},AXY[a0_0x1932('0x60')][a0_0x1932('0x35')][a0_0x1932('0x13')]=Scene_Title[a0_0x1932('0x53')][a0_0x1932('0x66')],Scene_Title[a0_0x1932('0x53')]['update']=function(){this[a0_0x1932('0x3')]&&(AXY[a0_0x1932('0x60')][a0_0x1932('0x35')]['Scene_Title_update'][a0_0x1932('0x3a')](this),this[a0_0x1932('0x44')][a0_0x1932('0x66')]());};}());