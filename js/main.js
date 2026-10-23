$(document).ready(function(){


  //데스크탑 depth2

  $(".depth2").hide();

  $("header nav .gnb > li").mouseenter(function(){

    $(this).children(".depth2").stop().slideDown();
    $(".depth2-bg").stop().fadeIn();
    $("header").addClass("active");

  });

  $("header nav .gnb > li").mouseleave(function(){

    $(this).children(".depth2").stop().slideUp();
    $(".depth2-bg").stop().fadeOut();
    $("header").removeClass("active");


  });

  //모바일 gnb
  $('.btn-ham').click(function(){

    $('.mgnb-wrap').slideDown();

  });

  $('.mgnb-close').click(function(){

    $('.mgnb-wrap').slideUp();

  });

  //모바일 depth2
  $('.mdepth2').hide();

   $('.mgnb > li').click(function() {

      // 1. 클릭한 메뉴 외에 이미 열려있는 다른 서브메뉴들을 닫고 active 클래스 제거
      $('.mgnb > li').not(this).removeClass('active');
      $('.mdepth2').not($(this).children()).slideUp();
      
      // 2. 현재 클릭한 메뉴의 서브메뉴 토글 (열기/닫기)
      $(this).toggleClass('active');
      $(this).children('.mdepth2').slideToggle();
    });
  
  // 검색 영역

  $(".search").hide();

  $(".btn-search").click(function(){

    $(".search").fadeToggle();
    $("header").toggleClass("active")
    $(this).toggleClass("active");

  });

  // 메인 배너 스와이퍼
  const mb = new Swiper(".mb",{

    pagination: {
    el: '.swiper-pagination',
    type: 'progressbar', // 하단 줄 바
    },

    loop : true,
    speed : 1000,

    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },

    effect : "fade",

    fadeEffect:{
      crossFade: true
    }, // fade 작동시 이미지끼리 겹치는거 방지.

  });

  // 스와이퍼 재생과 멈춤
  $(".mb-play").hide();
  $(".mb-pause").click(function(){

    mb.autoplay.stop();
    $(".mb-play").show();
    $(".mb-pause").hide();

  });

  $(".mb-play").click(function(){

    mb.autoplay.start();
    $(".mb-pause").show();
    $(".mb-play").hide();

  });

  //메뉴
  const menu = new Swiper(".menu",{

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    loop : true,
    speed : 1000,

    //모바일
    slidesPerView : 1,

    breakpoints: {
      768: { //768이상
        slidesPerView: 2,
      },
      1200: { //1200이상
        slidesPerView: 4.2,
      },
    },
    centeredSlides : true,

    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  });

  //story 스와이퍼
  const story = new Swiper(".story",{

    //모바일
    slidesPerView : 1,
    spaceBetween : 30,

    breakpoints: {
      768: { //768이상
        slidesPerView: 1.5,
        spaceBetween : 30,
      },
      1200: { //1200이상
        slidesPerView: 1.8,
        spaceBetween : 30,
      },
    },

  });

  //space
  $("#space ul li").hover(function(){

    $(this).addClass("active").siblings().removeClass("active");

  });

  //서브 멤버십 스와이퍼
  const crown = new Swiper(".crown",{

    pagination: {
    el: '.swiper-pagination',
    type: 'progressbar', // 하단 줄 바
  },

    //모바일
    slidesPerView : 1,
    spaceBetween: 30,

    breakpoints: {
      768: { //768이상
        slidesPerView: 1.6,
        spaceBetween: 30,
      },
      1200: { //1200이상
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
    },

  });

})