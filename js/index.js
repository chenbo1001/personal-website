$(function() {
    new WOW({
        animateClass: 'animated',
        offset: 150
    }).init();
    $('.section_loading').fadeOut(400, function() {
        $(this).remove();
    });
    $('.down').click(function() {
        $('html,body').animate({
            scrollTop: $('#header').outerHeight()
        }, 300);
    });
    var imgs = [],
        cover = ['images/shenzhen.jpg', 'images/sichuan.jpg', 'images/my.jpg', 'images/sichuanme.jpg', 'images/xian.jpg', 'images/zhengan.jpg', 'images/taibaishan.jpg'];
    $('.pic').each(function(index) {
        var $this = $(this),
            src = $this.find('img').attr('src');
        $this.css('backgroundImage', 'url(' + src + ')').find('img').hide();
        imgs.push({
            cover: cover[index],
            thumb: src
        })
    });
    $('.pic').click(function() {
        var index = $(this).index();
        var aaa = gallery(imgs, index);
    });
    /**
     * [$audio 音乐播放]
     * @type {[audio]}
     */
    var $audio = $('#ui-audio').audio({
        auto: true, // 是否自动播放，默认是true
        stopMode: 'pause', // 停止模式是stop还是pause，默认stop
        audioUrl: './images/mymusic.mp3',
        steams: ["<img src='./images/icon-musical-note.png' />", "<img src='./images/icon-musical-note.png' />"],
        steamHeight: 34,
        steamWidth: 34
    });
    console.log("完整简历：https://holidaying.github.io/resume/");
    console.log("需要开发请加qq：289070369");

    var scrollLister = function() {
        var p = 0,
            t = 0;
        $(window).scroll(function(e) {
            p = $(this).scrollTop();
            if (t <= p) { //下滚  
                console.log("down")
            } else {   
                console.log("up")
            }
            setTimeout(function() {
                t = p;
            }, 0);
        });
        }
      scrollLister();
        // body...
    
});