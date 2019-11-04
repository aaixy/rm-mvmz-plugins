//=============================================================================
// A XueYu Plugins - Video
// AXY_Video.js
// Version: 1.01
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.01 Allows to Change Video's staff.
 * @author A XueYu Plugins
 *
 * @param ForcePCVideoExt
 * @desc Force Video Ext. Leave blank to use this priority list: .webm, .mp4, .ogv. Default: .webm
 * @default .webm
 * 
 * @param ForceMobileVideoExt
 * @desc Force Video Ext. Leave blank to use this priority list: .webm, .mp4, .ogv. Default: .mp4
 * @default .mp4
 * 
 * @param SupportText
 * @desc Support Text. Default: Support
 * @default Support
 * 
 * @param NotSupportText
 * @desc Not Support Text. Default: Not Support
 * @default Not Support
 *
 * @help
 * Introduction
 * This plugin allows to Change Video's staff.
 * Example: 
 * 1.var support = AXY_Video.showSupport(); //then you got a variable named as support that is your client support videos;
 * 2.AXY_Video.play('test.mov') in script, test.mov in movies folder;
 * 3.known issus: must add event such as show text after AXY_Video.play('test.mov'), or the after one will covere before one;
 *
 * changelog
 * 1.01 2019.10.14
 * add: x5 support, with x5 engine core, you can play h265 with hardware acceleration and more then 28 video formats, such as avi,mov,mkv,ts,m2ts,3gp,flv,rmvb...etc.
 * add: more h265 detectCodecs;
 * 1.0 2019.10.11
 * first release.
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Video = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Video = AXY.Video || {};

AXY.Video.Parameters = PluginManager.parameters('AXY_Video');
AXY.Video.Param = AXY.Video.Param || {};
AXY.Video.Alias = AXY.Video.Alias || {};

AXY.Video.Param.ForcePCVideoExt = String(AXY.Video.Parameters['ForcePCVideoExt']);
AXY.Video.Param.ForceMobileVideoExt = String(AXY.Video.Parameters['ForceMobileVideoExt']);
AXY.Video.Param.SupportText = String(AXY.Video.Parameters['SupportText']);
AXY.Video.Param.NotSupportText = String(AXY.Video.Parameters['NotSupportText']);

// Main
AXY.Video._detectCodecs = function () {
	var video = document.createElement('video');
	if (video.canPlayType) {
		this._canPlayWebmVP9 = video.canPlayType('video/webm; codecs="vp9, opus"');
		this._canPlayWebmVP8 = video.canPlayType('video/webm; codecs="vp8, vorbis"');
		this._canPlayMp4 = video.canPlayType('video/mp4');
		this._canPlayMp4H264 = video.canPlayType('video/mp4; codecs="avc1"');
		this._canPlayMp4AVC1MP4A = video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
		this._canPlayMp4H265 = video.canPlayType('video/mp4; codecs="hev1"') ||
			video.canPlayType('video/h265') ||
			video.canPlayType('video/hevc') ||
			video.canPlayType('video/mp4; codecs="hevc"') ||
			video.canPlayType('video/mp4; codecs="h265"') ||
			video.canPlayType('video/mp4; codecs="h.265"');
		this._canPlayOgg = video.canPlayType('video/ogg; codecs="theora, vorbis"');
	}
}
AXY.Video._detectCodecs()

Game_Interpreter.prototype.videoFileExt = function () {
	if (Utils.isMobileDevice()) {
		if (AXY.Video.Param.ForceMobileVideoExt) {
			return AXY.Video.Param.ForceMobileVideoExt;
		} else {
			if (AXY.Video._canPlayWebmVP9) {
				return '.webm';
			} else if (AXY.Video._canPlayWebmVP8) {
				return '.webm';
			} else if (AXY.Video._canPlayMp4) {
				return '.mp4';
			} else if (AXY.Video._canPlayMp4H264) {
				return '.mp4';
			} else if (AXY.Video._canPlayMp4AVC1MP4A) {
				return '.mp4';
			} else if (AXY.Video._canPlayMp4H265) {
				return '.mp4';
			} else if (AXY.Video._canPlayOgg) {
				return '.ogv';
			}
		}
	} else {
		if (AXY.Video.Param.ForcePCVideoExt) {
			return AXY.Video.Param.ForcePCVideoExt;
		} else {
			if (AXY.Video._canPlayWebmVP9) {
				return '.webm';
			} else if (AXY.Video._canPlayWebmVP8) {
				return '.webm';
			} else if (AXY.Video._canPlayMp4) {
				return '.mp4';
			} else if (AXY.Video._canPlayMp4H264) {
				return '.mp4';
			} else if (AXY.Video._canPlayMp4AVC1MP4A) {
				return '.mp4';
			} else if (AXY.Video._canPlayMp4H265) {
				return '.mp4';
			} else if (AXY.Video._canPlayOgg) {
				return '.ogv';
			}
		}
	}
};

AXY_Video = {
	showSupport: function () {
		var arr = new Array();
		arr.push('.webm(codecs="vp9, opus"): ' + (AXY.Video._canPlayWebmVP9 ? AXY.Video.Param.SupportText : AXY.Video.Param.NotSupportText))
		arr.push('.webm(codecs="vp8, vorbis"): ' + (AXY.Video._canPlayWebmVP8 ? AXY.Video.Param.SupportText : AXY.Video.Param.NotSupportText))
		arr.push('.mp4(codecs="avc/h264"): ' + (AXY.Video._canPlayMp4 ? AXY.Video.Param.SupportText : AXY.Video.Param.NotSupportText))
		arr.push('.mp4(codecs="avc1"): ' + (AXY.Video._canPlayMp4H264 ? AXY.Video.Param.SupportText : AXY.Video.Param.NotSupportText))
		arr.push('.mp4(codecs="avc1.42E01E, mp4a.40.2"): ' + (AXY.Video._canPlayMp4AVC1MP4A ? AXY.Video.Param.SupportText : AXY.Video.Param.NotSupportText))
		arr.push('.mp4(codecs="hevc/h265"): ' + (AXY.Video._canPlayMp4H265 ? AXY.Video.Param.SupportText : AXY.Video.Param.NotSupportText))
		arr.push('.ogv(codecs="theora, vorbis"): ' + (AXY.Video._canPlayOgg ? AXY.Video.Param.SupportText : AXY.Video.Param.NotSupportText))
		return arr.join('\n')
	},
	play: function (name) {
		//$gameSystem.saveBgm();
		//Graphics.AXY_playVideo('movies/' + name)
		Graphics.playVideo('movies/' + name)
		Graphics.isVideoPlaying();
		Game_Interpreter._waitMode = 'video'
		Game_Interpreter._index++;
		//$gameSystem.replayBgm();
	}
}

Graphics._createVideo = function () {
	this._video = document.createElement('video');
	this._video.id = 'GameVideo';
	this._video.style.opacity = 0;
	this._video.setAttribute('playsinline', '');
	this._video.setAttribute('x5-video-player-type', 'h5');
	this._video.setAttribute('x5-video-orientation', 'landscape');
	this._video.setAttribute('x5-video-player-fullscreen', 'true');
	this._video.volume = this._videoVolume;
	this._updateVideo();
	makeVideoPlayableInline(this._video);
	document.body.appendChild(this._video);
};

Graphics.playVideo = function (src) {
	this._videoLoader = ResourceHandler.createLoader(null, this._playVideo.bind(this, src), this._onVideoError.bind(this));
	this._playVideo(src);
};

Graphics._playVideo = function (src) {
	this._video.src = src;
	this._video.onloadeddata = this._onVideoLoad.bind(this);
	this._video.onerror = this._videoLoader;
	this._video.onended = this._onVideoEnd.bind(this);
	//this._video.load();
	this._videoLoading = true;
};


Graphics.AXY_playVideo = function (src) {
	this._video.src = src;
	this._video.onloadeddata = this._onVideoLoad.bind(this);
	this._video.onerror = this._videoLoader;
	this._video.onended = this._onVideoEnd.bind(this);
	this._videoLoading = true;
};

//Graphics._updateVisibility = function (videoVisible) {
//this._video.style.opacity = videoVisible ? 1 : 0;
//this._canvas.style.opacity = videoVisible ? 0 : 1;
//this._video.style.visibility = videoVisible ? 'visible' : 'hidden';
//this._canvas.style.visibility = videoVisible ? 'hidden' : 'visible';
//console.log(this._video.src + ' play end, move on next video')
//console.log(this._video.style.opacity)
//console.log(this._canvas.style.opacity)
//};