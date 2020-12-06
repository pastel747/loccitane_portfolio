$(document).ready(function(){
    swiperSetting();
    swiperSetting2();
    clickF();
});

function swiperSetting(){
    // var swiper = new Swiper('.swiperArea .swiper-container', {
    // slidesPerView: 1,
    // loop: true,
    // pagination: {
    //     el: '.swiperArea .swiper-pagination',
    //     clickable: true,
    //   },
    // }); 
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

function clickF(){
    $('.bestSeller>div>ul>li a').click(function(e){
        console.log(e);
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
