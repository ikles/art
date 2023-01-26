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







  $('.advert__slider').slick({
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

  function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  

  const arr1 = ['scope__', 'machine__', 'hors__', 'block__', 'stop__', 'vin__', 'total__'];


  const arr2 = ['col', 'row', 'img-w', 'heading', 'title', 'name', 'date'];



  /*$('div:not(.wrapper)').each(function () {
    const rndInt1 = randomIntFromInterval(0, 6);
    const rndInt2 = randomIntFromInterval(0, 6);
    let self = $(this);
    let selfHtml = self.html();  
    self.append('<div class="'+arr1[rndInt1]+arr2[rndInt2]+'" style="display: none">'+selfHtml+'</div>');    
  });*/







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
    $(".paint-gal__scroll, .picture-gal__scroll").mCustomScrollbar({
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
    $(".paint-gal__scroll, .picture-gal__scroll").mCustomScrollbar({
      axis: "x",
      theme: "dark-3",
      mouseWheel: 0,
      scrollInertia: '230'
    });    
  }//1100
});//resize

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

