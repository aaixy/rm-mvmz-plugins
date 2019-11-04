//=============================================================================
// XueYu Plugins - Gif
// AXY_Gif.js
// Version: 1.1
// License: BSD
//=============================================================================
 /*:
 * @plugindesc v1.00 This plugin show gif, jpg, and many formats img from website or local.
 * @author XueYu Plugins
 *
 * @param Anchor
 * @desc The Img Anchor point. topleft/center
 * @default center
 *
 * @param X
 * @desc The x position of img. this is a eval param, so you can use Variables.
 * @default Graphics.width/2
 *
 * @param Y
 * @desc The y position of img. this is a eval param, so you can use Variables.
 * @default Graphics.height/2-90
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
 * @default img/gif/
 *
 * @help
 * Introduction
 * This plugin support rmmv show gif, jpg, and many formats img from website or local.
 * Easy to use and powerful.
 * 
 * Example:
 * show:
 * AXY_Gif.show({filename:'1.gif'});
 * AXY_Gif.show({filename:'1.jpg'});
 * AXY_Gif.show({filename:'url=img/faces/Actor1.png'});
 * AXY_Gif.show({filename:'1.gif',id:2});
 * AXY_Gif.show({id:3,filename:'1.gif',delay:3000});
 * AXY_Gif.show({x:0, y:0, align:'topleft', filename:'url=http://www.yourdomain.com/gif.jpg'});
 * AXY_Gif.show({x:0, y:0, align:'topleft', filename:'url=http://www.yourdomain.com/gif.gif'});
 * all args with default:
 * AXY_Gif.show({x:'Graphics.width/2', y:'Graphics.height/2-90', align:'center', filename:'1.gif',id:1,delay:0,width:'100%',height:'100%',opacity:1});
 * remove with id:
 * AXY_Gif.remove(1);
 * AXY_Gif.remove(2);
 * remove all:
 * AXY_Gif.removeall();
 *
 * Changelog
 * 1.1
 * x,y add evel().
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Gif = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Gif = AXY.Gif || {};

AXY.Gif.Parameters = PluginManager.parameters('AXY_Gif');
AXY.Gif.Param = AXY.Gif.Param || {};

// 
AXY.Gif.Param.Anchor = String(AXY.Gif.Parameters['Anchor']);
AXY.Gif.Param.X = String(AXY.Gif.Parameters['X']);
AXY.Gif.Param.Y = String(AXY.Gif.Parameters['Y']);
AXY.Gif.Param.Width = String(AXY.Gif.Parameters['Width']);
AXY.Gif.Param.Height = String(AXY.Gif.Parameters['Height']);
AXY.Gif.Param.opacity = parseFloat(AXY.Gif.Parameters['opacity']);
AXY.Gif.Param.zIndex = parseInt(AXY.Gif.Parameters['zIndex']);
AXY.Gif.Param.delay = parseInt(AXY.Gif.Parameters['delay']);
AXY.Gif.Param.path = String(AXY.Gif.Parameters['path']);

//main
//gif
AXY_Gif = {
	show: function () {
		//console.log(arguments[3]);
		var AXYGifArgs 	=	 arguments[0] ? arguments[0] : {};
		var filename 	=	 AXYGifArgs['filename'] ? AXYGifArgs['filename'] : "";
		var delay	 	=	 AXYGifArgs['delay'] ? AXYGifArgs['delay'] : AXY.Gif.Param.delay;
		var id			=	 AXYGifArgs['id'] ? AXYGifArgs['id'] : 1;
		var x			=	 AXYGifArgs['x'] != undefined ? eval(AXYGifArgs['x']) : eval(AXY.Gif.Param.X);
		var y			=	 AXYGifArgs['y'] != undefined ? eval(AXYGifArgs['y']) : eval(AXY.Gif.Param.Y);
		var width		=	 AXYGifArgs['width'] ? AXYGifArgs['width'] : AXY.Gif.Param.Width;
		var height		=	 AXYGifArgs['height'] ? AXYGifArgs['height'] : AXY.Gif.Param.Height;
		var opacity		=	 AXYGifArgs['opacity'] ? AXYGifArgs['opacity'] : AXY.Gif.Param.opacity;
		var align		=	 AXYGifArgs['align'] ? AXYGifArgs['align'] : AXY.Gif.Param.Anchor;
		
		if(filename.indexOf('url=') != -1){
			filename = filename.replace('url=', '');
		}
		else{
			filename = AXY.Gif.Param.path + filename;
		}
		
		var AXYGifEntity;
		var AXYGifTemplate = '<div id="AXYGif'+id+'" class="AXYGif" style="visibility:hidden;position:fixed;left:0px;top:0px;z-index:'+
		AXY.Gif.Param.zIndex+';"><img src="'+
		filename+'" style="width:'+
		width+';height:'+
		height+';opacity:'+
		opacity+';" /></div>';

		AXYGifEntity = $('body').append(AXYGifTemplate);
		
		if(align == 'center'){
			$("#AXYGif"+id+" img")[0].onload = function(){
				//alert('width = ' + this.naturalWidth + ' , height =' + this.naturalHeight);
				//console.log($("#AXYGif"+id+""));
				//console.log($("#AXYGif"+id+" img")[0].baseURI);
				//console.log($("#AXYGif"+id+" img")[0].currentSrc);
				//console.log($("#AXYGif"+id+" img")[0].clientHeight);
				//console.log($("#AXYGif"+id+" img")[0].naturalWidth);
				//console.log($("#AXYGif"+id+" img")[0].width);
				//console.log($("#AXYGif"+id+" img")[0].height);
				
				if(width.indexOf("px") != -1){
					var widthpx = width;
					var widthint = parseFloat(width);
				}
				else{
					var widthint = $("#AXYGif"+id+" img")[0].naturalWidth*parseFloat(width)/100;
					var widthpx = widthint+'px';
				}
				if(height.indexOf("px") != -1){
					var heightpx = height;
					var heightint = parseFloat(height);
				}
				else{
					var heightint = $("#AXYGif"+id+" img")[0].naturalHeight*parseFloat(height)/100;
					var heightpx = heightint+'px';
				}

				var imgx = widthint/2;
				var imgy = heightint/2;
				var divx = x-imgx;//*parseFloat(width)/100;
				var divy = y-imgy;//*parseFloat(height)/100;
				
				//console.log('img center point: imgx='+imgx+', imgy='+imgy);
				//console.log('screens left top: divx='+divx+', divy='+divy);
				//console.log('x='+parseFloat(width)/100+', y='+parseFloat(height)/100+', naturalWidth='+ $("#AXYGif"+id+" img")[0].naturalWidth);
				//console.log('x='+x+', y='+y);
				//console.log('widthpx='+widthpx+', heightpx='+heightpx);
				//console.log('Graphics.width='+Graphics.width+', Graphics.height='+Graphics.height);
				//console.log(window);
				//var imgCenter = 
				
				$("#AXYGif"+id+" img").css({'width':widthpx,'height':heightpx});
				$("#AXYGif"+id).css({left:divx+'px', top:divy+'px', visibility:'visible'});
			}
		}
		else{
			$("#AXYGif"+id).css({left:x, top:y, visibility:'visible'});
		}
		
		if(delay>=1){
			setTimeout(function()
			{
				$('#AXYGif'+id).remove();
			}, delay);
		}

		//console.log(css);
		//console.log($gameParty);
		//console.log($gameSystem);
		//console.log(TextManager.currencyUnit);

		//$('#AXYGif'+id+' img').stop().show().animate({"width": "100%","height": "100%"}, "normal");
	},
	remove: function () {
		var id			=	 arguments[0] ? arguments[0] : 1;
		$('#AXYGif'+id).stop().animate({"width": "0","height": "0"}, "normal", function() {
			$(this).remove();
		});
	},
	removeall: function () {
		$('.AXYGif').stop().animate({"width": "0","height": "0"}, "normal", function() {
			$(this).remove();
		});
	}
};