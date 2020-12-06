$(document).ready(function(){
    swiperSetting();
    swiperSetting2();
});

function swiperSetting(){
  var swiper = new Swiper('.swiperArea .swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiperArea .swiper-pagination',
        clickable: true,
      },
    }); 
}
function swiperSetting2(){
    var swiper2 = new Swiper('.name .swiper-container', {
        slidesPerView: 3,
        navigation: {
            nextEl: '.name .swiper-button-next',
            prevEl: '.name .swiper-button-prev',
          },
        pagination: {
            el: '.name .swiper-pagination',
            clickable: true,
          },
        });
}