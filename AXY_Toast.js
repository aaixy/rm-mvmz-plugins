//=============================================================================
// A XueYu Plugin - Toast
// AXY_Toast.js
//=============================================================================

var Imported = Imported || {};
Imported.AXY_Toast = true;

var AXY = AXY || {};
AXY.Toast = AXY.Toast || {};
AXY.Toast.TAG = "AXY_Toast";

//=============================================================================
/*:
 * @plugindesc v1.23 This plugin support android toast with many args.
 * @author A XueYu Plugins
 * @url https://666rpg.com/
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin support android toast with many args.
 * 
 * Example script command:
 * $.toaster({ message : 'hi, world!'});
 * $.toaster({ msg : "'hi, world!'+$gameVariables.value(1)"});
 * all args with default:
 * $.toaster({ title:'error', msg : "'error code is 1'", color:'red',fontfamily:AXY.Core.GameFont, fontsize:'20', textshadowcolor:'rgba(0,0,0,1)', textshadowwidth:'1', timeout: 1000});
 * AXY.Toast.Param.DisplayGainItem = true;
 * AXY.Toast.Param.DisplayGainItem = false;
 * and others DisplayLoseItem, DisplayGainGold, DisplayLoseGold, DisplayChangeExp, DisplayLevelUp, DisplayLevelDown etc.;
 * 
 * wirte this in note will disable lose item toast for just only this item:
 * <axy_toast:false>
 *
 * changelog
 * 1.23 2020.11.21
 * add: tag {$icon} in param CustomTipsTemplate for show icon;
 * add: param IconImg, IconWidth, IconHeight, GoldIconIndex;
 * modify: change meta from <AXY_Toast:false> to <axy_toast:false>;
 * 1.22 2020.11.16
 * fix: eval bug;
 * 1.21 2020.11.13
 * modify: param DisplayChangeExp to boolean;
 * 1.20 2020.11.12
 * add: RMMZ Main Fonts Compatible;
 * 1.19 2020.11.10
 * add: RMMZ Compatible;
 * 1.18 2020.10.28
 * optimize: Dependence Detection;
 * 1.17 2020.10.27
 * refactor: with AXY_Core.js plugin;
 * 1.16 2020.10.25
 * add: param Position;
 * add: param TextAlign;
 * add: param Height;
 * improve: param x and param y;
 * remove: function Array.indexOf, move to AXY_Core.js;
 * 1.15 2020.9.9
 * add: args timeout about notify;
 * add: param BGImg about toaster;
 * modify: param margin and padding;
 * 1.14 2020.8.24
 * add: param about lose gold and lose tiem;
 * 1.13 2020.8.19
 * fix: toaster gone isuss;
 * 1.12 2020.8.18
 * fix: crash about $('#UpperCanvas')[0] is undefined;
 * 1.11 2020.2.9
 * fix: exp toast after battle;
 * 1.10 2020.2.8
 * fix: exp toast;
 * 1.09 2017.9.1
 * add switch to enable or disable map info display;
 * 1.08 2017.8.27
 * add map info display auto then you do not need to set the display name in map editor;
 * 1.07 2017.1.28
 * fix issus that when set DisplayGainItem=false and use yep item core, toast will not notify gift or others in AXY_AjaxNetStuff.js by maunal;
 * 1.06 2017.1.22
 * fix 0 coin notify issus;
 * 1.05 2017.1.17
 * modify msg key for eval only for compatibility with old used, and msg peiroid langer then message;
 * 1.04 2017.1.16
 * fix position issus when black edge appear;
 * add msg alias for message and add eval on them;
 * fix exp change issus from yep class core;
 * add level down;
 * 1.03 2017.1.11
 * support yep itemcore.
 * 1.02 2017.1.8
 * add custom color to title.
 * 1.01 2017.1.5
 * add custom font-family, text-shadow and font-size.
 * 1.0 2017.12.26
 * first release
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 * 
 * @param Position
 * @text Position
 * @desc Such as Left Up, Up, Right Up, Right, Right Down, Down, Left Down, Left, Center, Custom.
 * @type select
 * @option Left Up
 * @value Left Up
 * @option Up
 * @value Up
 * @option Right Up
 * @value Right Up
 * @option Right
 * @value Right
 * @option Right Down
 * @value Right Down
 * @option Down
 * @value Down
 * @option Left Down
 * @value Left Down
 * @option Left
 * @value Left
 * @option Center
 * @value Center
 * @option Custom
 * @value Custom
 * @default Left Up
 * 
 * @param X
 * @desc The x coordinates of screen when Position is set to Custom. This is eval param.
 * @type number
 * @default 10
 *
 * @param Y
 * @desc The y coordinates of screen when Position is set to Custom. This is eval param.
 * @type number
 * @default 10
 *
 * @param Width
 * @desc The toast box width.
 * @type number
 * @default 300
 * 
 * @param Height
 * @desc The toast box height.
 * @type number
 * @default 48
 *
 * @param margin
 * @desc The space outer toast box. The sequence is: up right down left. default: 10px 10px 10px 10px
 * @default 10px 10px 10px 10px
 *
 * @param padding
 * @desc The space inner toast box. The sequence is: up right down left. default: 10px 10px 10px 10px
 * @default 10px 10px 10px 10px
 *
 * @param backgroundcolor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc. default: rgba(0,0,0,0.7)
 * @default rgba(0,0,0,0.7)
 * 
 * @param BGImg
 * @text BG Img
 * @desc File path for the background image of toaster.
 * @type file
 * @dir img
 * @require 1
 * @default 
 *
 * @param opacity
 * @desc The css opacity. 0-1
 * @default 1
 *
 * @param TextAlign
 * @text Text Align
 * @desc Such as Left, Center, Right.
 * @type select
 * @option Left
 * @value Left
 * @option Center
 * @value Center
 * @option Right
 * @value Right
 * @default Left
 * 
 * @param TextColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default yellow
 *
 * @param TextShadowColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default rgba(0,0,0,1)
 *
 * @param TextShadowWidth
 * @desc Text Shadow Width.
 * @default 1
 *
 * @param fontsize
 * @desc The size of text.
 * @default 18
 *
 * @param timeout
 * @desc The js setTimeout in microseconds.
 * @default 3000
 *
 * @param fade
 * @desc Fade speed? slow/fast.
 * @default slow
 *
 * @param zIndex
 * @desc The css zIndex.
 * @default 50000
 *
 * @param DisplayGainGold
 * @desc Display gainGold? true/false
 * @type boolean
 * @default true
 * 
 * @param DisplayLoseGold
 * @desc Display Lose Gold? true/false
 * @type boolean
 * @default true
 *
 * @param DisplayGainItem
 * @desc Display gainItem? true/false
 * @type boolean
 * @default true
 * 
 * @param DisplayLoseItem
 * @desc Display Lose Item? true/false
 * @type boolean
 * @default true
 *
 * @param DisplayChangeExp
 * @desc Display changeExp? true/false
 * @type boolean
 * @default true
 *
 * @param DisplayLevelUp
 * @desc Display levelUp? true/false
 * @type boolean
 * @default true
 *
 * @param DisplayLevelDown
 * @desc Display levelDown? true/false
 * @type boolean
 * @default true
 *
 * @param PositivePrefixText
 * @desc Positive Prefix text
 * @default Got
 *
 * @param NegativePrefixText
 * @desc Negative Prefix text
 * @default Lost
 *
 * @param CustomTipsTemplate
 * @desc Write custom tips template. Tags:{$prefixtext},{$amount},{$name},{$icon},\G
 * leave blank to use plugin default.
 * @default {$prefixtext}<span style="color:white">{$amount}</span>个<span style="color:#00FF00">{$name}</span> {$icon}
 *
 * @param DisplayMapInfo
 * @desc Display MapInfo? true/false
 * @type boolean
 * @default true
 *
 * @param DisableSystemDisplayMapName
 * @desc Disable System Display MapName? true/false
 * @type boolean
 * @default true
 *
 * @param CustomMapInfoTemplate
 * @desc Write custom MapInfo template. Tags:{$mapDisplayName},{$mapName},{$mapID},{$mapOrder},{$mapParentName},{$mapParentID},{$mapBGM},{$mapBGS}
 * @default "{$mapDisplayName}<br>MapName: {$mapName}<br>MapID: {$mapID}<br>MapOrder: {$mapOrder}<br>MapParentName: {$mapParentName}<br>MapParentID: {$mapParentID}<br>MapBGM: {$mapBGM}<br>MapBGS: {$mapBGS}"
 *
 * @param IconImg
 * @text Icon Img
 * @desc File path for the Icon image of item.
 * @type file
 * @dir img
 * @require 1
 * @default system/IconSet
 * 
 * @param IconWidth
 * @text Icon Width
 * @desc Icon Width.
 * @type number
 * @default 32
 * 
 * @param IconHeight
 * @text Icon Height
 * @desc Icon Height.
 * @type number
 * @default 32
 * 
 * @param GoldIconIndex
 * @text Gold Icon Index
 * @desc Gold Icon Index.
 * @type number
 * @default 314
 * 
 */
//================================================================================================//
var a0_0x59e8=['displayName','getElementById','priority','color:\x20red;','oldChangeEquip_method','append','Quality','left\x20down','name','<div\x20id=\x22toastMessage\x22>','gainItem','Toast','</div>',',\x20strength=','false','TextColor','DisplayLevelUp','fontsize','timeout','recursiveParse','width','appendTo','Core','Variables','tradeItemWithParty','Glow(color=','<font\x20color=\x22yellow\x22><b>','oldForceChangeEquip_method','bold','CustomTipsTemplate','&nbsp;','notify','gainGold','getIcon','toast','TAG','level','scrollWidth','.title','GameFont','container','toaster','px\x20-','attr','AXY_ErrorInfo','settings','text-shadow','extend','innerHTML','animate','%priority%','</b></font><font\x20color=\x22white\x22>','DisplayGainItem','body','<link\x20rel=\x22stylesheet\x22\x20href=\x22','</span>','initIndependentEquips','*filter','obtainSkill','msg','px;display:\x20inline-block;vertical-align:\x20middle;margin:\x200\x20','title','oldChangeEquipById_method','template','top','Height','oldTradewithParty_method','#UpperCanvas','textshadowwidth','font-size','floor','html','custom','left','font-family','createElement','TextShadowColor','remove','length','toLowerCase','format','includes','down','TextShadowWidth','levelDown','fixed','<style>#AXY_ErrorInfo{text-align:\x20center;\x20text-shadow:\x20rgb(0,\x200,\x200)\x201px\x201px\x203px;\x20font-size:\x2020px;\x20z-index:\x2099;\x20position:\x20absolute;\x20margin:\x20auto;\x20top:\x200px;\x20left:\x200px;\x20right:\x200px;\x20bottom:\x200px;\x20width:\x20100%;\x20height:\x2040px;}</style>','PositivePrefixText','<span\x20style=\x22background:\x20url(\x27img/','center','reset','firefox','backgroundcolor','order','prototype','class','meta','NegativePrefixText','parentId','axy_toast','_name','abs','debug','px;height:\x20','zIndex','addClass','DisplayLoseGold','hide','right\x20up','DisableSystemDisplayMapName','scrollHeight','Parameters','number','opacity','fontfamily','YEP_ItemCore','px;\x22></span>','indexOf','levelUp','replace','%1$s','parameters','donotdismiss','DisplayChangeExp','changeEquipById','.message','\x200\x20-','disableNameDisplay','forceChangeEquip','GoldIconIndex','IconHeight','oldInitIndepenEquips_method','userAgent','currencyUnit','height','.png\x22)\x200px\x2050%\x20/\x20cover\x20no-repeat','margin','displayLevelUp','XY_Toast_old_gainGold','AXY_Quality','_mapId','Width','z-index','px\x200,','px\x200\x200,','<div></div>','fade','createUpperLayer','message','IconImg','.png\x27)\x20no-repeat\x20scroll\x20-','CustomMapInfoTemplate','textshadowcolor','0px','div','axy_quality','TextAlign','bgs','stylesheet','link[href=','right\x20down','console','<span\x20style=\x22color:','DisplayMapInfo','_exp','chrome','log','quality','BGImg','fadeIn','_level','\x200\x20','px\x200','changeExp','appendChild','gettoaster','head','css','color','Param','call','bind','<font\x20color=\x22yellow\x22><b>Plugin\x20Dependence\x20Detection</b></font><br>'];(function(_0x3914c9,_0x59e8cc){var _0x4c774a=function(_0x340d74){while(--_0x340d74){_0x3914c9['push'](_0x3914c9['shift']());}};_0x4c774a(++_0x59e8cc);}(a0_0x59e8,0x153));var a0_0x4c77=function(_0x3914c9,_0x59e8cc){_0x3914c9=_0x3914c9-0x0;var _0x4c774a=a0_0x59e8[_0x3914c9];return _0x4c774a;};var isDependenceReady=![];if(Imported['AXY_Core'])isDependenceReady=!![];else{isDependenceReady=![];const tag=AXY['Toast'][a0_0x4c77('0x3e')],str='Need\x20AXY_Core.js\x20Imported\x20before!';if(navigator['userAgent'][a0_0x4c77('0x6a')]()[a0_0x4c77('0x90')](a0_0x4c77('0x9'))>-0x1||navigator[a0_0x4c77('0x9f')][a0_0x4c77('0x6a')]()[a0_0x4c77('0x90')](a0_0x4c77('0x76'))>-0x1)console[a0_0x4c77('0xa')]('%c'+tag+':\x20'+'%c'+str,'color:\x20black;\x20font-weight:\x20bold;',a0_0x4c77('0x1e'));else window[a0_0x4c77('0x5')]&&window[a0_0x4c77('0x5')][a0_0x4c77('0xa')](str);const errdivstrtitle=a0_0x4c77('0x1a'),errdivstr=a0_0x4c77('0x35')+tag+':\x20'+a0_0x4c77('0x4e')+str+'</font><br>',errdivstyle=a0_0x4c77('0x71');if(document[a0_0x4c77('0x1c')]('AXY_ErrorInfo'))document[a0_0x4c77('0x1c')](a0_0x4c77('0x47'))[a0_0x4c77('0x4b')]+=errdivstr;else{var errdiv=document[a0_0x4c77('0x66')](a0_0x4c77('0xb5'));errdiv['id']=a0_0x4c77('0x47'),errdiv[a0_0x4c77('0x4b')]=errdivstyle+errdivstrtitle+errdivstr,document['body'][a0_0x4c77('0x12')](errdiv);}}if(isDependenceReady){AXY[a0_0x4c77('0x26')]['Parameters']=PluginManager[a0_0x4c77('0x94')]('AXY_Toast'),AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]=AXY['Toast'][a0_0x4c77('0x17')]||{},AXY[a0_0x4c77('0x26')]['Variables']=AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]||{},Object['keys'](AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')])['forEach'](function(_0x5ee3c6){return AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][_0x5ee3c6]=Utils[a0_0x4c77('0x2e')](AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][_0x5ee3c6]);}),function(_0x4de6d9,_0x6ecddf){var _0x37bd38={'gettoaster':function(){var _0xb07e94=_0x4de6d9('#'+_0x449f28[a0_0x4c77('0x44')]['id']);return _0xb07e94[a0_0x4c77('0x69')]<0x1&&(_0xb07e94=_0x4de6d9(_0x449f28[a0_0x4c77('0x44')][a0_0x4c77('0x5a')])[a0_0x4c77('0x46')]('id',_0x449f28[a0_0x4c77('0x44')]['id'])[a0_0x4c77('0x15')](_0x449f28[a0_0x4c77('0x44')][a0_0x4c77('0x15')])[a0_0x4c77('0x84')](_0x449f28[a0_0x4c77('0x44')]['class']),_0x449f28[a0_0x4c77('0x2')]&&!_0x4de6d9(a0_0x4c77('0x3')+_0x449f28[a0_0x4c77('0x2')]+']')[a0_0x4c77('0x69')]&&_0x4de6d9(a0_0x4c77('0x14'))[a0_0x4c77('0x30')](a0_0x4c77('0x51')+_0x449f28[a0_0x4c77('0x2')]+'\x22>'),_0x4de6d9(_0x449f28['toaster'][a0_0x4c77('0x43')])[a0_0x4c77('0x20')](_0xb07e94)),_0xb07e94;},'notify':function(_0x7e85f3,_0x46c7ef,_0x51da30,_0x1a4caf,_0x55e82f,_0x5be02f,_0x424dcf,_0xa9f893,_0x5838df){var _0x1512d2=this[a0_0x4c77('0x13')](),_0x5a2ba2=_0x4de6d9(_0x449f28['toast']['template'][a0_0x4c77('0x92')](a0_0x4c77('0x4d'),_0x51da30))[a0_0x4c77('0x86')]()[a0_0x4c77('0x15')](_0x449f28[a0_0x4c77('0x3d')][a0_0x4c77('0x15')])['addClass'](_0x449f28[a0_0x4c77('0x3d')][a0_0x4c77('0x7a')]);_0x5a2ba2[a0_0x4c77('0x15')](a0_0x4c77('0x65'),_0x55e82f?_0x55e82f:AXY[a0_0x4c77('0x31')][a0_0x4c77('0x42')]),_0x4de6d9(a0_0x4c77('0x41'),_0x5a2ba2)[a0_0x4c77('0x15')](_0x449f28['toast']['csst'])[a0_0x4c77('0x62')](_0x7e85f3),_0x4de6d9(a0_0x4c77('0x98'),_0x5a2ba2)['css'](_0x449f28[a0_0x4c77('0x3d')]['cssm'])[a0_0x4c77('0x62')](_0x46c7ef),_0x1512d2[a0_0x4c77('0x15')](a0_0x4c77('0xa9'),AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x83')]);if(_0x4de6d9(a0_0x4c77('0x5e'))[0x0]&&document[a0_0x4c77('0x50')][a0_0x4c77('0x40')]>_0x4de6d9(a0_0x4c77('0x5e'))[0x0][a0_0x4c77('0x40')]){var _0x2e29e4=AXY['Toast'][a0_0x4c77('0x17')]['X']+(document[a0_0x4c77('0x50')][a0_0x4c77('0x40')]-_0x4de6d9(a0_0x4c77('0x5e'))[0x0][a0_0x4c77('0x40')])/0x2;_0x1512d2[a0_0x4c77('0x15')]('left',_0x2e29e4+'px');}if(_0x4de6d9(a0_0x4c77('0x5e'))[0x0]&&document[a0_0x4c77('0x50')][a0_0x4c77('0x89')]>_0x4de6d9('#UpperCanvas')[0x0][a0_0x4c77('0x89')]){var _0x385425=AXY[a0_0x4c77('0x26')]['Param']['Y']+(document[a0_0x4c77('0x50')][a0_0x4c77('0x89')]-_0x4de6d9(a0_0x4c77('0x5e'))[0x0][a0_0x4c77('0x89')])/0x2;_0x1512d2[a0_0x4c77('0x15')](a0_0x4c77('0x5b'),_0x385425+'px');}_0x1a4caf&&_0x5a2ba2[a0_0x4c77('0x15')](a0_0x4c77('0x16'),_0x1a4caf);_0x5be02f&&_0x5a2ba2['css'](a0_0x4c77('0x60'),_0x5be02f+'px');!_0x424dcf&&(_0x424dcf=String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][a0_0x4c77('0x67')]));!_0xa9f893&&(_0xa9f893=String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][a0_0x4c77('0x6e')]));_0x5a2ba2['css'](a0_0x4c77('0x49'),_0x424dcf+'\x20'+_0xa9f893+'px\x200\x200,'+_0x424dcf+a0_0x4c77('0xf')+_0xa9f893+a0_0x4c77('0xaa')+_0x424dcf+'\x20-'+_0xa9f893+a0_0x4c77('0xab')+_0x424dcf+a0_0x4c77('0x99')+_0xa9f893+'px\x200'),_0x5a2ba2[a0_0x4c77('0x15')]('-webkit-text-shadow',_0x424dcf+'\x20'+_0xa9f893+'px\x200\x200,'+_0x424dcf+a0_0x4c77('0xf')+_0xa9f893+'px\x200,'+_0x424dcf+'\x20-'+_0xa9f893+a0_0x4c77('0xab')+_0x424dcf+a0_0x4c77('0x99')+_0xa9f893+a0_0x4c77('0x10')),_0x5a2ba2[a0_0x4c77('0x15')]('-moz-text-shadow',_0x424dcf+'\x20'+_0xa9f893+a0_0x4c77('0xab')+_0x424dcf+a0_0x4c77('0xf')+_0xa9f893+a0_0x4c77('0xaa')+_0x424dcf+'\x20-'+_0xa9f893+a0_0x4c77('0xab')+_0x424dcf+a0_0x4c77('0x99')+_0xa9f893+a0_0x4c77('0x10')),_0x5a2ba2['css'](a0_0x4c77('0x54'),'Glow(color='+_0x424dcf+a0_0x4c77('0x28')+_0xa9f893+')');_0x449f28[a0_0x4c77('0x81')]&&window['console']&&console['log'](toast);_0x1512d2[a0_0x4c77('0x20')](_0x449f28['toast']['display'](_0x5a2ba2));if(_0x449f28[a0_0x4c77('0x95')]['indexOf'](_0x51da30)===-0x1)var _0x31c5c0=typeof _0x449f28['timeout']===a0_0x4c77('0x8b')?_0x449f28['timeout']:typeof _0x449f28['timeout']==='object'&&_0x51da30 in _0x449f28[a0_0x4c77('0x2d')]?_0x449f28[a0_0x4c77('0x2d')][_0x51da30]:0x5dc;if(_0x5838df)var _0x31c5c0=_0x5838df;setTimeout(function(){_0x449f28[a0_0x4c77('0x3d')][a0_0x4c77('0x68')](_0x5a2ba2,function(){_0x5a2ba2[a0_0x4c77('0x68')]();});},_0x31c5c0);}};switch(AXY[a0_0x4c77('0x26')]['Param']['Position']['toLowerCase']()){case'left\x20up'[a0_0x4c77('0x6a')]():AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['X']=0x0,AXY[a0_0x4c77('0x26')]['Variables']['Y']=0x0;break;case'up'[a0_0x4c77('0x6a')]():AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['X']=(_0x4de6d9(window)[a0_0x4c77('0x2f')]()-AXY[a0_0x4c77('0x26')]['Param']['Width'])/0x2,AXY['Toast'][a0_0x4c77('0x32')]['Y']=0x0;break;case a0_0x4c77('0x87')[a0_0x4c77('0x6a')]():AXY[a0_0x4c77('0x26')]['Variables']['X']=_0x4de6d9(window)[a0_0x4c77('0x2f')]()-AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['Width'],AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['Y']=0x0;break;case'right'[a0_0x4c77('0x6a')]():AXY['Toast'][a0_0x4c77('0x32')]['X']=_0x4de6d9(window)[a0_0x4c77('0x2f')]()-AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0xa8')],AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['Y']=(_0x4de6d9(window)[a0_0x4c77('0xa1')]()-AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x5c')])/0x2;break;case a0_0x4c77('0x4')[a0_0x4c77('0x6a')]():AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['X']=_0x4de6d9(window)['width']()-AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0xa8')],AXY['Toast']['Variables']['Y']=_0x4de6d9(window)[a0_0x4c77('0xa1')]()-AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x5c')];break;case a0_0x4c77('0x6d')[a0_0x4c77('0x6a')]():AXY['Toast'][a0_0x4c77('0x32')]['X']=(_0x4de6d9(window)['width']()-AXY[a0_0x4c77('0x26')]['Param']['Width'])/0x2,AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['Y']=_0x4de6d9(window)[a0_0x4c77('0xa1')]()-AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x5c')];break;case a0_0x4c77('0x22')['toLowerCase']():AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['X']=0x0,AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['Y']=_0x4de6d9(window)[a0_0x4c77('0xa1')]()-AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x5c')];break;case a0_0x4c77('0x64')['toLowerCase']():AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['X']=0x0,AXY[a0_0x4c77('0x26')]['Variables']['Y']=(_0x4de6d9(window)[a0_0x4c77('0xa1')]()-AXY['Toast']['Param'][a0_0x4c77('0x5c')])/0x2;break;case a0_0x4c77('0x74')[a0_0x4c77('0x6a')]():AXY[a0_0x4c77('0x26')]['Variables']['X']=(_0x4de6d9(window)[a0_0x4c77('0x2f')]()-AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0xa8')])/0x2,AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['Y']=(_0x4de6d9(window)[a0_0x4c77('0xa1')]()-AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x5c')])/0x2;break;case a0_0x4c77('0x63')['toLowerCase']():AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['X']=eval(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['X']),AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['Y']=eval(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['Y']);break;}var _0x5c4442={'toaster':{'id':a0_0x4c77('0x44'),'container':a0_0x4c77('0x50'),'template':a0_0x4c77('0xac'),'class':'toaster','css':{'position':a0_0x4c77('0x70'),'left':AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['X']+'px','top':AXY[a0_0x4c77('0x26')][a0_0x4c77('0x32')]['Y']+'px','width':AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0xa8')]+'px','zIndex':AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x83')],'opacity':AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x8c')],'font-family':AXY[a0_0x4c77('0x31')][a0_0x4c77('0x42')],'text-shadow':String(AXY['Toast'][a0_0x4c77('0x8a')][a0_0x4c77('0x67')])+'\x20'+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][a0_0x4c77('0x6e')])+'px\x200\x200,'+String(AXY['Toast'][a0_0x4c77('0x8a')][a0_0x4c77('0x67')])+a0_0x4c77('0xf')+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][a0_0x4c77('0x6e')])+a0_0x4c77('0xaa')+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][a0_0x4c77('0x67')])+'\x20-'+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][a0_0x4c77('0x6e')])+a0_0x4c77('0xab')+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')]['TextShadowColor'])+a0_0x4c77('0x99')+String(AXY['Toast']['Parameters'][a0_0x4c77('0x6e')])+a0_0x4c77('0x10'),'-webkit-text-shadow':String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][a0_0x4c77('0x67')])+'\x20'+String(AXY['Toast']['Parameters'][a0_0x4c77('0x6e')])+a0_0x4c77('0xab')+String(AXY[a0_0x4c77('0x26')]['Parameters'][a0_0x4c77('0x67')])+a0_0x4c77('0xf')+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')]['TextShadowWidth'])+a0_0x4c77('0xaa')+String(AXY['Toast'][a0_0x4c77('0x8a')][a0_0x4c77('0x67')])+'\x20-'+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')]['TextShadowWidth'])+a0_0x4c77('0xab')+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')]['TextShadowColor'])+'\x200\x20-'+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')]['TextShadowWidth'])+a0_0x4c77('0x10'),'-moz-text-shadow':String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][a0_0x4c77('0x67')])+'\x20'+String(AXY['Toast'][a0_0x4c77('0x8a')][a0_0x4c77('0x6e')])+'px\x200\x200,'+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][a0_0x4c77('0x67')])+a0_0x4c77('0xf')+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')]['TextShadowWidth'])+a0_0x4c77('0xaa')+String(AXY[a0_0x4c77('0x26')]['Parameters']['TextShadowColor'])+'\x20-'+String(AXY['Toast'][a0_0x4c77('0x8a')][a0_0x4c77('0x6e')])+a0_0x4c77('0xab')+String(AXY[a0_0x4c77('0x26')]['Parameters']['TextShadowColor'])+a0_0x4c77('0x99')+String(AXY['Toast']['Parameters'][a0_0x4c77('0x6e')])+a0_0x4c77('0x10'),'*filter':a0_0x4c77('0x34')+String(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x8a')][a0_0x4c77('0x67')])+a0_0x4c77('0x28')+String(AXY[a0_0x4c77('0x26')]['Parameters'][a0_0x4c77('0x6e')])+')'}},'toast':{'template':a0_0x4c77('0x24')+'<span\x20class=\x22title\x22></span><span\x20class=\x22message\x22></span>'+a0_0x4c77('0x27'),'css':{'background':AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x77')]+(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0xc')][a0_0x4c77('0x6c')]('/')?'\x20url(\x22img/'+AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['BGImg']+a0_0x4c77('0xa2'):''),'color':AXY[a0_0x4c77('0x26')]['Param'][a0_0x4c77('0x2a')],'font-size':AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x2c')]+'px','padding':AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['padding'],'margin':AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0xa3')],'text-align':AXY[a0_0x4c77('0x26')]['Param'][a0_0x4c77('0x0')][a0_0x4c77('0x6a')]()},'cssm':{},'csst':{'fontWeight':a0_0x4c77('0x37')},'fade':AXY[a0_0x4c77('0x26')]['Param']['fade'],'display':function(_0x204f3f){return _0x204f3f[a0_0x4c77('0xd')](_0x449f28['toast']['fade']);},'remove':function(_0x6053bc,_0x2719f1){return _0x6053bc[a0_0x4c77('0x4c')]({'opacity':'0','padding':a0_0x4c77('0xb4'),'margin':'0px','height':a0_0x4c77('0xb4')},{'duration':_0x449f28['toast'][a0_0x4c77('0xad')],'complete':_0x2719f1});}},'debug':![],'timeout':AXY['Toast'][a0_0x4c77('0x17')]['timeout'],'stylesheet':null,'donotdismiss':[]},_0x449f28={};_0x4de6d9[a0_0x4c77('0x4a')](_0x449f28,_0x5c4442),_0x4de6d9[a0_0x4c77('0x44')]=function(_0x378c55){if(typeof _0x378c55==='object'){a0_0x4c77('0x48')in _0x378c55&&(_0x449f28=_0x4de6d9[a0_0x4c77('0x4a')](_0x449f28,_0x378c55[a0_0x4c77('0x48')]));var _0x15078f=a0_0x4c77('0x58')in _0x378c55?_0x378c55[a0_0x4c77('0x58')]:'',_0x90bd8f=a0_0x4c77('0xaf')in _0x378c55?_0x378c55[a0_0x4c77('0xaf')]:null,_0xbe7391=a0_0x4c77('0x56')in _0x378c55?_0x378c55['msg']:null,_0x2a08b4=a0_0x4c77('0x1d')in _0x378c55?_0x378c55[a0_0x4c77('0x1d')]:'',_0x165cea='color'in _0x378c55?_0x378c55[a0_0x4c77('0x16')]:'',_0x5a87fe='fontfamily'in _0x378c55?_0x378c55[a0_0x4c77('0x8d')]:AXY[a0_0x4c77('0x31')][a0_0x4c77('0x42')],_0x1cee4e=a0_0x4c77('0x2c')in _0x378c55?_0x378c55[a0_0x4c77('0x2c')]:'',_0x1479b1='textshadowcolor'in _0x378c55?_0x378c55[a0_0x4c77('0xb3')]:'',_0x130bf7=a0_0x4c77('0x5f')in _0x378c55?_0x378c55[a0_0x4c77('0x5f')]:'',_0x3aa70e='timeout'in _0x378c55?_0x378c55['timeout']:'';try{_0x90bd8f=_0xbe7391?eval(_0xbe7391):_0x90bd8f;}catch(_0x576ec8){console[a0_0x4c77('0xa')](_0x576ec8),_0x90bd8f=_0xbe7391?_0xbe7391:_0x90bd8f;}_0x90bd8f!==null&&_0x37bd38[a0_0x4c77('0x3a')](_0x15078f,_0x90bd8f,_0x2a08b4,_0x165cea,_0x5a87fe,_0x1cee4e,_0x1479b1,_0x130bf7,_0x3aa70e);}},_0x4de6d9['toaster'][a0_0x4c77('0x75')]=function(){_0x449f28={},_0x4de6d9[a0_0x4c77('0x4a')](_0x449f28,_0x5c4442);};}(jQuery),AXY_Toast={'getIcon':function(_0x59ce89,_0x6ae3c8){var _0x233525=AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['IconWidth'],_0x35e7bf=AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x9d')],_0x19d4a2=_0x59ce89%0x10*_0x233525,_0x466e66=Math[a0_0x4c77('0x61')](_0x59ce89/0x10)*_0x35e7bf;return a0_0x4c77('0x73')+AXY[a0_0x4c77('0x26')]['Param'][a0_0x4c77('0xb0')]+a0_0x4c77('0xb1')+_0x19d4a2+a0_0x4c77('0x45')+_0x466e66+'px;width:\x20'+_0x233525+a0_0x4c77('0x82')+_0x35e7bf+a0_0x4c77('0x57')+(_0x6ae3c8?_0x6ae3c8:0x0)+a0_0x4c77('0x8f');}};AXY['Toast'][a0_0x4c77('0x17')]['DisplayGainGold']&&(Game_Party[a0_0x4c77('0x79')][a0_0x4c77('0xa5')]=Game_Party[a0_0x4c77('0x79')][a0_0x4c77('0x3b')],Game_Party[a0_0x4c77('0x79')]['gainGold']=function(_0x483663){this[a0_0x4c77('0xa5')](_0x483663);if(_0x483663==0x0)return;var _0xf3e390='';if(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x38')]!=''&&AXY[a0_0x4c77('0x26')]['Param']['CustomTipsTemplate']!=null){switch(!![]){default:name=TextManager[a0_0x4c77('0xa0')];break;}_0xf3e390=AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x38')],_0xf3e390=_0xf3e390['replace'](/\{\$prefixtext\}/g,_0x483663>0x0?AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x72')]:AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['NegativePrefixText']),_0xf3e390=_0xf3e390[a0_0x4c77('0x92')](/\{\$amount\}/g,Math[a0_0x4c77('0x80')](_0x483663)),_0xf3e390=_0xf3e390['replace'](/\{\$name\}/g,name),_0xf3e390=_0xf3e390['replace'](/\{\$icon\}/gi,function(){return AXY_Toast['getIcon'](AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x9c')]);}[a0_0x4c77('0x19')](this));}else _0xf3e390=(_0x483663>0x0?AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x72')]:AXY['Toast']['Param'][a0_0x4c77('0x7c')])+Math[a0_0x4c77('0x80')](_0x483663)+name;if(_0x483663<0x0&&!AXY['Toast']['Param'][a0_0x4c77('0x85')])return;$[a0_0x4c77('0x44')]({'message':_0xf3e390});});AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x4f')]&&(AXY['Toast'][a0_0x4c77('0x25')]=Game_Party['prototype'][a0_0x4c77('0x25')],Game_Party[a0_0x4c77('0x79')][a0_0x4c77('0x25')]=function(_0x23eb80,_0x24a076,_0x41f520){AXY[a0_0x4c77('0x26')]['gainItem'][a0_0x4c77('0x18')](this,_0x23eb80,_0x24a076,_0x41f520);if(_0x23eb80==undefined||_0x23eb80[a0_0x4c77('0x23')]==undefined||_0x24a076===0x0)return;var _0x3a4d19='';if(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['CustomTipsTemplate']!=''&&AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x38')]!=null){switch(!![]){default:name=_0x23eb80['name'];break;}_0x3a4d19=AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x38')],_0x3a4d19=_0x3a4d19[a0_0x4c77('0x92')](/\{\$prefixtext\}/gi,_0x24a076>0x0?AXY[a0_0x4c77('0x26')]['Param']['PositivePrefixText']:AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['NegativePrefixText']),_0x3a4d19=_0x3a4d19[a0_0x4c77('0x92')](/\{\$amount\}/gi,Math['abs'](_0x24a076));if(Imported[a0_0x4c77('0xa6')]&&_0x23eb80['meta'][a0_0x4c77('0xb6')]){var _0x115229=AXY[a0_0x4c77('0x21')]['Param'][a0_0x4c77('0xb')][_0x23eb80[a0_0x4c77('0x7b')]['axy_quality']];name=a0_0x4c77('0x6')+_0x115229[a0_0x4c77('0x16')]+'\x22>'+name+AXY[a0_0x4c77('0x21')][a0_0x4c77('0x17')][a0_0x4c77('0x5a')][a0_0x4c77('0x92')](a0_0x4c77('0x93'),_0x115229[a0_0x4c77('0x23')])[a0_0x4c77('0x92')]('\x5cs',a0_0x4c77('0x39'))+a0_0x4c77('0x52');}_0x3a4d19=_0x3a4d19['replace'](/\{\$name\}/gi,name),_0x3a4d19=_0x3a4d19['replace'](/\{\$icon\}/gi,function(){return AXY_Toast[a0_0x4c77('0x3c')](_0x23eb80['iconIndex']);}[a0_0x4c77('0x19')](this));}else _0x3a4d19=(_0x24a076>0x0?AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x72')]:AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x7c')])+Math['abs'](_0x24a076)+'个'+name;if(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['DisplayGainItem']){if(_0x24a076<0x0&&(!AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['DisplayLoseItem']||_0x23eb80[a0_0x4c77('0x7b')][a0_0x4c77('0x7e')]==a0_0x4c77('0x29')))return;$[a0_0x4c77('0x44')]({'message':_0x3a4d19});}});AXY[a0_0x4c77('0x26')]['Param'][a0_0x4c77('0x96')]&&(AXY['Toast']['changeExp']=Game_Actor[a0_0x4c77('0x79')][a0_0x4c77('0x11')],Game_Actor[a0_0x4c77('0x79')][a0_0x4c77('0x11')]=function(_0x335f99,_0x1f023b){var _0x39262a=this[a0_0x4c77('0x8')][this['_classId']];AXY[a0_0x4c77('0x26')][a0_0x4c77('0x11')][a0_0x4c77('0x18')](this,_0x335f99,_0x1f023b);var _0x40fdd9=_0x335f99-_0x39262a;if(_0x40fdd9==0x0)return;$[a0_0x4c77('0x44')]({'message':(_0x40fdd9>0x0?AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x72')]:AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x7c')])+Math[a0_0x4c77('0x80')](_0x40fdd9)+TextManager['expA']});;});AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x2b')]&&(Game_Actor[a0_0x4c77('0x79')][a0_0x4c77('0xa4')]=function(_0x459811){var _0x57484b=TextManager[a0_0x4c77('0x91')][a0_0x4c77('0x6b')](this[a0_0x4c77('0x7f')],TextManager['level'],this[a0_0x4c77('0xe')]);$['toaster']({'message':_0x57484b}),_0x459811['forEach'](function(_0x42e4d8){$['toaster']({'message':TextManager[a0_0x4c77('0x55')][a0_0x4c77('0x6b')](_0x42e4d8['name'])});});});AXY[a0_0x4c77('0x26')]['Param']['DisplayLevelDown']&&(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x6f')]=Game_Actor[a0_0x4c77('0x79')][a0_0x4c77('0x6f')],Game_Actor[a0_0x4c77('0x79')]['levelDown']=function(){AXY[a0_0x4c77('0x26')][a0_0x4c77('0x6f')][a0_0x4c77('0x18')](this);var _0x217164=TextManager['levelUp'][a0_0x4c77('0x6b')](this['_name'],TextManager[a0_0x4c77('0x3f')],this['_level']);$[a0_0x4c77('0x44')]({'message':_0x217164});});AXY[a0_0x4c77('0x26')][a0_0x4c77('0x1f')]=Game_Actor[a0_0x4c77('0x79')]['changeEquip'],Game_Actor['prototype']['changeEquip']=function(_0x4c3d0b,_0x42a0b7){AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x4f')]?(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x4f')]=![],AXY[a0_0x4c77('0x26')][a0_0x4c77('0x1f')][a0_0x4c77('0x18')](this,_0x4c3d0b,_0x42a0b7),AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x4f')]=!![]):AXY[a0_0x4c77('0x26')][a0_0x4c77('0x1f')]['call'](this,_0x4c3d0b,_0x42a0b7);},AXY['Toast'][a0_0x4c77('0x36')]=Game_Actor[a0_0x4c77('0x79')][a0_0x4c77('0x9b')],Game_Actor[a0_0x4c77('0x79')]['forceChangeEquip']=function(_0x48f27c,_0x562ed7){AXY[a0_0x4c77('0x26')]['Param']['DisplayGainItem']?(AXY['Toast'][a0_0x4c77('0x17')][a0_0x4c77('0x4f')]=![],AXY[a0_0x4c77('0x26')]['oldForceChangeEquip_method'][a0_0x4c77('0x18')](this,_0x48f27c,_0x562ed7),AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x4f')]=!![]):AXY[a0_0x4c77('0x26')][a0_0x4c77('0x36')][a0_0x4c77('0x18')](this,_0x48f27c,_0x562ed7);},AXY[a0_0x4c77('0x26')][a0_0x4c77('0x5d')]=Game_Actor[a0_0x4c77('0x79')][a0_0x4c77('0x33')],Game_Actor[a0_0x4c77('0x79')][a0_0x4c77('0x33')]=function(_0x214418,_0xd2707b){if(AXY[a0_0x4c77('0x26')]['Param'][a0_0x4c77('0x4f')]){AXY['Toast'][a0_0x4c77('0x17')]['DisplayGainItem']=![];var _0x5c158e=AXY['Toast'][a0_0x4c77('0x5d')][a0_0x4c77('0x18')](this,_0x214418,_0xd2707b);AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x4f')]=!![];}else var _0x5c158e=AXY[a0_0x4c77('0x26')]['oldTradewithParty_method'][a0_0x4c77('0x18')](this,_0x214418,_0xd2707b);return _0x5c158e;};Imported[a0_0x4c77('0x8e')]===!![]&&(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x9e')]=Game_Actor['prototype'][a0_0x4c77('0x53')],Game_Actor[a0_0x4c77('0x79')][a0_0x4c77('0x53')]=function(_0x3a5581){AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x4f')]?(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')]['DisplayGainItem']=![],AXY[a0_0x4c77('0x26')]['oldInitIndepenEquips_method'][a0_0x4c77('0x18')](this,_0x3a5581),AXY[a0_0x4c77('0x26')]['Param']['DisplayGainItem']=!![]):AXY[a0_0x4c77('0x26')][a0_0x4c77('0x9e')][a0_0x4c77('0x18')](this,_0x3a5581);},AXY[a0_0x4c77('0x26')]['oldChangeEquipById_method']=Game_Actor[a0_0x4c77('0x79')][a0_0x4c77('0x97')],Game_Actor[a0_0x4c77('0x79')][a0_0x4c77('0x97')]=function(_0x4c7199,_0x155750){AXY['Toast']['Param']['DisplayGainItem']?(AXY['Toast'][a0_0x4c77('0x17')]['DisplayGainItem']=![],AXY[a0_0x4c77('0x26')][a0_0x4c77('0x59')]['call'](this,_0x4c7199,_0x155750),AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x4f')]=!![]):AXY[a0_0x4c77('0x26')]['oldChangeEquipById_method'][a0_0x4c77('0x18')](this,_0x4c7199,_0x155750);});if(AXY['Toast']['Param']['DisplayMapInfo']){var _alias_axy_toast_sprmap_createUpperLayer=Spriteset_Map[a0_0x4c77('0x79')][a0_0x4c77('0xae')];Spriteset_Map['prototype'][a0_0x4c77('0xae')]=function(){_alias_axy_toast_sprmap_createUpperLayer[a0_0x4c77('0x18')](this);AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x88')]&&$gameMap[a0_0x4c77('0x9a')]();if(AXY[a0_0x4c77('0x26')][a0_0x4c77('0x17')][a0_0x4c77('0x7')]){var _0x43acd2='';_0x43acd2=AXY[a0_0x4c77('0x26')]['Param'][a0_0x4c77('0xb2')],_0x43acd2=_0x43acd2[a0_0x4c77('0x92')](/\{\$mapDisplayName\}/g,$gameMap[a0_0x4c77('0x1b')]()),_0x43acd2=_0x43acd2[a0_0x4c77('0x92')](/\{\$mapName\}/g,$dataMapInfos[$gameMap['_mapId']][a0_0x4c77('0x23')]),_0x43acd2=_0x43acd2[a0_0x4c77('0x92')](/\{\$mapID\}/g,$gameMap['_mapId']),_0x43acd2=_0x43acd2[a0_0x4c77('0x92')](/\{\$mapOrder\}/g,$dataMapInfos[$gameMap[a0_0x4c77('0xa7')]][a0_0x4c77('0x78')]),_0x43acd2=_0x43acd2[a0_0x4c77('0x92')](/\{\$mapParentName\}/g,$dataMapInfos[$gameMap[a0_0x4c77('0xa7')]]['parentId']?$dataMapInfos[$dataMapInfos[$gameMap[a0_0x4c77('0xa7')]][a0_0x4c77('0x7d')]]['name']:''),_0x43acd2=_0x43acd2['replace'](/\{\$mapParentID\}/g,$dataMapInfos[$gameMap[a0_0x4c77('0xa7')]][a0_0x4c77('0x7d')]),_0x43acd2=_0x43acd2[a0_0x4c77('0x92')](/\{\$mapBGM\}/g,$dataMap['bgm'][a0_0x4c77('0x23')]),_0x43acd2=_0x43acd2[a0_0x4c77('0x92')](/\{\$mapBGS\}/g,$dataMap[a0_0x4c77('0x1')][a0_0x4c77('0x23')]),$[a0_0x4c77('0x44')]({'msg':_0x43acd2});}};}}