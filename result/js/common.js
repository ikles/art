jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });



  $('.main__slider').slick({
    infinite: true,    
    speed: 400,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 1,
    cssEase: 'linear',
    autoplaySpeed: 0,  
    arrows: true,
    dots: true,
    pauseOnHover: true,
  });


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,    
    arrows: true,
    fade: true,
    infinite: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,    
    arrows: true,
    infinite: false,
    speed: 400,
    cssEase: 'ease-out',
    focusOnSelect: true,
    responsive: [

    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3
      }
    },
    ]
  });

    $('[data-fancybox="gallery3"]').fancybox({
    arrows: true,
    infobar: true,
    smallBtn: false,
    toolbar: true,
    iframe : {
      css : {
        width : '850px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });


  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });


  $('[data-fancybox="gallery2"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });



  









/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});*/

/************************************/



  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  popup('.paint__btn', '.modal-overlay_1', '.modal-close_1');


  function showHide(elem) {
    let block = $(elem);    
    var button = block.find('.toggle');
    button.html(button.data('text'));
    button.click(function(e){
      e.preventDefault();      
      let desc = $(this).prev();      
      desc.toggleClass('more');
      var swap = $(this).data('swap');
      var text = $(this).data('text');
      $(this).data('text', swap);
      $(this).data('swap', text);
      $(this).html(swap);
    });
  }

  showHide('.description');


  if( $(window).width() < 992 ) {
    $('.fragile__gal-scroll').mCustomScrollbar({
      axis: "x",
      theme: "dark-3",
      mouseWheel: 0,
      scrollInertia: '230'
    });    
  }

  if( $(window).width() < 1129 ) {
    $(".mcatalog__scroll").mCustomScrollbar({
      axis: "x",
      theme: "dark-3",
      mouseWheel: 0,
      scrollInertia: '230'
    });    
  } 

  if( $(window).width() < 1200 ) {
    $(".paint-gal__scroll, .picture-gal__scroll, .artist-gal__scroll").mCustomScrollbar({
      axis: "x",
      theme: "dark-3",
      mouseWheel: 0,
      scrollInertia: '230'
    });    
  }


  $(window).resize(function() {
    if( $(window).width() < 1129 ) {
     $(".mcatalog__scroll").mCustomScrollbar({
      axis: "x",
      theme: "dark-3",
      mouseWheel: 0,
      scrollInertia: '230'
    });     
   }//1129

   if( $(window).width() < 992 ) {
    $('.fragile__gal-scroll').mCustomScrollbar({
      axis: "x",
      theme: "dark-3",
      mouseWheel: 0,
      scrollInertia: '230'
    });    
  }//992
  if( $(window).width() < 1200 ) {
    $(".paint-gal__scroll, .picture-gal__scroll, .artist-gal__scroll").mCustomScrollbar({
      axis: "x",
      theme: "dark-3",
      mouseWheel: 0,
      scrollInertia: '230'
    });    
  }//1100
});//resize



/*    $('#example4').sliderPro({
    width: 828,
    height: 655,
    fade: true,
    arrows: true,
    buttons: false,
    fullScreen: false,
    shuffle: true,
    smallSize: 500,
    mediumSize: 1000,
    largeSize: 3000,
    thumbnailArrows: true,
    autoplay: false
  });*/






  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }




}); //ready

