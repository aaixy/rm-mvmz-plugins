//=============================================================================
// A XueYu Plugins - Title Splash Video
// AXY_TitleSplashVideo.js
//=============================================================================

// Imported
var Imported = Imported || {};
Imported.AXY_TitleSplashVideo = true;

// Parameter Variables
var AXY = AXY || {};
AXY.TitleSplashVideo = AXY.TitleSplashVideo || {};
AXY.TitleSplashVideo.TAG = "AXY_TitleSplashVideo";

/*:
 * @plugindesc v1.05 Display Splash Video before the Title Screen.
 * @author A XueYu Plugins
 * @url https://666rpg.com/
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin allows you to place a Splash video
 * to your boot page before the title screen.
 *
 * changelog
 * 1.05 2020.10.28
 * refactor: with AXY_Core.js plugin;
 * optimize: video play and many others behavior;
 * add: Detect dependencies of AXY_Toast.js plugin;
 * add: function createVideoElement, setControlOptions, loadAndPlayVideo, setVideoTexture;
 * remove: License: MIT;
 * 1.04 2020.4.5
 * modify: video full name with extension;
 * 1.03 2019.11.16
 * add: autoPlay = false;setAttribute('controls', '');setAttribute('preload', 'auto');pause(); in create();
 * 1.02 2019.11.15
 * add: Closure;
 * 1.01 2019.11.14
 * add: param: notice and notice color; This is depends on AXY_Toast.js
 * 1.00 2019.11.13
 * first release.
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
 * @param notice
 * @text Notice
 * @desc Display notice. Leave blank to disable. Depends on AXY_Toast.js
 * @type text
 * @default Touch screen to skip Splash.
 *
 * @param noticeColor
 * @text Notice Color
 * @desc Display notice with this color. default:yellow
 * @type text
 * @default yellow
 *
 *
 */
//================================================================================================//
var a0_0x169b=['userAgent','length','TAG','Param','goto','responseType','Scene_Boot_Display_Splash','pauseVideo','max','from','none','log','noticeColor','paused','GET','muted','SplashFadeSpeed','loadAndPlayVideo','name.endWith(\x22.{$ext}\x22):\x20','controls','preload','Parameters','isBattleTest','opacity','fadeSpeed','playsinline','SplashDuration','removeAttribute','send','function','_video','then','apply','innerHTML','videoFileExt','.webm','setControlOptions','createObjectURL','<style>#AXY_ErrorInfo{text-align:\x20center;\x20text-shadow:\x20rgb(0,\x200,\x200)\x201px\x201px\x203px;\x20font-size:\x2020px;\x20z-index:\x2099;\x20position:\x20absolute;\x20margin:\x20auto;\x20top:\x200px;\x20left:\x200px;\x20right:\x200px;\x20bottom:\x200px;\x20width:\x20100%;\x20height:\x2040px;}</style>','videoName','video','AXY_Core','replace','<font\x20color=\x22yellow\x22><b>Plugin\x20Dependence\x20Detection</b></font><br>','addEventListener','name.endWith(\x22.mp4\x22)\x20||\x20name.endWith(\x22.webm\x22)\x20||\x20name.endWith(\x22.ogv\x22):\x20','Need\x20AXY_Core.js\x20Imported\x20before!','forEach','terminate','firefox','playVideo','_videoSource','load','toLowerCase','_spriteVideo','isTriggered','.{\x5c$ext}','notice','.{$ext}','_videoVolume','onload','setVideoTexture','crossorigin','toaster','Log','playback\x20started!','constructor','Sprite','createElement','getElementById','push','_splashSprite','initialize','setAttribute','_splashData','keys','play','AXY_Toast','Variables','startFadeIn','recursiveParse','prototype','ended','setupNewGame','isPluginImport','parameters','isEventTest','_texture','AXY_ErrorInfo','console','Core','TitleSplashVideo','createVideoElement','response','call','width','source','removeVideo','endWith','.mp4','_isReady','pause','baseTexture','indexOf','volume','open','chrome','height','Texture','color:\x20black;\x20font-weight:\x20bold;','start','appendChild','anonymous','loop','create','update','src','_isSceneTitleSplashReady','Alias','autoPlay','playback\x20failed:\x20','imageName','.ogv','AXY_TitleSplashVideo','addChild','name.endWith(\x22\x22):\x20','playVideo\x20URL.createObjectURL(blob):\x20','</font><br>'];(function(_0x5267c3,_0x169bd6){var _0x5d84af=function(_0xd2bcf7){while(--_0xd2bcf7){_0x5267c3['push'](_0x5267c3['shift']());}};_0x5d84af(++_0x169bd6);}(a0_0x169b,0x1be));var a0_0x5d84=function(_0x5267c3,_0x169bd6){_0x5267c3=_0x5267c3-0x0;var _0x5d84af=a0_0x169b[_0x5267c3];return _0x5d84af;};var isDependenceReady=![];if(Imported[a0_0x5d84('0x6b')])isDependenceReady=!![];else{isDependenceReady=![];const tag=AXY[a0_0x5d84('0x1d')]['TAG'],str=a0_0x5d84('0x70');if(navigator[a0_0x5d84('0x42')]['toLowerCase']()['indexOf'](a0_0x5d84('0x2c'))>-0x1||navigator[a0_0x5d84('0x42')][a0_0x5d84('0x77')]()[a0_0x5d84('0x29')](a0_0x5d84('0x73'))>-0x1)console[a0_0x5d84('0x4d')]('%c'+tag+':\x20'+'%c'+str,a0_0x5d84('0x2f'),'color:\x20red;');else window[a0_0x5d84('0x1b')]&&window[a0_0x5d84('0x1b')][a0_0x5d84('0x4d')](str);const errdivstrtitle=a0_0x5d84('0x6d'),errdivstr='<font\x20color=\x22yellow\x22><b>'+tag+':\x20'+'</b></font><font\x20color=\x22white\x22>'+str+a0_0x5d84('0x41'),errdivstyle=a0_0x5d84('0x68');if(document[a0_0x5d84('0x7')]('AXY_ErrorInfo'))document[a0_0x5d84('0x7')](a0_0x5d84('0x1a'))[a0_0x5d84('0x63')]+=errdivstr;else{var errdiv=document[a0_0x5d84('0x6')]('div');errdiv['id']=a0_0x5d84('0x1a'),errdiv['innerHTML']=errdivstyle+errdivstrtitle+errdivstr,document['body'][a0_0x5d84('0x31')](errdiv);}}AXY[a0_0x5d84('0x1c')][a0_0x5d84('0x16')](a0_0x5d84('0xf'),AXY['TitleSplashVideo'][a0_0x5d84('0x44')])?isDependenceReady=!![]:isDependenceReady=![];isDependenceReady&&(AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x57')]=PluginManager[a0_0x5d84('0x17')](a0_0x5d84('0x3d')),AXY[a0_0x5d84('0x1d')]['Param']=AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x45')]||{},AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x38')]=AXY['TitleSplashVideo'][a0_0x5d84('0x38')]||{},AXY[a0_0x5d84('0x1d')]['Variables']=AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x10')]||{},Object[a0_0x5d84('0xd')](AXY['TitleSplashVideo'][a0_0x5d84('0x57')])[a0_0x5d84('0x71')](function(_0x26da39){return AXY['TitleSplashVideo']['Param'][_0x26da39]=Utils[a0_0x5d84('0x12')](AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x57')][_0x26da39]);}),function(){AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x38')][a0_0x5d84('0x48')]=Scene_Boot['prototype'][a0_0x5d84('0x30')],Scene_Boot[a0_0x5d84('0x13')][a0_0x5d84('0x30')]=function(){if(!DataManager[a0_0x5d84('0x58')]()&&!DataManager[a0_0x5d84('0x18')]()){SceneManager[a0_0x5d84('0x8')](_0x54a305);return;}AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x38')]['Scene_Boot_Display_Splash'][a0_0x5d84('0x20')](this);};function _0x54a305(){this[a0_0x5d84('0xa')][a0_0x5d84('0x62')](this,arguments);}_0x54a305[a0_0x5d84('0x13')]=Object['create'](Scene_Base[a0_0x5d84('0x13')]),_0x54a305['prototype'][a0_0x5d84('0x4')]=_0x54a305,_0x54a305[a0_0x5d84('0x13')]['initialize']=function(){Scene_Base['prototype']['initialize'][a0_0x5d84('0x20')](this);},_0x54a305[a0_0x5d84('0x13')][a0_0x5d84('0x34')]=function(){Scene_Base[a0_0x5d84('0x13')][a0_0x5d84('0x34')][a0_0x5d84('0x20')](this),this[a0_0x5d84('0xc')]=[0x0,0x0,Math[a0_0x5d84('0x4a')](AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x45')][a0_0x5d84('0x5c')],0x1),Math['max'](AXY[a0_0x5d84('0x1d')]['Param'][a0_0x5d84('0x52')],0x1)],this[a0_0x5d84('0x9')]=[],this[a0_0x5d84('0x26')]=![],this[a0_0x5d84('0x37')]=![];var _0x3d695a=AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x45')][a0_0x5d84('0x69')];if(_0x3d695a['endWith'](a0_0x5d84('0x25'))||_0x3d695a[a0_0x5d84('0x24')](a0_0x5d84('0x65'))||_0x3d695a['endWith'](a0_0x5d84('0x3c')))AXY[a0_0x5d84('0x1c')][a0_0x5d84('0x2')]['i'](AXY[a0_0x5d84('0x1d')]['TAG'],a0_0x5d84('0x6f')+_0x3d695a);else _0x3d695a[a0_0x5d84('0x24')](a0_0x5d84('0x7a'))?(_0x3d695a=_0x3d695a[a0_0x5d84('0x6c')](a0_0x5d84('0x7c'),Game_Interpreter[a0_0x5d84('0x13')]['videoFileExt']()),AXY[a0_0x5d84('0x1c')][a0_0x5d84('0x2')]['i'](AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x44')],a0_0x5d84('0x54')+_0x3d695a)):(_0x3d695a+=Game_Interpreter['prototype'][a0_0x5d84('0x64')](),AXY[a0_0x5d84('0x1c')]['Log']['i'](AXY[a0_0x5d84('0x1d')]['TAG'],a0_0x5d84('0x3f')+_0x3d695a));this[a0_0x5d84('0x69')]='movies/'+_0x3d695a,this[a0_0x5d84('0x3b')]='img/'+AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x45')][a0_0x5d84('0x3b')]+'.png',Decrypter['hasEncryptedImages']&&(this['imageName']=Decrypter['extToEncryptExt'](this[a0_0x5d84('0x3b')])),this[a0_0x5d84('0x1e')](),this[a0_0x5d84('0x66')](),this[a0_0x5d84('0x53')]();},_0x54a305[a0_0x5d84('0x13')][a0_0x5d84('0x1e')]=function(){this['_video']=document['createElement'](a0_0x5d84('0x6a')),this[a0_0x5d84('0x60')][a0_0x5d84('0xb')](a0_0x5d84('0x5b'),''),this[a0_0x5d84('0x60')][a0_0x5d84('0xb')](a0_0x5d84('0x0'),a0_0x5d84('0x32')),this['_video'][a0_0x5d84('0xb')](a0_0x5d84('0x56'),a0_0x5d84('0x4c')),this[a0_0x5d84('0x60')][a0_0x5d84('0x2a')]=Graphics[a0_0x5d84('0x7d')];},_0x54a305['prototype'][a0_0x5d84('0x7f')]=function(){this[a0_0x5d84('0x19')]=PIXI[a0_0x5d84('0x2e')][a0_0x5d84('0x4b')](this['_video']),this[a0_0x5d84('0x75')]=this[a0_0x5d84('0x19')][a0_0x5d84('0x28')][a0_0x5d84('0x22')],this[a0_0x5d84('0x78')]=new PIXI[(a0_0x5d84('0x5'))](this[a0_0x5d84('0x19')]),this[a0_0x5d84('0x78')][a0_0x5d84('0x21')]=AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x45')][a0_0x5d84('0x21')],this[a0_0x5d84('0x78')][a0_0x5d84('0x2d')]=AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x45')]['height'],this[a0_0x5d84('0x78')]['x']=AXY['TitleSplashVideo']['Param']['x'],this[a0_0x5d84('0x78')]['y']=AXY[a0_0x5d84('0x1d')]['Param']['y'],this[a0_0x5d84('0x9')]['push'](this[a0_0x5d84('0x78')]),this[a0_0x5d84('0x3e')](this[a0_0x5d84('0x78')]),AXY['TitleSplashVideo'][a0_0x5d84('0x45')][a0_0x5d84('0x7b')]&&typeof $[a0_0x5d84('0x1')]==a0_0x5d84('0x5f')&&$['toaster']({'message':AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x45')]['notice'],'color':AXY[a0_0x5d84('0x1d')]['Param'][a0_0x5d84('0x4e')]}),this['_isSceneTitleSplashReady']=!![];},_0x54a305[a0_0x5d84('0x13')][a0_0x5d84('0x66')]=function(){AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x45')][a0_0x5d84('0x33')]==!![]?this[a0_0x5d84('0x60')][a0_0x5d84('0x33')]=!![]:this[a0_0x5d84('0x60')][a0_0x5d84('0x33')]=![];AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x45')][a0_0x5d84('0x51')]==!![]?this[a0_0x5d84('0x60')]['muted']=!![]:this[a0_0x5d84('0x60')][a0_0x5d84('0x51')]=![];this['imageName']['trim']()!=''&&(this['_video']['poster']=this[a0_0x5d84('0x3b')]);this[a0_0x5d84('0x60')][a0_0x5d84('0x39')]=![],this[a0_0x5d84('0x60')][a0_0x5d84('0xb')](a0_0x5d84('0x55'),''),this[a0_0x5d84('0x60')][a0_0x5d84('0xb')](a0_0x5d84('0x56'),a0_0x5d84('0x4c')),this[a0_0x5d84('0x60')]['pause']();var _0x8ede92=this;this['_video'][a0_0x5d84('0x6e')](a0_0x5d84('0x14'),function(_0x2e25cc){_0x8ede92[a0_0x5d84('0x72')]();});},_0x54a305[a0_0x5d84('0x13')][a0_0x5d84('0x53')]=function(){var _0x550f5a=this,_0x27e4e2=new XMLHttpRequest();_0x27e4e2[a0_0x5d84('0x2b')](a0_0x5d84('0x50'),this[a0_0x5d84('0x69')],!![]),_0x27e4e2[a0_0x5d84('0x47')]='blob',_0x27e4e2[a0_0x5d84('0x7e')]=function(_0x1e6b13){if(this['status']==0xc8){var _0x95df01=this[a0_0x5d84('0x1f')];AXY['Core'][a0_0x5d84('0x2')]['i'](AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x44')],_0x95df01),_0x550f5a[a0_0x5d84('0x60')][a0_0x5d84('0x36')]=URL[a0_0x5d84('0x67')](_0x95df01),AXY[a0_0x5d84('0x1c')][a0_0x5d84('0x2')]['i'](AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x44')],a0_0x5d84('0x40')+URL[a0_0x5d84('0x67')](_0x95df01));var _0x3c9bd7=_0x550f5a['_video']['play']();_0x3c9bd7!==undefined&&_0x3c9bd7[a0_0x5d84('0x61')](function(){AXY[a0_0x5d84('0x1c')][a0_0x5d84('0x2')]['i'](AXY[a0_0x5d84('0x1d')][a0_0x5d84('0x44')],a0_0x5d84('0x3')),_0x550f5a[a0_0x5d84('0x7f')](),_0x550f5a[a0_0x5d84('0x26')]=!![];})['catch'](function(_0xe01257){AXY[a0_0x5d84('0x1c')][a0_0x5d84('0x2')]['e'](AXY[a0_0x5d84('0x1d')]['TAG'],a0_0x5d84('0x3a')+_0xe01257);});}},_0x27e4e2[a0_0x5d84('0x5e')]();},_0x54a305[a0_0x5d84('0x13')]['refresh_splash_screen']=function(){this[a0_0x5d84('0xc')][0x0]>=this[a0_0x5d84('0x9')][a0_0x5d84('0x43')]&&this['terminate'](),this[a0_0x5d84('0x78')][a0_0x5d84('0x59')]=0x0,this[a0_0x5d84('0xc')][0x0]+=0x1,this[a0_0x5d84('0xc')][0x1]=this[a0_0x5d84('0xc')][0x2];},_0x54a305['prototype'][a0_0x5d84('0x30')]=function(){Scene_Base['prototype'][a0_0x5d84('0x30')]['call'](this),this[a0_0x5d84('0x11')](this[a0_0x5d84('0x5a')](),![]);},_0x54a305[a0_0x5d84('0x13')][a0_0x5d84('0x35')]=function(){this[a0_0x5d84('0x37')]&&(Scene_Base[a0_0x5d84('0x13')]['update']['call'](this),(Input[a0_0x5d84('0x79')]('ok')||TouchInput[a0_0x5d84('0x79')]())&&this['terminate']());},_0x54a305[a0_0x5d84('0x13')][a0_0x5d84('0x72')]=function(){Scene_Base[a0_0x5d84('0x13')][a0_0x5d84('0x72')][a0_0x5d84('0x20')](this);!this[a0_0x5d84('0x75')][a0_0x5d84('0x4f')]&&this[a0_0x5d84('0x49')]();typeof XY_TitleSplash_Scene_Splash_Screen===a0_0x5d84('0x5f')?SceneManager[a0_0x5d84('0x46')](XY_TitleSplash_Scene_Splash_Screen):(DataManager[a0_0x5d84('0x15')](),SceneManager[a0_0x5d84('0x46')](Scene_Title),Window_TitleCommand['initCommandPosition']());return;},_0x54a305[a0_0x5d84('0x13')][a0_0x5d84('0x49')]=function(){this[a0_0x5d84('0x75')][a0_0x5d84('0x27')]();},_0x54a305[a0_0x5d84('0x13')][a0_0x5d84('0x74')]=function(){this[a0_0x5d84('0x75')][a0_0x5d84('0xe')]();},_0x54a305['prototype'][a0_0x5d84('0x23')]=function(){this[a0_0x5d84('0x75')]['pause'](),this['_videoSource'][a0_0x5d84('0x36')]=null,this[a0_0x5d84('0x75')][a0_0x5d84('0x5d')](a0_0x5d84('0x36')),this[a0_0x5d84('0x75')][a0_0x5d84('0x76')]();};}());