//=============================================================================
// XueYu Plugins - Text
// AXY_Text.js
// Version: 1.02
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.02 This plugin show Text.
 * @author XueYu Plugins
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
 * @help
 * Introduction
 * This plugin support rmmv show Text.
 * Easy to use and powerful.
 * 
 * Importent:
 * Use "''" outerside your string and "" outerside your expression and with + to link them!
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
 * 1.02 2017.1.17
 * fix position issus on topleft align;
 * fix textshadow issus on topleft align;
 * 1.01 2017.1.5
 * add custom font-family, text-shadow and font-size.
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Text = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Text = AXY.Text || {};

AXY.Text.Parameters = PluginManager.parameters('AXY_Text');
AXY.Text.Param = AXY.Text.Param || {};

// 
AXY.Text.Param.Anchor = String(AXY.Text.Parameters['Anchor']);
AXY.Text.Param.X = String(AXY.Text.Parameters['X']);
AXY.Text.Param.Y = String(AXY.Text.Parameters['Y']);
AXY.Text.Param.Width = String(AXY.Text.Parameters['Width']);
AXY.Text.Param.Height = String(AXY.Text.Parameters['Height']);
AXY.Text.Param.opacity = parseFloat(AXY.Text.Parameters['opacity']);
AXY.Text.Param.zIndex = parseInt(AXY.Text.Parameters['zIndex']);
AXY.Text.Param.delay = parseInt(AXY.Text.Parameters['delay']);
AXY.Text.Param.path = String(AXY.Text.Parameters['path']);

//main
//Text
AXY_Text = {
	show: function () {
		//console.log(arguments);
		var AXYTextArgs 	=	 arguments[0] ? arguments[0] : {};
		var msg 	=	 AXYTextArgs['msg'] ? eval(String(AXYTextArgs['msg'])) : "";
		var delay	 	=	 AXYTextArgs['delay'] ? AXYTextArgs['delay'] : AXY.Text.Param.delay;
		var id			=	 AXYTextArgs['id'] ? AXYTextArgs['id'] : 1;
		var x			=	 AXYTextArgs['x'] != undefined ? eval(AXYTextArgs['x']) : eval(AXY.Text.Param.X);
		var y			=	 AXYTextArgs['y'] != undefined ? eval(AXYTextArgs['y']) : eval(AXY.Text.Param.Y);
		var width		=	 AXYTextArgs['width'] ? AXYTextArgs['width'] : AXY.Text.Param.Width;
		var height		=	 AXYTextArgs['height'] ? AXYTextArgs['height'] : AXY.Text.Param.Height;
		var opacity		=	 AXYTextArgs['opacity'] ? AXYTextArgs['opacity'] : AXY.Text.Param.opacity;
		var align		=	 AXYTextArgs['align'] ? AXYTextArgs['align'] : AXY.Text.Param.Anchor;
		var textalign		=	 AXYTextArgs['textalign'] ? AXYTextArgs['textalign'] : String(AXY.Text.Parameters['textalign']);
		var backgroundcolor		=	 AXYTextArgs['backgroundcolor'] ? AXYTextArgs['backgroundcolor'] : String(AXY.Text.Parameters['backgroundcolor']);
		var color		=	 AXYTextArgs['color'] ? AXYTextArgs['color'] : String(AXY.Text.Parameters['color']);
		var padding		=	 AXYTextArgs['padding'] ? AXYTextArgs['padding'] : String(AXY.Text.Parameters['padding']);;
		var fontfamily		=	 AXYTextArgs['fontfamily'] ? eval(AXYTextArgs['fontfamily']) : eval(String(AXY.Text.Parameters['fontfamily']));
		var fontsize		=	 AXYTextArgs['fontsize'] ? AXYTextArgs['fontsize'] : String(AXY.Text.Parameters['fontsize']);
		var textshadowcolor		=	 AXYTextArgs['textshadowcolor'] ? AXYTextArgs['textshadowcolor'] : String(AXY.Text.Parameters['TextShadowColor']);
		var textshadowwidth		=	 AXYTextArgs['textshadowwidth'] ? AXYTextArgs['textshadowwidth'] : String(AXY.Text.Parameters['TextShadowWidth']);

		var AXYTextEntity;
		var AXYTextTemplate = '<div id="AXYText'+id+'" class="AXYText" style="visibility:hidden;position:fixed;left:0px;top:0px;z-index:'+
		AXY.Text.Param.zIndex+';width:'+
		width+';height:'+
		height+';line-height:'+
		height+';text-align:'+
		textalign+';background-color:'+
		backgroundcolor+';color:'+
		color+';padding:'+
		padding+'px;opacity:'+
		opacity+';font-family:'+
		fontfamily+';font-size:'+
		fontsize+'px;">'+msg+'</div>';

		AXYTextEntity = $('body').append(AXYTextTemplate);
		/*console.log($("#AXYText"+id+""));
		console.log($("#AXYText"+id+"")[0].clientHeight);
		console.log($("#AXYText"+id+"")[0].clientWidth);
		console.log(window);
		
		console.log(width);
		console.log(height);*/
		//console.log(fontfamily);

		if(align == 'center'){
			//$("#AXYText"+id+"")[0].onload = function(){
				
				if(width.indexOf("px") != -1){
					var widthpx = width;
					var widthint = parseFloat(width);
				}
				else if(width == 'auto'){
					var widthint = $("#AXYText"+id+"")[0].clientWidth;
					var widthpx = '';
				}
				else{
					var widthint = $("#AXYText"+id+"")[0].clientWidth*parseFloat(width)/100;
					var widthpx = widthint+'px';
				}
				if(height.indexOf("px") != -1){
					var heightpx = height;
					var heightint = parseFloat(height);
				}
				else if(height == 'auto'){
					var heightint = $("#AXYText"+id+"")[0].clientHeight;
					var heightpx = '';
				}
				else{
					var heightint = $("#AXYText"+id+"")[0].clientHeight*parseFloat(height)/100;
					var heightpx = heightint+'px';
				}

				var imgx = widthint/2;
				var imgy = heightint/2;
				var divx = x-imgx;//*parseFloat(width)/100;
				var divy = y-imgy;//*parseFloat(height)/100;
				
				//console.log('img center point: imgx='+imgx+', imgy='+imgy);
				//console.log('screens left top: divx='+divx+', divy='+divy);
				//console.log('x='+parseFloat(width)/100+', y='+parseFloat(height)/100+', naturalWidth='+ $("#AXYText"+id+" img")[0].naturalWidth);
				//console.log('x='+x+', y='+y);
				//console.log('widthpx='+widthpx+', heightpx='+heightpx);
				//console.log('Graphics.width='+Graphics.width+', Graphics.height='+Graphics.height);
				//console.log(window);
				//var imgCenter = 
				
				$("#AXYText"+id+"").css({'width':widthpx,'height':heightpx,'line-height':heightpx});
				$("#AXYText"+id).css({left:divx+'px', top:divy+'px', visibility:'visible'});
				

			//}
		}
		else{
			$("#AXYText"+id).css({left:x+'px', top:y+'px', visibility:'visible'});
		}
		
		$("#AXYText"+id).css('font-family', fontfamily);
		$("#AXYText"+id).css('text-shadow', textshadowcolor+' '+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 '+textshadowwidth+'px 0,'+textshadowcolor+' -'+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 -'+textshadowwidth+'px 0');
		$("#AXYText"+id).css('-webkit-text-shadow', textshadowcolor+' '+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 '+textshadowwidth+'px 0,'+textshadowcolor+' -'+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 -'+textshadowwidth+'px 0');
		$("#AXYText"+id).css('-moz-text-shadow', textshadowcolor+' '+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 '+textshadowwidth+'px 0,'+textshadowcolor+' -'+textshadowwidth+'px 0 0,'+textshadowcolor+' 0 -'+textshadowwidth+'px 0');
		$("#AXYText"+id).css('*filter', 'Glow(color='+textshadowcolor+', strength='+textshadowwidth+')');
		
		if(delay>=1){
			setTimeout(function()
			{
				$('#AXYText'+id).remove();
			}, delay);
		}

		//console.log(css);
		//console.log($gameParty);
		//console.log($gameSystem);
		//console.log(TextManager.currencyUnit);

		//$('#AXYText'+id+' img').stop().show().animate({"width": "100%","height": "100%"}, "normal");
	},
	remove: function () {
		var id			=	 arguments[0] ? arguments[0] : 1;
		//console.log(id);
		//console.log('#AXYText'+id);
		$('#AXYText'+id).stop().animate({"width": "0","height": "0"}, "normal", function() {
			$(this).remove();
		});
	},
	removeall: function () {
		$('.AXYText').stop().animate({"width": "0","height": "0"}, "normal", function() {
			$(this).remove();
		});
	}
};