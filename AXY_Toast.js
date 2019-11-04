//=============================================================================
// XueYu Plugins - Toast
// AXY_Toast.js
// Version: 1.09
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.09 This plugin support android toast with many args.
 * @author XueYu Plugins
 *
 * @param X
 * @desc The x position of toast box.
 * @default 10
 *
 * @param Y
 * @desc The y position of toast box.
 * @default 10
 *
 * @param Width
 * @desc The toast box width.
 * @default 300
 *
 * @param margin
 * @desc The space outer toast box.
 * @default 10
 *
 * @param padding
 * @desc The space inner toast box.
 * @default 10
 *
 * @param backgroundcolor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default rgba(0,0,0,0.7)
 *
 * @param opacity
 * @desc The css opacity. 0-1
 * @default 1
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
 * @default true
 *
 * @param DisplayGainItem
 * @desc Display gainItem? true/false
 * @default true
 *
 * @param DisplayChangeExp
 * @desc Display changeExp? true/false
 * @default true
 *
 * @param DisplayLevelUp
 * @desc Display levelUp? true/false
 * @default true
 *
 * @param DisplayLevelDown
 * @desc Display levelDown? true/false
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
 * @desc Write custom tips template. Tags:{$prefixtext},{$amount},{$name},\G
 * leave blank to use plugin default.
 * @default {$prefixtext}<span style="color:white">{$amount}</span>个<span style="color:#00FF00">{$name}</span>
 *
 * @param DisplayMapInfo
 * @desc Display MapInfo? true/false
 * @default true
 *
 * @param DisableSystemDisplayMapName
 * @desc Disable System Display MapName? true/false
 * @default true
 *
 * @param CustomMapInfoTemplate
 * @desc Write custom MapInfo template. Tags:{$mapDisplayName},{$mapName},{$mapID},{$mapOrder},{$mapParentName},{$mapParentID},{$mapBGM},{$mapBGS}
 * @default "{$mapDisplayName}<br>MapName: {$mapName}<br>MapID: {$mapID}<br>MapOrder: {$mapOrder}<br>MapParentName: {$mapParentName}<br>MapParentID: {$mapParentID}<br>MapBGM: {$mapBGM}<br>MapBGS: {$mapBGS}"
 *
 * @help
 * Introduction
 * This plugin support android toast with many args.
 * 
 * Example script command:
 * $.toaster({ message : 'hi, world!'});
 * $.toaster({ msg : "'hi, world!'+$gameVariables.value(1)"});
 * all args with default:
 * $.toaster({ title:'error', msg : "'error code is 1'", color:'red',fontfamily:'GameFont', fontsize:'20', textshadowcolor:'rgba(0,0,0,1)', textshadowwidth:'1'});
 * AXY.Toast.Param.DisplayGainItem = true;
 * AXY.Toast.Param.DisplayGainItem = false;
 * and others DisplayGainGold, DisplayChangeExp, DisplayLevelUp etc.;
 *
 * changelog
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
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Toast = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Toast = AXY.Toast || {};

AXY.Toast.Parameters = PluginManager.parameters('AXY_Toast');
AXY.Toast.Param = AXY.Toast.Param || {};

//
AXY.Toast.Param.X = parseInt(AXY.Toast.Parameters['X']);
AXY.Toast.Param.Y = parseInt(AXY.Toast.Parameters['Y']);
AXY.Toast.Param.Width = parseInt(AXY.Toast.Parameters['Width']);
AXY.Toast.Param.margin = String(AXY.Toast.Parameters['margin']);
AXY.Toast.Param.padding = String(AXY.Toast.Parameters['padding']);
AXY.Toast.Param.backgroundcolor = String(AXY.Toast.Parameters['backgroundcolor']);
AXY.Toast.Param.opacity = parseFloat(AXY.Toast.Parameters['opacity']);
AXY.Toast.Param.TextColor = String(AXY.Toast.Parameters['TextColor']);
AXY.Toast.Param.fontsize = parseInt(AXY.Toast.Parameters['fontsize']);
AXY.Toast.Param.timeout = parseInt(AXY.Toast.Parameters['timeout']);
AXY.Toast.Param.fade = String(AXY.Toast.Parameters['fade']);
AXY.Toast.Param.zIndex = parseInt(AXY.Toast.Parameters['zIndex']);
AXY.Toast.Param.DisplayGainGold = AXY.Toast.Parameters['DisplayGainGold'].toLowerCase() === 'true';
AXY.Toast.Param.DisplayGainItem = AXY.Toast.Parameters['DisplayGainItem'].toLowerCase() === 'true';
AXY.Toast.Param.DisplayChangeExp = AXY.Toast.Parameters['DisplayChangeExp'].toLowerCase() === 'true';
AXY.Toast.Param.DisplayLevelUp = AXY.Toast.Parameters['DisplayLevelUp'].toLowerCase() === 'true';
AXY.Toast.Param.DisplayLevelDown = AXY.Toast.Parameters['DisplayLevelDown'].toLowerCase() === 'true';
AXY.Toast.Param.PositivePrefixText = String(AXY.Toast.Parameters['PositivePrefixText']);
AXY.Toast.Param.NegativePrefixText = String(AXY.Toast.Parameters['NegativePrefixText']);
AXY.Toast.Param.CustomTipsTemplate = String(AXY.Toast.Parameters['CustomTipsTemplate']);
AXY.Toast.Param.DisplayMapInfo = AXY.Toast.Parameters['DisplayMapInfo'].toLowerCase() === 'true';
AXY.Toast.Param.DisableSystemDisplayMapName = AXY.Toast.Parameters['DisableSystemDisplayMapName'].toLowerCase() === 'true';
AXY.Toast.Param.CustomMapInfoTemplate = String(AXY.Toast.Parameters['CustomMapInfoTemplate']);



/***********************************************************************************
* Add Array.indexOf                                                                *
***********************************************************************************/
(function ()
{
	if (typeof Array.prototype.indexOf !== 'function')
	{
		Array.prototype.indexOf = function(searchElement, fromIndex)
		{
			for (var i = (fromIndex || 0), j = this.length; i < j; i += 1)
			{
				if ((searchElement === undefined) || (searchElement === null))
				{
					if (this[i] === searchElement)
					{
						return i;
					}
				}
				else if (this[i] === searchElement)
				{
					return i;
				}
			}
			return -1;
		};
	}
})();
/**********************************************************************************/

(function ($,undefined)
{
	var toasting =
	{
		gettoaster : function ()
		{
			var toaster = $('#' + settings.toaster.id);
			if(toaster.length < 1)
			{
				toaster = $(settings.toaster.template).attr('id', settings.toaster.id).css(settings.toaster.css).addClass(settings.toaster['class']);
				if ((settings.stylesheet) && (!$("link[href=" + settings.stylesheet + "]").length))
				{
					$('head').appendTo('<link rel="stylesheet" href="' + settings.stylesheet + '">');
				}
				$(settings.toaster.container).append(toaster);
			}
			return toaster;
		},
		
		notify : function (title, message, priority, color, fontfamily, fontsize, textshadowcolor, textshadowwidth)
		{
			var $toaster = this.gettoaster();
			var $toast  = $(settings.toast.template.replace('%priority%', priority)).hide().css(settings.toast.css).addClass(settings.toast['class']);
			//console.log('notify='+Window_Base.prototype.standardFontFace);
			//console.log(Bitmap.fontFace);
			$toast.css('font-family', fontfamily ? fontfamily : ($gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'));
			$('.title', $toast).css(settings.toast.csst).html(title);
			$('.message', $toast).css(settings.toast.cssm).html(message);

			/*console.log(Graphics.width+','+Graphics.height);
			var s = ""; 
			s += " 网页正文全文宽："+ document.body.scrollWidth; 
			s += " 网页正文全文高："+ document.body.scrollHeight; 
			s += " 网页正文部分上：" +window.screenTop; 
			s += " 网页正文部分左：" +window.screenLeft; 

			console.log(s);
			console.log(document.body);
			console.log($('body'));
			console.log($('#UpperCanvas'));
			console.log($('#UpperCanvas')[0].scrollHeight);*/
			
			if(document.body.scrollWidth > $('#UpperCanvas')[0].scrollWidth){
				var w = AXY.Toast.Param.X + (document.body.scrollWidth - $('#UpperCanvas')[0].scrollWidth) / 2;
				console.log(w);
				$toaster.css('left', w+'px');
			}
			if(document.body.scrollHeight > $('#UpperCanvas')[0].scrollHeight){
				var h = AXY.Toast.Param.Y + (document.body.scrollHeight - $('#UpperCanvas')[0].scrollHeight) / 2;
				console.log(h);
				$toaster.css('top', h+'px');
			}

			if(color){
				//$('.title', $toast).css('color', color);
				//$('.message', $toast).css('color', color);
				$toast.css('color', color);
			}
			if(fontsize){
				$toast.css('font-size', fontsize+'px');
			}
			if(!textshadowcolor){
				textshadowcolor = String(AXY.Toast.Parameters['TextShadowColor']);
			}
			if(!textshadowwidth){
				textshadowwidth = String(AXY.Toast.Parameters['TextShadowWidth']);
			}
			$toast.css('text-shadow', textshadowcolor+' '+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 '+textshadowwidth+'px 0,'+textshadowcolor+' -'+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 -'+textshadowwidth+'px 0');
			$toast.css('-webkit-text-shadow', textshadowcolor+' '+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 '+textshadowwidth+'px 0,'+textshadowcolor+' -'+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 -'+textshadowwidth+'px 0');
			$toast.css('-moz-text-shadow', textshadowcolor+' '+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 '+textshadowwidth+'px 0,'+textshadowcolor+' -'+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 -'+textshadowwidth+'px 0');
			$toast.css('*filter', 'Glow(color='+textshadowcolor+', strength='+textshadowwidth+')');

			
			if ((settings.debug) && (window.console))
			{
				console.log(toast);
			}

			$toaster.append(settings.toast.display($toast));

			if (settings.donotdismiss.indexOf(priority) === -1)
			{
				var timeout = (typeof settings.timeout === 'number') ? settings.timeout : ((typeof settings.timeout === 'object') && (priority in settings.timeout)) ? settings.timeout[priority] : 1500;
				setTimeout(function()
				{
					settings.toast.remove($toast, function()
					{
						$toast.remove();
					});
				}, timeout);
			}
		}
	};
	//console.log('def='+Window_Base.prototype.standardFontFace);
	var defaults =
	{
		'toaster'         :
		{
			'id'        : 'toaster',
			'container' : 'body',
			'template'  : '<div></div>',
			'class'     : 'toaster',
			'css'       :
			{
				'position' : 'fixed',
				'left'    : AXY.Toast.Param.X+'px',
				'top'      : AXY.Toast.Param.Y+'px',
				'width'    : AXY.Toast.Param.Width+'px',
				'zIndex'   : AXY.Toast.Param.zIndex,
				'opacity'   : AXY.Toast.Param.opacity,
				'font-family'	:	$gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont',
				'text-shadow'	:	String(AXY.Toast.Parameters['TextShadowColor'])+' '+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0 0,'+String(AXY.Toast.Parameters['TextShadowColor'])+' 0 '+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0,'+String(AXY.Toast.Parameters['TextShadowColor'])+' -'+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0 0,'+String(AXY.Toast.Parameters['TextShadowColor'])+' 0 -'+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0',
				'-webkit-text-shadow'	:	String(AXY.Toast.Parameters['TextShadowColor'])+' '+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0 0,'+String(AXY.Toast.Parameters['TextShadowColor'])+' 0 '+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0,'+String(AXY.Toast.Parameters['TextShadowColor'])+' -'+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0 0,'+String(AXY.Toast.Parameters['TextShadowColor'])+' 0 -'+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0',
				'-moz-text-shadow'	:	String(AXY.Toast.Parameters['TextShadowColor'])+' '+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0 0,'+String(AXY.Toast.Parameters['TextShadowColor'])+' 0 '+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0,'+String(AXY.Toast.Parameters['TextShadowColor'])+' -'+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0 0,'+String(AXY.Toast.Parameters['TextShadowColor'])+' 0 -'+String(AXY.Toast.Parameters['TextShadowWidth'])+'px 0',
				'*filter'	:	'Glow(color='+String(AXY.Toast.Parameters['TextShadowColor'])+', strength='+String(AXY.Toast.Parameters['TextShadowWidth'])+')'
				
			}
		},

		'toast'       :
		{
			'template' :
			'<div id="toastMessage">' +
				'<span class="title"></span><span class="message"></span>' +
			'</div>',

			'css'      : 
			{
				'background-color'	:	AXY.Toast.Param.backgroundcolor,
				color	:	AXY.Toast.Param.TextColor,
				'font-size'	:	AXY.Toast.Param.fontsize+'px',
				padding	:	AXY.Toast.Param.padding+'px',
				margin	:	AXY.Toast.Param.margin+'px'
			},
			'cssm'     : {},
			'csst'     : { 'fontWeight' : 'bold' },

			'fade'     : AXY.Toast.Param.fade,

			'display'    : function ($toast)
			{
				return $toast.fadeIn(settings.toast.fade);
			},

			'remove'     : function ($toast, callback)
			{
				return $toast.animate(
					{
						opacity : '0',
						padding : '0px',
						margin  : '0px',
						height  : '0px'
					},
					{
						duration : settings.toast.fade,
						complete : callback
					}
				);
			}
		},

		'debug'        : false,
		'timeout'      : AXY.Toast.Param.timeout,
		'stylesheet'   : null,
		'donotdismiss' : []
	};

	var settings = {};
	$.extend(settings, defaults);

	$.toaster = function (options)
	{
		if (typeof options === 'object')
		{
			if ('settings' in options)
			{
				settings = $.extend(settings, options.settings);
			}

			var title    = ('title' in options) ? options.title : '';
			var message  = ('message' in options) ? options.message : null;
			var msg  = ('msg' in options) ? options.msg : null;
			var priority = ('priority' in options) ? options.priority : '';
			var color = ('color' in options) ? options.color : '';
			var fontfamily = ('fontfamily' in options) ? options.fontfamily : '';
			var fontsize = ('fontsize' in options) ? options.fontsize : '';
			var textshadowcolor = ('textshadowcolor' in options) ? options.textshadowcolor : '';
			var textshadowwidth = ('textshadowwidth' in options) ? options.textshadowwidth : '';
			
			message = msg ? eval(msg) : message;

			if (message !== null)
			{
				toasting.notify(title, message, priority, color, fontfamily, fontsize, textshadowcolor, textshadowwidth);
			}
		}
	};

	$.toaster.reset = function ()
	{
		settings = {};
		$.extend(settings, defaults);
	};
})(jQuery);

if(AXY.Toast.Param.DisplayGainGold){
	//获得金钱推送
	Game_Party.prototype.XY_Toast_old_gainGold = Game_Party.prototype.gainGold;
	Game_Party.prototype.gainGold = function(amount) {
		this.XY_Toast_old_gainGold(amount);
		
		if(amount == 0){
			return;
		}
		
		var msgStr = '';
		if(AXY.Toast.Param.CustomTipsTemplate != '' && AXY.Toast.Param.CustomTipsTemplate != null){
			switch(true){
				default:
					name = TextManager.currencyUnit;
					break;
			}
			msgStr = AXY.Toast.Param.CustomTipsTemplate;
			//,{$},{$},{$},{$},{$},{$},\G,\C,\N,\F...
			msgStr = msgStr.replace(/\{\$prefixtext\}/g, (amount > 0 ? AXY.Toast.Param.PositivePrefixText : AXY.Toast.Param.NegativePrefixText));
			msgStr = msgStr.replace(/\{\$amount\}/g, Math.abs(amount));
			msgStr = msgStr.replace(/\{\$name\}/g, name);
		}
		else{
			msgStr = (amount > 0 ? AXY.Toast.Param.PositivePrefixText : AXY.Toast.Param.NegativePrefixText) + Math.abs(amount) + name;
		}
		$.toaster({ message : msgStr});
	};
}
if(AXY.Toast.Param.DisplayGainItem){
	//获得物品推送
	AXY.Toast.gainItem = Game_Party.prototype.gainItem;
	Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
		AXY.Toast.gainItem.call(this,item,amount,includeEquip);
		if ( item == undefined || item.name == undefined || amount === 0){
			return;
		}
		
		var msgStr = '';
		if(AXY.Toast.Param.CustomTipsTemplate != '' && AXY.Toast.Param.CustomTipsTemplate != null){
			switch(true){
				default:
					name = item.name;
					break;
			}
			msgStr = AXY.Toast.Param.CustomTipsTemplate;
			//,{$},{$},{$},{$},{$},{$},\G,\C,\N,\F...
			msgStr = msgStr.replace(/\{\$prefixtext\}/g, (amount > 0 ? AXY.Toast.Param.PositivePrefixText : AXY.Toast.Param.NegativePrefixText));
			msgStr = msgStr.replace(/\{\$amount\}/g, Math.abs(amount));
			msgStr = msgStr.replace(/\{\$name\}/g, name);
		}
		else{
			msgStr = (amount > 0 ? AXY.Toast.Param.PositivePrefixText : AXY.Toast.Param.NegativePrefixText) + Math.abs(amount) + '个' + name;
		}
		if(AXY.Toast.Param.DisplayGainItem){
			$.toaster({ message : msgStr});
		}
	};
}
if(AXY.Toast.Param.DisplayChangeExp){
	//获得经验推送
	/*AXY.Toast.changeExp = Game_Actor.prototype.changeExp;
	Game_Actor.prototype.changeExp = function(exp, show) {
		AXY.Toast.changeExp.call(this);
		var tempexp = this._exp[this._classId];
		//this.XY_Toast_old_changeExp(exp, show);
		if(exp - tempexp == 0) return;
		$.toaster({ message : (exp - tempexp > 0 ? AXY.Toast.Param.PositivePrefixText : AXY.Toast.Param.NegativePrefixText) + Math.abs(exp - tempexp) + TextManager.expA });;
	};*/
	AXY.Toast.command315 = Game_Interpreter.prototype.command315;
	Game_Interpreter.prototype.command315 = function() {
		AXY.Toast.command315.call(this);
		var value = this.operateValue(this._params[2], this._params[3], this._params[4]);
		if(value === 0) return;
		var text = (value > 0 ? AXY.Toast.Param.PositivePrefixText : AXY.Toast.Param.NegativePrefixText) + Math.abs(value) + TextManager.expA;
		if(this._params[0] === 0 && this._params[1] === 0) {
			$.toaster({ msg : text});
		} else {
			this.iterateActorEx(this._params[0], this._params[1], function(actor) {
				var text_i = actor.name() + text;
				$.toaster({ msg : text_i});
			}.bind(this));
		}
		return true;
	};
}

if(AXY.Toast.Param.DisplayLevelUp){
	Game_Actor.prototype.displayLevelUp = function(newSkills) {
		var text = TextManager.levelUp.format(this._name, TextManager.level, this._level);
		$.toaster({ message : text });
		newSkills.forEach(function(skill) {
			$.toaster({ message : TextManager.obtainSkill.format(skill.name) });
		});
	};
}

if(AXY.Toast.Param.DisplayLevelDown){
	AXY.Toast.levelDown = Game_Actor.prototype.levelDown;
	Game_Actor.prototype.levelDown = function() {
		AXY.Toast.levelDown.call(this);
		var text = TextManager.levelUp.format(this._name, TextManager.level, this._level);
		$.toaster({ message : text });
	};
}

/*-------------------------------------------------------------------------
* Game_Actor
-------------------------------------------------------------------------*/
//---- Change Equipment
AXY.Toast.oldChangeEquip_method = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function(slotId, item) {
    if(AXY.Toast.Param.DisplayGainItem){
		AXY.Toast.Param.DisplayGainItem = false;
		AXY.Toast.oldChangeEquip_method.call(this,slotId,item);
		AXY.Toast.Param.DisplayGainItem = true;
	}
	else{
		AXY.Toast.oldChangeEquip_method.call(this,slotId,item);
	}
};

//---- Force Change Equipment
AXY.Toast.oldForceChangeEquip_method = Game_Actor.prototype.forceChangeEquip;
Game_Actor.prototype.forceChangeEquip = function(slotId, item) {
	if(AXY.Toast.Param.DisplayGainItem){
		AXY.Toast.Param.DisplayGainItem = false;
		AXY.Toast.oldForceChangeEquip_method.call(this,slotId,item);
		AXY.Toast.Param.DisplayGainItem = true;
	}
	else{
		AXY.Toast.oldForceChangeEquip_method.call(this,slotId,item);
	}
};

//---- Trade Item with Party
AXY.Toast.oldTradewithParty_method = Game_Actor.prototype.tradeItemWithParty;
Game_Actor.prototype.tradeItemWithParty = function(newItem, oldItem) {
	if(AXY.Toast.Param.DisplayGainItem){
		AXY.Toast.Param.DisplayGainItem = false;
		var bool = AXY.Toast.oldTradewithParty_method.call(this,newItem,oldItem);
		AXY.Toast.Param.DisplayGainItem = true;
	}
	else{
		var bool = AXY.Toast.oldTradewithParty_method.call(this,newItem,oldItem);
	}
    return bool;
};
//---- Handle Yanfly's methods
if (Imported.YEP_ItemCore === true) {
	AXY.Toast.oldInitIndepenEquips_method = Game_Actor.prototype.initIndependentEquips;
	Game_Actor.prototype.initIndependentEquips = function(equips) {
		if(AXY.Toast.Param.DisplayGainItem){
			AXY.Toast.Param.DisplayGainItem = false;
			AXY.Toast.oldInitIndepenEquips_method.call(this,equips);
			AXY.Toast.Param.DisplayGainItem = true;
		}
		else{
			AXY.Toast.oldInitIndepenEquips_method.call(this,equips);
		}
	};

	AXY.Toast.oldChangeEquipById_method = Game_Actor.prototype.changeEquipById;
	Game_Actor.prototype.changeEquipById = function(etypeId, itemId) {
		if(AXY.Toast.Param.DisplayGainItem){
			AXY.Toast.Param.DisplayGainItem = false;
			AXY.Toast.oldChangeEquipById_method.call(this,etypeId,itemId);
			AXY.Toast.Param.DisplayGainItem = true;
		}
		else{
			AXY.Toast.oldChangeEquipById_method.call(this,etypeId,itemId);
		}
	};
} //-Yanfly check


if(AXY.Toast.Param.DisplayMapInfo){
	//=============================================================================
	// ** Spriteset Map
	//=============================================================================

	//==============================
	// * Create Upper Layer
	//==============================
	var _alias_axy_toast_sprmap_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
	Spriteset_Map.prototype.createUpperLayer = function() {
		_alias_axy_toast_sprmap_createUpperLayer.call(this);
		
		if(AXY.Toast.Param.DisableSystemDisplayMapName){
			$gameMap.disableNameDisplay();
		}
		if(AXY.Toast.Param.DisplayMapInfo){
			var msgStr = '';
			msgStr = AXY.Toast.Param.CustomMapInfoTemplate;
			//{$mapDisplayName},{$mapName},{$mapID},{$mapOrder},{$mapParentName},{$mapParentID},{$mapBGM},{$mapBGS}
			msgStr = msgStr.replace(/\{\$mapDisplayName\}/g, $gameMap.displayName());
			msgStr = msgStr.replace(/\{\$mapName\}/g, $dataMapInfos[$gameMap._mapId].name);
			msgStr = msgStr.replace(/\{\$mapID\}/g, $gameMap._mapId);
			msgStr = msgStr.replace(/\{\$mapOrder\}/g, $dataMapInfos[$gameMap._mapId].order);
			msgStr = msgStr.replace(/\{\$mapParentName\}/g, ($dataMapInfos[$gameMap._mapId].parentId ? $dataMapInfos[$dataMapInfos[$gameMap._mapId].parentId].name : ''));
			msgStr = msgStr.replace(/\{\$mapParentID\}/g, $dataMapInfos[$gameMap._mapId].parentId);
			msgStr = msgStr.replace(/\{\$mapBGM\}/g, $dataMap.bgm.name);
			msgStr = msgStr.replace(/\{\$mapBGS\}/g, $dataMap.bgs.name);
			//$.toaster({ msg : "$gameMap.displayName()+'(MapName: '+$dataMapInfos[$gameMap._mapId].name+', MapID: '+$gameMap._mapId+', MapOrder: '+$dataMapInfos[$gameMap._mapId].order+', MapParentName: '+($dataMapInfos[$gameMap._mapId].parentId ? $dataMapInfos[$dataMapInfos[$gameMap._mapId].parentId].name : 0)+', MapParentID: '+$dataMapInfos[$gameMap._mapId].parentId+', MapBGM: '+$dataMap.bgm.name+', MapBGS: '+$dataMap.bgs.name+')'"});
			//"{$mapDisplayName}+'(MapName: '+{$mapName}+', MapID: '+{$mapID}+', MapOrder: '+{$mapOrder}+', MapParentName: '+{$mapParentName}+', MapParentID: '+{$mapParentID}+', MapBGM: '+{$mapBGM}+', MapBGS: '+{$mapBGS}+')'"
			$.toaster({ msg : msgStr});
		}
	};
}