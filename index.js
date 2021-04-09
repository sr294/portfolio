
$(window).scroll(function(){
    if ($(window).scrollTop() > 300) {
      $('.line').addClass('is-animated');
    }else {
      $('.line').removeClass('id-animated');
    }
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() > 900) {
      $('.line2').addClass('is-animated');
    }else {
      $('.line2').removeClass('id-animated');
    }
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() > 1400) {
      $('.line3').addClass('is-animated');
    }else {
      $('.line3').removeClass('id-animated');
    }
  });

  $(function(){
    $(window).scroll(function(){
      $(".about").each(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 500){
          $(this).find(".logo1").addClass('move');
        }
      });
    });
  });

  $(function(){
    $(window).scroll(function(){
      $(".about").each(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 600){
          $(this).find(".logo2").addClass('move2');
        }
      });
    });
  });