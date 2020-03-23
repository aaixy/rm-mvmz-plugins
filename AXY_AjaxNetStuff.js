var AXY = AXY || {};
AXY.AjaxNetStuff = AXY.AjaxNetStuff || {};
AXY.AjaxNetStuff.VERSION = 1.74;
//=============================================================================
// A XueYu Plugin - Ajax Net Stuff
// AXY_AjaxNetStuff.js
// Version: 1.74
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.74 This plugin support rmmv with ajax net stuff.
 * @author A XueYu Plugin
 *
 * @help
 * Introduction
 * This plugin support rmmv with ajax net stuff.
 * Easy to use of you just copy your own url to here.
 * And then you will see it worked.
 * Github: https://github.com/aaixy/rmmv-plugins
 * 
 * Example:
 * Event Script
 * To open Coupon dialog,
 * AXY_AjaxCoupon.show();
 * To close Coupon dialog,
 * AXY_AjaxCoupon.hide();
 * 
 * To open Login modal,
 * AXY_AjaxLogin.show();
 * To close Login modal,
 * AXY_AjaxLogin.hide();
 * 
 * To open Reg modal,
 * AXY_AjaxReg.show();
 * To close Reg modal,
 * AXY_AjaxReg.hide();
 * 
 * To open Cloud Save modal,
 * AXY_AjaxCloudSave.show();
 * To close Cloud Save modal,
 * AXY_AjaxCloudSave.hide();
 * 
 * To open Donate In Game modal,
 * AXY_AjaxDonateInGame.show();
 * To close Donate In Game modal,
 * AXY_AjaxDonateInGame.hide();
 *
 * LoginGift
 * format:'type:id:amount;'. type:gold=0,item=1,weapon=2,armor=3.
 * example:
 * give 10 gold and 1 item1:'0:0:10;1:1:1;'
 * give 10 gold and 1 weapon1:'0:0:10;2:1:1;'
 *
 * VerCloud
 * AXY.AjaxNetStuff.Variables.VerCloud; //string
 * AXY.AjaxNetStuff.Variables.VerCloudFix; //string
 * AXY.AjaxNetStuff.Variables.VerText; //string
 * AXY.AjaxNetStuff.Param.VerLocal; //string
 * AXY_AjaxVerCheck.modal('#AXYAjaxVerCheckModal', 'show');
 * AXY_AjaxVerCheck.modal('#AXYAjaxVerCheckModal', 'hide');
 * Server Timestamp Switchs Variables
 * AXY_AjaxFetchServerTSV.timestamp(); //return unix timestamp
 * AXY.AjaxNetStuff.Variables.timestamp; //and Assign to this variable
 * AXY_AjaxFetchServerTSV.datetime("Y-m-d H:i:s"); //return date time string such as 2019-09-09 13:14:15
 * AXY_AjaxFetchServerTSV.datetime("Y-m-d"); //return date time string such as 2019-09-09
 * AXY_AjaxFetchServerTSV.datetime("H:i:s"); //return date time string such as 13:14:15
 * and many format in function, you can find format on this web: https://www.php.net/manual/en/function.date.php
 * AXY.AjaxNetStuff.Variables.datetime; //and Assign to this variable
 * AXY_AjaxFetchServerTSV.variable("id");
 * AXY_AjaxFetchServerTSV.variable(2);
 * AXY.AjaxNetStuff.Variables.variable["5"].v;
 * AXY.AjaxNetStuff.Variables.variable["5"].n;
 * 
 * Toplist
 * var mygametoplist = AXY_AjaxTopList.fetch();
 * now, you got the array obj mygametoplist, and these global variables:
 * AXY.AjaxNetStuff.Variables.toplist;
 * AXY.AjaxNetStuff.Variables.gamename;
 * AXY.AjaxNetStuff.Variables.totalplayer;
 * AXY.AjaxNetStuff.Variables.loggedin;
 * 
 * CloudSave with script
 * Write
 * AXY_AjaxCloudSave.show();
 * $('#AXYAjaxCloudSaveButtonWrite').click();
 * Read
 * AXY_AjaxCloudSave.show();
 * $('#AXYAjaxCloudSaveButtonRead').click();
 * 
 * Exam
 * Useage:
 * AXY_AjaxExam.show(exam id);
 * AXY_AjaxExam.show(exam id,radio amount,checkbox amount,boolean amount,is random order);
 * Example:
 * AXY_AjaxExam.show(1);
 * AXY_AjaxExam.show(1,1,0,0,0);
 * AXY_AjaxExam.show(1,2,2,2,1);
 * Variable:
 * AXY.AjaxNetStuff.Variables.examStartTime
 * AXY.AjaxNetStuff.Variables.examTotalScore
 * AXY.AjaxNetStuff.Variables.examScore
 * AXY.AjaxNetStuff.Variables.examCurrentAnswerCounter
 * AXY.AjaxNetStuff.Variables.examRightAnswer
 *
 * changelog
 * 1.74 2020.3.23
 * add: exam module;
 * 1.73 2020.3.21
 * modify: reopen saveinfo;
 * 1.72 2020.3.20
 * remove: read cloudsave jump to scene title;
 * remove: saveinfo in write cloudsave;
 * 1.71 2020.3.19
 * add: quick login to match another function;
 * 1.70 2020.3.10
 * modify: change port 6443 to 666;
 * 1.69 2020.3.2
 * add: cloud data now could be set the file list to define which file will load from cloud;
 * modify: change cache and savestorage name;
 * 1.68 2020.3.1
 * modify: switch server to shanghai;
 * change & delete: three strings about 666rpg in toast;
 * 1.67 2020.2.4
 * change & delete: some words;
 * 1.66 2020.2.3
 * add: dirpad and ok cancel support, now you have a dirpad ok cancel that can be placed on anywhere even outside the screen;
 * delete: all toast about 666rpg.com staff;
 * 1.65 2020.1.2
 * modify: change AXY.AjaxNetStuff.Variables.Loggedin, AXY.AjaxNetStuff.Param.l/Loggedin to AXY.AjaxNetStuff.Variables.loggedin;
 * 1.64 2020.1.1
 * fix: donate amount large then 999 such as 1000 will display 1;
 * 1.63 2019.12.31
 * fix: nickname null;
 * 1.62 2019.12.30
 * add: nickname support;
 * add: switch on new game of donate in game;
 * 1.61 2019.12.27
 * add: param AppID with a higher priority than param URL, and the param URL will deprecated in future version;
 * 1.60 2019.12.26
 * fix: new game with donate some bugs;
 * 1.59 2019.12.24
 * add: another cache solution;
 * 1.58 2019.12.23
 * modify: disable local cache on mobile device;
 * 1.57 2019.12.22
 * add: show update notice when fix version grow;
 * modify: login modal and reg modal;
 * 1.56 2019.12.21
 * fix: cloud data occasionally out of order;
 * 1.55 2019.12.20
 * add: cache cloud data;
 * add: ban user support;
 * 1.54 2019.12.19
 * add: reg modal;
 * 1.53 2019.12.17
 * add: cloud data decode;
 * 1.52 2019.12.16
 * add: cloud data depend on server switch;
 * 1.51 2019.12.15
 * modify: pageup/pagedown button with different staff in battle;
 * 1.50 2019.12.14
 * add: fix version;
 * 1.49 2019.12.10
 * add: cloud data;
 * 1.48 2019.11.25
 * modify: button default path from img/pictures to img/system;
 * modify: button pageup/pagedown behavior;
 * 1.47 2019.11.18
 * modify: coupon paste input placeholder;
 * Deprecated: AXY.AjaxNetStuff.Param.HandleShowTextLanguageObj, Use new one: AXY.AjaxNetStuff.Variables.HandleShowTextLanguageObj;
 * Deprecated: AXY.AjaxNetStuff.Param.HandleShowTextDefaultLanguageId, Use new one: AXY.AjaxNetStuff.Variables.HandleShowTextDefaultLanguageId;
 * fix: cloud language in statusText;
 * 1.46 2019.11.16
 * add: reserve CommonEvent with coupon/DonateInGame; see issues #2: https://github.com/aaixy/rmmv-plugins/issues/2
 * add: param: displayGoldChangeInformation in DonateInGame struct;
 * add: param: displayItemChangeInformation in DonateInGame struct;
 * add: param: displayWeaponChangeInformation in DonateInGame struct;
 * add: param: displayArmorChangeInformation in DonateInGame struct;
 * add: param: displayCommonEventInformation in DonateInGame struct;
 * 1.45 2019.11.13
 * add: change switches and/or variables with coupon/DonateInGame; see issues #1: https://github.com/aaixy/rmmv-plugins/issues/1
 * modify: 2 params about common event changed, so you can choose common event from a list now. Replaced manual input a number; 
 * fix: some bugs;
 * 1.44 2019.11.10
 * add: my store;
 * add: new game with my store;
 * add: episode selection;
 * add: param: autoSaveAfterNewGame;
 * add: param: episodeSelectionCommonEventId;
 * add: param: episodeSelectionThreshold;
 * modify: param: AutoSaveAfterDonate to autoSaveAfterDonate and move to DonateInGame settings struce;
 * modify: param: CommandRemember to commandRemember;
 * 1.43 2019.11.7
 * add: param game name;
 * add: toaster 666rpg.com info;
 * 1.42 2019.11.6
 * add: DonateInGame popular amount;
 * remove: transaction password;
 * modify: DonateInGame font size;
 * 1.41 2019.10.30
 * fix: autologin logic issus;
 * 1.40 2019.10.29
 * add: command Remember;
 * fix: autologin checkbox issus;
 * 1.39 2019.10.27
 * add: pageup and pagedown buttons;
 * fix: some bugs;
 * 1.38 2019.10.23
 * change: some param uint changed to rem from px;
 * 1.37 2019.10.19
 * change: login modal checkbox change to inline;
 * 1.36 2019.10.15
 * change: modal can not close by click on the backdrop or click keyboard esc;
 * 1.35 2019.10.14
 * fix: some crash situation when fetch toplist from server;
 * 1.34 2019.10.5
 * make vercheck modal customizable;
 * 1.33 2019.10.4
 * Add: print colorful console log selfinfo;
 * 1.32 2019.10.3
 * disable cloud variable cache on fetch from cloud;
 * make danmu feature on mobile device customizable;
 * upgrade some param format to rmmv v1.6.1;
 * change login ui and make bgcolor, text color,opacity customizable;
 * 1.31 2019.9.28
 * disable danmu on mobile device;
 * 1.30 2019.9.27
 * Add: customizable top list sort by column in order or reverse order;
 * Add: multiple top list ability;
 * 1.29 2019.9.25
 * Deprecated: AXY.AjaxNetStuff.Param.timestamp, Use new one: AXY.AjaxNetStuff.Variables.timestamp;
 * Deprecated: AXY.AjaxNetStuff.Param.datetime, Use new one: AXY.AjaxNetStuff.Variables.datetime;
 * Deprecated: AXY.AjaxNetStuff.Param.variable, Use new one: AXY.AjaxNetStuff.Variables.variable;
 * Deprecated: AXY.AjaxNetStuff.Param.isonline, Use new one: AXY.AjaxNetStuff.Variables.isonline;
 * Add: AXY.AjaxNetStuff.Variables.toplist;
 * Add: Alt top list screen;
 * Open: host your own rmmv mmol server address;
 * 1.28 2019.9.11
 * optimization: compress cloud variable;
 * AXY.AjaxNetStuff.Variables.variable["5"].value; => AXY.AjaxNetStuff.Variables.variable["5"].v;
 * AXY.AjaxNetStuff.Variables.variable["5"].name; => AXY.AjaxNetStuff.Variables.variable["5"].n;
 * 1.27 2019.9.10
 * fix bug: got crash when fetch variable or language on offline;
 * 1.26 2019.9.9
 * add some params for version check;
 * add fetch server timestamp;
 * add fetch server switchs or variables;
 * 1.25 2019.8.29
 * add feature: Handle ShowText by ajax.
 * fix bug: when the player is Donate in game, and trigger the battle event, autosave file will crash. 
 * fix bug: login issus and mmol issus, when turn on the feature login gift or login commonevent. 
 * 1.24 2019.7.7
 * fix some issus;
 * 1.23 2019.7.6
 * add autoSaveAfterDonate
 * 1.22 2019.6.21
 * add alert about DonateInGame and version issus;
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
 * optimization Donate in game display;
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
 * fix DonateInGame can not scroll on android;
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
 * add Donate in game;
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
 * //=============================================================================
 * End of Help File
 * //=============================================================================
 * 
 * @param AppID
 * @desc The AppID of your game on 666rpg.com.
 * @default 20
 * 
 * @param URL
 * @text URL (Deprecated)
 * @desc The url of your ajax net stuff. This param will deprecated in future version.
 * @default https://666rpg.com/game/detail/id/20
 *
 * @param name
 * @text Game Name
 * @desc The game name.
 * @type text
 * @default 
 * 
 * @param Version
 * @desc The game version.
 * @default 1.0
 * 
 * @param EnableTopList
 * @desc Enable TopList? true/false
 * @type boolean
 * @default true
 *
 * @param TopListHAlign
 * @desc The Horizontal align of TopList box. left/right
 * @type select
 * @option left
 * @value left
 * @option right
 * @value right
 * @default right
 *
 * @param TopListVAlign
 * @desc The Vertical align of TopList box. top/bottom
 * @type select
 * @option top
 * @value top
 * @option bottom
 * @value bottom
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
 * @type select
 * @option left
 * @value left
 * @option center
 * @value center
 * @option right
 * @value right
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
 * @desc The TopList Img width. Uint: rem.
 * @default 5
 *
 * @param ImgHeight
 * @desc The TopList Img Height. Uint: rem.
 * @default 5
 *
 * @param ImgOpacity
 * @desc The css opacity of img. 0-1
 * @default 0.2
 *
 * @param LoginButtonText
 * @desc Login Button Text
 * @default Login
 * 
 * @param QuickLoginButtonText
 * @desc Quick Login Button Text
 * @default Quick Login
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
 * @desc The size of Login Button. Uint: rem.
 * @default 2
 * 
 * @param LoginModalBgColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default black
 * 
 * @param LoginModalTextColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default white
 *
 * @param LoginModalOpacity
 * @desc The css opacity of login modal. 0-1
 * @default 0.8
 *
 * @param LoadingText
 * @desc Loading Text
 * @default Loading...
 *
 * @param LastestText
 * @desc Lastest Text
 * @default Lastest
 * 
 * @param NickNameText
 * @desc Nick Name Text
 * @default NickName
 * 
 * @param LastestFullText
 * @desc Lastest Full Text
 * @default LastestFull
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
 * @type boolean
 * @default true
 *
 * @param CouponText
 * @desc Coupon Text
 * @default Coupon
 *
 * @param EnableVerCheck
 * @desc Enable VerCheck? true/false
 * @type boolean
 * @default true
 *
 * @param EnableVerCheckNotice
 * @desc Enable VerCheck Notice? true/false
 * @type boolean
 * @default true
 *
 * @param VerCheckAutoDismissTimeSucc
 * @desc Ver Check Auto Dismiss Time for success, set 0 to turn off auto dismiss.
 * @default 3000
 *
 * @param VerCheckAutoDismissTimeErr
 * @desc Ver Check Auto Dismiss Time for error, set 0 to turn off auto dismiss.
 * @default 1000
 * 
 * @param VerCheckModalBgColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default black
 * 
 * @param VerCheckModalTextColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default white
 *
 * @param VerCheckModalOpacity
 * @desc The css opacity of login modal. 0-1
 * @default 0.8
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
 * @default green
 *
 * @param VerCheckTextAlign
 * @desc left/center/right
 * @type select
 * @option left
 * @value left
 * @option center
 * @value center
 * @option right
 * @value right
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
 * @desc Have New Text
 * @default Have New: 
 * 
 * @param HaveNewFixText
 * @desc Have New Fix Text
 * @default Have New Fix: 
 *
 * @param LinkText
 * @desc Link Text
 * @default Link
 *
 * @param EnableLoginGift
 * @desc Enable Login Gift? true/false
 * @type boolean
 * @default true
 *
 * @param LoginGift
 * @desc format:'type:id:amount;'. type:gold=0,item=1,weapon=2,armor=3. for more detail check help.
 * @default 0:0:100;1:1:1;
 *
 * @param EnableCloudSave
 * @desc Enable Cloud Save? true/false
 * @type boolean
 * @default true
 *
 * @param CloudSaveText
 * @desc Cloud Save Text
 * @default Cloud Save
 *
 * @param EnableChat
 * @desc Enable Chat? true/false
 * @type boolean
 * @default true
 *
 * @param EnableDanmu
 * @desc Enable Danmu? true/false
 * @type boolean
 * @default true
 * 
 * @param EnableDanmuOnMobileDevice
 * @desc Enable Danmu On Mobile Device? true/false
 * @type boolean
 * @default false
 *
 * @param DanmuSpeed
 * @desc Danmu Speed? unit: ms
 * @default 5000
 *
 * @param DanmuInterval
 * @desc Danmu Interval? unit: ms
 * @default 1000
 * 
 * @param DonateInGame
 * @text Donate In Game Settings
 * @desc Donate In Game Settings.
 * @type struct<DonateInGameStruct>
 *
 * @param LoginCommonEventId
 * @text Login Common Event
 * @desc Do common event by this id when player logged in. Set 0 to disable.
 * @type common_event
 * @default 0
 *
 * @param EnableMenuButton
 * @desc Enable MenuButton? true/false
 * @type boolean
 * @default true
 *
 * @param MenuButtonPositionX
 * @desc Menu Button Position X? Uint: rem.
 * @default 0
 *
 * @param MenuButtonPositionY
 * @desc Menu Button Position Y? Uint: rem.
 * @default 20
 *
 * @param EnableAuctionInGame
 * @desc Enable AuctionInGame? true/false
 * @type boolean
 * @default true
 *
 * @param AuctionInGameText
 * @desc AuctionInGame Text
 * @default Auction In Game
 *
 * @param AuctionInGameFullText
 * @desc AuctionInGame Full Text
 * @default Full
 *
 * @param AuctionInGameColumn
 * @desc AuctionInGame Column
 * @default 4
 *
 * @param PreventAndroidReturnKey
 * @desc Prevent Android Return Key? true/false
 * @type boolean
 * @default true
 * 
 * @param EnableHandleShowText
 * @desc Enable Handle Show Text? true/false
 * @type boolean
 * @default false
 *
 * @param HandleShowTextText
 * @desc HandleShowText Text
 * @default Language
 *
 * @param HandleShowTextKey
 * @desc HandleShowText key for aes decrypt.
 * @default 0123456789abcdef
 * 
 * @param AltTopList
 * @text Alt Top List Settings
 * @type struct<AltTopListStruct>
 * @desc A "toggle" button that allows players to turn the UI
 * on and off.
 * 
 * @param Button
 * @text Button Settings
 * @desc Such as Page Up/Down Button Settings etc.
 * @type struct<ButtonStruct>
 * @default {"enable":"true","wheelThreshold":"20","KeyButton":"[\"{\\\"name\\\":\\\"pageUp\\\",\\\"enable\\\":\\\"true\\\",\\\"inputTrigger\\\":\\\"pageup\\\",\\\"image\\\":\\\"Arrow8\\\",\\\"opacity\\\":\\\"0.2\\\",\\\"x\\\":\\\"70\\\",\\\"y\\\":\\\"0\\\",\\\"soundEffect\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Cursor2\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"90\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\"}\\\"}\",\"{\\\"name\\\":\\\"pageDown\\\",\\\"enable\\\":\\\"true\\\",\\\"inputTrigger\\\":\\\"pagedown\\\",\\\"image\\\":\\\"Arrow2\\\",\\\"opacity\\\":\\\"0.2\\\",\\\"x\\\":\\\"73\\\",\\\"y\\\":\\\"0\\\",\\\"soundEffect\\\":\\\"{\\\\\\\"name\\\\\\\":\\\\\\\"Cursor2\\\\\\\",\\\\\\\"volume\\\\\\\":\\\\\\\"90\\\\\\\",\\\\\\\"pitch\\\\\\\":\\\\\\\"100\\\\\\\",\\\\\\\"pan\\\\\\\":\\\\\\\"0\\\\\\\"}\\\"}\"]"}
 * 
 * @param commandRemember
 * @text Command Remember
 * @desc Command Remember? true/false, default:false.
 * @type boolean
 * @default false
 * 
 * @param episodeSelectionCommonEventId
 * @text Episode Selection Common Event
 * @desc Do common event by this id when player select episode. Set 0 to disable. default:0.
 * @type common_event
 * @default 0
 * 
 * @param episodeSelectionThreshold
 * @text Episode Selection Threshold
 * @desc Must exceeds this threshold can do common event when player select episode. default:0.
 * @type number
 * @default 0
 * 
 * @param CloudData
 * @text CloudData Settings
 * @type struct<CloudDataStruct>
 * @desc CloudData settings.
 * 
 * @param Reg
 * @text Reg Settings
 * @type struct<RegStruct>
 * @desc Reg settings.
 * 
 * @param Exam
 * @text Exam Settings
 * @type struct<ExamStruct>
 * @desc Exam settings.
 * 
 */

/*~struct~AltTopListStruct:
 * @param Enable
 * @text Enable
 * @type boolean
 * @desc Enable Alt Top List? true/false
 * @default true
 * 
 * @param ShowInMenu
 * @text Show In Menu
 * @type boolean
 * @desc Show Alt Top List button In Menu? true/false
 * @default true
 * 
 * @param CommandText
 * @text Command Text In Menu
 * @desc Alt Top List Command Text In Menu
 * @default Top List
 * 
 * @param activeColumn
 * @text Column to show
 * @type text[]
 * @desc Column will be show. Ex. "Lastest", "NickName", "Actor", "PlayerCE", "TimeOL", "Level", "Gold", "Steps", "PlayTime", "SaveTimes", "BattleTimes", "VictoryTimes", "EscapeTimes"
 * @default ["Lastest", "NickName", "Actor", "PlayerCE", "TimeOL", "Level", "Gold", "Steps", "PlayTime", "SaveTimes", "BattleTimes", "VictoryTimes", "EscapeTimes"]
 * 
 * @param orderbyColumn
 * @text order by Column
 * @type select
 * @option Lastest
 * @value Lastest
 * @option PlayerCE
 * @value PlayerCE
 * @option TimeOL
 * @value TimeOL
 * @option Level
 * @value Level
 * @option Gold
 * @value Gold
 * @option Steps
 * @value Steps
 * @option PlayTime
 * @value PlayTime
 * @option SaveTimes
 * @value SaveTimes
 * @option BattleTimes
 * @value BattleTimes
 * @option VictoryTimes
 * @value VictoryTimes
 * @option EscapeTimes
 * @value EscapeTimes
 * @desc order by Column.
 * @default Lastest
 * 
 * @param SortMethod
 * @text Sort Method
 * @type select
 * @option In Order
 * @value In Order
 * @option Reverse Order
 * @value Reverse Order
 * @desc Sort Method.
 * @default Reverse Order
 * 
 * @param x
 * @text X
 * @type text
 * @desc X position of the alt top list. Formulas are allowed.
 * (ex. Graphics.width - 96)
 * @default 20
 * 
 * @param y
 * @text Y
 * @type text
 * @desc Y position of the alt top list. Formulas are allowed.
 * (ex. Graphics.height - 96)
 * @default 40
 * 
 * @param maxWidth
 * @text max Width
 * @type text
 * @desc max width per column. Formulas are allowed.
 * (ex. Graphics.width - 96)
 * @default 64
 * 
 * @param maxHeight
 * @text max Height
 * @type text
 * @desc max height per row. Formulas are allowed.
 * (ex. Graphics.height - 96)
 * @default 32
 * 
 * @param spacing
 * @text spacing
 * @type text
 * @desc Spacing between two columns. Formulas are allowed.
 * (ex. Graphics.width - 96)
 * @default 20
 * 
 * @param align
 * @text align
 * @type select
 * @option left
 * @value left
 * @option center
 * @value center
 * @option right
 * @value right
 * @desc column alignment.
 * @default center
 * 
 * @param activeColumnBackup
 * @text All Column Backup
 * @type text[]
 * @desc All column backup here, you should not change this. Just for read only or copy from.
 * Ex. "Lastest", "NickName", "Actor", "PlayerCE", "TimeOL", "Level", "Gold", "Steps", "PlayTime", "SaveTimes", "BattleTimes", "VictoryTimes", "EscapeTimes"
 * @default ["Lastest", "NickName", "Actor", "PlayerCE", "TimeOL", "Level", "Gold", "Steps", "PlayTime", "SaveTimes", "BattleTimes", "VictoryTimes", "EscapeTimes"]
 * 
 */

/*~struct~ButtonStruct:
 * @param enable
 * @text Enable Button
 * @desc Enable Button? true/false
 * @type boolean
 * @default true
 * 
 * @param wheelThreshold
 * @text Wheel Threshold
 * @desc Wheel Threshold. Allowed values: 0 - 100, default: 20
 * @type number
 * @min 0
 * @max 100
 * @default 20
 * 
 * @param KeyButton
 * @text Key Button Settings
 * @desc Such as Page Up/Down Button Settings etc.
 * @type struct<KeyButtonStruct>[]
 */

/*~struct~KeyButtonStruct:
 * @param enable
 * @text Enable Button
 * @desc Enable Button? true/false
 * @type boolean
 * @default true
 * 
 * @param name
 * @text Name
 * @type text
 * @desc The name of the button
 * 
 * @param inputTrigger
 * @text Input Code
 * @desc The input code triggered when the button is pressed.
 * @type select
 * @option up
 * @value up
 * @option down
 * @value down
 * @option left
 * @value left
 * @option right
 * @value right
 * @option ok
 * @value ok
 * @option escape
 * @value escape
 * @option pageup
 * @value pageup
 * @option pagedown
 * @value pagedown
 * @desc column alignment.
 * @default up
 * 
 * @param image
 * @text Image
 * @type file
 * @dir img/system
 * @desc File path for the button image
 * @require 1
 * 
 * @param opacity
 * @text Opacity
 * @desc The image css opacity. 0-1
 * @type text
 * @default 1
 * 
 * @param x
 * @text X
 * @type text
 * @desc X position of the button. Uint: rem, 1rem ≈ 10px.
 * @default 0
 * 
 * @param y
 * @text Y
 * @type text
 * @desc Y position of the button. Uint: rem, 1rem ≈ 10px.
 * @default 0
 * 
 * @param soundEffect
 * @text Sound Effect
 * @type struct<soundEffect>
 * @desc Sound Effect to play when button is pressed.
 * Depending on scenario, SE might already play. Test first.
 */

/*~struct~soundEffect:
 * @param name
 * @text Sound Effect Name
 * @type file
 * @dir audio/se
 * @desc Sound effect to play when the button is pressed.
 * @default
 * @require 1
 * 
 * @param volume
 * @text Volume
 * @type number
 * @min 0
 * @max 100
 * @desc Volume of the sound effect, in %
 * Allowed values: 0% - 100%
 * @default 90
 * 
 * @param pitch
 * @text Pitch
 * @type number
 * @min 50
 * @max 150
 * @desc Pitch of the sound effect, in %
 * Allowed values: 50% - 150%
 * @default 100
 * 
 * @param pan
 * @text Pan
 * @type number
 * @min -100
 * @max 100
 * @desc Pan of the sound effect
 * Allowed values: -100 - 100
 * @default 0
 * 
 */

/*~struct~DonateInGameStruct:
 * @param enable
 * @desc Enable DonateInGame? true/false
 * @type boolean
 * @default true
 * 
 * @param showInMenu
 * @text Show In Menu
 * @desc Show In Menu? true/false
 * @type boolean
 * @default true
 *
 * @param commandText
 * @text Command Text In Menu
 * @desc Command Text In Menu
 * @type text
 * @default Donate In Game
 *
 * @param FullText
 * @text Full Text
 * @desc Full Text
 * @type text
 * @default Full
 * 
 * @param popularText
 * @text Popular Text
 * @desc Popular Text
 * @type text
 * @default Popular
 * 
 * @param generalText
 * @text General Text
 * @desc General Text
 * @type text
 * @default General
 * 
 * @param myStoreText
 * @text My Store Text
 * @desc My Store Text
 * @type text
 * @default My Store
 * 
 * @param amountText
 * @text Amount Text
 * @desc Amount Text
 * @type text
 * @default Amount:
 * 
 * @param currencyText
 * @text Currency Text
 * @desc Currency Text
 * @type text
 * @default USD
 *
 * @param column
 * @text Column
 * @desc Column
 * @type number
 * @min 1
 * @max 10
 * @default 4
 * 
 * @param popularAmount
 * @text Popular Amount
 * @desc Popular Amount
 * @type number
 * @default 4
 * 
 * @param autoSaveAfterDonate
 * @text Auto Save After Donate
 * @desc The save file id that you want Auto Save After Donate. Default:21
 * @type number
 * @default 21
 * 
 * @param autoSaveAfterNewGame
 * @text Auto Save After NewGame
 * @desc The save file id that you want Auto Save After NewGame with bought items. Default:22
 * @type number
 * @default 22
 * 
 * @param NewGame
 * @text NewGame Settings
 * @desc The NewGame Settings
 * @type struct<NewGameStruct>
 * 
 * @param displayGoldChangeInformation
 * @text Display Gold Change Information
 * @desc Display Gold Change Information? true/false default:true
 * @type boolean
 * @default true
 * 
 * @param displayItemChangeInformation
 * @text Display Item Change Information
 * @desc Display Item Change Information? true/false default:true
 * @type boolean
 * @default true
 * 
 * @param displayWeaponChangeInformation
 * @text Display Weapon Change Information
 * @desc Display Weapon Change Information? true/false default:true
 * @type boolean
 * @default true
 * 
 * @param displayArmorChangeInformation
 * @text Display Armor Change Information
 * @desc Display Armor Change Information? true/false default:true
 * @type boolean
 * @default true
 * 
 * @param displaySwitchesToggleInformation
 * @text Display Switches Toggle Information
 * @desc Display Switches Toggle Information? true/false default:true
 * @type boolean
 * @default true
 * 
 * @param displayVariablesChangeInformation
 * @text Display Variables Change Information
 * @desc Display Variables Change Information? true/false default:true
 * @type boolean
 * @default true
 * 
 * @param displayCommonEventInformation
 * @text Display Common Event Information
 * @desc Display Common Event Information? true/false default:true
 * @type boolean
 * @default true
 * 
 */

/*~struct~NewGameStruct:
 * @param enable
 * @desc Enable NewGame? true/false
 * @type boolean
 * @default true
 *
 * @param buttonText
 * @text Button Text
 * @desc Button Text
 * @type text
 * @default NewGame...
 * 
 */

/*~struct~RegStruct:
 * @param Enable
 * @text Enable
 * @type boolean
 * @desc Enable Reg? true/false default: true
 * @default true
 * 
 * @param ButtonText
 * @text Button Text
 * @desc Button Text. default: Reg
 * @type text
 * @default Reg
 * 
 * @param ModalBgColor
 * @text Modal BgColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc. default: black
 * @type text
 * @default black
 * 
 * @param ModalTextColor
 * @text Modal Text Color
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc. default: white
 * @type text
 * @default white
 *
 * @param ModalOpacity
 * @text Modal Opacity
 * @desc The css opacity of login modal. 0-1 default: 0.8
 * @type text
 * @default 0.8
 * 
 * @param UsernameText
 * @text Username Text
 * @desc Username Text. default: Username
 * @type text
 * @default Username
 * 
 * @param PasswordText
 * @text Password Text
 * @desc Password Text. default: Password
 * @type text
 * @default Password
 * 
 * @param ConfirmPasswordText
 * @text Confirm Password Text
 * @desc Confirm Password Text. default: Confirm Password
 * @type text
 * @default Confirm Password
 * 
 * @param UsernamePlaceholderText
 * @text Username Placeholder Text
 * @desc Username Placeholder Text. default: Please enter the username
 * @type text
 * @default Please enter the username
 * 
 * @param PasswordPlaceholderText
 * @text Password Placeholder Text
 * @desc Password Placeholder Text. default: Please enter the password
 * @type text
 * @default Please enter the password
 * 
 * @param ConfirmPasswordPlaceholderText
 * @text Confirm Password Placeholder Text
 * @desc Confirm Password Placeholder Text. default: Please enter the password again
 * @type text
 * @default Please enter the password again
 * 
 * @param RegingText
 * @text Reging Text
 * @desc Reging Text. default: Reging...
 * @type text
 * @default Reging...
 * 
 * @param PleaseLoginText
 * @text Please Login Text
 * @desc Please Login Text. default: Please Login
 * @type text
 * @default Please Login
 * 
 * @param RegSuccessText
 * @text Reg Success Text
 * @desc Reg Success Text. default: Reg Success
 * @type text
 * @default Reg Success
 * 
 * @param RegFailText
 * @text Reg Fail Text
 * @desc Reg Fail Text. default: Reg Fail
 * @type text
 * @default Reg Fail
 * 
 * @param ClearText
 * @text Clear Text
 * @desc Clear Text. default: Clear
 * @type text
 * @default Clear
 * 
 * @param CloseText
 * @text Close Text
 * @desc Close Text. default: Close
 * @type text
 * @default Close
 * 
 * @param UsernamePasswordCanNotBeEmptyText
 * @text username/password can not be empty Text
 * @desc username/password can not be empty Text. default: username/password can not be empty
 * @type text
 * @default username/password can not be empty
 * 
 * @param DifferentPasswordsTwiceText
 * @text Different Passwords Twice Text
 * @desc Different passwords twice Text. default: Different passwords twice
 * @type text
 * @default Different passwords twice
 */

/*~struct~CloudDataStruct:
 * @param enable
 * @text Enable
 * @type boolean
 * @desc Enable CloudData? true/false. default: false
 * @default false
 * 
 * @param EnableLocalCache
 * @text Enable Local Cache
 * @desc Enable cloud data Local Cache? true/false. default: false
 * @type boolean
 * @default false
 * 
 * @param LocalCacheUUID
 * @text Local Cache UUID
 * @desc Must be unique with others app. Use this to get one: https://666rpg.com/tool/mmscq.html default: Ge79ZlaC6vrJwGqT
 * @type text
 * @default Ge79ZlaC6vrJwGqT
 * 
 * @param ForceUpdateText
 * @text Force Update Text
 * @desc Cloud Data Force Update Text. default: Cloud Data Force Update
 * @type text
 * @default Cloud Data Force Update
 * 
 * @param FileList
 * @text File List
 * @desc Such as Items.json, Weapons.json, Armors.json, MapInfos.json, MapXXX.json etc.
 * @type select[]
 * @option Actors.json
 * @value Actors.json
 * @option Animations.json
 * @value Animations.json
 * @option Armors.json
 * @value Armors.json
 * @option Classes.json
 * @value Classes.json
 * @option CommonEvents.json
 * @value CommonEvents.json
 * @option Enemies.json
 * @value Enemies.json
 * @option Items.json
 * @value Items.json
 * @option MapInfos.json
 * @value MapInfos.json
 * @option Skills.json
 * @value Skills.json
 * @option States.json
 * @value States.json
 * @option System.json
 * @value System.json
 * @option Tilesets.json
 * @value Tilesets.json
 * @option Troops.json
 * @value Troops.json
 * @option Weapons.json
 * @value Weapons.json
 * @option MapXXX.json
 * @value MapXXX.json
 */

/*~struct~ExamStruct:
 * @param Enable
 * @text Enable
 * @type boolean
 * @desc Enable Exam? true/false default: true
 * @default true
 * 
 * @param ButtonText
 * @text Button Text
 * @desc Button Text. default: Exam
 * @type text
 * @default Exam
 * 
 * @param ModalBgColor
 * @text Modal BgColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc. default: black
 * @type text
 * @default black
 * 
 * @param ModalTextColor
 * @text Modal Text Color
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc. default: white
 * @type text
 * @default white
 *
 * @param ModalOpacity
 * @text Modal Opacity
 * @desc The css opacity of login modal. 0-1 default: 0.8
 * @type text
 * @default 0.8
 * 
 * @param FailText
 * @text Fail Text
 * @desc Fail Text. default: Fail
 * @type text
 * @default Fail
 * 
 * @param IntroText
 * @text Intro Text
 * @desc Intro Text. default: Intro
 * @type text
 * @default Intro
 * 
 * @param RadioText
 * @text Radio Text
 * @desc Radio Text. default: Radio
 * @type text
 * @default Radio
 * 
 * @param CheckboxText
 * @text Checkbox Text
 * @desc Checkbox Text. default: Checkbox
 * @type text
 * @default Checkbox
 * 
 * @param BooleanText
 * @text Boolean Text
 * @desc Boolean Text. default: Boolean
 * @type text
 * @default Boolean
 * 
 * @param NextText
 * @text Next Text
 * @desc Next Text. default: Next
 * @type text
 * @default Next
 * 
 * @param CloseText
 * @text Close Text
 * @desc Close Text. default: Close
 * @type text
 * @default Close
 * 
 * @param isShowResult
 * @text Show Result
 * @desc Show Result? default: true
 * @type boolean
 * @default true
 * 
 * @param AllDoneText
 * @text All Done Text
 * @desc All Done Text. default: All Done
 * @type text
 * @default All Done
 * 
 * @param ResultText
 * @text Result Text
 * @desc Result Text. default: Result
 * @type text
 * @default Result
 * 
 * @param TotalScoreText
 * @text Total Score Text
 * @desc Total Score Text. default: Total Score
 * @type text
 * @default Total Score
 * 
 * @param ScoreText
 * @text Score Text
 * @desc Score Text. default: Score
 * @type text
 * @default Score
 * 
 * @param TotalAmountText
 * @text Total Amount Text
 * @desc Total Amount Text. default: Total Amount
 * @type text
 * @default Total Amount
 * 
 * @param RightAmountText
 * @text Right Amount Text
 * @desc Right Amount Text. default: Right Amount
 * @type text
 * @default Right Amount
 * 
 * @param WrongAmountText
 * @text  Wrong Amount Text
 * @desc  Wrong Amount Text. default:  Wrong Amount
 * @type text
 * @default  Wrong Amount
 * 
 * @param TimeCostText
 * @text Time Cost Text
 * @desc Time Cost Text. default: Time Cost
 * @type text
 * @default Time Cost
 * 
 * @param TimeCostTemplate
 * @text Time Cost Template
 * @desc Time Cost Template. hh,h=hour;mm,m=minute;ss,s=second default: hh:mm:ss
 * @type text
 * @default hh:mm:ss
 * 
 */




// Imported
var Imported = Imported || {};
Imported.AXY_AjaxNetStuff = true;

// Parameter Variables
AXY.AjaxNetStuff.Parameters = PluginManager.parameters('AXY_AjaxNetStuff');
AXY.AjaxNetStuff.Param = AXY.AjaxNetStuff.Param || {};
AXY.AjaxNetStuff.Alias = AXY.AjaxNetStuff.Alias || {};
AXY.AjaxNetStuff.Variables = AXY.AjaxNetStuff.Variables || {};
AXY.AjaxNetStuff.Function = AXY.AjaxNetStuff.Function || {};
AXY.AjaxNetStuff.Instance = AXY.AjaxNetStuff.Instance || {};

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
AXY.AjaxNetStuff.Param.EnableVerCheckNotice = AXY.AjaxNetStuff.Parameters['EnableVerCheckNotice'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.VerLocal = String(AXY.AjaxNetStuff.Parameters['Version']);
AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeSucc = parseInt(AXY.AjaxNetStuff.Parameters['VerCheckAutoDismissTimeSucc']);
AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeErr = parseInt(AXY.AjaxNetStuff.Parameters['VerCheckAutoDismissTimeErr']);
AXY.AjaxNetStuff.Variables.VerCloud = String("");
AXY.AjaxNetStuff.Variables.VerText = String("");
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
//DonateInGame
/*AXY.AjaxNetStuff.Param.EnableDonateInGame = AXY.AjaxNetStuff.Parameters['EnableDonateInGame'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.DonateInGameText = String(AXY.AjaxNetStuff.Parameters['DonateInGameText']);
AXY.AjaxNetStuff.Param.DonateInGameFullText = String(AXY.AjaxNetStuff.Parameters['DonateInGameFullText']);
AXY.AjaxNetStuff.Param.DonateInGameColumn = parseInt(AXY.AjaxNetStuff.Parameters['DonateInGameColumn']);*/
AXY.AjaxNetStuff.Param.DonateInGameFetchDone = false;
AXY.AjaxNetStuff.Param.DonateInGameFetchHbid = 0;
AXY.AjaxNetStuff.Param.DonateInGameFee = 0;
//LoginCommonEventId
AXY.AjaxNetStuff.Param.LoginCommonEventId = parseInt(AXY.AjaxNetStuff.Parameters['LoginCommonEventId']);
//menu/return button
AXY.AjaxNetStuff.Param.EnableMenuButton = AXY.AjaxNetStuff.Parameters['EnableMenuButton'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.MenuButtonPositionX = parseInt(AXY.AjaxNetStuff.Parameters['MenuButtonPositionX']);
AXY.AjaxNetStuff.Param.MenuButtonPositionY = parseInt(AXY.AjaxNetStuff.Parameters['MenuButtonPositionY']);
//auctioningame
AXY.AjaxNetStuff.Param.EnableAuctionInGame = AXY.AjaxNetStuff.Parameters['EnableAuctionInGame'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.AuctionInGameText = String(AXY.AjaxNetStuff.Parameters['AuctionInGameText']);
AXY.AjaxNetStuff.Param.AuctionInGameFullText = String(AXY.AjaxNetStuff.Parameters['AuctionInGameFullText']);
AXY.AjaxNetStuff.Param.AuctionInGameColumn = parseInt(AXY.AjaxNetStuff.Parameters['AuctionInGameColumn']);
AXY.AjaxNetStuff.Param.AuctionInGameFetchDone = false;
AXY.AjaxNetStuff.Param.AuctionInGameFetchHbid = 0;
AXY.AjaxNetStuff.Param.AuctionInGameFee = 0;
//PreventAndroidReturnKey
AXY.AjaxNetStuff.Param.PreventAndroidReturnKey = AXY.AjaxNetStuff.Parameters['PreventAndroidReturnKey'].toLowerCase() === 'true';
//autoSaveAfterDonate
//AXY.AjaxNetStuff.Param.autoSaveAfterDonate = parseInt(AXY.AjaxNetStuff.Parameters['autoSaveAfterDonate']);
//HandleShowText
AXY.AjaxNetStuff.Param.EnableHandleShowText = AXY.AjaxNetStuff.Parameters['EnableHandleShowText'].toLowerCase() === 'true';
AXY.AjaxNetStuff.Param.HandleShowTextText = String(AXY.AjaxNetStuff.Parameters['HandleShowTextText']);
AXY.AjaxNetStuff.Param.HandleShowTextKey = String(AXY.AjaxNetStuff.Parameters['HandleShowTextKey']);

//=============================================================================
// Utils
//=============================================================================
// Create a utility function to parse complex parameters.
//=============================================================================
Utils.recursiveParse = function (param) {
	try {
		if (typeof JSON.parse(param) == "object") {
			return JSON.parse(param, function (key, value) {
				try {
					return this.recursiveParse(value);
				} catch (e) {
					return value;
				}
			}.bind(this));
		} else {
			return JSON.parse(param, function (key, value) {
				return value;
			}.bind(this));
		}
	} catch (e) {
		return param;
	}
};
Utils.getRndInt = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
Utils.shuffleSort = function (arr) {
	var n = arr.length;

	while (n--) {
		var index = Math.floor(Math.random() * n);
		var temp = arr[index];
		arr[index] = arr[n];
		arr[n] = temp;
		// ES6的解耦交换方式： [arr[index], arr[n]] = [arr[n], arr[index]];
	}
	return arr;
};
Utils.formatDuring = function (ms, fmt) {
	if (!ms || !fmt) {
		return '';
	}
	//var days = parseInt(ms / (1000 * 60 * 60 * 24));
	var hours = parseInt((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = parseInt((ms % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = (ms % (1000 * 60)) / 1000;
	var str = fmt;
	if (str.indexOf('hh') >= 0) {
		if (hours < 10) {
			hours = '0' + hours;
		}
		str = str.replace('hh', hours);
	} else if (str.indexOf('h') >= 0) {
		str = str.replace('h', hours);
	}
	if (str.indexOf('mm') >= 0) {
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		str = str.replace('mm', minutes);
	} else if (str.indexOf('m') >= 0) {
		str = str.replace('m', minutes);
	}
	if (str.indexOf('ss') >= 0) {
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		str = str.replace('ss', seconds);
	} else if (str.indexOf('s') >= 0) {
		str = str.replace('s', seconds);
	}
	return str;
}
//=============================================================================
// Parameters
//=============================================================================
// Read and parse parameters into a locally scoped Parameters object.
//=============================================================================
Object.keys(AXY.AjaxNetStuff.Parameters).forEach(function (key) {
	return AXY.AjaxNetStuff.Param[key] = Utils.recursiveParse(AXY.AjaxNetStuff.Parameters[key]);
});
//console.log(AXY.AjaxNetStuff.Param)
//var a = AXY.AjaxNetStuff.Param.AltTopList.y
//console.log(a)

//Variables
//FetchServerTSV
AXY.AjaxNetStuff.Variables.timestamp = "";
AXY.AjaxNetStuff.Variables.datetime = "";
AXY.AjaxNetStuff.Variables.variable = null;
AXY.AjaxNetStuff.Variables.isonline = false;
//Toplist
AXY.AjaxNetStuff.Variables.toplist = [];
AXY.AjaxNetStuff.Variables.gamename = '';
AXY.AjaxNetStuff.Variables.gameName = AXY.AjaxNetStuff.Param.name ? AXY.AjaxNetStuff.Param.name : '666rpg.com';
AXY.AjaxNetStuff.Variables.totalplayer = 0;
AXY.AjaxNetStuff.Variables.loggedin = false;
AXY.AjaxNetStuff.Variables.AltTopList = {};
AXY.AjaxNetStuff.Variables.AltTopList.activeColumn = {};
AXY.AjaxNetStuff.Variables.AltTopList.loading = {};
//URL
if (AXY.AjaxNetStuff.Param.AppID > 0) {
	AXY.AjaxNetStuff.Variables.URL = 'https://shanghai.666rpg.com:666/game/detail/id/' + AXY.AjaxNetStuff.Param.AppID;
} else {
	AXY.AjaxNetStuff.Variables.URL = AXY.AjaxNetStuff.Param.URL
		//.replace('http://', 'https://')
		.replace('zhongchou', 'game')
		.replace('product', 'detail');
}
AXY.AjaxNetStuff.Param.URL = AXY.AjaxNetStuff.Variables.URL;
AXY.AjaxNetStuff.Variables.URL = AXY.AjaxNetStuff.Variables.URL.replace('game', 'rmmvgame').replace('detail', 'tmpAction');

//fixed, lock top this statement.
//isonline
var AXY_AjaxFetchServerTSVURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgameFetchServerTSV');
var AXY_AjaxFetchServerState = {
	isonline: function () {
		$.ajax({
			url: AXY_AjaxFetchServerTSVURL,
			type: 'POST',
			dataType: 'json',
			async: false,
			timeout: 10000,
			data: {
				action: 'isonline'
			},
			success: function (data) {
				if (data.status) {
					if (data['rs'] == "yes") {
						AXY.AjaxNetStuff.Variables.isonline = true;
					}
				} else {
					console.log(data);
					$.toaster({
						message: data.info + ', ERRORCODE: ' + data.error,
						color: 'red'
					});
				};
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				//console.log(XMLHttpRequest);
				//console.log(textStatus);
				//console.log(errorThrown);
				//$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
			},
			complete: function (XMLHttpRequest, textStatus) {
				//console.log(XMLHttpRequest);
				//console.log(textStatus);
				//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
			}
		});
		return AXY.AjaxNetStuff.Variables.isonline;
	}
};
//fixed, lock top this statement.

//ajax Exam
if (AXY.AjaxNetStuff.Param.Exam.Enable) {
	var AXY_AjaxExam = {
		show: function (examid, radioamount, checkboxamount, booleanamount, israndomorder) {
			if (!examid) {
				$.toaster({
					message: "缺少id",
					color: 'red'
				});
				return;
			}

			// $.toaster({
			// 	message: '<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">' + AXY.AjaxNetStuff.Param.LoadingText + '</span></div>',
			// 	color: 'white'
			// });

			var AXYAjaxExamTemplate =
				'<div class="modal fade" id="AXYAjaxExam" tabindex="-1" role="dialog" aria-labelledby="examModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">' +
				'<div class="modal-dialog modal-dialog-centered" role="document">' +
				'<div class="modal-content bg-black-transparent">' +
				'<div class="modal-header">' +
				'<h5 class="modal-title" id="examModalLabel"></h5>' +
				'<button type="button" class="close" style="color:' + AXY.AjaxNetStuff.Param.Exam.ModalTextColor + ';" id="AXYAjaxExamButtonClose1" aria-label="Close">' +
				'<span aria-hidden="true">&times;</span>' +
				'</button>' +
				'</div>' +
				'<div class="modal-body">' +
				'<form>' +
				'<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">' + AXY.AjaxNetStuff.Param.LoadingText + '</span></div>' +
				'</form>' +
				'</div>' +
				'<div class="modal-footer">' +
				'<button type="button" class="btn btn-secondary" id="AXYAjaxExamButtonUse">' + AXY.AjaxNetStuff.Param.Exam.ButtonText + '</button>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'<style>#AXYAjaxExam .bg-black-transparent{background-color:' + AXY.AjaxNetStuff.Param.Exam.ModalBgColor + ';color:' + AXY.AjaxNetStuff.Param.Exam.ModalTextColor + ';opacity:' + AXY.AjaxNetStuff.Param.Exam.ModalOpacity + ';font-family:GameFont}' +
				'.AXYAjaxExamInput{imeMode:active}' +
				'</style>';
			AXYAjaxExamEntity = $('body').append(AXYAjaxExamTemplate);
			$("#AXYAjaxExam").modal("show");
			try {
				$gameSystem.setTouchMoveEnabled(false);
			} catch (e) {
				console.log(e);
			}
			$('#AXYAjaxExamButtonUse').attr("disabled", true);
			$('#AXYAjaxExamButtonUse').html('<div class="spinner-border" role="status"><span class="sr-only">' + AXY.AjaxNetStuff.Param.LoadingText + '</span></div>');
			$('#AXYAjaxExamButtonUse').unbind('click touchstart').bind('click touchstart', function () {
				if ($('#AXYAjaxExamButtonUse')[0].disabled) {
					//console.log($('#AXYAjaxExamButtonUse')[0].disabled);
					return;
				}
				//console.log($('#AXYAjaxExamButtonUse'));
				//console.log($('#AXYAjaxExamButtonUse')[0].disabled);

				$('#AXYAjaxExamButtonUse').attr("disabled", true);
				$('#AXYAjaxExamButtonUse').html('<div class="spinner-border" role="status"><span class="sr-only">' + AXY.AjaxNetStuff.Param.LoadingText + '</span></div>');
				//console.log($('#AXYAjaxExamButtonUse'));
				//console.log(typeof($('#AXYAjaxExamButtonUse')[0].disabled));
				//return;

				// if (!inputName || !inputPwd || !inputPwd2) {
				// 	$.toaster({
				// 		message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: " + AXY.AjaxNetStuff.Param.Exam.UsernamePasswordCanNotBeEmptyText,
				// 		color: 'red'
				// 	});
				// 	$('#AXYAjaxExamButtonUse').attr("disabled", false);
				// 	$('#AXYAjaxExamButtonUse').html(AXY.AjaxNetStuff.Param.Exam.ButtonText);
				// 	return false;
				// }
				// if (inputPwd != inputPwd2) {
				// 	$.toaster({
				// 		message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: " + AXY.AjaxNetStuff.Param.Exam.DifferentPasswordsTwiceText,
				// 		color: 'red'
				// 	});
				// 	$('#AXYAjaxExamButtonUse').attr("disabled", false);
				// 	$('#AXYAjaxExamButtonUse').html(AXY.AjaxNetStuff.Param.Exam.ButtonText);
				// 	return false;
				// }
				// $.toaster({
				// 	message: '<a href="' + AXY.AjaxNetStuff.Param.URL + '" target="_blank">' + AXY.AjaxNetStuff.Variables.gameName + '</a>: <div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">' + AXY.AjaxNetStuff.Param.LoadingText + '</span></div>' + AXY.AjaxNetStuff.Param.Exam.ExamingText,
				// 	color: 'white'
				// });
				AXY.AjaxNetStuff.Variables.examCurrentAnswerCounter = 0;
				AXY.AjaxNetStuff.Variables.examStartTime = new Date();
				AXY.AjaxNetStuff.Variables.examScore = 0;
				AXY.AjaxNetStuff.Variables.examRightAnswer = 0;
				AXY.AjaxNetStuff.Variables.examTotalScore = 0;
				AXY.AjaxNetStuff.Variables.examAnsweredQuestion = new Array();

				AXY_AjaxExam.showQuestion(examid);
			});

			$('#AXYAjaxExamButtonClose,#AXYAjaxExamButtonClose1').unbind('click touchstart').bind('click touchstart', function () {
				AXY_AjaxExam.hide();
			});

			var AXY_AjaxExamURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgameexam');
			$.ajax({
				url: AXY_AjaxExamURL,
				type: 'POST',
				dataType: 'json',
				data: {
					sid: localStorage.getItem(AXY.AjaxNetStuff.Param.CloudData.LocalCacheUUID + AXY.AjaxNetStuff.Param.AppID + 'sid'),
					examid: examid
				},
				success: function (data) {
					console.log(data);
					if (data.status) {
						if (radioamount != undefined) {
							AXY.AjaxNetStuff.Variables.examRadioAmount = radioamount;
						} else {
							AXY.AjaxNetStuff.Variables.examRadioAmount = data.info.radioamount;
						}
						if (checkboxamount != undefined) {
							AXY.AjaxNetStuff.Variables.examCheckboxAmount = checkboxamount;
						} else {
							AXY.AjaxNetStuff.Variables.examCheckboxAmount = data.info.checkboxamount;
						}
						if (booleanamount != undefined) {
							AXY.AjaxNetStuff.Variables.examBooleanAmount = booleanamount;
						} else {
							AXY.AjaxNetStuff.Variables.examBooleanAmount = data.info.booleanamount;
						}
						if (israndomorder != undefined) {
							AXY.AjaxNetStuff.Variables.examIsRandomOrder = israndomorder;
						} else {
							AXY.AjaxNetStuff.Variables.examIsRandomOrder = data.info.israndomorder;
						}
						try {
							$("#AXYAjaxExam h5").html(decodeURIComponent(window.atob(data.info.name)));
							$("#AXYAjaxExam form").html('<div class="form-group row">' +
								'<label class="col-form-label col-sm-5">' + AXY.AjaxNetStuff.Param.Exam.IntroText + '</label>' +
								'<div class="col-sm-7">' + decodeURIComponent(window.atob(data.info.intro)) + '</div>' +
								'</div>' +
								'<div class="form-group row">' +
								'<label class="col-form-label col-sm-5">' + AXY.AjaxNetStuff.Param.Exam.RadioText + '</label>' +
								'<div class="col-sm-7">' + AXY.AjaxNetStuff.Variables.examRadioAmount + '</div>' +
								'</div>' +
								'<div class="form-group row">' +
								'<label class="col-form-label col-sm-5">' + AXY.AjaxNetStuff.Param.Exam.CheckboxText + '</label>' +
								'<div class="col-sm-7">' + AXY.AjaxNetStuff.Variables.examCheckboxAmount + '</div>' +
								'</div>' +
								'<div class="form-group row">' +
								'<label class="col-form-label col-sm-5">' + AXY.AjaxNetStuff.Param.Exam.BooleanText + '</label>' +
								'<div class="col-sm-7">' + AXY.AjaxNetStuff.Variables.examBooleanAmount + '</div>' +
								'</div>');
						} catch (e) {
							console.log(e);
						}
					} else {
						console.log(data);
						$.toaster({
							message: AXY.AjaxNetStuff.Param.Exam.FailText + ', ERROR: ' + data.info + ', ERRORCODE: ' + data.error,
							color: 'red'
						});
					};
					$('#AXYAjaxExamButtonUse').attr("disabled", false);
					$('#AXYAjaxExamButtonUse').html(AXY.AjaxNetStuff.Param.Exam.ButtonText);
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					console.log(XMLHttpRequest);
					console.log(textStatus);
					console.log(errorThrown);
					$.toaster({
						title: 'ERROR: ',
						message: textStatus + ' ' + errorThrown,
						color: 'red'
					});
					$('#AXYAjaxExamButtonUse').attr("disabled", false);
					$('#AXYAjaxExamButtonUse').html(AXY.AjaxNetStuff.Param.Exam.ButtonText);
				},
				complete: function (XMLHttpRequest, textStatus) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//$.toaster({
					//	title: 'COMPLETE: ',
					//	message: textStatus,
					//	color: 'gray'
					//});
					$('#AXYAjaxExamButtonUse').attr("disabled", false);
					$('#AXYAjaxExamButtonUse').html(AXY.AjaxNetStuff.Param.Exam.ButtonText);
				}
			});
		},
		hide: function () {
			$("#AXYAjaxExam").modal("hide")
			try {
				$gameSystem.setTouchMoveEnabled(true);
			} catch (e) {
				console.log(e);
			}
		},
		showQuestion: function (examid) {
			if (!examid) {
				$.toaster({
					message: "缺少id",
					color: 'red'
				});
				return;
			}
			// $.toaster({
			// 	message: '<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">' + AXY.AjaxNetStuff.Param.LoadingText + '</span></div>',
			// 	color: 'white'
			// });
			var AXY_AjaxExamURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgameexamquestion');
			$.ajax({
				url: AXY_AjaxExamURL,
				type: 'POST',
				dataType: 'json',
				data: {
					sid: localStorage.getItem(AXY.AjaxNetStuff.Param.CloudData.LocalCacheUUID + AXY.AjaxNetStuff.Param.AppID + 'sid'),
					examid: examid,
					radioamount: AXY.AjaxNetStuff.Variables.examRadioAmount,
					checkboxamount: AXY.AjaxNetStuff.Variables.examCheckboxAmount,
					booleanamount: AXY.AjaxNetStuff.Variables.examBooleanAmount,
					israndomorder: AXY.AjaxNetStuff.Variables.examIsRandomOrder,
					currentcounter: AXY.AjaxNetStuff.Variables.examCurrentAnswerCounter,
					answered: AXY.AjaxNetStuff.Variables.examAnsweredQuestion.toString()
				},
				success: function (data) {
					console.log(data);
					//return;
					if (data.status == 1) {
						AXY.AjaxNetStuff.Variables.examAnsweredQuestion.push(data.info.id);
						// var qhtml = '';
						var aTitle = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
						switch (parseInt(data.info.questiontype)) {
							default:
							case 1:
								var questionType = 'radio';
								var questionTypeText = AXY.AjaxNetStuff.Param.Exam.RadioText;
								break;
							case 2:
								var questionType = 'checkbox';
								var questionTypeText = AXY.AjaxNetStuff.Param.Exam.CheckboxText;
								break;
							case 3:
								var questionType = 'radio';
								var questionTypeText = AXY.AjaxNetStuff.Param.Exam.BooleanText;
								break;
						}
						try {
							$("#AXYAjaxExam form").html('<div class="form-group row">' +
								'<label class="col-form-label col-sm-3">' + questionTypeText + '</label>' +
								'<div class="col-sm-9">' + decodeURIComponent(window.atob(data.info.name)) + '</div>' +
								'</div>');
							var arr = decodeURIComponent(window.atob(data.info.intro)).split("\n");
						} catch (e) {
							console.log(e);
						}
						var linkarr = {};
						if (parseInt(data.info.israndomorder) == 1) {
							arr = Utils.shuffleSort(arr);
							for (var i = 0; i < arr.length; i++) {
								var qa = arr[i].split('=');
								linkarr[qa[0]] = aTitle[i] + '.' + qa[1];
								var qhtml = '<div class="form-group row">' +
									'<div class="col-sm-3"></div>' +
									'<div class="col-sm-9"><div class="form-check">' +
									'<input type="' + questionType + '" class="form-check-input AXYAjaxLoginInput" name="question" id="AXYAjaxExamQuestion' + i + '" value="' + qa[0] + '" />' +
									'<label for="AXYAjaxExamQuestion' + i + '" id="AXYAjaxExamQuestionLabel' + i + '" class="form-check-label">' + aTitle[i] + '.' + qa[1] + '</label>' +
									'</div>' +
									'</div>' +
									'</div>';
								$("#AXYAjaxExam form").append(qhtml);
								$('#AXYAjaxExamQuestion' + i + ',#AXYAjaxExamQuestionLabel' + i).unbind('click touchstart').bind('click touchstart', function () {
									if ($('#AXYAjaxExamQuestion' + i).prop("checked")) {
										$('#AXYAjaxExamQuestion' + i).attr("checked", false);
									} else {
										$('#AXYAjaxExamQuestion' + i).attr("checked", true);
									}
								});
							}
						} else {
							for (var i = 0; i < arr.length; i++) {
								var qa = arr[i].split('=');
								linkarr[qa[0]] = aTitle[i] + '.' + qa[1];
								var qhtml = '<div class="form-group row">' +
									'<div class="col-sm-3"></div>' +
									'<div class="col-sm-9"><div class="form-check">' +
									'<input type="' + questionType + '" class="form-check-input AXYAjaxLoginInput" name="question" id="AXYAjaxExamQuestion' + i + '" value="' + qa[0] + '" />' +
									'<label for="AXYAjaxExamQuestion' + i + '" id="AXYAjaxExamQuestionLabel' + i + '" class="form-check-label">' + aTitle[i] + '.' + qa[1] + '</label>' +
									'</div>' +
									'</div>' +
									'</div>';
								$("#AXYAjaxExam form").append(qhtml);
								$('#AXYAjaxExamQuestion' + i + ',#AXYAjaxExamQuestionLabel' + i).unbind('click touchstart').bind('click touchstart', function () {
									if ($('#AXYAjaxExamQuestion' + i).prop("checked")) {
										$('#AXYAjaxExamQuestion' + i).attr("checked", false);
									} else {
										$('#AXYAjaxExamQuestion' + i).attr("checked", true);
									}
								});
							}
						}
						$('#AXYAjaxExamButtonUse').text(AXY.AjaxNetStuff.Param.Exam.NextText);
						$('#AXYAjaxExamButtonUse').unbind('click touchstart').bind('click touchstart', function () {
							if ($('#AXYAjaxExamButtonUse')[0].disabled) {
								//console.log($('#AXYAjaxExamButtonUse')[0].disabled);
								return;
							}
							//console.log($('#AXYAjaxExamButtonUse'));
							//console.log($('#AXYAjaxExamButtonUse')[0].disabled);

							$('#AXYAjaxExamButtonUse').attr("disabled", true);
							$('#AXYAjaxExamButtonUse').html('<div class="spinner-border" role="status"><span class="sr-only">' + AXY.AjaxNetStuff.Param.LoadingText + '</span></div>');
							//console.log($('#AXYAjaxExamButtonUse'));
							//console.log(typeof($('#AXYAjaxExamButtonUse')[0].disabled));
							//return;

							if (questionType == 'radio') {
								console.log('You choose: ' + $("#AXYAjaxExam form input[name='question']:checked").val());
								console.log('The answer is ' + linkarr[data.info.answer] + ' (' + data.info.answer + ')');
								if ($("#AXYAjaxExam form input[name='question']:checked").val() == data.info.answer) {
									console.log('You are right');
									AXY.AjaxNetStuff.Variables.examScore += parseInt(data.info.score);
									AXY.AjaxNetStuff.Variables.examRightAnswer++;
								}
							} else if (questionType == 'checkbox') {
								var choosedarr = new Array();
								var chooseditem = new Array();
								$("#AXYAjaxExam form input[name='question']:checked").each(function (i) {
									choosedarr[i] = $(this).val();
									chooseditem[i] = linkarr[$(this).val()];
								});
								var answerarr = data.info.answer.split("\n");
								console.log('You choose: ' + choosedarr.sort().toString());
								console.log('The answer is ' + chooseditem.toString() + ' (' + answerarr.sort().toString() + ')');
								if (choosedarr.sort().toString() == answerarr.sort().toString()) {
									console.log('You are right');
									AXY.AjaxNetStuff.Variables.examScore += parseInt(data.info.score);
									AXY.AjaxNetStuff.Variables.examRightAnswer++;
								}
							}

							AXY.AjaxNetStuff.Variables.examCurrentAnswerCounter++;
							AXY.AjaxNetStuff.Variables.examTotalScore += parseInt(data.info.score);
							AXY_AjaxExam.showQuestion(examid);
						});
						$('#AXYAjaxExamButtonUse').attr("disabled", false);
						$('#AXYAjaxExamButtonUse').html(AXY.AjaxNetStuff.Param.Exam.NextText);
					} else if (data.status == 2) {
						//console.log('all done');
						if (AXY.AjaxNetStuff.Param.Exam.isShowResult) {
							$("#AXYAjaxExam form").html('<div class="form-group row">' +
								'<label class="col-form-label col-sm-3"></label>' +
								'<div class="col-sm-9">' + AXY.AjaxNetStuff.Param.Exam.ResultText + '</div>' +
								'</div>' +
								'<div class="form-group row">' +
								'<label class="col-form-label col-sm-5">' + AXY.AjaxNetStuff.Param.Exam.TimeCostText + '</label>' +
								'<div class="col-sm-7">' + Utils.formatDuring(new Date() - AXY.AjaxNetStuff.Variables.examStartTime, AXY.AjaxNetStuff.Param.Exam.TimeCostTemplate) + '</div>' +
								'</div>' +
								'<div class="form-group row">' +
								'<label class="col-form-label col-sm-5">' + AXY.AjaxNetStuff.Param.Exam.TotalScoreText + '</label>' +
								'<div class="col-sm-7">' + AXY.AjaxNetStuff.Variables.examTotalScore + '</div>' +
								'</div>' +
								'<div class="form-group row">' +
								'<label class="col-form-label col-sm-5">' + AXY.AjaxNetStuff.Param.Exam.ScoreText + '</label>' +
								'<div class="col-sm-7">' + AXY.AjaxNetStuff.Variables.examScore + '</div>' +
								'</div>' +
								'<div class="form-group row">' +
								'<label class="col-form-label col-sm-5">' + AXY.AjaxNetStuff.Param.Exam.TotalAmountText + '</label>' +
								'<div class="col-sm-7">' + AXY.AjaxNetStuff.Variables.examCurrentAnswerCounter + '</div>' +
								'</div>' +
								'<div class="form-group row">' +
								'<label class="col-form-label col-sm-5">' + AXY.AjaxNetStuff.Param.Exam.RightAmountText + '</label>' +
								'<div class="col-sm-7">' + AXY.AjaxNetStuff.Variables.examRightAnswer + '</div>' +
								'</div>' +
								'<div class="form-group row">' +
								'<label class="col-form-label col-sm-5">' + AXY.AjaxNetStuff.Param.Exam.WrongAmountText + '</label>' +
								'<div class="col-sm-7">' + (AXY.AjaxNetStuff.Variables.examCurrentAnswerCounter - AXY.AjaxNetStuff.Variables.examRightAnswer) + '</div>' +
								'</div>');
						} else {
							$("#AXYAjaxExam form").html('<div class="form-group row">' +
								'<label class="col-form-label col-sm-3"></label>' +
								'<div class="col-sm-9">' + AXY.AjaxNetStuff.Param.Exam.AllDoneText + '</div>' +
								'</div>');
						}
						$('#AXYAjaxExamButtonUse').attr("disabled", false);
						$('#AXYAjaxExamButtonUse').html(AXY.AjaxNetStuff.Param.Exam.CloseText);
						$('#AXYAjaxExamButtonUse').unbind('click touchstart').bind('click touchstart', function () {
							AXY_AjaxExam.hide();
						});
					} else {
						console.log(data);
						$.toaster({
							message: AXY.AjaxNetStuff.Param.Exam.FailText + ', ERROR: ' + data.info + ', ERRORCODE: ' + data.error,
							color: 'red'
						});
						$('#AXYAjaxExamButtonUse').attr("disabled", false);
						$('#AXYAjaxExamButtonUse').html(AXY.AjaxNetStuff.Param.Exam.NextText);
					};

				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					console.log(XMLHttpRequest);
					console.log(textStatus);
					console.log(errorThrown);
					$.toaster({
						title: 'ERROR: ',
						message: textStatus + ' ' + errorThrown,
						color: 'red'
					});
					$('#AXYAjaxExamButtonUse').attr("disabled", false);
					$('#AXYAjaxExamButtonUse').html(AXY.AjaxNetStuff.Param.Exam.NextText);
				},
				complete: function (XMLHttpRequest, textStatus) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//$.toaster({
					//	title: 'COMPLETE: ',
					//	message: textStatus,
					//	color: 'gray'
					//});
					// $('#AXYAjaxExamButtonUse').attr("disabled", false);
					// $('#AXYAjaxExamButtonUse').html(AXY.AjaxNetStuff.Param.Exam.NextText);
				}
			});
		}
	};
}

AXY.AjaxNetStuff.Variables.saidHello = false;
Utils.sayHello = function () {
	if (AXY.AjaxNetStuff.Variables.saidHello) {
		return;
	}

	if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
		var args = ['\n %c %c %c A XueYu Plugin - Ajax Net Stuff ' + AXY.AjaxNetStuff.VERSION + '  \u2764  %c  %c  http://www.666rpg.com/  %c %c \u266A%c\u266A%c\u266A \n\n', 'background: #FFCC00; padding:5px 0;', 'background: #FFCC00; padding:5px 0;', 'color: #FFCC00; background: #030307; padding:5px 0;', 'background: #FFCC00; padding:5px 0;', 'background: #FFFF99; padding:5px 0;', 'background: #FFCC00; padding:5px 0;', 'color: #FF9900; background: #fff; padding:5px 0;', 'color: #FF9900; background: #fff; padding:5px 0;', 'color: #FF9900; background: #fff; padding:5px 0;'];

		window.console.log.apply(console, args);
	} else if (window.console) {
		window.console.log('A XueYu Plugin - Ajax Net Stuff ' + AXY.AjaxNetStuff.VERSION + ' - http://www.666rpg.com/');
	}

	AXY.AjaxNetStuff.Variables.saidHello = true;
}
setTimeout(function () {
	Utils.sayHello()
}, 3000)

localforage.config({
	driver: localforage.INDEXEDDB, // Force INDEXEDDB; same as using setDriver()
	name: AXY.AjaxNetStuff.Param.CloudData.LocalCacheUUID + AXY.AjaxNetStuff.Param.AppID,
	version: 1.0,
	size: 49807360, // Size of database, in bytes. WebSQL-only for now.
	storeName: 'keyvaluepairs' + AXY.AjaxNetStuff.Param.AppID, // Should be alphanumeric, with underscores.
	description: AXY.AjaxNetStuff.Param.CloudData.LocalCacheUUID + AXY.AjaxNetStuff.Param.AppID + 'cache'
});
/*
AXY.AjaxNetStuff.Instance.localforage = localforage.createInstance({
	driver: localforage.INDEXEDDB, // Force INDEXEDDB; same as using setDriver()
	name: AXY.AjaxNetStuff.Param.CloudDataLocalCacheUUID,
	version: 1.0,
	size: 49807360, // Size of database, in bytes. WebSQL-only for now.
	storeName: 'keyvaluepairs', // Should be alphanumeric, with underscores.
	description: AXY.AjaxNetStuff.Param.CloudDataLocalCacheUUID + 'cache'
});*/
//cloud data
if (AXY.AjaxNetStuff.Param.CloudData.enable) {
	//-----------------------------------------------------------------------------
	// Window_Options
	//
	// The window for changing various settings on the options screen.	

	AXY.AjaxNetStuff.Alias.Window_Options_makeCommandList_CloudData = Window_Options.prototype.makeCommandList;
	Window_Options.prototype.makeCommandList = function () {
		AXY.AjaxNetStuff.Alias.Window_Options_makeCommandList_CloudData.call(this);
		this.addCommand(AXY.AjaxNetStuff.Param.CloudData.ForceUpdateText, 'CloudData');
	};

	AXY.AjaxNetStuff.Alias.Window_Options_processOk_CloudData = Window_Options.prototype.processOk;
	Window_Options.prototype.processOk = function () {
		var index = this.index();
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (symbol === 'CloudData') {
			this.changeValue(symbol, !value);
			localStorage.setItem('clouddataforceupdate', !value);
		} else {
			AXY.AjaxNetStuff.Alias.Window_Options_processOk_CloudData.call(this);
		}
	};
	AXY.AjaxNetStuff.Alias.Window_Options_cursorRight_CloudData = Window_Options.prototype.cursorRight;
	Window_Options.prototype.cursorRight = function (wrap) {
		var index = this.index();
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (symbol === 'CloudData') {
			this.changeValue(symbol, !value);
			localStorage.setItem('clouddataforceupdate', !value);
		} else {
			AXY.AjaxNetStuff.Alias.Window_Options_cursorRight_CloudData.call(this, wrap);
		}
	};
	AXY.AjaxNetStuff.Alias.Window_Options_cursorLeft_CloudData = Window_Options.prototype.cursorLeft;
	Window_Options.prototype.cursorLeft = function (wrap) {
		var index = this.index();
		var symbol = this.commandSymbol(index);
		var value = this.getConfigValue(symbol);
		if (symbol === 'CloudData') {
			this.changeValue(symbol, !value);
			localStorage.setItem('clouddataforceupdate', !value);
		} else {
			AXY.AjaxNetStuff.Alias.Window_Options_cursorLeft_CloudData.call(this, wrap);
		}
	};

	AXY.AjaxNetStuff.Alias._ConfigManager_makeData_CloudData = ConfigManager.makeData;
	ConfigManager.makeData = function () {
		var config = AXY.AjaxNetStuff.Alias._ConfigManager_makeData_CloudData.call(this);
		config.CloudData = this.CloudData;
		return config;
	}

	AXY.AjaxNetStuff.Alias._ConfigManager_applyData_CloudData = ConfigManager.applyData;
	ConfigManager.applyData = function (config) {
		AXY.AjaxNetStuff.Alias._ConfigManager_applyData_CloudData.call(this, config);
		this.CloudData = this.readFlag(config, 'CloudData');
	};

	var AXY_AjaxCloudDataSwitchURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'clouddataswitch');
	$.ajax({
		url: AXY_AjaxCloudDataSwitchURL,
		type: 'POST',
		dataType: 'json',
		data: {},
		async: false,
		success: function (data) {
			localStorage.setItem('clouddataswitchstatus', data.status);
			if (localStorage.getItem('clouddataswitchstatus') == 1) {
				//console.log(data);
				//console.log('write clouddataswitchtimestamp');
				//localStorage.setItem('clouddataswitchtimestamp', new Date().getTime());
				localStorage.setItem('clouddataver', data.ver);
				localStorage.setItem('clouddataverfix', data.fix);
			} else {

			}
		},
		error: function (jqXHR) {
			console.log(jqXHR);
		}
	});

	DataManager.loadDataFile = function (name, src) {
		//var xhr = new XMLHttpRequest();
		//let url = 'data/' + src;
		var url = 'data/' + src;
		//xhr.open('GET', url);
		//xhr.overrideMimeType('application/json');
		//xhr.onload = function () {
		//	if (xhr.status < 400) {
		//		window[name] = JSON.parse(xhr.responseText);
		//		DataManager.onLoad(window[name]);
		//	}
		//};
		//xhr.onerror = this._mapLoader || function () {
		//	DataManager._errorUrl = DataManager._errorUrl || url;
		//};
		//window[name] = null;
		//xhr.send();
		//console.log(localStorage.getItem('clouddataswitchtimestamp'));
		//console.log((new Date().getTime() - 60000));
		//console.log(localStorage.getItem('clouddataswitchtimestamp') < (new Date().getTime() - 60000));
		//if (localStorage.getItem('clouddataswitchtimestamp') < (new Date().getTime() - 60000)) {
		//	var AXY_AjaxCloudDataSwitchURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'clouddataswitch');
		//	$.ajax({
		//		url: AXY_AjaxCloudDataSwitchURL,
		//		type: 'POST',
		//		dataType: 'json',
		//		data: {},
		//		async: false,
		//		success: function (data) {
		//			localStorage.setItem('clouddataswitchstatus', data.status);
		if (localStorage.getItem('clouddataswitchstatus') == 1) {
			//console.log(data);
			//console.log('write clouddataswitchtimestamp');
			//localStorage.setItem('clouddataswitchtimestamp', new Date().getTime());
			//localStorage.setItem('clouddataver', data.ver);
			//localStorage.setItem('clouddataverfix', data.fix);
			//console.log((!AXY.AjaxNetStuff.Param.EnableCloudDataLocalCache));
			//console.log(localStorage.getItem("currentVerFix") < localStorage.getItem('clouddataverfix') && localStorage.getItem("currentVer") >= localStorage.getItem('clouddataver'));
			//console.log(eval(localStorage.getItem('clouddataforceupdate')) == true);
			//console.log(localStorage.getItem(window.btoa(src)) == null);
			//console.log((!AXY.AjaxNetStuff.Param.EnableCloudDataLocalCache) || (localStorage.getItem("currentVerFix") < localStorage.getItem('clouddataverfix') && localStorage.getItem("currentVer") >= localStorage.getItem('clouddataver')) || ConfigManager.CloudData === true || localStorage.getItem(window.btoa(src)) == null);
			//localforage.getItem(window.btoa(src)).then(function (value) {
			var AXY_AjaxCloudDataURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'clouddata');

			if ($.inArray(src, AXY.AjaxNetStuff.Param.CloudData.FileList) == -1) {
				if (src != "MapInfos.json" && src.startsWith("Map") && $.inArray("MapXXX.json", AXY.AjaxNetStuff.Param.CloudData.FileList) == -1) {
					//console.log(src + ' load from local');
					var xhr = new XMLHttpRequest();
					xhr.open('GET', url);
					xhr.overrideMimeType('application/json');
					xhr.onload = function () {
						if (xhr.status < 400) {
							window[name] = JSON.parse(xhr.responseText);
							DataManager.onLoad(window[name]);
						}
					};
					xhr.onerror = this._mapLoader || function () {
						DataManager._errorUrl = DataManager._errorUrl || url;
					};
					window[name] = null;
					xhr.send();
					return;
				} else if (src != "MapInfos.json" && src.startsWith("Map") && $.inArray("MapXXX.json", AXY.AjaxNetStuff.Param.CloudData.FileList) != -1) {

				} else {
					//console.log(src + ' load from local');
					var xhr = new XMLHttpRequest();
					xhr.open('GET', url);
					xhr.overrideMimeType('application/json');
					xhr.onload = function () {
						if (xhr.status < 400) {
							window[name] = JSON.parse(xhr.responseText);
							DataManager.onLoad(window[name]);
						}
					};
					xhr.onerror = this._mapLoader || function () {
						DataManager._errorUrl = DataManager._errorUrl || url;
					};
					window[name] = null;
					xhr.send();
					return;
				}
			}
			//console.log(src + ' will load from cloud');
			if ((!AXY.AjaxNetStuff.Param.CloudData.EnableLocalCache) || (localStorage.getItem("currentVerFix") < localStorage.getItem('clouddataverfix') && localStorage.getItem("currentVer") >= localStorage.getItem('clouddataver')) || localStorage.getItem('clouddataforceupdate') == 'true' || localStorage.getItem(src) == null) {
				//console.log('load clouddata1');
				//console.log(localStorage.getItem(AXY.AjaxNetStuff.Param.CloudDataLocalCacheUUID + 'sid'));

				$.ajax({
					url: AXY_AjaxCloudDataURL,
					type: 'POST',
					dataType: 'json',
					data: {
						sid: localStorage.getItem(AXY.AjaxNetStuff.Param.CloudData.LocalCacheUUID + AXY.AjaxNetStuff.Param.AppID + 'sid'),
						src: src
					},
					success: function (data) {
						if (data.status == 2) {
							//console.log(src);
							//console.log(data);
							//var obj = JSON.parse(data.rs, function (k, v) {
							//	return v;
							//});
							var arr = [];
							arr.push(null);
							$.each(data.rs, function (index, obj) {
								arr.push(JSON.parse(decodeURIComponent(window.atob(obj.jsonstr))));
							});
							//console.log(arr);
							window[name] = arr;
							DataManager.onLoad(window[name]);
							//if (AXY.AjaxNetStuff.Param.EnableCloudDataLocalCache && !Utils.isMobileDevice()) {
							if (AXY.AjaxNetStuff.Param.CloudData.EnableLocalCache) {
								//localStorage.setItem(window.btoa(src), window.btoa(encodeURIComponent(JSON.stringify(arr))));
								localforage.setItem(window.btoa(src), window.btoa(encodeURIComponent(JSON.stringify(arr)))).then(function (value) {
									if (value == null) {
										localStorage.setItem(src, '1');
									} else {
										//console.log(value);
									}
								}).catch(function (err) {
									console.log(err);
								});

							}
						} else if (data.status == 1) {
							//console.log(src);
							//console.log(data);
							window[name] = JSON.parse(decodeURIComponent(window.atob(data.rs)));
							DataManager.onLoad(window[name]);
							//if (AXY.AjaxNetStuff.Param.EnableCloudDataLocalCache && !Utils.isMobileDevice()) {
							if (AXY.AjaxNetStuff.Param.CloudData.EnableLocalCache) {
								//localStorage.setItem(window.btoa(src), data.rs);
								localforage.setItem(window.btoa(src), data.rs).then(function (value) {
									if (value == null) {
										localStorage.setItem(src, '1');
									} else {
										//console.log(value);
									}
								}).catch(function (err) {
									console.log(err);
								});
								//localStorage.setItem(src, '1');
							}
						} else {
							//console.log(src);
							//console.log(data);
							DataManager._errorUrl = DataManager._errorUrl || url;
						};
					},
					error: this._mapLoader || function (jqXHR) {
						console.log(jqXHR);
						DataManager._errorUrl = DataManager._errorUrl || url;
					}
				});
				window[name] = null;
			} else {
				//console.log('load cache1');
				window[name] = null;
				localforage.getItem(window.btoa(src)).then(function (value) {
					if (value == null) {
						$.ajax({
							url: AXY_AjaxCloudDataURL,
							type: 'POST',
							dataType: 'json',
							data: {
								sid: localStorage.getItem(AXY.AjaxNetStuff.Param.CloudData.LocalCacheUUID + AXY.AjaxNetStuff.Param.AppID + 'sid'),
								src: src
							},
							success: function (data) {
								if (data.status == 2) {
									//console.log(src);
									//console.log(data);
									//var obj = JSON.parse(data.rs, function (k, v) {
									//	return v;
									//});
									var arr = [];
									arr.push(null);
									$.each(data.rs, function (index, obj) {
										arr.push(JSON.parse(decodeURIComponent(window.atob(obj.jsonstr))));
									});
									//console.log(arr);
									window[name] = arr;
									DataManager.onLoad(window[name]);
									//if (AXY.AjaxNetStuff.Param.EnableCloudDataLocalCache && !Utils.isMobileDevice()) {
									if (AXY.AjaxNetStuff.Param.CloudData.EnableLocalCache) {
										//localStorage.setItem(window.btoa(src), window.btoa(encodeURIComponent(JSON.stringify(arr))));
										localforage.setItem(window.btoa(src), window.btoa(encodeURIComponent(JSON.stringify(arr)))).catch(function (err) {
											console.log(err);
										});
										localStorage.setItem(src, '1');
									}
								} else if (data.status == 1) {
									//console.log(src);
									//console.log(data);
									window[name] = JSON.parse(decodeURIComponent(window.atob(data.rs)));
									DataManager.onLoad(window[name]);
									//if (AXY.AjaxNetStuff.Param.EnableCloudDataLocalCache && !Utils.isMobileDevice()) {
									if (AXY.AjaxNetStuff.Param.CloudData.EnableLocalCache) {
										//localStorage.setItem(window.btoa(src), data.rs);
										localforage.setItem(window.btoa(src), data.rs).catch(function (err) {
											console.log(err);
										});
										localStorage.setItem(src, '1');
									}
								} else {
									//console.log(src);
									//console.log(data);
									DataManager._errorUrl = DataManager._errorUrl || url;
								};
							},
							error: this._mapLoader || function (jqXHR) {
								console.log(jqXHR);
								DataManager._errorUrl = DataManager._errorUrl || url;
							}
						});
						window[name] = null;
					} else {
						window[name] = JSON.parse(decodeURIComponent(window.atob(value)));
						DataManager.onLoad(window[name]);
					}
				}).catch(function (err) {
					//console.log(src);
					console.log(err);
				});
			}
			//}).catch(function (err) {
			//	console.log(err);
			//});

		} else {
			//console.log('load localdata');
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.overrideMimeType('application/json');
			xhr.onload = function () {
				if (xhr.status < 400) {
					window[name] = JSON.parse(xhr.responseText);
					DataManager.onLoad(window[name]);
				}
			};
			xhr.onerror = this._mapLoader || function () {
				DataManager._errorUrl = DataManager._errorUrl || url;
			};
			window[name] = null;
			xhr.send();
		}
		//},
		/*error: function (jqXHR) {
			console.log(jqXHR);
			console.log('load loacldata');
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.overrideMimeType('application/json');
			xhr.onload = function () {
				if (xhr.status < 400) {
					window[name] = JSON.parse(xhr.responseText);
					DataManager.onLoad(window[name]);
				}
			};
			xhr.onerror = this._mapLoader || function () {
				DataManager._errorUrl = DataManager._errorUrl || url;
			};
			window[name] = null;
			xhr.send();
		}*/
		//});
		/*} else {
			if (localStorage.getItem('clouddataswitchstatus') == 1) {
				console.log('read clouddataswitchtimestamp');
				if (!AXY.AjaxNetStuff.Param.EnableCloudDataLocalCache || (localStorage.getItem("currentVerFix") < localStorage.getItem('clouddataverfix') && localStorage.getItem("currentVer") >= localStorage.getItem('clouddataver')) || ConfigManager.CloudData === true || localStorage.getItem(window.btoa(src)) == null) {
					console.log('load clouddata2');
					var AXY_AjaxCloudDataURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'clouddata');
					$.ajax({
						url: AXY_AjaxCloudDataURL,
						type: 'POST',
						dataType: 'json',
						data: {
							sid: localStorage.getItem('sid'),
							src: src
						},
						success: function (data) {
							if (data.status == 2) {
								//console.log(src);
								//console.log(data);
								//var obj = JSON.parse(data.rs, function (k, v) {
								//	return v;
								//});
								var arr = [];
								arr.push(null);
								$.each(data.rs, function (index, obj) {
									arr.push(JSON.parse(decodeURIComponent(window.atob(obj.jsonstr))));
								});
								//console.log(arr);
								window[name] = arr;
								DataManager.onLoad(window[name]);
								if (AXY.AjaxNetStuff.Param.EnableCloudDataLocalCache) {
									localStorage.setItem(window.btoa(src), window.btoa(encodeURIComponent(JSON.stringify(arr))));
								}
								//localStorage.setItem("currentVerFix", AXY.AjaxNetStuff.Variables.VerCloudFix || 0);
							} else if (data.status == 1) {
								//console.log(src);
								//console.log(data);
								window[name] = JSON.parse(decodeURIComponent(window.atob(data.rs)));
								DataManager.onLoad(window[name]);
								if (AXY.AjaxNetStuff.Param.EnableCloudDataLocalCache) {
									localStorage.setItem(window.btoa(src), data.rs);
								}
								//localStorage.setItem("currentVerFix", AXY.AjaxNetStuff.Variables.VerCloudFix || 0);
							} else {
								//console.log(src);
								//console.log(data);
								DataManager._errorUrl = DataManager._errorUrl || url;
							};
						},
						error: this._mapLoader || function (jqXHR) {
							console.log(jqXHR);
							DataManager._errorUrl = DataManager._errorUrl || url;
						}
					});
				} else {
					console.log('load cache2');
					window[name] = null;
					window[name] = JSON.parse(decodeURIComponent(window.atob(localStorage.getItem(window.btoa(src)))));
					DataManager.onLoad(window[name]);
				}
			} else {
				console.log('load localdata2');
				var xhr = new XMLHttpRequest();
				xhr.open('GET', url);
				xhr.overrideMimeType('application/json');
				xhr.onload = function () {
					if (xhr.status < 400) {
						window[name] = JSON.parse(xhr.responseText);
						DataManager.onLoad(window[name]);
					}
				};
				xhr.onerror = this._mapLoader || function () {
					DataManager._errorUrl = DataManager._errorUrl || url;
				};
				window[name] = null;
				xhr.send();
			}
		}*/
	}
}

//commandRemember
AXY.AjaxNetStuff.Alias._ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function (config) {
	AXY.AjaxNetStuff.Alias._ConfigManager_applyData.apply(this, arguments);
	if (config['commandRemember'] === undefined) {
		this.commandRemember = AXY.AjaxNetStuff.Param.commandRemember;
	}
};

//button
if (AXY.AjaxNetStuff.Param.Button.enable) {
	$.each(AXY.AjaxNetStuff.Param.Button.KeyButton, function (index, obj) {
		if (obj.enable) {
			//display html first
			var tpl =
				'<div class="AXYAjaxButtonImg_' + obj.name + '"><img src="img/system/' + obj.image + '.png" class="AXYAjaxButton_' + obj.name + '"></div>';
			var css =
				'.AXYAjaxButtonImg_' + obj.name + '{position:fixed;z-index:10000;margin:auto;left:' +
				obj.x + 'rem;right:0;top:' +
				obj.y + 'rem;bottom:0;pointer-events:none;}.AXYAjaxButtonImg_' + obj.name + ' img{width:' +
				AXY.AjaxNetStuff.Param.ImgWidth + 'rem;height:' +
				AXY.AjaxNetStuff.Param.ImgHeight + 'rem;opacity:' +
				obj.opacity + ';pointer-events:auto;}';

			$('body').append(tpl);
			$('body').append('<style type="text/css">' + css + '</style>');

			//last bind the click
			$('.AXYAjaxButton_' + obj.name).unbind('mousedown touchstart').bind('mousedown touchstart', function () {
				/*if (!$gameMap) {
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先进入游戏",
						color: 'white'
					});
					return false;
				}*/
				/*if (!$gameMap._mapId) {
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先进入游戏",
						color: 'white'
					});
					return false;
				}*/
				switch (obj.inputTrigger) {
					case 'pageup':
						//TouchInput._events.wheelY = -AXY.AjaxNetStuff.Param.Button.wheelThreshold;

						//Input.isTriggered(obj.inputTrigger);
						if ($gameParty.inBattle()) {
							TouchInput._events.wheelY = -AXY.AjaxNetStuff.Param.Button.wheelThreshold;
						} else {
							Input._currentState[obj.inputTrigger] = true;
						}
						break;
					case 'pagedown':
						//TouchInput._events.wheelY = AXY.AjaxNetStuff.Param.Button.wheelThreshold;

						//Input.isTriggered(obj.inputTrigger);
						if ($gameParty.inBattle()) {
							TouchInput._events.wheelY = AXY.AjaxNetStuff.Param.Button.wheelThreshold;
						} else {
							Input._currentState[obj.inputTrigger] = true;
						}
						break;
					case 'up':
					case 'down':
					case 'left':
					case 'right':
					case 'ok':
					case 'escape':
						Input._currentState[obj.inputTrigger] = true;
						break;
				}
				AudioManager.playSe(obj.soundEffect);
			});
			$('.AXYAjaxButton_' + obj.name).unbind('mouseup touchend').bind('mouseup touchend', function () {
				/*if (!$gameMap) {
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先进入游戏",
						color: 'white'
					});
					return false;
				}*/
				/*if (!$gameMap._mapId) {
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先进入游戏",
						color: 'white'
					});
					return false;
				}*/
				switch (obj.inputTrigger) {
					case 'pageup':
						//TouchInput._events.wheelY = -AXY.AjaxNetStuff.Param.Button.wheelThreshold;

						//Input.isTriggered(obj.inputTrigger);
						if ($gameParty.inBattle()) {
							TouchInput._events.wheelY = -AXY.AjaxNetStuff.Param.Button.wheelThreshold;
						} else {
							Input._currentState[obj.inputTrigger] = false;
						}
						break;
					case 'pagedown':
						//TouchInput._events.wheelY = AXY.AjaxNetStuff.Param.Button.wheelThreshold;

						//Input.isTriggered(obj.inputTrigger);
						if ($gameParty.inBattle()) {
							TouchInput._events.wheelY = AXY.AjaxNetStuff.Param.Button.wheelThreshold;
						} else {
							Input._currentState[obj.inputTrigger] = false;
						}
						break;
					case 'up':
					case 'down':
					case 'left':
					case 'right':
					case 'ok':
					case 'escape':
						Input._currentState[obj.inputTrigger] = false;
						break;
				}
				//AudioManager.playSe(obj.soundEffect);
			});
		}
	})
}

//};

//ajax AltTopList
if (AXY.AjaxNetStuff.Param.AltTopList.Enable) {
	if (AXY.AjaxNetStuff.Param.AltTopList.ShowInMenu) {
		//=============================================================================
		// ** Window MenuCommand
		//=============================================================================	

		//==============================
		// * make Command List
		//==============================
		AXY.AjaxNetStuff.Alias.addOriginalCommandsAltTopList = Window_MenuCommand.prototype.addOriginalCommands;
		Window_MenuCommand.prototype.addOriginalCommands = function () {
			AXY.AjaxNetStuff.Alias.addOriginalCommandsAltTopList.call(this);
			this.addCommand(AXY.AjaxNetStuff.Param.AltTopList.CommandText, 'AltTopList', true);
		};

		//=============================================================================
		// ** Scene Menu
		//=============================================================================	

		//==============================
		// * create Command Window
		//==============================
		AXY.AjaxNetStuff.Alias.createCommandWindowAltTopList = Scene_Menu.prototype.createCommandWindow;
		Scene_Menu.prototype.createCommandWindow = function () {
			AXY.AjaxNetStuff.Alias.createCommandWindowAltTopList.call(this);
			this._commandWindow.setHandler('AltTopList', this.commandAltTopList.bind(this));
			/*if (Imported.MOG_TimeSystem && Moghunter.timeWindow_menu) {	
				this._commandWindow.height -= this._commandWindow.itemHeight();
			};*/
		};

		//==============================
		// * Alt Top List
		//==============================
		Scene_Menu.prototype.commandAltTopList = function () {
			//AXY_AjaxTopList.fetch('Lastest');
			AXY.AjaxNetStuff.Variables.AltTopList.pickColumn = null;
			AXY.AjaxNetStuff.Variables.AltTopList.title = AXY.AjaxNetStuff.Param.AltTopList.CommandText;
			AXY.AjaxNetStuff.Variables.AltTopList.width = Graphics.boxWidth;
			AXY.AjaxNetStuff.Variables.AltTopList.height = Graphics.boxHeight;
			AXY_AjaxTopList.fetch();
			SceneManager.push(Scene_AltTopList)
			// Close option window
			//SceneManager.pop();
		};
	}

	//AltTopList Scene
	function Scene_AltTopList() {
		this.initialize.apply(this, arguments);
	}

	Scene_AltTopList.prototype = Object.create(Scene_MenuBase.prototype);
	Scene_AltTopList.prototype.constructor = Scene_AltTopList;

	Scene_AltTopList.prototype.initialize = function () {
		Scene_MenuBase.prototype.initialize.call(this);
	};

	Scene_AltTopList.prototype.create = function () {
		Scene_MenuBase.prototype.create.call(this);
		this.createAltTopListWindow();
	};

	Scene_AltTopList.prototype.createAltTopListWindow = function () {
		this._AltTopListWindow = new Window_AltTopList();
		this.addWindow(this._AltTopListWindow);
	};
	//-----------------------------------------------------------------------------
	// Window_AltTopList
	//
	// The window for displaying full status on the status screen.

	function Window_AltTopList() {
		this.initialize.apply(this, arguments);
	}

	Window_AltTopList.prototype = Object.create(Window_Selectable.prototype);
	Window_AltTopList.prototype.constructor = Window_AltTopList;

	Window_AltTopList.prototype.initialize = function () {
		var width = eval(AXY.AjaxNetStuff.Variables.AltTopList.width) || Graphics.boxWidth;
		var height = eval(AXY.AjaxNetStuff.Variables.AltTopList.height) || Graphics.boxHeight;
		var x = AXY.AjaxNetStuff.Variables.AltTopList.x || (Graphics.boxWidth - width) / 2;
		var y = AXY.AjaxNetStuff.Variables.AltTopList.y || (Graphics.boxHeight - height) / 2;
		Window_Selectable.prototype.initialize.call(this, x, y, width, height);
		//console.log(this);
		//AXY_AjaxTopList.fetch();
		var _that = this;
		var x = eval(AXY.AjaxNetStuff.Param.AltTopList.x);
		var spacing = eval(AXY.AjaxNetStuff.Param.AltTopList.spacing);
		var activeColumn = AXY.AjaxNetStuff.Variables.AltTopList.pickColumn || AXY.AjaxNetStuff.Param.AltTopList.activeColumn;
		$.each(activeColumn, function (index, obj) {
			//AXY.AjaxNetStuff.Variables.AltTopList.activeColumn[index].Text = AXY.AjaxNetStuff.Param[obj + 'Text'];
			var width = _that.textWidth(AXY.AjaxNetStuff.Param[obj + 'Text']);
			AXY.AjaxNetStuff.Variables.AltTopList.activeColumn[obj] = {};
			AXY.AjaxNetStuff.Variables.AltTopList.activeColumn[obj].x = x;
			AXY.AjaxNetStuff.Variables.AltTopList.activeColumn[obj].width = width;
			x += width + spacing;
		})
		//console.log(AXY.AjaxNetStuff.Variables.AltTopList.activeColumn)
		//console.log(AXY.AjaxNetStuff.Param.AltTopList.activeColumn)
		AXY.AjaxNetStuff.Variables.AltTopList.loading.x = Graphics.width / 2 - _that.textWidth(AXY.AjaxNetStuff.Param.LoadingText) / 2;
		AXY.AjaxNetStuff.Variables.AltTopList.loading.y = Graphics.height / 2 - 32;
		//console.log(_that.fontSize)

	}
	Window_AltTopList.prototype.update = function () {
		this.refresh();
		if (Input.isTriggered('cancel') || TouchInput.isCancelled()) {
			SoundManager.playCancel();
			SceneManager.pop();
		}
	}

	Window_AltTopList.prototype.refresh = function () {
		this.contents.clear();
		var _that = this;
		var x = eval(AXY.AjaxNetStuff.Param.AltTopList.x);
		var y = eval(AXY.AjaxNetStuff.Param.AltTopList.y);
		var maxWidth = eval(AXY.AjaxNetStuff.Param.AltTopList.maxWidth);
		var maxHeight = eval(AXY.AjaxNetStuff.Param.AltTopList.maxHeight);
		var spacing = eval(AXY.AjaxNetStuff.Param.AltTopList.spacing);
		var maxWidth1 = Graphics.width - x * 2;
		//console.log(this);
		if (AXY.AjaxNetStuff.Variables.toplist.length > 0) {

			_that.outlineColor = 'black';
			_that.outlineWidth = 8;
			_that.fontSize = 72;
			var _title = AXY.AjaxNetStuff.Variables.AltTopList.title || AXY.AjaxNetStuff.Param.AltTopList.CommandText;
			_that.drawText('' + _title + '', x, y, maxWidth1, maxHeight, AXY.AjaxNetStuff.Param.AltTopList.align);
			y += 64;

			var activeColumn = AXY.AjaxNetStuff.Variables.AltTopList.pickColumn || AXY.AjaxNetStuff.Param.AltTopList.activeColumn;
			$.each(activeColumn, function (index, obj) {
				_that.drawText(AXY.AjaxNetStuff.Param[obj + 'Text'], AXY.AjaxNetStuff.Variables.AltTopList.activeColumn[obj].x, y, AXY.AjaxNetStuff.Variables.AltTopList.activeColumn[obj].width, maxHeight, AXY.AjaxNetStuff.Param.AltTopList.align);
			})

			y += 32;
			try {
				$.each(AXY.AjaxNetStuff.Variables.toplist, function (index, val) {
					if (val != undefined) {
						$.each(activeColumn, function (index1, obj) {
							_that.drawText(val[obj], AXY.AjaxNetStuff.Variables.AltTopList.activeColumn[obj].x, y + index * 32, AXY.AjaxNetStuff.Variables.AltTopList.activeColumn[obj].width, maxHeight, AXY.AjaxNetStuff.Param.AltTopList.align);
						})
					}
				});
			} catch (e) {
				console.log(e)
			}
			_that.drawText('《' + AXY.AjaxNetStuff.Variables.gamename + '》', x, Graphics.height - 200, maxWidth1, maxHeight, AXY.AjaxNetStuff.Param.AltTopList.align);
			_that.drawText('玩家总数：' + AXY.AjaxNetStuff.Variables.totalplayer + '', x, Graphics.height - 200 + 48, maxWidth1, maxHeight, AXY.AjaxNetStuff.Param.AltTopList.align);
			_that.drawText('您当前的状态：' + (AXY.AjaxNetStuff.Variables.loggedin ? '已登录' : '游客'), x, Graphics.height - 200 + 96, maxWidth1, maxHeight, AXY.AjaxNetStuff.Param.AltTopList.align);
		} else {
			_that.outlineColor = 'black';
			_that.outlineWidth = 8;
			_that.fontSize = 72;
			_that.drawText(AXY.AjaxNetStuff.Param.LoadingText, (_that._width - _that.textWidth(AXY.AjaxNetStuff.Param.LoadingText)) / 2, _that._height / 2 - 32, maxWidth1, maxHeight, AXY.AjaxNetStuff.Param.AltTopList.align);
		}
	}
}

//ajax ver check
if (AXY.AjaxNetStuff.Param.EnableVerCheck) {
	//display html first
	//console.log(AXY_AjaxLoginURL);
	var width = String(AXY.AjaxNetStuff.Parameters['VerCheckWidth']);
	if (width.indexOf("%") != -1) {
		var widthpx = width;
	} else {
		var widthpx = width + 'px';
	}

	var AXYAjaxVerCheckEntity;
	var AXYAjaxVerCheckTemplateStyle =
		"<style type=\"text/css\">.AXYAjaxVerCheck{position:fixed;top:" +
		parseInt(AXY.AjaxNetStuff.Parameters['VerCheckY']) + "px;left:" +
		parseInt(AXY.AjaxNetStuff.Parameters['VerCheckX']) + "px;z-index:" +
		parseInt(AXY.AjaxNetStuff.Parameters['zIndex']) + ";margin:0 auto;width:" +
		widthpx + ";color:" +
		String(AXY.AjaxNetStuff.Parameters['VerCheckTextColor']) + ";background-color:" +
		String(AXY.AjaxNetStuff.Parameters['VerCheckbackgroundcolor']) + ";text-align:" +
		String(AXY.AjaxNetStuff.Parameters['VerCheckTextAlign']) + ";opacity:" +
		parseFloat(AXY.AjaxNetStuff.Parameters['VerCheckopacity']) + ";}<\/style>";
	var AXYAjaxVerCheckTemplateDiv = "<div class=\"AXYAjaxVerCheck\">" +
		String(AXY.AjaxNetStuff.Parameters['VerCheckingText']) + "</div>";
	var AXYAjaxVerCheckTemplateCss = {
		'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
	};
	AXYAjaxVerCheckEntity = $('body').append(AXYAjaxVerCheckTemplateStyle);
	AXYAjaxVerCheckEntity = $('body').append(AXYAjaxVerCheckTemplateDiv);
	$('.AXYAjaxVerCheck').css('font-family', $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont');

	var AXYAjaxVerCheckEntity2;
	var AXYAjaxVerCheckTemplateStyle2 =
		"<style type=\"text/css\">.AXYAjaxVerCheck2{z-index:" +
		parseInt(AXY.AjaxNetStuff.Parameters['zIndex']) + ";}<\/style>";
	var AXYAjaxVerCheckTemplateDiv2 = "<div class=\"AXYAjaxVerCheck2\"></div>";
	var AXYAjaxVerCheckTemplateCss2 = {
		'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
	};
	//AXYAjaxVerCheckEntity2 = $('body').append(AXYAjaxVerCheckTemplateStyle2);
	//AXYAjaxVerCheckEntity2 = $('body').append(AXYAjaxVerCheckTemplateDiv2);
	//$('.AXYAjaxVerCheck2').css('font-family', $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont');

	//console.log($gameSystem);
	//console.log(AXYAjaxVerCheckTemplateCss);

	//then bind action
	var AXY_AjaxVerCheck = {
		show: function (cssclass) {
			$(cssclass).append(AXYAjaxVerCheckTemplateStyle);
			$(cssclass).append(AXYAjaxVerCheckTemplateDiv);
			$(cssclass).css('font-family', $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont');
			$(cssclass).stop().show().animate({
				"height": "98%"
			}, "normal");
		},
		hide: function (cssclass) {
			$(cssclass).stop().animate({
				"height": "0"
			}, "normal", function () {
				$(this).hide();
				$(this).remove();
			});
		},
		modal: function (id, act) {
			$(id).modal(act);
		}
	};

	//onready auto run
	$(document).ready(function () {
		/*if(!$gameParty){
			return;
		}*/
		var AXY_AjaxVerCheckURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgamevercheck');
		$.ajax({
			url: AXY_AjaxVerCheckURL,
			type: 'POST',
			dataType: 'json',
			data: {
				jsonstr: ''
			},
			success: function (data) {
				if (data.status) {
					AXY.AjaxNetStuff.Variables.VerCloud = data.ver;
					AXY.AjaxNetStuff.Variables.VerCloudFix = data.fix;
					AXY.AjaxNetStuff.Variables.VerText = data.str;
					if (parseFloat(AXY.AjaxNetStuff.Variables.VerCloud) < parseFloat(AXY.AjaxNetStuff.Param.VerLocal)) {
						$('.AXYAjaxVerCheck').html(String(AXY.AjaxNetStuff.Parameters['NoNewText']));
						if (AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeErr) {
							setTimeout(function () {
								AXY_AjaxVerCheck.hide('.AXYAjaxVerCheck');
							}, AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeErr);
						}
					} else if (parseFloat(AXY.AjaxNetStuff.Variables.VerCloud) == parseFloat(AXY.AjaxNetStuff.Param.VerLocal) && AXY.AjaxNetStuff.Variables.VerCloudFix <= localStorage.getItem("currentVerFix")) {
						$('.AXYAjaxVerCheck').html(String(AXY.AjaxNetStuff.Parameters['NoNewText']));
						if (AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeErr) {
							setTimeout(function () {
								AXY_AjaxVerCheck.hide('.AXYAjaxVerCheck');
							}, AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeErr);
						}
					} else {
						if (AXY.AjaxNetStuff.Param.EnableVerCheckNotice) {
							var _fixNoticeStr = parseFloat(AXY.AjaxNetStuff.Variables.VerCloud) == parseFloat(AXY.AjaxNetStuff.Param.VerLocal) ? '        <span>' + AXY.AjaxNetStuff.Param.HaveNewFixText + AXY.AjaxNetStuff.Variables.VerCloudFix + '(>' + localStorage.getItem("currentVerFix") + ')' + '</span>' : '';
							AXYAjaxVerCheckEntity2 = $('body').append(AXYAjaxVerCheckTemplateStyle2);
							AXYAjaxVerCheckEntity2 = $('body').append(AXYAjaxVerCheckTemplateDiv2);
							$('.AXYAjaxVerCheck2').css('font-family', $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont');
							$('.AXYAjaxVerCheck2').html('' +
								'<div class="modal fade" id="AXYAjaxVerCheckModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">' +
								'  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">' +
								'    <div class="modal-content bg-black-transparent">' +
								'      <div class="modal-header">' +
								'        <h5 class="modal-title" id="exampleModalLabel">' + AXY.AjaxNetStuff.Param.HaveNewText + AXY.AjaxNetStuff.Variables.VerCloud + ' (>=' + AXY.AjaxNetStuff.Param.VerLocal + ')' + '</h5>' +
								'        <button type="button" class="close" style="color:' + AXY.AjaxNetStuff.Param.VerCheckModalTextColor + ';" data-dismiss="modal" aria-label="Close" id="AXYAjaxVerCheckHaveNewbtn_close">' +
								'          <span aria-hidden="true">&times;</span>' +
								'        </button>' +
								'      </div>' +
								'      <div class="modal-body">' +
								AXY.AjaxNetStuff.Variables.VerText +
								'      </div>' +
								'      <div class="modal-footer">' +
								_fixNoticeStr +
								'        <span id="timer"></span><button type="button" class="btn btn-secondary" data-dismiss="modal" id="AXYAjaxVerCheckHaveNewbtn_close2">' + AXY.AjaxNetStuff.Param.Reg.CloseText + '</button>' +
								'        <button type="button" class="btn btn-primary" id="AXYAjaxVerCheckHaveNewLink">' + AXY.AjaxNetStuff.Param.LinkText + '</button>' +
								'      </div>' +
								'    </div>' +
								'  </div>' +
								'</div>' +
								'<style>#AXYAjaxVerCheckModal .bg-black-transparent{background-color:' + AXY.AjaxNetStuff.Param.VerCheckModalBgColor + ';color:' + AXY.AjaxNetStuff.Param.VerCheckModalTextColor + ';opacity:' + AXY.AjaxNetStuff.Param.VerCheckModalOpacity + ';font-family:' + ($gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont') + '}' + '</style>'
							);
							$('#AXYAjaxVerCheckHaveNewbtn_close').unbind('click touchstart').bind('click touchstart', function () {
								AXY_AjaxVerCheck.modal('#AXYAjaxVerCheckModal', 'hide');
							});
							$('#AXYAjaxVerCheckHaveNewbtn_close2').unbind('click touchstart').bind('click touchstart', function () {
								AXY_AjaxVerCheck.modal('#AXYAjaxVerCheckModal', 'hide');
							});
							$('#AXYAjaxVerCheckHaveNewLink').unbind('click touchstart').bind('click touchstart', function () {
								window.open(AXY.AjaxNetStuff.Param.URL);
							});
							AXY_AjaxVerCheck.modal('#AXYAjaxVerCheckModal', 'show');
							var t = AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeSucc / 1000;
							$("#timer").text(t);
							var inter = setInterval(function () {
								t--;
								$("#timer").text(t);
								if (t <= 0) {
									clearInterval(inter);
									$("#timer").text('');
									AXY_AjaxVerCheck.modal('#AXYAjaxVerCheckModal', 'hide');
								}
							}, 1000);
						} else {
							$('.AXYAjaxVerCheck').html(String(AXY.AjaxNetStuff.Parameters['HaveNewText']) + AXY.AjaxNetStuff.Variables.VerCloud + "，<a id='AXYAjaxVerCheckHaveNewLink' href=\"" + AXY.AjaxNetStuff.Param.URL + "\" target=\"_blank\">" + String(AXY.AjaxNetStuff.Parameters['LinkText']) + "</a>");
							$('#AXYAjaxVerCheckHaveNewLink').unbind('click touchstart').bind('click touchstart', function () {
								//$.toaster({ message : '手机版暂不支持登录', color:'red'});
								window.open(AXY.AjaxNetStuff.Param.URL);
							});
						}
						if (AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeSucc) {
							setTimeout(function () {
								AXY_AjaxVerCheck.hide('.AXYAjaxVerCheck');
							}, AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeSucc);
						}

					}
					localStorage.setItem("currentVerFix", data.fix || 0);
					localStorage.setItem("currentVer", data.ver || 0);
				} else {
					console.log(data);
					$('.AXYAjaxVerCheck').html("" + data.info + data.error + "");
					if (AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeErr) {
						setTimeout(function () {
							AXY_AjaxVerCheck.hide('.AXYAjaxVerCheck');
						}, AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeErr);
					}
				};
			},
			error: function (jqXHR) {
				$('.AXYAjaxVerCheck').html("请将我联网，不然我就要死了。错误代码：" + jqXHR.status + "。网络功能已关闭，请联网后重试！");
				console.log(jqXHR);
				if (AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeErr) {
					setTimeout(function () {
						AXY_AjaxVerCheck.hide('.AXYAjaxVerCheck');
					}, AXY.AjaxNetStuff.Param.VerCheckAutoDismissTimeErr);
				}
			}
		});
	});
}

//online
if (AXY_AjaxFetchServerState.isonline() || 1) {
	//main
	//ajax fetch server timestamp/switchs/variables
	var AXY_AjaxFetchServerTSV = {
		timestamp: function () {
			$.ajax({
				url: AXY_AjaxFetchServerTSVURL,
				type: 'POST',
				dataType: 'json',
				async: false,
				timeout: 10000,
				data: {
					action: 'timestamp'
				},
				success: function (data) {
					if (data.status) {
						AXY.AjaxNetStuff.Variables.timestamp = data['rs'];
					} else {
						console.log(data);
						$.toaster({
							message: data.info + ', ERRORCODE: ' + data.error,
							color: 'red'
						});
					};
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//console.log(errorThrown);
					$.toaster({
						title: 'ERROR: ',
						message: textStatus + ' ' + errorThrown,
						color: 'red'
					});
				},
				complete: function (XMLHttpRequest, textStatus) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
				}
			});
			return AXY.AjaxNetStuff.Variables.timestamp;
		},
		datetime: function (format) {
			$.ajax({
				url: AXY_AjaxFetchServerTSVURL,
				type: 'POST',
				dataType: 'json',
				async: false,
				timeout: 10000,
				data: {
					action: 'datetime',
					format: format
				},
				success: function (data) {
					if (data.status) {
						AXY.AjaxNetStuff.Variables.datetime = data['rs'];
					} else {
						console.log(data);
						$.toaster({
							message: data.info + ', ERRORCODE: ' + data.error,
							color: 'red'
						});
					};
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//console.log(errorThrown);
					$.toaster({
						title: 'ERROR: ',
						message: textStatus + ' ' + errorThrown,
						color: 'red'
					});
				},
				complete: function (XMLHttpRequest, textStatus) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
				}
			});
			return AXY.AjaxNetStuff.Variables.datetime;
		},
		variable: function (index) {
			if (!index) {
				return "error: need index";
			}

			/*if (AXY.AjaxNetStuff.Variables.variable != null) {
				if (AXY.AjaxNetStuff.Variables.variable[index] != undefined) {
					return AXY.AjaxNetStuff.Variables.variable[index].v;
				}
			} else {*/
			$.ajax({
				url: AXY_AjaxFetchServerTSVURL,
				type: 'POST',
				dataType: 'json',
				async: false,
				timeout: 10000,
				data: {
					action: 'variable'
				},
				success: function (data) {
					if (data.status) {
						AXY.AjaxNetStuff.Variables.variable = $.parseJSON(data['rs']);
					} else {
						console.log(data);
						$.toaster({
							message: data.info + ', ERRORCODE: ' + data.error,
							color: 'red'
						});
					};
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//console.log(errorThrown);
					$.toaster({
						title: 'ERROR: ',
						message: textStatus + ' ' + errorThrown,
						color: 'red'
					});
				},
				complete: function (XMLHttpRequest, textStatus) {
					//console.log(XMLHttpRequest);
					//console.log(textStatus);
					//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
				}
			});
			if (AXY.AjaxNetStuff.Variables.variable != null) {
				if (AXY.AjaxNetStuff.Variables.variable[index] != undefined) {
					return AXY.AjaxNetStuff.Variables.variable[index].v;
				}
			}
			return false;
			//}
		}
	};

	//ajax HandleShowText
	if (AXY.AjaxNetStuff.Param.EnableHandleShowText) {
		//-----------------------------------------------------------------------------
		// Window_Options
		//
		// The window for changing various settings on the options screen.	
		AXY.AjaxNetStuff.Alias.Game_System_initialize_HandleShowText = Game_System.prototype.initialize;
		Game_System.prototype.initialize = function () {
			AXY.AjaxNetStuff.Alias.Game_System_initialize_HandleShowText.call(this);
			AXY_AjaxHandleShowText.fetchsupportlanguage();
			/*this._languageObj = AXY.AjaxNetStuff.Variables.HandleShowTextLanguageObj;
			console.log(this._languageId);
			if (this._languageId === undefined) {
				this._languageId = AXY.AjaxNetStuff.Variables.HandleShowTextDefaultLanguageId;
			}
			console.log(this._languageIndex);
			if (this._languageIndex === undefined) {
				this._languageIndex = AXY_AjaxHandleShowText.getlanguageindex(AXY.AjaxNetStuff.Variables.HandleShowTextDefaultLanguageId);
			} else {
				this._languageIndex = AXY_AjaxHandleShowText.getlanguageindex(this._languageId);
			}*/
		};

		AXY.AjaxNetStuff.Alias.Window_Options_makeCommandList_HandleShowText = Window_Options.prototype.makeCommandList;
		Window_Options.prototype.makeCommandList = function () {
			AXY.AjaxNetStuff.Alias.Window_Options_makeCommandList_HandleShowText.call(this);
			this.addCommand(AXY.AjaxNetStuff.Param.HandleShowTextText, 'handleShowText');
		};

		AXY.AjaxNetStuff.Alias.Window_Options_statusText_HandleShowText = Window_Options.prototype.statusText;
		Window_Options.prototype.statusText = function (index) {
			//AXY_AjaxHandleShowText.fetchsupportlanguage();
			console.log(AXY.AjaxNetStuff.Variables.HandleShowTextLanguageObj);
			this._languageObj = AXY.AjaxNetStuff.Variables.HandleShowTextLanguageObj;
			console.log(this._languageId);
			if (this._languageId === undefined) {
				this._languageId = AXY.AjaxNetStuff.Variables.HandleShowTextDefaultLanguageId;
			}
			console.log(this._languageIndex);
			if (this._languageIndex === undefined) {
				this._languageIndex = AXY_AjaxHandleShowText.getlanguageindex(AXY.AjaxNetStuff.Variables.HandleShowTextDefaultLanguageId);
			} else {
				this._languageIndex = AXY_AjaxHandleShowText.getlanguageindex(this._languageId);
			}
			AXY.AjaxNetStuff.Alias.Window_Options_statusText_HandleShowText.call(this, index);
			var symbol = this.commandSymbol(index);
			var value = this.getConfigValue(symbol);
			if (symbol === 'handleShowText') {
				console.log(value);
				console.log($gameSystem._languageIndex);
				console.log($gameSystem._languageObj);
				console.log($gameSystem._languageId);
				value = value ? value : this._languageIndex;
				console.log(value);
				$gameSystem._languageObj = AXY.AjaxNetStuff.Variables.HandleShowTextLanguageObj ? AXY.AjaxNetStuff.Variables.HandleShowTextLanguageObj : [{
					l: '0',
					n: 'err'
				}];
				return $gameSystem._languageObj[value].n;
			} else {
				return AXY.AjaxNetStuff.Alias.Window_Options_statusText_HandleShowText.call(this, index);
			}
		};

		AXY.AjaxNetStuff.Alias.Window_Options_processOk_HandleShowText = Window_Options.prototype.processOk;
		Window_Options.prototype.processOk = function () {
			var index = this.index();
			var symbol = this.commandSymbol(index);
			var value = this.getConfigValue(symbol);
			if (symbol === 'handleShowText') {
				value = value ? value : this._languageIndex;
				value++;
				if (value > this._languageObj.length - 1) {
					value = 0;
				}
				$gameSystem._languageIndex = value;
				$gameSystem._languageId = this._languageObj[value].l;
				this.changeValue(symbol, value);
				//SoundManager.playCursor();
			} else {
				AXY.AjaxNetStuff.Alias.Window_Options_processOk_HandleShowText.call(this);
			}
		};
		AXY.AjaxNetStuff.Alias.Window_Options_cursorRight_HandleShowText = Window_Options.prototype.cursorRight;
		Window_Options.prototype.cursorRight = function (wrap) {
			var index = this.index();
			var symbol = this.commandSymbol(index);
			var value = this.getConfigValue(symbol);
			if (symbol === 'handleShowText') {
				value = value ? value : this._languageIndex;
				value++;
				if (value > $gameSystem._languageObj.length - 1) {
					value = 0;
				}
				$gameSystem._languageIndex = value;
				$gameSystem._languageId = $gameSystem._languageObj[value].l;
				this.changeValue(symbol, value);
				//SoundManager.playCursor();
			} else {
				AXY.AjaxNetStuff.Alias.Window_Options_cursorRight_HandleShowText.call(this, wrap);
			}
		};
		AXY.AjaxNetStuff.Alias.Window_Options_cursorLeft_HandleShowText = Window_Options.prototype.cursorLeft;
		Window_Options.prototype.cursorLeft = function (wrap) {
			var index = this.index();
			var symbol = this.commandSymbol(index);
			var value = this.getConfigValue(symbol);
			if (symbol === 'handleShowText') {
				value = value ? value : this._languageIndex;
				value--;
				if (value < 0) {
					value = $gameSystem._languageObj.length - 1;
				}
				$gameSystem._languageIndex = value;
				$gameSystem._languageId = $gameSystem._languageObj[value].l;
				this.changeValue(symbol, value);
				//SoundManager.playCursor();
			} else {
				AXY.AjaxNetStuff.Alias.Window_Options_cursorLeft_HandleShowText.call(this, wrap);
			}
		};

		// Show Text
		Game_Interpreter.prototype.command101 = function () {
			if (!$gameMessage.isBusy()) {
				$gameMessage.setFaceImage(this._params[0], this._params[1]);
				$gameMessage.setBackground(this._params[2]);
				$gameMessage.setPositionType(this._params[3]);
				while (this.nextEventCode() === 401) { // Text data
					this._index++;
					$gameMessage.add(this.currentCommand().parameters[0].replace(/\{\$axy_showtext\[(\w+)\]\}/gi, function () {
						return AXY_AjaxHandleShowText.fetch(String(arguments[1]));
					}));
				}
				switch (this.nextEventCode()) {
					case 102: // Show Choices
						this._index++;
						this.setupChoices(this.currentCommand().parameters);
						break;
					case 103: // Input Number
						this._index++;
						this.setupNumInput(this.currentCommand().parameters);
						break;
					case 104: // Select Item
						this._index++;
						this.setupItemChoice(this.currentCommand().parameters);
						break;
				}
				this._index++;
				this.setWaitMode('message');
			}
			return false;
		};

		// Show Choices
		Game_Interpreter.prototype.setupChoices = function (params) {
			var choices = params[0].clone();
			for (var i = 0; i < choices.length; i++) {
				choices[i] = choices[i].replace(/\{\$axy_showtext\[(\w+)\]\}/gi, function () {
					return AXY_AjaxHandleShowText.fetch(String(arguments[1]));
				});
			}
			var cancelType = params[1];
			var defaultType = params.length > 2 ? params[2] : 0;
			var positionType = params.length > 3 ? params[3] : 2;
			var background = params.length > 4 ? params[4] : 0;
			if (cancelType >= choices.length) {
				cancelType = -2;
			}
			$gameMessage.setChoices(choices, defaultType, cancelType);
			$gameMessage.setChoiceBackground(background);
			$gameMessage.setChoicePositionType(positionType);
			$gameMessage.setChoiceCallback(function (n) {
				this._branch[this._indent] = n;
			}.bind(this));
		};

		var AXY_AjaxHandleShowTextURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgameHandleShowText');
		var AXY_AjaxHandleShowText = {
			fetchsupportlanguage: function () {
				if (AXY.AjaxNetStuff.Variables.timestamp_fetchsupportlanguage && new Date().getTime() - AXY.AjaxNetStuff.Variables.timestamp_fetchsupportlanguage < 3000) {
					return false;
				} else {
					AXY.AjaxNetStuff.Variables.timestamp_fetchsupportlanguage = new Date().getTime();
				}

				$.ajax({
					url: AXY_AjaxHandleShowTextURL,
					type: 'POST',
					dataType: 'json',
					async: true,
					timeout: 10000,
					data: {
						sid: AXY.AjaxNetStuff.Param.sid,
						action: 'fetchsupportlanguage'
					},
					success: function (data) {
						if (data.status) {
							var obj = AXY.AjaxNetStuff.Variables.HandleShowTextLanguageObj = data['rs'];
							$.each(obj, function (index) {
								if (obj[index].d == '1') {
									AXY.AjaxNetStuff.Variables.HandleShowTextDefaultLanguageId = obj[index].l;
								}
							});
						} else {
							console.log(data);
							$.toaster({
								message: data.info + ', ERRORCODE: ' + data.error,
								color: 'red'
							});
						};
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//console.log(errorThrown);
						$.toaster({
							title: 'ERROR: ',
							message: textStatus + ' ' + errorThrown,
							color: 'red'
						});
					},
					complete: function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
					}
				});
			},
			getlanguageindex: function (id) {
				var obj = AXY.AjaxNetStuff.Variables.HandleShowTextLanguageObj;
				var langindex = 0;
				$.each(obj, function (index) {
					if (obj[index].l == id) {
						langindex = index;
						return false;
					}
				});
				return langindex;
			},
			fetch: function (hash) {
				var str = "";
				$.ajax({
					url: AXY_AjaxHandleShowTextURL,
					type: 'POST',
					dataType: 'json',
					async: false,
					timeout: 10000,
					data: {
						sid: AXY.AjaxNetStuff.Param.sid,
						action: 'fetchlanguage',
						langid: $gameSystem._languageId,
						langhash: hash
					},
					success: function (data) {
						if (data.status) {
							str = CryptoJS.AES.decrypt(data['str'], AXY.AjaxNetStuff.Param.HandleShowTextKey).toString(CryptoJS.enc.Utf8);
						} else {
							console.log(data);
							$.toaster({
								message: data.info + ', ERRORCODE: ' + data.error,
								color: 'red'
							});
						};
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//console.log(errorThrown);
						$.toaster({
							title: 'ERROR: ',
							message: textStatus + ' ' + errorThrown,
							color: 'red'
						});
					},
					complete: function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
					}
				});

				return str;
			}
		};

		//AXY_AjaxHandleShowText.fetchsupportlanguage();
	}

	//PreventAndroidReturnKey
	if (AXY.AjaxNetStuff.Param.PreventAndroidReturnKey) {
		$(window).on('popstate', function () {
			if (confirm('要退出游戏吗？')) {
				window.close();
			} else {
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
		Window_MenuCommand.prototype.addOriginalCommands = function () {
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
		Scene_Menu.prototype.createCommandWindow = function () {
			AXY.AjaxNetStuff.Alias.createCommandWindowAuctionInGame.call(this);
			this._commandWindow.setHandler('AuctionInGame', this.commandAuctionInGame.bind(this));
			/*if (Imported.MOG_TimeSystem && Moghunter.timeWindow_menu) {	
				this._commandWindow.height -= this._commandWindow.itemHeight();
			};*/
		};

		//==============================
		// * Auction In Game
		//==============================
		Scene_Menu.prototype.commandAuctionInGame = function () {
			AXY_AjaxAuctionInGame.show();
			// Close option window
			SceneManager.pop();
		};

		//display html first
		var AXYAjaxAuctionInGameTemplate =
			'<div class="AXYAjaxAuctionInGame" id="AXYAjaxAuctionInGame">' +
			'<div class="AXYAjaxAuctionInGameBG"></div><div class="AXYAjaxAuctionInGameGold">' +
			'<input type="button" class="AXYAjaxAuctionInGameButtonGold" id="AXYAjaxAuctionInGameButtonGold" value="" /><input type="hidden" name="balance" value="" />' +
			'<input type="button" class="AXYAjaxAuctionInGameButtonClose" id="AXYAjaxAuctionInGameButtonUp" value="上一页" />' +
			'<input type="button" class="AXYAjaxAuctionInGameButtonClose" id="AXYAjaxAuctionInGameButtonDown" value="下一页" />' +
			'<input type="button" class="AXYAjaxAuctionInGameButtonClose" id="AXYAjaxAuctionInGameButtonClose" value="关闭" /></div>' +
			'<div id="AXYAjaxAuctionInGameBody"></div>' +
			'</div>';
		var AXYAjaxAuctionInGameStyleCss =
			'.AXYAjaxAuctionInGame{overflow-y:scroll;position:fixed;top:10px;left:.5%;z-index:10000;display:none;margin:0 auto;width:98%;height:0;text-align:center;border:3px solid #fff;border-radius:10px;}' +
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameBG{position:absolute;width:100%;height:100%;background:#000;opacity:.5}' +
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameGold{z-index:20000;margin-top:1%;width:100%;height:10%;}' +
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameButtonClose, .AXYAjaxAuctionInGameButtonGold{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.7);opacity:1;color:#fff;font-size:24px;}' +
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameButtonClose, .AXYAjaxAuctionInGameButtonGold{top:0;z-index:10000;margin-left:2%;width:10%;height:50px;cursor:pointer}' +
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameButtonGold{width:40%;cursor:default;}' +
			'.AXYAjaxAuctionInGame .AXYAjaxAuctionInGameBody{}' +
			'.AXYAjaxAuctionInGameButton{position:relative;top:0;z-index:10000;margin:1%;padding:5px;width:' +
			parseInt(100 / AXY.AjaxNetStuff.Param.AuctionInGameColumn - 2) + '%;height:15pc;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.5);color:#fff;font-size:24px;cursor:pointer}' +
			'.AXYAjaxAuctionInGameButtonDiv1{display:block;overflow:hidden;width:100%;height:190px;border-bottom:1px solid #fff;text-align:left;font-size:20px}' +
			'.AXYAjaxAuctionInGameButtonDiv2{display:block;width:100%;height:40px;line-height:40px}';
		$('body').append(AXYAjaxAuctionInGameTemplate);
		$('#AXYAjaxAuctionInGame').append('<style type="text/css">' + AXYAjaxAuctionInGameStyleCss + '</style>');

		var AXYAjaxAuctionInGameConfirmTemplate =
			'<div class="AXYAjaxAuctionInGameConfirm" id="AXYAjaxAuctionInGameConfirm">' +
			'<div class="AXYAjaxAuctionInGameConfirmBG"></div>' +
			'<input type="text" readonly="readonly" class="AXYAjaxAuctionInGameConfirmInput" id="AXYAjaxAuctionInGameConfirmFee" />' +
			'<input type="password" class="AXYAjaxAuctionInGameConfirmInput" id="AXYAjaxAuctionInGameConfirmInputPwd" placeholder="输入交易密码" />' +
			'<input type="button" class="AXYAjaxAuctionInGameConfirmButton" id="AXYAjaxAuctionInGameConfirmButtonUse" value="确认" />' +
			'<input type="button" class="AXYAjaxAuctionInGameConfirmButton" id="AXYAjaxAuctionInGameConfirmButtonClose" value="取消" />' +
			'</div>';
		var AXYAjaxAuctionInGameConfirmStyleCss =
			'.AXYAjaxAuctionInGameConfirm{position:fixed;top:20%;left:20%;z-index:10000;display:none;margin:0 auto;width:0%;height:220px;text-align:center;}' +
			'.AXYAjaxAuctionInGameConfirm .AXYAjaxAuctionInGameConfirmBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.9}' +
			'.AXYAjaxAuctionInGameConfirm .AXYAjaxAuctionInGameConfirmInput{margin:15px 0;text-align:center;width:80%;height:50px;imeMode:active}' +
			'.AXYAjaxAuctionInGameConfirm .AXYAjaxAuctionInGameConfirmButton,.AXYAjaxAuctionInGameConfirm .AXYAjaxAuctionInGameConfirmInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,1);color:#fff;font-size:24px;}' +
			'.AXYAjaxAuctionInGameConfirm .AXYAjaxAuctionInGameConfirmButton{top:0;z-index:10000;margin-left:2%;width:30%;height:3pc;word-spacing:20px;cursor:pointer}';
		$('body').append(AXYAjaxAuctionInGameConfirmTemplate);
		$('#AXYAjaxAuctionInGameConfirm').append('<style type="text/css">' + AXYAjaxAuctionInGameConfirmStyleCss + '</style>');


		var AXY_AjaxAuctionInGameURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgameAuctioningame');

		//then bind action
		var AXY_AjaxAuctionInGame = {
			show: function () {
				if (!AXY.AjaxNetStuff.Variables.loggedin) {
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先登录",
						color: 'white'
					});
					return;
				}

				$('#AXYAjaxAuctionInGame').stop().show().animate({
					"height": "96%"
				}, "normal", '', function () {
					$('.AXYAjaxAuctionInGameBG').stop().show().animate({
						"height": ($('#AXYAjaxAuctionInGame')[0].scrollHeight) + 'px'
					}, "normal");
				});

				$gameSystem.setTouchMoveEnabled(false);

				var css = {
					'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
				};

				$('.AXYAjaxAuctionInGame').css(css);
				//$('.AXYAjaxAuctionInGameButton').css(css);

				$('#AXYAjaxAuctionInGameButtonClose').unbind('click touchstart').bind('click touchstart', function () {
					AXY_AjaxAuctionInGame.hide();
				});

				/*$('#AXYAjaxAuctionInGame').scroll(function() {
					$.toaster({ message : '滚动了', color:'white'});
					$('#AXYAjaxAuctionInGame').scrollTop(100);
				});*/
				var scrollTop = 0;
				$('#AXYAjaxAuctionInGameButtonUp').unbind('click touchstart').bind('click touchstart', function () {
					scrollTop -= 200;
					if (scrollTop <= 0) {
						scrollTop = 0;
						$('#AXYAjaxAuctionInGame').scrollTop(scrollTop);
						$('.AXYAjaxAuctionInGameGold').css('position', '');
					} else {
						$('#AXYAjaxAuctionInGame').scrollTop(scrollTop);
						//$('.AXYAjaxAuctionInGameGold').css('position', 'fixed');
					}
					$.toaster({
						message: '滚动到' + scrollTop,
						color: 'white'
					});
				});
				$('#AXYAjaxAuctionInGameButtonDown').unbind('click touchstart').bind('click touchstart', function () {
					scrollTop += 200;
					$('#AXYAjaxAuctionInGame').scrollTop(scrollTop);
					$('.AXYAjaxAuctionInGameGold').css('position', 'fixed');
					$.toaster({
						message: '滚动到' + scrollTop,
						color: 'white'
					});
				});

				if (AXY.AjaxNetStuff.Param.AuctionInGameFetchDone) {
					return;
				}

				$.ajax({
					url: AXY_AjaxAuctionInGameURL,
					type: 'POST',
					dataType: 'json',
					data: {
						sid: AXY.AjaxNetStuff.Param.sid,
						action: 'fetchall'
					},
					success: function (data) {
						//console.log(data);
						if (data.status) {
							//console.log(data);
							//$('.AXYAjaxTopListTbody').empty();
							//console.log(data);
							try {
								$('#AXYAjaxAuctionInGameButtonGold').val(data['balance'] + '');
								$('.AXYAjaxAuctionInGameGold').find("input[name='balance']").val($.unformatMoney(data['balance']));


								var str = '';
								$.each(data['hb'], function (index) {
									var obj = data['hb'][index];
									//console.log(obj1.jsonstr);
									//var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
									//console.log(obj);
									//var time1 = new Date((obj1.lasttime).replace(new RegExp("-","gm"),"/")).Format("hh:mm"); 
									if (obj.endflag) {
										str += '<button class="AXYAjaxAuctionInGameButton"><span class="AXYAjaxAuctionInGameButtonDiv1">' + obj.nr + '</span><span class="AXYAjaxAuctionInGameButtonDiv2">' + AXY.AjaxNetStuff.Param.AuctionInGameFullText + '</span><input type="hidden" name="hbid" value="Full" /></button>';
									} else {
										str += '<button class="AXYAjaxAuctionInGameButton"><span class="AXYAjaxAuctionInGameButtonDiv1">' + obj.nr + '</span><span class="AXYAjaxAuctionInGameButtonDiv2">' + parseFloat($.formatMoney(parseFloat(obj.f) + parseFloat(obj.yf), 2)) + '</span><input type="hidden" name="hbid" value="' + obj.id + '" /><input type="hidden" name="fee" value="' + (parseFloat(obj.f) + parseFloat(obj.yf)) + '" /></button>';
									}
								});
								//$('.AXYAjaxTopListTbody').html(str);
								$('#AXYAjaxAuctionInGameBody').html(str);

								//bind click when html ready
								$('.AXYAjaxAuctionInGameButton').unbind('click touchstart').bind('click touchstart', function () {
									//console.log($(this));
									//console.log($(this).index());
									//console.log($(this).find("input[name='hbid']").val());
									if ($(this).find("input[name='hbid']").val() == 'Full') {
										$.toaster({
											message: AXY.AjaxNetStuff.Param.AuctionInGameFullText,
											color: 'white'
										});
										return;
									}
									if ($('#AXYAjaxAuctionInGameButtonGold').find("input[name='balance']").val() == 0) {
										$.toaster({
											message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 余额不足，请先充值兑换！",
											color: 'white'
										});
										return;
									}

									if ($(this).disabled) {
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
									$('#AXYAjaxAuctionInGameConfirm').stop().show().animate({
										"width": "60%"
									}, "normal");

									AXY.AjaxNetStuff.Param.AuctionInGameFee = parseFloat($(this).find("input[name='fee']").val());
									$('#AXYAjaxAuctionInGameConfirmFee').val(parseFloat($.formatMoney(AXY.AjaxNetStuff.Param.AuctionInGameFee, 2)) + '');
									//$('#AXYAjaxAuctionInGameButtonGold').find("input[name='balance']").val(data['balance']);

									var css = {
										'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
									};
									$('#AXYAjaxAuctionInGameConfirm').css(css);

									$('#AXYAjaxAuctionInGameConfirmInputPwd').focus();

									$('#AXYAjaxAuctionInGameConfirmInputPwd').keydown(function (e) {
										if (e.keyCode == 8) {
											var _name = this.value.slice(0, this.value.length - 1);
											this.value = _name;
										}
									});
									$('#AXYAjaxAuctionInGameConfirmInputPwd').unbind('click touchstart').bind('click touchstart', function () {
										$('#AXYAjaxAuctionInGameConfirmInputPwd').focus();
									});

									$('#AXYAjaxAuctionInGameConfirmButtonClose').unbind('click touchstart').bind('click touchstart', function () {
										$('#AXYAjaxAuctionInGameConfirm').stop().animate({
											"width": "0"
										}, "normal", function () {
											$(this).hide();
											//$(this).remove();
										});
										hbitem.attr("disabled", false);
									});

									AXY.AjaxNetStuff.Param.AuctionInGameFetchHbid = $(this).find("input[name='hbid']").val();
									//console.log(AXY.AjaxNetStuff.Param.AuctionInGameFetchHbid);
									//console.log($(this).find("input[name='hbid']").val());
									$('#AXYAjaxAuctionInGameConfirmButtonUse').unbind('click touchstart').bind('click touchstart', function () {
										//console.log(AXY.AjaxNetStuff.Param.AuctionInGameFetchHbid);
										if ($('#AXYAjaxAuctionInGameConfirmInputPwd').val() == '') {
											$.toaster({
												message: '不能为空',
												color: 'red'
											});
											return;
										}
										//console.log($('#AXYAjaxAuctionInGameConfirmInputPwd').val());
										$(this).attr("disabled", true);
										$(this).val("sending");
										$.ajax({
											url: AXY_AjaxAuctionInGameURL,
											type: 'POST',
											dataType: 'json',
											data: {
												sid: AXY.AjaxNetStuff.Param.sid,
												action: 'fetchone',
												hbid: AXY.AjaxNetStuff.Param.AuctionInGameFetchHbid,
												pw: $('#AXYAjaxAuctionInGameConfirmInputPwd').val()
											},
											success: function (data) {
												//console.log(data);
												if (data.status) {
													//console.log(data);
													$.toaster({
														message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 支付成功！"
													});
													//console.log($('.AXYAjaxAuctionInGameGold').find("input[name='balance']").val());
													//console.log(AXY.AjaxNetStuff.Param.AuctionInGameFee);
													$('#AXYAjaxAuctionInGameButtonGold').val(parseFloat($.formatMoney(parseFloat($('.AXYAjaxAuctionInGameGold').find("input[name='balance']").val()) - AXY.AjaxNetStuff.Param.AuctionInGameFee, 2)) + '');
													$('.AXYAjaxAuctionInGameGold').find("input[name='balance']").val(parseFloat($('.AXYAjaxAuctionInGameGold').find("input[name='balance']").val()) - AXY.AjaxNetStuff.Param.AuctionInGameFee);

													var obj = $.parseJSON(data['content']);
													//console.log(obj);
													$.each(obj, function (index) {
														//console.log(obj[index]);
														switch (obj[index].item) {
															case 0:
																$gameParty.gainGold(obj[index].num, 0, 0);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displayGoldChangeInformation) {
																	$.toaster({
																		message: "+" + obj[index].num + TextManager.currencyUnit
																	});
																}
																break;
															case 1:
																$gameParty.gainItem($dataItems[obj[index].id], obj[index].num, 0, 0);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displayItemChangeInformation) {
																	$.toaster({
																		message: "+" + obj[index].num + $dataItems[obj[index].id].name
																	});
																}
																break;
															case 2:
																$gameParty.gainItem($dataWeapons[obj[index].id], obj[index].num, 0, 0, 0);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displayWeaponChangeInformation) {
																	$.toaster({
																		message: "+" + obj[index].num + $dataWeapons[obj[index].id].name
																	});
																}
																break;
															case 3:
																$gameParty.gainItem($dataArmors[obj[index].id], obj[index].num, 0, 0, 0);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displayArmorChangeInformation) {
																	$.toaster({
																		message: "+" + obj[index].num + $dataArmors[obj[index].id].name
																	});
																}
																break;
															case 4:
																$gameSwitches.setValue(obj[index].id, obj[index].num);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displaySwitchesToggleInformation) {
																	$.toaster({
																		message: $dataSystem.switches[obj[index].id] + "=" + (obj[index].num ? 'On' : 'Off')
																	});
																}
																break;
															case 5:
																$gameVariables.setValue(obj[index].id, obj[index].num);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displayVariablesChangeInformation) {
																	$.toaster({
																		message: $dataSystem.variables[obj[index].id] + "=" + obj[index].num
																	});
																}
																break;
															case 6:
																let _tmp = obj[index].id;
																setTimeout(function () {
																	$gameTemp.reserveCommonEvent(_tmp);
																	if (AXY.AjaxNetStuff.Param.DonateInGame.displayCommonEventInformation) {
																		$.toaster({
																			message: "->" + $dataCommonEvents[_tmp].name
																		});
																	}
																}, index * 3000);
																break;
															default:
																//console.log(typeof(obj[index].num));
																break;
														}
													});

													setTimeout(function () {
														// $.toaster({
														// 	message: "托管在<a href='http://666rpg.com'>666RPG.com</a>的游戏<a href='" + AXY.AjaxNetStuff.Param.URL + "'>《" + data.gamename + "》</a>感谢您的支持！"
														// });
														AXY_AjaxCoupon.hide();
													}, 3000);
												} else {
													console.log(data);
													$.toaster({
														message: data.info + ', ERRORCODE: ' + data.error,
														color: 'red'
													});
												};
												$('#AXYAjaxAuctionInGameConfirmButtonUse').attr("disabled", false);
												$('#AXYAjaxAuctionInGameConfirmButtonUse').val("确认");
											},
											error: function (XMLHttpRequest, textStatus, errorThrown) {
												//console.log(XMLHttpRequest);
												//console.log(textStatus);
												//console.log(errorThrown);
												$.toaster({
													title: 'ERROR: ',
													message: textStatus + ' ' + errorThrown,
													color: 'red'
												});
												$('#AXYAjaxAuctionInGameConfirmButtonUse').attr("disabled", false);
												$('#AXYAjaxAuctionInGameConfirmButtonUse').val("确认");
											},
											complete: function (XMLHttpRequest, textStatus) {
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
							} catch (error) {
								console.log(error);
							}
						} else {
							//console.log(data);
							$.toaster({
								message: data.info + ', ERRORCODE: ' + data.error,
								color: 'red'
							});
						};
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//console.log(errorThrown);
						$.toaster({
							title: 'ERROR: ',
							message: textStatus + ' ' + errorThrown,
							color: 'red'
						});
					},
					complete: function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
					}
				});
			},
			hide: function () {
				$('#AXYAjaxAuctionInGame').stop().animate({
					"height": "0"
				}, "normal", function () {
					$(this).hide();
					//$(this).remove();
					$gameSystem.setTouchMoveEnabled(true);
				});
			}
		};
	}

	//menu/return button
	if (AXY.AjaxNetStuff.Param.EnableMenuButton) {
		//display html first
		var AXYAjaxMenuButtonTemplate =
			'<div class="AXYAjaxMenuButtonButtonImg"><img src="img/pictures/Button-Menu.png" class="AXYAjaxMenuButtonOpen"></div>';
		var AXYAjaxMenuButtonStyleCss =
			'.AXYAjaxMenuButtonButtonImg{position:fixed;z-index:10000;margin:auto;left:' +
			AXY.AjaxNetStuff.Param.MenuButtonPositionX + 'rem;right:0;top:' +
			AXY.AjaxNetStuff.Param.MenuButtonPositionY + 'rem;bottom:0;pointer-events:none;}.AXYAjaxMenuButtonButtonImg img{width:' +
			AXY.AjaxNetStuff.Param.ImgWidth + 'rem;height:' +
			AXY.AjaxNetStuff.Param.ImgHeight + 'rem;opacity:' +
			AXY.AjaxNetStuff.Param.ImgOpacity + ';pointer-events:auto;}';

		$('body').append(AXYAjaxMenuButtonTemplate);
		$('.AXYAjaxMenuButtonButtonImg').append('<style type="text/css">' + AXYAjaxMenuButtonStyleCss + '</style>');

		//last bind the click
		$('.AXYAjaxMenuButtonOpen').unbind('click touchstart').bind('click touchstart', function () {
			if (!$gameMap) {
				$.toaster({
					//message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>666RPG.com</a>: 请先进入游戏",
					message: "请先进入游戏",
					color: 'white'
				});
				return false;
			}
			if (!$gameMap._mapId) {
				$.toaster({
					message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先进入游戏",
					color: 'white'
				});
				return false;
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

	//ajax DonateInGame
	if (AXY.AjaxNetStuff.Param.DonateInGame.enable) {
		if (AXY.AjaxNetStuff.Param.AltTopList.ShowInMenu) {
			//=============================================================================
			// ** Window MenuCommand
			//=============================================================================	

			//==============================
			// * make Command List
			//==============================
			AXY.AjaxNetStuff.Alias.addOriginalCommandsDonateInGame = Window_MenuCommand.prototype.addOriginalCommands;
			Window_MenuCommand.prototype.addOriginalCommands = function () {
				AXY.AjaxNetStuff.Alias.addOriginalCommandsDonateInGame.call(this);
				this.addCommand(AXY.AjaxNetStuff.Param.DonateInGame.commandText, 'DonateInGame', true);
			};

			//=============================================================================
			// ** Scene Menu
			//=============================================================================	

			//==============================
			// * create Command Window
			//==============================
			AXY.AjaxNetStuff.Alias.createCommandWindowDonateInGame = Scene_Menu.prototype.createCommandWindow;
			Scene_Menu.prototype.createCommandWindow = function () {
				AXY.AjaxNetStuff.Alias.createCommandWindowDonateInGame.call(this);
				this._commandWindow.setHandler('DonateInGame', this.commandDonateInGame.bind(this));
				/*if (Imported.MOG_TimeSystem && Moghunter.timeWindow_menu) {	
					this._commandWindow.height -= this._commandWindow.itemHeight();
				};*/
			};

			//==============================
			// * Donate In Game
			//==============================
			Scene_Menu.prototype.commandDonateInGame = function () {
				AXY_AjaxDonateInGame.show();
				// Close option window
				SceneManager.pop();
			};
		}

		//display html first
		var AXYAjaxDonateInGameTemplate =
			'<div class="AXYAjaxDonateInGame" id="AXYAjaxDonateInGame">' +
			'<div class="AXYAjaxDonateInGameBG"></div><div class="AXYAjaxDonateInGameGold">' +
			'<input type="button" class="AXYAjaxDonateInGameButtonGold" id="AXYAjaxDonateInGameButtonGold" value="" /><input type="hidden" name="balance" value="" />' +
			'<input type="button" class="AXYAjaxDonateInGameButtonClose" id="AXYAjaxDonateInGameButtonUp" value="上一页" />' +
			'<input type="button" class="AXYAjaxDonateInGameButtonClose" id="AXYAjaxDonateInGameButtonDown" value="下一页" />' +
			'<input type="button" class="AXYAjaxDonateInGameButtonClose" id="AXYAjaxDonateInGameButtonMyStore" value="' + AXY.AjaxNetStuff.Param.DonateInGame.myStoreText + '" />';
		if (AXY.AjaxNetStuff.Param.DonateInGame.NewGame.enable) {
			AXYAjaxDonateInGameTemplate += '<input type="button" class="AXYAjaxDonateInGameButtonClose" id="AXYAjaxDonateInGameButtonNewGame" value="' + AXY.AjaxNetStuff.Param.DonateInGame.NewGame.buttonText + '" />';
		}
		AXYAjaxDonateInGameTemplate += '<input type="button" class="AXYAjaxDonateInGameButtonClose" id="AXYAjaxDonateInGameButtonClose" value="关闭" />' +
			'</div>' +
			'<div id="AXYAjaxDonateInGameBody"></div>' +
			'</div>';
		var AXYAjaxDonateInGameStyleCss =
			'.AXYAjaxDonateInGame{overflow-y:scroll;position:fixed;top:10px;left:.5%;z-index:10000;display:none;margin:0 auto;width:98%;height:0;text-align:center;border:3px solid #fff;border-radius:10px;}' +
			'.AXYAjaxDonateInGame .AXYAjaxDonateInGameBG{position:absolute;width:100%;height:100%;background:#000;opacity:.5}' +
			'.AXYAjaxDonateInGame .AXYAjaxDonateInGameGold{z-index:20000;margin-top:1%;width:100%;height:10%;}' +
			'.AXYAjaxDonateInGame .AXYAjaxDonateInGameButtonClose, .AXYAjaxDonateInGameButtonGold{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.7);opacity:1;color:#fff;font-size:24px;}' +
			'.AXYAjaxDonateInGame .AXYAjaxDonateInGameButtonClose, .AXYAjaxDonateInGameButtonGold{top:0;z-index:10000;margin-left:2%;width:10%;height:50px;cursor:pointer}' +
			'.AXYAjaxDonateInGame .AXYAjaxDonateInGameButtonGold{width:20%;cursor:default;}' +
			'.AXYAjaxDonateInGame .AXYAjaxDonateInGameBody{}' +
			'.AXYAjaxDonateInGameButton{position:relative;top:0;z-index:10000;margin:1%;padding:5px;width:' +
			parseInt(100 / AXY.AjaxNetStuff.Param.DonateInGame.column - 2) + '%;height:15pc;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.5);color:#fff;font-size:16px;cursor:pointer}' +
			'.AXYAjaxDonateInGameButtonDiv1{display:block;overflow-y:auto;width:100%;height:190px;border-bottom:1px solid #fff;text-align:left;font-size:16px}' +
			'.AXYAjaxDonateInGameButtonDiv2{display:block;width:100%;height:40px;line-height:40px}';
		$('body').append(AXYAjaxDonateInGameTemplate);
		$('#AXYAjaxDonateInGame').append('<style type="text/css">' + AXYAjaxDonateInGameStyleCss + '</style>');

		/*var AXYAjaxDonateInGameConfirmTemplate =
			'<div class="AXYAjaxDonateInGameConfirm" id="AXYAjaxDonateInGameConfirm">' +
			'<div class="AXYAjaxDonateInGameConfirmBG"></div>' +
			'<input type="text" readonly="readonly" class="" style="display:none;" id="" value="请确保你的游戏版本为最新版，否则有可能扣费后无法正常获得捐献奖励" />' +
			'<input type="text" readonly="readonly" class="AXYAjaxDonateInGameConfirmInput" id="AXYAjaxDonateInGameConfirmFee" />' +
			'<input type="password" class="AXYAjaxDonateInGameConfirmInput" id="AXYAjaxDonateInGameConfirmInputPwd" placeholder="输入交易密码" />' +
			'<input type="button" class="AXYAjaxDonateInGameConfirmButton" id="AXYAjaxDonateInGameConfirmButtonUse" value="确认" />' +
			'<input type="button" class="AXYAjaxDonateInGameConfirmButton" id="AXYAjaxDonateInGameConfirmButtonClose" value="取消" />' +
			'</div>';*/
		var AXYAjaxDonateInGameConfirmTemplate =
			'<div class="AXYAjaxDonateInGameConfirm" id="AXYAjaxDonateInGameConfirm">' +
			'<div class="AXYAjaxDonateInGameConfirmBG"></div>' +
			'<input type="text" readonly="readonly" class="AXYAjaxDonateInGameConfirmInput" id="AXYAjaxDonateInGameConfirmInfo" />' +
			'<input type="text" readonly="readonly" class="AXYAjaxDonateInGameConfirmInput" id="AXYAjaxDonateInGameConfirmFee" />' +
			'<input type="button" class="AXYAjaxDonateInGameConfirmButton" id="AXYAjaxDonateInGameConfirmButtonUse" value="确认" />' +
			'<input type="button" class="AXYAjaxDonateInGameConfirmButton" id="AXYAjaxDonateInGameConfirmButtonClose" value="取消" />' +
			'</div>';
		var AXYAjaxDonateInGameConfirmStyleCss =
			'.AXYAjaxDonateInGameConfirm{position:fixed;top:20%;left:20%;z-index:10000;display:none;margin:0 auto;width:0%;height:220px;text-align:center;}' +
			'.AXYAjaxDonateInGameConfirm .AXYAjaxDonateInGameConfirmBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.9}' +
			'.AXYAjaxDonateInGameConfirm .AXYAjaxDonateInGameConfirmInput{margin:15px 0;text-align:center;width:80%;height:50px;}' +
			'.AXYAjaxDonateInGameConfirm .AXYAjaxDonateInGameConfirmButton,.AXYAjaxDonateInGameConfirm .AXYAjaxDonateInGameConfirmInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,1);color:#fff;font-size:24px;}' +
			'.AXYAjaxDonateInGameConfirm .AXYAjaxDonateInGameConfirmButton{top:0;z-index:10000;margin-left:2%;width:30%;height:3pc;word-spacing:20px;cursor:pointer}';
		$('body').append(AXYAjaxDonateInGameConfirmTemplate);
		$('#AXYAjaxDonateInGameConfirm').append('<style type="text/css">' + AXYAjaxDonateInGameConfirmStyleCss + '</style>');


		var AXY_AjaxDonateInGameURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgameDonateInGame');

		//then bind action
		var AXY_AjaxDonateInGame = {
			show: function () {
				if (!AXY.AjaxNetStuff.Variables.loggedin) {
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先登录",
						color: 'white'
					});
					return;
				}

				$('#AXYAjaxDonateInGame').stop().show().animate({
					"height": "96%"
				}, "normal", '', function () {
					$('.AXYAjaxDonateInGameBG').stop().show().animate({
						"height": ($('#AXYAjaxDonateInGame')[0].scrollHeight) + 'px'
					}, "normal");
				});

				$gameSystem.setTouchMoveEnabled(false);

				var css = {
					'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
				};

				$('.AXYAjaxDonateInGame').css(css);
				//$('.AXYAjaxDonateInGameButton').css(css);

				$('#AXYAjaxDonateInGameButtonClose').unbind('click touchstart').bind('click touchstart', function () {
					AXY_AjaxDonateInGame.hide();
				});

				/*$('#AXYAjaxDonateInGame').scroll(function() {
					$.toaster({ message : '滚动了', color:'white'});
					$('#AXYAjaxDonateInGame').scrollTop(100);
				});*/
				var scrollTop = 0;
				$('#AXYAjaxDonateInGameButtonUp').unbind('click touchstart').bind('click touchstart', function () {
					scrollTop -= 200;
					if (scrollTop <= 0) {
						scrollTop = 0;
						$('#AXYAjaxDonateInGame').scrollTop(scrollTop);
						$('.AXYAjaxDonateInGameGold').css('position', '');
					} else {
						$('#AXYAjaxDonateInGame').scrollTop(scrollTop);
						//$('.AXYAjaxDonateInGameGold').css('position', 'fixed');
					}
					$.toaster({
						message: '滚动到' + scrollTop,
						color: 'white'
					});
				});

				$('#AXYAjaxDonateInGameButtonDown').unbind('click touchstart').bind('click touchstart', function () {
					scrollTop += 200;
					$('#AXYAjaxDonateInGame').scrollTop(scrollTop);
					$('.AXYAjaxDonateInGameGold').css('position', 'fixed');
					$.toaster({
						message: '滚动到' + scrollTop,
						color: 'white'
					});
				});

				$('#AXYAjaxDonateInGameButtonMyStore').unbind('click touchstart').bind('click touchstart', function () {
					$.ajax({
						url: AXY_AjaxDonateInGameURL,
						type: 'POST',
						dataType: 'json',
						data: {
							sid: AXY.AjaxNetStuff.Param.sid,
							action: 'fetchmy'
						},
						success: function (data) {
							//console.log(data);
							if (data.status) {
								//console.log(data);
								//$('.AXYAjaxTopListTbody').empty();
								//console.log(data);
								try {
									var str = '';
									str += '<div id="AXYAjaxDonateInGameBodyMyStore"><div style="position:relative;opacity:1;color:#ff0;font-size:24px;font-weight:bold;">' + AXY.AjaxNetStuff.Param.DonateInGame.myStoreText + '</div>';
									if (data['hb'] != null) {
										$.each(data['hb'], function (index) {
											var obj = data['hb'][index];
											//console.log(obj1.jsonstr);
											//var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
											//console.log(obj);
											//var time1 = new Date((obj1.lasttime).replace(new RegExp("-","gm"),"/")).Format("hh:mm"); 
											str += '<button class="AXYAjaxDonateInGameButton"><span class="AXYAjaxDonateInGameButtonDiv1">' + obj.nr + '</span><span class="AXYAjaxDonateInGameButtonDiv2">' + AXY.AjaxNetStuff.Param.DonateInGame.amountText + obj.cnt + '</span></button>';
										});
										str += '</div>';
									} else {
										str += '<button class="AXYAjaxDonateInGameButton"><span class="AXYAjaxDonateInGameButtonDiv1">暂无数据，快去支持一下《<a href="' + AXY.AjaxNetStuff.Param.URL + '" target="_blank">' + AXY.AjaxNetStuff.Variables.gameName + '</a>》作者吧！</span><span class="AXYAjaxDonateInGameButtonDiv2"></span></button>';
										str += '</div>';
									}
									//$('.AXYAjaxTopListTbody').html(str);
									if ($('#AXYAjaxDonateInGameBodyMyStore')) {
										$('#AXYAjaxDonateInGameBodyMyStore').remove();
									}
									$('#AXYAjaxDonateInGameBody').prepend(str);
									//console.log($('#AXYAjaxDonateInGameBody').height());
									$('.AXYAjaxDonateInGameBG').height(20 + $('.AXYAjaxDonateInGameGold').height() + $('#AXYAjaxDonateInGameBody').height());
								} catch (error) {
									console.log(error);
								}
							} else {
								//console.log(data);
								$.toaster({
									message: data.info + ', ERRORCODE: ' + data.error,
									color: 'red'
								});
							};
						},
						error: function (XMLHttpRequest, textStatus, errorThrown) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//console.log(errorThrown);
							$.toaster({
								title: 'ERROR: ',
								message: textStatus + ' ' + errorThrown,
								color: 'red'
							});
						},
						complete: function (XMLHttpRequest, textStatus) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
						}
					});
				});

				$('#AXYAjaxDonateInGameButtonNewGame').unbind('click touchstart').bind('click touchstart', function () {
					//confirm
					$('#AXYAjaxDonateInGameConfirm').stop().show().animate({
						"width": "60%"
					}, "normal");

					$('#AXYAjaxDonateInGameConfirmInfo').val('开新档将自动重新发放之前的捐献，但会清空存档数据!');
					$('#AXYAjaxDonateInGameConfirmFee').val('确定要开新档吗？');

					var css = {
						'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
					};
					$('#AXYAjaxDonateInGameConfirm').css(css);

					$('#AXYAjaxDonateInGameConfirmButtonClose').unbind('click touchstart').bind('click touchstart', function () {
						$('#AXYAjaxDonateInGameConfirm').stop().animate({
							"width": "0"
						}, "normal", function () {
							$(this).hide();
							//$(this).remove();
						});
					});

					$('#AXYAjaxDonateInGameConfirmButtonUse').unbind('click touchstart').bind('click touchstart', function () {
						$('#AXYAjaxDonateInGameConfirm').stop().animate({
							"width": "0"
						}, "normal", function () {
							$(this).hide();
							//$(this).remove();
						});
						AXY_AjaxDonateInGame.hide();
						$.toaster({
							message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 返回标题页面，请勿操作...",
							color: 'white'
						});

						SceneManager.push(Scene_Title);
						var tmpInterval = setInterval(function () {
							if (SceneManager._scene.constructor.name == 'Scene_Title') {
								clearInterval(tmpInterval);
								DataManager.setupNewGame();
								$.toaster({
									message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 正在获取已捐献数据...",
									color: 'white'
								});
								var AXY_AjaxCloudLoadURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgamecloudloadnewgame');
								$.ajax({
									url: AXY_AjaxCloudLoadURL,
									type: 'POST',
									dataType: 'json',
									data: {
										sid: AXY.AjaxNetStuff.Param.sid
									},
									success: function (data) {
										//console.log(data);
										if (data.status) {
											try {
												$.toaster({
													message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 获取成功！"
												});
												$.toaster({
													message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 正在进入游戏，请勿操作...",
													color: 'white'
												});

												// Initialize map
												//console.log("Goto Scene_Map");
												SceneManager.goto(Scene_Map);
												if (SceneManager._scene) {
													SceneManager._scene.fadeOutAll();
												};

												var tmpInterval = setInterval(function () {
													if (SceneManager._scene.constructor.name == 'Scene_Map') {
														clearInterval(tmpInterval);
														$gameMessage.add("正在下发数据中。。。\\c[2]请勿操作\\c[0]");
														$gameMap._interpreter.setWaitMode('message');
														$gameSystem.setTouchMoveEnabled(false);
														let _round = 0;
														$.each(data['hb'], function (index, hb) {
															var obj = $.parseJSON(hb['ct']);
															//console.log(obj);
															$.each(obj, function (index) {
																//console.log(obj[index]);
																switch (obj[index].item) {
																	case 0:
																		$gameParty.gainGold(obj[index].num, 0, 0);
																		if (AXY.AjaxNetStuff.Param.DonateInGame.displayGoldChangeInformation) {
																			$.toaster({
																				message: "+" + obj[index].num + TextManager.currencyUnit
																			});
																		}
																		break;
																	case 1:
																		$gameParty.gainItem($dataItems[obj[index].id], obj[index].num, 0, 0);
																		if (AXY.AjaxNetStuff.Param.DonateInGame.displayItemChangeInformation) {
																			$.toaster({
																				message: "+" + obj[index].num + $dataItems[obj[index].id].name
																			});
																		}
																		break;
																	case 2:
																		$gameParty.gainItem($dataWeapons[obj[index].id], obj[index].num, 0, 0, 0);
																		if (AXY.AjaxNetStuff.Param.DonateInGame.displayWeaponChangeInformation) {
																			$.toaster({
																				message: "+" + obj[index].num + $dataWeapons[obj[index].id].name
																			});
																		}
																		break;
																	case 3:
																		$gameParty.gainItem($dataArmors[obj[index].id], obj[index].num, 0, 0, 0);
																		if (AXY.AjaxNetStuff.Param.DonateInGame.displayArmorChangeInformation) {
																			$.toaster({
																				message: "+" + obj[index].num + $dataArmors[obj[index].id].name
																			});
																		}
																		break;
																	case 4:
																		$gameSwitches.setValue(obj[index].id, obj[index].num);
																		if (AXY.AjaxNetStuff.Param.DonateInGame.displaySwitchesToggleInformation) {
																			$.toaster({
																				message: $dataSystem.switches[obj[index].id] + "=" + (obj[index].num ? 'On' : 'Off')
																			});
																		}
																		break;
																	case 5:
																		$gameVariables.setValue(obj[index].id, obj[index].num);
																		if (AXY.AjaxNetStuff.Param.DonateInGame.displayVariablesChangeInformation) {
																			$.toaster({
																				message: $dataSystem.variables[obj[index].id] + "=" + obj[index].num
																			});
																		}
																		break;
																	case 6:
																		let _tmp = obj[index].id;
																		setTimeout(function () {
																			$gameTemp.reserveCommonEvent(_tmp);
																			if (AXY.AjaxNetStuff.Param.DonateInGame.displayCommonEventInformation) {
																				$.toaster({
																					message: "->" + $dataCommonEvents[_tmp].name
																				});
																			}
																		}, _round * 3000);
																		_round++;
																		break;
																	default:
																		//console.log(typeof(obj[index].num));
																		break;
																}
															});
														});

														$gameSystem.setTouchMoveEnabled(true);
														AXY_Save.save(AXY.AjaxNetStuff.Param.DonateInGame.autoSaveAfterNewGame);
														$gameMessage.add("\\c[3]数据下发完毕，请尽情享受游戏吧！\\c[0]");
														$gameMap._interpreter.setWaitMode('message');
														setTimeout(function () {
															// $.toaster({
															// 	message: "托管在<a href='http://666rpg.com'>666RPG.com</a>的游戏<a href='" + AXY.AjaxNetStuff.Param.URL + "'>《" + data.gamename + "》</a>感谢您的支持！"
															// });
															AXY_AjaxCoupon.hide();
														}, 3000);
													}
												}, 1000);
											} catch (e) {
												$.toaster({
													message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 解析云存档失败，请进入游戏重试！"
												});
												console.log(e);
											}
										} else {
											console.log(data);
											$.toaster({
												message: data.info + ', ERRORCODE: ' + data.error,
												color: 'red'
											});
										};
										//$('#AXYAjaxCloudSaveButtonRead').attr("disabled", false);
										//$('#AXYAjaxCloudSaveButtonRead').val("读取");
									},
									error: function (XMLHttpRequest, textStatus, errorThrown) {
										console.log(XMLHttpRequest);
										console.log(textStatus);
										console.log(errorThrown);
										$.toaster({
											title: 'ERROR: ',
											message: textStatus + ' ' + errorThrown,
											color: 'red'
										});
										//$('#AXYAjaxCloudSaveButtonRead').attr("disabled", false);
										//$('#AXYAjaxCloudSaveButtonRead').val("读取");
									},
									complete: function (XMLHttpRequest, textStatus) {
										//console.log(XMLHttpRequest);
										//console.log(textStatus);
										//$.toaster({
										//	title: 'COMPLETE: ',
										//	message: textStatus,
										//	color: 'gray'
										//});
										//$('#AXYAjaxCloudSaveButtonRead').attr("disabled", false);
										//$('#AXYAjaxCloudSaveButtonRead').val("读取");
									}
								});

							}
						}, 1000);
					});
				});

				if (AXY.AjaxNetStuff.Param.DonateInGameFetchDone) {
					return;
				}

				//alert("请确保你的游戏版本为最新版，否则有可能扣费后无法正常获得捐献奖励");
				$gameMessage.add("正在捐献中。。。");
				$gameMessage.add("请勿打扰");
				$gameMap._interpreter.setWaitMode('message');

				$.ajax({
					url: AXY_AjaxDonateInGameURL,
					type: 'POST',
					dataType: 'json',
					data: {
						sid: AXY.AjaxNetStuff.Param.sid,
						action: 'fetchall',
						popularamount: AXY.AjaxNetStuff.Param.DonateInGame.popularAmount
					},
					success: function (data) {
						//console.log(data);
						if (data.status) {
							//console.log(data);
							//$('.AXYAjaxTopListTbody').empty();
							//console.log(data);
							try {
								$('#AXYAjaxDonateInGameButtonGold').val($.formatMoney($.unformatMoney(data['balance']), 2) + AXY.AjaxNetStuff.Param.DonateInGame.currencyText);
								$('.AXYAjaxDonateInGameGold').find("input[name='balance']").val($.unformatMoney(data['balance']));

								var str = '';
								if (data['hbp'] != null) {
									str += '<div style="position:relative;opacity:1;color:#ff0;font-size:24px;font-weight:bold;">' + AXY.AjaxNetStuff.Param.DonateInGame.popularText + '</div>';
									$.each(data['hbp'], function (index) {
										var obj = data['hbp'][index];
										//console.log(obj1.jsonstr);
										//var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
										//console.log(obj);
										//var time1 = new Date((obj1.lasttime).replace(new RegExp("-","gm"),"/")).Format("hh:mm"); 
										if (obj.endflag) {
											str += '<button class="AXYAjaxDonateInGameButton"><span class="AXYAjaxDonateInGameButtonDiv1">' + obj.nr + '</span><span class="AXYAjaxDonateInGameButtonDiv2">' + ($.formatMoney(parseFloat(obj.f) + parseFloat(obj.yf), 2)) + AXY.AjaxNetStuff.Param.DonateInGame.currencyText + ' (' + AXY.AjaxNetStuff.Param.DonateInGame.FullText + ')</span><input type="hidden" name="hbid" value="Full" /></button>';
										} else {
											str += '<button class="AXYAjaxDonateInGameButton"><span class="AXYAjaxDonateInGameButtonDiv1">' + obj.nr + '</span><span class="AXYAjaxDonateInGameButtonDiv2">' + ($.formatMoney(parseFloat(obj.f) + parseFloat(obj.yf), 2)) + AXY.AjaxNetStuff.Param.DonateInGame.currencyText + '</span><input type="hidden" name="hbid" value="' + obj.id + '" /><input type="hidden" name="fee" value="' + (parseFloat(obj.f) + parseFloat(obj.yf)) + '" /></button>';
										}
									});
								}
								str += '<div style="position:relative;opacity:1;color:#ff0;font-size:24px;font-weight:bold;">' + AXY.AjaxNetStuff.Param.DonateInGame.generalText + '</div>';
								$.each(data['hb'], function (index) {
									var obj = data['hb'][index];
									//console.log(obj1.jsonstr);
									//var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
									//console.log(obj);
									//var time1 = new Date((obj1.lasttime).replace(new RegExp("-","gm"),"/")).Format("hh:mm"); 
									if (obj.endflag) {
										str += '<button class="AXYAjaxDonateInGameButton"><span class="AXYAjaxDonateInGameButtonDiv1">' + obj.nr + '</span><span class="AXYAjaxDonateInGameButtonDiv2">' + ($.formatMoney(parseFloat(obj.f) + parseFloat(obj.yf), 2)) + AXY.AjaxNetStuff.Param.DonateInGame.currencyText + ' (' + AXY.AjaxNetStuff.Param.DonateInGame.FullText + ')</span><input type="hidden" name="hbid" value="Full" /></button>';
									} else {
										str += '<button class="AXYAjaxDonateInGameButton"><span class="AXYAjaxDonateInGameButtonDiv1">' + obj.nr + '</span><span class="AXYAjaxDonateInGameButtonDiv2">' + ($.formatMoney(parseFloat(obj.f) + parseFloat(obj.yf), 2)) + AXY.AjaxNetStuff.Param.DonateInGame.currencyText + '</span><input type="hidden" name="hbid" value="' + obj.id + '" /><input type="hidden" name="fee" value="' + (parseFloat(obj.f) + parseFloat(obj.yf)) + '" /></button>';
									}
								});
								//$('.AXYAjaxTopListTbody').html(str);
								$('#AXYAjaxDonateInGameBody').html(str);
								//console.log($('#AXYAjaxDonateInGameBody').height());
								$('.AXYAjaxDonateInGameBG').height(20 + $('.AXYAjaxDonateInGameGold').height() + $('#AXYAjaxDonateInGameBody').height());


								//bind click when html ready
								$('.AXYAjaxDonateInGameButton').unbind('click touchstart').bind('click touchstart', function () {
									//console.log($(this));
									//console.log($(this).index());
									//console.log($(this).find("input[name='hbid']").val());
									if ($(this).find("input[name='hbid']").val() == 'Full') {
										$.toaster({
											message: AXY.AjaxNetStuff.Param.DonateInGame.FullText,
											color: 'white'
										});
										return;
									}
									if ($('#AXYAjaxDonateInGameButtonGold').find("input[name='balance']").val() == 0) {
										$.toaster({
											message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 余额不足，请先充值兑换！",
											color: 'white'
										});
										return;
									}

									if ($(this).disabled) {
										//console.log($('#AXYAjaxDonateInGameButtonUse')[0].disabled);
										return;
									}
									//console.log($('#AXYAjaxDonateInGameButtonUse'));
									//console.log($('#AXYAjaxDonateInGameButtonUse')[0].disabled);

									$(this).attr("disabled", true);
									var hbitem = $(this);
									//$('#AXYAjaxDonateInGameButtonUse').val("sending");
									//console.log($('#AXYAjaxDonateInGameButtonUse'));
									//console.log(typeof($('#AXYAjaxDonateInGameButtonUse')[0].disabled));
									//return;

									//confirm
									$('#AXYAjaxDonateInGameConfirm').stop().show().animate({
										"width": "60%"
									}, "normal");

									AXY.AjaxNetStuff.Param.DonateInGameFee = parseFloat($(this).find("input[name='fee']").val());
									//$('#AXYAjaxDonateInGameConfirmFee').val(parseFloat($.formatMoney(AXY.AjaxNetStuff.Param.DonateInGameFee, 2)) + '');
									$('#AXYAjaxDonateInGameConfirmInfo').val('请确保游戏版本为最新，否则扣费后无法获得对应奖励');
									$('#AXYAjaxDonateInGameConfirmFee').val(($.formatMoney(AXY.AjaxNetStuff.Param.DonateInGameFee, 2)) + AXY.AjaxNetStuff.Param.DonateInGame.currencyText);
									//$('#AXYAjaxDonateInGameButtonGold').find("input[name='balance']").val(data['balance']);

									var css = {
										'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
									};
									$('#AXYAjaxDonateInGameConfirm').css(css);

									/*$('#AXYAjaxDonateInGameConfirmInputPwd').focus();

									$('#AXYAjaxDonateInGameConfirmInputPwd').keydown(function (e) {
										if (e.keyCode == 8) {
											var _name = this.value.slice(0, this.value.length - 1);
											this.value = _name;
										}
									});
									$('#AXYAjaxDonateInGameConfirmInputPwd').unbind('click touchstart').bind('click touchstart', function () {
										$('#AXYAjaxDonateInGameConfirmInputPwd').focus();
									});*/

									$('#AXYAjaxDonateInGameConfirmButtonClose').unbind('click touchstart').bind('click touchstart', function () {
										$('#AXYAjaxDonateInGameConfirm').stop().animate({
											"width": "0"
										}, "normal", function () {
											$(this).hide();
											//$(this).remove();
										});
										hbitem.attr("disabled", false);
									});

									AXY.AjaxNetStuff.Param.DonateInGameFetchHbid = $(this).find("input[name='hbid']").val();
									//console.log(AXY.AjaxNetStuff.Param.DonateInGameFetchHbid);
									//console.log($(this).find("input[name='hbid']").val());
									$('#AXYAjaxDonateInGameConfirmButtonUse').unbind('click touchstart').bind('click touchstart', function () {
										//console.log(AXY.AjaxNetStuff.Param.DonateInGameFetchHbid);
										/*if ($('#AXYAjaxDonateInGameConfirmInputPwd').val() == '') {
											$.toaster({
												message: '不能为空',
												color: 'red'
											});
											return;
										}*/
										//console.log($('#AXYAjaxDonateInGameConfirmInputPwd').val());
										$(this).attr("disabled", true);
										$(this).val("sending");
										$.ajax({
											url: AXY_AjaxDonateInGameURL,
											type: 'POST',
											dataType: 'json',
											data: {
												sid: AXY.AjaxNetStuff.Param.sid,
												action: 'fetchone',
												hbid: AXY.AjaxNetStuff.Param.DonateInGameFetchHbid,
												//pw: $('#AXYAjaxDonateInGameConfirmInputPwd').val()
											},
											success: function (data) {
												//console.log(data);
												if (data.status) {
													//console.log(data);
													$.toaster({
														message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 支付成功！"
													});
													//console.log($('.AXYAjaxDonateInGameGold').find("input[name='balance']").val());
													//console.log(AXY.AjaxNetStuff.Param.DonateInGameFee);
													$('#AXYAjaxDonateInGameButtonGold').val(($.formatMoney(parseFloat($('.AXYAjaxDonateInGameGold').find("input[name='balance']").val()) - AXY.AjaxNetStuff.Param.DonateInGameFee, 2)) + AXY.AjaxNetStuff.Param.DonateInGame.currencyText);
													$('.AXYAjaxDonateInGameGold').find("input[name='balance']").val(parseFloat($('.AXYAjaxDonateInGameGold').find("input[name='balance']").val()) - AXY.AjaxNetStuff.Param.DonateInGameFee);

													var obj = $.parseJSON(data['content']);
													//console.log(obj);
													$.each(obj, function (index) {
														//console.log(obj[index]);
														switch (obj[index].item) {
															case 0:
																$gameParty.gainGold(obj[index].num, 0, 0);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displayGoldChangeInformation) {
																	$.toaster({
																		message: "+" + obj[index].num + TextManager.currencyUnit
																	});
																}
																break;
															case 1:
																$gameParty.gainItem($dataItems[obj[index].id], obj[index].num, 0, 0);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displayItemChangeInformation) {
																	$.toaster({
																		message: "+" + obj[index].num + $dataItems[obj[index].id].name
																	});
																}
																break;
															case 2:
																$gameParty.gainItem($dataWeapons[obj[index].id], obj[index].num, 0, 0, 0);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displayWeaponChangeInformation) {
																	$.toaster({
																		message: "+" + obj[index].num + $dataWeapons[obj[index].id].name
																	});
																}
																break;
															case 3:
																$gameParty.gainItem($dataArmors[obj[index].id], obj[index].num, 0, 0, 0);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displayArmorChangeInformation) {
																	$.toaster({
																		message: "+" + obj[index].num + $dataArmors[obj[index].id].name
																	});
																}
																break;
															case 4:
																$gameSwitches.setValue(obj[index].id, obj[index].num);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displaySwitchesToggleInformation) {
																	$.toaster({
																		message: $dataSystem.switches[obj[index].id] + "=" + (obj[index].num ? 'On' : 'Off')
																	});
																}
																break;
															case 5:
																$gameVariables.setValue(obj[index].id, obj[index].num);
																if (AXY.AjaxNetStuff.Param.DonateInGame.displayVariablesChangeInformation) {
																	$.toaster({
																		message: $dataSystem.variables[obj[index].id] + "=" + obj[index].num
																	});
																}
																break;
															case 6:
																let _tmp = obj[index].id;
																setTimeout(function () {
																	$gameTemp.reserveCommonEvent(_tmp);
																	if (AXY.AjaxNetStuff.Param.DonateInGame.displayCommonEventInformation) {
																		$.toaster({
																			message: "->" + $dataCommonEvents[_tmp].name
																		});
																	}
																}, index * 3000);
																break;
															default:
																//console.log(typeof(obj[index].num));
																break;
														}
													});

													$gameSystem.setTouchMoveEnabled(true);
													AXY_Save.save(AXY.AjaxNetStuff.Param.DonateInGame.autoSaveAfterDonate);
													$gameSystem.setTouchMoveEnabled(false);
													$gameMessage.add("捐献完毕，感谢！");
													$gameMap._interpreter.setWaitMode('message');

													setTimeout(function () {
														// $.toaster({
														// 	message: "托管在<a href='http://666rpg.com'>666RPG.com</a>的游戏<a href='" + AXY.AjaxNetStuff.Param.URL + "'>《" + data.gamename + "》</a>感谢您的支持！"
														// });
														AXY_AjaxCoupon.hide();
													}, 3000);

												} else {
													console.log(data);
													$.toaster({
														message: data.info + ', ERRORCODE: ' + data.error,
														color: 'red'
													});
												};
												$('#AXYAjaxDonateInGameConfirmButtonUse').attr("disabled", false);
												$('#AXYAjaxDonateInGameConfirmButtonUse').val("确认");
											},
											error: function (XMLHttpRequest, textStatus, errorThrown) {
												//console.log(XMLHttpRequest);
												//console.log(textStatus);
												//console.log(errorThrown);
												$.toaster({
													title: 'ERROR: ',
													message: textStatus + ' ' + errorThrown,
													color: 'red'
												});
												$('#AXYAjaxDonateInGameConfirmButtonUse').attr("disabled", false);
												$('#AXYAjaxDonateInGameConfirmButtonUse').val("确认");
											},
											complete: function (XMLHttpRequest, textStatus) {
												//console.log(XMLHttpRequest);
												//console.log(textStatus);
												//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
												$('#AXYAjaxDonateInGameConfirmButtonUse').attr("disabled", false);
												$('#AXYAjaxDonateInGameConfirmButtonUse').val("确认");
											}
										});
									});
								});

								AXY.AjaxNetStuff.Param.DonateInGameFetchDone = true;
							} catch (error) {
								console.log(error);
							}
						} else {
							//console.log(data);
							$.toaster({
								message: data.info + ', ERRORCODE: ' + data.error,
								color: 'red'
							});
						};
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//console.log(errorThrown);
						$.toaster({
							title: 'ERROR: ',
							message: textStatus + ' ' + errorThrown,
							color: 'red'
						});
					},
					complete: function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
					}
				});
			},
			hide: function () {
				$('#AXYAjaxDonateInGame').stop().animate({
					"height": "0"
				}, "normal", function () {
					$(this).hide();
					//$(this).remove();
					$gameSystem.setTouchMoveEnabled(true);
				});
			}
		};
	}

	//ajax danmu
	if ((AXY.AjaxNetStuff.Param.EnableDanmu && !Utils.isMobileDevice()) || (AXY.AjaxNetStuff.Param.EnableDanmu && Utils.isMobileDevice() && AXY.AjaxNetStuff.Param.EnableDanmuOnMobileDevice)) {
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
			'.AXYAjaxDanmu{position:fixed;top:10px;left:.5%;z-index:' +
			(AXY.AjaxNetStuff.Param.zIndex) + ';display:none;margin:0 auto;width:98%;height:0px;text-align:center;}' +
			'.AXYAjaxDanmu .AXYAjaxDanmuBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.5}' +
			'.AXYAjaxDanmu .AXYAjaxDanmuInput{margin:15px 0 15px 2%;text-align:center;width:30%;height:50px;imeMode:active}' +
			'.AXYAjaxDanmu .AXYAjaxDanmuButton,.AXYAjaxDanmu .AXYAjaxDanmuInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.4);color:#fff;font-size:24px;}' +
			'.AXYAjaxDanmu .AXYAjaxDanmuButton{top:0;z-index:10000;margin-left:2%;width:10%;height:50px;cursor:pointer}' +
			'.AXYAjaxDanmuButtonImg{position:fixed;z-index:10000;margin:auto;left:150px;right:0;top:0;bottom:0;text-align:center;pointer-events:none;}.AXYAjaxDanmuButtonImg img{width:' +
			AXY.AjaxNetStuff.Param.ImgWidth + 'rem;height:' +
			AXY.AjaxNetStuff.Param.ImgHeight + 'rem;opacity:' +
			AXY.AjaxNetStuff.Param.ImgOpacity + ';pointer-events:auto;}';

		$('body').append(AXYAjaxDanmuTemplate);
		$('#AXYAjaxDanmu').append('<style type="text/css">' + AXYAjaxDanmuStyleCss + '</style>');
		$('#AXYAjaxDanmuButtonPosition').css('display', 'none');
		$('#AXYAjaxDanmuButtonColor').css('display', 'none');

		var AXY_AjaxDanmuURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgamedanmu');
		//var danmuXpoor = Math.ceil(Graphics.width/96);
		//var danmuYpoor = Math.ceil(Graphics.height/96);
		var danmuXpoor = 10;
		var danmuYpoor = 10;
		var lastid = 0;

		//then bind action
		var AXY_AjaxDanmu = {
			show: function () {
				if (!$gameMap) {
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先进入游戏",
						color: 'white'
					});
					return;
				}
				if (!$gameMap._mapId) {
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先进入游戏",
						color: 'white'
					});
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
				if (document.body.scrollWidth > $('#UpperCanvas')[0].scrollWidth) {
					danmuStartX += (document.body.scrollWidth - $('#UpperCanvas')[0].scrollWidth) / 2;
					danmuEndX = (document.body.scrollWidth - $('#UpperCanvas')[0].scrollWidth) / 2;
					//console.log(danmuStartX);
				}
				if (document.body.scrollHeight > $('#UpperCanvas')[0].scrollHeight) {
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
				$('#AXYAjaxDanmu').stop().show().animate({
					"height": "80"
				}, "normal");
				$gameSystem.setTouchMoveEnabled(false);
				$('#AXYAjaxDanmuInput').focus();
				var css = {
					'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
				};
				$('#AXYAjaxDanmuInput').css(css);
				$('.AXYAjaxDanmuButton').css(css);

				$('#AXYAjaxDanmuInput').keydown(function (e) {
					if (e.keyCode == 8) {
						var _name = this.value.slice(0, this.value.length - 1);
						this.value = _name;
					}
				});
				$('#AXYAjaxDanmuInput').unbind('click touchstart').bind('click touchstart', function () {
					$('#AXYAjaxDanmuInput').focus();
				});
				//console.log($('#AXYAjaxDanmuInput'));
				$('#AXYAjaxDanmuInput').keydown(function (e) {
					if (e.keyCode == 13) {
						$('#AXYAjaxDanmuButtonUse').click();
					}
				});
				$('#AXYAjaxDanmuButtonUse').unbind('click touchstart').bind('click touchstart', function () {
					if (!AXY.AjaxNetStuff.Variables.loggedin) {
						$.toaster({
							message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先登录",
							color: 'white'
						});
						return;
					}

					if (!AXY.AjaxNetStuff.Param.DanmuSwitch) {
						$.toaster({
							message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先启用弹幕",
							color: 'white'
						});
						return;
					}

					if ($('#AXYAjaxDanmuButtonUse')[0].disabled) {
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
					inputDanmu = inputDanmu.replace(/<\/?[^>]*>/gim, ""); //去掉所有的html标记
					inputDanmu = inputDanmu.replace(/(^\s+)|(\s+$)/g, ""); //去掉前后空格
					inputDanmu = inputDanmu.substr(0, 60); //限制长度
					//inputDanmu = inputDanmu.replace(/\s/g,"");//去除文章中间空格
					//console.log($('#AXYAjaxDanmuInput'));
					//console.log($('#AXYAjaxDanmuInput').val());
					//console.log(inputcoupon);
					//console.log(str);
					//console.log(result);
					//console.log(ss);


					danmuAid++;
					var danmuid = danmuAid;
					var danmuRndY = parseInt(Math.random() * (400 - 100 + 1) + 100, 10);
					//var danmuRndLifetime = parseInt(Math.random()*(8000-3000+1)+3000,10);
					//var danmuRndY = 100;
					//var danmuRndLifetime = 5000;

					if (!inputDanmu) {
						//console.log('代码不能为空');
						//$.toaster({ message : '不能为空', color:'red'});
						AXY_Text.show({
							id: 'Error' + danmuid,
							msg: "'不能为空'",
							align: 'topleft',
							x: 0,
							y: 0,
							backgroundcolor: 'rgba(0,0,0,0.4)',
							color: 'red'
						});
						$('#AXYTextError' + danmuid).css({
							'left': danmuStartX - $('#AXYTextError' + danmuid)[0].clientWidth,
							'top': danmuStartY + danmuRndY
						});
						$('#AXYTextError' + danmuid).stop().show().animate({
							"left": danmuEndX
						}, AXY.AjaxNetStuff.Param.DanmuSpeed, '', function () {
							AXY_Text.remove('Error' + danmuid);
						});
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

					if ($gameTroop._inBattle) {
						$.ajax({
							url: AXY_AjaxDanmuURL,
							type: 'POST',
							dataType: 'json',
							data: {
								sid: AXY.AjaxNetStuff.Param.sid,
								danmumsg: inputDanmu,
								mapid: $gameMap._mapId,
								displayx: $gamePlayer._x,
								displayy: $gamePlayer._y,
								steps: $gameParty._steps,
								actorname: $gameActors._data[$gameParty._actors[0]]._name,
								playtime: parseInt(Graphics.frameCount / 60),
								troopid: $gameTroop._troopId
							},
							success: function (data) {
								//console.log(data);
								if (data.status) {
									//console.log(data);
								} else {
									//console.log(data);
									//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
								};
								$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
								$('#AXYAjaxDanmuButtonUse').val("发送");
							},
							error: function (XMLHttpRequest, textStatus, errorThrown) {
								//console.log(XMLHttpRequest);
								//console.log(textStatus);
								//console.log(errorThrown);
								$.toaster({
									title: 'ERROR: ',
									message: textStatus + ' ' + errorThrown,
									color: 'red'
								});
								$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
								$('#AXYAjaxDanmuButtonUse').val("发送");
							},
							complete: function (XMLHttpRequest, textStatus) {
								//console.log(XMLHttpRequest);
								//console.log(textStatus);
								//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
								$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
								$('#AXYAjaxDanmuButtonUse').val("发送");
							}
						});
					} else if ($gameMap._mapId) {
						$.ajax({
							url: AXY_AjaxDanmuURL,
							type: 'POST',
							dataType: 'json',
							data: {
								sid: AXY.AjaxNetStuff.Param.sid,
								danmumsg: inputDanmu,
								mapid: $gameMap._mapId,
								displayx: $gamePlayer._x,
								displayy: $gamePlayer._y,
								steps: $gameParty._steps,
								actorname: $gameActors._data[$gameParty._actors[0]]._name,
								playtime: parseInt(Graphics.frameCount / 60),
								troopid: 0
							},
							success: function (data) {
								//console.log(data);
								if (data.status) {
									//console.log(data);
								} else {
									//console.log(data);
									//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
								};
								$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
								$('#AXYAjaxDanmuButtonUse').val("发送");
							},
							error: function (XMLHttpRequest, textStatus, errorThrown) {
								//console.log(XMLHttpRequest);
								//console.log(textStatus);
								//console.log(errorThrown);
								$.toaster({
									title: 'ERROR: ',
									message: textStatus + ' ' + errorThrown,
									color: 'red'
								});
								$('#AXYAjaxDanmuButtonUse').attr("disabled", false);
								$('#AXYAjaxDanmuButtonUse').val("发送");
							},
							complete: function (XMLHttpRequest, textStatus) {
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
				$('#AXYAjaxDanmuButtonClear').unbind('click touchstart').bind('click touchstart', function () {
					$('#AXYAjaxDanmuInput').val('').focus();
				});
				$('#AXYAjaxDanmuButtonClose').unbind('click touchstart').bind('click touchstart', function () {
					AXY_AjaxDanmu.hide();
				});
				$('#AXYAjaxDanmuButtonSwitch').unbind('click touchstart').bind('click touchstart', function () {
					if (AXY.AjaxNetStuff.Param.DanmuSwitch) {
						$('#AXYAjaxDanmuButtonSwitch').val("启用");
						AXY.AjaxNetStuff.Param.DanmuSwitch = false;
					} else {
						$('#AXYAjaxDanmuButtonSwitch').val("禁用");
						AXY.AjaxNetStuff.Param.DanmuSwitch = true;
					}
				});
			},
			hide: function () {
				$('#AXYAjaxDanmu').stop().animate({
					"height": "0"
				}, "normal", function () {
					$(this).hide();
					//$(this).remove();
					$gameSystem.setTouchMoveEnabled(true);
					$('.AXYAjaxDanmuOpen').show();
				});
			}
		};

		//last bind the click
		$('.AXYAjaxDanmuOpen').unbind('click touchstart').bind('click touchstart', function () {
			AXY_AjaxDanmu.show();
		});

		//auto fetch danmu

		try {
			var i = 0;
			setInterval(function () {
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


				if (AXY.AjaxNetStuff.Param.DanmuSwitch == false) {
					return;
				}
				if (!$gameMap) {
					return;
				}
				if (!$gameMap._mapId) {
					return;
				}
				/*if(!$gameMap._axydanmu){
					$gameMap._axydanmu = [];
				}*/

				var danmuStartX = $('#UpperCanvas')[0].scrollWidth;
				var danmuStartY = 0;
				var danmuEndX = 0;

				if (document.body.scrollWidth > $('#UpperCanvas')[0].scrollWidth) {
					danmuStartX += (document.body.scrollWidth - $('#UpperCanvas')[0].scrollWidth) / 2;
					danmuEndX = (document.body.scrollWidth - $('#UpperCanvas')[0].scrollWidth) / 2;
					//console.log(danmuStartX);
				}
				if (document.body.scrollHeight > $('#UpperCanvas')[0].scrollHeight) {
					danmuStartY = (document.body.scrollHeight - $('#UpperCanvas')[0].scrollHeight) / 2;
					//console.log(danmuStartY);
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
				if ($gameTroop._inBattle) {
					var gameTroop_troopId = $gameTroop._troopId;
					if (!AXY.AjaxNetStuff.Param.DanmuObj.Troop[gameTroop_troopId]) {
						//AXY.AjaxNetStuff.Param.DanmuObj.Troop.push($gameTroop._troopId);
						AXY.AjaxNetStuff.Param.DanmuObj.Troop[gameTroop_troopId] = 1;
					}
					//console.log(AXY.AjaxNetStuff.Param.DanmuObj);
					$.ajax({
						url: AXY_AjaxDanmuURL,
						type: 'POST',
						dataType: 'json',
						data: {
							troopid: gameTroop_troopId,
							lastid: AXY.AjaxNetStuff.Param.DanmuObj.Troop[gameTroop_troopId]
						},
						success: function (data) {
							//console.log(data);
							if (data.status) {
								var obj = data.jsonstr;
								//console.log(obj);
								$.each(obj, function (index) {
									//console.log(obj[index]);

									//$gameMap._axydanmu.push(obj[index]);

									setTimeout(function () {
										var danmuRndY = parseInt(Math.random() * (400 - 100 + 1) + 100, 10);
										//var danmuRndLifetime = parseInt(Math.random()*(8000-3000+1)+3000,10);
										var time = new Date((obj[index].timeline).replace(new RegExp("-", "gm"), "/")).Format("hhmm");
										//$.toaster({ message : obj[index].actorname+'['+time+']: '+obj[index].danmumsg, color:'white'});
										var id = 'danmu' + obj[index].id;
										AXY_Text.show({
											id: id,
											msg: '"' + obj[index].danmumsg + '"',
											align: 'topleft',
											x: 0,
											y: 0
										});
										$('#AXYText' + id).css({
											'left': danmuStartX - $('#AXYText' + id)[0].clientWidth,
											'top': danmuStartY + danmuRndY
										});
										$('#AXYText' + id).stop().show().animate({
											"left": danmuEndX
										}, AXY.AjaxNetStuff.Param.DanmuSpeed, '', function () {
											AXY_Text.remove(id);
										});
									}, AXY.AjaxNetStuff.Param.DanmuInterval * index);
								});
								//console.log(AXY.AjaxNetStuff.Param.DanmuObj);
								//console.log($gameMap);
								//obj.reverse();
								//lastid = obj[0].id;
								AXY.AjaxNetStuff.Param.DanmuObj.Troop[gameTroop_troopId] = obj[obj.length - 1].id;

							} else {
								//console.log(data);
								//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
							};
						},
						error: function (XMLHttpRequest, textStatus, errorThrown) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//console.log(errorThrown);
							//$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
						},
						complete: function (XMLHttpRequest, textStatus) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
						}
					});
				} else if ($gameMap._mapId) {
					//console.log($gameMap);
					//console.log($gameMap._mapId);
					var gameMap_mapId = $gameMap._mapId;
					if (!AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId]) {
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
						data: {
							mapid: $gameMap._mapId,
							displayxmin: $gamePlayer._x - danmuXpoor,
							displayymin: $gamePlayer._y - danmuYpoor,
							displayxmax: $gamePlayer._x + danmuXpoor,
							displayymax: $gamePlayer._y + danmuYpoor,
							steps: $gameParty._steps,
							playtime: parseInt(Graphics.frameCount / 60),
							usedid: AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId].join().match(/\d+/g).join()
						},
						success: function (data) {
							//console.log(data);
							if (data.status) {
								var obj = data.jsonstr;
								//console.log(obj);
								$.each(obj, function (index) {
									//console.log(obj[index]);
									//AXY.AjaxNetStuff.Param.DanmuObj.push(obj[index]);
									//$gameMap._axydanmu.push(obj[index]);
									AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId][obj[index].id] = obj[index].id;
									//console.log(obj[index].id);
									//console.log(AXY.AjaxNetStuff.Param.DanmuObj.Map[gameMap_mapId][obj[index].id]);

									setTimeout(function () {
										var danmuRndY = parseInt(Math.random() * (400 - 100 + 1) + 100, 10);
										//var danmuRndLifetime = parseInt(Math.random()*(8000-3000+1)+3000,10);
										var time = new Date((obj[index].timeline).replace(new RegExp("-", "gm"), "/")).Format("hh:mm");
										//$.toaster({ message : obj[index].actorname+'['+time+']: '+obj[index].danmumsg, color:'white'});
										var id = 'danmu' + obj[index].id;
										//AXY_Text.show({id:id, msg:'"'+obj[index].actorname+'['+time+']: '+obj[index].danmumsg+'"', align:'topleft', x:0, y:0});
										AXY_Text.show({
											id: id,
											msg: '"' + obj[index].danmumsg + '"',
											align: 'topleft',
											x: 0,
											y: 0
										});
										$('#AXYText' + id).css({
											'left': danmuStartX - $('#AXYText' + id)[0].clientWidth,
											'top': danmuStartY + danmuRndY
										});
										$('#AXYText' + id).stop().show().animate({
											"left": danmuEndX
										}, AXY.AjaxNetStuff.Param.DanmuSpeed, '', function () {
											AXY_Text.remove(id);
										});
									}, AXY.AjaxNetStuff.Param.DanmuInterval * index);
								});

								//console.log($gameMap);
								//obj.reverse();
								//console.log(AXY.AjaxNetStuff.Param.DanmuObj.Map[$gameMap._mapId].join().match(/\d+/g).join());
								//console.log(AXY.AjaxNetStuff.Param.DanmuObj);

							} else {
								//console.log(data);
								//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
							};
						},
						error: function (XMLHttpRequest, textStatus, errorThrown) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//console.log(errorThrown);
							//$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
						},
						complete: function (XMLHttpRequest, textStatus) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
						}
					});
				}
			}, 30000);
		} catch (e) {
			console.log(e);
		}
	}

	//ajax chat
	if (AXY.AjaxNetStuff.Param.EnableChat) {
		try {
			//display html first
			var AXYAjaxChatTemplate =
				'<div class="AXYAjaxChat" id="AXYAjaxChat">' +
				'<table class="AXYAjaxChatTable" border="1">' +
				'' +
				'</table><table class="" border="1">' +
				'<tr><td><input type="text" class="AXYAjaxChatInput" id="AXYAjaxChatInput" placeholder="输入聊天内容" />' +
				'<input type="button" class="AXYAjaxChatButton" id="AXYAjaxChatButtonUse" value="发送" />' +
				'<input type="button" class="AXYAjaxChatButton" id="AXYAjaxChatButtonMove" value="移动" />' +
				'<input type="button" class="AXYAjaxChatButton" id="AXYAjaxChatButtonClose" value="关闭" /></td></tr>' +
				'</table></div><div class="AXYAjaxChatButtonImg"><img src="img/pictures/Arrow6.png" class="AXYAjaxChatOpen"></div>';
			var AXYAjaxChatStyleCss =
				".AXYAjaxChat{position:fixed;top:0;left:0;z-index:" +
				AXY.AjaxNetStuff.Param.zIndex + ";width:" +
				AXY.AjaxNetStuff.Param.Width + "px;height:" +
				AXY.AjaxNetStuff.Param.Height + "px;font-size:" +
				AXY.AjaxNetStuff.Param.fontsize + "px;color:" +
				AXY.AjaxNetStuff.Param.TextColor + ";background-color:" +
				AXY.AjaxNetStuff.Param.backgroundcolor + ";opacity:" +
				AXY.AjaxNetStuff.Param.opacity + ";display:none;overflow-y:auto;}" +
				'.AXYAjaxChat .AXYAjaxChatInput{margin-left:2%;padding-left:3px;text-align:left;width:45%;height:50px;imeMode:active}' +
				'.AXYAjaxChat .AXYAjaxChatButton,.AXYAjaxChat .AXYAjaxChatInput{position:relative;outline:0;border:1px solid #fff;background-color:rgba(0,0,0,0.4);color:#fff;font-size:24px;}' +
				'.AXYAjaxChat .AXYAjaxChatButton{top:0;z-index:10000;margin-left:2%;width:15%;height:3pc;cursor:pointer}' +
				'.AXYAjaxChatButtonImg{position:fixed;z-index:10000;margin:auto;left:-' +
				AXY.AjaxNetStuff.Param.ImgWidth + 'px;right:0;top:0;bottom:0;text-align:center;pointer-events:none;}.AXYAjaxChatButtonImg img{width:' +
				AXY.AjaxNetStuff.Param.ImgWidth + 'rem;height:' +
				AXY.AjaxNetStuff.Param.ImgHeight + 'rem;opacity:' +
				AXY.AjaxNetStuff.Param.ImgOpacity + ';pointer-events:auto;}' +
				'.AXYAjaxChat .AXYAjaxChatTable{background-color:#000000;background-color:rgba(0,0,0,0.5);width:100%;display:none;padding:5px 30px;text-stroke:1px red;text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;border-collapse:collapse}';

			$('body').append(AXYAjaxChatTemplate);
			$('#AXYAjaxChat').append('<style type="text/css">' + AXYAjaxChatStyleCss + '</style>');

			var AXY_AjaxChatURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgamechat');
			var lasttime;

			//then bind action
			var AXY_AjaxChat = {
				show: function () {
					if (!AXY.AjaxNetStuff.Variables.loggedin) {
						$.toaster({
							message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先登录",
							color: 'white'
						});
						return;
					}

					$('.AXYAjaxChatOpen').hide();
					$('#AXYAjaxChat').stop().show().animate({
						"height": "300px"
					}, "normal");
					$('.AXYAjaxChatTable').stop().show().animate({
						"height": "250px"
					}, "normal");
					//$gameSystem.setTouchMoveEnabled(false);
					//$('#AXYAjaxChatButtonMove').val("移动");
					if ($('#AXYAjaxChatButtonMove').val() == '禁止') {
						$gameSystem.setTouchMoveEnabled(true);
						$('#AXYAjaxChatButtonMove').val("禁止");
					} else {
						$gameSystem.setTouchMoveEnabled(false);
						$('#AXYAjaxChatButtonMove').val("移动");
					}
					$('#AXYAjaxChatInput').focus();
					var css = {
						'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
					};
					$('#AXYAjaxChatInput').css(css);
					$('.AXYAjaxChatButton').css(css);

					$('#AXYAjaxChatInput').keydown(function (e) {
						if (e.keyCode == 8) {
							var _name = this.value.slice(0, this.value.length - 1);
							this.value = _name;
						}
					});
					$('#AXYAjaxChatInput').unbind('click touchstart').bind('click touchstart', function () {
						$('#AXYAjaxChatInput').focus();
					});
					//console.log($('#AXYAjaxChatInput'));
					$('#AXYAjaxChatInput').keydown(function (e) {
						if (e.keyCode == 13) {
							$('#AXYAjaxChatButtonUse').click();
						}
					});
					$('#AXYAjaxChatButtonUse').unbind('click touchstart').bind('click touchstart', function () {
						if ($('#AXYAjaxChatButtonUse')[0].disabled) {
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
						inputchat = inputchat.replace(/<\/?[^>]*>/gim, ""); //去掉所有的html标记
						inputchat = inputchat.replace(/(^\s+)|(\s+$)/g, ""); //去掉前后空格
						inputchat = inputchat.substr(0, 20); //限制长度
						//inputchat = inputchat.replace(/\s/g,"");//去除文章中间空格
						//console.log($('#AXYAjaxChatInput'));
						//console.log($('#AXYAjaxChatInput').val());
						//console.log(inputcoupon);
						//console.log(str);
						//console.log(result);
						//console.log(ss);


						if (!inputchat) {
							//console.log('代码不能为空');
							$.toaster({
								message: '不能为空',
								color: 'red'
							});
							$('#AXYAjaxChatButtonUse').attr("disabled", false);
							$('#AXYAjaxChatButtonUse').val("发送");
							return;
						}
						//$.toaster({ message : $gameActors._data[1]._name+': '+inputchat, color:'white'});
						var time = new Date().Format("hh:mm");
						$('.AXYAjaxChatTable').append('<tr><td>' + $gameActors._data[$gameParty._actors[0]]._name + '<span style="color:white;">[' + time + ']: </span>' + inputchat + '</td></tr>');
						$('#AXYAjaxChatInput').val('').focus();
						$('#AXYAjaxChatInput')[0].scrollIntoView(false);
						//else{

						if (!lasttime) {
							lasttime = new Date().Format("yyyy-MM-dd hh:mm");
						}

						$.ajax({
							url: AXY_AjaxChatURL,
							type: 'POST',
							dataType: 'json',
							data: {
								sid: AXY.AjaxNetStuff.Param.sid,
								chatmsg: inputchat,
								actorname: $gameActors._data[$gameParty._actors[0]]._name,
								lasttime: lasttime
							},
							success: function (data) {
								//console.log(data);
								if (data.status) {
									var obj = data.jsonstr;
									lasttime = obj[0].timeline;
									obj.reverse();
									//console.log(obj);
									$.each(obj, function (index) {
										//console.log(obj[index]);
										var time = new Date((obj[index].timeline).replace(new RegExp("-", "gm"), "/")).Format("hh:mm");
										//$.toaster({ message : obj[index].actorname+'['+time+']: '+obj[index].chatmsg, color:'white', timeout:10000});
										$('.AXYAjaxChatTable').append('<tr><td>' + obj[index].actorname + '<span style="color:white;">[' + time + ']: </span>' + obj[index].chatmsg + '</td></tr>');
									});
									$('#AXYAjaxChatInput')[0].scrollIntoView(false);
								} else {
									//console.log(data);
									//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
								};
								$('#AXYAjaxChatButtonUse').attr("disabled", false);
								$('#AXYAjaxChatButtonUse').val("发送");
							},
							error: function (XMLHttpRequest, textStatus, errorThrown) {
								//console.log(XMLHttpRequest);
								//console.log(textStatus);
								//console.log(errorThrown);
								$.toaster({
									title: 'ERROR: ',
									message: textStatus + ' ' + errorThrown,
									color: 'red'
								});
								$('#AXYAjaxChatButtonUse').attr("disabled", false);
								$('#AXYAjaxChatButtonUse').val("发送");
							},
							complete: function (XMLHttpRequest, textStatus) {
								//console.log(XMLHttpRequest);
								//console.log(textStatus);
								//$.toaster({ title: 'COMPLETE: ', message : textStatus, color:'white'});
								$('#AXYAjaxChatButtonUse').attr("disabled", false);
								$('#AXYAjaxChatButtonUse').val("发送");
							}
						});
						//}
					});
					$('#AXYAjaxChatButtonMove').unbind('click touchstart').bind('click touchstart', function () {
						if ($('#AXYAjaxChatButtonMove').val() == '禁止') {
							$gameSystem.setTouchMoveEnabled(false);
							$('#AXYAjaxChatButtonMove').val("移动");
						} else {
							$gameSystem.setTouchMoveEnabled(true);
							$('#AXYAjaxChatButtonMove').val("禁止");
						}
					});
					$('#AXYAjaxChatButtonClose').unbind('click touchstart').bind('click touchstart', function () {
						AXY_AjaxChat.hide();
					});
				},
				hide: function () {
					$('#AXYAjaxChat').stop().animate({
						"height": "0"
					}, "normal", function () {
						$(this).hide();
						//$(this).remove();
						$gameSystem.setTouchMoveEnabled(true);
						$('.AXYAjaxChatOpen').show();
					});
				}
			};
			//last bind the click
			$('.AXYAjaxChatOpen').unbind('click touchstart').bind('click touchstart', function () {
				AXY_AjaxChat.show();
			});

			//auto fetch chat
			setInterval(function () {
				if (!$gameParty) {
					return false;
				}
				if (!AXY.AjaxNetStuff.Variables.loggedin) {
					return false;
				}
				if (!lasttime) {
					lasttime = new Date().Format("yyyy-MM-dd hh:mm:ss");
				}
				//console.log(lasttime);

				$.ajax({
					url: AXY_AjaxChatURL,
					type: 'POST',
					dataType: 'json',
					data: {
						sid: AXY.AjaxNetStuff.Param.sid,
						chatmsg: '',
						actorname: '',
						lasttime: lasttime
					},
					success: function (data) {
						//console.log(data);
						if (data.status) {
							var obj = data.jsonstr;
							lasttime = obj[0].timeline;
							obj.reverse();
							//console.log(obj);
							$.each(obj, function (index) {
								//console.log(obj[index]);
								var time = new Date((obj[index].timeline).replace(new RegExp("-", "gm"), "/")).Format("hh:mm");
								$.toaster({
									message: obj[index].actorname + '[' + time + ']: ' + obj[index].chatmsg,
									color: 'white'
								});
								$('.AXYAjaxChatTable').append('<tr><td>' + obj[index].actorname + '<span style="color:white;">[' + time + ']: </span>' + obj[index].chatmsg + '</td></tr>');
							});
							$('#AXYAjaxChatInput')[0].scrollIntoView(false);
						} else {
							//console.log(data);
							//$.toaster({ message : data.info+', ERRORCODE: '+data.error, color:'red'});
							lasttime = new Date().Format("yyyy-MM-dd hh:mm:ss");
						};
						$('#AXYAjaxChatButtonUse').attr("disabled", false);
						$('#AXYAjaxChatButtonUse').val("发送");
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//console.log(errorThrown);
						//$.toaster({ title: 'ERROR: ', message : textStatus+' '+errorThrown, color:'red'});
						$('#AXYAjaxChatButtonUse').attr("disabled", false);
						$('#AXYAjaxChatButtonUse').val("发送");
					},
					complete: function (XMLHttpRequest, textStatus) {
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
		} catch (e) {
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
		Window_MenuCommand.prototype.addOriginalCommands = function () {
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
		Scene_Menu.prototype.createCommandWindow = function () {
			AXY.AjaxNetStuff.Alias.createCommandWindowCloudSave.call(this);
			this._commandWindow.setHandler('cloud_save', this.commandCloudSave.bind(this));
			/*if (Imported.MOG_TimeSystem && Moghunter.timeWindow_menu) {	
				this._commandWindow.height -= this._commandWindow.itemHeight();
			};*/
		};

		//==============================
		// * Cloud Save
		//==============================
		Scene_Menu.prototype.commandCloudSave = function () {
			AXY_AjaxCloudSave.show();
			// Close option window
			SceneManager.pop();
		};
	}

	var AXY_AjaxCloudSave = {
		show: function () {
			if (!AXY.AjaxNetStuff.Variables.loggedin) {
				$.toaster({
					message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 请先登录",
					color: 'white'
				});
				return;
			}

			var AXYAjaxCloudSaveTemplate =
				'<div class="AXYAjaxCloudSave" id="AXYAjaxCloudSave">' +
				'<div class="AXYAjaxCloudSaveBG"></div>' +
				'<input type="button" class="AXYAjaxCloudSaveButton" id="AXYAjaxCloudSaveButtonWrite" value="保存" />' +
				'<input type="button" class="AXYAjaxCloudSaveButton" id="AXYAjaxCloudSaveButtonRead" value="读取" />';
			if (AXY.AjaxNetStuff.Param.episodeSelectionCommonEventId) {
				AXYAjaxCloudSaveTemplate += '<input type="button" class="AXYAjaxCloudSaveButton" id="AXYAjaxCloudSaveButtonEpisodeSelection" value="选集" />';
			}

			AXYAjaxCloudSaveTemplate += '<input type="button" class="AXYAjaxCloudSaveButton" id="AXYAjaxCloudSaveButtonClose" value="关闭" />' +
				'</div>';
			var AXYAjaxCloudSaveStyleCss =
				'.AXYAjaxCloudSave{position:fixed;top:10px;left:.5%;z-index:10000;display:none;margin:0 auto;width:0%;height:80px;text-align:center;}' +
				'.AXYAjaxCloudSave .AXYAjaxCloudSaveBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.5}' +
				'.AXYAjaxCloudSave .AXYAjaxCloudSaveButton{margin:15px 0;text-align:center;width:30%;height:50px;imeMode:active}' +
				'.AXYAjaxCloudSave .AXYAjaxCloudSaveButton,.AXYAjaxCloudSave .AXYAjaxCloudSaveInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.4);color:#fff;font-size:24px;}' +
				'.AXYAjaxCloudSave .AXYAjaxCloudSaveButton{top:0;z-index:10000;margin-left:2%;width:10%;height:3pc;word-spacing:20px;cursor:pointer}';
			var css = {
				'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
			};
			$('body').append(AXYAjaxCloudSaveTemplate);
			$('#AXYAjaxCloudSave').append('<style type="text/css">' + AXYAjaxCloudSaveStyleCss + '</style>');
			$('.AXYAjaxCloudSaveButton').css(css);
			//console.log(css);
			//console.log($gameParty);
			//console.log($gameSystem);
			//console.log(TextManager.currencyUnit);

			$('#AXYAjaxCloudSave').stop().show().animate({
				"width": "98%"
			}, "normal");
			$gameSystem.setTouchMoveEnabled(false);

			//save button
			$('#AXYAjaxCloudSaveButtonWrite').unbind('click touchstart').bind('click touchstart', function () {
				AXY_AjaxCloudSave.hide();
				$.toaster({
					message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 正在保存至云端...",
					color: 'white'
				});
				/*if($('#AXYAjaxCloudSaveButtonWrite')[0].disabled){
					//console.log($('#AXYAjaxCloudSaveButtonWrite')[0].disabled);
					return;
				}*/
				//console.log($('#AXYAjaxCloudSaveButtonWrite'));
				//console.log($('#AXYAjaxCloudSaveButtonWrite')[0].disabled);

				//$('#AXYAjaxCloudSaveButtonWrite').attr("disabled", true);
				//$('#AXYAjaxCloudSaveButtonWrite').val("saving");
				//console.log($('#AXYAjaxCloudSaveButtonWrite'));
				//console.log(AXY.AjaxNetStuff.Param.sid);
				//alert(AXY.AjaxNetStuff.Param.sid);

				$gameSystem.onBeforeSave();
				var saveinfo = LZString.compressToBase64(LZString.compressToBase64(JsonEx.stringify(DataManager.makeSavefileInfo())));
				var savedata = LZString.compressToBase64(LZString.compressToBase64(JsonEx.stringify(DataManager.makeSaveContents())));
				//console.log(saveinfo);
				//console.log(savedata);
				//console.log(DataManager.makeSavefileInfo());
				//console.log(DataManager.makeSaveContents());
				if (savedata.length >= 200000) {
					console.log("Save info too big: " + saveinfo.length);
					console.log("Save data too big: " + savedata.length);
				};

				var AXY_AjaxCloudSaveURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgamecloudsave');
				$.ajax({
					url: AXY_AjaxCloudSaveURL,
					type: 'POST',
					dataType: 'json',
					data: {
						sid: AXY.AjaxNetStuff.Param.sid,
						saveinfo: saveinfo,
						savedata: savedata
					},
					success: function (data) {
						//console.log(data);
						//alert(data.sid);
						//alert(data.uid);
						//alert(data.ssid);
						if (data.status) {
							$.toaster({
								message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 保存成功！"
							});
							// setTimeout(function () {
							// 	// $.toaster({
							// 	// 	message: "云端存储成本较高，托管在<a href='http://666rpg.com'>666RPG.com</a>的游戏<a href='" + AXY.AjaxNetStuff.Param.URL + "'>《" + AXY.AjaxNetStuff.Variables.gameName + "》</a>诚邀您的支持！"
							// 	// });
							// }, 3000);
						} else {
							//console.log(data);
							$.toaster({
								message: data.info + ', ERRORCODE: ' + data.error,
								color: 'red'
							});
						};
						//$('#AXYAjaxCloudSaveButtonWrite').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonWrite').val("保存");
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						console.log(XMLHttpRequest);
						console.log(textStatus);
						console.log(errorThrown);
						$.toaster({
							title: 'ERROR: ',
							message: textStatus + ' ' + errorThrown,
							color: 'red'
						});
						//$('#AXYAjaxCloudSaveButtonWrite').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonWrite').val("保存");
					},
					complete: function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({
						//	title: 'COMPLETE: ',
						//	message: textStatus,
						//	color: 'gray'
						//});
						//$('#AXYAjaxCloudSaveButtonWrite').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonWrite').val("保存");
					}
				});
			});

			//load button
			$('#AXYAjaxCloudSaveButtonRead').unbind('click touchstart').bind('click touchstart', function () {
				AXY_AjaxCloudSave.hide();
				$.toaster({
					message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 返回标题页面，请勿操作...",
					color: 'white'
				});
				SceneManager.push(Scene_Title);

				/*if($('#AXYAjaxCloudSaveButtonRead')[0].disabled){
					//console.log($('#AXYAjaxCloudSaveButtonWrite')[0].disabled);
					return;
				}*/
				//console.log($('#AXYAjaxCloudSaveButtonWrite'));
				//console.log($('#AXYAjaxCloudSaveButtonWrite')[0].disabled);

				//$('#AXYAjaxCloudSaveButtonRead').attr("disabled", true);
				//$('#AXYAjaxCloudSaveButtonRead').val(AXY.AjaxNetStuff.Param.LoadingText);

				//setTimeout(function () {
				$.toaster({
					message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 正在从云端读取...",
					color: 'white'
				});
				var AXY_AjaxCloudLoadURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgamecloudload');
				$.ajax({
					url: AXY_AjaxCloudLoadURL,
					type: 'POST',
					dataType: 'json',
					data: {
						sid: AXY.AjaxNetStuff.Param.sid
					},
					success: function (data) {
						console.log(data);
						if (data.status) {
							try {
								$.toaster({
									message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 读取成功！"
								});

								// Extract data from savegame
								console.log("Extract save contents");
								//si = data.saveinfo;
								//console.log(si);
								//si = LZString.decompressFromBase64(si);
								//console.log(si);
								//si = LZString.decompressFromBase64(si);
								//console.log(si);
								//si = JsonEx.parse(si);
								//console.log(si);
								//sd = data.savedata;
								//console.log(sd);
								//sd = LZString.decompressFromBase64(sd);
								//console.log(sd);
								//sd = LZString.decompressFromBase64(sd);
								//console.log(sd);
								//sd = JsonEx.parse(sd);
								//console.log(sd);
								DataManager.createGameObjects();
								DataManager.extractSaveContents(JsonEx.parse(LZString.decompressFromBase64(LZString.decompressFromBase64(data.savedata))));

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

								setTimeout(function () {
									// $.toaster({
									// 	message: "云端存储成本较高，托管在<a href='http://666rpg.com'>666RPG.com</a>的游戏<a href='" + AXY.AjaxNetStuff.Param.URL + "'>《" + AXY.AjaxNetStuff.Variables.gameName + "》</a>诚邀您的支持！"
									// });
									$gameSystem.setTouchMoveEnabled(true);
								}, 3000);
							} catch (e) {
								$.toaster({
									message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 解析云存档失败，请进入游戏重试！"
								});
								console.log(e);
							}
						} else {
							console.log(data);
							$.toaster({
								message: data.info + ', ERRORCODE: ' + data.error,
								color: 'red'
							});
						};
						//$('#AXYAjaxCloudSaveButtonRead').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonRead').val("读取");
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						console.log(XMLHttpRequest);
						console.log(textStatus);
						console.log(errorThrown);
						$.toaster({
							title: 'ERROR: ',
							message: textStatus + ' ' + errorThrown,
							color: 'red'
						});
						//$('#AXYAjaxCloudSaveButtonRead').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonRead').val("读取");
					},
					complete: function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({
						//	title: 'COMPLETE: ',
						//	message: textStatus,
						//	color: 'gray'
						//});
						//$('#AXYAjaxCloudSaveButtonRead').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonRead').val("读取");
					}
				});
				//}, 1000);
			});

			//close button
			$('#AXYAjaxCloudSaveButtonClose').unbind('click touchstart').bind('click touchstart', function () {
				AXY_AjaxCloudSave.hide();
			});

			//Episode Selection button
			$('#AXYAjaxCloudSaveButtonEpisodeSelection').unbind('click touchstart').bind('click touchstart', function () {
				AXY_AjaxCloudSave.hide();
				$.toaster({
					message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 正在从云端获取数据。。。"
				});
				var AXY_AjaxEpisodeSelectionURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgameepisodechoose');
				$.ajax({
					url: AXY_AjaxEpisodeSelectionURL,
					type: 'POST',
					dataType: 'json',
					data: {
						sid: AXY.AjaxNetStuff.Param.sid
					},
					success: function (data) {
						//console.log(data);
						if (data.status) {
							try {
								$.toaster({
									message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 获取成功！"
								});
								if (AXY.AjaxNetStuff.Param.episodeSelectionCommonEventId > 0) {
									if (data.ops < AXY.AjaxNetStuff.Param.episodeSelectionThreshold) {
										$.toaster({
											message: "您的捐献累计(" + data.ops + ")小于作者的设定：" + AXY.AjaxNetStuff.Param.episodeSelectionThreshold + "，因此无法使用此功能！"
										});
										return false;
									}
									if (!$gameMap._mapId) {
										$.toaster({
											message: "请先进入游戏！"
										});
										return false;
									}
									$gameTemp.reserveCommonEvent(AXY.AjaxNetStuff.Param.episodeSelectionCommonEventId);
								}
							} catch (e) {
								$.toaster({
									message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 获取失败，请稍后重试！"
								});
								console.log(e);
							}
						} else {
							console.log(data);
							$.toaster({
								message: data.info + ', ERRORCODE: ' + data.error,
								color: 'red'
							});
						};
						//$('#AXYAjaxCloudSaveButtonRead').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonRead').val("读取");
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						console.log(XMLHttpRequest);
						console.log(textStatus);
						console.log(errorThrown);
						$.toaster({
							title: 'ERROR: ',
							message: textStatus + ' ' + errorThrown,
							color: 'red'
						});
						//$('#AXYAjaxCloudSaveButtonRead').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonRead').val("读取");
					},
					complete: function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({
						//	title: 'COMPLETE: ',
						//	message: textStatus,
						//	color: 'gray'
						//});
						//$('#AXYAjaxCloudSaveButtonRead').attr("disabled", false);
						//$('#AXYAjaxCloudSaveButtonRead').val("读取");
					}
				});
			});
		},
		hide: function () {
			$('#AXYAjaxCloudSave').stop().animate({
				"width": "0"
			}, "normal", function () {
				$(this).hide();
				$(this).remove();
				try {
					$gameSystem.setTouchMoveEnabled(true);
				} catch (e) {
					console.log(e);
				}
			});
		}
	};

	//ajax top 10 list
	if (AXY.AjaxNetStuff.Param.EnableTopList) {
		try {
			//display html first
			var temp = AXY.AjaxNetStuff.Param.URL.split("/");
			var AXY_LoginURL = temp[0] + '//' + temp[2] + '/Login';
			//console.log(AXY_LoginURL);
			var AXYAjaxTopListEntity;
			var AXYAjaxTopListTemplate =
				"<style type=\"text/css\">.AXYAjaxTopList{position:fixed;" +
				String(AXY.AjaxNetStuff.Parameters['TopListHAlign']) + ":" +
				AXY.AjaxNetStuff.Param.X + "px;" +
				String(AXY.AjaxNetStuff.Parameters['TopListVAlign']) + ":" +
				AXY.AjaxNetStuff.Param.Y + "px;z-index:" +
				AXY.AjaxNetStuff.Param.zIndex + ";width:" +
				AXY.AjaxNetStuff.Param.Width + "px;height:" +
				AXY.AjaxNetStuff.Param.Height + "px;font-size:" +
				AXY.AjaxNetStuff.Param.fontsize + "px;color:" +
				AXY.AjaxNetStuff.Param.TextColor + ";background-color:" +
				AXY.AjaxNetStuff.Param.backgroundcolor + ";opacity:" +
				AXY.AjaxNetStuff.Param.opacity + ";pointer-events:none;}.AXYAjaxTopList th{text-align:center;}.AXYAjaxTopList .AXYAjaxTopListTable{background-color:#000000;background-color:rgba(0,0,0,0.5);width:100%;height:100%;display:none;padding:5px 30px;text-stroke:1px red;text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;text-align:center;border-collapse:collapse}.AXYAjaxTopListButton{color:#ff0;text-align:" +
				AXY.AjaxNetStuff.Param.TextAlign + "}.AXYAjaxTopListButton img{width:" +
				AXY.AjaxNetStuff.Param.ImgWidth + "rem;height:" +
				AXY.AjaxNetStuff.Param.ImgHeight + "rem;opacity:" +
				AXY.AjaxNetStuff.Param.ImgOpacity + ";pointer-events:auto;}.AXYAjaxTopListLoginButton a,a:hover,a:link,a:visited,a:active{margin:0 5px 0 10px;opacity:" +
				AXY.AjaxNetStuff.Param.LoginButtonOpacity + ";color:" +
				AXY.AjaxNetStuff.Param.LoginButtonColor + ";text-stroke:1px red;text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;text-decoration:none;font-size:" +
				AXY.AjaxNetStuff.Param.LoginButtonFontSize + "rem;pointer-events:auto;}<\/style><div class=\"AXYAjaxTopList\"><div class=\"AXYAjaxTopListBG\"></div><table class=\"AXYAjaxTopListTable\" border=\"1\"><\/table><div class=\"AXYAjaxTopListButton\"><img src=\"img/pictures/Arrow2.png\" class=\"AXYAjaxTopListArrowOpen\"><img src=\"img/pictures/Arrow8.png\" class=\"AXYAjaxTopListArrowClose\" style=\"display:none\"><a href=\"" +
				'javascript:;' + "\" class=\"AXYAjaxTopListLoginButton\" id=\"AXYAjaxTopListLoginButton\" style=\"display:none;\">" +
				AXY.AjaxNetStuff.Param.LoginButtonText + "</a><a href=\"" +
				'javascript:;' + "\" class=\"AXYAjaxTopListLoginButton\" id=\"AXYAjaxTopListLogoutButton\" style=\"display:none;\">退出</a></div></div>";
			var AXYAjaxTopListTableTemplate =
				"<thead><tr><th>" +
				AXY.AjaxNetStuff.Param.LastestText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.NickNameText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.ActorText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.PlayerCEText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.TimeOLText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.LevelText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.GoldText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.StepsText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.PlayTimeText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.SaveTimesText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.BattleTimesText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.VictoryTimesText + "<\/th><th>" +
				AXY.AjaxNetStuff.Param.EscapeTimesText + "<\/th><\/tr><\/thead><tbody class=\"AXYAjaxTopListTbody\"><tr><td colspan=\"12\">" +
				AXY.AjaxNetStuff.Param.LoadingText + "<\/td><\/tr><\/tbody>";
			var AXYAjaxTopListButtonTemplate =
				AXY.AjaxNetStuff.Param.LoginButtonText;
			var AXYAjaxTopListTemplateCss = {
				'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
			};
			AXYAjaxTopListEntity = $('body').append(AXYAjaxTopListTemplate);
			$('.AXYAjaxTopList').css('font-family', $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont');
			$('.AXYAjaxTopListTable').html(AXYAjaxTopListTableTemplate);
			$('#AXYAjaxTopListLoginButton').text(AXYAjaxTopListButtonTemplate);
			$('#AXYAjaxTopListLoginButton').unbind('click touchstart').bind('click touchstart', function () {
				//$.toaster({
				//	message: '手机版暂不支持登录',
				//	color: 'red'
				//});

				AXY_AjaxLogin.show();
			});
			$('#AXYAjaxTopListLogoutButton').unbind('click touchstart').bind('click touchstart', function () {
				//$.toaster({
				//	message: '手机版暂不支持登录',
				//	color: 'red'
				//});

				AXY_AjaxLogin.logout();
			});



			//console.log($gameActors);
			//console.log(AXYAjaxTopListTemplateCss);
			var AXY_AjaxTopListURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgametoplist');
			var postjsonstr;

			setInterval(function () {
				if (!$gameParty) {
					return false;
				}
				if (!$gameActors) {
					return false;
				}
				if (!$gameVariables) {
					return false;
				}
				//console.log($gameVariables)
				if (AXY.AjaxNetStuff.Variables.loggedin && AXY.AjaxNetStuff.Param.sid) {
					//do nothing
				} else if ($gameVariables._AXY && $gameVariables._AXY.AjaxNetStuff && $gameVariables._AXY.AjaxNetStuff.Loggedin) {
					$('#AXYAjaxTopListLoginButton').css('display', 'none')
					$('#AXYAjaxTopListLogoutButton').css('display', '')
					AXY.AjaxNetStuff.Variables.loggedin = $gameVariables._AXY.AjaxNetStuff.Loggedin;
					AXY.AjaxNetStuff.Param.sid = $gameVariables._AXY.AjaxNetStuff.sid;
					//console.log($gameVariables)
				} else {
					$('#AXYAjaxTopListLoginButton').css('display', '')
					$('#AXYAjaxTopListLogoutButton').css('display', 'none')
					AXY.AjaxNetStuff.Variables.loggedin = false;
					AXY.AjaxNetStuff.Param.sid = '';
					//console.log($gameVariables)
				}
			}, 3000)
			setInterval(function () {
				if (!$gameParty || $gameParty._actors.length < 1) {
					return false;
				}
				if (!$gameActors || $gameActors._data.length < 1) {
					return false;
				}
				if (!$gameVariables || $gameVariables._data.length < 1) {
					return false;
				}
				//console.log($gameVariables)
				if (AXY.AjaxNetStuff.Variables.loggedin && AXY.AjaxNetStuff.Param.sid) {
					//do nothing
				} else if ($gameVariables._AXY && $gameVariables._AXY.AjaxNetStuff && $gameVariables._AXY.AjaxNetStuff.Loggedin) {
					$('#AXYAjaxTopListLoginButton').css('display', 'none')
					$('#AXYAjaxTopListLogoutButton').css('display', '')
					AXY.AjaxNetStuff.Variables.loggedin = $gameVariables._AXY.AjaxNetStuff.Loggedin;
					AXY.AjaxNetStuff.Param.sid = $gameVariables._AXY.AjaxNetStuff.sid;
					//console.log($gameVariables)
				} else {
					$('#AXYAjaxTopListLoginButton').css('display', '')
					$('#AXYAjaxTopListLogoutButton').css('display', 'none')
					AXY.AjaxNetStuff.Variables.loggedin = false;
					AXY.AjaxNetStuff.Param.sid = '';
					//console.log($gameVariables)
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
				var playerce = 0;
				$.each($gameParty._actors, function (index) {
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
				//console.log(playerce);
				//console.log(AXY.AjaxNetStuff.Param.TimeOL);
				//["Lastest", "Actor", "PlayerCE", "TimeOL", "Level", "Gold", "Steps", "PlayTime", "SaveTimes", "BattleTimes", "VictoryTimes", "EscapeTimes"]
				postjsonstr = JSON.stringify({
					gold: $gameParty._gold,
					steps: $gameParty._steps,
					name: $gameActors._data[$gameParty._actors[0]]._name,
					level: $gameActors._data[$gameParty._actors[0]]['level'],
					battlecount: $gameSystem._battleCount,
					escapecount: $gameSystem._escapeCount,
					wincount: $gameSystem._winCount,
					savecount: $gameSystem._saveCount,
					playtime: parseInt($gameSystem._framesOnSave / 60),
					playerce: AXY.AjaxNetStuff.Param.PlayerCE,
					/*sid: AXY.AjaxNetStuff.Param.sid,*/
				});
				//}
				$.ajax({
					url: AXY_AjaxTopListURL,
					type: 'POST',
					dataType: 'json',
					data: {
						sid: AXY.AjaxNetStuff.Param.sid,
						jsonstr: postjsonstr,
						timeol: 60,
						column: AXY.AjaxNetStuff.Variables.AltTopList.orderbyColumn || AXY.AjaxNetStuff.Param.AltTopList.orderbyColumn,
						sort: AXY.AjaxNetStuff.Variables.AltTopList.SortMethod || AXY.AjaxNetStuff.Param.AltTopList.SortMethod
					},
					success: function (data) {
						//console.log(data);
						if (data.status) {
							//$('.AXYAjaxTopListTbody').empty();
							//console.log(data);
							var str = '';
							$.each(data['jsonstr'], function (index) {
								try {
									var obj1 = data['jsonstr'][index];
									//console.log(obj1.jsonstr);
									/*if (typeof $.parseJSON(obj1.jsonstr) != "object") {
										return true
									}*/
									var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
									//console.log(obj);
									//AXY.AjaxNetStuff.Variables.toplist[index] = obj;
									AXY.AjaxNetStuff.Variables.toplist[index] = {};
									//AXY.AjaxNetStuff.Variables.toplist[index].userid = obj1.userid;
									AXY.AjaxNetStuff.Variables.toplist[index].lasttime = obj1.lasttime;
									//AXY.AjaxNetStuff.Variables.toplist[index].onlinetime = formatHours(obj1.onlinetime);
									//AXY.AjaxNetStuff.Variables.toplist[index].playtime = formatHours(obj.playtime);
									if (obj1.userid != 0) {
										AXY.AjaxNetStuff.Variables.toplist[index].Actor = obj.name;
										AXY.AjaxNetStuff.Variables.toplist[index].NickName = obj1.nickname || '';
										$loggedin_param = true
									} else {
										AXY.AjaxNetStuff.Variables.toplist[index].Actor = '游客: ' + obj.name;
										AXY.AjaxNetStuff.Variables.toplist[index].NickName = '';
									}
									//AXY.AjaxNetStuff.Variables.toplist[index].playerce = (obj.playerce == undefined ? '0' : obj.playerce);

									AXY.AjaxNetStuff.Variables.toplist[index].PlayerCE = (obj.playerce == undefined ? '0' : obj.playerce);
									AXY.AjaxNetStuff.Variables.toplist[index].LastestFull = obj1.lasttime;
									AXY.AjaxNetStuff.Variables.toplist[index].Lastest = new Date((obj1.lasttime).replace(new RegExp("-", "gm"), "/")).Format("hh:mm");
									//AXY.AjaxNetStuff.Variables.toplist[index].Actor = AXY.AjaxNetStuff.Variables.toplist[index].namestr
									AXY.AjaxNetStuff.Variables.toplist[index].TimeOL = formatHours(obj1.onlinetime);
									AXY.AjaxNetStuff.Variables.toplist[index].Level = obj.level;
									AXY.AjaxNetStuff.Variables.toplist[index].PlayTime = formatHours(obj.playtime);
									AXY.AjaxNetStuff.Variables.toplist[index].Gold = obj.gold;
									AXY.AjaxNetStuff.Variables.toplist[index].Steps = obj.steps;
									AXY.AjaxNetStuff.Variables.toplist[index].SaveTimes = obj.savecount;
									AXY.AjaxNetStuff.Variables.toplist[index].BattleTimes = obj.battlecount;
									AXY.AjaxNetStuff.Variables.toplist[index].VictoryTimes = obj.wincount;
									AXY.AjaxNetStuff.Variables.toplist[index].EscapeTimes = obj.escapecount;

									str += '<tr>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].Lastest + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].NickName + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].Actor + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].PlayerCE + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].TimeOL + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].Level + '</td>';
									str += '<td>' + Math.ceil(AXY.AjaxNetStuff.Variables.toplist[index].Gold / 10000) + '万</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].Steps + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].PlayTime + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].SaveTimes + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].BattleTimes + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].VictoryTimes + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].EscapeTimes + '</td>';
									str += '</tr>';

									/*if(index == 0){
										if(obj.timeol == 0){
											AXY.AjaxNetStuff.Param.TimeOL = 60;
										}
										else{
											AXY.AjaxNetStuff.Param.TimeOL = obj.timeol;
										}
									}*/
								} catch (e) {}
							});
							str += "<tr><td colspan=12>《" + data.gamename + "》共有" + data.count + "个玩家</td></tr>";
							$('.AXYAjaxTopListTbody').html(str);
							if (data.uid != null) {
								$('#AXYAjaxTopListLoginButton').css("display", 'none');
								$('#AXYAjaxTopListLogoutButton').css("display", '');
								AXY.AjaxNetStuff.Variables.loggedin = true;
							}

						} else {
							//console.log(data);
						};
					},
					error: function (jqXHR) {
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
					$('.AXYAjaxTopListTable').stop().show().animate({
						"height": "98%"
					}, "normal");
				},
				hide: function () {
					$('.AXYAjaxTopListTable').stop().animate({
						"height": "0"
					}, "normal", function () {
						$(this).hide();
						//$(this).remove();
					});
				},
				fetch: function () {
					AXY.AjaxNetStuff.Variables.toplist = new Array();
					var playerce = 0;
					AXY.AjaxNetStuff.Variables.AltTopList.orderbyColumn = arguments[0] || AXY.AjaxNetStuff.Param.AltTopList.orderbyColumn;
					AXY.AjaxNetStuff.Variables.AltTopList.SortMethod = arguments[1] || AXY.AjaxNetStuff.Param.AltTopList.SortMethod;
					$.each($gameParty._actors, function (index) {
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
						playtime: parseInt($gameSystem._framesOnSave / 60),
						playerce: AXY.AjaxNetStuff.Param.PlayerCE,
						/*sid: AXY.AjaxNetStuff.Param.sid,*/
					});
					//}
					$.ajax({
						url: AXY_AjaxTopListURL,
						type: 'POST',
						dataType: 'json',
						data: {
							sid: AXY.AjaxNetStuff.Param.sid,
							jsonstr: postjsonstr,
							column: AXY.AjaxNetStuff.Variables.AltTopList.orderbyColumn,
							sort: AXY.AjaxNetStuff.Variables.AltTopList.SortMethod
						},
						success: function (data) {
							if (data.status) {
								$.each(data['jsonstr'], function (index) {
									try {
										var obj1 = data['jsonstr'][index];
										//console.log(obj1.jsonstr);
										//console.log(typeof $.parseJSON($.parseJSON(obj1.jsonstr)))
										if (typeof $.parseJSON($.parseJSON(obj1.jsonstr)) != "object") {
											return true
										}
										var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
										//console.log(obj);
										//AXY.AjaxNetStuff.Variables.toplist[index] = obj;
										AXY.AjaxNetStuff.Variables.toplist[index] = {};
										//AXY.AjaxNetStuff.Variables.toplist[index].userid = obj1.userid;
										AXY.AjaxNetStuff.Variables.toplist[index].lasttime = obj1.lasttime;
										//AXY.AjaxNetStuff.Variables.toplist[index].onlinetime = formatHours(obj1.onlinetime);
										//AXY.AjaxNetStuff.Variables.toplist[index].playtime = formatHours(obj.playtime);
										if (obj1.userid != 0) {
											AXY.AjaxNetStuff.Variables.toplist[index].Actor = obj.name;
											AXY.AjaxNetStuff.Variables.toplist[index].NickName = obj1.nickname || '';
											$loggedin_param = true
										} else {
											AXY.AjaxNetStuff.Variables.toplist[index].Actor = '游客: ' + obj.name;
											AXY.AjaxNetStuff.Variables.toplist[index].NickName = '';
										}
										//AXY.AjaxNetStuff.Variables.toplist[index].playerce = (obj.playerce == undefined ? '0' : obj.playerce);

										AXY.AjaxNetStuff.Variables.toplist[index].PlayerCE = (obj.playerce == undefined ? '0' : obj.playerce);
										AXY.AjaxNetStuff.Variables.toplist[index].LastestFull = obj1.lasttime;
										AXY.AjaxNetStuff.Variables.toplist[index].Lastest = new Date((obj1.lasttime).replace(new RegExp("-", "gm"), "/")).Format("hh:mm");
										//AXY.AjaxNetStuff.Variables.toplist[index].Actor = AXY.AjaxNetStuff.Variables.toplist[index].namestr
										AXY.AjaxNetStuff.Variables.toplist[index].TimeOL = formatHours(obj1.onlinetime);
										AXY.AjaxNetStuff.Variables.toplist[index].Level = obj.level;
										AXY.AjaxNetStuff.Variables.toplist[index].PlayTime = formatHours(obj.playtime);
										AXY.AjaxNetStuff.Variables.toplist[index].Gold = obj.gold;
										AXY.AjaxNetStuff.Variables.toplist[index].Steps = obj.steps;
										AXY.AjaxNetStuff.Variables.toplist[index].SaveTimes = obj.savecount;
										AXY.AjaxNetStuff.Variables.toplist[index].BattleTimes = obj.battlecount;
										AXY.AjaxNetStuff.Variables.toplist[index].VictoryTimes = obj.wincount;
										AXY.AjaxNetStuff.Variables.toplist[index].EscapeTimes = obj.escapecount;
									} catch (e) {
										console.log(e)
									}
								});
								AXY.AjaxNetStuff.Variables.gamename = data.gamename;
								AXY.AjaxNetStuff.Variables.totalplayer = data.count;
								if (data.uid != null) {
									AXY.AjaxNetStuff.Variables.loggedin = true;
								}
							} else {
								console.log(data);
								$.toaster({
									message: data.info + ', ERRORCODE: ' + data.error,
									color: 'red'
								});
							};
						},
						error: function (jqXHR) {
							console.log(jqXHR);
							$.toaster({
								message: jqXHR.status,
								color: 'red'
							});
						}
					});
					return AXY.AjaxNetStuff.Variables.toplist;
				}
			}

			//last bind the click
			$('.AXYAjaxTopListArrowOpen').unbind('click touchstart').bind('click touchstart', function () {
				if (!$gameParty) {
					$.toaster({
						message: "Not Ready!"
					});
					return false;
				}
				//AXY_AjaxLoginConnect2RMMVOL.Connect2RMMVOL('', '');
				//console.log($gameActors);

				AXY_AjaxTopList.show();
				$('.AXYAjaxTopListArrowOpen').hide();
				$('.AXYAjaxTopListArrowClose').show();
				//$('.AXYAjaxTopListTbody').empty();
				$('.AXYAjaxTopListTbody').html("<tr><td colspan=12>" + AXY.AjaxNetStuff.Param.LoadingText + "</td></tr>");
				/*if($gameParty._gold>500000 && $gameParty._steps<10000 && $gameSystem._framesOnSave<2160000){
					postjsonstr = '';
				}else{*/
				var playerce = 0;
				$.each($gameParty._actors, function (index) {
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
					playtime: parseInt($gameSystem._framesOnSave / 60),
					playerce: AXY.AjaxNetStuff.Param.PlayerCE,
					/*sid: AXY.AjaxNetStuff.Param.sid,*/
				});
				//}
				$.ajax({
					url: AXY_AjaxTopListURL,
					type: 'POST',
					dataType: 'json',
					data: {
						sid: AXY.AjaxNetStuff.Param.sid,
						jsonstr: postjsonstr,
						column: AXY.AjaxNetStuff.Variables.AltTopList.orderbyColumn || AXY.AjaxNetStuff.Param.AltTopList.orderbyColumn,
						sort: AXY.AjaxNetStuff.Variables.AltTopList.SortMethod || AXY.AjaxNetStuff.Param.AltTopList.SortMethod
					},
					success: function (data) {
						if (data.status) {
							$('.AXYAjaxTopListTbody').empty();
							//console.log(data);
							var str = '';
							$.each(data['jsonstr'], function (index) {
								try {
									var obj1 = data['jsonstr'][index];
									//console.log(obj1.jsonstr);
									/*if (typeof $.parseJSON(obj1.jsonstr) != "object") {
										return true
									}*/
									var obj = $.parseJSON($.parseJSON(obj1.jsonstr));
									//console.log(obj);
									//AXY.AjaxNetStuff.Variables.toplist[index] = obj;
									AXY.AjaxNetStuff.Variables.toplist[index] = {};
									//AXY.AjaxNetStuff.Variables.toplist[index].userid = obj1.userid;
									AXY.AjaxNetStuff.Variables.toplist[index].lasttime = obj1.lasttime;
									//AXY.AjaxNetStuff.Variables.toplist[index].onlinetime = formatHours(obj1.onlinetime);
									//AXY.AjaxNetStuff.Variables.toplist[index].playtime = formatHours(obj.playtime);
									if (obj1.userid != 0) {
										AXY.AjaxNetStuff.Variables.toplist[index].Actor = obj.name;
										AXY.AjaxNetStuff.Variables.toplist[index].NickName = obj1.nickname || '';
										$loggedin_param = true
									} else {
										AXY.AjaxNetStuff.Variables.toplist[index].Actor = '游客: ' + obj.name;
										AXY.AjaxNetStuff.Variables.toplist[index].NickName = '';
									}
									//AXY.AjaxNetStuff.Variables.toplist[index].playerce = (obj.playerce == undefined ? '0' : obj.playerce);

									AXY.AjaxNetStuff.Variables.toplist[index].PlayerCE = (obj.playerce == undefined ? '0' : obj.playerce);
									AXY.AjaxNetStuff.Variables.toplist[index].LastestFull = obj1.lasttime;
									AXY.AjaxNetStuff.Variables.toplist[index].Lastest = new Date((obj1.lasttime).replace(new RegExp("-", "gm"), "/")).Format("hh:mm");
									//AXY.AjaxNetStuff.Variables.toplist[index].Actor = AXY.AjaxNetStuff.Variables.toplist[index].namestr
									AXY.AjaxNetStuff.Variables.toplist[index].TimeOL = formatHours(obj1.onlinetime);
									AXY.AjaxNetStuff.Variables.toplist[index].Level = obj.level;
									AXY.AjaxNetStuff.Variables.toplist[index].PlayTime = formatHours(obj.playtime);
									AXY.AjaxNetStuff.Variables.toplist[index].Gold = obj.gold;
									AXY.AjaxNetStuff.Variables.toplist[index].Steps = obj.steps;
									AXY.AjaxNetStuff.Variables.toplist[index].SaveTimes = obj.savecount;
									AXY.AjaxNetStuff.Variables.toplist[index].BattleTimes = obj.battlecount;
									AXY.AjaxNetStuff.Variables.toplist[index].VictoryTimes = obj.wincount;
									AXY.AjaxNetStuff.Variables.toplist[index].EscapeTimes = obj.escapecount;

									str += '<tr>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].Lastest + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].NickName + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].Actor + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].PlayerCE + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].TimeOL + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].Level + '</td>';
									str += '<td>' + Math.ceil(AXY.AjaxNetStuff.Variables.toplist[index].Gold / 10000) + '万</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].Steps + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].PlayTime + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].SaveTimes + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].BattleTimes + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].VictoryTimes + '</td>';
									str += '<td>' + AXY.AjaxNetStuff.Variables.toplist[index].EscapeTimes + '</td>';
									str += '</tr>';

									/*if(index == 0){
										if(obj.timeol == 0){
											AXY.AjaxNetStuff.Param.TimeOL = 60;
										}
										else{
											AXY.AjaxNetStuff.Param.TimeOL = obj.timeol;
										}
									}*/

									//$('.AXYAjaxTopListTbody').append("<tr>" + str + "</tr>");
								} catch (e) {
									console.log(e)
								}
							});
							//$('.AXYAjaxTopListTbody').append("<tr><td colspan=12>《" + data.gamename + "》共有" + data.count + "个玩家</td></tr>");
							str += "<tr><td colspan=12>《" + data.gamename + "》共有" + data.count + "个玩家</td></tr>";
							$('.AXYAjaxTopListTbody').html(str);
							if (data.uid != null) {
								$('#AXYAjaxTopListLoginButton').css("display", 'none');
								$('#AXYAjaxTopListLogoutButton').css("display", '');

								//logingift
								if (AXY.AjaxNetStuff.Param.EnableLoginGift) {
									if (AXY.AjaxNetStuff.Variables.loggedin) {
										return;
									}

									//console.log($gamePlayer);
									//console.log($gameMap);
									if (!$gameMap._mapId) {
										return;
									}
									var arrLoginGift = String(AXY.AjaxNetStuff.Parameters['LoginGift']).split(';');
									//console.log(arrLoginGift);
									$.each(arrLoginGift, function (index) {
										var arrLoginGiftItem = arrLoginGift[index].split(':');
										//console.log(arrLoginGiftItem);
										arrLoginGiftItem[0] = parseInt(arrLoginGiftItem[0]);
										arrLoginGiftItem[1] = parseInt(arrLoginGiftItem[1]);
										arrLoginGiftItem[2] = parseInt(arrLoginGiftItem[2]);
										switch (arrLoginGiftItem[0]) {
											case 0:
												$gameParty.gainGold(arrLoginGiftItem[2], 0, 0);
												if (!AXY.Toast.Param.DisplayGainGold) {
													$.toaster({
														message: "+" + arrLoginGiftItem[2] + TextManager.currencyUnit
													});
												}
												break;
											case 1:
												$gameParty.gainItem($dataItems[arrLoginGiftItem[1]], arrLoginGiftItem[2], 0, 0);
												if (!AXY.Toast.Param.DisplayGainItem) {
													$.toaster({
														message: "+" + arrLoginGiftItem[2] + $dataItems[arrLoginGiftItem[1]].name
													});
												}
												break;
											case 2:
												$gameParty.gainItem($dataWeapons[arrLoginGiftItem[1]], arrLoginGiftItem[2], 0, 0, 0);
												if (!AXY.Toast.Param.DisplayGainItem) {
													$.toaster({
														message: "+" + arrLoginGiftItem[2] + $dataWeapons[arrLoginGiftItem[1]].name
													});
												}
												break;
											case 3:
												$gameParty.gainItem($dataArmors[arrLoginGiftItem[1]], arrLoginGiftItem[2], 0, 0, 0);
												if (!AXY.Toast.Param.DisplayGainItem) {
													$.toaster({
														message: "+" + arrLoginGiftItem[2] + $dataArmors[arrLoginGiftItem[1]].name
													});
												}
												break;
											default:
												//console.log(typeof(obj[index].num));
												break;
										}
									});

									setTimeout(function () {
										// $.toaster({
										// 	message: "托管在<a href='http://666rpg.com'>666RPG.com</a>的游戏<a href='" + AXY.AjaxNetStuff.Param.URL + "'>《" + data.gamename + "》</a>诚邀您的支持！"
										// });
										//AXY_AjaxLogin.hide();
									}, 3000);
								}
								AXY.AjaxNetStuff.Variables.loggedin = true;
							}
						} else {
							console.log(data);
							$('.AXYAjaxTopListTbody').html("<tr><td colspan=12>" + data.info + data.error + "</td></tr>");
							//Silv.ItemLog.PluginCommand('axy.AjaxNetStuff', ['gold',123]);
							/*var args="itemlog gold 123".split(" ");
							var command =args.shift();
							Game_Interpreter.prototype.pluginCommand(command,args);*/
						};
					},
					error: function (jqXHR) {
						$('.AXYAjaxTopListTbody').html("<tr><td colspan=12>" + jqXHR.status + "</td></tr>");
						console.log(jqXHR);
					}
				});
			});
			$('.AXYAjaxTopListArrowClose').unbind('click touchstart').bind('click touchstart', function () {
				AXY_AjaxTopList.hide();
				$('.AXYAjaxTopListArrowOpen').show();
				$('.AXYAjaxTopListArrowClose').hide();

			});
		} catch (e) {
			console.log(e);
		}
	}

	AXY.AjaxNetStuff.Function.loadDatabase = function () {
		var _databaseFiles = [{
				name: '$dataActors',
				src: 'Actors.json'
			},
			{
				name: '$dataClasses',
				src: 'Classes.json'
			},
			{
				name: '$dataSkills',
				src: 'Skills.json'
			},
			{
				name: '$dataItems',
				src: 'Items.json'
			},
			{
				name: '$dataWeapons',
				src: 'Weapons.json'
			},
			{
				name: '$dataArmors',
				src: 'Armors.json'
			},
			{
				name: '$dataEnemies',
				src: 'Enemies.json'
			},
			{
				name: '$dataTroops',
				src: 'Troops.json'
			},
			{
				name: '$dataStates',
				src: 'States.json'
			},
			{
				name: '$dataAnimations',
				src: 'Animations.json'
			},
			/*{
				name: '$dataTilesets',
				src: 'Tilesets.json'
			},
			{
				name: '$dataCommonEvents',
				src: 'CommonEvents.json'
			},
			{
				name: '$dataSystem',
				src: 'System.json'
			},
			{
				name: '$dataMapInfos',
				src: 'MapInfos.json'
			}*/
		];

		//SceneManager.stop();
		SceneManager.goto(Scene_Menu);
		for (var i = 0; i < _databaseFiles.length; i++) {
			var name = _databaseFiles[i].name;
			var src = _databaseFiles[i].src;
			DataManager.loadDataFile(name, src);
		}
		//SceneManager.resume();
	}

	//ajax login
	var AXY_AjaxLogin = {
		show: function () {
			var AXYAjaxLoginEntity;
			var AXYAjaxLoginTemplate2 =
				'<div class="AXYAjaxLogin" id="AXYAjaxLogin">' +
				'<div class="AXYAjaxLoginBG"></div>' +
				'<input type="text" class="AXYAjaxLoginInput" id="AXYAjaxLoginInputName" placeholder="输入用户名" />' +
				'<input type="password" class="AXYAjaxLoginInput" id="AXYAjaxLoginInputPwd" placeholder="输入密码" />' +
				'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonUse" value="' + AXYAjaxTopListButtonTemplate + '" />' +
				'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonReg" value="还没账号？" />' +
				'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonClear" value="清空" />' +
				'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonClose" value="关闭" />' +
				'</div>';
			var AXYAjaxLoginStyleCss2 =
				'.AXYAjaxLogin{position:fixed;top:10px;left:.5%;z-index:10000;display:none;margin:0 auto;width:0%;height:80px;text-align:center;}' +
				'.AXYAjaxLogin .AXYAjaxLoginBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.5}' +
				'.AXYAjaxLogin .AXYAjaxLoginInput{margin:15px 0;text-align:center;width:20%;height:50px;imeMode:active}' +
				'.AXYAjaxLogin .AXYAjaxLoginButton,.AXYAjaxLogin .AXYAjaxLoginInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.4);color:#fff;font-size:24px;}' +
				'.AXYAjaxLogin .AXYAjaxLoginButton{top:0;z-index:10000;margin-left:2%;width:10%;height:3pc;word-spacing:20px;cursor:pointer}';
			var css = {
				'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
			};
			/*AXYAjaxLoginEntity = $('body').append(AXYAjaxLoginTemplate);
			AXYAjaxLoginEntity = $('#AXYAjaxLogin').append('<style type="text/css">' + AXYAjaxLoginStyleCss + '</style>');
			$('#AXYAjaxLoginInputName').css(css);
			$('#AXYAjaxLoginInputPwd').css(css);
			$('.AXYAjaxLoginButton').css(css);*/
			//console.log(css);
			//console.log($gameParty);
			//console.log($gameSystem);
			//console.log(TextManager.currencyUnit);

			/*$('#AXYAjaxLogin').stop().show().animate({
				"width": "98%"
			}, "normal");*/

			var AXYAjaxLoginTemplate =
				'<!--<div class="AXYAjaxLogin" id="AXYAjaxLogin">' +
				'<div class="AXYAjaxLoginBG"></div>' +
				'<input type="text" class="AXYAjaxLoginInput" id="AXYAjaxLoginInputName" placeholder="输入用户名" />' +
				'<input type="password" class="AXYAjaxLoginInput" id="AXYAjaxLoginInputPwd" placeholder="输入密码" />' +
				'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonUse" value="' + AXYAjaxTopListButtonTemplate + '" />' +
				'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonReg" value="还没账号？" />' +
				'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonClear" value="清空" />' +
				'<input type="button" class="AXYAjaxLoginButton" id="AXYAjaxLoginButtonClose" value="关闭" />' +
				'</div>-->' +
				'<div class="modal fade" id="AXYAjaxLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">' +
				'<div class="modal-dialog modal-dialog-centered" role="document">' +
				'<div class="modal-content bg-black-transparent">' +
				'<div class="modal-header">' +
				'<h5 class="modal-title" id="exampleModalLabel">' + AXYAjaxTopListButtonTemplate + '</h5>' +
				'<button type="button" class="close" style="color:' + AXY.AjaxNetStuff.Param.LoginModalTextColor + ';" id="AXYAjaxLoginButtonClose1" aria-label="Close">' +
				'<span aria-hidden="true">&times;</span>' +
				'</button>' +
				'</div>' +
				'<div class="modal-body">' +
				'<form>' +
				'<div class="form-group row">' +
				'<label for="AXYAjaxLoginInputName" class="col-form-label col-sm-3">' + AXY.AjaxNetStuff.Param.Reg.UsernameText + '</label>' +
				'<div class="col-sm-9"><input type="text" class="form-control AXYAjaxLoginInput" id="AXYAjaxLoginInputName" placeholder="' + AXY.AjaxNetStuff.Param.Reg.UsernamePlaceholderText + '" /></div>' +
				'</div>' +
				'<div class="form-group row">' +
				'<label for="AXYAjaxLoginInputPwd" class="col-form-label col-sm-3">' + AXY.AjaxNetStuff.Param.Reg.PasswordText + '</label>' +
				'<div class="col-sm-9"><input type="password" class="form-control AXYAjaxLoginInput" id="AXYAjaxLoginInputPwd" placeholder="' + AXY.AjaxNetStuff.Param.Reg.PasswordPlaceholderText + '" /></div>' +
				'</div>' +
				'<div class="form-group row">' +
				'<div class="col-sm-3"></div>' +
				'<div class="col-sm-9"><div class="form-check">' +
				'<input type="checkbox" class="form-check-input AXYAjaxLoginInput" id="AXYAjaxLoginInputAutoLogin" />' +
				'<label for="AXYAjaxLoginInputAutoLogin" id="AXYAjaxLoginInputAutoLoginLabel" class="form-check-label">自动登录</label>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</form>' +
				'</div>' +
				'<div class="modal-footer">';
			// console.log(window.AndroidBridgeJavascriptInterface);
			var AndroidBridgeJavascriptInterface = window.AndroidBridgeJavascriptInterface || null;
			// console.log(AndroidBridgeJavascriptInterface);
			try {
				if (!!AndroidBridgeJavascriptInterface) {
					console.log(AndroidBridgeJavascriptInterface.isCloudGameApp());
					console.log(AndroidBridgeJavascriptInterface.getSid());
					if (AndroidBridgeJavascriptInterface.isCloudGameApp()) {
						AXYAjaxLoginTemplate += '<button type="button" class="btn btn-secondary" id="AXYAjaxQuickLoginButton">' + AXY.AjaxNetStuff.Param.QuickLoginButtonText + '</button>';
					}
				}
			} catch (e) {
				console.log(e);
			}

			AXYAjaxLoginTemplate += '<button type="button" class="btn btn-secondary" id="AXYAjaxLoginButtonUse">' + AXYAjaxTopListButtonTemplate + '</button>' +
				(AXY.AjaxNetStuff.Param.Reg.Enable ? '<button type="button" class="btn btn-secondary" id="AXYAjaxLoginButtonReg">' + AXY.AjaxNetStuff.Param.Reg.ButtonText + '</button>' : '') +
				'<button type="button" class="btn btn-secondary" id="AXYAjaxLoginButtonClear">' + AXY.AjaxNetStuff.Param.Reg.ClearText + '</button>' +
				'<button type="button" class="btn btn-secondary" id="AXYAjaxLoginButtonClose">' + AXY.AjaxNetStuff.Param.Reg.CloseText + '</button>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'<style>#AXYAjaxLogin .bg-black-transparent{background-color:' + AXY.AjaxNetStuff.Param.LoginModalBgColor + ';color:' + AXY.AjaxNetStuff.Param.LoginModalTextColor + ';opacity:' + AXY.AjaxNetStuff.Param.LoginModalOpacity + ';font-family:GameFont}' +
				'.AXYAjaxLoginInput{imeMode:active}' +
				'</style>';

			AXYAjaxLoginEntity = $('body').append(AXYAjaxLoginTemplate);
			//AXYAjaxLoginEntity = $('#AXYAjaxLogin').append('<style type="text/css">' + AXYAjaxLoginStyleCss + '</style>');
			$("#AXYAjaxLogin").modal("show")
			try {
				$gameSystem.setTouchMoveEnabled(false);
			} catch (e) {
				console.log(e);
			}
			$('#AXYAjaxLoginInputName').focus();

			$('#AXYAjaxLoginInputName').keydown(function (e) {
				if (e.keyCode == 8) {
					var _name = this.value.slice(0, this.value.length - 1);
					this.value = _name;
				}
			});
			$('#AXYAjaxLoginInputName').unbind('click touchstart').bind('click touchstart', function () {
				$('#AXYAjaxLoginInputName').focus();
			});
			$('#AXYAjaxLoginInputPwd').keydown(function (e) {
				if (e.keyCode == 8) {
					var _name = this.value.slice(0, this.value.length - 1);
					this.value = _name;
				}
			});
			$('#AXYAjaxLoginInputPwd').unbind('click touchstart').bind('click touchstart', function () {
				$('#AXYAjaxLoginInputPwd').focus();
			});
			$('#AXYAjaxLoginInputAutoLogin,#AXYAjaxLoginInputAutoLoginLabel').unbind('click touchstart').bind('click touchstart', function () {
				if ($('#AXYAjaxLoginInputAutoLogin').prop("checked")) {
					$('#AXYAjaxLoginInputAutoLogin').attr("checked", false);
				} else {
					$('#AXYAjaxLoginInputAutoLogin').attr("checked", true);
				}
			});
			$('#AXYAjaxQuickLoginButton').unbind('click touchstart').bind('click touchstart', function () {
				if ($gameVariables == null) {
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 进入游戏后再试",
						color: 'red'
					});
					return;
				}
				if (AndroidBridgeJavascriptInterface.getSid() != null) {
					AXY.AjaxNetStuff.Variables.loggedin = true;
					AXY.AjaxNetStuff.Param.sid = AndroidBridgeJavascriptInterface.getSid();
					localStorage.setItem(AXY.AjaxNetStuff.Param.CloudData.LocalCacheUUID + AXY.AjaxNetStuff.Param.AppID + 'sid', AndroidBridgeJavascriptInterface.getSid());

					if ($('#AXYAjaxLoginInputAutoLogin').prop('checked')) {
						$gameVariables._AXY = {};
						$gameVariables._AXY.AjaxNetStuff = {};
						$gameVariables._AXY.AjaxNetStuff.Loggedin = true;
						$gameVariables._AXY.AjaxNetStuff.sid = AndroidBridgeJavascriptInterface.getSid();
					}

					$('#AXYAjaxTopListLoginButton').css("display", 'none');
					$('#AXYAjaxTopListLogoutButton').css("display", '');
					AXY_AjaxLogin.hide();

					//alert(AXY.AjaxNetStuff.Param.sid);
					//alert(data.sid);
					//alert(data.uid);
					// $gameNetwork._serverURL = data.mvol;
					// console.log('attempt login to mongodb');
					// AXY_AjaxLoginConnect2RMMVOL.Connect2RMMVOL(inputName, inputPwd);
					// setTimeout(function () {
					// 	// $.toaster({
					// 	// 	message: "托管在<a href='http://666rpg.com'>666RPG.com</a>的游戏<a href='" + AXY.AjaxNetStuff.Param.URL + "'>《" + data.gamename + "》</a>诚邀您的支持！"
					// 	// });
					// }, 3000);

					//logingift
					if (AXY.AjaxNetStuff.Param.EnableLoginGift) {
						if (AXY.AjaxNetStuff.Param.LoginGiftDone) {
							return;
						}
						//console.log($gamePlayer);
						//console.log($gameMap);
						if (!$gameMap._mapId) {
							$.toaster({
								message: "进入游戏后重新登录可以领取登录礼包！"
							});
							$('.AXYAjaxTopListLoginButton').css("display", 'inline');
							return;
						}
						var arrLoginGift = String(AXY.AjaxNetStuff.Parameters['LoginGift']).split(';');
						//console.log(arrLoginGift);
						$.each(arrLoginGift, function (index) {
							var arrLoginGiftItem = arrLoginGift[index].split(':');
							//console.log(arrLoginGiftItem);
							arrLoginGiftItem[0] = parseInt(arrLoginGiftItem[0]);
							arrLoginGiftItem[1] = parseInt(arrLoginGiftItem[1]);
							arrLoginGiftItem[2] = parseInt(arrLoginGiftItem[2]);
							switch (arrLoginGiftItem[0]) {
								case 0:
									$gameParty.gainGold(arrLoginGiftItem[2], 0, 0);
									if (!AXY.Toast.Param.DisplayGainGold) {
										$.toaster({
											message: "+" + arrLoginGiftItem[2] + TextManager.currencyUnit
										});
									}
									break;
								case 1:
									$gameParty.gainItem($dataItems[arrLoginGiftItem[1]], arrLoginGiftItem[2], 0, 0);
									if (!AXY.Toast.Param.DisplayGainItem) {
										$.toaster({
											message: "+" + arrLoginGiftItem[2] + $dataItems[arrLoginGiftItem[1]].name
										});
									}
									break;
								case 2:
									$gameParty.gainItem($dataWeapons[arrLoginGiftItem[1]], arrLoginGiftItem[2], 0, 0, 0);
									if (!AXY.Toast.Param.DisplayGainItem) {
										$.toaster({
											message: "+" + arrLoginGiftItem[2] + $dataWeapons[arrLoginGiftItem[1]].name
										});
									}
									break;
								case 3:
									$gameParty.gainItem($dataArmors[arrLoginGiftItem[1]], arrLoginGiftItem[2], 0, 0, 0);
									if (!AXY.Toast.Param.DisplayGainItem) {
										$.toaster({
											message: "+" + arrLoginGiftItem[2] + $dataArmors[arrLoginGiftItem[1]].name
										});
									}
									break;
								default:
									//console.log(typeof(obj[index].num));
									break;
							}
						});
						AXY.AjaxNetStuff.Param.LoginGiftDone = true;
					}

					if (AXY.AjaxNetStuff.Param.LoginCommonEventId > 0) {
						if (!$gameMap._mapId) {
							$.toaster({
								message: "进入游戏后重新登录有彩蛋！"
							});
							$('.AXYAjaxTopListLoginButton').css("display", 'inline');
							return;
						}
						$gameTemp.reserveCommonEvent(AXY.AjaxNetStuff.Param.LoginCommonEventId);
					}

					//AXY.AjaxNetStuff.Function.loadDatabase();
				}
			});
			//console.log($('#AXYAjaxLoginInput'));
			$('#AXYAjaxLoginButtonReg').unbind('click touchstart').bind('click touchstart', function () {
				//window.open(AXY_LoginURL);
				AXY_AjaxReg.show();
			});
			$('#AXYAjaxLoginButtonUse').unbind('click touchstart').bind('click touchstart', function () {
				if ($gameVariables == null) {
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 进入游戏后再试",
						color: 'red'
					});
					return;
				}
				if ($('#AXYAjaxLoginButtonUse')[0].disabled) {
					//console.log($('#AXYAjaxLoginButtonUse')[0].disabled);
					return;
				}
				//console.log($('#AXYAjaxLoginButtonUse'));
				//console.log($('#AXYAjaxLoginButtonUse')[0].disabled);

				$('#AXYAjaxLoginButtonUse').attr("disabled", true);
				$('#AXYAjaxLoginButtonUse').val(AXY.AjaxNetStuff.Param.LoadingText);
				//console.log($('#AXYAjaxLoginButtonUse'));
				//console.log(typeof($('#AXYAjaxLoginButtonUse')[0].disabled));
				//return;
				var inputName = $('#AXYAjaxLoginInputName').val(); //$('#AXYAjaxLoginInputName').val().replace(/ /g, "");
				inputName = inputName.replace(/<\/?[^>]*>/gim, ""); //去掉所有的html标记
				inputName = inputName.replace(/(^\s+)|(\s+$)/g, ""); //去掉前后空格
				//inputName = inputName.replace(/\s/g,"");//去除文章中间空格
				var inputPwd = $('#AXYAjaxLoginInputPwd').val(); //$('#AXYAjaxLoginInputPwd').val().replace(/ /g, "");
				inputPwd = inputPwd.replace(/<\/?[^>]*>/gim, ""); //去掉所有的html标记
				inputPwd = inputPwd.replace(/(^\s+)|(\s+$)/g, ""); //去掉前后空格
				//inputPwd = inputPwd.replace(/\s/g,"");//去除文章中间空格
				//console.log($('#AXYAjaxLoginInput'));
				//console.log($('#AXYAjaxLoginInput').val());
				//console.log(inputcoupon);
				//console.log(str);
				//console.log(result);
				//console.log(ss);


				if (!inputName || !inputPwd) {
					//console.log('代码不能为空');
					$.toaster({
						message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 用户名和密码不能为空",
						color: 'red'
					});
					$('#AXYAjaxLoginButtonUse').attr("disabled", false);
					$('#AXYAjaxLoginButtonUse').val(AXYAjaxTopListButtonTemplate);
					return;
				}
				//else{
				$.toaster({
					message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: 正在登录...",
					color: 'white'
				});
				var AXY_AjaxLoginURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgamelogin');
				$.ajax({
					url: AXY_AjaxLoginURL,
					type: 'POST',
					dataType: 'json',
					data: {
						username: inputName,
						password: inputPwd
					},
					success: function (data) {
						//console.log(data);
						if (data.status) {


							if (data.uid != null) {
								AXY.AjaxNetStuff.Variables.loggedin = true;
								AXY.AjaxNetStuff.Param.sid = data.sid;
								localStorage.setItem(AXY.AjaxNetStuff.Param.CloudData.LocalCacheUUID + AXY.AjaxNetStuff.Param.AppID + 'sid', data.sid);

								if ($('#AXYAjaxLoginInputAutoLogin').prop('checked')) {
									$gameVariables._AXY = {};
									$gameVariables._AXY.AjaxNetStuff = {};
									$gameVariables._AXY.AjaxNetStuff.Loggedin = true;
									$gameVariables._AXY.AjaxNetStuff.sid = data.sid;
								}

								$('#AXYAjaxTopListLoginButton').css("display", 'none');
								$('#AXYAjaxTopListLogoutButton').css("display", '');
								AXY_AjaxLogin.hide();

								//alert(AXY.AjaxNetStuff.Param.sid);
								//alert(data.sid);
								//alert(data.uid);
								$gameNetwork._serverURL = data.mvol;
								console.log('attempt login to mongodb');
								AXY_AjaxLoginConnect2RMMVOL.Connect2RMMVOL(inputName, inputPwd);
								setTimeout(function () {
									// $.toaster({
									// 	message: "托管在<a href='http://666rpg.com'>666RPG.com</a>的游戏<a href='" + AXY.AjaxNetStuff.Param.URL + "'>《" + data.gamename + "》</a>诚邀您的支持！"
									// });
								}, 3000);

								//logingift
								if (AXY.AjaxNetStuff.Param.EnableLoginGift) {
									if (AXY.AjaxNetStuff.Param.LoginGiftDone) {
										return;
									}
									//console.log($gamePlayer);
									//console.log($gameMap);
									if (!$gameMap._mapId) {
										$.toaster({
											message: "进入游戏后重新登录可以领取登录礼包！"
										});
										$('.AXYAjaxTopListLoginButton').css("display", 'inline');
										return;
									}
									var arrLoginGift = String(AXY.AjaxNetStuff.Parameters['LoginGift']).split(';');
									//console.log(arrLoginGift);
									$.each(arrLoginGift, function (index) {
										var arrLoginGiftItem = arrLoginGift[index].split(':');
										//console.log(arrLoginGiftItem);
										arrLoginGiftItem[0] = parseInt(arrLoginGiftItem[0]);
										arrLoginGiftItem[1] = parseInt(arrLoginGiftItem[1]);
										arrLoginGiftItem[2] = parseInt(arrLoginGiftItem[2]);
										switch (arrLoginGiftItem[0]) {
											case 0:
												$gameParty.gainGold(arrLoginGiftItem[2], 0, 0);
												if (!AXY.Toast.Param.DisplayGainGold) {
													$.toaster({
														message: "+" + arrLoginGiftItem[2] + TextManager.currencyUnit
													});
												}
												break;
											case 1:
												$gameParty.gainItem($dataItems[arrLoginGiftItem[1]], arrLoginGiftItem[2], 0, 0);
												if (!AXY.Toast.Param.DisplayGainItem) {
													$.toaster({
														message: "+" + arrLoginGiftItem[2] + $dataItems[arrLoginGiftItem[1]].name
													});
												}
												break;
											case 2:
												$gameParty.gainItem($dataWeapons[arrLoginGiftItem[1]], arrLoginGiftItem[2], 0, 0, 0);
												if (!AXY.Toast.Param.DisplayGainItem) {
													$.toaster({
														message: "+" + arrLoginGiftItem[2] + $dataWeapons[arrLoginGiftItem[1]].name
													});
												}
												break;
											case 3:
												$gameParty.gainItem($dataArmors[arrLoginGiftItem[1]], arrLoginGiftItem[2], 0, 0, 0);
												if (!AXY.Toast.Param.DisplayGainItem) {
													$.toaster({
														message: "+" + arrLoginGiftItem[2] + $dataArmors[arrLoginGiftItem[1]].name
													});
												}
												break;
											default:
												//console.log(typeof(obj[index].num));
												break;
										}
									});
									AXY.AjaxNetStuff.Param.LoginGiftDone = true;
								}

								if (AXY.AjaxNetStuff.Param.LoginCommonEventId > 0) {
									if (!$gameMap._mapId) {
										$.toaster({
											message: "进入游戏后重新登录有彩蛋！"
										});
										$('.AXYAjaxTopListLoginButton').css("display", 'inline');
										return;
									}
									$gameTemp.reserveCommonEvent(AXY.AjaxNetStuff.Param.LoginCommonEventId);
								}

								//AXY.AjaxNetStuff.Function.loadDatabase();
							}
						} else {
							console.log(data);
							$.toaster({
								message: data.info + ', ERRORCODE: ' + data.error,
								color: 'red'
							});
						};
						$('#AXYAjaxLoginButtonUse').attr("disabled", false);
						$('#AXYAjaxLoginButtonUse').val(AXYAjaxTopListButtonTemplate);
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						console.log(XMLHttpRequest);
						console.log(textStatus);
						console.log(errorThrown);
						$.toaster({
							title: 'ERROR: ',
							message: textStatus + ' ' + errorThrown,
							color: 'red'
						});
						$('#AXYAjaxLoginButtonUse').attr("disabled", false);
						$('#AXYAjaxLoginButtonUse').val(AXYAjaxTopListButtonTemplate);
					},
					complete: function (XMLHttpRequest, textStatus) {
						//console.log(XMLHttpRequest);
						//console.log(textStatus);
						//$.toaster({
						//	title: 'COMPLETE: ',
						//	message: textStatus,
						//	color: 'gray'
						//});
						$('#AXYAjaxLoginButtonUse').attr("disabled", false);
						$('#AXYAjaxLoginButtonUse').val(AXYAjaxTopListButtonTemplate);
					}
				});
				//}
			});
			$('#AXYAjaxLoginButtonClear').unbind('click touchstart').bind('click touchstart', function () {
				$('#AXYAjaxLoginInputName').val('').focus();
				$('#AXYAjaxLoginInputPwd').val('');
			});
			$('#AXYAjaxLoginButtonClose,#AXYAjaxLoginButtonClose1').unbind('click touchstart').bind('click touchstart', function () {
				AXY_AjaxLogin.hide();
			});
		},
		hide: function () {
			/*$('#AXYAjaxLogin').stop().animate({
				"width": "0"
			}, "normal", function () {
				$(this).hide();
				$(this).remove();
				try {
					$gameSystem.setTouchMoveEnabled(true);
				} catch (e) {
					console.log(e);
				}
			});*/
			$("#AXYAjaxLogin").modal("hide")
			try {
				$gameSystem.setTouchMoveEnabled(true);
			} catch (e) {
				console.log(e);
			}
		},
		logout: function () {
			$gameVariables._AXY = {};
			$gameVariables._AXY.AjaxNetStuff = {};
			$gameVariables._AXY.AjaxNetStuff.Loggedin = false;
			$gameVariables._AXY.AjaxNetStuff.sid = '';
			AXY.AjaxNetStuff.Variables.loggedin = false;
			AXY.AjaxNetStuff.Param.sid = '';
			//AXY.AjaxNetStuff.Function.loadDatabase();
			localStorage.removeItem("sid");
			//localStorage.setItem("needsdatareload", 'on');
		}
	};

	//ajax reg
	if (AXY.AjaxNetStuff.Param.Reg.Enable) {
		var AXY_AjaxReg = {
			show: function () {
				var AXYAjaxRegTemplate =
					'<div class="modal fade" id="AXYAjaxReg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">' +
					'<div class="modal-dialog modal-dialog-centered" role="document">' +
					'<div class="modal-content bg-black-transparent">' +
					'<div class="modal-header">' +
					'<h5 class="modal-title" id="exampleModalLabel">' + AXY.AjaxNetStuff.Param.Reg.ButtonText + '</h5>' +
					'<button type="button" class="close" style="color:' + AXY.AjaxNetStuff.Param.Reg.ModalTextColor + ';" id="AXYAjaxRegButtonClose1" aria-label="Close">' +
					'<span aria-hidden="true">&times;</span>' +
					'</button>' +
					'</div>' +
					'<div class="modal-body">' +
					'<form>' +
					'<div class="form-group row">' +
					'<label for="AXYAjaxRegInputName" class="col-form-label col-sm-3">' + AXY.AjaxNetStuff.Param.Reg.UsernameText + '</label>' +
					'<div class="col-sm-9"><input type="text" class="form-control AXYAjaxRegInput" id="AXYAjaxRegInputName" placeholder="' + AXY.AjaxNetStuff.Param.Reg.UsernamePlaceholderText + '" /></div>' +
					'</div>' +
					'<div class="form-group row">' +
					'<label for="AXYAjaxRegInputPwd" class="col-form-label col-sm-3">' + AXY.AjaxNetStuff.Param.Reg.PasswordText + '</label>' +
					'<div class="col-sm-9"><input type="password" class="form-control AXYAjaxRegInput" id="AXYAjaxRegInputPwd" placeholder="' + AXY.AjaxNetStuff.Param.Reg.PasswordPlaceholderText + '" /></div>' +
					'</div>' +
					'<div class="form-group row">' +
					'<label for="AXYAjaxRegInputPwd2" class="col-form-label col-sm-3">' + AXY.AjaxNetStuff.Param.Reg.ConfirmPasswordText + '</label>' +
					'<div class="col-sm-9"><input type="password" class="form-control AXYAjaxRegInput" id="AXYAjaxRegInputPwd2" placeholder="' + AXY.AjaxNetStuff.Param.Reg.ConfirmPasswordPlaceholderText + '" /></div>' +
					'</div>' +
					'</form>' +
					'</div>' +
					'<div class="modal-footer">' +
					'注册即表明您已阅读并同意：<a href="https://shanghai.666rpg.com:666/Home/Art/index/id/16" target="_blank" style="text-decoration: underline;" id="AXYAjaxRegRequiredReading">注册必读</a>和<a href="https://shanghai.666rpg.com:666/Home/Art/index/id/19" target="_blank" style="text-decoration: underline;" id="AXYAjaxRegUserAgreement">用户协议</a>' +
					'<button type="button" class="btn btn-secondary" id="AXYAjaxRegButtonUse">' + AXY.AjaxNetStuff.Param.Reg.ButtonText + '</button>' +
					'<!--<button type="button" class="btn btn-secondary" id="AXYAjaxRegButtonClear">' + AXY.AjaxNetStuff.Param.Reg.ClearText + '</button>' +
					'<button type="button" class="btn btn-secondary" id="AXYAjaxRegButtonClose">' + AXY.AjaxNetStuff.Param.Reg.CloseText + '</button>-->' +
					'</div>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<style>#AXYAjaxReg .bg-black-transparent{background-color:' + AXY.AjaxNetStuff.Param.Reg.ModalBgColor + ';color:' + AXY.AjaxNetStuff.Param.Reg.ModalTextColor + ';opacity:' + AXY.AjaxNetStuff.Param.Reg.ModalOpacity + ';font-family:GameFont}' +
					'.AXYAjaxRegInput{imeMode:active}' +
					'</style>';
				AXYAjaxRegEntity = $('body').append(AXYAjaxRegTemplate);
				$("#AXYAjaxReg").modal("show");
				AXY_AjaxLogin.hide();
				try {
					$gameSystem.setTouchMoveEnabled(false);
				} catch (e) {
					console.log(e);
				}
				$('#AXYAjaxRegInputName').focus();

				$('#AXYAjaxRegInputName').keydown(function (e) {
					if (e.keyCode == 8) {
						var _name = this.value.slice(0, this.value.length - 1);
						this.value = _name;
					}
				});
				$('#AXYAjaxRegRequiredReading').unbind('click touchstart').bind('click touchstart', function () {
					window.open($('#AXYAjaxRegRequiredReading')[0].href);
				});
				$('#AXYAjaxRegUserAgreement').unbind('click touchstart').bind('click touchstart', function () {
					window.open($('#AXYAjaxRegUserAgreement')[0].href);
				});
				$('#AXYAjaxRegInputName').unbind('click touchstart').bind('click touchstart', function () {
					$('#AXYAjaxRegInputName').focus();
				});
				$('#AXYAjaxRegInputPwd').keydown(function (e) {
					if (e.keyCode == 8) {
						var _name = this.value.slice(0, this.value.length - 1);
						this.value = _name;
					}
				});
				$('#AXYAjaxRegInputPwd').unbind('click touchstart').bind('click touchstart', function () {
					$('#AXYAjaxRegInputPwd').focus();
				});
				$('#AXYAjaxRegInputPwd2').keydown(function (e) {
					if (e.keyCode == 8) {
						var _name = this.value.slice(0, this.value.length - 1);
						this.value = _name;
					}
				});
				$('#AXYAjaxRegInputPwd2').unbind('click touchstart').bind('click touchstart', function () {
					$('#AXYAjaxRegInputPwd2').focus();
				});

				$('#AXYAjaxRegButtonUse').unbind('click touchstart').bind('click touchstart', function () {
					if ($('#AXYAjaxRegButtonUse')[0].disabled) {
						//console.log($('#AXYAjaxRegButtonUse')[0].disabled);
						return;
					}
					//console.log($('#AXYAjaxRegButtonUse'));
					//console.log($('#AXYAjaxRegButtonUse')[0].disabled);

					$('#AXYAjaxRegButtonUse').attr("disabled", true);
					$('#AXYAjaxRegButtonUse').html('<div class="spinner-border" role="status"><span class="sr-only">' + AXY.AjaxNetStuff.Param.LoadingText + '</span></div>');
					//console.log($('#AXYAjaxRegButtonUse'));
					//console.log(typeof($('#AXYAjaxRegButtonUse')[0].disabled));
					//return;
					var inputName = $('#AXYAjaxRegInputName').val(); //$('#AXYAjaxRegInputName').val().replace(/ /g, "");
					inputName = inputName.replace(/<\/?[^>]*>/gim, ""); //remove all html tag
					inputName = inputName.replace(/(^\s+)|(\s+$)/g, ""); //trim
					//inputName = inputName.replace(/\s/g,"");//remove space in str
					var inputPwd = $('#AXYAjaxRegInputPwd').val(); //$('#AXYAjaxRegInputPwd').val().replace(/ /g, "");
					inputPwd = inputPwd.replace(/<\/?[^>]*>/gim, ""); //remove all html tag
					inputPwd = inputPwd.replace(/(^\s+)|(\s+$)/g, ""); //trim
					var inputPwd2 = $('#AXYAjaxRegInputPwd2').val(); //$('#AXYAjaxRegInputPwd').val().replace(/ /g, "");
					inputPwd2 = inputPwd2.replace(/<\/?[^>]*>/gim, ""); //remove all html tag
					inputPwd2 = inputPwd2.replace(/(^\s+)|(\s+$)/g, ""); //trim
					//inputPwd = inputPwd.replace(/\s/g,"");//remove space in str
					//console.log($('#AXYAjaxRegInput'));
					//console.log($('#AXYAjaxRegInput').val());
					//console.log(inputcoupon);
					//console.log(str);
					//console.log(result);
					//console.log(ss);


					if (!inputName || !inputPwd || !inputPwd2) {
						$.toaster({
							message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: " + AXY.AjaxNetStuff.Param.Reg.UsernamePasswordCanNotBeEmptyText,
							color: 'red'
						});
						$('#AXYAjaxRegButtonUse').attr("disabled", false);
						$('#AXYAjaxRegButtonUse').html(AXY.AjaxNetStuff.Param.Reg.ButtonText);
						return false;
					}
					if (inputPwd != inputPwd2) {
						$.toaster({
							message: "<a href='" + AXY.AjaxNetStuff.Param.URL + "' target='_blank'>" + AXY.AjaxNetStuff.Variables.gameName + "</a>: " + AXY.AjaxNetStuff.Param.Reg.DifferentPasswordsTwiceText,
							color: 'red'
						});
						$('#AXYAjaxRegButtonUse').attr("disabled", false);
						$('#AXYAjaxRegButtonUse').html(AXY.AjaxNetStuff.Param.Reg.ButtonText);
						return false;
					}
					$.toaster({
						message: '<a href="' + AXY.AjaxNetStuff.Param.URL + '" target="_blank">' + AXY.AjaxNetStuff.Variables.gameName + '</a>: <div class="spinner-border spinner-border-sm" role="status"><span class="sr-only">' + AXY.AjaxNetStuff.Param.LoadingText + '</span></div>' + AXY.AjaxNetStuff.Param.Reg.RegingText,
						color: 'white'
					});
					var AXY_AjaxRegURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgamereg');
					$.ajax({
						url: AXY_AjaxRegURL,
						type: 'POST',
						dataType: 'json',
						data: {
							username: inputName,
							password: inputPwd,
							repassword: inputPwd2
						},
						success: function (data) {
							//console.log(data);
							if (data.status) {
								$.toaster({
									message: AXY.AjaxNetStuff.Param.Reg.RegSuccessText,
									color: 'green'
								});
								$.toaster({
									message: AXY.AjaxNetStuff.Param.Reg.PleaseLoginText,
									color: 'green'
								});
								AXY_AjaxLogin.show();
								AXY_AjaxReg.hide();
							} else {
								console.log(data);
								$.toaster({
									message: AXY.AjaxNetStuff.Param.Reg.RegFailText + ', ERROR: ' + data.info + ', ERRORCODE: ' + data.error,
									color: 'red'
								});
							};
							$('#AXYAjaxRegButtonUse').attr("disabled", false);
							$('#AXYAjaxRegButtonUse').html(AXY.AjaxNetStuff.Param.Reg.ButtonText);
						},
						error: function (XMLHttpRequest, textStatus, errorThrown) {
							console.log(XMLHttpRequest);
							console.log(textStatus);
							console.log(errorThrown);
							$.toaster({
								title: 'ERROR: ',
								message: textStatus + ' ' + errorThrown,
								color: 'red'
							});
							$('#AXYAjaxRegButtonUse').attr("disabled", false);
							$('#AXYAjaxRegButtonUse').html(AXY.AjaxNetStuff.Param.Reg.ButtonText);
						},
						complete: function (XMLHttpRequest, textStatus) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//$.toaster({
							//	title: 'COMPLETE: ',
							//	message: textStatus,
							//	color: 'gray'
							//});
							$('#AXYAjaxRegButtonUse').attr("disabled", false);
							$('#AXYAjaxRegButtonUse').html(AXY.AjaxNetStuff.Param.Reg.ButtonText);
						}
					});
					//}
				});
				$('#AXYAjaxRegButtonClear').unbind('click touchstart').bind('click touchstart', function () {
					$('#AXYAjaxRegInputName').val('').focus();
					$('#AXYAjaxRegInputPwd').val('');
					$('#AXYAjaxRegInputPwd2').val('');
				});
				$('#AXYAjaxRegButtonClose,#AXYAjaxRegButtonClose1').unbind('click touchstart').bind('click touchstart', function () {
					AXY_AjaxReg.hide();
				});
			},
			hide: function () {
				$("#AXYAjaxReg").modal("hide")
				try {
					$gameSystem.setTouchMoveEnabled(true);
				} catch (e) {
					console.log(e);
				}
			}
		};
	}

	var AXY_AjaxLoginConnect2RMMVOL = {
		Connect2RMMVOL: function (inputName, inputPwd) {
			//$.toaster({ message : "搜索其他玩家中，请耐心等待，不要进行任何操作！"});
			//SceneManager.push(Scene_Menu);

			//console.log(inputName);
			//console.log(inputPwd);
			shapwd = CryptoJS.SHA1(inputPwd + $gameNetwork._firstHash).toString(CryptoJS.enc.Hex);
			//console.log(shapwd);
			//console.log($gameNetwork._serverURL);
			$.ajax({
				url: $gameNetwork._serverURL + '/login',
				type: 'POST',
				dataType: 'json',
				data: {
					username: inputName,
					password: shapwd
				},
				success: function (data) {
					console.log('login to mongodb done');
					console.log(data);
					if (data.err) {
						console.log('login to mongodb error');
						console.log(data);
						switch (data.err) {
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
									if (data.err) {
										console.log('register to mongodb error');
										console.log(data);
										return;
									}
									if (data.msg) {
										console.log('register to mongodb ok');
										console.log(data);
										console.log('login to mongodb again');
										shapwd = CryptoJS.SHA1(inputPwd + $gameNetwork._firstHash).toString(CryptoJS.enc.Hex);
										$.post($gameNetwork._serverURL + '/login', {
											username: inputName,
											password: shapwd
										}).done(function (data) {
											console.log('login to mongodb again done');
											console.log(data);
											if (data.err) {
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
												$gameNetwork.connectSocket('main', '/');
												//}
												$gameNetwork.connectSocketsAfterLogin();
												//SceneManager.goto(Scene_Map);
												if (!$gameParty.inBattle()) {
													$gameNetwork._socket.netplayers.emit('changeRoom', $gameMap.mapId().toString());
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
						$gameNetwork.connectSocket('main', '/');
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
							//$('.AXYAjaxMenuButtonOpen').touchstart();
							//

							//SceneManager.pop();
							//SceneManager.goto(Scene_Map);
							/*SceneManager.goto(Scene_Options);
							setTimeout(function(){
								$.toaster({ message : "搜索成功！"});
								SceneManager.goto(Scene_Map);
							}, 1000);*/
							$gameNetwork._socket.netplayers.emit('changeRoom', $gameMap.mapId().toString());
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
		}
		/*,
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
		Window_MenuCommand.prototype.addOriginalCommands = function () {
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
		Scene_Menu.prototype.createCommandWindow = function () {
			AXY.AjaxNetStuff.Alias.createCommandWindowCoupon.call(this);
			this._commandWindow.setHandler('coupon', this.commandCoupon.bind(this));
			/*if (Imported.MOG_TimeSystem && Moghunter.timeWindow_menu) {	
				this._commandWindow.height -= this._commandWindow.itemHeight();
			};*/
		};

		//==============================
		// * Coupon
		//==============================
		Scene_Menu.prototype.commandCoupon = function () {
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
					'<input type="text" class="AXYAjaxCouponInput" id="AXYAjaxCouponInput" placeholder="粘贴兑换码" />' +
					'<input type="button" class="AXYAjaxCouponButton" id="AXYAjaxCouponButtonUse" value="兑换" />' +
					'<input type="button" class="AXYAjaxCouponButton" id="AXYAjaxCouponButtonClear" value="清空" />' +
					'<input type="button" class="AXYAjaxCouponButton" id="AXYAjaxCouponButtonClose" value="关闭" />' +
					'</div>';
				var AXYAjaxCouponStyleCss =
					'.AXYAjaxCoupon{position:fixed;top:10px;left:.5%;z-index:10000;display:none;margin:0 auto;width:0%;height:80px;text-align:center;}' +
					'.AXYAjaxCoupon .AXYAjaxCouponBG{position:absolute;width:100%;height:100%;border:3px solid #fff;border-radius:10px;background:#000;opacity:.5}' +
					'.AXYAjaxCoupon .AXYAjaxCouponInput{margin:15px 0;text-align:center;width:30%;height:50px;imeMode:active}' +
					'.AXYAjaxCoupon .AXYAjaxCouponButton,.AXYAjaxCoupon .AXYAjaxCouponInput{position:relative;outline:0;border:1px solid #fff;border-radius:5px;background-color:rgba(0,0,0,0.4);color:#fff;font-size:24px;}' +
					'.AXYAjaxCoupon .AXYAjaxCouponButton{top:0;z-index:10000;margin-left:2%;width:10%;height:3pc;word-spacing:20px;cursor:pointer}';
				var css = {
					'font-family': $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
				};
				AXYAjaxCouponEntity = $('body').append(AXYAjaxCouponTemplate);
				AXYAjaxCouponEntity = $('#AXYAjaxCoupon').append('<style type="text/css">' + AXYAjaxCouponStyleCss + '</style>');
				$('#AXYAjaxCouponInput').css(css);
				$('.AXYAjaxCouponButton').css(css);
				//console.log(css);
				//console.log($gameParty);
				//console.log($gameSystem);
				//console.log(TextManager.currencyUnit);

				$('#AXYAjaxCoupon').stop().show().animate({
					"width": "98%"
				}, "normal");
				$gameSystem.setTouchMoveEnabled(false);
				$('#AXYAjaxCouponInput').focus();

				$('#AXYAjaxCouponInput').keydown(function (e) {
					if (e.keyCode == 8) {
						var _name = this.value.slice(0, this.value.length - 1);
						this.value = _name;
					}
				});
				$('#AXYAjaxCouponInput').unbind('click touchstart').bind('click touchstart', function () {
					$('#AXYAjaxCouponInput').focus();
				});
				//console.log($('#AXYAjaxCouponInput'));

				$('#AXYAjaxCouponButtonUse').unbind('click touchstart').bind('click touchstart', function () {
					if ($('#AXYAjaxCouponButtonUse')[0].disabled) {
						//console.log($('#AXYAjaxCouponButtonUse')[0].disabled);
						return;
					}
					//console.log($('#AXYAjaxCouponButtonUse'));
					//console.log($('#AXYAjaxCouponButtonUse')[0].disabled);

					$('#AXYAjaxCouponButtonUse').attr("disabled", true);
					$('#AXYAjaxCouponButtonUse').val(AXY.AjaxNetStuff.Param.LoadingText);
					//console.log($('#AXYAjaxCouponButtonUse'));
					//console.log(typeof($('#AXYAjaxCouponButtonUse')[0].disabled));
					//return;
					var inputcoupon = $('#AXYAjaxCouponInput').val().replace(/ /g, "");
					inputcoupon = inputcoupon.replace(/<\/?[^>]*>/gim, ""); //去掉所有的html标记
					inputcoupon = inputcoupon.replace(/(^\s+)|(\s+$)/g, ""); //去掉前后空格
					inputcoupon = inputcoupon.replace(/\s/g, ""); //去除文章中间空格
					//console.log($('#AXYAjaxCouponInput'));
					//console.log($('#AXYAjaxCouponInput').val());
					//console.log(inputcoupon);
					//console.log(str);
					//console.log(result);
					//console.log(ss);


					if (!inputcoupon) {
						//console.log('代码不能为空');
						$.toaster({
							//message: "<a href='http://666rpg.com' target='_blank'>666rpg.com</a>平台提醒您：兑换码不能为空",
							message: "兑换码不能为空",
							color: 'red'
						});
						$('#AXYAjaxCouponButtonUse').attr("disabled", false);
						$('#AXYAjaxCouponButtonUse').val("兑换");
						return;
					}
					//else{
					$.toaster({
						//message: "正在发送至<a href='http://666rpg.com' target='_blank'>666rpg.com</a>平台进行验证...",
						message: "正在发送至平台进行验证...",
						color: 'white'
					});
					var AXY_AjaxCouponURL = AXY.AjaxNetStuff.Variables.URL.replace('tmpAction', 'rmmvgamecoupon');
					$.ajax({
						url: AXY_AjaxCouponURL,
						type: 'POST',
						dataType: 'json',
						data: {
							sid: AXY.AjaxNetStuff.Param.sid,
							coupon: inputcoupon
						},
						success: function (data) {
							//console.log(data);
							if (data.status) {
								var obj = $.parseJSON(data['jsonstr']);
								//console.log(obj);
								$.each(obj, function (index) {
									//console.log(obj[index]);
									switch (obj[index].item) {
										case 0:
											$gameParty.gainGold(obj[index].num, 0, 0);
											if (AXY.AjaxNetStuff.Param.DonateInGame.displayGoldChangeInformation) {
												$.toaster({
													message: "+" + obj[index].num + TextManager.currencyUnit
												});
											}
											break;
										case 1:
											$gameParty.gainItem($dataItems[obj[index].id], obj[index].num, 0, 0);
											if (AXY.AjaxNetStuff.Param.DonateInGame.displayItemChangeInformation) {
												$.toaster({
													message: "+" + obj[index].num + $dataItems[obj[index].id].name
												});
											}
											break;
										case 2:
											$gameParty.gainItem($dataWeapons[obj[index].id], obj[index].num, 0, 0, 0);
											if (AXY.AjaxNetStuff.Param.DonateInGame.displayWeaponChangeInformation) {
												$.toaster({
													message: "+" + obj[index].num + $dataWeapons[obj[index].id].name
												});
											}
											break;
										case 3:
											$gameParty.gainItem($dataArmors[obj[index].id], obj[index].num, 0, 0, 0);
											if (AXY.AjaxNetStuff.Param.DonateInGame.displayArmorChangeInformation) {
												$.toaster({
													message: "+" + obj[index].num + $dataArmors[obj[index].id].name
												});
											}
											break;
										case 4:
											$gameSwitches.setValue(obj[index].id, obj[index].num);
											if (AXY.AjaxNetStuff.Param.DonateInGame.displaySwitchesToggleInformation) {
												$.toaster({
													message: $dataSystem.switches[obj[index].id] + "=" + (obj[index].num ? 'On' : 'Off')
												});
											}
											break;
										case 5:
											$gameVariables.setValue(obj[index].id, obj[index].num);
											if (AXY.AjaxNetStuff.Param.DonateInGame.displayVariablesChangeInformation) {
												$.toaster({
													message: $dataSystem.variables[obj[index].id] + "=" + obj[index].num
												});
											}
											break;
										case 6:
											let _tmp = obj[index].id;
											setTimeout(function () {
												$gameTemp.reserveCommonEvent(_tmp);
												if (AXY.AjaxNetStuff.Param.DonateInGame.displayCommonEventInformation) {
													$.toaster({
														message: "->" + $dataCommonEvents[_tmp].name
													});
												}
											}, index * 3000);
											break;
										default:
											//console.log(typeof(obj[index].num));
											break;
									}
								});

								setTimeout(function () {
									// $.toaster({
									// 	message: "托管在<a href='http://666rpg.com'>666RPG.com</a>的游戏<a href='" + AXY.AjaxNetStuff.Param.URL + "'>《" + data.gamename + "》</a>感谢您的支持！"
									// });
									AXY_AjaxCoupon.hide();
								}, 3000);

							} else {
								console.log(data);
								$.toaster({
									message: data.info + ', ERRORCODE: ' + data.error,
									color: 'red'
								});
							};
							$('#AXYAjaxCouponButtonUse').attr("disabled", false);
							$('#AXYAjaxCouponButtonUse').val("兑换");
						},
						error: function (XMLHttpRequest, textStatus, errorThrown) {
							console.log(XMLHttpRequest);
							console.log(textStatus);
							console.log(errorThrown);
							$.toaster({
								title: 'ERROR: ',
								message: textStatus + ' ' + errorThrown,
								color: 'red'
							});
							$('#AXYAjaxCouponButtonUse').attr("disabled", false);
							$('#AXYAjaxCouponButtonUse').val("兑换");
						},
						complete: function (XMLHttpRequest, textStatus) {
							//console.log(XMLHttpRequest);
							//console.log(textStatus);
							//$.toaster({
							//	title: 'COMPLETE: ',
							//	message: textStatus,
							//	color: 'gray'
							//});
							$('#AXYAjaxCouponButtonUse').attr("disabled", false);
							$('#AXYAjaxCouponButtonUse').val("兑换");
						}
					});
					//}
				});
				$('#AXYAjaxCouponButtonClear').unbind('click touchstart').bind('click touchstart', function () {
					$('#AXYAjaxCouponInput').val('').focus();
				});
				$('#AXYAjaxCouponButtonClose').unbind('click touchstart').bind('click touchstart', function () {
					AXY_AjaxCoupon.hide();
				});
			},
			hide: function () {
				$('#AXYAjaxCoupon').stop().animate({
					"width": "0"
				}, "normal", function () {
					$(this).hide();
					$(this).remove();
					$gameSystem.setTouchMoveEnabled(true);
				});
			}
		};
	}

}
//offline
else {

}