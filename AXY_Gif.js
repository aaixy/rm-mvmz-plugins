//=============================================================================
// A XueYu Plugin - Gif
// AXY_Gif.js
//=============================================================================

var Imported = Imported || {};
Imported.AXY_Gif = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Gif = AXY.Gif || {};
AXY.Gif.TAG = "AXY_Gif";

//=============================================================================
/*:
 * @plugindesc v1.4 This plugin show gif, jpg, webp and many formats img from website or local.
 * @author A XueYu Plugins
 * @url https://666rpg.com/
 * 
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin support rmmv/rmmz show gif, jpg, webp and many formats img from website or local.
 * Easy to use and powerful.
 * 
 * Example:
 * show:
 * AXY_Gif.show(1); //will show img/gif/1.gif with id 1;
 * AXY_Gif.remove(1); //will remove id 1;
 * AXY_Gif.show("1.gif"); //will show img/gif/1.gif with id hash("1.gif");
 * AXY_Gif.remove("1.gif"); //will remove id hash("1.gif");
 * AXY_Gif.show({id: '1',filename:'2.gif'}); //will show img/gif/2.gif with id 1;
 * AXY_Gif.remove(1); //will remove id 1;
 * AXY_Gif.show({filename:'1.gif'});
 * AXY_Gif.show({filename:'1.jpg'});
 * AXY_Gif.show({filename:'url=img/faces/Actor1.png'});
 * AXY_Gif.show({filename:'1.gif',id:2});
 * AXY_Gif.show({id:3,filename:'1.gif',delay:3000});
 * AXY_Gif.show({x:0, y:0, align:'topleft', filename:'url=http://www.yourdomain.com/gif.jpg'});
 * AXY_Gif.show({x:0, y:0, align:'fullfill', filename:'url=http://www.yourdomain.com/gif.gif'});
 * all args with default:
 * AXY_Gif.show({x:'Graphics.width/2', y:'(Graphics.height-AXY_Gif.getMessageBoxHeight())/2', align:'center', filename:'1.gif',id:1,delay:0,width:'100%',height:'100%',opacity:1});
 * remove with id:
 * AXY_Gif.remove(1);
 * AXY_Gif.remove(2);
 * remove all:
 * AXY_Gif.removeall();
 * 
 * Gif Skill:
 * write <axy_gif:1> to skill note box, it's means show img/gif/1.gif when the actor use this skill in battle; 
 *
 * Changelog
 * 1.4 2020.11.12
 * add: gif skill meta: <axy_gif:1>;
 * 1.3 2020.11.11
 * add: RMMZ Compatible;
 * refactor: optimize and enhance;
 * 1.2 2017.9.5
 * add gifv support(faild);
 * 1.1 2017.1.8
 * x,y add evel().
 * 1.0 2016.12.28
 * first release;
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 *
 * @param Anchor
 * @desc The Img Anchor point. topleft/center/fullfill
 * @type select
 * @option topleft
 * @value topleft
 * @option center
 * @value center
 * @option fullfill
 * @value fullfill
 * @default center
 *
 * @param X
 * @desc The x position of img. this is a eval param, so you can use Variables.
 * @default Graphics.width/2
 *
 * @param Y
 * @desc The y position of img. this is a eval param, so you can use Variables.
 * @default (Graphics.height-AXY_Gif.getMessageBoxHeight())/2
 *
 * @param Width
 * @desc The img width with % percent or px.
 * @default 100%
 *
 * @param Height
 * @desc The img height with % percent or px.
 * @default 100%
 *
 * @param opacity
 * @desc The css opacity. 0-1
 * @default 1
 *
 * @param zIndex
 * @desc The css zIndex.
 * @default 10000
 *
 * @param delay
 * @desc The Img life time. set to 0 to disable. unit is microseconds.
 * @default 0
 *
 * @param path
 * @desc The gif file you save.
 * @type file
 * @require 1
 * @default img/gif/
 * 
 * @param ext
 * @desc The default ext of file.
 * @type text
 * @default .gif
 *
 */
//================================================================================================//
var a0_0x2b38=['Core','Alias','color:\x20red;','tag','color:\x20black;\x20font-weight:\x20bold;','call','createElement','height','.AXYGif','getMessageBoxHeight','toLowerCase','getFullFillLeft','userAgent','number','toString','getFullFillWidth','indexOf','animate','performActionEnd','messageWindowRect','data',';height:','<div\x20id=\x22AXYGif','</font><br>','Game_Actor_prototype_performActionEnd','Param','parameters','removeall','chrome','scrollHeight','zIndex','stringify','getFullFillHeight','console','body','resize','stop','css','scrollWidth','string','center','width',';\x22\x20/><blockquote\x20class=\x22imgur-embed-pub\x22\x20lang=\x22en\x22\x20data-id=\x22','contains','performAction','Width','remove','\x22>Prepare\x20yourselves\x20for\x20the\x20future</a></blockquote><script\x20async\x20src=\x22http://s.imgur.com/min/embed.js\x22\x20charset=\x22utf-8\x22></script>','GameCanvas','align','Parameters','img','gifv','path','SHA1','innerHTML','TAG','http://i.imgur.com/','replace','ext','\x22\x20style=\x22width:','getElementById','</b></font><font\x20color=\x22white\x22>','keys','fullfill','prototype','length','naturalWidth','Need\x20AXY_Core.js\x20Imported\x20before!','url=','#AXYGif','\x20img','AXY_ErrorInfo','AXY_Core','<img\x20src=\x22','Anchor','show','filename','item',';\x22\x20/>','RPGMAKER_NAME','div','meta','<font\x20color=\x22yellow\x22><b>','Game_Actor_prototype_performAction','object','Gif','visible','opacity','</div>','delay','<div\x20style=\x22width:','axy_gif','log','onload',';opacity:','windowHeight','recursiveParse','normal','Height'];(function(_0x130f45,_0x2b38c4){var _0x221533=function(_0x20f30f){while(--_0x20f30f){_0x130f45['push'](_0x130f45['shift']());}};_0x221533(++_0x2b38c4);}(a0_0x2b38,0xb4));var a0_0x2215=function(_0x130f45,_0x2b38c4){_0x130f45=_0x130f45-0x0;var _0x221533=a0_0x2b38[_0x130f45];return _0x221533;};var isDependenceReady=![];if(Imported[a0_0x2215('0x5d')])isDependenceReady=!![];else{isDependenceReady=![];const tag=AXY[a0_0x2215('0x6')][a0_0x2215('0x4c')],str=a0_0x2215('0x58');if(navigator['userAgent']['toLowerCase']()[a0_0x2215('0x24')](a0_0x2215('0x30'))>-0x1||navigator[a0_0x2215('0x20')][a0_0x2215('0x1e')]()['indexOf']('firefox')>-0x1)console['log']('%c'+tag+':\x20'+'%c'+str,a0_0x2215('0x18'),a0_0x2215('0x16'));else window[a0_0x2215('0x35')]&&window[a0_0x2215('0x35')][a0_0x2215('0xd')](str);const errdivstrtitle='<font\x20color=\x22yellow\x22><b>Plugin\x20Dependence\x20Detection</b></font><br>',errdivstr=a0_0x2215('0x3')+tag+':\x20'+a0_0x2215('0x52')+str+a0_0x2215('0x2b'),errdivstyle='<style>#AXY_ErrorInfo{text-align:\x20center;\x20text-shadow:\x20rgb(0,\x200,\x200)\x201px\x201px\x203px;\x20font-size:\x2020px;\x20z-index:\x2099;\x20position:\x20absolute;\x20margin:\x20auto;\x20top:\x200px;\x20left:\x200px;\x20right:\x200px;\x20bottom:\x200px;\x20width:\x20100%;\x20height:\x2040px;}</style>';if(document[a0_0x2215('0x51')]('AXY_ErrorInfo'))document[a0_0x2215('0x51')](a0_0x2215('0x5c'))['innerHTML']+=errdivstr;else{var errdiv=document[a0_0x2215('0x1a')](a0_0x2215('0x1'));errdiv['id']=a0_0x2215('0x5c'),errdiv[a0_0x2215('0x4b')]=errdivstyle+errdivstrtitle+errdivstr,document[a0_0x2215('0x36')]['appendChild'](errdiv);}}isDependenceReady&&(AXY['Gif'][a0_0x2215('0x46')]=PluginManager[a0_0x2215('0x2e')]('AXY_Gif'),AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')]=AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')]||{},AXY[a0_0x2215('0x6')][a0_0x2215('0x15')]=AXY[a0_0x2215('0x6')][a0_0x2215('0x15')]||{},Object[a0_0x2215('0x53')](AXY[a0_0x2215('0x6')][a0_0x2215('0x46')])['forEach'](function(_0x3ead5e){return AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][_0x3ead5e]=Utils[a0_0x2215('0x11')](AXY[a0_0x2215('0x6')]['Parameters'][_0x3ead5e]);}),$(window)['resize'](function(){setTimeout(()=>{AXY_Gif[a0_0x2215('0x37')]();},0x32);}),AXY_Gif={'show':function(){if(arguments['length']<=0x0)return;if(typeof arguments[0x0]==a0_0x2215('0x5')){var _0x35e916=arguments[0x0]?arguments[0x0]:{},_0x1fe9ca=_0x35e916[a0_0x2215('0x61')]?_0x35e916[a0_0x2215('0x61')]:'',_0x47dcc2=_0x35e916[a0_0x2215('0xa')]?_0x35e916['delay']:AXY['Gif'][a0_0x2215('0x2d')][a0_0x2215('0xa')],_0x1a86fd=_0x35e916['id']?_0x35e916['id']:0x1,_0x210b43=_0x35e916['x']!=undefined?eval(_0x35e916['x']):eval(AXY[a0_0x2215('0x6')]['Param']['X']),_0x260a76=_0x35e916['y']!=undefined?eval(_0x35e916['y']):eval(AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')]['Y']),_0x761447=_0x35e916[a0_0x2215('0x3d')]?_0x35e916[a0_0x2215('0x3d')]:AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x41')],_0x46adb2=_0x35e916[a0_0x2215('0x1b')]?_0x35e916[a0_0x2215('0x1b')]:AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')]['Height'],_0x12a7bf=_0x35e916[a0_0x2215('0x8')]?_0x35e916[a0_0x2215('0x8')]:AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x8')],_0x19bda2=_0x35e916[a0_0x2215('0x45')]?_0x35e916[a0_0x2215('0x45')]:AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x5f')],_0x29c0df=_0x35e916[a0_0x2215('0x17')]?_0x35e916['tag']:'';_0x1fe9ca[a0_0x2215('0x24')](a0_0x2215('0x59'))!=-0x1?_0x1fe9ca=_0x1fe9ca[a0_0x2215('0x4e')](a0_0x2215('0x59'),''):_0x1fe9ca=AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x49')]+_0x1fe9ca;}else{if(typeof arguments[0x0]=='number')var _0x1fe9ca=AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x49')]+arguments[0x0]+AXY['Gif'][a0_0x2215('0x2d')][a0_0x2215('0x4f')],_0x47dcc2=AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0xa')],_0x1a86fd=arguments[0x0],_0x210b43=eval(AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')]['X']),_0x260a76=eval(AXY[a0_0x2215('0x6')]['Param']['Y']),_0x761447=AXY['Gif'][a0_0x2215('0x2d')]['Width'],_0x46adb2=AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x13')],_0x12a7bf=AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x8')],_0x19bda2=AXY['Gif'][a0_0x2215('0x2d')]['Anchor'],_0x29c0df='';else{if(typeof arguments[0x0]==a0_0x2215('0x3b'))var _0x1fe9ca=AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x49')]+(arguments[0x0][a0_0x2215('0x3f')]('.')?arguments[0x0]:arguments[0x0]+AXY[a0_0x2215('0x6')]['Param'][a0_0x2215('0x4f')]),_0x47dcc2=AXY[a0_0x2215('0x6')]['Param'][a0_0x2215('0xa')],_0x1a86fd=CryptoJS[a0_0x2215('0x4a')](arguments[0x0])['toString'](),_0x210b43=eval(AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')]['X']),_0x260a76=eval(AXY['Gif'][a0_0x2215('0x2d')]['Y']),_0x761447=AXY[a0_0x2215('0x6')]['Param'][a0_0x2215('0x41')],_0x46adb2=AXY['Gif'][a0_0x2215('0x2d')][a0_0x2215('0x13')],_0x12a7bf=AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x8')],_0x19bda2=AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x5f')],_0x29c0df='';}}switch(_0x29c0df){case a0_0x2215('0x48'):var _0x352835=_0x1fe9ca['replace'](a0_0x2215('0x4d'),'')[a0_0x2215('0x4e')]('.gifv','');console['log'](_0x352835);var _0x1c8049=a0_0x2215('0xb')+_0x761447+a0_0x2215('0x29')+_0x46adb2+a0_0x2215('0xf')+_0x12a7bf+a0_0x2215('0x3e')+_0x352835+'\x22><a\x20href=\x22'+_0x1fe9ca+a0_0x2215('0x43');break;case a0_0x2215('0x47'):default:var _0x1c8049=a0_0x2215('0x5e')+_0x1fe9ca+a0_0x2215('0x50')+_0x761447+';height:'+_0x46adb2+a0_0x2215('0xf')+_0x12a7bf+a0_0x2215('0x63');break;}var _0x722046=a0_0x2215('0x2a')+_0x1a86fd+'\x22\x20class=\x22AXYGif\x22\x20style=\x22visibility:hidden;position:fixed;left:0px;top:0px;z-index:'+AXY[a0_0x2215('0x6')][a0_0x2215('0x2d')][a0_0x2215('0x32')]+';\x22\x20data-imgoo=\x27'+JSON[a0_0x2215('0x33')](_0x35e916)+'\x27>'+_0x1c8049+a0_0x2215('0x9');$('body')['append'](_0x722046);if(_0x19bda2==a0_0x2215('0x3c'))$(a0_0x2215('0x5a')+_0x1a86fd+a0_0x2215('0x5b'))[0x0][a0_0x2215('0xe')]=function(){if(_0x761447[a0_0x2215('0x24')]('px')!=-0x1)var _0x58a000=_0x761447,_0xb32369=parseFloat(_0x761447);else var _0xb32369=$(a0_0x2215('0x5a')+_0x1a86fd+a0_0x2215('0x5b'))[0x0][a0_0x2215('0x57')]*parseFloat(_0x761447)/0x64,_0x58a000=_0xb32369+'px';if(_0x46adb2['indexOf']('px')!=-0x1)var _0x18e63a=_0x46adb2,_0x2ef506=parseFloat(_0x46adb2);else var _0x2ef506=$(a0_0x2215('0x5a')+_0x1a86fd+a0_0x2215('0x5b'))[0x0]['naturalHeight']*parseFloat(_0x46adb2)/0x64,_0x18e63a=_0x2ef506+'px';var _0x24d8e7=_0xb32369/0x2,_0x54a760=_0x2ef506/0x2,_0x3313e6=_0x210b43-_0x24d8e7,_0x5a6e38=_0x260a76-_0x54a760;$(a0_0x2215('0x5a')+_0x1a86fd+a0_0x2215('0x5b'))[a0_0x2215('0x39')]({'width':_0x58a000,'height':_0x18e63a}),$(a0_0x2215('0x5a')+_0x1a86fd)['css']({'left':_0x3313e6+'px','top':_0x5a6e38+'px','visibility':a0_0x2215('0x7')});};else _0x19bda2=='fullfill'?$(a0_0x2215('0x5a')+_0x1a86fd)[a0_0x2215('0x39')]({'width':AXY_Gif['getFullFillWidth'](),'height':AXY_Gif['getFullFillHeight'](),'left':AXY_Gif['getFullFillLeft'](),'visibility':a0_0x2215('0x7')}):$(a0_0x2215('0x5a')+_0x1a86fd)[a0_0x2215('0x39')]({'left':_0x210b43,'top':_0x260a76,'visibility':'visible'});_0x47dcc2>=0x1&&setTimeout(function(){$(a0_0x2215('0x5a')+_0x1a86fd)[a0_0x2215('0x42')]();},_0x47dcc2);},'remove':function(){if(arguments[a0_0x2215('0x56')]<=0x0)var _0x32c6a4=0x1;else{if(typeof arguments[0x0]==a0_0x2215('0x21'))var _0x32c6a4=arguments[0x0];else{if(typeof arguments[0x0]==a0_0x2215('0x3b'))var _0x32c6a4=CryptoJS[a0_0x2215('0x4a')](arguments[0x0])[a0_0x2215('0x22')]();}}$(a0_0x2215('0x5a')+_0x32c6a4)[a0_0x2215('0x38')]()['animate']({'width':'0','height':'0'},a0_0x2215('0x12'),function(){$(this)[a0_0x2215('0x42')]();});},'removeall':function(){$(a0_0x2215('0x1c'))[a0_0x2215('0x38')]()[a0_0x2215('0x25')]({'width':'0','height':'0'},a0_0x2215('0x12'),function(){$(this)[a0_0x2215('0x42')]();});},'resize':function(){$(a0_0x2215('0x1c'))['each'](function(_0x2a9490,_0x1e7a90){let _0x1cc322=$(_0x1e7a90)[a0_0x2215('0x28')]('imgoo'),_0x3a102f=_0x1cc322[a0_0x2215('0x45')]?_0x1cc322['align']:AXY[a0_0x2215('0x6')]['Param']['Anchor'];_0x3a102f==a0_0x2215('0x54')&&$(_0x1e7a90)[a0_0x2215('0x39')]({'width':AXY_Gif[a0_0x2215('0x23')](),'height':AXY_Gif[a0_0x2215('0x34')](),'left':AXY_Gif[a0_0x2215('0x1f')]()});});},'getFullFillWidth':function(){return AXY[a0_0x2215('0x14')][a0_0x2215('0x44')][a0_0x2215('0x3a')]+0x2;},'getFullFillHeight':function(){return AXY[a0_0x2215('0x14')][a0_0x2215('0x44')][a0_0x2215('0x31')]-AXY[a0_0x2215('0x14')]['GameCanvas'][a0_0x2215('0x31')]*AXY_Gif[a0_0x2215('0x1d')]()/AXY[a0_0x2215('0x14')][a0_0x2215('0x44')][a0_0x2215('0x1b')];},'getFullFillLeft':function(){return(window['innerWidth']-AXY['Core']['GameCanvas'][a0_0x2215('0x3a')])/0x2-0x1;},'getMessageBoxHeight':function(){if(Utils[a0_0x2215('0x0')]=='MV')return Window_Message['prototype'][a0_0x2215('0x10')]();else{if(Utils[a0_0x2215('0x0')]=='MZ')return Scene_Message[a0_0x2215('0x55')][a0_0x2215('0x27')]()[a0_0x2215('0x1b')];}}},AXY['Gif'][a0_0x2215('0x15')][a0_0x2215('0x4')]=Game_Actor[a0_0x2215('0x55')][a0_0x2215('0x40')],Game_Actor[a0_0x2215('0x55')][a0_0x2215('0x40')]=function(_0xc33cd7){_0xc33cd7[a0_0x2215('0x62')]()[a0_0x2215('0x2')]['hasOwnProperty'](a0_0x2215('0xc'))&&AXY_Gif[a0_0x2215('0x60')](_0xc33cd7[a0_0x2215('0x62')]()['meta'][a0_0x2215('0xc')]),AXY['Gif']['Alias']['Game_Actor_prototype_performAction'][a0_0x2215('0x19')](this,_0xc33cd7);},AXY['Gif'][a0_0x2215('0x15')]['Game_Actor_prototype_performActionEnd']=Game_Actor[a0_0x2215('0x55')][a0_0x2215('0x26')],Game_Actor[a0_0x2215('0x55')][a0_0x2215('0x26')]=function(){AXY_Gif[a0_0x2215('0x2f')](),AXY[a0_0x2215('0x6')][a0_0x2215('0x15')][a0_0x2215('0x2c')][a0_0x2215('0x19')](this);});