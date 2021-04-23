$(document).ready(function () {
  'use strict';

  //===== Dropdown Anmiation =====// 
  var drop = $('header.style4 nav > div > ul > li, nav > div ul ul li');
  $('header.style4 nav > div > ul, nav > div ul ul').each(function () {
    var delay = 350;
    $(this).find(drop).each(function () {
      $(this).css({transitionDelay: delay + 'ms'});
      delay += 50;
    });
  });

  var wb_top_donate = $('.wb-top-donate-wrap').innerHeight();
  var wb_top_btn = $('.wb-top-donate-btn').innerHeight();
  $('header.style1').css({'top':wb_top_btn});

  //===== Top Donation Section =====//
  $('.wb-top-donate-btn').on('click', function () {
    $('.wb-top-donate-wrap').slideDown('slow');
    $('header.style1').css({'top':wb_top_donate});
    $(this).slideUp('slow');
    return false;
  });

  $('.wb-cls-btn').on('click', function () {
    $('.wb-top-donate-wrap').slideUp('slow');
    $('header.style1').css({'top':wb_top_btn});
    $('.wb-top-donate-btn').slideDown('slow');
    return false;
  });


  //===== Responsive Search =====//
  $('.adv-srch-btn').on('click', function () {
    $('.srch-chld-frm-inr2').slideToggle('slow');
    $(this).toggleClass('active');
    return false;
  });

  var wbdonation_button = $('.wb-top-donate-list li'); 
  $('.wb-top-donate-list > li').on('click',function(){
      $(wbdonation_button).removeClass('active');
      $(this).addClass('active');
      var amount_val = $(this).children('span').html();
      $('.wb-top-donate-list-wrap > span i').html(amount_val);    
      return false;
  });

  $('.thm-btn, .nwsltr-frm > button, .nwsltr-frm3 > button').on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
  }).on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    });

  //===== Wow Animation Setting =====//
  var wow = new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  });

  wow.init();

  //===== Header Style 4 =====//
  $('.mnu-btn').on('click', function () {
    $('header.style4 nav > div > ul').toggleClass('active');
    return false;
  });

  //===== Responsive Search =====//
  $('.responsive-menu-btns > a.srch-btn').on('click', function () {
    $('.res-srch').addClass('active');
    return false;
  });
  $('.srch-cls').on('click', function () {
    $('.res-srch').removeClass('active');
    return false;
  });

  //===== Responsive Header =====//
  $('.rspns-mnu-btn').on('click', function () {
    $('.rspns-mnu').addClass('slidein');
    return false;
  });
  $('.rspns-cls-btn').on('click', function () {
    $('.rspns-mnu').removeClass('slidein');
    return false;
  });
  $('.rspns-mnu li.menu-item-has-children > a').on('click', function () {
    $(this).parent().siblings('li').children('ul').slideUp();
    $(this).parent().siblings('li').removeClass('active');
    $(this).parent().children('ul').slideToggle();
    $(this).parent().toggleClass('active');
    return false;
  });

  //===== Scroll Up Bar =====//
  if ($.isFunction($.fn.scrollupbar)) {
    $('.sticky-header').scrollupbar();
  }

  //===== Counter Up =====//
  if ($.isFunction($.fn.counterUp)) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  //===== Water Ripple Effect =====//
  if ($.isFunction($.fn.ripples)) {
    $('.ripple-anm').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
  }

  //===== DownCount JS =====//
  if ($.isFunction($.fn.downCount)) {
    $('.countdown').downCount({
      date: '06/10/2020 12:00:00',
      offset: +10
    });
  }

  //===== Scrollbar =====//
  if ($('.rspns-mnu').length > 0) {
    var ps = new PerfectScrollbar('.rspns-mnu');
  }

  //===== Select =====//
  if ($('select').length > 0) {
    $('select').selectpicker();
  }

  //===== LightBox =====//
  if ($.isFunction($.fn.fancybox)) {
    $('[data-fancybox],[data-fancybox="gallery"]').fancybox({});
  }

  //===== Owl Carousel =====//
  if ($.isFunction($.fn.owlCarousel)) {

    //=== Testimonials Carousel ===//
    $('.testi-car').owlCarousel({
      autoplay: true,
      smartSpeed: 2000,
      loop: true,
      items: 4,
      dots: false,
      slideSpeed: 20000,
      autoplayHoverPause: true,
      nav: true,
      margin: 20,
      responsiveClass:true,
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
        0:{items: 1},
        481:{items: 1},
        770:{items: 2},
        981:{items: 3},
        1025:{items: 4},
        1200:{items: 4}
      }
    });

    //=== Sponsors Carousel ===//
    $('.spon-car').owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      loop: true,
      items: 5,
      dots: false,
      slideSpeed: 20000,
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      responsiveClass:true,
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
        0:{items: 2},
        481:{items: 3},
        771:{items: 3},
        981:{items: 4},
        1025:{items: 4},
        1200:{items: 5}
      }
    });

    //=== Country Help Carousel ===//
    $('.cntry-hlp-car').owlCarousel({
      autoplay: true,
      smartSpeed: 3000,
      loop: true,
      items: 2,
      dots: false,
      slideSpeed: 20000,
      autoplayHoverPause: true,
      nav: true,
      margin: 30,
      responsiveClass:true,
      navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
        0:{items: 1},
        481:{items: 1},
        771:{items: 2},
        981:{items: 2},
        1025:{items: 2},
        1200:{items: 2}
      }
    });
    

  }

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {

    //=== Stories Carousel ===//
    $('.strs-main-car').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      slide: 'div',
      fade: true,
      asNavFor: '.strs-nav-car'
    });        

    $('.strs-nav-car').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.strs-main-car',
      dots: false,
      arrows: true,
      slide: 'div',
      centerPadding: '0',
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        }
      }
      ]
    });
    var a = $('.slick-prev');
    var b = $('.slick-next');
    $('.slick-btns').append(a);
    $('.slick-btns').append(b);

    //=== Featured Area Carousel ===//
    $('.feat-car').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      speed: 5000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false
    });
  }

}); //===== Document Ready Ends =====//


$(window).on('load',function(){
  'use strict';

  var menu_height = $('header').innerHeight();
  var scroll = $(window).scrollTop();
  if (scroll >= menu_height) {
    $('.sticky-header').addClass('sticky');
  } else {
    $('.sticky-header').removeClass('sticky');
  }
  
  $('.page-loader').fadeOut('slow');

});//===== Window onLoad Ends =====//

//===== Sticky Header =====//
$(window).on('scroll',function () {
  'use strict';

  var menu_height = $('header').innerHeight();
  var scroll = $(window).scrollTop();
  if (scroll >= menu_height) {
    $('.sticky-header').addClass('sticky');
  } else {
    $('.sticky-header').removeClass('sticky');
  }
});//===== Window onScroll Ends =====//