$("audio").ready(function(){
	/**
	 * 音频组件： 声音播放时，音符飘扬
	 */
	$.fn.audio = function(options){
		
		// 默认参数
		$.fn.audio.defaults = {
			auto: true,
			stopMode: 'stop',	// 另一个是pause
			audioUrl: '',
			steams: [],
			steamHeight: 54,
			steamWidth: 34
		};
		
		// 初始值继承
		var opts = $.extend({}, $.fn.audio.defaults, options);
		
		var $audio = $(this),
			$audioBtn = $audio.find('.audio-icon'),
			$audioTxt = $audio.find('.audio-txt'),
			$coffeeFlow = $audio.find('.coffee-flow'),
			isPlaying = opts.auto,
			textTimer = null;
			
		var zlow = function() {
			$audio.addClass('zlow');
		},
		
		show = function() {
			$audio.removeClass('zlow none');
		},
		
		event = function() {
			if ($audio.length == 0) {
				return;
			}

			$coffeeFlow.on('click', function(e) {
				e.preventDefault();
				
				audioContorl();
			});

			$(audio).on('play', function() {
				isPlaying = true;

//				audioTxt(true);
				$audioBtn.addClass('animated');
				$.fn.coffee.start();
				$audio.find('.coffee-steam-box').show(500);
			}).on('pause', function() {
				isPlaying = false;
//				audioTxt(false);
				$.fn.coffee.stop();
				$audioBtn.removeClass('animated');
				$audio.find('.coffee-steam-box').hide(500);
			});
			
		},

		audioTxt = function(val) {
			$audioTxt.text(val ? '打开' : '关闭');
			if (textTimer) {
				clearTimeout(textTimer);
			}

			$audioTxt.removeClass('animated hide');
			textTimer = setTimeout(function() {
				$audioTxt.addClass('animated').addClass('hide');
			}, 1000)
		},
		
		audioContorl = function() {
			if (isPlaying) {
				audioStop();
			} else {
				audioPlay();
			}
		},

		audioPlay = function() {
			audio && audio.play();
		},

		audioStop = function() {
			if (audio) {
				audio.pause();
				if (opts.stopMode == 'stop') {
					audio.currentTime = 0;
				}
			}
		},

		// 音乐总时间 单位s
		audioTotaltime = function() {
			$audio.duration;
		},

		// 音乐当前时间 单位s
		audioCurrenttime = function() {
			$audio.currentTime;
		},
		
		init = function() {
			$coffeeFlow.coffee({
				steams: opts.steams,
				steamHeight: opts.steamHeight,
				steamWidth: opts.steamWidth
			});
			
			var optionsAudio = {
				loop: false,
				preload: 'auto',
				src: opts.audioUrl,
				autoplay: opts.auto
			}
			audio = new Audio();
			audio.load();
			$('#ui-audio').hide();
			$(audio).get(0).addEventListener("loadeddata",function(){
				$('#ui-audio').show();
			})
			for (var key in optionsAudio) {
				if (optionsAudio.hasOwnProperty(key) && (key in audio)) {
					audio[key] = optionsAudio[key];
				}
			}
			event();
			// 播放声音
			var interval = setInterval(function() {
				if (!audio) return;
				show();
				
				clearInterval(interval);
			}, 1000);
				// 播放声音
			if (!audio) return;
			show();
			audio.play();

			// 声音启动
			$(document).one("touchstart", function() {
				audio.play();
			});
			
		};
		
		init();
		
		
		this.stop = function(){
			if (audio) {
				audio.pause();
				audio.currentTime = 0;
			}
		};
		
		this.pause = function(){
			if (audio) {
				audio.pause();
			}
		};
		
		return this;
	}
	
});