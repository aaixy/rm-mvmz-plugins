//=============================================================================
// XueYu Plugins - Mini Game Car Race
// AXY_MiniGameCarRace.js
// Version: 1.0
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.0 This plugin show mini game MiniGameCarRace.
 * @author XueYu Plugins
 *
 * @param Anchor
 * @desc The MiniGameCarRace Anchor point. topleft/center
 * @default center
 *
 * @param X
 * @desc The x position of MiniGameCarRace. this is a eval param, so you can use Variables.
 * @default window.innerWidth/2
 *
 * @param Y
 * @desc The y position of MiniGameCarRace. this is a eval param, so you can use Variables.
 * @default window.innerHeight/2
 *
 * @param Width
 * @desc The MiniGameCarRace box width with auto, % percent or px.
 * @default auto
 *
 * @param Height
 * @desc The MiniGameCarRace box height with auto, % percent or px.
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
 * @desc The MiniGameCarRace life time. set to 0 to disable. unit is microseconds.
 * @default 1000
 *
 * @param MiniGameCarRacealign
 * @desc The MiniGameCarRace align. left/center/right
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
 * @desc The MiniGameCarRace font family. this is a eval param, so you can use Variables.
 * @default $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
 *
 * @param fontsize
 * @desc The MiniGameCarRace font size.
 * @default 20
 *
 * @param MiniGameCarRaceShadowColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default rgba(0,0,0,1)
 *
 * @param MiniGameCarRaceShadowWidth
 * @desc MiniGameCarRace Shadow Width.
 * @default 1
 *
 * @help
 * Introduction
 * This plugin support rmmv show mini game MiniGameCarRace.
 * Easy to use and powerful.
 *
 * Example:
 * AXY_MiniGameCarRace.show();
 * AXY_MiniGameCarRace.remove();

 *
 * changelog
 * 1.0 2017.1.29
 * first release;
 */

// Imported
var Imported = Imported || {};
Imported.AXY_MiniGameCarRace = true;

// Parameter Variables
var AXY = AXY || {};
AXY.MiniGameCarRace = AXY.MiniGameCarRace || {};

AXY.MiniGameCarRace.Parameters = PluginManager.parameters('AXY_MiniGameCarRace');
AXY.MiniGameCarRace.Param = AXY.MiniGameCarRace.Param || {};

// 
AXY.MiniGameCarRace.Param.Anchor = String(AXY.MiniGameCarRace.Parameters['Anchor']);
AXY.MiniGameCarRace.Param.X = String(AXY.MiniGameCarRace.Parameters['X']);
AXY.MiniGameCarRace.Param.Y = String(AXY.MiniGameCarRace.Parameters['Y']);
AXY.MiniGameCarRace.Param.Width = String(AXY.MiniGameCarRace.Parameters['Width']);
AXY.MiniGameCarRace.Param.Height = String(AXY.MiniGameCarRace.Parameters['Height']);
AXY.MiniGameCarRace.Param.opacity = parseFloat(AXY.MiniGameCarRace.Parameters['opacity']);
AXY.MiniGameCarRace.Param.zIndex = parseInt(AXY.MiniGameCarRace.Parameters['zIndex']);
AXY.MiniGameCarRace.Param.delay = parseInt(AXY.MiniGameCarRace.Parameters['delay']);
AXY.MiniGameCarRace.Param.path = String(AXY.MiniGameCarRace.Parameters['path']);

//main
//MiniGameCarRace
AXY_MiniGameCarRace = {
	show: function () {
		//console.log(arguments);
		var AXYMiniGameCarRaceArgs 	=	 arguments[0] ? arguments[0] : {};
		var msg 	=	 AXYMiniGameCarRaceArgs['msg'] ? eval(String(AXYMiniGameCarRaceArgs['msg'])) : "";
		var delay	 	=	 AXYMiniGameCarRaceArgs['delay'] ? AXYMiniGameCarRaceArgs['delay'] : AXY.MiniGameCarRace.Param.delay;
		var id			=	 AXYMiniGameCarRaceArgs['id'] ? AXYMiniGameCarRaceArgs['id'] : 1;
		var x			=	 AXYMiniGameCarRaceArgs['x'] != undefined ? eval(AXYMiniGameCarRaceArgs['x']) : eval(AXY.MiniGameCarRace.Param.X);
		var y			=	 AXYMiniGameCarRaceArgs['y'] != undefined ? eval(AXYMiniGameCarRaceArgs['y']) : eval(AXY.MiniGameCarRace.Param.Y);
		var width		=	 AXYMiniGameCarRaceArgs['width'] ? AXYMiniGameCarRaceArgs['width'] : AXY.MiniGameCarRace.Param.Width;
		var height		=	 AXYMiniGameCarRaceArgs['height'] ? AXYMiniGameCarRaceArgs['height'] : AXY.MiniGameCarRace.Param.Height;
		var opacity		=	 AXYMiniGameCarRaceArgs['opacity'] ? AXYMiniGameCarRaceArgs['opacity'] : AXY.MiniGameCarRace.Param.opacity;
		var align		=	 AXYMiniGameCarRaceArgs['align'] ? AXYMiniGameCarRaceArgs['align'] : AXY.MiniGameCarRace.Param.Anchor;
		var MiniGameCarRacealign		=	 AXYMiniGameCarRaceArgs['MiniGameCarRacealign'] ? AXYMiniGameCarRaceArgs['MiniGameCarRacealign'] : String(AXY.MiniGameCarRace.Parameters['MiniGameCarRacealign']);
		var backgroundcolor		=	 AXYMiniGameCarRaceArgs['backgroundcolor'] ? AXYMiniGameCarRaceArgs['backgroundcolor'] : String(AXY.MiniGameCarRace.Parameters['backgroundcolor']);
		var color		=	 AXYMiniGameCarRaceArgs['color'] ? AXYMiniGameCarRaceArgs['color'] : String(AXY.MiniGameCarRace.Parameters['color']);
		var padding		=	 AXYMiniGameCarRaceArgs['padding'] ? AXYMiniGameCarRaceArgs['padding'] : String(AXY.MiniGameCarRace.Parameters['padding']);;
		var fontfamily		=	 AXYMiniGameCarRaceArgs['fontfamily'] ? eval(AXYMiniGameCarRaceArgs['fontfamily']) : eval(String(AXY.MiniGameCarRace.Parameters['fontfamily']));
		var fontsize		=	 AXYMiniGameCarRaceArgs['fontsize'] ? AXYMiniGameCarRaceArgs['fontsize'] : String(AXY.MiniGameCarRace.Parameters['fontsize']);
		var MiniGameCarRaceshadowcolor		=	 AXYMiniGameCarRaceArgs['MiniGameCarRaceshadowcolor'] ? AXYMiniGameCarRaceArgs['MiniGameCarRaceshadowcolor'] : String(AXY.MiniGameCarRace.Parameters['MiniGameCarRaceShadowColor']);
		var MiniGameCarRaceshadowwidth		=	 AXYMiniGameCarRaceArgs['MiniGameCarRaceshadowwidth'] ? AXYMiniGameCarRaceArgs['MiniGameCarRaceshadowwidth'] : String(AXY.MiniGameCarRace.Parameters['MiniGameCarRaceShadowWidth']);

		var AXYMiniGameCarRaceTemplate = '<div id="AXYMiniGameCarRace'+id+'" class="AXYMiniGameCarRace" style="visibility:hidden;position:fixed;left:0px;top:0px;z-index:'+
		AXY.MiniGameCarRace.Param.zIndex+';width:'+
		width+';height:'+
		height+';line-height:'+
		height+';MiniGameCarRace-align:'+
		MiniGameCarRacealign+';background-color:'+
		backgroundcolor+';color:'+
		color+';padding:'+
		padding+'px;opacity:'+
		opacity+';font-family:'+
		fontfamily+';font-size:'+
		fontsize+'px;">'+msg+'</div>';

		$('body').append(AXYMiniGameCarRaceTemplate);
		/*$("#AXYMiniGameCarRace"+id).load( "minigame/carrace/car.html", function( response, status, xhr ) {
			$("#AXYMiniGameCarRace"+id).html(response);
		});*/
		
		$.ajax({
			url: "minigame/carrace/car.html",
			type: 'post',
			dataType: 'html',
			data: "",
			success: function (data) {
				$("#AXYMiniGameCarRace"+id).html(data);
				//console.log(data);
				//console.log($("#AXYMiniGameCarRace"+id+""));
				console.log($("#AXYMiniGameCarRace"+id+"")[0].clientHeight);
				console.log($("#AXYMiniGameCarRace"+id+"")[0].clientWidth);
				if(align == 'center'){
					//$("#AXYMiniGameCarRace"+id+"")[0].onload = function(){
						
						if(width.indexOf("px") != -1){
							var widthpx = width;
							var widthint = parseFloat(width);
						}
						else if(width == 'auto'){
							var widthint = $("#AXYMiniGameCarRace"+id+"")[0].clientWidth;
							var widthpx = '';
						}
						else{
							var widthint = $("#AXYMiniGameCarRace"+id+"")[0].clientWidth*parseFloat(width)/100;
							var widthpx = widthint+'px';
						}
						if(height.indexOf("px") != -1){
							var heightpx = height;
							var heightint = parseFloat(height);
						}
						else if(height == 'auto'){
							var heightint = $("#AXYMiniGameCarRace"+id+"")[0].clientHeight;
							var heightpx = '';
						}
						else{
							var heightint = $("#AXYMiniGameCarRace"+id+"")[0].clientHeight*parseFloat(height)/100;
							var heightpx = heightint+'px';
						}

						var imgx = widthint/2;
						var imgy = heightint/2;
						var divx = x-imgx;//*parseFloat(width)/100;
						var divy = y-imgy;//*parseFloat(height)/100;
						
						//console.log('img center point: imgx='+imgx+', imgy='+imgy);
						//console.log('screens left top: divx='+divx+', divy='+divy);
						//console.log('x='+parseFloat(width)/100+', y='+parseFloat(height)/100+', naturalWidth='+ $("#AXYMiniGameCarRace"+id+" img")[0].naturalWidth);
						//console.log('x='+x+', y='+y);
						//console.log('widthpx='+widthpx+', heightpx='+heightpx);
						//console.log('Graphics.width='+Graphics.width+', Graphics.height='+Graphics.height);
						//console.log(window);
						//var imgCenter = 
						
						$("#AXYMiniGameCarRace"+id+"").css({'width':widthpx,'height':heightpx,'line-height':heightpx});
						$("#AXYMiniGameCarRace"+id).css({left:divx+'px', top:divy+'px', visibility:'visible'});
						

					//}
				}
				else{
					$("#AXYMiniGameCarRace"+id).css({left:x+'px', top:y+'px', visibility:'visible'});
				}
				
				$("#AXYMiniGameCarRace"+id).css('font-family', fontfamily);
				$("#AXYMiniGameCarRace"+id).css('MiniGameCarRace-shadow', MiniGameCarRaceshadowcolor+' '+MiniGameCarRaceshadowwidth+'px 0 0,'+MiniGameCarRaceshadowcolor+' 0 '+MiniGameCarRaceshadowwidth+'px 0,'+MiniGameCarRaceshadowcolor+' -'+MiniGameCarRaceshadowwidth+'px 0 0,'+MiniGameCarRaceshadowcolor+' 0 -'+MiniGameCarRaceshadowwidth+'px 0');
				$("#AXYMiniGameCarRace"+id).css('-webkit-MiniGameCarRace-shadow', MiniGameCarRaceshadowcolor+' '+MiniGameCarRaceshadowwidth+'px 0 0,'+MiniGameCarRaceshadowcolor+' 0 '+MiniGameCarRaceshadowwidth+'px 0,'+MiniGameCarRaceshadowcolor+' -'+MiniGameCarRaceshadowwidth+'px 0 0,'+MiniGameCarRaceshadowcolor+' 0 -'+MiniGameCarRaceshadowwidth+'px 0');
				$("#AXYMiniGameCarRace"+id).css('-moz-MiniGameCarRace-shadow', MiniGameCarRaceshadowcolor+' '+MiniGameCarRaceshadowwidth+'px 0 0,'+MiniGameCarRaceshadowcolor+' 0 '+MiniGameCarRaceshadowwidth+'px 0,'+MiniGameCarRaceshadowcolor+' -'+MiniGameCarRaceshadowwidth+'px 0 0,'+MiniGameCarRaceshadowcolor+' 0 -'+MiniGameCarRaceshadowwidth+'px 0');
				$("#AXYMiniGameCarRace"+id).css('*filter', 'Glow(color='+MiniGameCarRaceshadowcolor+', strength='+MiniGameCarRaceshadowwidth+')');
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
			
		/*console.log($("#AXYMiniGameCarRace"+id+""));
		console.log($("#AXYMiniGameCarRace"+id+"")[0].clientHeight);
		console.log($("#AXYMiniGameCarRace"+id+"")[0].clientWidth);
		console.log(window);
		
		console.log(width);
		console.log(height);*/
		//console.log(fontfamily);

		

		//console.log(css);
		//console.log($gameParty);
		//console.log($gameSystem);
		//console.log(MiniGameCarRaceManager.currencyUnit);

		//$('#AXYMiniGameCarRace'+id+' img').stop().show().animate({"width": "100%","height": "100%"}, "normal");
	},
	remove: function () {
		var id			=	 arguments[0] ? arguments[0] : 1;
		var score			=	 arguments[1] ? arguments[1] : 1;
		//console.log(id);
		//console.log('#AXYMiniGameCarRace'+id);

		setTimeout(function()
		{
			$('#AXYMiniGameCarRace'+id).stop().animate({"width": "0","height": "0"}, "normal", function() {
				$(this).empty();
				$(this).remove();
			});
			//$('#AXYMiniGameCarRace'+id) = null;
			console.log($('#AXYMiniGameCarRace'+id));
			$('#sence').empty();
			$('#sence').remove();
			console.log($('#sence'));
			console.log(window);
			$gameParty.gainGold(score);
		}, AXY.MiniGameCarRace.Param.delay);
	},
	removeall: function () {
		$('.AXYMiniGameCarRace').stop().animate({"width": "0","height": "0"}, "normal", function() {
			$(this).remove();
		});
	}
};