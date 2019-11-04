//=============================================================================
// XueYu Plugins - Ajax Net Stuff
// AXY_AjaxNetStuff.js
// Version: 1.24
// License: MIT
//=============================================================================
 /*:
 * @plugindesc v1.24 This plugin support rmmv with ajax net stuff.
 * @author XueYu Plugins
 *
 *
 * @param URL
 * @desc The url of your ajax net stuff.
 * @default http://666rpg.com/zhongchou/product/id/20
 *
 * @param EnableTopList
 * @desc Enable TopList? true/false
 * @default true
 *
 * @param TopListHAlign
 * @desc The Horizontal align of TopList box. left/right
 * @default right
 *
 * @param TopListVAlign
 * @desc The Vertical align of TopList box. top/bottom
 * @default top
 *
 * @param X
 * @desc The x position of TopList box.
 * @default 0
 *
 * @param Y
 * @desc The y position of TopList box.
 * @default 0
 *
 * @param Width
 * @desc The TopList box width.
 * @default 600
 *
 * @param Height
 * @desc The TopList box height.
 * @default 0
 *
 * @param backgroundcolor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default black
 *
 * @param opacity
 * @desc The css opacity. 0-1
 * @default 1
 *
 * @param TextColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default yellow
 *
 * @param TextAlign
 * @desc Button align. left/center/right
 * @default right
 *
 * @param fontsize
 * @desc The size of text.
 * @default 12
 *
 * @param zIndex
 * @desc The css zIndex.
 * @default 50000
 *
 * @param ImgWidth
 * @desc The TopList Img width.
 * @default 50
 *
 * @param ImgHeight
 * @desc The TopList Img Height.
 * @default 50
 *
 * @param ImgOpacity
 * @desc The css opacity of img. 0-1
 * @default 0.2
 *
 * @param LoginButtonText
 * @desc Login Button Text
 * @default Login
 *
 * @param LoginButtonColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default yellow
 *
 * @param LoginButtonOpacity
 * @desc The css opacity of login button. 0-1
 * @default 1
 *
 * @param LoginButtonFontSize
 * @desc The size of Login Button.
 * @default 16
 *
 * @param LoadingText
 * @desc Loading Text
 * @default Loading
 *
 * @param LastestText
 * @desc Lastest Text
 * @default Lastest
 *
 * @param ActorText
 * @desc Actor Text
 * @default Actor
 *
 * @param PlayerCEText
 * @desc Player Compat Effectiveness Text
 * @default CE
 *
 * @param PlayerCEFormula
 * @desc Player Compat Effectiveness Formula
 * @default a.agi+a.atk+a.cev+a.cnt+a.cri+a.def+a.eva+a.exr+a.fdr+a.grd+a.hit+a.hp*0.2+a.hrg+a.level+a.luk+a.mat+a.mcr+a.mdf+a.mdr+a.mev+a.mhp*0.2+a.mmp*0.2+a.mp*0.2+a.mrf+a.mrg+a.pdr+a.pha+a.rec+a.tcr+a.tgr+a.tp+a.trg
 *
 * @param TimeOLText
 * @desc Time Online Text
 * @default TimeOL
 *
 * @param LevelText
 * @desc Level Text
 * @default Level
 *
 * @param GoldText
 * @desc Gold Text
 * @default Gold
 *
 * @param StepsText
 * @desc Steps Text
 * @default Steps
 *
 * @param PlayTimeText
 * @desc Play Time Text
 * @default Play Time
 *
 * @param SaveTimesText
 * @desc Save Times Text
 * @default Save Times
 *
 * @param BattleTimesText
 * @desc Battle Times Text
 * @default Battle Times
 *
 * @param VictoryTimesText
 * @desc Victory Times Text
 * @default Victory Times
 *
 * @param EscapeTimesText
 * @desc Escape Times Text
 * @default Escape Times
 *
 * @param EnableCoupon
 * @desc Enable coupon? true/false
 * @default true
 *
 * @param CouponText
 * @desc Coupon Text
 * @default Coupon
 *
 * @param EnableVerCheck
 * @desc Enable VerCheck? true/false
 * @default true
 *
 * @param Version
 * @desc The game version.
 * @default 1.0
  *
 * @param VerCheckX
 * @desc The x position of VerCheck box.
 * @default 0
 *
 * @param VerCheckY
 * @desc The y position of VerCheck box.
 * @default 0
 *
 * @param VerCheckWidth
 * @desc The VerCheck box width with % percent or only number.
 * @default 100%
 *
 * @param VerCheckbackgroundcolor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default rgba(0,0,0,0.7);
 *
 * @param VerCheckopacity
 * @desc The css opacity. 0-1
 * @default 1
 *
 * @param VerCheckTextColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default white
 *
 * @param VerCheckTextAlign
 * @desc left/center/right
 * @default center
 *
 * @param VerCheckingText
 * @desc Ver Checking Text
 * @default Ver Checking
 *
 * @param NoNewText
 * @desc No New Text
 * @default No New
 *
 * @param HaveNewText
 * @desc Have New  Text
 * @default Have New: 
 *
 * @param LinkText
 * @desc Link Text
 * @default Link
 *
 * @param EnableLoginGift
 * @desc Enable Login Gift? true/false
 * @default true
 *
 * @param LoginGift
 * @desc format:'type:id:amount;'. type:gold=0,item=1,weapon=2,armor=3. for more detail check help.
 * @default 0:0:100;1:1:1;
 *
 * @param EnableCloudSave
 * @desc Enable Cloud Save? true/false
 * @default true
 *
 * @param CloudSaveText
 * @desc Cloud Save Text
 * @default Cloud Save
 *
 * @param EnableChat
 * @desc Enable Chat? true/false
 * @default true
 *
 * @param EnableDanmu
 * @desc Enable Danmu? true/false
 * @default true
 *
 * @param DanmuSpeed
 * @desc Danmu Speed? unit: ms
 * @default 5000
 *
 * @param DanmuInterval
 * @desc Danmu Interval? unit: ms
 * @default 1000
 *
 * @param EnableShopInGame
 * @desc Enable ShopInGame? true/false
 * @default true
 *
 * @param ShopInGameText
 * @desc ShopInGame Text
 * @default Shop In Game
 *
 * @param ShopInGameSoldOutText
 * @desc ShopInGame Sold Out Text
 * @default Sold Out
 *
 * @param ShopInGameColumn
 * @desc ShopInGame Column
 * @default 4
 *
 * @param LoginCommonEventId
 * @desc Do common event by this id when player logged in. Set 0 to disable.
 * @default 0
 *
 * @param EnableMenuButton
 * @desc Enable MenuButton? true/false
 * @default true
 *
 * @param MenuButtonPositionX
 * @desc Menu Button Position X?
 * @default 0
 *
 * @param MenuButtonPositionY
 * @desc Menu Button Position Y?
 * @default 400
 *
 * @param EnableAuctionInGame
 * @desc Enable AuctionInGame? true/false
 * @default true
 *
 * @param AuctionInGameText
 * @desc AuctionInGame Text
 * @default Auction In Game
 *
 * @param AuctionInGameSoldOutText
 * @desc AuctionInGame Sold Out Text
 * @default Sold Out
 *
 * @param AuctionInGameColumn
 * @desc AuctionInGame Column
 * @default 4
 *
 * @param PreventAndroidReturnKey
 * @desc Prevent Android Return Key? true/false
 * @default true
 *
 * @param AutoSaveAfterShopping
 * @desc The save file id that you want Auto Save After Shopping. Default:21
 * @default 21
 *
 * @help
 * Introduction
 * This plugin support rmmv with ajax net stuff.
 * Easy to use of you just copy your own url to here.
 * And then you will see it worked.
 * 
 * Example:
 * To open Coupon dialog,
 * AXY_AjaxCoupon.show();
 * To close Coupon dialog,
 * AXY_AjaxCoupon.hide();
 *
 * LoginGift
 * format:'type:id:amount;'. type:gold=0,item=1,weapon=2,armor=3.
 * example:
 * give 10 gold and 1 item1:'0:0:10;1:1:1;'
 * give 10 gold and 1 weapon1:'0:0:10;2:1:1;'
 *
 * changelog
 * 1.24 2019.7.7
 * fix some issus;
 * 1.23 2019.7.6
 * add AutoSaveAfterShopping
 * 1.22 2019.6.21
 * add alert about shopingame and version issus;
 * 1.21 2017.10.22
 * add prevent android return key;
 * add ce formula, now user can custom own ce calculation;
 * change the menu button function on in battle;
 * change chat notify both box and toast;
 * 1.20 2017.10.21
 * fix default api url;
 * 1.19 2017.10.4
 * optimization ce method;
 * optimization inline time method;
 * optimization shop in game display;
 * optimization top 10 list display name and level method;
 * add some net player staff;
 * 1.18 2017.10.2
 * change chat ui;
 * add auction in game(not complete);
 * 1.17 2017.10.2
 * add try catch on top10list, remove sid in jsonstr;
 * 1.16 2017.10.1
 * add ce/online time display;
 * 1.15 2017.9.1
 * add img button that can open the menu and process the cancle;
 * 1.14 2017.3.26
 * add do common event by id when player logged in;
 * 1.13 2017.2.6
 * fix shopInGame can not scroll on android;
 * 1.12 2017.2.4
 * close open browser when click login button on pc;
 * 1.11 2017.2.1
 * bind login button with click;
 * fix sometimes crash when danmu refresh;
 * fix maybe crash when click login button before game ready;
 * add reg button to open link with browser in game;
 * 1.10 2017.1.29
 * fix vercheck have new link can not click on android;
 * 1.09 2017.1.28
 * modify complate color to gray in coupon section;
 * 1.08 2017.1.25
 * fix some issus, add try catch;
 * 1.07 2017.1.25
 * fix danmu issus, send danmu on map after battle may display on battle and map;
 * limit danmu and chat length to 20;
 * add shop in game;
 * 1.06 2017.1.20
 * add coupon switch and text;
 * add coupon menu command;
 * 1.05 2017.1.19
 * add danmu system;
 * 1.04 2017.1.17
 * add chat system;
 * 1.03 2017.1.16
 * add cloud save;
 * fix android login and cloud save;
 * 1.02 2017.1.13
 * support login on android;
 * fix cannot open ime after close ime on coupon dialog;
 * fix login gift unlimited got;
 * 1.01 2017.1.8
 * fix ajax muilt post;
 * add trim input space and html tag on left/center/right;
 * add id to div;
 * 1.0 2016.12.27
 * first release.
 */

// Imported
var Imported = Imported || {};
Imported.AXY_AjaxNetStuff = true;

// Parameter Variables
var AXY = AXY || {};
AXY.AjaxNetStuff = AXY.AjaxNetStuff || {};

AXY.AjaxNetStuff.Parameters = PluginManager.parameters('AXY_AjaxNetStuff');
AXY.AjaxNetStuff.Param = AXY.AjaxNetStuff.Param || {};
AXY.AjaxNetStuff.Alias = AXY.AjaxNetStuff.Alias || {};

// 
AXY.AjaxNetStuff.Param.URL = String(AXY.AjaxNetStuff.Parameters['URL']);
AXY.AjaxNetStuff.Param.EnableTopList = AXY.AjaxNetStuff.Parameters['EnableTopList'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.X = parseInt(AXY.AjaxNetStuff.Parameters['X']);
AXY.AjaxNetStuff.Param.Y = parseInt(AXY.AjaxNetStuff.Parameters['Y']);
AXY.AjaxNetStuff.Param.Width = parseInt(AXY.AjaxNetStuff.Parameters['Width']);
AXY.AjaxNetStuff.Param.Height = parseInt(AXY.AjaxNetStuff.Parameters['Height']);
AXY.AjaxNetStuff.Param.backgroundcolor = String(AXY.AjaxNetStuff.Parameters['backgroundcolor']);
AXY.AjaxNetStuff.Param.opacity = parseFloat(AXY.AjaxNetStuff.Parameters['opacity']);
AXY.AjaxNetStuff.Param.TextColor = String(AXY.AjaxNetStuff.Parameters['TextColor']);
AXY.AjaxNetStuff.Param.TextAlign = String(AXY.AjaxNetStuff.Parameters['TextAlign']);
AXY.AjaxNetStuff.Param.fontsize = parseInt(AXY.AjaxNetStuff.Parameters['fontsize']);
AXY.AjaxNetStuff.Param.zIndex = parseInt(AXY.AjaxNetStuff.Parameters['zIndex']);
AXY.AjaxNetStuff.Param.ImgWidth = parseInt(AXY.AjaxNetStuff.Parameters['ImgWidth']);
AXY.AjaxNetStuff.Param.ImgHeight = parseInt(AXY.AjaxNetStuff.Parameters['ImgHeight']);
AXY.AjaxNetStuff.Param.ImgOpacity = parseFloat(AXY.AjaxNetStuff.Parameters['ImgOpacity']);
AXY.AjaxNetStuff.Param.LoginButtonText = String(AXY.AjaxNetStuff.Parameters['LoginButtonText']);
AXY.AjaxNetStuff.Param.LoginButtonColor = String(AXY.AjaxNetStuff.Parameters['LoginButtonColor']);
AXY.AjaxNetStuff.Param.LoginButtonOpacity = parseFloat(AXY.AjaxNetStuff.Parameters['LoginButtonOpacity']);
AXY.AjaxNetStuff.Param.LoginButtonFontSize = parseInt(AXY.AjaxNetStuff.Parameters['LoginButtonFontSize']);
//AXY.AjaxNetStuff.Param.TimeOL = 0;
//AXY.AjaxNetStuff.Param.PlayerCE = 0;
//text
AXY.AjaxNetStuff.Param.LoadingText = String(AXY.AjaxNetStuff.Parameters['LoadingText']);
AXY.AjaxNetStuff.Param.LastestText = String(AXY.AjaxNetStuff.Parameters['LastestText']);
AXY.AjaxNetStuff.Param.ActorText = String(AXY.AjaxNetStuff.Parameters['ActorText']);
AXY.AjaxNetStuff.Param.PlayerCEText = String(AXY.AjaxNetStuff.Parameters['PlayerCEText']);
AXY.AjaxNetStuff.Param.PlayerCEFormula = String(AXY.AjaxNetStuff.Parameters['PlayerCEFormula']);
AXY.AjaxNetStuff.Param.TimeOLText = String(AXY.AjaxNetStuff.Parameters['TimeOLText']);
AXY.AjaxNetStuff.Param.LevelText = String(AXY.AjaxNetStuff.Parameters['LevelText']);
AXY.AjaxNetStuff.Param.GoldText = String(AXY.AjaxNetStuff.Parameters['GoldText']);
AXY.AjaxNetStuff.Param.StepsText = String(AXY.AjaxNetStuff.Parameters['StepsText']);
AXY.AjaxNetStuff.Param.PlayTimeText = String(AXY.AjaxNetStuff.Parameters['PlayTimeText']);
AXY.AjaxNetStuff.Param.SaveTimesText = String(AXY.AjaxNetStuff.Parameters['SaveTimesText']);
AXY.AjaxNetStuff.Param.BattleTimesText = String(AXY.AjaxNetStuff.Parameters['BattleTimesText']);
AXY.AjaxNetStuff.Param.VictoryTimesText = String(AXY.AjaxNetStuff.Parameters['VictoryTimesText']);
AXY.AjaxNetStuff.Param.EscapeTimesText = String(AXY.AjaxNetStuff.Parameters['EscapeTimesText']);
//coupon
AXY.AjaxNetStuff.Param.EnableCoupon = AXY.AjaxNetStuff.Parameters['EnableCoupon'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.CouponText = String(AXY.AjaxNetStuff.Parameters['CouponText']);
//vercheck
AXY.AjaxNetStuff.Param.EnableVerCheck = AXY.AjaxNetStuff.Parameters['EnableVerCheck'].toLowerCase() === 'true';
//logingift
AXY.AjaxNetStuff.Param.EnableLoginGift = AXY.AjaxNetStuff.Parameters['EnableLoginGift'].toLowerCase() === 'true';
//cloudsave
AXY.AjaxNetStuff.Param.EnableCloudSave = AXY.AjaxNetStuff.Parameters['EnableCloudSave'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.CloudSaveText = String(AXY.AjaxNetStuff.Parameters['CloudSaveText']);
//chat
AXY.AjaxNetStuff.Param.EnableChat = AXY.AjaxNetStuff.Parameters['EnableChat'].toLowerCase() === 'true';
//danmu
AXY.AjaxNetStuff.Param.EnableDanmu = AXY.AjaxNetStuff.Parameters['EnableDanmu'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.DanmuSpeed = parseInt(AXY.AjaxNetStuff.Parameters['DanmuSpeed']);
AXY.AjaxNetStuff.Param.DanmuInterval = parseInt(AXY.AjaxNetStuff.Parameters['DanmuInterval']);
AXY.AjaxNetStuff.Param.DanmuSwitch = true;
AXY.AjaxNetStuff.Param.DanmuObj = {};
AXY.AjaxNetStuff.Param.DanmuObj.Troop = [];
AXY.AjaxNetStuff.Param.DanmuObj.Map = [];
//shopingame
AXY.AjaxNetStuff.Param.EnableShopInGame = AXY.AjaxNetStuff.Parameters['EnableShopInGame'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.ShopInGameText = String(AXY.AjaxNetStuff.Parameters['ShopInGameText']);
AXY.AjaxNetStuff.Param.ShopInGameSoldOutText = String(AXY.AjaxNetStuff.Parameters['ShopInGameSoldOutText']);
AXY.AjaxNetStuff.Param.ShopInGameColumn = parseInt(AXY.AjaxNetStuff.Parameters['ShopInGameColumn']);
AXY.AjaxNetStuff.Param.ShopInGameFetchDone = false;
AXY.AjaxNetStuff.Param.ShopInGameFetchHbid = 0;
AXY.AjaxNetStuff.Param.ShopInGameFee = 0;
//LoginCommonEventId
AXY.AjaxNetStuff.Param.LoginCommonEventId = parseInt(AXY.AjaxNetStuff.Parameters['LoginCommonEventId']);
//menu/return button
AXY.AjaxNetStuff.Param.EnableMenuButton = AXY.AjaxNetStuff.Parameters['EnableMenuButton'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.MenuButtonPositionX = parseInt(AXY.AjaxNetStuff.Parameters['MenuButtonPositionX']);
AXY.AjaxNetStuff.Param.MenuButtonPositionY = parseInt(AXY.AjaxNetStuff.Parameters['MenuButtonPositionY']);
//auctioningame
AXY.AjaxNetStuff.Param.EnableAuctionInGame = AXY.AjaxNetStuff.Parameters['EnableAuctionInGame'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.AuctionInGameText = String(AXY.AjaxNetStuff.Parameters['AuctionInGameText']);
AXY.AjaxNetStuff.Param.AuctionInGameSoldOutText = String(AXY.AjaxNetStuff.Parameters['AuctionInGameSoldOutText']);
AXY.AjaxNetStuff.Param.AuctionInGameColumn = parseInt(AXY.AjaxNetStuff.Parameters['AuctionInGameColumn']);
AXY.AjaxNetStuff.Param.AuctionInGameFetchDone = false;
AXY.AjaxNetStuff.Param.AuctionInGameFetchHbid = 0;
AXY.AjaxNetStuff.Param.AuctionInGameFee = 0;
//PreventAndroidReturnKey
AXY.AjaxNetStuff.Param.PreventAndroidReturnKey = AXY.AjaxNetStuff.Parameters['PreventAndroidReturnKey'].toLowerCase() === 'true';
//AutoSaveAfterShopping
AXY.AjaxNetStuff.Param.AutoSaveAfterShopping = parseInt(AXY.AjaxNetStuff.Parameters['AutoSaveAfterShopping']);

//main
//PreventAndroidReturnKey
if (AXY.AjaxNetStuff.Param.PreventAndroidReturnKey) {
	$(window).on('popstate', function() {
		if(confirm('要退出游戏吗？')){
			window.close();
		}
		else{
			window.history.pushState(null, null, '#forward');
		}
	});
	window.history.pushState(null, null, '#forward');
}

//ajax auctioningame
if (AXY.AjaxNetStuff.Param.EnableAuctionInGame) {
	//=============================================================================
	// ** Window MenuCommand
	//=============================================================================	

	//==============================
	// * make Command List
	//==============================
	AXY.AjaxNetStuff.Alias.addOriginalCommandsAuctionInGame = Window_MenuCommand.prototype.addOriginalCommands;
	Window_MenuCommand.prototype.addOriginalCommands = function() {
		AXY.AjaxNetStuff.Alias.addOriginalCommandsAuctionInGame.call(this);
		this.addCommand(AXY.AjaxNetStuff.Param.AuctionInGameText, 'AuctionInGame', true);
	};
		
	//=============================================================================
	// ** Scene Menu
	//=============================================================================	

	//==============================
	// * create Command Window
	//==============================
	AXY.AjaxNetStuff.Alias.createCommandWindowAuctionInGame = Scene_Menu.prototype.createCommandWindow;
	Scene_Menu.prototype.createCommandWindow = function() {
		AXY.AjaxNetStuff.Alias.createCommandWindowAuctionInGame.call(this); 
		this._commandWindow.setHandler('AuctionInGame',      this.commandAuctionInGame.bind(this));
		/*if (Imported.MOG_TimeSystem && Moghunter.timeWindow_menu) {	
			this._commandWindow.height -= this._commandWindow.itemHeight();
		};*/
	};

	//==============================
	// * Auction In Game
	//==============================
	Scene_Menu.prototype.commandAuctionInGame = function() {
		AXY_AjaxAuctionInGame.show();
		// Close option window
		SceneManager.pop();	
	};
	
	//display html first
	var AXYAjaxAuctionInGameTemplate = 
					'<div class="AXYAjaxAuctionInGame" id="AXYAjaxAuctionInGame">' +
						'<div class="AXYAjaxAuctionInGameBG"></div><div class="AXYAjaxAuctionInGameGold">' +
						'<input type="button" class="AXYAjaxAuctionInGameButtonGold" id="AXYAjaxAuctionInGameButtonGold" value="DTC" /><input type="hidden" name="balance" value="" />' +
						'<input type="button" class="AXYAjaxAuctionInGameButtonClose" id="AXYAjaxAuctionInGameButtonUp" value="上一页" />' +
						'<input type="button" class="AXYAjaxAuctionInGameButtonClose" id="AXYAjaxAuctionInGameButtonDown" value="下一页" />' +
						'<input type="button" class="AXYAjaxAuctionInGameButtonClose" id="AXYAjaxAuctionInGameButtonClose" value="关闭" /></div>' +
						'<div id="AXYAjaxAuctionInGameBody"></div>'+
					'</div>';
	var AXYAjaxAuctionInGameStyleCss = 
			'.AXYAjaxAuctionInGame{overflow-y:scroll;position:fixed;top:10px;left:.5%;z-index:10000;display:none;margin:0 auto;width:98%;height:0;text-align:center;border:3px solid #fff;border-radius:10px;}'+
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameBG{position:absolute;width:100%;height:100%;background:#000;opacity:.5}'+
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameGold{z-index:20000;margin-top:1%;width:100%;height:10%;}'+
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameButtonClose, .AXYAjaxAuctionInGameButtonGold{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.7);opacity:1;color:#fff;font-size:24px;}'+
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameButtonClose, .AXYAjaxAuctionInGameButtonGold{top:0;z-index:10000;margin-left:2%;width:10%;height:50px;cursor:pointer}'+
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameButtonGold{width:40%;cursor:default;}'+
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameBody{}'+
			'.AXYAjaxAuctionInGameButton{position:relative;top:0;z-index:10000;margin:1%;padding:5px;width:'+
			parseInt(100/AXY.AjaxNetStuff.Param.AuctionInGameColumn-2)+'%;height:15pc;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.5);color:#fff;font-size:24px;cursor:pointer}'+
			'.AXYAjaxAuctionInGameButtonDiv1{display:block;overflow:hidden;width:100%;height:190px;border-bottom:1px solid #fff;text-align:left;font-size:20px}'+
			'.AXYAjaxAuctionInGameButtonDiv2{display:block;width:100%;height:40px;line-height:40px}';
	$('body').append(AXYAjaxAuctionInGameTemplate);
	$('#AXYAjaxAuctionInGame').append('<style type="text/css">'+AXYAjaxAuctionInGameStyleCss+'</style>');
	
	var AXYAjaxAuctionInGameConfirmTemplate = 
				'<div class="AXYAjaxAuctionInGameConfirm" id="AXYAjaxAuctionInGameConfirm">' +
					'<div class="AXYAjaxAuctionInGameConfirmBG"></div>' +
					'<input type="text" readonly="readonly" class="AXYAjaxAuctionInGameConfirmInput" id="AXYAjaxAuctionInGameConfirmFee" />' +
					'<input type="password" class="AXYAjaxAuctionInGameConfirmInput" id="AXYAjaxAuctionInGameConfirmInputPwd" placeholder="输入交易密码" />' +
					'<input type="button" class="AXYAjaxAuctionInGameConfirmButton" id="AXYAjaxAuctionInGameConfirmButtonUse" value="确认" />' +
					'<input type="button" class="AXYAjaxAuctionInGameConfirmButton" id="AXYAjaxAuctionInGameConfirmButtonClose" value="取消" />' +
				'</div>';
	var AXYAjaxAuctionInGameConfirmStyleCss = 
			'.AXYAjaxAuctionInGameConfirm{position:fixed;top:20%;left:20%;z-index:10000;display:none;margin:0 auto;width:0%;height:220px;text-align:center;}'+
			'.AXYAjaxAuctionInGameConfirm .AXYAjaxAuctionInGameConfirmBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.9}'+
			'.AXYAjaxAuctionInGameConfirm .AXYAjaxAuctionInGameConfirmInput{margin:15px 0;text-align:center;width:80%;height:50px;imeMode:active}'+
			'.AXYAjaxAuctionInGameConfirm .AXYAjaxAuctionInGameConfirmButton,.AXYAjaxAuctionInGameConfirm .AXYAjaxAuctionInGameConfirmInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,1);color:#fff;font-size:24px;}'+
			'.AXYAjaxAuctionInGameConfirm .AXYAjaxAuctionInGameConfirmButton{top:0;z-index:10000;margin-left:2%;width:30%;height:3pc;word-spacing:20px;cursor:pointer}';
	$('body').append(AXYAjaxAuctionInGameConfirmTemplate);
	$('#AXYAjaxAuctionInGameConfirm').append('<style type="text/css">'+AXYAjaxAuctionInGameConfirmStyleCss+'</style>');


	var AXY_AjaxAuctionInGameURL = AXY.AjaxNetStuff.Param.URL.replace('zhongchou','rmmvgame').replace('product','rmmvgameAuctioningame');
	
	//then bind action
	var AXY_AjaxAuctionInGame = {
		show: function () {
			if(!AXY.AjaxNetStuff.Param.Loggedin){
				$.toaster({ message : '请先登录', color:'white'});
				return;
			}
			
			$('#AXYAjaxAuctionInGame').stop().show().animate({"height": "96%"}, "normal", '', function(){
				$('.AXYAjaxAuctionInGameBG').stop().show().animate({"height": ($('#AXYAjaxAuctionInGame')[0].scrollHeight)+'px'}, "normal");
			});

			$gameSystem.setTouchMoveEnabled(false);

			var css =
			{
				'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
			};

			$('.AXYAjaxAuctionInGame').css(css);
			//$('.AXYAjaxAuctionInGameButton').css(css);
			
			$('#AXYAjaxAuctionInGameButtonClose').unbind('click touchstart').bind('click touchstart',function() {
				AXY_AjaxAuctionInGame.hide();
			});
			
			/*$('#AXYAjaxAuctionInGame').scroll(function() {
				$.toaster({ message : '滚动了', color:'white'});
				$('#AXYAjaxAuctionInGame').scrollTop(100);
			});*/
			var scrollTop = 0;
			$('#AXYAjaxAuctionInGameButtonUp').unbind('click touchend').bind('click touchend',function() {
				scrollTop -= 200;
				if(scrollTop<=0){
					scrollTop = 0;
					$('#AXYAjaxAuctionInGame').scrollTop(scrollTop);
					$('.AXYAjaxAuctionInGameGold').css('position', '');
				}
				else{
					$('#AXYAjaxAuctionInGame').scrollTop(scrollTop);
					//$('.AXYAjaxAuctionInGameGold').css('position', 'fixed');
				}
				$.toaster({ message : '滚动到'+scrollTop, color:'white'});
			});
			$('#AXYAjaxAuctionInGameButtonDown').unbind('click touchend').bind('click touchend',function() {
				scrollTop += 200;
				$('#AXYAjaxAuctionInGame').scrollTop(scrollTop);
				$('.AXYAjaxAuctionInGameGold').css('position', 'fixed');
				$.toaster({ message : '滚动到'+scrollTop, color:'white'});
			});
			
			if(AXY.AjaxNetStuff.Param.AuctionInGameFetchDone){
				return;
			}
			
			$.ajax({
				url: AXY_AjaxAuctionInGameURL,
				type: 'POST',
				dataType: 'json',
				data: {sid: AXY.AjaxNetStuff.Param.sid, action:'fetchall'},
				success: function (data) {
					//console.log(data);
					if (data.status) {
						//console.log(data);
						//$('.AXYAjaxTopListTbody').empty();
						//console.log(data);
						try{
							$('#AXYAjaxAuctionInGameButtonGold').val(data['balance']+'DTC');
							$('.AXYAjaxAuctionInGameGold').find("input[name='balance']").val($.unformatMoney(data['balance']));
							
							
							var str = '';
							$.each(data['hb'], function(index) {
								var obj = data['hb'][index];
								//console.log(obj1.jsonstr);
								//var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
								//console.log(obj);
								//var time1 = new Date((obj1.lasttime).replace(new RegExp("-","gm"),"/")).Format("hh:mm"); 
								if(obj.endflag){
									str += '<button class="AXYAjaxAuctionInGameButton"><span class="AXYAjaxAuctionInGameButtonDiv1">'+obj.neirong+'</span><span class="AXYAjaxAuctionInGameButtonDiv2">'+AXY.AjaxNetStuff.Param.AuctionInGameSoldOutText+'</span><input type="hidden" name="hbid" value="soldout" /></button>';
								}
								else{
									str += '<button class="AXYAjaxAuctionInGameButton"><span class="AXYAjaxAuctionInGameButtonDiv1">'+obj.neirong+'</span><span class="AXYAjaxAuctionInGameButtonDiv2">'+parseFloat($.formatMoney(parseFloat(obj.fee)+parseFloat(obj.yunfei), 8))+'DTC</span><input type="hidden" name="hbid" value="'+obj.id+'" /><input type="hidden" name="fee" value="'+(parseFloat(obj.fee)+parseFloat(obj.yunfei))+'" /></button>';
								}
							});
							//$('.AXYAjaxTopListTbody').html(str);
							$('#AXYAjaxAuctionInGameBody').html(str);

							//bind click when html ready
							$('.AXYAjaxAuctionInGameButton').unbind('click touchend').bind('click touchend',function() {
								//console.log($(this));
								//console.log($(this).index());
								//console.log($(this).find("input[name='hbid']").val());
								if($(this).find("input[name='hbid']").val() == 'soldout'){
									$.toaster({ message : AXY.AjaxNetStuff.Param.AuctionInGameSoldOutText, color:'white'});
									return;
								}
								if($('#AXYAjaxAuctionInGameButtonGold').find("input[name='balance']").val() == 0){
									$.toaster({ message : '余额不足，请先充值兑换！', color:'white'});
									return;
								}
								
								if($(this).disabled){
									//console.log($('#AXYAjaxAuctionInGameButtonUse')[0].disabled);
									return;
								}
								//console.log($('#AXYAjaxAuctionInGameButtonUse'));
								//console.log($('#AXYAjaxAuctionInGameButtonUse')[0].disabled);

								$(this).attr("disabled", true);
								var hbitem = $(this);
								//$('#AXYAjaxAuctionInGameButtonUse').val("sending");
								//console.log($('#AXYAjaxAuctionInGameButtonUse'));
								//console.log(typeof($('#AXYAjaxAuctionInGameButtonUse')[0].disabled));
								//return;
								
								//confirm
								$('#AXYAjaxAuctionInGameConfirm').stop().show().animate({"width": "60%"}, "normal");
								
								AXY.AjaxNetStuff.Param.AuctionInGameFee = parseFloat($(this).find("input[name='fee']").val());
								$('#AXYAjaxAuctionInGameConfirmFee').val(parseFloat($.formatMoney(AXY.AjaxNetStuff.Param.AuctionInGameFee, 8))+'DTC');
								//$('#AXYAjaxAuctionInGameButtonGold').find("input[name='balance']").val(data['balance']);
								
								var css =
								{
									'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
								};
								$('#AXYAjaxAuctionInGameConfirm').css(css);
								
								$('#AXYAjaxAuctionInGameConfirmInputPwd').focus();
								
								$('#AXYAjaxAuctionInGameConfirmInputPwd').keydown(function (e) {
									if (e.keyCode == 8) {
										var _name = this.value.slice(0, this.value.length - 1);
										this.value = _name;
									}
								}); 
								$('#AXYAjaxAuctionInGameConfirmInputPwd').unbind('click touchend').bind('click touchend',function () {
									$('#AXYAjaxAuctionInGameConfirmInputPwd').focus();
								}); 
								
								$('#AXYAjaxAuctionInGameConfirmButtonClose').unbind('click touchstart').bind('click touchstart',function() {
									$('#AXYAjaxAuctionInGameConfirm').stop().animate({"width": "0"}, "normal", function() {
										$(this).hide();
										//$(this).remove();
									});
									hbitem.attr("disabled", false);
								});
								
								AXY.AjaxNetStuff.Param.AuctionInGameFetchHbid = $(this).find("input[name='hbid']").val();
								//console.log(AXY.AjaxNetStuff.Param.AuctionInGameFetchHbid);
								//console.log($(this).find("input[name='hbid']").val());
								$('#AXYAjaxAuctionInGameConfirmButtonUse').unbind('click touchstart').bind('click touchstart',function() {
									//console.log(AXY.AjaxNetStuff.Param.AuctionInGameFetchHbid);
									if($('#AXYAjaxAuctionInGameConfirmInputPwd').val() == ''){
										$.toaster({ message : '不能为空', color:'red'});
										return;
									}
									//console.log($('#AXYAjaxAuctionInGameConfirmInputPwd').val());
									$(this).attr("disabled", true);
									$(this).val("sending");
									$.ajax({
										url: AXY_AjaxAuctionInGameURL,
										type: 'POST',
										dataType: 'json',
										data: {sid: AXY.AjaxNetStuff.Param.sid, action: 'fetchone', hbid: AXY.AjaxNetStuff.Param.AuctionInGameFetchHbid, pw: $('#AXYAjaxAuctionInGameConfirmInputPwd').val()},
										success: function (data) {
											//console.log(data);
											if (data.status) {
												//console.log(data);
												$.toaster({ message : "支付成功！"});
												//console.log($('.AXYAjaxAuctionInGameGold').find("input[name='balance']").val());
												//console.log(AXY.AjaxNetStuff.Param.AuctionInGameFee);
												$('#AXYAjaxAuctionInGameButtonGold').val(parseFloat($.formatMoney(parseFloat($('.AXYAjaxAuctionInGameGold').find("input[name='balance']").val())-AXY.AjaxNetStuff.Param.AuctionInGameFee, 8))+'DTC');
												$('.AXYAjaxAuctionInGameGold').find("input[name='balance']").val(parseFloat($('.AXYAjaxAuctionInGameGold').find("input[name='balance']").val())-AXY.AjaxNetStuff.Param.AuctionInGameFee);
												
												var obj = $.parseJSON(data['content']);
												//console.log(obj);
												$.each(obj, function(index) {
													//console.log(obj[index]);
													switch(obj[index].item){
														case 0:
															$gameParty.gainGold(obj[index].num,0,0);
															if(!AXY.Toast.Param.DisplayGainGold){
																$.toaster({ message : "+"+obj[index].num+TextManager.currencyUnit});
															}
															break;
														case 1:
															$gameParty.gainItem($dataItems[obj[index].id],obj[index].num,0,0);
															if(!AXY.Toast.Param.DisplayGainItem){
																$.toaster({ message : "+"+obj[index].num+$dataItems[obj[index].id].name});
															}
															break;
														case 2:
															$gameParty.gainItem($dataWeapons[obj[index].id], obj[index].num,0,0,0);
															if(!AXY.Toast.Param.DisplayGainItem){
																$.toaster({ message : "+"+obj[index].num+$dataWeapons[obj[index].id].name});
															}
															break;
														case 3:
															$gameParty.gainItem($dataArmors[obj[index].id], obj[index].num,0,0,0);
															if(!AXY.Toast.Param.DisplayGainItem){
																$.toaster({ message : "+"+obj[index].num+$dataArmors[obj[index].id].name});
															}
															break;
														default:
															//console.log(typeof(obj[index].num));
															break;
													}
												});
												
												setTimeout(function()
												{
													$.toaster({ message : "众筹游戏《"+data.gamename+"》感谢您的支持！"});
													AXY_AjaxCoupon.hide();
												}, 3000);
											} else{
												console.log(data);
												$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
											};
											$('#AXYAjaxAuctionInGameConfirmButtonUse').attr("disabled", false);
											$('#AXYAjaxAuctionInGameConfirmButtonUse').val("确认");
										},
										error:function (XMLHttpRequest, textStatus, errorThrown) {
											//console.log(XMLHttpRequest);
											//console.log(textStatus);
											//console.log(errorThrown);
											$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
											$('#AXYAjaxAuctionInGameConfirmButtonUse').attr("disabled", false);
											$('#AXYAjaxAuctionInGameConfirmButtonUse').val("确认");
										},
										complete:function (XMLHttpRequest, textStatus) {
											//console.log(XMLHttpRequest);
											//console.log(textStatus);
											//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
											$('#AXYAjaxAuctionInGameConfirmButtonUse').attr("disabled", false);
											$('#AXYAjaxAuctionInGameConfirmButtonUse').val("确认");
										}
									});
								});
							});
							
							AXY.AjaxNetStuff.Param.AuctionInGameFetchDone = true;
						}
						catch(error){
							console.log(error);
						}
					} else{
						//console.log(data);
						$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
					};
				},
				error:function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//console.log(errorThrown);
					$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
				},
				complete:function (XMLHttpRequest, textStatus) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
				}
			});
		},
		hide: function () {
			$('#AXYAjaxAuctionInGame').stop().animate({"height": "0"}, "normal", function() {
				$(this).hide();
				//$(this).remove();
				$gameSystem.setTouchMoveEnabled(true);
			});
		}
	};
}

//menu/return button
if(AXY.AjaxNetStuff.Param.EnableMenuButton){
	//display html first
	var AXYAjaxMenuButtonTemplate = 
					'<div class="AXYAjaxMenuButtonButtonImg"><img src="img/pictures/Button-Menu.png" class="AXYAjaxMenuButtonOpen"></div>';
	var AXYAjaxMenuButtonStyleCss = 
			'.AXYAjaxMenuButtonButtonImg{position:fixed;z-index:10000;margin:auto;left:'+
			AXY.AjaxNetStuff.Param.MenuButtonPositionX+'px;right:0;top:'+
			AXY.AjaxNetStuff.Param.MenuButtonPositionY+'px;bottom:0;pointer-events:none;}.AXYAjaxMenuButtonButtonImg img{width:'+
			AXY.AjaxNetStuff.Param.ImgWidth+'px;height:'+
			AXY.AjaxNetStuff.Param.ImgHeight+'px;opacity:'+
			AXY.AjaxNetStuff.Param.ImgOpacity+';pointer-events:auto;}';

	$('body').append(AXYAjaxMenuButtonTemplate);
	$('.AXYAjaxMenuButtonButtonImg').append('<style type="text/css">'+AXYAjaxMenuButtonStyleCss+'</style>');

	//last bind the click
	$('.AXYAjaxMenuButtonOpen').unbind('click touchend').bind('click touchend',function () {
		if(!$gameMap){
			$.toaster({ message : '请先进入游戏', color:'white'});
			return;
		}
		if(!$gameMap._mapId){
			$.toaster({ message : '请先进入游戏', color:'white'});
			return;
		}
		//if (!$gameParty.inBattle()) {
			/*if (SceneManager._stack.length > 0) {
				//console.log(SceneManager._stack.length);
				SceneManager.goto(SceneManager._stack.pop());
				if (SceneManager._stack.length == 0) {
					SceneManager.goto(SceneManager._stack.pop());
					//console.log('0='+SceneManager._stack.length);
				}
			}
			else{
				SceneManager.push(Scene_Menu);
				//Window_MenuCommand.initCommandPosition();
			}*/
			/*if (TouchInput.isTriggered()) {
				Input._currentState['escape'] = true;
			} else{
				Input._currentState['escape'] = false;
			}*/
			TouchInput._events.cancelled = true;
		//}
	});
}

//ajax shopingame
if (AXY.AjaxNetStuff.Param.EnableShopInGame) {
	//=============================================================================
	// ** Window MenuCommand
	//=============================================================================	

	//==============================
	// * make Command List
	//==============================
	AXY.AjaxNetStuff.Alias.addOriginalCommandsShopInGame = Window_MenuCommand.prototype.addOriginalCommands;
	Window_MenuCommand.prototype.addOriginalCommands = function() {
		AXY.AjaxNetStuff.Alias.addOriginalCommandsShopInGame.call(this);
		this.addCommand(AXY.AjaxNetStuff.Param.ShopInGameText, 'ShopInGame', true);
	};
		
	//=============================================================================
	// ** Scene Menu
	//=============================================================================	

	//==============================
	// * create Command Window
	//==============================
	AXY.AjaxNetStuff.Alias.createCommandWindowShopInGame = Scene_Menu.prototype.createCommandWindow;
	Scene_Menu.prototype.createCommandWindow = function() {
		AXY.AjaxNetStuff.Alias.createCommandWindowShopInGame.call(this); 
		this._commandWindow.setHandler('ShopInGame',      this.commandShopInGame.bind(this));
		/*if (Imported.MOG_TimeSystem && Moghunter.timeWindow_menu) {	
			this._commandWindow.height -= this._commandWindow.itemHeight();
		};*/
	};

	//==============================
	// * Shop In Game
	//==============================
	Scene_Menu.prototype.commandShopInGame = function() {
		AXY_AjaxShopInGame.show();
		// Close option window
		SceneManager.pop();	
	};
	
	//display html first
	var AXYAjaxShopInGameTemplate = 
					'<div class="AXYAjaxShopInGame" id="AXYAjaxShopInGame">' +
						'<div class="AXYAjaxShopInGameBG"></div><div class="AXYAjaxShopInGameGold">' +
						'<input type="button" class="AXYAjaxShopInGameButtonGold" id="AXYAjaxShopInGameButtonGold" value="DTC" /><input type="hidden" name="balance" value="" />' +
						'<input type="button" class="AXYAjaxShopInGameButtonClose" id="AXYAjaxShopInGameButtonUp" value="上一页" />' +
						'<input type="button" class="AXYAjaxShopInGameButtonClose" id="AXYAjaxShopInGameButtonDown" value="下一页" />' +
						'<input type="button" class="AXYAjaxShopInGameButtonClose" id="AXYAjaxShopInGameButtonClose" value="关闭" /></div>' +
						'<div id="AXYAjaxShopInGameBody"></div>'+
					'</div>';
	var AXYAjaxShopInGameStyleCss = 
			'.AXYAjaxShopInGame{overflow-y:scroll;position:fixed;top:10px;left:.5%;z-index:10000;display:none;margin:0 auto;width:98%;height:0;text-align:center;border:3px solid #fff;border-radius:10px;}'+
			'.AXYAjaxShopInGame .AXYAjaxShopInGameBG{position:absolute;width:100%;height:100%;background:#000;opacity:.5}'+
			'.AXYAjaxShopInGame .AXYAjaxShopInGameGold{z-index:20000;margin-top:1%;width:100%;height:10%;}'+
			'.AXYAjaxShopInGame .AXYAjaxShopInGameButtonClose, .AXYAjaxShopInGameButtonGold{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.7);opacity:1;color:#fff;font-size:24px;}'+
			'.AXYAjaxShopInGame .AXYAjaxShopInGameButtonClose, .AXYAjaxShopInGameButtonGold{top:0;z-index:10000;margin-left:2%;width:10%;height:50px;cursor:pointer}'+
			'.AXYAjaxShopInGame .AXYAjaxShopInGameButtonGold{width:40%;cursor:default;}'+
			'.AXYAjaxShopInGame .AXYAjaxShopInGameBody{}'+
			'.AXYAjaxShopInGameButton{position:relative;top:0;z-index:10000;margin:1%;padding:5px;width:'+
			parseInt(100/AXY.AjaxNetStuff.Param.ShopInGameColumn-2)+'%;height:15pc;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.5);color:#fff;font-size:24px;cursor:pointer}'+
			'.AXYAjaxShopInGameButtonDiv1{display:block;overflow-y:auto;width:100%;height:190px;border-bottom:1px solid #fff;text-align:left;font-size:20px}'+
			'.AXYAjaxShopInGameButtonDiv2{display:block;width:100%;height:40px;line-height:40px}';
	$('body').append(AXYAjaxShopInGameTemplate);
	$('#AXYAjaxShopInGame').append('<style type="text/css">'+AXYAjaxShopInGameStyleCss+'</style>');
	
	var AXYAjaxShopInGameConfirmTemplate = 
				'<div class="AXYAjaxShopInGameConfirm" id="AXYAjaxShopInGameConfirm">' +
					'<div class="AXYAjaxShopInGameConfirmBG"></div>' +
					'<input type="text" readonly="readonly" class="" style="display:none;" id="" value="请确保你的游戏版本为最新版，否则有可能扣费后无法正常获得众筹奖励" />' +
					'<input type="text" readonly="readonly" class="AXYAjaxShopInGameConfirmInput" id="AXYAjaxShopInGameConfirmFee" />' +
					'<input type="password" class="AXYAjaxShopInGameConfirmInput" id="AXYAjaxShopInGameConfirmInputPwd" placeholder="输入交易密码" />' +
					'<input type="button" class="AXYAjaxShopInGameConfirmButton" id="AXYAjaxShopInGameConfirmButtonUse" value="确认" />' +
					'<input type="button" class="AXYAjaxShopInGameConfirmButton" id="AXYAjaxShopInGameConfirmButtonClose" value="取消" />' +
				'</div>';
	var AXYAjaxShopInGameConfirmStyleCss = 
			'.AXYAjaxShopInGameConfirm{position:fixed;top:20%;left:20%;z-index:10000;display:none;margin:0 auto;width:0%;height:220px;text-align:center;}'+
			'.AXYAjaxShopInGameConfirm .AXYAjaxShopInGameConfirmBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.9}'+
			'.AXYAjaxShopInGameConfirm .AXYAjaxShopInGameConfirmInput{margin:15px 0;text-align:center;width:80%;height:50px;imeMode:active}'+
			'.AXYAjaxShopInGameConfirm .AXYAjaxShopInGameConfirmButton,.AXYAjaxShopInGameConfirm .AXYAjaxShopInGameConfirmInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,1);color:#fff;font-size:24px;}'+
			'.AXYAjaxShopInGameConfirm .AXYAjaxShopInGameConfirmButton{top:0;z-index:10000;margin-left:2%;width:30%;height:3pc;word-spacing:20px;cursor:pointer}';
	$('body').append(AXYAjaxShopInGameConfirmTemplate);
	$('#AXYAjaxShopInGameConfirm').append('<style type="text/css">'+AXYAjaxShopInGameConfirmStyleCss+'</style>');


	var AXY_AjaxShopInGameURL = AXY.AjaxNetStuff.Param.URL.replace('zhongchou','rmmvgame').replace('product','rmmvgameshopingame');
	
	//then bind action
	var AXY_AjaxShopInGame = {
		show: function () {
			if(!AXY.AjaxNetStuff.Param.Loggedin){
				$.toaster({ message : '请先登录', color:'white'});
				return;
			}
			
			$('#AXYAjaxShopInGame').stop().show().animate({"height": "96%"}, "normal", '', function(){
				$('.AXYAjaxShopInGameBG').stop().show().animate({"height": ($('#AXYAjaxShopInGame')[0].scrollHeight)+'px'}, "normal");
			});

			$gameSystem.setTouchMoveEnabled(false);

			var css =
			{
				'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
			};

			$('.AXYAjaxShopInGame').css(css);
			//$('.AXYAjaxShopInGameButton').css(css);
			
			$('#AXYAjaxShopInGameButtonClose').unbind('click touchstart').bind('click touchstart',function() {
				AXY_AjaxShopInGame.hide();
			});
			
			/*$('#AXYAjaxShopInGame').scroll(function() {
				$.toaster({ message : '滚动了', color:'white'});
				$('#AXYAjaxShopInGame').scrollTop(100);
			});*/
			var scrollTop = 0;
			$('#AXYAjaxShopInGameButtonUp').unbind('click touchend').bind('click touchend',function() {
				scrollTop -= 200;
				if(scrollTop<=0){
					scrollTop = 0;
					$('#AXYAjaxShopInGame').scrollTop(scrollTop);
					$('.AXYAjaxShopInGameGold').css('position', '');
				}
				else{
					$('#AXYAjaxShopInGame').scrollTop(scrollTop);
					//$('.AXYAjaxShopInGameGold').css('position', 'fixed');
				}
				$.toaster({ message : '滚动到'+scrollTop, color:'white'});
			});
			$('#AXYAjaxShopInGameButtonDown').unbind('click touchend').bind('click touchend',function() {
				scrollTop += 200;
				$('#AXYAjaxShopInGame').scrollTop(scrollTop);
				$('.AXYAjaxShopInGameGold').css('position', 'fixed');
				$.toaster({ message : '滚动到'+scrollTop, color:'white'});
			});
			
			if(AXY.AjaxNetStuff.Param.ShopInGameFetchDone){
				return;
			}
			
			alert("请确保你的游戏版本为最新版，否则有可能扣费后无法正常获得众筹奖励");
			
			$.ajax({
				url: AXY_AjaxShopInGameURL,
				type: 'POST',
				dataType: 'json',
				data: {sid: AXY.AjaxNetStuff.Param.sid, action:'fetchall'},
				success: function (data) {
					//console.log(data);
					if (data.status) {
						//console.log(data);
						//$('.AXYAjaxTopListTbody').empty();
						//console.log(data);
						try{
							$('#AXYAjaxShopInGameButtonGold').val(data['balance']+'DTC');
							$('.AXYAjaxShopInGameGold').find("input[name='balance']").val($.unformatMoney(data['balance']));
							
							
							var str = '';
							$.each(data['hb'], function(index) {
								var obj = data['hb'][index];
								//console.log(obj1.jsonstr);
								//var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
								//console.log(obj);
								//var time1 = new Date((obj1.lasttime).replace(new RegExp("-","gm"),"/")).Format("hh:mm"); 
								if(obj.endflag){
									str += '<button class="AXYAjaxShopInGameButton"><span class="AXYAjaxShopInGameButtonDiv1">'+obj.neirong+'</span><span class="AXYAjaxShopInGameButtonDiv2">'+AXY.AjaxNetStuff.Param.ShopInGameSoldOutText+'</span><input type="hidden" name="hbid" value="soldout" /></button>';
								}
								else{
									str += '<button class="AXYAjaxShopInGameButton"><span class="AXYAjaxShopInGameButtonDiv1">'+obj.neirong+'</span><span class="AXYAjaxShopInGameButtonDiv2">'+parseFloat($.formatMoney(parseFloat(obj.fee)+parseFloat(obj.yunfei), 8))+'DTC</span><input type="hidden" name="hbid" value="'+obj.id+'" /><input type="hidden" name="fee" value="'+(parseFloat(obj.fee)+parseFloat(obj.yunfei))+'" /></button>';
								}
							});
							//$('.AXYAjaxTopListTbody').html(str);
							$('#AXYAjaxShopInGameBody').html(str);

							//bind click when html ready
							$('.AXYAjaxShopInGameButton').unbind('click touchend').bind('click touchend',function() {
								//console.log($(this));
								//console.log($(this).index());
								//console.log($(this).find("input[name='hbid']").val());
								if($(this).find("input[name='hbid']").val() == 'soldout'){
									$.toaster({ message : AXY.AjaxNetStuff.Param.ShopInGameSoldOutText, color:'white'});
									return;
								}
								if($('#AXYAjaxShopInGameButtonGold').find("input[name='balance']").val() == 0){
									$.toaster({ message : '余额不足，请先充值兑换！', color:'white'});
									return;
								}
								
								if($(this).disabled){
									//console.log($('#AXYAjaxShopInGameButtonUse')[0].disabled);
									return;
								}
								//console.log($('#AXYAjaxShopInGameButtonUse'));
								//console.log($('#AXYAjaxShopInGameButtonUse')[0].disabled);

								$(this).attr("disabled", true);
								var hbitem = $(this);
								//$('#AXYAjaxShopInGameButtonUse').val("sending");
								//console.log($('#AXYAjaxShopInGameButtonUse'));
								//console.log(typeof($('#AXYAjaxShopInGameButtonUse')[0].disabled));
								//return;
								
								//confirm
								$('#AXYAjaxShopInGameConfirm').stop().show().animate({"width": "60%"}, "normal");
								
								AXY.AjaxNetStuff.Param.ShopInGameFee = parseFloat($(this).find("input[name='fee']").val());
								$('#AXYAjaxShopInGameConfirmFee').val(parseFloat($.formatMoney(AXY.AjaxNetStuff.Param.ShopInGameFee, 8))+'DTC');
								//$('#AXYAjaxShopInGameButtonGold').find("input[name='balance']").val(data['balance']);
								
								var css =
								{
									'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
								};
								$('#AXYAjaxShopInGameConfirm').css(css);
								
								$('#AXYAjaxShopInGameConfirmInputPwd').focus();
								
								$('#AXYAjaxShopInGameConfirmInputPwd').keydown(function (e) {
									if (e.keyCode == 8) {
										var _name = this.value.slice(0, this.value.length - 1);
										this.value = _name;
									}
								}); 
								$('#AXYAjaxShopInGameConfirmInputPwd').unbind('click touchend').bind('click touchend',function () {
									$('#AXYAjaxShopInGameConfirmInputPwd').focus();
								}); 
								
								$('#AXYAjaxShopInGameConfirmButtonClose').unbind('click touchstart').bind('click touchstart',function() {
									$('#AXYAjaxShopInGameConfirm').stop().animate({"width": "0"}, "normal", function() {
										$(this).hide();
										//$(this).remove();
									});
									hbitem.attr("disabled", false);
								});
								
								AXY.AjaxNetStuff.Param.ShopInGameFetchHbid = $(this).find("input[name='hbid']").val();
								//console.log(AXY.AjaxNetStuff.Param.ShopInGameFetchHbid);
								//console.log($(this).find("input[name='hbid']").val());
								$('#AXYAjaxShopInGameConfirmButtonUse').unbind('click touchstart').bind('click touchstart',function() {
									//console.log(AXY.AjaxNetStuff.Param.ShopInGameFetchHbid);
									if($('#AXYAjaxShopInGameConfirmInputPwd').val() == ''){
										$.toaster({ message : '不能为空', color:'red'});
										return;
									}
									//console.log($('#AXYAjaxShopInGameConfirmInputPwd').val());
									$(this).attr("disabled", true);
									$(this).val("sending");
									$.ajax({
										url: AXY_AjaxShopInGameURL,
										type: 'POST',
										dataType: 'json',
										data: {sid: AXY.AjaxNetStuff.Param.sid, action: 'fetchone', hbid: AXY.AjaxNetStuff.Param.ShopInGameFetchHbid, pw: $('#AXYAjaxShopInGameConfirmInputPwd').val()},
										success: function (data) {
											//console.log(data);
											if (data.status) {
												//console.log(data);
												$.toaster({ message : "支付成功！"});
												//console.log($('.AXYAjaxShopInGameGold').find("input[name='balance']").val());
												//console.log(AXY.AjaxNetStuff.Param.ShopInGameFee);
												$('#AXYAjaxShopInGameButtonGold').val(parseFloat($.formatMoney(parseFloat($('.AXYAjaxShopInGameGold').find("input[name='balance']").val())-AXY.AjaxNetStuff.Param.ShopInGameFee, 8))+'DTC');
												$('.AXYAjaxShopInGameGold').find("input[name='balance']").val(parseFloat($('.AXYAjaxShopInGameGold').find("input[name='balance']").val())-AXY.AjaxNetStuff.Param.ShopInGameFee);
												
												var obj = $.parseJSON(data['content']);
												//console.log(obj);
												$.each(obj, function(index) {
													//console.log(obj[index]);
													switch(obj[index].item){
														case 0:
															$gameParty.gainGold(obj[index].num,0,0);
															if(!AXY.Toast.Param.DisplayGainGold){
																$.toaster({ message : "+"+obj[index].num+TextManager.currencyUnit});
															}
															break;
														case 1:
															$gameParty.gainItem($dataItems[obj[index].id],obj[index].num,0,0);
															if(!AXY.Toast.Param.DisplayGainItem){
																$.toaster({ message : "+"+obj[index].num+$dataItems[obj[index].id].name});
															}
															break;
														case 2:
															$gameParty.gainItem($dataWeapons[obj[index].id], obj[index].num,0,0,0);
															if(!AXY.Toast.Param.DisplayGainItem){
																$.toaster({ message : "+"+obj[index].num+$dataWeapons[obj[index].id].name});
															}
															break;
														case 3:
															$gameParty.gainItem($dataArmors[obj[index].id], obj[index].num,0,0,0);
															if(!AXY.Toast.Param.DisplayGainItem){
																$.toaster({ message : "+"+obj[index].num+$dataArmors[obj[index].id].name});
															}
															break;
														default:
															//console.log(typeof(obj[index].num));
															break;
													}
												});
												
												$gameSystem.setTouchMoveEnabled(true);
												AXY_Save.save(AXY.AjaxNetStuff.Param.AutoSaveAfterShopping);
												$gameSystem.setTouchMoveEnabled(false);
												
												setTimeout(function()
												{
													$.toaster({ message : "众筹游戏《"+data.gamename+"》感谢您的支持！"});
													AXY_AjaxCoupon.hide();
												}, 3000);

											} else{
												console.log(data);
												$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
											};
											$('#AXYAjaxShopInGameConfirmButtonUse').attr("disabled", false);
											$('#AXYAjaxShopInGameConfirmButtonUse').val("确认");
										},
										error:function (XMLHttpRequest, textStatus, errorThrown) {
											//console.log(XMLHttpRequest);
											//console.log(textStatus);
											//console.log(errorThrown);
											$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
											$('#AXYAjaxShopInGameConfirmButtonUse').attr("disabled", false);
											$('#AXYAjaxShopInGameConfirmButtonUse').val("确认");
										},
										complete:function (XMLHttpRequest, textStatus) {
											//console.log(XMLHttpRequest);
											//console.log(textStatus);
											//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
											$('#AXYAjaxShopInGameConfirmButtonUse').attr("disabled", false);
											$('#AXYAjaxShopInGameConfirmButtonUse').val("确认");
										}
									});
								});
							});
							
							AXY.AjaxNetStuff.Param.ShopInGameFetchDone = true;
						}
						catch(error){
							console.log(error);
						}
					} else{
						//console.log(data);
						$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
					};
				},
				error:function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//console.log(errorThrown);
					$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
				},
				complete:function (XMLHttpRequest, textStatus) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
				}
			});
		},
		hide: function () {
			$('#AXYAjaxShopInGame').stop().animate({"height": "0"}, "normal", function() {
				$(this).hide();
				//$(this).remove();
				$gameSystem.setTouchMoveEnabled(true);
			});
		}
	};
}

//ajax danmu
if(AXY.AjaxNetStuff.Param.EnableDanmu){
	//display html first
	var AXYAjaxDanmuTemplate = 
					'<div class="AXYAjaxDanmu" id="AXYAjaxDanmu">' +
						'<div class="AXYAjaxDanmuBG"></div>' +
						'<input type="button" class="AXYAjaxDanmuButton" id="AXYAjaxDanmuButtonSwitch" value="禁用" />' +
						'<select class="AXYAjaxDanmuButton" id="AXYAjaxDanmuButtonPosition"><option value=1>滚动</option><option value=2>顶部</option><option value=3>中部</option></select>' +
						'<input type="text" class="AXYAjaxDanmuInput" id="AXYAjaxDanmuInput" placeholder="输入弹幕内容" />' +
						'<input type="button" class="AXYAjaxDanmuButton" id="AXYAjaxDanmuButtonUse" value="发送" />' +
						'<input type="button" class="AXYAjaxDanmuButton" id="AXYAjaxDanmuButtonClear" value="清空" />' +
						'<input type="button" class="AXYAjaxDanmuButton" id="AXYAjaxDanmuButtonClose" value="关闭" />' +
						'<input type="color" class="AXYAjaxDanmuButton" id="AXYAjaxDanmuButtonColor" value="#FF0000">' +
						'</div><div class="AXYAjaxDanmuButtonImg"><img src="img/pictures/Arrow4.png" class="AXYAjaxDanmuOpen"></div>';
	var AXYAjaxDanmuStyleCss = 
			'.AXYAjaxDanmu{position:fixed;top:10px;left:.5%;z-index:'+
			(AXY.AjaxNetStuff.Param.zIndex)+';display:none;margin:0 auto;width:98%;height:0px;text-align:center;}'+
			'.AXYAjaxDanmu .AXYAjaxDanmuBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.5}'+
			'.AXYAjaxDanmu .AXYAjaxDanmuInput{margin:15px 0 15px 2%;text-align:center;width:30%;height:50px;imeMode:active}'+
			'.AXYAjaxDanmu .AXYAjaxDanmuButton,.AXYAjaxDanmu .AXYAjaxDanmuInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.4);color:#fff;font-size:24px;}'+
			'.AXYAjaxDanmu .AXYAjaxDanmuButton{top:0;z-index:10000;margin-left:2%;width:10%;height:50px;cursor:pointer}'+
			'.AXYAjaxDanmuButtonImg{position:fixed;z-index:10000;margin:auto;left:'+
			AXY.AjaxNetStuff.Param.ImgWidth+'px;right:0;top:0;bottom:0;text-align:center;pointer-events:none;}.AXYAjaxDanmuButtonImg img{width:'+
			AXY.AjaxNetStuff.Param.ImgWidth+'px;height:'+
			AXY.AjaxNetStuff.Param.ImgHeight+'px;opacity:'+
			AXY.AjaxNetStuff.Param.ImgOpacity+';pointer-events:auto;}';

	$('body').append(AXYAjaxDanmuTemplate);
	$('#AXYAjaxDanmu').append('<style type="text/css">'+AXYAjaxDanmuStyleCss+'</style>');
	$('#AXYAjaxDanmuButtonPosition').css('display', 'none');
	$('#AXYAjaxDanmuButtonColor').css('display', 'none');

	var AXY_AjaxDanmuURL = AXY.AjaxNetStuff.Param.URL.replace('zhongchou','rmmvgame').replace('product','rmmvgamedanmu');
	//var danmuXpoor = Math.ceil(Graphics.width/96);
	//var danmuYpoor = Math.ceil(Graphics.height/96);
	var danmuXpoor = 10;
	var danmuYpoor = 10;
	var lastid = 0;
	
	//then bind action
	var AXY_AjaxDanmu = {
		show: function () {
			if(!$gameMap){
				$.toaster({ message : '请先进入游戏', color:'white'});
				return;
			}
			if(!$gameMap._mapId){
				$.toaster({ message : '请先进入游戏', color:'white'});
				return;
			}
			/*console.log($gameMap);
			console.log($gameSystem);
			console.log($gameTemp);
			console.log($gameTroop);
			console.log($gamePlayer);
			console.log($gameParty);
			console.log($gameActors);
			console.log($gameScreen);*/
			//console.log($$gameTroop);
			//console.log($$gameTroop);
			//console.log($$gameTroop);
			
			var danmuStartX = $('#UpperCanvas')[0].scrollWidth;
			var danmuStartY = 0;
			var danmuEndX = 0;
			var danmuAid = 0; //auto increament
			if(document.body.scrollWidth > $('#UpperCanvas')[0].scrollWidth){
				danmuStartX += (document.body.scrollWidth - $('#UpperCanvas')[0].scrollWidth) / 2;
				danmuEndX = (document.body.scrollWidth - $('#UpperCanvas')[0].scrollWidth) / 2;
				//console.log(danmuStartX);
			}
			if(document.body.scrollHeight > $('#UpperCanvas')[0].scrollHeight){
				danmuStartY = (document.body.scrollHeight - $('#UpperCanvas')[0].scrollHeight) / 2;
				//console.log(danmuStartY);
			}
			/*AXY_Text.show({id:1, msg:"'hi, world!'", align: 'topleft', x:danmuStartX, y:danmuStartY+100, backgroundcolor:'rgba(0,0,0,0.4)'});
			AXY_Text.show({id:2, msg:"'hi, world'", align: 'topleft', x:danmuStartX-100, y:danmuStartY+200, backgroundcolor:'rgba(0,0,0,0.7)'});
			AXY_Text.show({id:3, msg:"'hi, world'", align: 'topleft', x:danmuStartX-200, y:danmuStartY+300});
			$('#AXYText1').css('left', danmuStartX-$('#AXYText1')[0].clientWidth);
			$('#AXYText1').stop().show().animate({"left": danmuEndX}, 5000, '');
			$('#AXYText2').stop().show().animate({"left": danmuEndX}, 5000, '', function(){AXY_Text.remove(2);});
			$('#AXYText3').stop().show().animate({"left": danmuEndX}, 5000, '', function(){AXY_Text.remove(3);});
			//$('#AXYText2').stop().show().animate({"left": -20});
			//$('#AXYText3').stop().show().animate({"left": -20}, "fast");
			console.log($('#AXYText1'));*/
			
			$('.AXYAjaxDanmuOpen').hide();
			$('#AXYAjaxDanmu').stop().show().animate({"height": "80"}, "normal");
			$gameSystem.setTouchMoveEnabled(false);
			$('#AXYAjaxDanmuInput').focus();
			var css =
			{
				'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
			};
			$('#AXYAjaxDanmuInput').css(css);
			$('.AXYAjaxDanmuButton').css(css);
			
			$('#AXYAjaxDanmuInput').keydown(function (e) {
				if (e.keyCode == 8) {
					var _name = this.value.slice(0, this.value.length - 1);
					this.value = _name;
				}
			}); 
			$('#AXYAjaxDanmuInput').unbind('click touchend').bind('click touchend',function () {
				$('#AXYAjaxDanmuInput').focus();
			}); 
			//console.log($('#AXYAjaxDanmuInput'));
			$('#AXYAjaxDanmuInput').keydown(function (e) {
				if (e.keyCode == 13) {
					$('#AXYAjaxDanmuButtonUse').click();
				}
			}); 
			$('#AXYAjaxDanmuButtonUse').unbind('click touchend').bind('click touchend',function() {
				if(!AXY.AjaxNetStuff.Param.Loggedin){
					$.toaster({ message : '请先登录', color:'white'});
					return;
				}
				
				if(!AXY.AjaxNetStuff.Param.DanmuSwitch){
					$.toaster({ message : '请先启用弹幕', color:'white'});
					return;
				}
				
				if($('#AXYAjaxDanmuButtonUse')[0].disabled){
					//console.log($('#AXYAjaxDanmuButtonUse')[0].disabled);
					return;
				}
				//console.log($('#AXYAjaxDanmuButtonUse'));
				//console.log($('#AXYAjaxDanmuButtonUse')[0].disabled);

				$('#AXYAjaxDanmuButtonUse').attr("disabled", true);
				$('#AXYAjaxDanmuButtonUse').val("sending");
				//console.log($('#AXYAjaxDanmuButtonUse'));
				//console.log(typeof($('#AXYAjaxDanmuButtonUse')[0].disabled));
				//return;
				var inputDanmu = $('#AXYAjaxDanmuInput').val();
				inputDanmu = inputDanmu.replace(/<\/?[^>]*>/gim,"");//去掉所有的html标记
				inputDanmu = inputDanmu.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
				inputDanmu = inputDanmu.substr(0,60);//限制长度
				//inputDanmu = inputDanmu.replace(/\s/g,"");//去除文章中间空格
				//console.log($('#AXYAjaxDanmuInput'));
				//console.log($('#AXYAjaxDanmuInput').val());
				//console.log(inputcoupon);
				//console.log(str);
				//console.log(result);
				//console.log(ss);
				
				
				danmuAid++;
				var danmuid = danmuAid;
				var danmuRndY = parseInt(Math.random()*(400-100+1)+100,10);
				//var danmuRndLifetime = parseInt(Math.random()*(8000-3000+1)+3000,10);
				//var danmuRndY = 100;
				//var danmuRndLifetime = 5000;

				if(!inputDanmu){
					//console.log('代码不能为空');
					//$.toaster({ message : '不能为空', color:'red'});
					AXY_Text.show({id:'Error'+danmuid, msg:"'不能为空'", align: 'topleft', x:0, y:0, backgroundcolor:'rgba(0,0,0,0.4)', color:'red'});
					$('#AXYTextError'+danmuid).css({'left':danmuStartX-$('#AXYTextError'+danmuid)[0].clientWidth, 'top':danmuStartY+danmuRndY});
					$('#AXYTextError'+danmuid).stop().show().animate({"left": danmuEndX}, AXY.AjaxNetStuff.Param.DanmuSpeed, '', function(){AXY_Text.remove('Error'+danmuid);});
					$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
					$('#AXYAjaxDanmuButtonUse').val("发送");
					return;
				}
				//$.toaster({ message : $gameActors._data[1]._name+': '+inputDanmu, color:'white'});
				//AXY_Text.show({id:'Error'+danmuid, msg:'"'+$gameActors._data[1]._name+': '+inputDanmu+'"', align: 'topleft', x:0, y:0});
				//$('#AXYTextError'+danmuid).css({'left':danmuStartX-$('#AXYTextError'+danmuid)[0].clientWidth, 'top':danmuStartY+danmuRndY});
				//$('#AXYTextError'+danmuid).stop().show().animate({"left": danmuEndX}, AXY.AjaxNetStuff.Param.DanmuSpeed, '', function(){AXY_Text.remove('Error'+danmuid);});
				$('#AXYAjaxDanmuInput').val('').focus();
				//else{
				
				/*if(!lasttime){
					lasttime = new Date().Format("yyyy-MM-dd hh:mm");
				}*/
				
				/*$gameSystem.onBeforeSave();
				var saveinfo = ((DataManager.makeSavefileInfo()));
				var savedata = ((DataManager.makeSaveContents()));
				console.log(saveinfo);
				console.log(savedata);*/
				//console.log($gameMap);
				//console.log($gameSystem);
				//console.log($gameInfo);
				
				if($gameTroop._inBattle){
					$.ajax({
						url: AXY_AjaxDanmuURL,
						type: 'POST',
						dataType: 'json',
						data: {sid: AXY.AjaxNetStuff.Param.sid, danmumsg: inputDanmu, mapid: $gameMap._mapId, displayx: $gamePlayer._x, displayy: $gamePlayer._y, steps: $gameParty._steps, actorname: $gameActors._data[$gameParty._actors[0]]._name, playtime: parseInt(Graphics.frameCount/60), troopid: $gameTroop._troopId},
						success: function (data) {
							//console.log(data);
							if (data.status) {
								//console.log(data);
							} else{
								//console.log(data);
								//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
							};
							$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
							$('#AXYAjaxDanmuButtonUse').val("发送");
						},
						error:function (XMLHttpRequest, textStatus, errorThrown) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//console.log(errorThrown);
							$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
							$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
							$('#AXYAjaxDanmuButtonUse').val("发送");
						},
						complete:function (XMLHttpRequest, textStatus) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
							$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
							$('#AXYAjaxDanmuButtonUse').val("发送");
						}
					});
				}else if($gameMap._mapId){
					$.ajax({
						url: AXY_AjaxDanmuURL,
						type: 'POST',
						dataType: 'json',
						data: {sid: AXY.AjaxNetStuff.Param.sid, danmumsg: inputDanmu, mapid: $gameMap._mapId, displayx: $gamePlayer._x, displayy: $gamePlayer._y, steps: $gameParty._steps, actorname: $gameActors._data[$gameParty._actors[0]]._name, playtime: parseInt(Graphics.frameCount/60), troopid: 0},
						success: function (data) {
							//console.log(data);
							if (data.status) {
								//console.log(data);
							} else{
								//console.log(data);
								//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
							};
							$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
							$('#AXYAjaxDanmuButtonUse').val("发送");
						},
						error:function (XMLHttpRequest, textStatus, errorThrown) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//console.log(errorThrown);
							$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
							$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
							$('#AXYAjaxDanmuButtonUse').val("发送");
						},
						complete:function (XMLHttpRequest, textStatus) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
							$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
							$('#AXYAjaxDanmuButtonUse').val("发送");
						}
					});
				}
				//}
			});
			$('#AXYAjaxDanmuButtonClear').unbind('click touchstart').bind('click touchstart',function() {
				$('#AXYAjaxDanmuInput').val('').focus();
			});
			$('#AXYAjaxDanmuButtonClose').unbind('click touchstart').bind('click touchstart',function() {
				AXY_AjaxDanmu.hide();
			});
			$('#AXYAjaxDanmuButtonSwitch').unbind('click touchstart').bind('click touchstart',function() {
				if(AXY.AjaxNetStuff.Param.DanmuSwitch){
					$('#AXYAjaxDanmuButtonSwitch').val("启用");
					AXY.AjaxNetStuff.Param.DanmuSwitch = false;
				}else{
					$('#AXYAjaxDanmuButtonSwitch').val("禁用");
					AXY.AjaxNetStuff.Param.DanmuSwitch = true;
				}
			});
		},
		hide: function () {
			$('#AXYAjaxDanmu').stop().animate({"height": "0"}, "normal", function() {
				$(this).hide();
				//$(this).remove();
				$gameSystem.setTouchMoveEnabled(true);
				$('.AXYAjaxDanmuOpen').show();
			});
		}
	};
	
	//last bind the click
	$('.AXYAjaxDanmuOpen').unbind('click touchend').bind('click touchend',function () {
		AXY_AjaxDanmu.show();
	});
	
	//auto fetch danmu
	
		try{var i=0;
		setInterval(function(){
			//test
			//AXY.AjaxNetStuff.Param.DanmuObj.Map.push(1);
			/*if(!AXY.AjaxNetStuff.Param.DanmuObj.Map[i]){
			AXY.AjaxNetStuff.Param.DanmuObj.Map[i] = [];
			
			}
			AXY.AjaxNetStuff.Param.DanmuObj.Map[i][1] = i;
			AXY.AjaxNetStuff.Param.DanmuObj.Map[i][2] = i;
			//AXY.AjaxNetStuff.Param.DanmuObj.Map.push(1);
			//AXY.AjaxNetStuff.Param.DanmuObj.Map[i] = [];
			//AXY.AjaxNetStuff.Param.DanmuObj.Map[2][1] = 1;
			//AXY.AjaxNetStuff.Param.DanmuObj.Map[i][3] = 3;
			//console.log(obj[index].id);
			console.log(AXY.AjaxNetStuff.Param.DanmuObj.Map);
			i++;
			return;*/
			//test end
			
			
			if(AXY.AjaxNetStuff.Param.DanmuSwitch == false){
				return;
			}
			if(!$gameMap){
				return;
			}
			if(!$gameMap._mapId){
				return;
			}
			/*if(!$gameMap._axydanmu){
				$gameMap._axydanmu = [];
			}*/
			
			var danmuStartX = $('#UpperCanvas')[0].scrollWidth;
			var danmuStartY = 0;
			var danmuEndX = 0;

			if(document.body.scrollWidth > $('#UpperCanvas')[0].scrollWidth){
				danmuStartX += (document.body.scrollWidth - $('#UpperCanvas')[0].scrollWidth) / 2;
				danmuEndX = (document.body.scrollWidth - $('#UpperCanvas')[0].scrollWidth) / 2;
				console.log(danmuStartX);
			}
			if(document.body.scrollHeight > $('#UpperCanvas')[0].scrollHeight){
				danmuStartY = (document.body.scrollHeight - $('#UpperCanvas')[0].scrollHeight) / 2;
				console.log(danmuStartY);
			}

			
			//var danmuRndY = 100;
			//var danmuRndLifetime = 3000;

			
			/*if(!lasttime){
				lasttime = new Date().Format("yyyy-MM-dd hh:mm");
			}*/
			
			/*$gameSystem.onBeforeSave();
			var saveinfo = ((DataManager.makeSavefileInfo()));
			var savedata = ((DataManager.makeSaveContents()));
			console.log(saveinfo);
			console.log(savedata);*/
			
			//console.log($gameMap);
			//console.log($gameSystem);
			//console.log($gameTroop);
			//console.log({mapid: $gameMap._mapId, displayxmin: $gameMap._displayX-danmuXpoor, displayymin: $gameMap._displayY-danmuYpoor, displayxmax: $gameMap._displayX+danmuXpoor, displayymax: $gameMap._displayY+danmuYpoor, steps: $gameParty._steps, playtime: parseInt(Graphics.frameCount/60), lastid: lastid});
			if($gameTroop._inBattle){
				var gameTroop_troopId = $gameTroop._troopId;
				if(!AXY.AjaxNetStuff.Param.DanmuObj.Troop[gameTroop_troopId]){
					//AXY.AjaxNetStuff.Param.DanmuObj.Troop.push($gameTroop._troopId);
					AXY.AjaxNetStuff.Param.DanmuObj.Troop[gameTroop_troopId] = 1;
				}
				//console.log(AXY.AjaxNetStuff.Param.DanmuObj);
				$.ajax({
					url: AXY_AjaxDanmuURL,
					type: 'POST',
					dataType: 'json',
					data: {troopid: gameTroop_troopId, lastid: AXY.AjaxNetStuff.Param.DanmuObj.Troop[gameTroop_troopId]},
					success: function (data) {
						//console.log(data);
						if (data.status) {
							var obj = data.jsonstr;
							//console.log(obj);
							$.each(obj, function(index) {
								//console.log(obj[index]);
								
								//$gameMap._axydanmu.push(obj[index]);
								
								setTimeout(function(){
									var danmuRndY = parseInt(Math.random()*(400-100+1)+100,10);
									//var danmuRndLifetime = parseInt(Math.random()*(8000-3000+1)+3000,10);
									var time = new Date((obj[index].timeline).replace(new RegExp("-","gm"),"/")).Format("hhmm");
									//$.toaster({ message : obj[index].actorname+'['+time+']: '+obj[index].danmumsg, color:'white'});
									var id = 'danmu'+obj[index].id;
									AXY_Text.show({id:id, msg:'"'+obj[index].danmumsg+'"', align:'topleft', x:0, y:0});
									$('#AXYText'+id).css({'left':danmuStartX-$('#AXYText'+id)[0].clientWidth, 'top':danmuStartY+danmuRndY});
									$('#AXYText'+id).stop().show().animate({"left": danmuEndX}, AXY.AjaxNetStuff.Param.DanmuSpeed, '', function(){AXY_Text.remove(id);});
								}, AXY.AjaxNetStuff.Param.DanmuInterval*index);
							});
							//console.log(AXY.AjaxNetStuff.Param.DanmuObj);
							//console.log($gameMap);
							//obj.reverse();
							//lastid = obj[0].id;
							AXY.AjaxNetStuff.Param.DanmuObj.Troop[gameTroop_troopId] = obj[obj.length-1].id;
							
						} else{
							//console.log(data);
							//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
						};
					},
					error:function (XMLHttpRequest, textStatus, errorThrown) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//console.log(errorThrown);
						//$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
					},
					complete:function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
					}
				});
			}else if($gameMap._mapId){
				//console.log($gameMap);
				//console.log($gameMap._mapId);
				var gameMap_mapId = $gameMap._mapId;
				if(!AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId]){
					//AXY.AjaxNetStuff.Param.DanmuObj.Map.push($gameMap._mapId);
					AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId] = [];
					AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId][1] = 1;
				}
				//console.log(AXY.AjaxNetStuff.Param.DanmuObj);
				//try{console.log(AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId].join());}catch(e){console.log(e);}
				//try{console.log(AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId].join().match(/\d+/g).join());}catch(e){console.log(e);}
				$.ajax({
					url: AXY_AjaxDanmuURL,
					type: 'POST',
					dataType: 'json',
					data: {mapid: $gameMap._mapId, displayxmin: $gamePlayer._x-danmuXpoor, displayymin: $gamePlayer._y-danmuYpoor, displayxmax: $gamePlayer._x+danmuXpoor, displayymax: $gamePlayer._y+danmuYpoor, steps: $gameParty._steps, playtime: parseInt(Graphics.frameCount/60), usedid: AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId].join().match(/\d+/g).join()},
					success: function (data) {
						//console.log(data);
						if (data.status) {
							var obj = data.jsonstr;
							//console.log(obj);
							$.each(obj, function(index) {
								//console.log(obj[index]);
								//AXY.AjaxNetStuff.Param.DanmuObj.push(obj[index]);
								//$gameMap._axydanmu.push(obj[index]);
								AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId][obj[index].id] = obj[index].id;
								//console.log(obj[index].id);
								//console.log(AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId][obj[index].id]);
								
								setTimeout(function(){
									var danmuRndY = parseInt(Math.random()*(400-100+1)+100,10);
									//var danmuRndLifetime = parseInt(Math.random()*(8000-3000+1)+3000,10);
									var time = new Date((obj[index].timeline).replace(new RegExp("-","gm"),"/")).Format("hh:mm");
									//$.toaster({ message : obj[index].actorname+'['+time+']: '+obj[index].danmumsg, color:'white'});
									var id = 'danmu'+obj[index].id;
									//AXY_Text.show({id:id, msg:'"'+obj[index].actorname+'['+time+']: '+obj[index].danmumsg+'"', align:'topleft', x:0, y:0});
									AXY_Text.show({id:id, msg:'"'+obj[index].danmumsg+'"', align:'topleft', x:0, y:0});
									$('#AXYText'+id).css({'left':danmuStartX-$('#AXYText'+id)[0].clientWidth, 'top':danmuStartY+danmuRndY});
									$('#AXYText'+id).stop().show().animate({"left": danmuEndX}, AXY.AjaxNetStuff.Param.DanmuSpeed, '', function(){AXY_Text.remove(id);});
								}, AXY.AjaxNetStuff.Param.DanmuInterval*index);
							});
							
							//console.log($gameMap);
							//obj.reverse();
							//console.log(AXY.AjaxNetStuff.Param.DanmuObj.Map[$gameMap._mapId].join().match(/\d+/g).join());
							//console.log(AXY.AjaxNetStuff.Param.DanmuObj);
							
						} else{
							//console.log(data);
							//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
						};
					},
					error:function (XMLHttpRequest, textStatus, errorThrown) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//console.log(errorThrown);
						//$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
					},
					complete:function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
					}
				});
			}
		}, 30000);
		}
		catch(e){
			console.log(e);
		}
}

//ajax chat
if(AXY.AjaxNetStuff.Param.EnableChat){
	try{
	//display html first
	var AXYAjaxChatTemplate = 
					'<div class="AXYAjaxChat" id="AXYAjaxChat">' +
						'<table class="AXYAjaxChatTable" border="1">'+
						'' +
					'</table><table class="" border="1">'+
						'<tr><td><input type="text" class="AXYAjaxChatInput" id="AXYAjaxChatInput" placeholder="输入聊天内容" />' +
						'<input type="button" class="AXYAjaxChatButton" id="AXYAjaxChatButtonUse" value="发送" />' +
						'<input type="button" class="AXYAjaxChatButton" id="AXYAjaxChatButtonMove" value="移动" />' +
						'<input type="button" class="AXYAjaxChatButton" id="AXYAjaxChatButtonClose" value="关闭" /></td></tr>' +
					'</table></div><div class="AXYAjaxChatButtonImg"><img src="img/pictures/Arrow6.png" class="AXYAjaxChatOpen"></div>';
	var AXYAjaxChatStyleCss = 
			".AXYAjaxChat{position:fixed;top:0;left:0;z-index:"+
			AXY.AjaxNetStuff.Param.zIndex+";width:"+
			AXY.AjaxNetStuff.Param.Width+"px;height:"+
			AXY.AjaxNetStuff.Param.Height+"px;font-size:"+
			AXY.AjaxNetStuff.Param.fontsize+"px;color:"+
			AXY.AjaxNetStuff.Param.TextColor+";background-color:"+
			AXY.AjaxNetStuff.Param.backgroundcolor+";opacity:"+
			AXY.AjaxNetStuff.Param.opacity+";display:none;overflow-y:auto;}"+
			'.AXYAjaxChat .AXYAjaxChatInput{margin-left:2%;padding-left:3px;text-align:left;width:45%;height:50px;imeMode:active}'+
			'.AXYAjaxChat .AXYAjaxChatButton,.AXYAjaxChat .AXYAjaxChatInput{position:relative;outline:0;border:1px solid #fff;background-color:rgba(0,0,0,0.4);color:#fff;font-size:24px;}'+
			'.AXYAjaxChat .AXYAjaxChatButton{top:0;z-index:10000;margin-left:2%;width:15%;height:3pc;cursor:pointer}'+
			'.AXYAjaxChatButtonImg{position:fixed;z-index:10000;margin:auto;left:-'+
			AXY.AjaxNetStuff.Param.ImgWidth+'px;right:0;top:0;bottom:0;text-align:center;pointer-events:none;}.AXYAjaxChatButtonImg img{width:'+
			AXY.AjaxNetStuff.Param.ImgWidth+'px;height:'+
			AXY.AjaxNetStuff.Param.ImgHeight+'px;opacity:'+
			AXY.AjaxNetStuff.Param.ImgOpacity+';pointer-events:auto;}'+
			'.AXYAjaxChat .AXYAjaxChatTable{background-color:#000000;background-color:rgba(0,0,0,0.5);width:100%;display:none;padding:5px 30px;text-stroke:1px red;text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;border-collapse:collapse}';

	$('body').append(AXYAjaxChatTemplate);
	$('#AXYAjaxChat').append('<style type="text/css">'+AXYAjaxChatStyleCss+'</style>');
	
	var AXY_AjaxChatURL = AXY.AjaxNetStuff.Param.URL.replace('zhongchou','rmmvgame').replace('product','rmmvgamechat');
	var lasttime;
	
	//then bind action
	var AXY_AjaxChat = {
		show: function () {
			if(!AXY.AjaxNetStuff.Param.Loggedin){
				$.toaster({ message : '请先登录', color:'white'});
				return;
			}
			
			$('.AXYAjaxChatOpen').hide();
			$('#AXYAjaxChat').stop().show().animate({"height": "300px"}, "normal");
			$('.AXYAjaxChatTable').stop().show().animate({"height": "250px"}, "normal");
			//$gameSystem.setTouchMoveEnabled(false);
			//$('#AXYAjaxChatButtonMove').val("移动");
			if($('#AXYAjaxChatButtonMove').val() == '禁止'){
				$gameSystem.setTouchMoveEnabled(true);
				$('#AXYAjaxChatButtonMove').val("禁止");
			}
			else{
				$gameSystem.setTouchMoveEnabled(false);
				$('#AXYAjaxChatButtonMove').val("移动");	
			}
			$('#AXYAjaxChatInput').focus();
			var css =
			{
				'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
			};
			$('#AXYAjaxChatInput').css(css);
			$('.AXYAjaxChatButton').css(css);
			
			$('#AXYAjaxChatInput').keydown(function (e) {
				if (e.keyCode == 8) {
					var _name = this.value.slice(0, this.value.length - 1);
					this.value = _name;
				}
			}); 
			$('#AXYAjaxChatInput').unbind('click touchend').bind('click touchend',function () {
				$('#AXYAjaxChatInput').focus();
			}); 
			//console.log($('#AXYAjaxChatInput'));
			$('#AXYAjaxChatInput').keydown(function (e) {
				if (e.keyCode == 13) {
					$('#AXYAjaxChatButtonUse').click();
				}
			}); 
			$('#AXYAjaxChatButtonUse').unbind('click touchend').bind('click touchend',function() {
				if($('#AXYAjaxChatButtonUse')[0].disabled){
					//console.log($('#AXYAjaxChatButtonUse')[0].disabled);
					return;
				}
				//console.log($('#AXYAjaxChatButtonUse'));
				//console.log($('#AXYAjaxChatButtonUse')[0].disabled);

				$('#AXYAjaxChatButtonUse').attr("disabled", true);
				$('#AXYAjaxChatButtonUse').val("sending");
				//console.log($('#AXYAjaxChatButtonUse'));
				//console.log(typeof($('#AXYAjaxChatButtonUse')[0].disabled));
				//return;
				var inputchat = $('#AXYAjaxChatInput').val();
				inputchat = inputchat.replace(/<\/?[^>]*>/gim,"");//去掉所有的html标记
				inputchat = inputchat.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
				inputchat = inputchat.substr(0,20);//限制长度
				//inputchat = inputchat.replace(/\s/g,"");//去除文章中间空格
				//console.log($('#AXYAjaxChatInput'));
				//console.log($('#AXYAjaxChatInput').val());
				//console.log(inputcoupon);
				//console.log(str);
				//console.log(result);
				//console.log(ss);


				if(!inputchat){
					//console.log('代码不能为空');
					$.toaster({ message : '不能为空', color:'red'});
					$('#AXYAjaxChatButtonUse').attr("disabled", false);
					$('#AXYAjaxChatButtonUse').val("发送");
					return;
				}
				//$.toaster({ message : $gameActors._data[1]._name+': '+inputchat, color:'white'});
				var time = new Date().Format("hh:mm");
				$('.AXYAjaxChatTable').append('<tr><td>'+$gameActors._data[$gameParty._actors[0]]._name+'<span style="color:white;">['+time+']: </span>'+inputchat+'</td></tr>');
				$('#AXYAjaxChatInput').val('').focus();
				$('#AXYAjaxChatInput')[0].scrollIntoView(false);
				//else{
				
				if(!lasttime){
					lasttime = new Date().Format("yyyy-MM-dd hh:mm");
				}
				
				$.ajax({
					url: AXY_AjaxChatURL,
					type: 'POST',
					dataType: 'json',
					data: {sid: AXY.AjaxNetStuff.Param.sid, chatmsg: inputchat, actorname: $gameActors._data[$gameParty._actors[0]]._name, lasttime: lasttime},
					success: function (data) {
						//console.log(data);
						if (data.status) {
							var obj = data.jsonstr;
							lasttime = obj[0].timeline;
							obj.reverse();
							//console.log(obj);
							$.each(obj, function(index) {
								//console.log(obj[index]);
								var time = new Date((obj[index].timeline).replace(new RegExp("-","gm"),"/")).Format("hh:mm");
								//$.toaster({ message : obj[index].actorname+'['+time+']: '+obj[index].chatmsg, color:'white', timeout:10000});
								$('.AXYAjaxChatTable').append('<tr><td>'+obj[index].actorname+'<span style="color:white;">['+time+']: </span>'+obj[index].chatmsg+'</td></tr>');
							});
							$('#AXYAjaxChatInput')[0].scrollIntoView(false);
						} else{
							//console.log(data);
							//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
						};
						$('#AXYAjaxChatButtonUse').attr("disabled", false);
						$('#AXYAjaxChatButtonUse').val("发送");
					},
					error:function (XMLHttpRequest, textStatus, errorThrown) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//console.log(errorThrown);
						$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
						$('#AXYAjaxChatButtonUse').attr("disabled", false);
						$('#AXYAjaxChatButtonUse').val("发送");
					},
					complete:function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
						$('#AXYAjaxChatButtonUse').attr("disabled", false);
						$('#AXYAjaxChatButtonUse').val("发送");
					}
				});
				//}
			});
			$('#AXYAjaxChatButtonMove').unbind('click touchstart').bind('click touchstart',function() {
				if($('#AXYAjaxChatButtonMove').val() == '禁止'){
					$gameSystem.setTouchMoveEnabled(false);
					$('#AXYAjaxChatButtonMove').val("移动");
				}
				else{
					$gameSystem.setTouchMoveEnabled(true);
					$('#AXYAjaxChatButtonMove').val("禁止");	
				}
			});
			$('#AXYAjaxChatButtonClose').unbind('click touchstart').bind('click touchstart',function() {
				AXY_AjaxChat.hide();
			});
		},
		hide: function () {
			$('#AXYAjaxChat').stop().animate({"height": "0"}, "normal", function() {
				$(this).hide();
				//$(this).remove();
				$gameSystem.setTouchMoveEnabled(true);
				$('.AXYAjaxChatOpen').show();
			});
		}
	};
	//last bind the click
	$('.AXYAjaxChatOpen').unbind('click touchend').bind('click touchend',function () {
		AXY_AjaxChat.show();
	});
	
	//auto fetch chat
	setInterval(function(){
		if(!$gameParty){
			return;
		}
		if(!AXY.AjaxNetStuff.Param.Loggedin){
			return;
		}
		if(!lasttime){
			lasttime = new Date().Format("yyyy-MM-dd hh:mm:ss");
		}
		//console.log(lasttime);

		$.ajax({
			url: AXY_AjaxChatURL,
			type: 'POST',
			dataType: 'json',
			data: {sid: AXY.AjaxNetStuff.Param.sid, chatmsg: '', actorname: '', lasttime: lasttime},
			success: function (data) {
				//console.log(data);
				if (data.status) {
					var obj = data.jsonstr;
					lasttime = obj[0].timeline;
					obj.reverse();
					//console.log(obj);
					$.each(obj, function(index) {
						//console.log(obj[index]);
						var time = new Date((obj[index].timeline).replace(new RegExp("-","gm"),"/")).Format("hh:mm");
						$.toaster({ message : obj[index].actorname+'['+time+']: '+obj[index].chatmsg, color:'white'});
						$('.AXYAjaxChatTable').append('<tr><td>'+obj[index].actorname+'<span style="color:white;">['+time+']: </span>'+obj[index].chatmsg+'</td></tr>');
					});
					$('#AXYAjaxChatInput')[0].scrollIntoView(false);
				} else{
					//console.log(data);
					//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
					lasttime = new Date().Format("yyyy-MM-dd hh:mm:ss");
				};
				$('#AXYAjaxChatButtonUse').attr("disabled", false);
				$('#AXYAjaxChatButtonUse').val("发送");
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {
				//console.log(XMLHttpRequest);
				//console.log(textStatus);
				//console.log(errorThrown);
				//$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
				$('#AXYAjaxChatButtonUse').attr("disabled", false);
				$('#AXYAjaxChatButtonUse').val("发送");
			},
			complete:function (XMLHttpRequest, textStatus) {
				//console.log(XMLHttpRequest);
				//console.log(textStatus);
				//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
				$('#AXYAjaxChatButtonUse').attr("disabled", false);
				$('#AXYAjaxChatButtonUse').val("发送");
				//var time = new Date().Format("hh:mm")
				//$.toaster({ message : $gameActors._data[1]._name+'['+time+']: '+inputchat, color:'white', fontsize: 12});
			}
		});
	}, 30000);
	}
	catch(e){
		console.log(e);
	}
}

//ajax cloud save
if (AXY.AjaxNetStuff.Param.EnableCloudSave) {
	//=============================================================================
	// ** Window MenuCommand
	//=============================================================================	

	//==============================
	// * make Command List
	//==============================
	AXY.AjaxNetStuff.Alias.addOriginalCommandsCloudSave = Window_MenuCommand.prototype.addOriginalCommands;
	Window_MenuCommand.prototype.addOriginalCommands = function() {
		AXY.AjaxNetStuff.Alias.addOriginalCommandsCloudSave.call(this);
		this.addCommand(AXY.AjaxNetStuff.Param.CloudSaveText, 'cloud_save', true);
	};
		
	//=============================================================================
	// ** Scene Menu
	//=============================================================================	

	//==============================
	// * create Command Window
	//==============================
	AXY.AjaxNetStuff.Alias.createCommandWindowCloudSave = Scene_Menu.prototype.createCommandWindow;
	Scene_Menu.prototype.createCommandWindow = function() {
		AXY.AjaxNetStuff.Alias.createCommandWindowCloudSave.call(this); 
		this._commandWindow.setHandler('cloud_save',      this.commandCloudSave.bind(this));
		/*if (Imported.MOG_TimeSystem && Moghunter.timeWindow_menu) {	
			this._commandWindow.height -= this._commandWindow.itemHeight();
		};*/
	};

	//==============================
	// * Cloud Save
	//==============================
	Scene_Menu.prototype.commandCloudSave = function() {
		AXY_AjaxCloudSave.show();
		// Close option window
		SceneManager.pop();	
	};
}

var AXY_AjaxCloudSave = {
	show: function () {
		if(!AXY.AjaxNetStuff.Param.Loggedin){
			$.toaster({ message : '请先登录', color:'white'});
			return;
		}
		
		var AXYAjaxCloudSaveTemplate = 
				'<div class="AXYAjaxCloudSave" id="AXYAjaxCloudSave">' +
					'<div class="AXYAjaxCloudSaveBG"></div>' +
					'<input type="button" class="AXYAjaxCloudSaveButton" id="AXYAjaxCloudSaveButtonUse" value="保存" />' +
					'<input type="button" class="AXYAjaxCloudSaveButton" id="AXYAjaxCloudSaveButtonClear" value="读取" />' +
					'<input type="button" class="AXYAjaxCloudSaveButton" id="AXYAjaxCloudSaveButtonClose" value="关闭" />' +
				'</div>';
		var AXYAjaxCloudSaveStyleCss = 
				'.AXYAjaxCloudSave{position:fixed;top:10px;left:.5%;z-index:10000;display:none;margin:0 auto;width:0%;height:80px;text-align:center;}'+
				'.AXYAjaxCloudSave .AXYAjaxCloudSaveBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.5}'+
				'.AXYAjaxCloudSave .AXYAjaxCloudSaveButton{margin:15px 0;text-align:center;width:30%;height:50px;imeMode:active}'+
				'.AXYAjaxCloudSave .AXYAjaxCloudSaveButton,.AXYAjaxCloudSave .AXYAjaxCloudSaveInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.4);color:#fff;font-size:24px;}'+
				'.AXYAjaxCloudSave .AXYAjaxCloudSaveButton{top:0;z-index:10000;margin-left:2%;width:10%;height:3pc;word-spacing:20px;cursor:pointer}';
		var css =
				{
					'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
				};
		$('body').append(AXYAjaxCloudSaveTemplate);
		$('#AXYAjaxCloudSave').append('<style type="text/css">'+AXYAjaxCloudSaveStyleCss+'</style>');
		$('.AXYAjaxCloudSaveButton').css(css);
		//console.log(css);
		//console.log($gameParty);
		//console.log($gameSystem);
		//console.log(TextManager.currencyUnit);

		$('#AXYAjaxCloudSave').stop().show().animate({"width": "98%"}, "normal");
		$gameSystem.setTouchMoveEnabled(false);
		
		//save button
		$('#AXYAjaxCloudSaveButtonUse').unbind('click touchend').bind('click touchend',function() {
			AXY_AjaxCloudSave.hide();
			/*if($('#AXYAjaxCloudSaveButtonUse')[0].disabled){
				//console.log($('#AXYAjaxCloudSaveButtonUse')[0].disabled);
				return;
			}*/
			//console.log($('#AXYAjaxCloudSaveButtonUse'));
			//console.log($('#AXYAjaxCloudSaveButtonUse')[0].disabled);

			//$('#AXYAjaxCloudSaveButtonUse').attr("disabled", true);
			//$('#AXYAjaxCloudSaveButtonUse').val("saving");
			//console.log($('#AXYAjaxCloudSaveButtonUse'));
			//console.log(AXY.AjaxNetStuff.Param.sid);
			//alert(AXY.AjaxNetStuff.Param.sid);

			$gameSystem.onBeforeSave();
			var saveinfo = LZString.compressToBase64(LZString.compressToBase64(JsonEx.stringify(DataManager.makeSavefileInfo())));
			var savedata = LZString.compressToBase64(LZString.compressToBase64(JsonEx.stringify(DataManager.makeSaveContents())));
			//console.log(saveinfo);
			//console.log(savedata);
			if (savedata.length >= 200000) {
				console.log("Save data too big");
			};
		
			$.toaster({ message : '正在保存至云端...', color:'white'});
			var AXY_AjaxCloudSaveURL = AXY.AjaxNetStuff.Param.URL.replace('zhongchou','rmmvgame').replace('product','rmmvgamecloudsave');
			$.ajax({
				url: AXY_AjaxCloudSaveURL,
				type: 'POST',
				dataType: 'json',
				data: {sid: AXY.AjaxNetStuff.Param.sid, saveinfo: saveinfo, savedata: savedata},
				success: function (data) {
					//console.log(data);
					//alert(data.sid);
					//alert(data.uid);
					//alert(data.ssid);
					if (data.status) {
						$.toaster({ message : "保存成功！"});
						setTimeout(function(){
							$.toaster({ message : "云端存储成本较高，众筹游戏《"+data.gamename+"》诚邀您参与众筹！"});
						}, 3000);
					} else{
						//console.log(data);
						$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
					};
					//$('#AXYAjaxCloudSaveButtonUse').attr("disabled", false);
					//$('#AXYAjaxCloudSaveButtonUse').val("保存");
				},
				error:function (XMLHttpRequest, textStatus, errorThrown) {
					console.log(XMLHttpRequest);
					console.log(textStatus);
					console.log(errorThrown);
					$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
					//$('#AXYAjaxCloudSaveButtonUse').attr("disabled", false);
					//$('#AXYAjaxCloudSaveButtonUse').val("保存");
				},
				complete:function (XMLHttpRequest, textStatus) {
					console.log(XMLHttpRequest);
					console.log(textStatus);
					$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'gray'});
					//$('#AXYAjaxCloudSaveButtonUse').attr("disabled", false);
					//$('#AXYAjaxCloudSaveButtonUse').val("保存");
				}
			});
		});
		
		//load button
		$('#AXYAjaxCloudSaveButtonClear').unbind('click touchstart').bind('click touchstart',function() {
			AXY_AjaxCloudSave.hide();
			$.toaster({ message : '返回标题页面，请勿操作...', color:'white'});
			SceneManager.push(Scene_Title);

			/*if($('#AXYAjaxCloudSaveButtonClear')[0].disabled){
				//console.log($('#AXYAjaxCloudSaveButtonUse')[0].disabled);
				return;
			}*/
			//console.log($('#AXYAjaxCloudSaveButtonUse'));
			//console.log($('#AXYAjaxCloudSaveButtonUse')[0].disabled);

			//$('#AXYAjaxCloudSaveButtonClear').attr("disabled", true);
			//$('#AXYAjaxCloudSaveButtonClear').val("loading");

			setTimeout(function()
			{
				$.toaster({ message : '正在从云端读取...', color:'white'});
				var AXY_AjaxCloudLoadURL = AXY.AjaxNetStuff.Param.URL.replace('zhongchou','rmmvgame').replace('product','rmmvgamecloudload');
				$.ajax({
					url: AXY_AjaxCloudLoadURL,
					type: 'POST',
					dataType: 'json',
					data: {sid: AXY.AjaxNetStuff.Param.sid},
					success: function (data) {
						//console.log(data);
						if (data.status) {
							try{
							$.toaster({ message : "读取成功！"});
							
							// Extract data from savegame
							console.log("Extract save contents");
							DataManager.createGameObjects();
							DataManager.extractSaveContents(JsonEx.parse(LZString.decompressFromBase64(LZString.decompressFromBase64(data.savedata))));
							//console.log(LZString.decompressFromBase64(data.savedata));
							//console.log(JsonEx.parse(LZString.decompressFromBase64(data.savedata)));

							// Move player
							console.log("Reserve transfer player");
							$gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y);
							$gamePlayer.requestMapReload();

							// Initialize map
							console.log("Goto Scene_Map");
							$gameSystem.onAfterLoad();
							Scene_Load.prototype.reloadMapIfUpdated.call(null);
							SceneManager.goto(Scene_Map);
							if (SceneManager._scene) { 
								SceneManager._scene.fadeOutAll(); 
							};

							/*
							//exec common event
							if (PROPERTY.GAME.AFTERLOADEVENT!=0) {
								debug(LOGGING.ALL,"reserveCommonEvent: "+PROPERTY.GAME.AFTERLOADEVENT);
								$gameTemp.reserveCommonEvent(PROPERTY.GAME.AFTERLOADEVENT);
							};*/

							setTimeout(function(){
								$.toaster({ message : "云端存储成本较高，众筹游戏《"+data.gamename+"》诚邀您参与众筹！"});
								$gameSystem.setTouchMoveEnabled(true);
							}, 3000);
							}
							catch(e){
								console.log(e);
							}
						} else{
							console.log(data);
							$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
						};
						//$('#AXYAjaxCloudSaveButtonClear').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonClear').val("读取");
					},
					error:function (XMLHttpRequest, textStatus, errorThrown) {
						console.log(XMLHttpRequest);
						console.log(textStatus);
						console.log(errorThrown);
						$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
						//$('#AXYAjaxCloudSaveButtonClear').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonClear').val("读取");
					},
					complete:function (XMLHttpRequest, textStatus) {
						console.log(XMLHttpRequest);
						console.log(textStatus);
						$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'gray'});
						//$('#AXYAjaxCloudSaveButtonClear').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonClear').val("读取");
					}
				});
			}, 3000);
		});
		
		//close button
		$('#AXYAjaxCloudSaveButtonClose').unbind('click touchstart').bind('click touchstart',function() {
			AXY_AjaxCloudSave.hide();
		});
	},
	hide: function () {
		$('#AXYAjaxCloudSave').stop().animate({"width": "0"}, "normal", function() {
			$(this).hide();
			$(this).remove();
			try{
				$gameSystem.setTouchMoveEnabled(true);
			}
			catch(e){
				console.log(e);
			}
		});
	}
};

//ajax top 10 list
if(AXY.AjaxNetStuff.Param.EnableTopList){
	try{
	//display html first
	var temp = AXY.AjaxNetStuff.Param.URL.split("/");
	var AXY_LoginURL = temp[0]+'//'+temp[2]+'/Login';
	//console.log(AXY_LoginURL);
	var AXYAjaxTopListEntity;
	var AXYAjaxTopListTemplate = 
			"<style type=\"text/css\">.AXYAjaxTopList{position:fixed;"+
			String(AXY.AjaxNetStuff.Parameters['TopListHAlign'])+":"+
			AXY.AjaxNetStuff.Param.X+"px;"+
			String(AXY.AjaxNetStuff.Parameters['TopListVAlign'])+":"+
			AXY.AjaxNetStuff.Param.Y+"px;z-index:"+
			AXY.AjaxNetStuff.Param.zIndex+";width:"+
			AXY.AjaxNetStuff.Param.Width+"px;height:"+
			AXY.AjaxNetStuff.Param.Height+"px;font-size:"+
			AXY.AjaxNetStuff.Param.fontsize+"px;color:"+
			AXY.AjaxNetStuff.Param.TextColor+";background-color:"+
			AXY.AjaxNetStuff.Param.backgroundcolor+";opacity:"+
			AXY.AjaxNetStuff.Param.opacity+";pointer-events:none;}.AXYAjaxTopList th{text-align:center;}.AXYAjaxTopList .AXYAjaxTopListTable{background-color:#000000;background-color:rgba(0,0,0,0.5);width:100%;height:100%;display:none;padding:5px 30px;text-stroke:1px red;text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;text-align:center;border-collapse:collapse}.AXYAjaxTopListButton{color:#ff0;text-align:"+
			AXY.AjaxNetStuff.Param.TextAlign+"}.AXYAjaxTopListButton img{width:"+
			AXY.AjaxNetStuff.Param.ImgWidth+"px;height:"+
			AXY.AjaxNetStuff.Param.ImgHeight+"px;opacity:"+
			AXY.AjaxNetStuff.Param.ImgOpacity+";pointer-events:auto;}.AXYAjaxTopListLoginButton a,a:hover,a:link,a:visited,a:active{margin:0 5px 0 10px;opacity:"+
			AXY.AjaxNetStuff.Param.LoginButtonOpacity+";color:"+
			AXY.AjaxNetStuff.Param.LoginButtonColor+";text-stroke:1px red;text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;text-decoration:none;font-size:"+
			AXY.AjaxNetStuff.Param.LoginButtonFontSize+"px;pointer-events:auto;}<\/style><div class=\"AXYAjaxTopList\"><div class=\"AXYAjaxTopListBG\"></div><table class=\"AXYAjaxTopListTable\" border=\"1\"><\/table><div class=\"AXYAjaxTopListButton\"><img src=\"img/pictures/Arrow2.png\" class=\"AXYAjaxTopListArrowOpen\"><img src=\"img/pictures/Arrow8.png\" class=\"AXYAjaxTopListArrowClose\" style=\"display:none\"><a href=\""+
			'javascript:;'+"\" target=\"_blank\" class=\"AXYAjaxTopListLoginButton\">"+
			AXY.AjaxNetStuff.Param.LoginButtonText+"<\/a><\/div><\/div>";
	var AXYAjaxTopListTableTemplate = 
			"<thead><tr><th>"+
			AXY.AjaxNetStuff.Param.LastestText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.ActorText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.PlayerCEText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.TimeOLText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.LevelText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.GoldText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.StepsText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.PlayTimeText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.SaveTimesText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.BattleTimesText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.VictoryTimesText+"<\/th><th>"+
			AXY.AjaxNetStuff.Param.EscapeTimesText+"<\/th><\/tr><\/thead><tbody class=\"AXYAjaxTopListTbody\"><tr><td colspan=\"12\">"+
			AXY.AjaxNetStuff.Param.LoadingText+"<\/td><\/tr><\/tbody>";
	var AXYAjaxTopListButtonTemplate = 
			AXY.AjaxNetStuff.Param.LoginButtonText;
	var AXYAjaxTopListTemplateCss =
			{
				'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
			};
	AXYAjaxTopListEntity = $('body').append(AXYAjaxTopListTemplate);
	$('.AXYAjaxTopList').css('font-family', $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont');
	$('.AXYAjaxTopListTable').html(AXYAjaxTopListTableTemplate);
	$('.AXYAjaxTopListLoginButton').text(AXYAjaxTopListButtonTemplate);
	$('.AXYAjaxTopListLoginButton').unbind('click touchstart').bind('click touchstart',function() {
		//$.toaster({ message : '手机版暂不支持登录', color:'red'});
		
		AXY_AjaxLogin.show();
	});
	
	//console.log($gameActors);
	//console.log(AXYAjaxTopListTemplateCss);
	var AXY_AjaxTopListURL = AXY.AjaxNetStuff.Param.URL.replace('zhongchou','rmmvgame').replace('product','rmmvgametoplist');
	var postjsonstr;
	
	setInterval(function()
	{
		if(!$gameParty){
			return;
		}
		if(!$gameActors){
			return;
		}
		//console.log($gameActors._data[$gameActors._data.length-1]);
		//var gameActors_data = $gameActors._data[1] ? $gameActors._data[1] : $gameActors._data[$gameActors._data.length-1];
		
		/*if($gameParty._gold>500000 && $gameParty._steps<10000 && $gameSystem._framesOnSave<2160000){
			postjsonstr = '';
		}else{*/
		//console.log($gameParty);
		//console.log($gameActors);
		/*var playerce = 0;
		$.each($gameParty._actors, function(index) {
			var aid = $gameParty._actors[index];
			var aobj = $gameActors._data[aid];
			//console.log(aobj);
			playerce += aobj.agi;
			playerce += aobj.atk;
			playerce += aobj.cev;
			playerce += aobj.cnt;
			playerce += aobj.cri;
			playerce += aobj.def;
			playerce += aobj.eva;
			playerce += aobj.exr;
			playerce += aobj.fdr;
			playerce += aobj.grd;
			playerce += aobj.hit;
			playerce += aobj.hp;
			playerce += aobj.hrg;
			playerce += aobj.level;
			playerce += aobj.luk;
			playerce += aobj.mat;
			playerce += aobj.mcr;
			playerce += aobj.mdf;
			playerce += aobj.mdr;
			playerce += aobj.mev;
			playerce += aobj.mhp;
			playerce += aobj.mmp;
			playerce += aobj.mp;
			playerce += aobj.mrf;
			playerce += aobj.mrg;
			playerce += aobj.pdr;
			playerce += aobj.pha;
			playerce += aobj.rec;
			playerce += aobj.tcr;
			playerce += aobj.tgr;
			playerce += aobj.tp;
			playerce += aobj.trg;
		});*/
		//console.log(playerce);
		//console.log(AXY.AjaxNetStuff.Param.TimeOL);
			postjsonstr = JSON.stringify({
							gold: $gameParty._gold, 
							steps: $gameParty._steps, 
							name: $gameActors._data[$gameParty._actors[0]]._name, 
							level: $gameActors._data[$gameParty._actors[0]]['level'], 
							battlecount: $gameSystem._battleCount, 
							escapecount: $gameSystem._escapeCount, 
							wincount: $gameSystem._winCount, 
							savecount: $gameSystem._saveCount, 
							playtime: parseInt($gameSystem._framesOnSave/60), 
							playerce: AXY.AjaxNetStuff.Param.PlayerCE,
							/*sid: AXY.AjaxNetStuff.Param.sid,*/
						});
		//}
		$.ajax({
			url: AXY_AjaxTopListURL,
			type: 'POST',
			dataType: 'json',
			data: {sid: AXY.AjaxNetStuff.Param.sid, jsonstr:postjsonstr, timeol: 60},
			success: function (data) {
				//console.log(data);
				if (data.status) {
					//$('.AXYAjaxTopListTbody').empty();
					//console.log(data);
					var str = '';
					
					$.each(data['jsonstr'], function(index) {
						try{
						var obj1 = data['jsonstr'][index];
						//console.log(obj1.jsonstr);
						var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
						//console.log(obj);
						var time1 = new Date((obj1.lasttime).replace(new RegExp("-","gm"),"/")).Format("hh:mm"); 
						str += '<tr>';
						str += '<td>' + time1 + '</td>';
						if(obj1.userid != 0){
							str += '<td>' + obj.name + '</td>';
							$loggedin_param=true
						}else{
							str += '<td>游客: ' + obj.name + '</td>';
						}
						
						str += '<td>' + (obj.playerce == undefined ? '' : obj.playerce) + '</td>';
						str += '<td>' + formatHours(obj1.onlinetime) + '</td>';
						str += '<td>' + obj.level + '</td>';
						str += '<td>' + Math.ceil(obj.gold/10000) + '万</td>';
						str += '<td>' + obj.steps + '</td>';
						str += '<td>' + formatHours(obj.playtime) + '</td>';
						str += '<td>' + obj.savecount + '</td>';
						str += '<td>' + obj.battlecount + '</td>';
						str += '<td>' + obj.wincount + '</td>';
						str += '<td>' + obj.escapecount + '</td>';
						str += '</tr>';
						
						/*if(index == 0){
							if(obj.timeol == 0){
								AXY.AjaxNetStuff.Param.TimeOL = 60;
							}
							else{
								AXY.AjaxNetStuff.Param.TimeOL = obj.timeol;
							}
						}*/
						}catch(e){}
					});
					str += "<tr><td colspan=12>众筹游戏《"+data.gamename+"》共有"+data.count+"个玩家</td></tr>";
					$('.AXYAjaxTopListTbody').html(str);
					if(data.uid != null){
						$('.AXYAjaxTopListLoginButton').css("display", 'none');
						AXY.AjaxNetStuff.Param.Loggedin = true;
					}
					
				} else{
					//console.log(data);
				};
			},
			error:function (jqXHR) {
				//console.log(jqXHR);
			}
		});
	}, 60000);
	
	//then bind action
	var AXY_AjaxTopList = {
		show: function () {
			$('.AXYAjaxTopList').css('font-family', $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont');
			$('.AXYAjaxTopListTable').html(AXYAjaxTopListTableTemplate);
			$('.AXYAjaxTopListLoginButton').text(AXYAjaxTopListButtonTemplate);
			$('.AXYAjaxTopListTable').stop().show().animate({"height": "98%"}, "normal");
		},
		hide: function () {
			$('.AXYAjaxTopListTable').stop().animate({"height": "0"}, "normal", function() {
				$(this).hide();
				//$(this).remove();
			});
		}
	};

	//last bind the click
	$('.AXYAjaxTopListArrowOpen').unbind('click touchstart').bind('click touchstart',function() {
		if(!$gameParty){
			$.toaster({ message : "Not Ready!"});
			return;
		}
		//AXY_AjaxLoginConnect2RMMVOL.Connect2RMMVOL('', '');
		//console.log($gameActors);

		AXY_AjaxTopList.show();
		$('.AXYAjaxTopListArrowOpen').hide();
		$('.AXYAjaxTopListArrowClose').show();
		//$('.AXYAjaxTopListTbody').empty();
		$('.AXYAjaxTopListTbody').html("<tr><td colspan=12>"+AXY.AjaxNetStuff.Param.LoadingText+"</td></tr>");
		/*if($gameParty._gold>500000 && $gameParty._steps<10000 && $gameSystem._framesOnSave<2160000){
			postjsonstr = '';
		}else{*/
		var playerce = 0;
		$.each($gameParty._actors, function(index) {
			var aid = $gameParty._actors[index];
			var a = $gameActors._data[aid];
			//console.log(a);
			//console.log(a.hit);
			//console.log($game_troop.members.size);
			//console.log(aobj);
			/*playerce += aobj.agi;
			playerce += aobj.atk;
			playerce += aobj.cev;
			playerce += aobj.cnt;
			playerce += aobj.cri;
			playerce += aobj.def;
			playerce += aobj.eva;
			playerce += aobj.exr;
			playerce += aobj.fdr;
			playerce += aobj.grd;
			playerce += aobj.hit;
			playerce += aobj.hp;
			playerce += aobj.hrg;
			playerce += aobj.level;
			playerce += aobj.luk;
			playerce += aobj.mat;
			playerce += aobj.mcr;
			playerce += aobj.mdf;
			playerce += aobj.mdr;
			playerce += aobj.mev;
			playerce += aobj.mhp;
			playerce += aobj.mmp;
			playerce += aobj.mp;
			playerce += aobj.mrf;
			playerce += aobj.mrg;
			playerce += aobj.pdr;
			playerce += aobj.pha;
			playerce += aobj.rec;
			playerce += aobj.tcr;
			playerce += aobj.tgr;
			playerce += aobj.tp;
			playerce += aobj.trg;*/
			
			playerce += eval(AXY.AjaxNetStuff.Param.PlayerCEFormula);
		});
		AXY.AjaxNetStuff.Param.PlayerCE = parseInt(playerce);
			postjsonstr = JSON.stringify({
							gold: $gameParty._gold, 
							steps: $gameParty._steps, 
							name: $gameActors._data[$gameParty._actors[0]]._name, 
							level: $gameActors._data[$gameParty._actors[0]]['level'], 
							battlecount: $gameSystem._battleCount, 
							escapecount: $gameSystem._escapeCount, 
							wincount: $gameSystem._winCount, 
							savecount: $gameSystem._saveCount, 
							playtime: parseInt($gameSystem._framesOnSave/60), 
							playerce: AXY.AjaxNetStuff.Param.PlayerCE,
							/*sid: AXY.AjaxNetStuff.Param.sid,*/
						});
		//}
		$.ajax({
			url: AXY_AjaxTopListURL,
			type: 'POST',
			dataType: 'json',
			data: {sid: AXY.AjaxNetStuff.Param.sid, jsonstr:postjsonstr},
			success: function (data) {
				if (data.status) {
					$('.AXYAjaxTopListTbody').empty();
					//console.log(data);
					
					$.each(data['jsonstr'], function(index) {
						try{
						var obj1 = data['jsonstr'][index];
						//console.log(obj1.jsonstr);
						var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
						//console.log(obj);
						var time1 = new Date((obj1.lasttime).replace(new RegExp("-","gm"),"/")).Format("hh:mm"); 
						var str = '<td>' + time1 + '</td>';
						if(obj1.userid != 0){
							str += '<td>' + obj.name + '</td>';
						}else{
							str += '<td>游客: ' + obj.name + '</td>';
						}
						//obj.timeol = obj.timeol == null ? obj.playtime : obj.timeol;
						
						str += '<td>' + (obj.playerce == undefined ? '' : obj.playerce) + '</td>';
						str += '<td>' + formatHours(obj1.onlinetime) + '</td>';
						str += '<td>' + obj.level + '</td>';
						str += '<td>' + Math.ceil(obj.gold/10000) + '万</td>';
						str += '<td>' + obj.steps + '</td>';
						str += '<td>' + formatHours(obj.playtime) + '</td>';
						str += '<td>' + obj.savecount + '</td>';
						str += '<td>' + obj.battlecount + '</td>';
						str += '<td>' + obj.wincount + '</td>';
						str += '<td>' + obj.escapecount + '</td>';
						
						/*if(index == 0){
							if(obj.timeol == 0){
								AXY.AjaxNetStuff.Param.TimeOL = 60;
							}
							else{
								AXY.AjaxNetStuff.Param.TimeOL = obj.timeol;
							}
						}*/
						
						$('.AXYAjaxTopListTbody').append("<tr>"+str+"</tr>");
						}catch(e){console.log(e)}
					});
					$('.AXYAjaxTopListTbody').append("<tr><td colspan=12>众筹游戏《"+data.gamename+"》共有"+data.count+"个玩家</td></tr>");
					
					if(data.uid != null){
						$('.AXYAjaxTopListLoginButton').css("display", 'none');
						
						//logingift
						if(AXY.AjaxNetStuff.Param.EnableLoginGift){
							if(AXY.AjaxNetStuff.Param.Loggedin){
								return;
							}
							
							//console.log($gamePlayer);
							//console.log($gameMap);
							if(!$gameMap._mapId){
								return;
							}
							var arrLoginGift = String(AXY.AjaxNetStuff.Parameters['LoginGift']).split(';');
							console.log(arrLoginGift);
							$.each(arrLoginGift, function(index) {
								var arrLoginGiftItem = arrLoginGift[index].split(':');
								console.log(arrLoginGiftItem);
								arrLoginGiftItem[0] = parseInt(arrLoginGiftItem[0]);
								arrLoginGiftItem[1] = parseInt(arrLoginGiftItem[1]);
								arrLoginGiftItem[2] = parseInt(arrLoginGiftItem[2]);
								switch(arrLoginGiftItem[0]){
									case 0:
										$gameParty.gainGold(arrLoginGiftItem[2],0,0);
										if(!AXY.Toast.Param.DisplayGainGold){
											$.toaster({ message : "+"+arrLoginGiftItem[2]+TextManager.currencyUnit});
										}
										break;
									case 1:
										$gameParty.gainItem($dataItems[arrLoginGiftItem[1]],arrLoginGiftItem[2],0,0);
										if(!AXY.Toast.Param.DisplayGainItem){
											$.toaster({ message : "+"+arrLoginGiftItem[2]+$dataItems[arrLoginGiftItem[1]].name});
										}
										break;
									case 2:
										$gameParty.gainItem($dataWeapons[arrLoginGiftItem[1]], arrLoginGiftItem[2],0,0,0);
										if(!AXY.Toast.Param.DisplayGainItem){
											$.toaster({ message : "+"+arrLoginGiftItem[2]+$dataWeapons[arrLoginGiftItem[1]].name});
										}
										break;
									case 3:
										$gameParty.gainItem($dataArmors[arrLoginGiftItem[1]], arrLoginGiftItem[2],0,0,0);
										if(!AXY.Toast.Param.DisplayGainItem){
											$.toaster({ message : "+"+arrLoginGiftItem[2]+$dataArmors[arrLoginGiftItem[1]].name});
										}
										break;
									default:
										//console.log(typeof(obj[index].num));
										break;
								}
							});
							
							setTimeout(function()
							{
								$.toaster({ message : "众筹游戏《"+data.gamename+"》诚邀您参与众筹！"});
								//AXY_AjaxLogin.hide();
							}, 3000);
						}
						AXY.AjaxNetStuff.Param.Loggedin = true;
					}
				} else{
					console.log(data);
					$('.AXYAjaxTopListTbody').html("<tr><td colspan=12>"+data.info+data.error+"</td></tr>");
					//Silv.ItemLog.PluginCommand('axy.AjaxNetStuff', ['gold',123]);
					/*var args="itemlog gold 123".split(" ");
					var command =args.shift();
					Game_Interpreter.prototype.pluginCommand(command,args);*/
				};
			},
			error:function (jqXHR) {
				$('.AXYAjaxTopListTbody').html("<tr><td colspan=12>"+jqXHR.status+"</td></tr>");
				console.log(jqXHR);
			}
		});
	});
	$('.AXYAjaxTopListArrowClose').unbind('click touchstart').bind('click touchstart',function() {
		AXY_AjaxTopList.hide();
		$('.AXYAjaxTopListArrowOpen').show();
		$('.AXYAjaxTopListArrowClose').hide();
		
	});
	}
	catch(e){
		console.log(e);
	}
}

//ajax login
var AXY_AjaxLogin = {
	show: function () {
		var AXYAjaxLoginEntity;
		var AXYAjaxLoginTemplate = 
				'<div class="AXYAjaxLogin" id="AXYAjaxLogin">' +
					'<div class="AXYAjaxLoginBG"></div>' +
					'<input type="text" class="AXYAjaxLoginInput" id="AXYAjaxLoginInputName" placeholder="输入用户名" />' +
					'<input type="password" class="AXYAjaxLoginInput" id="AXYAjaxLoginInputPwd" placeholder="输入密码" />' +
					'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonUse" value="'+AXYAjaxTopListButtonTemplate+'" />' +
					'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonReg" value="还没账号？" />' +
					'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonClear" value="清空" />' +
					'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonClose" value="关闭" />' +
				'</div>';
		var AXYAjaxLoginStyleCss = 
				'.AXYAjaxLogin{position:fixed;top:10px;left:.5%;z-index:10000;display:none;margin:0 auto;width:0%;height:80px;text-align:center;}'+
				'.AXYAjaxLogin .AXYAjaxLoginBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.5}'+
				'.AXYAjaxLogin .AXYAjaxLoginInput{margin:15px 0;text-align:center;width:20%;height:50px;imeMode:active}'+
				'.AXYAjaxLogin .AXYAjaxLoginButton,.AXYAjaxLogin .AXYAjaxLoginInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.4);color:#fff;font-size:24px;}'+
				'.AXYAjaxLogin .AXYAjaxLoginButton{top:0;z-index:10000;margin-left:2%;width:10%;height:3pc;word-spacing:20px;cursor:pointer}';
		var css =
				{
					'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
				};
		AXYAjaxLoginEntity = $('body').append(AXYAjaxLoginTemplate);
		AXYAjaxLoginEntity = $('#AXYAjaxLogin').append('<style type="text/css">'+AXYAjaxLoginStyleCss+'</style>');
		$('#AXYAjaxLoginInputName').css(css);
		$('#AXYAjaxLoginInputPwd').css(css);
		$('.AXYAjaxLoginButton').css(css);
		//console.log(css);
		//console.log($gameParty);
		//console.log($gameSystem);
		//console.log(TextManager.currencyUnit);

		$('#AXYAjaxLogin').stop().show().animate({"width": "98%"}, "normal");
		
		try{
			$gameSystem.setTouchMoveEnabled(false);
		}
		catch(e){
			console.log(e);
		}
		$('#AXYAjaxLoginInputName').focus();

		$('#AXYAjaxLoginInputName').keydown(function (e) {
            if (e.keyCode == 8) {
				var _name = this.value.slice(0, this.value.length - 1);
				this.value = _name;
            }
        }); 
		$('#AXYAjaxLoginInputName').unbind('click touchend').bind('click touchend',function () {
            $('#AXYAjaxLoginInputName').focus();
        }); 
		$('#AXYAjaxLoginInputPwd').keydown(function (e) {
            if (e.keyCode == 8) {
				var _name = this.value.slice(0, this.value.length - 1);
				this.value = _name;
            }
        }); 
		$('#AXYAjaxLoginInputPwd').unbind('click touchend').bind('click touchend',function () {
            $('#AXYAjaxLoginInputPwd').focus();
        }); 
		$('#AXYAjaxLoginButtonReg').unbind('click touchend').bind('click touchend',function () {
            window.open(AXY_LoginURL);
        }); 
		//console.log($('#AXYAjaxLoginInput'));
		
		$('#AXYAjaxLoginButtonUse').unbind('click touchend').bind('click touchend',function() {
			if($('#AXYAjaxLoginButtonUse')[0].disabled){
				//console.log($('#AXYAjaxLoginButtonUse')[0].disabled);
				return;
			}
			//console.log($('#AXYAjaxLoginButtonUse'));
			//console.log($('#AXYAjaxLoginButtonUse')[0].disabled);

			$('#AXYAjaxLoginButtonUse').attr("disabled", true);
			$('#AXYAjaxLoginButtonUse').val("loading");
			//console.log($('#AXYAjaxLoginButtonUse'));
			//console.log(typeof($('#AXYAjaxLoginButtonUse')[0].disabled));
			//return;
			var inputName = $('#AXYAjaxLoginInputName').val(); //$('#AXYAjaxLoginInputName').val().replace(/ /g, "");
			inputName = inputName.replace(/<\/?[^>]*>/gim,"");//去掉所有的html标记
			inputName = inputName.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
			//inputName = inputName.replace(/\s/g,"");//去除文章中间空格
			var inputPwd = $('#AXYAjaxLoginInputPwd').val(); //$('#AXYAjaxLoginInputPwd').val().replace(/ /g, "");
			inputPwd = inputPwd.replace(/<\/?[^>]*>/gim,"");//去掉所有的html标记
			inputPwd = inputPwd.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
			//inputPwd = inputPwd.replace(/\s/g,"");//去除文章中间空格
			//console.log($('#AXYAjaxLoginInput'));
			//console.log($('#AXYAjaxLoginInput').val());
			//console.log(inputcoupon);
			//console.log(str);
			//console.log(result);
			//console.log(ss);


			if(!inputName || !inputPwd){
				//console.log('代码不能为空');
				$.toaster({ message : '用户名和密码不能为空', color:'red'});
				$('#AXYAjaxLoginButtonUse').attr("disabled", false);
				$('#AXYAjaxLoginButtonUse').val(AXYAjaxTopListButtonTemplate);
				return;
			}
			//else{
			$.toaster({ message : '正在登录...', color:'white'});
			var AXY_AjaxLoginURL = AXY.AjaxNetStuff.Param.URL.replace('zhongchou','rmmvgame').replace('product','rmmvgamelogin');
			$.ajax({
				url: AXY_AjaxLoginURL,
				type: 'POST',
				dataType: 'json',
				data: {username: inputName, password: inputPwd},
				success: function (data) {
					//console.log(data);
					if (data.status) {
						$.toaster({ message : "登录成功！"});
						
						if(data.uid != null){
							$('.AXYAjaxTopListLoginButton').css("display", 'none');
							
							//logingift
							if(AXY.AjaxNetStuff.Param.EnableLoginGift){
								if(AXY.AjaxNetStuff.Param.Loggedin){
									return;
								}
								//console.log($gamePlayer);
								//console.log($gameMap);
								if(!$gameMap._mapId){
									return;
								}
								var arrLoginGift = String(AXY.AjaxNetStuff.Parameters['LoginGift']).split(';');
								//console.log(arrLoginGift);
								$.each(arrLoginGift, function(index) {
									var arrLoginGiftItem = arrLoginGift[index].split(':');
									//console.log(arrLoginGiftItem);
									arrLoginGiftItem[0] = parseInt(arrLoginGiftItem[0]);
									arrLoginGiftItem[1] = parseInt(arrLoginGiftItem[1]);
									arrLoginGiftItem[2] = parseInt(arrLoginGiftItem[2]);
									switch(arrLoginGiftItem[0]){
										case 0:
											$gameParty.gainGold(arrLoginGiftItem[2],0,0);
											if(!AXY.Toast.Param.DisplayGainGold){
												$.toaster({ message : "+"+arrLoginGiftItem[2]+TextManager.currencyUnit});
											}
											break;
										case 1:
											$gameParty.gainItem($dataItems[arrLoginGiftItem[1]],arrLoginGiftItem[2],0,0);
											if(!AXY.Toast.Param.DisplayGainItem){
												$.toaster({ message : "+"+arrLoginGiftItem[2]+$dataItems[arrLoginGiftItem[1]].name});
											}
											break;
										case 2:
											$gameParty.gainItem($dataWeapons[arrLoginGiftItem[1]], arrLoginGiftItem[2],0,0,0);
											if(!AXY.Toast.Param.DisplayGainItem){
												$.toaster({ message : "+"+arrLoginGiftItem[2]+$dataWeapons[arrLoginGiftItem[1]].name});
											}
											break;
										case 3:
											$gameParty.gainItem($dataArmors[arrLoginGiftItem[1]], arrLoginGiftItem[2],0,0,0);
											if(!AXY.Toast.Param.DisplayGainItem){
												$.toaster({ message : "+"+arrLoginGiftItem[2]+$dataArmors[arrLoginGiftItem[1]].name});
											}
											break;
										default:
											//console.log(typeof(obj[index].num));
											break;
									}
								});
							}
							AXY_AjaxLogin.hide();
							AXY.AjaxNetStuff.Param.Loggedin = true;
							AXY.AjaxNetStuff.Param.sid = data.sid;
							//alert(AXY.AjaxNetStuff.Param.sid);
							//alert(data.sid);
							//alert(data.uid);
							$gameNetwork._serverURL = data.mvol;
							setTimeout(function(){
								$.toaster({ message : "众筹游戏《"+data.gamename+"》诚邀您参与众筹！"});
							}, 3000);
							if(AXY.AjaxNetStuff.Param.LoginCommonEventId > 0){
								$gameTemp.reserveCommonEvent(AXY.AjaxNetStuff.Param.LoginCommonEventId);
							}
						}
						
						console.log('attempt login to mongodb');
						AXY_AjaxLoginConnect2RMMVOL.Connect2RMMVOL(inputName, inputPwd);
					} else{
						console.log(data);
						$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
					};
					$('#AXYAjaxLoginButtonUse').attr("disabled", false);
					$('#AXYAjaxLoginButtonUse').val(AXYAjaxTopListButtonTemplate);
				},
				error:function (XMLHttpRequest, textStatus, errorThrown) {
					console.log(XMLHttpRequest);
					console.log(textStatus);
					console.log(errorThrown);
					$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
					$('#AXYAjaxLoginButtonUse').attr("disabled", false);
					$('#AXYAjaxLoginButtonUse').val(AXYAjaxTopListButtonTemplate);
				},
				complete:function (XMLHttpRequest, textStatus) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'gray'});
					$('#AXYAjaxLoginButtonUse').attr("disabled", false);
					$('#AXYAjaxLoginButtonUse').val(AXYAjaxTopListButtonTemplate);
				}
			});
			//}
		});
		$('#AXYAjaxLoginButtonClear').unbind('click touchstart').bind('click touchstart',function() {
			$('#AXYAjaxLoginInputName').val('').focus();
			$('#AXYAjaxLoginInputPwd').val('');
		});
		$('#AXYAjaxLoginButtonClose').unbind('click touchstart').bind('click touchstart',function() {
			AXY_AjaxLogin.hide();
		});
	},
	hide: function () {
		$('#AXYAjaxLogin').stop().animate({"width": "0"}, "normal", function() {
			$(this).hide();
			$(this).remove();
			try{
				$gameSystem.setTouchMoveEnabled(true);
			}
			catch(e){
				console.log(e);
			}
		});
	}
};
var AXY_AjaxLoginConnect2RMMVOL = {
	Connect2RMMVOL: function (inputName, inputPwd) {
		//$.toaster({ message : "搜索其他玩家中，请耐心等待，不要进行任何操作！"});
		//SceneManager.push(Scene_Menu);
		
		//console.log(inputName);
		//console.log(inputPwd);
		shapwd = CryptoJS.SHA1(inputPwd+$gameNetwork._firstHash).toString(CryptoJS.enc.Hex);
		//console.log(shapwd);
		//console.log($gameNetwork._serverURL);
		$.ajax({
			url: $gameNetwork._serverURL+'/login',
			type: 'POST',
			dataType: 'json',
			data: {username: inputName, password: shapwd},
			success: function (data) {
				console.log('login to mongodb done');
				console.log(data);
				if (data.err){
					console.log('login to mongodb error');
					console.log(data);
					switch(data.err){
						case 'Invalid username':
							console.log('login to mongodb error: Invalid username');
							console.log(data);
							//POST FOR REGISTER
							$.post($gameNetwork._serverURL + '/register', {
								username: inputName,
								password: inputPwd,
								email: inputName
							}).done(function (result) {
								console.log('register to mongodb done');
								console.log(result);
								var data = result.pageData;
								if (data.err){
									console.log('register to mongodb error');
									console.log(data);
									return;
								}
								if (data.msg) {
									console.log('register to mongodb ok');
									console.log(data);
									console.log('login to mongodb again');
									shapwd = CryptoJS.SHA1(inputPwd+$gameNetwork._firstHash).toString(CryptoJS.enc.Hex);
									$.post($gameNetwork._serverURL+'/login', {
										username: inputName,
										password: shapwd
									}).done(function (data) {
										console.log('login to mongodb again done');
										console.log(data);
										if (data.err){
											console.log('login to mongodb again error');
											console.log(data);
											return;
										}
										if (data.token) {
											console.log('login to mongodb again ok');
											console.log(data);
											$gameNetwork._token = data.token;
											//var ioFlag = String(Nasty.Parameters['socket.io connection']);
											//if (ioFlag==='true'){
												$gameNetwork.connectSocket('main','/');
											//}
											$gameNetwork.connectSocketsAfterLogin();
											//SceneManager.goto(Scene_Map);
											if (!$gameParty.inBattle()) {
												$gameNetwork._socket.netplayers.emit('changeRoom',$gameMap.mapId().toString());
											}
											return;
										}
									});
								}
							});
							break;
						default:
							break;
					}
					return;
				}
				if (data.token) {
					console.log('login to mongodb ok');
					console.log(data);
					$gameNetwork._token = data.token;
					//var ioFlag = String(Nasty.Parameters['socket.io connection']);
					//if (ioFlag==='true'){
						$gameNetwork.connectSocket('main','/');
					//}
					$gameNetwork.connectSocketsAfterLogin();
					//SceneManager.goto(Scene_Map);
					//TouchInput._events.cancelled = true;
					//SceneManager.goto(SceneManager._stack.pop());
					if (!$gameParty.inBattle()) {
						//SceneManager.push(Scene_Menu);
						//SceneManager.goto(SceneManager._stack.pop());
						//SceneManager.pop();	
						//$('.AXYAjaxMenuButtonOpen').click();
						//$('.AXYAjaxMenuButtonOpen').click();
						//$('.AXYAjaxMenuButtonOpen').touchend();
						//
						
						//SceneManager.pop();
						//SceneManager.goto(Scene_Map);
						/*SceneManager.goto(Scene_Options);
						setTimeout(function(){
							$.toaster({ message : "搜索成功！"});
							SceneManager.goto(Scene_Map);
						}, 1000);*/
						$gameNetwork._socket.netplayers.emit('changeRoom',$gameMap.mapId().toString());
						//$gameNetwork._socket.netplayers.emit('CheckPlayers',$gameMap.mapId().toString());
						
						/*var mapId = $gameMap.mapId();
						var x     = $gamePlayer._x;
						var y     = $gamePlayer._y;
						var sId   = 0;
						var name  = $gameMap.displayName();
						$gamePlayer.reserveTransfer(2, x, y, sId, name);
						$gamePlayer.requestMapReload();
						$gamePlayer.performTransfer();
						$gamePlayer.refresh();
						SceneManager.goto(Scene_Map);*/
						//$gamePlayer.reserveTransfer(1, x, y, sId, name);
						//$gamePlayer.requestMapReload();
						/*Game_Interpreter.prototype.pluginCommand('command201',[1, x, y, sId, name]);
						var aliasPluginCommand = Game_Interpreter.prototype.pluginCommand;

						Game_Interpreter.prototype.pluginCommand = function(command, args) {
						   aliasPluginCommand.call(this, command, args);
						   if (command === 'plugincommandtextname') {
							  dostuff(args);
						   }
						};*/
						/*console.log($gameMap);
						console.log($gamePlayer);
						console.log($gameSystem);
						console.log($gameScreen);
						console.log($gameTimer);
						console.log($gameSwitches);
						console.log($gameVariables);
						console.log($gameSelfSwitches);
						console.log($gameTemp);
						console.log($gameParty);
						
						var aliasPluginCommand = Game_Interpreter.prototype.command201;
						Game_Interpreter.prototype.command201 = function() {
							var mapId = $gameMap.mapId();
								var x     = $gamePlayer._x;
								var y     = $gamePlayer._y;
								var sId   = 0;
								var name  = $gameMap.displayName();
							this._params = [0, mapId, x, y, sId, name];
							aliasPluginCommand.call(this);
						};*/

					}
					//var _teleportAnimationWaiting = true;
					/*var _kzr_TP01_Scene_Map_update = Scene_Map.prototype.update;
					Scene_Map.prototype.update = function() {
						if (!this._teleportAnimationWaiting) {
							if (!$gamePlayer.isAnimationPlaying()) {
								this._teleportAnimationWaiting = true;
								var mapId = $gameMap.mapId();
								var x     = $gamePlayer._x;
								var y     = $gamePlayer._y;
								var sId   = 0;
								var name  = $gameMap.displayName();
								$gamePlayer.reserveTransfer(mapId, x, y, sId, name);
								$gamePlayer.requestMapReload();
							}
						}
						_kzr_TP01_Scene_Map_update.call(this);
					};*/
					return
				}
			}
		});
		/*$.post($gameNetwork._serverURL+'/login', {
			username: inputName,
			password: shapwd
		}).done(function (data) {
			console.log('login to mongodb done');
			console.log(data);
			if (data.err){
				console.log('login to mongodb error');
				console.log(data);
				switch(data.err){
					case 'Invalid username':
						console.log('login to mongodb error: Invalid username');
						console.log(data);
						//POST FOR REGISTER
						$.post($gameNetwork._serverURL + '/register', {
							username: inputName,
							password: inputPwd,
							email: inputName
						}).done(function (result) {
							console.log('register to mongodb done');
							console.log(result);
							var data = result.pageData;
							if (data.err){
								console.log('register to mongodb error');
								console.log(data);
								return;
							}
							if (data.msg) {
								console.log('register to mongodb ok');
								console.log(data);
								console.log('login to mongodb again');
								shapwd = CryptoJS.SHA1(inputPwd+$gameNetwork._firstHash).toString(CryptoJS.enc.Hex);
								$.post($gameNetwork._serverURL+'/login', {
									username: inputName,
									password: shapwd
								}).done(function (data) {
									console.log('login to mongodb again done');
									console.log(data);
									if (data.err){
										console.log('login to mongodb again error');
										console.log(data);
										return;
									}
									if (data.token) {
										console.log('login to mongodb again ok');
										console.log(data);
										$gameNetwork._token = data.token;
										//var ioFlag = String(Nasty.Parameters['socket.io connection']);
										//if (ioFlag==='true'){
											//$gameNetwork.connectSocket('main','/');
										//}
										$gameNetwork.connectSocketsAfterLogin();
										SceneManager.goto(Scene_Map);
										return;
									}
								});
							}
						});
						break;
					default:
						break;
				}
				return;
			}
			if (data.token) {
				console.log('login to mongodb ok');
				console.log(data);
				$gameNetwork._token = data.token;
				//var ioFlag = String(Nasty.Parameters['socket.io connection']);
				//if (ioFlag==='true'){
					//$gameNetwork.connectSocket('main','/');
				//}
				$gameNetwork.connectSocketsAfterLogin();
				SceneManager.goto(Scene_Map);
				return
			}
		});*/
	}/*,
	hide: function () {
		$('#AXYAjaxLogin').stop().animate({"width": "0"}, "normal", function() {
			$(this).hide();
			$(this).remove();
			try{
				$gameSystem.setTouchMoveEnabled(true);
			}
			catch(e){
				console.log(e);
			}
		});
	}*/
};

//ajax coupon
if (AXY.AjaxNetStuff.Param.EnableCoupon) {
	//=============================================================================
	// ** Window MenuCommand
	//=============================================================================	

	//==============================
	// * make Command List
	//==============================
	AXY.AjaxNetStuff.Alias.addOriginalCommandsCoupon = Window_MenuCommand.prototype.addOriginalCommands;
	Window_MenuCommand.prototype.addOriginalCommands = function() {
		AXY.AjaxNetStuff.Alias.addOriginalCommandsCoupon.call(this);
		this.addCommand(AXY.AjaxNetStuff.Param.CouponText, 'coupon', true);
	};
		
	//=============================================================================
	// ** Scene Menu
	//=============================================================================	

	//==============================
	// * create Command Window
	//==============================
	AXY.AjaxNetStuff.Alias.createCommandWindowCoupon = Scene_Menu.prototype.createCommandWindow;
	Scene_Menu.prototype.createCommandWindow = function() {
		AXY.AjaxNetStuff.Alias.createCommandWindowCoupon.call(this); 
		this._commandWindow.setHandler('coupon',      this.commandCoupon.bind(this));
		/*if (Imported.MOG_TimeSystem && Moghunter.timeWindow_menu) {	
			this._commandWindow.height -= this._commandWindow.itemHeight();
		};*/
	};

	//==============================
	// * Cloud Save
	//==============================
	Scene_Menu.prototype.commandCoupon = function() {
		AXY_AjaxCoupon.show();
		// Close option window
		SceneManager.pop();	
	};
	
	var AXY_AjaxCoupon = {
		show: function () {
			var AXYAjaxCouponEntity;
			var AXYAjaxCouponTemplate = 
					'<div class="AXYAjaxCoupon" id="AXYAjaxCoupon">' +
						'<div class="AXYAjaxCouponBG"></div>' +
						'<input type="text" class="AXYAjaxCouponInput" id="AXYAjaxCouponInput" placeholder="按 Ctrl+V 粘贴" />' +
						'<input type="button" class="AXYAjaxCouponButton" id="AXYAjaxCouponButtonUse" value="兑换" />' +
						'<input type="button" class="AXYAjaxCouponButton" id="AXYAjaxCouponButtonClear" value="清空" />' +
						'<input type="button" class="AXYAjaxCouponButton" id="AXYAjaxCouponButtonClose" value="关闭" />' +
					'</div>';
			var AXYAjaxCouponStyleCss = 
					'.AXYAjaxCoupon{position:fixed;top:10px;left:.5%;z-index:10000;display:none;margin:0 auto;width:0%;height:80px;text-align:center;}'+
					'.AXYAjaxCoupon .AXYAjaxCouponBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.5}'+
					'.AXYAjaxCoupon .AXYAjaxCouponInput{margin:15px 0;text-align:center;width:30%;height:50px;imeMode:active}'+
					'.AXYAjaxCoupon .AXYAjaxCouponButton,.AXYAjaxCoupon .AXYAjaxCouponInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.4);color:#fff;font-size:24px;}'+
					'.AXYAjaxCoupon .AXYAjaxCouponButton{top:0;z-index:10000;margin-left:2%;width:10%;height:3pc;word-spacing:20px;cursor:pointer}';
			var css =
					{
						'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
					};
			AXYAjaxCouponEntity = $('body').append(AXYAjaxCouponTemplate);
			AXYAjaxCouponEntity = $('#AXYAjaxCoupon').append('<style type="text/css">'+AXYAjaxCouponStyleCss+'</style>');
			$('#AXYAjaxCouponInput').css(css);
			$('.AXYAjaxCouponButton').css(css);
			//console.log(css);
			//console.log($gameParty);
			//console.log($gameSystem);
			//console.log(TextManager.currencyUnit);

			$('#AXYAjaxCoupon').stop().show().animate({"width": "98%"}, "normal");
			$gameSystem.setTouchMoveEnabled(false);
			$('#AXYAjaxCouponInput').focus();

			$('#AXYAjaxCouponInput').keydown(function (e) {
				if (e.keyCode == 8) {
					var _name = this.value.slice(0, this.value.length - 1);
					this.value = _name;
				}
			}); 
			$('#AXYAjaxCouponInput').unbind('click touchend').bind('click touchend',function () {
				$('#AXYAjaxCouponInput').focus();
			}); 
			//console.log($('#AXYAjaxCouponInput'));
			
			$('#AXYAjaxCouponButtonUse').unbind('click touchend').bind('click touchend',function() {
				if($('#AXYAjaxCouponButtonUse')[0].disabled){
					//console.log($('#AXYAjaxCouponButtonUse')[0].disabled);
					return;
				}
				//console.log($('#AXYAjaxCouponButtonUse'));
				//console.log($('#AXYAjaxCouponButtonUse')[0].disabled);

				$('#AXYAjaxCouponButtonUse').attr("disabled", true);
				$('#AXYAjaxCouponButtonUse').val("loading");
				//console.log($('#AXYAjaxCouponButtonUse'));
				//console.log(typeof($('#AXYAjaxCouponButtonUse')[0].disabled));
				//return;
				var inputcoupon = $('#AXYAjaxCouponInput').val().replace(/ /g, "");
				inputcoupon = inputcoupon.replace(/<\/?[^>]*>/gim,"");//去掉所有的html标记
				inputcoupon = inputcoupon.replace(/(^\s+)|(\s+$)/g,"");//去掉前后空格
				inputcoupon = inputcoupon.replace(/\s/g,"");//去除文章中间空格
				//console.log($('#AXYAjaxCouponInput'));
				//console.log($('#AXYAjaxCouponInput').val());
				//console.log(inputcoupon);
				//console.log(str);
				//console.log(result);
				//console.log(ss);


				if(!inputcoupon){
					//console.log('代码不能为空');
					$.toaster({ message : '代码不能为空', color:'red'});
					$('#AXYAjaxCouponButtonUse').attr("disabled", false);
					$('#AXYAjaxCouponButtonUse').val("兑换");
					return;
				}
				//else{
				$.toaster({ message : '正在验证...', color:'white'});
				var AXY_AjaxCouponURL = AXY.AjaxNetStuff.Param.URL.replace('zhongchou','rmmvgame').replace('product','rmmvgamecoupon');
				$.ajax({
					url: AXY_AjaxCouponURL,
					type: 'POST',
					dataType: 'json',
					data: {sid: AXY.AjaxNetStuff.Param.sid, coupon: inputcoupon},
					success: function (data) {
						//console.log(data);
						if (data.status) {
							var obj = $.parseJSON(data['jsonstr']);
							//console.log(obj);
							$.each(obj, function(index) {
								//console.log(obj[index]);
								switch(obj[index].item){
									case 0:
										$gameParty.gainGold(obj[index].num,0,0);
										if(!AXY.Toast.Param.DisplayGainGold){
											$.toaster({ message : "+"+obj[index].num+TextManager.currencyUnit});
										}
										break;
									case 1:
										$gameParty.gainItem($dataItems[obj[index].id],obj[index].num,0,0);
										if(!AXY.Toast.Param.DisplayGainItem){
											$.toaster({ message : "+"+obj[index].num+$dataItems[obj[index].id].name});
										}
										break;
									case 2:
										$gameParty.gainItem($dataWeapons[obj[index].id], obj[index].num,0,0,0);
										if(!AXY.Toast.Param.DisplayGainItem){
											$.toaster({ message : "+"+obj[index].num+$dataWeapons[obj[index].id].name});
										}
										break;
									case 3:
										$gameParty.gainItem($dataArmors[obj[index].id], obj[index].num,0,0,0);
										if(!AXY.Toast.Param.DisplayGainItem){
											$.toaster({ message : "+"+obj[index].num+$dataArmors[obj[index].id].name});
										}
										break;
									default:
										//console.log(typeof(obj[index].num));
										break;
								}
							});
							
							setTimeout(function()
							{
								$.toaster({ message : "众筹游戏《"+data.gamename+"》感谢您的支持！"});
								AXY_AjaxCoupon.hide();
							}, 3000);
							
						} else{
							console.log(data);
							$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
						};
						$('#AXYAjaxCouponButtonUse').attr("disabled", false);
						$('#AXYAjaxCouponButtonUse').val("兑换");
					},
					error:function (XMLHttpRequest, textStatus, errorThrown) {
						console.log(XMLHttpRequest);
						console.log(textStatus);
						console.log(errorThrown);
						$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
						$('#AXYAjaxCouponButtonUse').attr("disabled", false);
						$('#AXYAjaxCouponButtonUse').val("兑换");
					},
					complete:function (XMLHttpRequest, textStatus) {
						console.log(XMLHttpRequest);
						console.log(textStatus);
						$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'gray'});
						$('#AXYAjaxCouponButtonUse').attr("disabled", false);
						$('#AXYAjaxCouponButtonUse').val("兑换");
					}
				});
				//}
			});
			$('#AXYAjaxCouponButtonClear').unbind('click touchstart').bind('click touchstart',function() {
				$('#AXYAjaxCouponInput').val('').focus();
			});
			$('#AXYAjaxCouponButtonClose').unbind('click touchstart').bind('click touchstart',function() {
				AXY_AjaxCoupon.hide();
			});
		},
		hide: function () {
			$('#AXYAjaxCoupon').stop().animate({"width": "0"}, "normal", function() {
				$(this).hide();
				$(this).remove();
				$gameSystem.setTouchMoveEnabled(true);
			});
		}
	};
}

//ajax ver check
if(AXY.AjaxNetStuff.Param.EnableVerCheck){
	//display html first
	//console.log(AXY_AjaxLoginURL);
	var width = String(AXY.AjaxNetStuff.Parameters['VerCheckWidth']);
	if(width.indexOf("%") != -1){
		var widthpx = width;
	}
	else{
		var widthpx = width+'px';
	}

	var AXYAjaxVerCheckEntity;
	var AXYAjaxVerCheckTemplateStyle = 
			"<style type=\"text/css\">.AXYAjaxVerCheck{position:fixed;top:"+
			parseInt(AXY.AjaxNetStuff.Parameters['VerCheckY'])+"px;left:"+
			parseInt(AXY.AjaxNetStuff.Parameters['VerCheckX'])+"px;z-index:"+
			parseInt(AXY.AjaxNetStuff.Parameters['zIndex'])+";margin:0 auto;width:"+
			widthpx+";color:"+
			String(AXY.AjaxNetStuff.Parameters['VerCheckTextColor'])+";background-color:"+
			String(AXY.AjaxNetStuff.Parameters['VerCheckbackgroundcolor'])+";text-align:"+
			String(AXY.AjaxNetStuff.Parameters['VerCheckTextAlign'])+";opacity:"+
			parseFloat(AXY.AjaxNetStuff.Parameters['VerCheckopacity'])+";}<\/style>";
	var AXYAjaxVerCheckTemplateDiv = "<div class=\"AXYAjaxVerCheck\">"+
	String(AXY.AjaxNetStuff.Parameters['VerCheckingText'])+"</div>";
	var AXYAjaxVerCheckTemplateCss =
			{
				'font-family':	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
			};
	AXYAjaxVerCheckEntity = $('body').append(AXYAjaxVerCheckTemplateStyle);
	AXYAjaxVerCheckEntity = $('body').append(AXYAjaxVerCheckTemplateDiv);
	$('.AXYAjaxVerCheck').css('font-family', $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont');
	
	//console.log($gameSystem);
	//console.log(AXYAjaxVerCheckTemplateCss);
	
	//then bind action
	var AXY_AjaxVerCheck = {
		show: function () {
			$('.AXYAjaxVerCheck').append(AXYAjaxVerCheckTemplateStyle);
			$('.AXYAjaxVerCheck').append(AXYAjaxVerCheckTemplateDiv);
			$('.AXYAjaxVerCheck').css('font-family', $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont');
			$('.AXYAjaxVerCheck').stop().show().animate({"height": "98%"}, "normal");
		},
		hide: function () {
			$('.AXYAjaxVerCheck').stop().animate({"height": "0"}, "normal", function() {
				$(this).hide();
				$(this).remove();
			});
		}
	};

	//onready auto run
	$(document).ready(function(){
		/*if(!$gameParty){
			return;
		}*/
		var AXY_AjaxVerCheckURL = AXY.AjaxNetStuff.Param.URL.replace('zhongchou','rmmvgame').replace('product','rmmvgamevercheck');
		$.ajax({
			url: AXY_AjaxVerCheckURL,
			type: 'POST',
			dataType: 'json',
			data: {jsonstr:''},
			success: function (data) {
				if (data.status) {
					//console.log(data);
					if(data.version <= parseFloat(AXY.AjaxNetStuff.Parameters['Version'])){
						$('.AXYAjaxVerCheck').html(String(AXY.AjaxNetStuff.Parameters['NoNewText']));
						setTimeout(function()
						{
							AXY_AjaxVerCheck.hide();
						}, 1000);
					}
					else{
						$('.AXYAjaxVerCheck').html(String(AXY.AjaxNetStuff.Parameters['HaveNewText'])+data.version+"，<a id='AXYAjaxVerCheckHaveNewLink' href=\""+AXY.AjaxNetStuff.Param.URL+"\" target=\"_blank\">"+String(AXY.AjaxNetStuff.Parameters['LinkText'])+"</a>");
						$('#AXYAjaxVerCheckHaveNewLink').unbind('touchstart').bind('touchstart',function() {
							//$.toaster({ message : '手机版暂不支持登录', color:'red'});
							window.open(AXY.AjaxNetStuff.Param.URL);
						});
						setTimeout(function()
						{
							AXY_AjaxVerCheck.hide();
						}, 3000);
					}
					
				} else{
					console.log(data);
					$('.AXYAjaxVerCheck').html(""+data.info+data.error+"");
				};
			},
			error:function (jqXHR) {
				$('.AXYAjaxVerCheck').html(""+jqXHR.status+"");
				console.log(jqXHR);
			}
		});
	});
}
