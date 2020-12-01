$(document).ready(function(){
    swiperSetting();
});

function swiperSetting(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
          }
        
    });
    var swiper = new Swiper('.test .swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.test .swiper-pagination',
          }
        
    });
}