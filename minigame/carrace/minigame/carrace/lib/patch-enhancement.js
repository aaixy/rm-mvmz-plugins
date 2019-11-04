(function(window){
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame || function() {
				//return setTimeout(arguments[0], 1000 / 60);
				return -1;
			} // return -1 if unsupported
})();

window.cancelRequestAnimFrame = (function() {
	return window.cancelAnimationFrame
			|| window.webkitCancelRequestAnimationFrame
			|| window.mozCancelRequestAnimationFrame
			|| window.oCancelRequestAnimationFrame
			|| window.msCancelRequestAnimationFrame || function() {
				return -1;
			} // return -1 if unsupported
})();

Array.prototype.indexOf = function(o){
	for(var i = 0, len = this.length; i < len; i++){
		if(this[i] === o){
			return i;
		}
	}
};


})(window);