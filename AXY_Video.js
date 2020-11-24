//=============================================================================
// A XueYu Plugins - Video
// AXY_Video.js
//=============================================================================

var Imported = Imported || {};
Imported.AXY_Video = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Video = AXY.Video || {};
AXY.Video.TAG = "AXY_Video";

//=============================================================================
/*:
 * @plugindesc v1.07 Allows to Change Video's behavior.
 * @author A XueYu Plugins
 * @url https://666rpg.com/
 * 
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin allows to Change Video's behavior.
 * Example: 
 * 1.var support = AXY_Video.showSupport(); //then you got a variable named as support that is your client support videos;
 * 2.AXY_Video.play('test.mov') in script, test.mov in movies folder;
 * 2.1 AXY_Video.play('test.{$ext}'), The extension can be "{$ext}", which means "{$ext}" will be replaced with the defined ForcePCVideoExt and ForceMobileVideoExt parameters;
 * 2.2 AXY_Video.play('test'), which means plugin will be append a extension with the defined ForcePCVideoExt and ForceMobileVideoExt parameters;
 * 3.known issus: must add event such as show text after AXY_Video.play('test.mov'), or the after one will covere before one;
 *
 * changelog
 * 1.07 2020.11.13
 * add: param ForcePath;
 * 1.06 2020.11.03
 * add: auto toggle joystick on video play;
 * optimize: 3 seconds delayed click to jump when the video is playing;
 * 1.05 2020.10.28
 * optimize: Dependence Detection;
 * fix: click to jump issus when the video is playing;
 * 1.04 2020.10.27
 * refactor: with AXY_Core.js plugin;
 * optimize: AXY_Video.play() behavior;
 * add: click video will be jump to end when video is playing;
 * 1.03 2020.10.19
 * add: playvideo handler;
 * 1.02 2020.7.23
 * modify: default mp4 to webm;
 * 1.01 2019.10.14
 * add: x5 support, with x5 engine core, you can play h265 with hardware acceleration and more then 28 video formats, such as avi,mov,mkv,ts,m2ts,3gp,flv,rmvb...etc.
 * add: more h265 detectCodecs;
 * 1.0 2019.10.11
 * first release.
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 * 
 * @param ForcePCVideoExt
 * @desc Force Video Ext. Leave blank to use this priority list: .webm, .mp4, .ogv. Default: .webm
 * @default .webm
 * 
 * @param ForceMobileVideoExt
 * @desc Force Video Ext. Leave blank to use this priority list: .webm, .mp4, .ogv. Default: .mp4
 * @default .webm
 * 
 * @param SupportText
 * @desc Support Text. Default: Support
 * @default Support
 * 
 * @param NotSupportText
 * @desc Not Support Text. Default: Not Support
 * @default Not Support
 * 
 * @param ForcePath
 * @desc Force Path. Default: movies
 * @default movies
 * 
 */
//================================================================================================//
var a0_0x4f17=['ForcePCVideoExt','setTouchMoveEnabled','div','NotSupportText','AXY_Video','isVideoPlaying','Log','send','<font\x20color=\x22yellow\x22><b>','open','firefox','play','opacity','_canPlayMp4','video/mp4;\x20codecs=\x22avc1.42E01E,\x20mp4a.40.2\x22','video/webm;\x20codecs=\x22vp8,\x20vorbis\x22','playVideo\x20URL.createObjectURL(blob):\x20','_updateVideo','AXY_ErrorInfo','getElementById','this._video\x20bind\x20click','_videoLoading','indexOf','_onVideoPlaying','keys','name.endWith(\x22.{$ext}\x22):\x20','enter\x20200','bind','appendChild','.mp4(codecs=\x22hevc/h265\x22):\x20','GET','unbind','anonymous','Need\x20AXY_Core.js\x20Imported\x20before!','.webm(codecs=\x22vp9,\x20opus\x22):\x20','SupportText','_canPlayWebmVP9','.webm(codecs=\x22vp8,\x20vorbis\x22):\x20','color:\x20red;','setAttribute','_index','.{\x5c$ext}','pause','_canPlayMp4AVC1MP4A','_video','responseType','Core','response','click\x20touchend','endWith','Parameters','<style>#AXY_ErrorInfo{text-align:\x20center;\x20text-shadow:\x20rgb(0,\x200,\x200)\x201px\x201px\x203px;\x20font-size:\x2020px;\x20z-index:\x2099;\x20position:\x20absolute;\x20margin:\x20auto;\x20top:\x200px;\x20left:\x200px;\x20right:\x200px;\x20bottom:\x200px;\x20width:\x20100%;\x20height:\x2040px;}</style>','video/ogg;\x20codecs=\x22theora,\x20vorbis\x22','.mp4(codecs=\x22avc1.42E01E,\x20mp4a.40.2\x22):\x20','console','join','playsinline','playVideo\x20src:\x20','video/mp4','video/h265','.mp4(codecs=\x22avc1\x22):\x20','videoFileExt','src','video/webm;\x20codecs=\x22vp9,\x20opus\x22','status','_detectCodecs','innerHTML','none','push','AXY_Core','playback\x20failed:\x20','log','video','ForceMobileVideoExt','onended','color:\x20black;\x20font-weight:\x20bold;','canPlayType','Alias','body','Param','<font\x20color=\x22yellow\x22><b>Plugin\x20Dependence\x20Detection</b></font><br>','replace','.ogv(codecs=\x22theora,\x20vorbis\x22):\x20','onplaying','.webm','parameters','TAG','ForcePath','catch','userAgent','.ogv','_onVideoEnd','isMobileDevice','GameVideo','forEach','style','video/mp4;\x20codecs=\x22h.265\x22','_canPlayWebmVP8','_updateVisibility','not\x20200','toLowerCase','_canPlayMp4H265','prototype','.mp4','this._video\x20unbind\x20click','_canPlayOgg','playVideo','_canPlayMp4H264','video/mp4;\x20codecs=\x22h265\x22','volume','Video','name.endWith(\x22\x22):\x20','_videoVolume','playback\x20started!','name.endWith(\x22.mp4\x22)\x20||\x20name.endWith(\x22.webm\x22)\x20||\x20name.endWith(\x22.ogv\x22):\x20'];(function(_0x397617,_0x4f17e7){var _0x195564=function(_0x4fe9da){while(--_0x4fe9da){_0x397617['push'](_0x397617['shift']());}};_0x195564(++_0x4f17e7);}(a0_0x4f17,0x155));var a0_0x1955=function(_0x397617,_0x4f17e7){_0x397617=_0x397617-0x0;var _0x195564=a0_0x4f17[_0x397617];return _0x195564;};var isDependenceReady=![];if(Imported[a0_0x1955('0x49')])isDependenceReady=!![];else{isDependenceReady=![];const tag=AXY[a0_0x1955('0x72')][a0_0x1955('0x5a')],str=a0_0x1955('0x25');if(navigator[a0_0x1955('0x5d')][a0_0x1955('0x68')]()[a0_0x1955('0x1a')]('chrome')>-0x1||navigator[a0_0x1955('0x5d')][a0_0x1955('0x68')]()[a0_0x1955('0x1a')](a0_0x1955('0xe'))>-0x1)console[a0_0x1955('0x4b')]('%c'+tag+':\x20'+'%c'+str,a0_0x1955('0x4f'),a0_0x1955('0x2a'));else window['console']&&window[a0_0x1955('0x3a')]['log'](str);const errdivstrtitle=a0_0x1955('0x54'),errdivstr=a0_0x1955('0xc')+tag+':\x20'+'</b></font><font\x20color=\x22white\x22>'+str+'</font><br>',errdivstyle=a0_0x1955('0x37');if(document[a0_0x1955('0x17')](a0_0x1955('0x16')))document[a0_0x1955('0x17')](a0_0x1955('0x16'))[a0_0x1955('0x46')]+=errdivstr;else{var errdiv=document['createElement'](a0_0x1955('0x6'));errdiv['id']=a0_0x1955('0x16'),errdiv[a0_0x1955('0x46')]=errdivstyle+errdivstrtitle+errdivstr,document[a0_0x1955('0x52')][a0_0x1955('0x20')](errdiv);}}if(isDependenceReady){AXY[a0_0x1955('0x72')][a0_0x1955('0x36')]=PluginManager[a0_0x1955('0x59')](a0_0x1955('0x8')),AXY[a0_0x1955('0x72')][a0_0x1955('0x53')]=AXY[a0_0x1955('0x72')]['Param']||{},AXY[a0_0x1955('0x72')][a0_0x1955('0x51')]=AXY[a0_0x1955('0x72')][a0_0x1955('0x51')]||{},Object[a0_0x1955('0x1c')](AXY[a0_0x1955('0x72')][a0_0x1955('0x36')])[a0_0x1955('0x62')](function(_0x279794){return AXY['Video']['Param'][_0x279794]=Utils['recursiveParse'](AXY[a0_0x1955('0x72')][a0_0x1955('0x36')][_0x279794]);}),AXY[a0_0x1955('0x72')][a0_0x1955('0x45')]=function(){var _0x29407d=document['createElement'](a0_0x1955('0x4c'));_0x29407d['canPlayType']&&(this[a0_0x1955('0x28')]=_0x29407d[a0_0x1955('0x50')](a0_0x1955('0x43')),this[a0_0x1955('0x65')]=_0x29407d[a0_0x1955('0x50')](a0_0x1955('0x13')),this['_canPlayMp4']=_0x29407d[a0_0x1955('0x50')](a0_0x1955('0x3e')),this[a0_0x1955('0x6f')]=_0x29407d[a0_0x1955('0x50')]('video/mp4;\x20codecs=\x22avc1\x22'),this[a0_0x1955('0x2f')]=_0x29407d['canPlayType'](a0_0x1955('0x12')),this['_canPlayMp4H265']=_0x29407d['canPlayType']('video/mp4;\x20codecs=\x22hev1\x22')||_0x29407d[a0_0x1955('0x50')](a0_0x1955('0x3f'))||_0x29407d['canPlayType']('video/hevc')||_0x29407d[a0_0x1955('0x50')]('video/mp4;\x20codecs=\x22hevc\x22')||_0x29407d[a0_0x1955('0x50')](a0_0x1955('0x70'))||_0x29407d[a0_0x1955('0x50')](a0_0x1955('0x64')),this[a0_0x1955('0x6d')]=_0x29407d[a0_0x1955('0x50')](a0_0x1955('0x38')));},AXY[a0_0x1955('0x72')]['_detectCodecs'](),Game_Interpreter[a0_0x1955('0x6a')]['videoFileExt']=function(){if(Utils[a0_0x1955('0x60')]()){if(AXY[a0_0x1955('0x72')]['Param']['ForceMobileVideoExt'])return AXY[a0_0x1955('0x72')]['Param'][a0_0x1955('0x4d')];else{if(AXY['Video'][a0_0x1955('0x28')])return a0_0x1955('0x58');else{if(AXY['Video'][a0_0x1955('0x65')])return a0_0x1955('0x58');else{if(AXY[a0_0x1955('0x72')]['_canPlayMp4'])return a0_0x1955('0x6b');else{if(AXY[a0_0x1955('0x72')][a0_0x1955('0x6f')])return a0_0x1955('0x6b');else{if(AXY['Video'][a0_0x1955('0x2f')])return a0_0x1955('0x6b');else{if(AXY[a0_0x1955('0x72')][a0_0x1955('0x69')])return'.mp4';else{if(AXY[a0_0x1955('0x72')][a0_0x1955('0x6d')])return'.ogv';}}}}}}}}else{if(AXY[a0_0x1955('0x72')][a0_0x1955('0x53')][a0_0x1955('0x4')])return AXY[a0_0x1955('0x72')][a0_0x1955('0x53')]['ForcePCVideoExt'];else{if(AXY[a0_0x1955('0x72')][a0_0x1955('0x28')])return a0_0x1955('0x58');else{if(AXY[a0_0x1955('0x72')]['_canPlayWebmVP8'])return a0_0x1955('0x58');else{if(AXY[a0_0x1955('0x72')][a0_0x1955('0x11')])return'.mp4';else{if(AXY[a0_0x1955('0x72')][a0_0x1955('0x6f')])return a0_0x1955('0x6b');else{if(AXY[a0_0x1955('0x72')]['_canPlayMp4AVC1MP4A'])return a0_0x1955('0x6b');else{if(AXY[a0_0x1955('0x72')][a0_0x1955('0x69')])return a0_0x1955('0x6b');else{if(AXY['Video'][a0_0x1955('0x6d')])return a0_0x1955('0x5e');}}}}}}}}},AXY_Video={'showSupport':function(){var _0xf5f985=new Array();return _0xf5f985[a0_0x1955('0x48')](a0_0x1955('0x26')+(AXY['Video'][a0_0x1955('0x28')]?AXY['Video']['Param'][a0_0x1955('0x27')]:AXY['Video'][a0_0x1955('0x53')][a0_0x1955('0x7')])),_0xf5f985[a0_0x1955('0x48')](a0_0x1955('0x29')+(AXY[a0_0x1955('0x72')][a0_0x1955('0x65')]?AXY[a0_0x1955('0x72')]['Param'][a0_0x1955('0x27')]:AXY['Video'][a0_0x1955('0x53')]['NotSupportText'])),_0xf5f985[a0_0x1955('0x48')]('.mp4(codecs=\x22avc/h264\x22):\x20'+(AXY[a0_0x1955('0x72')][a0_0x1955('0x11')]?AXY[a0_0x1955('0x72')][a0_0x1955('0x53')][a0_0x1955('0x27')]:AXY['Video']['Param']['NotSupportText'])),_0xf5f985['push'](a0_0x1955('0x40')+(AXY[a0_0x1955('0x72')]['_canPlayMp4H264']?AXY[a0_0x1955('0x72')][a0_0x1955('0x53')][a0_0x1955('0x27')]:AXY[a0_0x1955('0x72')][a0_0x1955('0x53')][a0_0x1955('0x7')])),_0xf5f985[a0_0x1955('0x48')](a0_0x1955('0x39')+(AXY[a0_0x1955('0x72')]['_canPlayMp4AVC1MP4A']?AXY['Video']['Param'][a0_0x1955('0x27')]:AXY[a0_0x1955('0x72')][a0_0x1955('0x53')][a0_0x1955('0x7')])),_0xf5f985[a0_0x1955('0x48')](a0_0x1955('0x21')+(AXY['Video'][a0_0x1955('0x69')]?AXY[a0_0x1955('0x72')][a0_0x1955('0x53')]['SupportText']:AXY['Video'][a0_0x1955('0x53')]['NotSupportText'])),_0xf5f985['push'](a0_0x1955('0x56')+(AXY[a0_0x1955('0x72')][a0_0x1955('0x6d')]?AXY[a0_0x1955('0x72')][a0_0x1955('0x53')][a0_0x1955('0x27')]:AXY[a0_0x1955('0x72')][a0_0x1955('0x53')][a0_0x1955('0x7')])),_0xf5f985[a0_0x1955('0x3b')]('\x0a');},'play':function(_0x1315a7){if(_0x1315a7[a0_0x1955('0x35')](a0_0x1955('0x6b'))||_0x1315a7[a0_0x1955('0x35')](a0_0x1955('0x58'))||_0x1315a7[a0_0x1955('0x35')]('.ogv'))AXY[a0_0x1955('0x32')][a0_0x1955('0xa')]['i'](AXY['Video'][a0_0x1955('0x5a')],a0_0x1955('0x3')+_0x1315a7);else _0x1315a7[a0_0x1955('0x35')](a0_0x1955('0x2d'))?(_0x1315a7=_0x1315a7[a0_0x1955('0x55')]('.{$ext}',Game_Interpreter[a0_0x1955('0x6a')][a0_0x1955('0x41')]()),AXY[a0_0x1955('0x32')][a0_0x1955('0xa')]['i'](AXY[a0_0x1955('0x72')][a0_0x1955('0x5a')],a0_0x1955('0x1d')+_0x1315a7)):(_0x1315a7+=Game_Interpreter[a0_0x1955('0x6a')][a0_0x1955('0x41')](),AXY[a0_0x1955('0x32')][a0_0x1955('0xa')]['i'](AXY[a0_0x1955('0x72')][a0_0x1955('0x5a')],a0_0x1955('0x0')+_0x1315a7));Graphics[a0_0x1955('0x6e')](AXY[a0_0x1955('0x72')][a0_0x1955('0x53')][a0_0x1955('0x5b')]+'/'+_0x1315a7),Graphics[a0_0x1955('0x9')](),Game_Interpreter['_waitMode']='video',Game_Interpreter[a0_0x1955('0x2c')]++;}},Graphics['_createVideo']=function(){this[a0_0x1955('0x30')]=document['createElement'](a0_0x1955('0x4c')),this[a0_0x1955('0x30')]['id']=a0_0x1955('0x61'),this['_video'][a0_0x1955('0x63')][a0_0x1955('0x10')]=0x0,this['_video'][a0_0x1955('0x2b')](a0_0x1955('0x3c'),''),this[a0_0x1955('0x30')][a0_0x1955('0x2b')]('crossorigin',a0_0x1955('0x24')),this[a0_0x1955('0x30')][a0_0x1955('0x2b')]('preload',a0_0x1955('0x47')),this[a0_0x1955('0x30')][a0_0x1955('0x71')]=this[a0_0x1955('0x1')],this[a0_0x1955('0x15')](),makeVideoPlayableInline(this[a0_0x1955('0x30')]),document['body']['appendChild'](this['_video']);};{}Graphics[a0_0x1955('0x6e')]=function(_0x3247ea){console['log'](a0_0x1955('0x3d')+_0x3247ea);var _0x39fdf8=this;this[a0_0x1955('0x30')][a0_0x1955('0x4e')]=this[a0_0x1955('0x5f')]['bind'](this),this['_videoLoading']=!![],this['_video'][a0_0x1955('0x57')]=this[a0_0x1955('0x1b')][a0_0x1955('0x1f')](this);var _0x48001f=new XMLHttpRequest();_0x48001f[a0_0x1955('0xd')](a0_0x1955('0x22'),_0x3247ea,!![]),_0x48001f[a0_0x1955('0x31')]='blob',_0x48001f['onload']=function(_0x2e128d){console['log'](this[a0_0x1955('0x44')]),console['log'](_0x2e128d);if(this[a0_0x1955('0x44')]==0xc8){console['log'](a0_0x1955('0x1e')),console[a0_0x1955('0x4b')](this);var _0x3aae5a=this[a0_0x1955('0x33')];_0x39fdf8['_video'][a0_0x1955('0x42')]=URL['createObjectURL'](_0x3aae5a),console['log'](a0_0x1955('0x14')+_0x39fdf8['_video'][a0_0x1955('0x42')]);var _0x17c800=_0x39fdf8[a0_0x1955('0x30')][a0_0x1955('0xf')]();_0x17c800!==undefined&&_0x17c800['then'](function(){_0x39fdf8[a0_0x1955('0x66')](!![]),_0x39fdf8[a0_0x1955('0x19')]=![],console['log'](a0_0x1955('0x2')),$gameSystem[a0_0x1955('0x5')](![]);})[a0_0x1955('0x5c')](function(_0x151d0e){console[a0_0x1955('0x4b')](a0_0x1955('0x4a')+_0x151d0e);});}else console[a0_0x1955('0x4b')](a0_0x1955('0x67'));},_0x48001f[a0_0x1955('0xb')]();},Graphics[a0_0x1955('0x5f')]=function(){this['_updateVisibility'](![]),$gameSystem[a0_0x1955('0x5')](!![]),AXY[a0_0x1955('0x32')][a0_0x1955('0xa')]['i'](AXY[a0_0x1955('0x72')][a0_0x1955('0x5a')],a0_0x1955('0x6c')),$(document)['unbind'](a0_0x1955('0x34')),AndroidBridgeJavascriptInterface&&AXY['Core']['showJoystick']();},Graphics['_onVideoPlaying']=function(){AXY[a0_0x1955('0x32')]['Log']['i'](AXY[a0_0x1955('0x72')][a0_0x1955('0x5a')],a0_0x1955('0x18')),AndroidBridgeJavascriptInterface&&AXY[a0_0x1955('0x32')]['hideJoystick'](),setTimeout(()=>{$(document)[a0_0x1955('0x23')](a0_0x1955('0x34'))[a0_0x1955('0x1f')]('click\x20touchend',function(){AXY[a0_0x1955('0x32')][a0_0x1955('0xa')]['i'](AXY['Video'][a0_0x1955('0x5a')],'this._video\x20click'),GameVideo[a0_0x1955('0x2e')](),GameVideo['currentTime']=0x0,GameVideo[a0_0x1955('0x42')]=null,Graphics['_onVideoEnd']();});},0xbb8);};}