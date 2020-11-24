//=============================================================================
// A XueYu Plugin - Title Version
// AXY_TitleVersion.js
//=============================================================================

var Imported = Imported || {};
Imported.AXY_TitleVersion = true;

var AXY = AXY || {};
AXY.TitleVersion = AXY.TitleVersion || {};
AXY.TitleVersion.TAG = "AXY_TitleVersion";

//=============================================================================
/*:
 * @plugindesc v1.03 Display Version or Multiple lines of text in Title Screen.
 * @author A XueYu Plugins
 * @url https://666rpg.com/
 * 
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin allows you to place a "version" or Multiple lines of text 
 * to your home page at the title screen.
 * 
 * changelog
 * 1.03 2020.11.10
 * add: RMMZ Compatible;
 * add: eval on TextContent1,2,3;
 * fix: eval crash;
 * 1.02 2019.12.15
 * fix: eval incompatiable with |;
 * 1.01 2019.9.26
 * add eval on text4, so formulas are allowed.
 * change xy to axy;
 * 1.0 2016.12.10
 * first release.
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 *
 * @param DisplayVersion1
 * @desc Display version text from bottom to top? true/false
 * @default true
 *
 * @param FontSize1
 * @desc 
 * @default 16
 *
 * @param X1
 * @desc Offset Position for align left/center/right
 * @default -4
 *
 * @param Y1
 * @desc Screen's Y Position.
 * @default 624
 *
 * @param LineSpacing1
 * @desc 
 * @default 4
 *
 * @param Align1
 * @desc left/center/right
 * @default right
 *
 * @param OutlineColor1
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #000000
 *
 * @param OutlineWidth1
 * @desc
 * @default 3
 *
 * @param TextColor1
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #FFFFFF
 *
 * @param TextContent1
 * @desc break new line with '|', Formulas are allowed.
 * @default by AXY Plugins 2016 1|Ver 1.0
 *
 * @param DisplayVersion2
 * @desc Display version text from top to bottom? true/false
 * @default true
 *
 * @param FontSize2
 * @desc
 * @default 24
 *
 * @param X2
 * @desc Offset Position for align left/center/right
 * @default 8
 *
 * @param Y2
 * @desc Screen's Position
 * @default 8
 *
 * @param LineSpacing2
 * @desc 
 * @default 8
 *
 * @param Align2
 * @desc left/center/right
 * @default left
 *
 * @param OutlineColor2
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #000000
 *
 * @param OutlineWidth2
 * @desc
 * @default 3
 *
 * @param TextColor2
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #FFFFFF
 *
 * @param TextContent2
 * @desc break new line with '|', Formulas are allowed.
 * @default AXY Plugins 2016 2
 *
 * @param DisplayVersion3
 * @desc Display version text from top to bottom? true/false
 * @default true
 *
 * @param FontSize3
 * @desc
 * @default 48
 *
 * @param X3
 * @desc Offset Position for align left/center/right
 * @default 0
 *
 * @param Y3
 * @desc Screen's Position
 * @default 200
 *
 * @param LineSpacing3
 * @desc 
 * @default 8
 *
 * @param Align3
 * @desc left/center/right
 * @default center
 *
 * @param OutlineColor3
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default yellow
 *
 * @param OutlineWidth3
 * @desc
 * @default 3
 *
 * @param TextColor3
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default blue
 *
 * @param TextContent3
 * @desc break new line with '|', Formulas are allowed.
 * @default AXY Plugins 2016 3
 *
 * @param DisplayVersion4
 * @desc Display version text from top to bottom? true/false
 * @default true
 *
 * @param FontSize4
 * @desc
 * @default 16
 *
 * @param X4
 * @desc Offset Position for align left/center/right
 * @default 0
 *
 * @param Y4
 * @desc Screen's Position
 * @default 0
 *
 * @param LineSpacing4
 * @desc 
 * @default 0
 *
 * @param Align4
 * @desc left/center/right
 * @default right
 *
 * @param OutlineColor4
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #000000
 *
 * @param OutlineWidth4
 * @desc
 * @default 3
 *
 * @param TextColor4
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default #FFFFFF
 *
 * @param TextContent4
 * @desc break new line with '|', Formulas are allowed.
 * @default AXY Plugins 2016 4
 * 
 */
//================================================================================================//
var a0_0x23fa=['Param','TextColor1','div','TitleVersion','TextContent4','TextContent3','OutlineWidth4','console','call','OutlineColor4','FontSize2','outlineWidth','TextContent2','prototype','firefox','LineSpacing4','FontSize3','log','outlineColor','split','Parameters','keys','forEach','height','fontSize','addChild','drawText','width','Alias','Align1','<style>#AXY_ErrorInfo{text-align:\x20center;\x20text-shadow:\x20rgb(0,\x200,\x200)\x201px\x201px\x203px;\x20font-size:\x2020px;\x20z-index:\x2099;\x20position:\x20absolute;\x20margin:\x20auto;\x20top:\x200px;\x20left:\x200px;\x20right:\x200px;\x20bottom:\x200px;\x20width:\x20100%;\x20height:\x2040px;}</style>','indexOf','color:\x20red;','innerHTML','Scene_Title_Display_Version','TextContent1','createForeground','recursiveParse','LineSpacing3','OutlineColor2','TAG','OutlineWidth1','<font\x20color=\x22yellow\x22><b>','_titleVersionSprite','FontSize1','DisplayVersion1','DisplayVersion2','FontSize4','AXY_ErrorInfo','</b></font><font\x20color=\x22white\x22>','color:\x20black;\x20font-weight:\x20bold;','toLowerCase','chrome','</font><br>','Align4','DisplayVersion4','textColor','bitmap','Align2','body','Align3','OutlineWidth2','getElementById','OutlineColor1'];(function(_0x2e4121,_0x23fa8a){var _0x2d6cb2=function(_0x3687ea){while(--_0x3687ea){_0x2e4121['push'](_0x2e4121['shift']());}};_0x2d6cb2(++_0x23fa8a);}(a0_0x23fa,0x126));var a0_0x2d6c=function(_0x2e4121,_0x23fa8a){_0x2e4121=_0x2e4121-0x0;var _0x2d6cb2=a0_0x23fa[_0x2e4121];return _0x2d6cb2;};var isDependenceReady=![];if(Imported['AXY_Core'])isDependenceReady=!![];else{isDependenceReady=![];const tag=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x2')],str='Need\x20AXY_Core.js\x20Imported\x20before!';if(navigator['userAgent'][a0_0x2d6c('0xd')]()['indexOf'](a0_0x2d6c('0xe'))>-0x1||navigator['userAgent'][a0_0x2d6c('0xd')]()[a0_0x2d6c('0x39')](a0_0x2d6c('0x28'))>-0x1)console[a0_0x2d6c('0x2b')]('%c'+tag+':\x20'+'%c'+str,a0_0x2d6c('0xc'),a0_0x2d6c('0x3a'));else window[a0_0x2d6c('0x21')]&&window[a0_0x2d6c('0x21')][a0_0x2d6c('0x2b')](str);const errdivstrtitle='<font\x20color=\x22yellow\x22><b>Plugin\x20Dependence\x20Detection</b></font><br>',errdivstr=a0_0x2d6c('0x4')+tag+':\x20'+a0_0x2d6c('0xb')+str+a0_0x2d6c('0xf'),errdivstyle=a0_0x2d6c('0x38');if(document[a0_0x2d6c('0x18')](a0_0x2d6c('0xa')))document[a0_0x2d6c('0x18')](a0_0x2d6c('0xa'))[a0_0x2d6c('0x3b')]+=errdivstr;else{var errdiv=document['createElement'](a0_0x2d6c('0x1c'));errdiv['id']=a0_0x2d6c('0xa'),errdiv['innerHTML']=errdivstyle+errdivstrtitle+errdivstr,document[a0_0x2d6c('0x15')]['appendChild'](errdiv);}}isDependenceReady&&(AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x2e')]=PluginManager['parameters']('AXY_TitleVersion'),AXY['TitleVersion'][a0_0x2d6c('0x1a')]=AXY['TitleVersion'][a0_0x2d6c('0x1a')]||{},AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x36')]=AXY[a0_0x2d6c('0x1d')]['Alias']||{},Object[a0_0x2d6c('0x2f')](AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x2e')])[a0_0x2d6c('0x30')](function(_0x36ad85){return AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][_0x36ad85]=Utils[a0_0x2d6c('0x3f')](AXY[a0_0x2d6c('0x1d')]['Parameters'][_0x36ad85]);}),AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x36')][a0_0x2d6c('0x3c')]=Scene_Title[a0_0x2d6c('0x27')][a0_0x2d6c('0x3e')],Scene_Title['prototype']['createForeground']=function(){AXY['TitleVersion'][a0_0x2d6c('0x36')][a0_0x2d6c('0x3c')][a0_0x2d6c('0x22')](this),this[a0_0x2d6c('0x5')]=new Sprite(new Bitmap(Graphics['width'],Graphics[a0_0x2d6c('0x31')])),this[a0_0x2d6c('0x33')](this[a0_0x2d6c('0x5')]);if(AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x7')]&&AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['TextContent1']!==undefined){this['_titleVersionSprite']['bitmap'][a0_0x2d6c('0x2c')]=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x19')],this[a0_0x2d6c('0x5')][a0_0x2d6c('0x13')][a0_0x2d6c('0x25')]=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x3')],this['_titleVersionSprite'][a0_0x2d6c('0x13')][a0_0x2d6c('0x32')]=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x6')],this[a0_0x2d6c('0x5')][a0_0x2d6c('0x13')][a0_0x2d6c('0x12')]=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x1b')];var _0x41add2=AXY['TitleVersion'][a0_0x2d6c('0x1a')]['Y1'];try{var _0x5e0612=eval(AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['TextContent1'])[a0_0x2d6c('0x2d')]('|');}catch(_0x25be63){var _0x5e0612=AXY['TitleVersion'][a0_0x2d6c('0x1a')][a0_0x2d6c('0x3d')]['split']('|');}_0x5e0612[a0_0x2d6c('0x30')](function(_0x1680f0){_0x41add2-=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['FontSize1']+AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['LineSpacing1'],this['_titleVersionSprite'][a0_0x2d6c('0x13')][a0_0x2d6c('0x34')](_0x1680f0,AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['X1'],_0x41add2,Graphics[a0_0x2d6c('0x35')],AXY[a0_0x2d6c('0x1d')]['Param']['FontSize1'],AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x37')]);},this);}if(AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x8')]&&AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x26')]!==undefined){this[a0_0x2d6c('0x5')]['bitmap'][a0_0x2d6c('0x2c')]=AXY[a0_0x2d6c('0x1d')]['Param'][a0_0x2d6c('0x1')],this[a0_0x2d6c('0x5')]['bitmap'][a0_0x2d6c('0x25')]=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x17')],this['_titleVersionSprite'][a0_0x2d6c('0x13')]['fontSize']=AXY[a0_0x2d6c('0x1d')]['Param']['FontSize2'],this[a0_0x2d6c('0x5')][a0_0x2d6c('0x13')]['textColor']=AXY['TitleVersion'][a0_0x2d6c('0x1a')]['TextColor2'];var _0x41add2=AXY['TitleVersion'][a0_0x2d6c('0x1a')]['Y2'];try{var _0x5e0612=eval(AXY['TitleVersion']['Param'][a0_0x2d6c('0x26')])['split']('|');}catch(_0x501916){var _0x5e0612=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['TextContent2'][a0_0x2d6c('0x2d')]('|');}_0x5e0612[a0_0x2d6c('0x30')](function(_0x16d673){this[a0_0x2d6c('0x5')]['bitmap']['drawText'](_0x16d673,AXY[a0_0x2d6c('0x1d')]['Param']['X2'],_0x41add2,Graphics[a0_0x2d6c('0x35')],AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x24')],AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x14')]),_0x41add2+=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x24')]+AXY['TitleVersion']['Param']['LineSpacing2'];},this);}if(AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['DisplayVersion3']&&AXY[a0_0x2d6c('0x1d')]['Param'][a0_0x2d6c('0x1f')]!==undefined){this[a0_0x2d6c('0x5')][a0_0x2d6c('0x13')]['outlineColor']=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['OutlineColor3'],this[a0_0x2d6c('0x5')][a0_0x2d6c('0x13')][a0_0x2d6c('0x25')]=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['OutlineWidth3'],this['_titleVersionSprite']['bitmap'][a0_0x2d6c('0x32')]=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x2a')],this[a0_0x2d6c('0x5')][a0_0x2d6c('0x13')]['textColor']=AXY[a0_0x2d6c('0x1d')]['Param']['TextColor3'];var _0x41add2=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['Y3'];try{var _0x5e0612=eval(AXY[a0_0x2d6c('0x1d')]['Param']['TextContent3'])[a0_0x2d6c('0x2d')]('|');}catch(_0x382deb){var _0x5e0612=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['TextContent3'][a0_0x2d6c('0x2d')]('|');}_0x5e0612[a0_0x2d6c('0x30')](function(_0x58972c){this[a0_0x2d6c('0x5')][a0_0x2d6c('0x13')][a0_0x2d6c('0x34')](_0x58972c,AXY[a0_0x2d6c('0x1d')]['Param']['X3'],_0x41add2,Graphics[a0_0x2d6c('0x35')],AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x2a')],AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x16')]),_0x41add2+=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x2a')]+AXY['TitleVersion'][a0_0x2d6c('0x1a')][a0_0x2d6c('0x0')];},this);}if(AXY[a0_0x2d6c('0x1d')]['Param'][a0_0x2d6c('0x11')]&&AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x1e')]!==undefined){this[a0_0x2d6c('0x5')][a0_0x2d6c('0x13')][a0_0x2d6c('0x2c')]=AXY['TitleVersion']['Param'][a0_0x2d6c('0x23')],this[a0_0x2d6c('0x5')]['bitmap'][a0_0x2d6c('0x25')]=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x20')],this['_titleVersionSprite'][a0_0x2d6c('0x13')][a0_0x2d6c('0x32')]=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x9')],this[a0_0x2d6c('0x5')][a0_0x2d6c('0x13')]['textColor']=AXY['TitleVersion']['Param']['TextColor4'];var _0x41add2=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['Y4'];try{var _0x5e0612=eval(AXY['TitleVersion'][a0_0x2d6c('0x1a')][a0_0x2d6c('0x1e')])[a0_0x2d6c('0x2d')]('|');}catch(_0x43ccde){var _0x5e0612=AXY['TitleVersion'][a0_0x2d6c('0x1a')]['TextContent4'][a0_0x2d6c('0x2d')]('|');}_0x5e0612[a0_0x2d6c('0x30')](function(_0x387786){this[a0_0x2d6c('0x5')][a0_0x2d6c('0x13')][a0_0x2d6c('0x34')](_0x387786,AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')]['X4'],_0x41add2,Graphics['width'],AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x9')],AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x10')]),_0x41add2+=AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x9')]+AXY[a0_0x2d6c('0x1d')][a0_0x2d6c('0x1a')][a0_0x2d6c('0x29')];},this);}});