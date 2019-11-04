//=============================================================================
// A XueYu Plugins - Audio
// AXY_Audio.js
// Version: 1.02
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.02 Allows to Change Audio's staff.
 * @author A XueYu Plugins
 *
 * @param ForcePCAudioExt
 * @desc Force Audio Ext. Leave blank to use this priority list: .ogg, .m4a, .mp3, .flac, .wav, .webm, .aac, .opus. Default: .ogg
 * @default .ogg
 * 
 * @param ForceMobileAudioExt
 * @desc Force Audio Ext. Leave blank to use this priority list: .ogg, .m4a, .mp3, .flac, .wav, .webm, .aac, .opus. Default: .m4a
 * @default .m4a
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
 * This plugin allows to Change Audio's staff.
 * Example: 
 * 1.It's very simple, so there's no example.
 * 2.var support = AXY_Audio.showSupport(); //then you got a variable named as support that is your client support audios.
 *
 * changelog
 * 1.02 2019.10.11
 * add: support .wav, .webm, .aac, .opus;
 * add: SupportText and NotSupportText;
 * 1.01 2019.9.27
 * add: ForcePCAudioExt and ForceMobileAudioExt
 * change: priority list from .m4a, .ogg, .mp3, .flac to .ogg, .m4a, .mp3, .flac;
 * 1.0 2019.9.26
 * first release.
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Audio = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Audio = AXY.Audio || {};

AXY.Audio.Parameters = PluginManager.parameters('AXY_Audio');
AXY.Audio.Param = AXY.Audio.Param || {};

AXY.Audio.Param.ForcePCAudioExt = String(AXY.Audio.Parameters['ForcePCAudioExt']);
AXY.Audio.Param.ForceMobileAudioExt = String(AXY.Audio.Parameters['ForceMobileAudioExt']);
AXY.Audio.Param.SupportText = String(AXY.Audio.Parameters['SupportText']);
AXY.Audio.Param.NotSupportText = String(AXY.Audio.Parameters['NotSupportText']);

// Main
WebAudio._detectCodecs = function () {
	var audio = document.createElement('audio');
	if (audio.canPlayType) {
		this._canPlayOgg = audio.canPlayType('audio/ogg');
		this._canPlayM4a = audio.canPlayType('audio/mp4');
		this._canPlayMp3 = audio.canPlayType('audio/mp3');
		this._canPlayFlac = audio.canPlayType('audio/flac');
		this._canPlayWav = audio.canPlayType('audio/wav');
		this._canPlayWebm = audio.canPlayType('audio/webm');
		this._canPlayAac = audio.canPlayType('audio/aac');
		this._canPlayOpus = audio.canPlayType('audio/opus');
	}
};

AudioManager.audioFileExt = function () {
	if (Utils.isMobileDevice()) {
		if (AXY.Audio.Param.ForceMobileAudioExt) {
			return AXY.Audio.Param.ForceMobileAudioExt;
		} else {
			if (WebAudio.canPlayOgg()) {
				return '.ogg';
			} else if (WebAudio.canPlayM4a()) {
				return '.m4a';
			} else if (WebAudio._canPlayMp3) {
				return '.mp3';
			} else if (WebAudio._canPlayFlac) {
				return '.flac';
			} else if (WebAudio._canPlayWav) {
				return '.wav';
			} else if (WebAudio._canPlayWebm) {
				return '.webm';
			} else if (WebAudio._canPlayAac) {
				return '.aac';
			} else if (WebAudio._canPlayOpus) {
				return '.opus';
			}

		}
	} else {
		if (AXY.Audio.Param.ForcePCAudioExt) {
			return AXY.Audio.Param.ForcePCAudioExt;
		} else {
			if (WebAudio.canPlayOgg()) {
				return '.ogg';
			} else if (WebAudio.canPlayM4a()) {
				return '.m4a';
			} else if (WebAudio._canPlayMp3) {
				return '.mp3';
			} else if (WebAudio._canPlayFlac) {
				return '.flac';
			} else if (WebAudio._canPlayWav) {
				return '.wav';
			} else if (WebAudio._canPlayWebm) {
				return '.webm';
			} else if (WebAudio._canPlayAac) {
				return '.aac';
			} else if (WebAudio._canPlayOpus) {
				return '.opus';
			}
		}
	}
};

AXY_Audio = {
	showSupport: function () {
		var arr = new Array();
		arr.push('.ogg: ' + (WebAudio._canPlayOgg ? AXY.Audio.Param.SupportText : AXY.Audio.Param.NotSupportText))
		arr.push('.m4a: ' + (WebAudio._canPlayM4a ? AXY.Audio.Param.SupportText : AXY.Audio.Param.NotSupportText))
		arr.push('.mp3: ' + (WebAudio._canPlayMp3 ? AXY.Audio.Param.SupportText : AXY.Audio.Param.NotSupportText))
		arr.push('.flac: ' + (WebAudio._canPlayFlac ? AXY.Audio.Param.SupportText : AXY.Audio.Param.NotSupportText))
		arr.push('.wav: ' + (WebAudio._canPlayWav ? AXY.Audio.Param.SupportText : AXY.Audio.Param.NotSupportText))
		arr.push('.webm: ' + (WebAudio._canPlayWebm ? AXY.Audio.Param.SupportText : AXY.Audio.Param.NotSupportText))
		arr.push('.aac: ' + (WebAudio._canPlayAac ? AXY.Audio.Param.SupportText : AXY.Audio.Param.NotSupportText))
		arr.push('.opus: ' + (WebAudio._canPlayOpus ? AXY.Audio.Param.SupportText : AXY.Audio.Param.NotSupportText))
		return arr.join('\n')
	}
}

// Depends on AXY_Toast.js for handle Failed to load audio file to reduce interrupt.
/*
AudioManager.checkWebAudioError = function (webAudio) {
	if (webAudio && webAudio.isError()) {
		//throw new Error('Failed to load: ' + webAudio.url);
		$.toaster({
			message: 'Failed to load: ' + webAudio.url,
			color: 'red'
		});
	}
};
Graphics.printLoadingError = function (url) {
	if (this._errorPrinter && !this._errorShowed) {
		this._errorPrinter.innerHTML = this._makeErrorHtml('Loading Error', 'Failed to load: ' + url);
		var button = document.createElement('button');
		button.innerHTML = 'Retry';
		button.style.fontSize = '24px';
		button.style.color = '#ffffff';
		button.style.backgroundColor = '#000000';
		button.onmousedown = button.ontouchstart = function (event) {
			ResourceHandler.retry();
			event.stopPropagation();
		};
		this._errorPrinter.appendChild(button);
		this._loadingCount = -Infinity;
	}

};
*/