$(function(){
    new WOW({
      animateClass: 'animated',
      offset: 150
    }).init();
    $('.section_loading').fadeOut(400,function(){
      $(this).remove();
    });
    $('.down').click(function(){
      $('html,body').animate({
        scrollTop: $('#header').outerHeight()
      },300);
    });
    
    var imgs = [],
        cover = [
          'images/shenzhen.jpg',
          'images/sichuan.jpg',
          'images/my.jpg',
          'images/sichuanme.jpg',
          'images/xian.jpg',
          'images/zhengan.jpg'
        ];    
    $('.pic').each(function(index){
      var $this = $(this),
          src = $this.find('img').attr('src');
      
      $this.css('backgroundImage','url(' + src + ')')
            .find('img').hide();
      imgs.push({
        cover : cover[index],
        thumb : src
      })
    });
    $('.pic').click(function(){
      var index = $(this).index();
      var aaa = gallery(imgs,index);
    });
    console.log("完整简历：https://holidaying.github.io/resume/");
    console.log("需要开发请加qq：289070369");
  });
