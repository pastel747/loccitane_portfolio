$(document).ready(function(){
    swiperSetting();
    swiperSetting2();
    swiperSetting3();
    swiperSetting4();
    bestSellerClick();
});

function swiperSetting(){
  var swiper = new Swiper('.swiperArea>.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiperArea>.swiper-container>.swiper-pagination',
        clickable: true,
      },
    }); 
}
function swiperSetting2(){
  var swiper2 = new Swiper('.name1 .swiper-container', {
      slidesPerView: 3,
      navigation: {
          nextEl: '.name1 .swiper-button-next',
          prevEl: '.name1 .swiper-button-prev',
        },
      pagination: {
          el: '.name1 .swiper-container .swiper-pagination',
          clickable: true,
        },
      });
}
function swiperSetting3(){
  var swiper3 = new Swiper('.name2 .swiper-container', {
      slidesPerView: 3,
      navigation: {
          nextEl: '.name2 .swiper-button-next',
          prevEl: '.name2 .swiper-button-prev',
        },
      pagination: {
          el: '.name2 .swiper-container .swiper-pagination',
          clickable: true,
        },
      });
}
function swiperSetting4(){
  var swiper4 = new Swiper('.name3 .swiper-container', {
      slidesPerView: 3,
      navigation: {
          nextEl: '.name3 .swiper-button-next',
          prevEl: '.name3 .swiper-button-prev',
        },
      pagination: {
          el: '.name3 .swiper-container .swiper-pagination',
          clickable: true,
        },
      });
}



function bestSellerClick(){
    $('.bestSeller>div>ul>li a').click(function(e){
        // console.log(e);
        e.preventDefault();
    });
    $('.bestSeller>div>ul>li').click(function(){
        // alert('클릭');
        $('.bestSeller>div>ol>li').removeClass('slide_active');
        // $('.bestSeller>div>ol>li').css('display', 'none');
        var testIndex = $(this).index();
        // alert(testIndex);
        $('.bestSeller>div>ol>li').eq(testIndex).addClass('slide_active');
        // alert('test');
        // $('.bestSeller>div>ol>li[testIndex]').css('display', 'block');
    });
}
