(function(win){
	var util = {
		random : function(min, max){
			return (~~(Math.random() * (max - min + 1)) + min);
		},
		randomColor: function(){
			var red = this.random(0, 255);
			var green = this.random(0, 255);
			var blue = this.random(0, 255);
			return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
		},
		
		/*g: function(){
			return document.getElementById(arguments[0]);
		},*/
		
		getScroll: function() {
			var scrollx, scrolly;
			if (typeof(win.pageXOffset) == 'number') {
				scrollx = win.pageXOffset;
				scrolly = win.pageYOffset;
			} else {
				scrollx = document.documentElement.scrollLeft;
				scrolly = document.documentElement.scrollTop;
			}
			return {
				left: scrollx,
				top: scrolly
			};
		},
		
		getPosInDoc: function(target) {
			if (!target) {
				return null;
			}
			var left = 0,
				top = 0;
				
			do {
				left += target.offsetLeft || 0;
				top += target.offsetTop || 0;
				target = target.offsetParent;
			} while (target);
			
			return {
				left: left,
				top: top
			};
		}
	};
	
	win.util = util;
})(window);