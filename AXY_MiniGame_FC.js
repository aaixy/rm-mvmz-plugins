//=============================================================================
// A XueYu Plugins - Mini Game FC
// AXY_MiniGame_FC.js
// Version: 1.0
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.0 This plugin show mini game FC.
 * @author A XueYu Plugins
 *
 * @param Anchor
 * @desc The MiniGame_FC Anchor point. topleft/center
 * @default center
 *
 * @param X
 * @desc The x position of MiniGame_FC. this is a eval param, so you can use Variables.
 * @default window.innerWidth/2
 *
 * @param Y
 * @desc The y position of MiniGame_FC. this is a eval param, so you can use Variables.
 * @default window.innerHeight/2
 *
 * @param Width
 * @desc The MiniGame_FC box width with auto, % percent or px.
 * @default auto
 *
 * @param Height
 * @desc The MiniGame_FC box height with auto, % percent or px.
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
 * @desc The MiniGame_FC life time. set to 0 to disable. unit is microseconds.
 * @default 1000
 *
 * @param MiniGame_FCalign
 * @desc The MiniGame_FC align. left/center/right
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
 * @desc The MiniGame_FC font family. this is a eval param, so you can use Variables.
 * @default $gameSystem ? Window_Base.prototype.standardFontFace : 'GameFont'
 *
 * @param fontsize
 * @desc The MiniGame_FC font size.
 * @default 20
 *
 * @param MiniGame_FCShadowColor
 * @desc #000000-#FFFFFF or RGBA(R,G,B,A) or red blue green yellow etc.
 * @default rgba(0,0,0,1)
 *
 * @param MiniGame_FCShadowWidth
 * @desc MiniGame_FC Shadow Width.
 * @default 1
 *
 * @help
 * Introduction
 * This plugin support rmmv show mini game MiniGame_FC.
 * Easy to use and powerful.
 *
 * Example:
 * AXY_MiniGame_FC.show();
 * AXY_MiniGame_FC.show('zzjb');
 * AXY_MiniGame_FC.remove();
 * AXY_MiniGame_FC.removeall();
 *
 *
 * changelog
 * 1.0 2019.12.18
 * first release;
 */

// Imported
var Imported = Imported || {};
Imported.AXY_MiniGame_FC = true;

// Parameter Variables
var AXY = AXY || {};
AXY.MiniGame_FC = AXY.MiniGame_FC || {};

AXY.MiniGame_FC.Parameters = PluginManager.parameters('AXY_MiniGame_FC');
AXY.MiniGame_FC.Param = AXY.MiniGame_FC.Param || {};

// 
AXY.MiniGame_FC.Param.Anchor = String(AXY.MiniGame_FC.Parameters['Anchor']);
AXY.MiniGame_FC.Param.X = String(AXY.MiniGame_FC.Parameters['X']);
AXY.MiniGame_FC.Param.Y = String(AXY.MiniGame_FC.Parameters['Y']);
AXY.MiniGame_FC.Param.Width = String(AXY.MiniGame_FC.Parameters['Width']);
AXY.MiniGame_FC.Param.Height = String(AXY.MiniGame_FC.Parameters['Height']);
AXY.MiniGame_FC.Param.opacity = parseFloat(AXY.MiniGame_FC.Parameters['opacity']);
AXY.MiniGame_FC.Param.zIndex = parseInt(AXY.MiniGame_FC.Parameters['zIndex']);
AXY.MiniGame_FC.Param.delay = parseInt(AXY.MiniGame_FC.Parameters['delay']);
AXY.MiniGame_FC.Param.path = String(AXY.MiniGame_FC.Parameters['path']);

//main
//MiniGame_FC
AXY_MiniGame_FC = {
	show: function (rom) {
		$gameSystem.setTouchMoveEnabled(false);
		//$gameMap._interpreter.setWaitMode('video');
		//$gameMap._interpreter.setWaitMode('message');
		$gameMessage.add('Playing game... Please do not disturb me!')
		$gameSystem.saveBgm();
		AudioManager.stopBgm();
		//console.log(arguments);
		var AXYMiniGame_FCArgs = arguments[1] ? arguments[1] : {};
		var msg = AXYMiniGame_FCArgs['msg'] ? eval(String(AXYMiniGame_FCArgs['msg'])) : "";
		var delay = AXYMiniGame_FCArgs['delay'] ? AXYMiniGame_FCArgs['delay'] : AXY.MiniGame_FC.Param.delay;
		var id = AXYMiniGame_FCArgs['id'] ? AXYMiniGame_FCArgs['id'] : 1;
		var x = AXYMiniGame_FCArgs['x'] != undefined ? eval(AXYMiniGame_FCArgs['x']) : eval(AXY.MiniGame_FC.Param.X);
		var y = AXYMiniGame_FCArgs['y'] != undefined ? eval(AXYMiniGame_FCArgs['y']) : eval(AXY.MiniGame_FC.Param.Y);
		var width = AXYMiniGame_FCArgs['width'] ? AXYMiniGame_FCArgs['width'] : AXY.MiniGame_FC.Param.Width;
		var height = AXYMiniGame_FCArgs['height'] ? AXYMiniGame_FCArgs['height'] : AXY.MiniGame_FC.Param.Height;
		var opacity = AXYMiniGame_FCArgs['opacity'] ? AXYMiniGame_FCArgs['opacity'] : AXY.MiniGame_FC.Param.opacity;
		var align = AXYMiniGame_FCArgs['align'] ? AXYMiniGame_FCArgs['align'] : AXY.MiniGame_FC.Param.Anchor;
		var MiniGame_FCalign = AXYMiniGame_FCArgs['MiniGame_FCalign'] ? AXYMiniGame_FCArgs['MiniGame_FCalign'] : String(AXY.MiniGame_FC.Parameters['MiniGame_FCalign']);
		var backgroundcolor = AXYMiniGame_FCArgs['backgroundcolor'] ? AXYMiniGame_FCArgs['backgroundcolor'] : String(AXY.MiniGame_FC.Parameters['backgroundcolor']);
		var color = AXYMiniGame_FCArgs['color'] ? AXYMiniGame_FCArgs['color'] : String(AXY.MiniGame_FC.Parameters['color']);
		var padding = AXYMiniGame_FCArgs['padding'] ? AXYMiniGame_FCArgs['padding'] : String(AXY.MiniGame_FC.Parameters['padding']);;
		var fontfamily = AXYMiniGame_FCArgs['fontfamily'] ? eval(AXYMiniGame_FCArgs['fontfamily']) : eval(String(AXY.MiniGame_FC.Parameters['fontfamily']));
		var fontsize = AXYMiniGame_FCArgs['fontsize'] ? AXYMiniGame_FCArgs['fontsize'] : String(AXY.MiniGame_FC.Parameters['fontsize']);
		var MiniGame_FCshadowcolor = AXYMiniGame_FCArgs['MiniGame_FCshadowcolor'] ? AXYMiniGame_FCArgs['MiniGame_FCshadowcolor'] : String(AXY.MiniGame_FC.Parameters['MiniGame_FCShadowColor']);
		var MiniGame_FCshadowwidth = AXYMiniGame_FCArgs['MiniGame_FCshadowwidth'] ? AXYMiniGame_FCArgs['MiniGame_FCshadowwidth'] : String(AXY.MiniGame_FC.Parameters['MiniGame_FCShadowWidth']);

		var AXYMiniGame_FCTemplate = '<div id="AXYMiniGame_FC' + id + '" class="AXYMiniGame_FC" style="visibility:hidden;position:fixed;left:0px;top:0px;z-index:' +
			AXY.MiniGame_FC.Param.zIndex + ';width:' +
			width + ';height:' +
			height + ';line-height:' +
			height + ';MiniGame_FC-align:' +
			MiniGame_FCalign + ';background-color:' +
			backgroundcolor + ';color:' +
			color + ';padding:' +
			padding + 'px;opacity:' +
			opacity + ';font-family:' +
			fontfamily + ';font-size:' +
			fontsize + 'px;"><div role="canvas">' + msg + '</div><div class="AXYAjaxButtonImg_FCController"><img src="img/system/Controller.png" class="AXYAjaxButton_FCController"></div><style type="text/css">.AXYAjaxButtonImg_FCController{position:fixed;margin:auto;left:0;right:0;top:0;bottom:0;pointer-events:none;z-index:' + AXY.MiniGame_FC.Param.zIndex + '}.AXYAjaxButtonImg_FCController img{width:100px;height:100px;opacity:0.5;pointer-events:auto;}</style></div>';

		$('body').append(AXYMiniGame_FCTemplate);
		/*$("#AXYMiniGame_FC"+id).load( "minigame/carrace/car.html", function( response, status, xhr ) {
			$("#AXYMiniGame_FC"+id).html(response);
		});*/
		$('.AXYAjaxButtonImg_FCController').unbind('click touchend').bind('click touchend', function () {
			AXY_MiniGame_FC.remove();
			//AudioManager.playSe(obj.soundEffect);
		});

		$.ajax({
			url: "minigame/fc/index.html",
			type: 'post',
			dataType: 'html',
			data: "",
			success: function (data) {
				$("#AXYMiniGame_FC" + id).find('[role="canvas"]').html(data);
				//console.log(data);
				//console.log($("#AXYMiniGame_FC"+id+""));
				//console.log($("#AXYMiniGame_FC" + id + "")[0].clientHeight);
				//console.log($("#AXYMiniGame_FC" + id + "")[0].clientWidth);
				if (align == 'center') {
					//$("#AXYMiniGame_FC"+id+"")[0].onload = function(){

					if (width.indexOf("px") != -1) {
						var widthpx = width;
						var widthint = parseFloat(width);
					} else if (width == 'auto') {
						var widthint = $("#AXYMiniGame_FC" + id + "")[0].clientWidth;
						var widthpx = '';
					} else {
						var widthint = $("#AXYMiniGame_FC" + id + "")[0].clientWidth * parseFloat(width) / 100;
						var widthpx = widthint + 'px';
					}
					if (height.indexOf("px") != -1) {
						var heightpx = height;
						var heightint = parseFloat(height);
					} else if (height == 'auto') {
						var heightint = $("#AXYMiniGame_FC" + id + "")[0].clientHeight;
						var heightpx = '';
					} else {
						var heightint = $("#AXYMiniGame_FC" + id + "")[0].clientHeight * parseFloat(height) / 100;
						var heightpx = heightint + 'px';
					}

					var imgx = widthint / 2;
					var imgy = heightint / 2;
					var divx = x - imgx; //*parseFloat(width)/100;
					var divy = y - imgy; //*parseFloat(height)/100;

					//console.log('img center point: imgx='+imgx+', imgy='+imgy);
					//console.log('screens left top: divx='+divx+', divy='+divy);
					//console.log('x='+parseFloat(width)/100+', y='+parseFloat(height)/100+', naturalWidth='+ $("#AXYMiniGame_FC"+id+" img")[0].naturalWidth);
					//console.log('x='+x+', y='+y);
					//console.log('widthpx='+widthpx+', heightpx='+heightpx);
					//console.log('Graphics.width='+Graphics.width+', Graphics.height='+Graphics.height);
					//console.log(window);
					//var imgCenter = 

					$("#AXYMiniGame_FC" + id + "").css({
						'width': widthpx,
						'height': heightpx,
						'line-height': heightpx
					});
					$("#AXYMiniGame_FC" + id).css({
						left: divx + 'px',
						top: divy + 'px',
						visibility: 'visible'
					});


					//}
				} else {
					$("#AXYMiniGame_FC" + id).css({
						left: x + 'px',
						top: y + 'px',
						visibility: 'visible'
					});
				}

				$("#AXYMiniGame_FC" + id).css('font-family', fontfamily);
				$("#AXYMiniGame_FC" + id).css('MiniGame_FC-shadow', MiniGame_FCshadowcolor + ' ' + MiniGame_FCshadowwidth + 'px 0 0,' + MiniGame_FCshadowcolor + ' 0 ' + MiniGame_FCshadowwidth + 'px 0,' + MiniGame_FCshadowcolor + ' -' + MiniGame_FCshadowwidth + 'px 0 0,' + MiniGame_FCshadowcolor + ' 0 -' + MiniGame_FCshadowwidth + 'px 0');
				$("#AXYMiniGame_FC" + id).css('-webkit-MiniGame_FC-shadow', MiniGame_FCshadowcolor + ' ' + MiniGame_FCshadowwidth + 'px 0 0,' + MiniGame_FCshadowcolor + ' 0 ' + MiniGame_FCshadowwidth + 'px 0,' + MiniGame_FCshadowcolor + ' -' + MiniGame_FCshadowwidth + 'px 0 0,' + MiniGame_FCshadowcolor + ' 0 -' + MiniGame_FCshadowwidth + 'px 0');
				$("#AXYMiniGame_FC" + id).css('-moz-MiniGame_FC-shadow', MiniGame_FCshadowcolor + ' ' + MiniGame_FCshadowwidth + 'px 0 0,' + MiniGame_FCshadowcolor + ' 0 ' + MiniGame_FCshadowwidth + 'px 0,' + MiniGame_FCshadowcolor + ' -' + MiniGame_FCshadowwidth + 'px 0 0,' + MiniGame_FCshadowcolor + ' 0 -' + MiniGame_FCshadowwidth + 'px 0');
				$("#AXYMiniGame_FC" + id).css('*filter', 'Glow(color=' + MiniGame_FCshadowcolor + ', strength=' + MiniGame_FCshadowwidth + ')');

				if (rom) {
					nes.ui.loadROM('minigame/fc/roms/' + rom + '.nes');
				} else {
					nes.ui.loadROM('minigame/fc/roms/Contra (U) [!].nes');
				}
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

		/*console.log($("#AXYMiniGame_FC"+id+""));
		console.log($("#AXYMiniGame_FC"+id+"")[0].clientHeight);
		console.log($("#AXYMiniGame_FC"+id+"")[0].clientWidth);
		console.log(window);
		
		console.log(width);
		console.log(height);*/
		//console.log(fontfamily);



		//console.log(css);
		//console.log($gameParty);
		//console.log($gameSystem);
		//console.log(MiniGame_FCManager.currencyUnit);

		//$('#AXYMiniGame_FC'+id+' img').stop().show().animate({"width": "100%","height": "100%"}, "normal");
	},
	remove: function () {
		$gameSystem.setTouchMoveEnabled(true);
		$gameMap._interpreter.setWaitMode('');
		$gameSystem.replayBgm();
		nes.stop();
		var id = arguments[0] ? arguments[0] : 1;
		var score = arguments[1] ? arguments[1] : 1;
		//console.log(id);
		//console.log('#AXYMiniGame_FC'+id);

		setTimeout(function () {
			$('#AXYMiniGame_FC' + id).stop().animate({
				"width": "0",
				"height": "0"
			}, "normal", function () {
				//$(this).empty();
				$(this).remove();
				//$(this) = null;
			});
			//$('#AXYMiniGame_FC'+id) = null;
			console.log($('#AXYMiniGame_FC' + id));
			$('#sence').empty();
			$('#sence').remove();
			console.log($('#sence'));
			console.log(window);
			$gameParty.gainGold(score);
		}, AXY.MiniGame_FC.Param.delay);
	},
	removeall: function () {
		$('.AXYMiniGame_FC').stop().animate({
			"width": "0",
			"height": "0"
		}, "normal", function () {
			$(this).remove();
		});
	}
};