//=============================================================================
// A XueYu Plugin - Text
// AXY_Text.js
//=============================================================================

var Imported = Imported || {};
Imported.AXY_Text = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Text = AXY.Text || {};
AXY.Text.TAG = "AXY_Text";

//=============================================================================
/*:
 * @plugindesc v1.03 This plugin show Text.
 * @author A XueYu Plugins
 * @url https://666rpg.com/
 * 
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin support rmmv show Text.
 * Easy to use and powerful.
 * 
 * Important:
 * Use "''" outerside your string and "" outerside your expression and with + to link them!
 * 
 * Example:
 * show:
 * AXY_Text.show({msg:"'hi, world'"});
 * AXY_Text.show({msg:"'hi, world' + ($gameVariables.value(1)+Graphics.height/2)"});
 * AXY_Text.show({msg:"'hi, world'",id:2});
 * AXY_Text.show({id:3,msg:"'hi, world'",delay:3000});
 * AXY_Text.show({x:0, y:0, align:'topleft', msg:"'hi, world'"});
 * AXY_Text.show({x:0, y:0, align:'center', msg:"'hi, world'"});
 * all args with default:
 * AXY_Text.show({x:'window.innerWidth/2', y:'window.innerHeight/2', align:'center', msg:"'hi, world'",id:1,delay:0,width:'auto',height:'auto',opacity:1,textalign:'center',backgroundcolor:'rgba(0,0,0,0)',color:'white',padding:'0px',fontfamily:"$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'",fontsize:'20',textshadowcolor:'black',textshadowwidth:'1'});
 * remove with id:
 * AXY_Text.remove(1);
 * AXY_Text.remove(2);
 * remove all:
 * AXY_Text.removeall();
 *
 * changelog
 * 1.04 2020.11.16
 * modify: change param fontfamily from $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont' to AXY.Core.GameFont;
 * 1.03 2020.11.10
 * add: RMMZ Compatible;
 * 1.02 2017.1.17
 * fix position issus on topleft align;
 * fix textshadow issus on topleft align;
 * 1.01 2017.1.5
 * add custom font-family, text-shadow and font-size.
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 *
 * @param Anchor
 * @desc The text Anchor point. topleft/center
 * @default center
 *
 * @param X
 * @desc The x position of text. this is a eval param, so you can use Variables.
 * @default window.innerWidth/2
 *
 * @param Y
 * @desc The y position of text. this is a eval param, so you can use Variables.
 * @default window.innerHeight/2
 *
 * @param Width
 * @desc The text box width with auto, % percent or px.
 * @default auto
 *
 * @param Height
 * @desc The text box height with auto, % percent or px.
 * @default auto
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
 * @desc The text life time. set to 0 to disable. unit is microseconds.
 * @default 0
 *
 * @param textalign
 * @desc The Text align. left/center/right
 * @default center
 *
 * @param backgroundcolor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default rgba(0,0,0,0)
 *
 * @param color
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default white
 *
 * @param padding
 * @desc The css padding.
 * @default 0
 *
 * @param fontfamily
 * @desc The Text font family. this is a eval param, so you can use Variables.
 * @default $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
 *
 * @param fontsize
 * @desc The Text font size.
 * @default 20
 *
 * @param TextShadowColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default rgba(0,0,0,1)
 *
 * @param TextShadowWidth
 * @desc Text Shadow Width.
 * @default 1
 * 
 */
//================================================================================================//
var a0_0x55b9=['Param','delay','<font\x20color=\x22yellow\x22><b>',';text-align:','textalign','body','AXY_Text','toLowerCase','px\x200,',';width:','Anchor','color','align','TAG','chrome','padding','*filter','stop','append',';background-color:','forEach','<style>#AXY_ErrorInfo{text-align:\x20center;\x20text-shadow:\x20rgb(0,\x200,\x200)\x201px\x201px\x203px;\x20font-size:\x2020px;\x20z-index:\x2099;\x20position:\x20absolute;\x20margin:\x20auto;\x20top:\x200px;\x20left:\x200px;\x20right:\x200px;\x20bottom:\x200px;\x20width:\x20100%;\x20height:\x2040px;}</style>','opacity','Text','#AXYText','clientWidth','textshadowcolor','parameters','innerHTML','AXY_ErrorInfo','fontfamily','\x200\x20','textshadowwidth','px\x200\x200,','clientHeight',';color:','text-shadow','fontsize','color:\x20black;\x20font-weight:\x20bold;','backgroundcolor','font-family','</b></font><font\x20color=\x22white\x22>','div',';font-family:',',\x20strength=','msg','appendChild','</div>','height','Need\x20AXY_Core.js\x20Imported\x20before!',';height:','</font><br>','-webkit-text-shadow','\x200\x20-','log','keys',';line-height:','\x22\x20class=\x22AXYText\x22\x20style=\x22visibility:hidden;position:fixed;left:0px;top:0px;z-index:','console','width','indexOf','<div\x20id=\x22AXYText','.AXYText','px;\x22>','Height','auto','TextShadowWidth','getElementById','Parameters','normal','px\x200','<font\x20color=\x22yellow\x22><b>Plugin\x20Dependence\x20Detection</b></font><br>','px;opacity:','visible','userAgent','animate','recursiveParse','css','remove','-moz-text-shadow'];(function(_0x982e0f,_0x55b9f1){var _0x2007f4=function(_0x394c10){while(--_0x394c10){_0x982e0f['push'](_0x982e0f['shift']());}};_0x2007f4(++_0x55b9f1);}(a0_0x55b9,0x8b));var a0_0x2007=function(_0x982e0f,_0x55b9f1){_0x982e0f=_0x982e0f-0x0;var _0x2007f4=a0_0x55b9[_0x982e0f];return _0x2007f4;};var isDependenceReady=![];if(Imported['AXY_Core'])isDependenceReady=!![];else{isDependenceReady=![];const tag=AXY[a0_0x2007('0x2c')][a0_0x2007('0x22')],str=a0_0x2007('0x46');if(navigator['userAgent'][a0_0x2007('0x1c')]()[a0_0x2007('0x1')](a0_0x2007('0x23'))>-0x1||navigator[a0_0x2007('0xf')][a0_0x2007('0x1c')]()[a0_0x2007('0x1')]('firefox')>-0x1)console[a0_0x2007('0x4b')]('%c'+tag+':\x20'+'%c'+str,a0_0x2007('0x3b'),'color:\x20red;');else window[a0_0x2007('0x4f')]&&window[a0_0x2007('0x4f')]['log'](str);const errdivstrtitle=a0_0x2007('0xc'),errdivstr=a0_0x2007('0x17')+tag+':\x20'+a0_0x2007('0x3e')+str+a0_0x2007('0x48'),errdivstyle=a0_0x2007('0x2a');if(document['getElementById']('AXY_ErrorInfo'))document[a0_0x2007('0x8')](a0_0x2007('0x32'))['innerHTML']+=errdivstr;else{var errdiv=document['createElement'](a0_0x2007('0x3f'));errdiv['id']='AXY_ErrorInfo',errdiv[a0_0x2007('0x31')]=errdivstyle+errdivstrtitle+errdivstr,document['body'][a0_0x2007('0x43')](errdiv);}}isDependenceReady&&(AXY[a0_0x2007('0x2c')]['Parameters']=PluginManager[a0_0x2007('0x30')](a0_0x2007('0x1b')),AXY[a0_0x2007('0x2c')]['Param']=AXY['Text'][a0_0x2007('0x15')]||{},Object[a0_0x2007('0x4c')](AXY['Text'][a0_0x2007('0x9')])[a0_0x2007('0x29')](function(_0x52b79d){return AXY[a0_0x2007('0x2c')][a0_0x2007('0x15')][_0x52b79d]=Utils[a0_0x2007('0x11')](AXY[a0_0x2007('0x2c')][a0_0x2007('0x9')][_0x52b79d]);}),AXY_Text={'show':function(){var _0x194150=arguments[0x0]?arguments[0x0]:{},_0xd4bbf3=_0x194150[a0_0x2007('0x42')]?eval(String(_0x194150[a0_0x2007('0x42')])):'',_0x4aca7c=_0x194150[a0_0x2007('0x16')]?_0x194150[a0_0x2007('0x16')]:AXY[a0_0x2007('0x2c')][a0_0x2007('0x15')][a0_0x2007('0x16')],_0x1a0cbb=_0x194150['id']?_0x194150['id']:0x1,_0x17991e=_0x194150['x']!=undefined?eval(_0x194150['x']):eval(AXY[a0_0x2007('0x2c')][a0_0x2007('0x15')]['X']),_0x4776cc=_0x194150['y']!=undefined?eval(_0x194150['y']):eval(AXY[a0_0x2007('0x2c')][a0_0x2007('0x15')]['Y']),_0x3fbb26=_0x194150[a0_0x2007('0x0')]?_0x194150[a0_0x2007('0x0')]:AXY['Text'][a0_0x2007('0x15')]['Width'],_0x4c9d0f=_0x194150['height']?_0x194150[a0_0x2007('0x45')]:AXY[a0_0x2007('0x2c')][a0_0x2007('0x15')][a0_0x2007('0x5')],_0x4328a4=_0x194150[a0_0x2007('0x2b')]?_0x194150[a0_0x2007('0x2b')]:AXY['Text'][a0_0x2007('0x15')][a0_0x2007('0x2b')],_0xf51436=_0x194150[a0_0x2007('0x21')]?_0x194150[a0_0x2007('0x21')]:AXY[a0_0x2007('0x2c')][a0_0x2007('0x15')][a0_0x2007('0x1f')],_0x3ab104=_0x194150[a0_0x2007('0x19')]?_0x194150[a0_0x2007('0x19')]:String(AXY[a0_0x2007('0x2c')][a0_0x2007('0x9')][a0_0x2007('0x19')]),_0x56aa4c=_0x194150[a0_0x2007('0x3c')]?_0x194150[a0_0x2007('0x3c')]:String(AXY[a0_0x2007('0x2c')][a0_0x2007('0x9')][a0_0x2007('0x3c')]),_0x427bb9=_0x194150[a0_0x2007('0x20')]?_0x194150[a0_0x2007('0x20')]:String(AXY[a0_0x2007('0x2c')][a0_0x2007('0x9')]['color']),_0x52c7fd=_0x194150[a0_0x2007('0x24')]?_0x194150['padding']:String(AXY[a0_0x2007('0x2c')][a0_0x2007('0x9')][a0_0x2007('0x24')]);;var _0x27be05=_0x194150[a0_0x2007('0x33')]?eval(_0x194150[a0_0x2007('0x33')]):eval(String(AXY[a0_0x2007('0x2c')][a0_0x2007('0x9')]['fontfamily'])),_0x1c728b=_0x194150[a0_0x2007('0x3a')]?_0x194150[a0_0x2007('0x3a')]:String(AXY['Text'][a0_0x2007('0x9')][a0_0x2007('0x3a')]),_0x17df6f=_0x194150['textshadowcolor']?_0x194150[a0_0x2007('0x2f')]:String(AXY[a0_0x2007('0x2c')][a0_0x2007('0x9')]['TextShadowColor']),_0x43fc59=_0x194150[a0_0x2007('0x35')]?_0x194150[a0_0x2007('0x35')]:String(AXY[a0_0x2007('0x2c')][a0_0x2007('0x9')][a0_0x2007('0x7')]),_0x5c20b8,_0x417f79=a0_0x2007('0x2')+_0x1a0cbb+a0_0x2007('0x4e')+AXY[a0_0x2007('0x2c')][a0_0x2007('0x15')]['zIndex']+a0_0x2007('0x1e')+_0x3fbb26+a0_0x2007('0x47')+_0x4c9d0f+a0_0x2007('0x4d')+_0x4c9d0f+a0_0x2007('0x18')+_0x3ab104+a0_0x2007('0x28')+_0x56aa4c+a0_0x2007('0x38')+_0x427bb9+';padding:'+_0x52c7fd+a0_0x2007('0xd')+_0x4328a4+a0_0x2007('0x40')+_0x27be05+';font-size:'+_0x1c728b+a0_0x2007('0x4')+_0xd4bbf3+a0_0x2007('0x44');_0x5c20b8=$(a0_0x2007('0x1a'))[a0_0x2007('0x27')](_0x417f79);if(_0xf51436=='center'){if(_0x3fbb26[a0_0x2007('0x1')]('px')!=-0x1)var _0xe3552d=_0x3fbb26,_0x53dfc0=parseFloat(_0x3fbb26);else{if(_0x3fbb26==a0_0x2007('0x6'))var _0x53dfc0=$(a0_0x2007('0x2d')+_0x1a0cbb+'')[0x0]['clientWidth'],_0xe3552d='';else var _0x53dfc0=$('#AXYText'+_0x1a0cbb+'')[0x0][a0_0x2007('0x2e')]*parseFloat(_0x3fbb26)/0x64,_0xe3552d=_0x53dfc0+'px';}if(_0x4c9d0f[a0_0x2007('0x1')]('px')!=-0x1)var _0x1e22fc=_0x4c9d0f,_0x2bf5d8=parseFloat(_0x4c9d0f);else{if(_0x4c9d0f=='auto')var _0x2bf5d8=$('#AXYText'+_0x1a0cbb+'')[0x0][a0_0x2007('0x37')],_0x1e22fc='';else var _0x2bf5d8=$('#AXYText'+_0x1a0cbb+'')[0x0]['clientHeight']*parseFloat(_0x4c9d0f)/0x64,_0x1e22fc=_0x2bf5d8+'px';}var _0x8570e7=_0x53dfc0/0x2,_0x33225c=_0x2bf5d8/0x2,_0x3686a6=_0x17991e-_0x8570e7,_0x58ce0b=_0x4776cc-_0x33225c;$(a0_0x2007('0x2d')+_0x1a0cbb+'')[a0_0x2007('0x12')]({'width':_0xe3552d,'height':_0x1e22fc,'line-height':_0x1e22fc}),$(a0_0x2007('0x2d')+_0x1a0cbb)['css']({'left':_0x3686a6+'px','top':_0x58ce0b+'px','visibility':a0_0x2007('0xe')});}else $('#AXYText'+_0x1a0cbb)[a0_0x2007('0x12')]({'left':_0x17991e+'px','top':_0x4776cc+'px','visibility':a0_0x2007('0xe')});$(a0_0x2007('0x2d')+_0x1a0cbb)[a0_0x2007('0x12')](a0_0x2007('0x3d'),_0x27be05),$(a0_0x2007('0x2d')+_0x1a0cbb)['css'](a0_0x2007('0x39'),_0x17df6f+'\x20'+_0x43fc59+'px\x200\x200,'+_0x17df6f+a0_0x2007('0x34')+_0x43fc59+a0_0x2007('0x1d')+_0x17df6f+'\x20-'+_0x43fc59+'px\x200\x200,'+_0x17df6f+'\x200\x20-'+_0x43fc59+a0_0x2007('0xb')),$('#AXYText'+_0x1a0cbb)['css'](a0_0x2007('0x49'),_0x17df6f+'\x20'+_0x43fc59+'px\x200\x200,'+_0x17df6f+a0_0x2007('0x34')+_0x43fc59+a0_0x2007('0x1d')+_0x17df6f+'\x20-'+_0x43fc59+a0_0x2007('0x36')+_0x17df6f+a0_0x2007('0x4a')+_0x43fc59+a0_0x2007('0xb')),$(a0_0x2007('0x2d')+_0x1a0cbb)[a0_0x2007('0x12')](a0_0x2007('0x14'),_0x17df6f+'\x20'+_0x43fc59+a0_0x2007('0x36')+_0x17df6f+a0_0x2007('0x34')+_0x43fc59+'px\x200,'+_0x17df6f+'\x20-'+_0x43fc59+'px\x200\x200,'+_0x17df6f+a0_0x2007('0x4a')+_0x43fc59+a0_0x2007('0xb')),$(a0_0x2007('0x2d')+_0x1a0cbb)[a0_0x2007('0x12')](a0_0x2007('0x25'),'Glow(color='+_0x17df6f+a0_0x2007('0x41')+_0x43fc59+')'),_0x4aca7c>=0x1&&setTimeout(function(){$(a0_0x2007('0x2d')+_0x1a0cbb)[a0_0x2007('0x13')]();},_0x4aca7c);},'remove':function(){var _0x1fdad7=arguments[0x0]?arguments[0x0]:0x1;$(a0_0x2007('0x2d')+_0x1fdad7)[a0_0x2007('0x26')]()[a0_0x2007('0x10')]({'width':'0','height':'0'},'normal',function(){$(this)[a0_0x2007('0x13')]();});},'removeall':function(){$(a0_0x2007('0x3'))[a0_0x2007('0x26')]()['animate']({'width':'0','height':'0'},a0_0x2007('0xa'),function(){$(this)[a0_0x2007('0x13')]();});}});