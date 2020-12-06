$(document).ready(function(){
    // swiperSetting2();
    // swiperSetting3();
    // swiperSetting4();
    bestSellerClick();
    test();
});

function test(){
    var swiper1 = new Swiper('.a1', {
        slidesPerView: 3,
        // slidesPerGroup : 3,
        pagination: {
            el: '.test1',
            clickable: true,
          },
        navigation: {
            nextEl: '.b1_1',
            prevEl: '.b1_2',
          },
    });
    var swiper2 = new Swiper('.a2', {
        slidesPerView: 3,
        // slidesPerGroup : 3,
        pagination: {
            el: '.test2',
            clickable: true,
          },
        navigation: {
            nextEl: '.b2_1',
            prevEl: '.b2_2',
          },
    });
    var swiper3 = new Swiper('.a3', {
        slidesPerView: 3,
        // slidesPerGroup : 3,
        pagination: {
            el: '.test3',
            clickable: true,
          },
        navigation: {
            nextEl: '.b3_1',
            prevEl: '.b3_2',
          },
    });
}

function swiperSetting2(){
    // var swiper2 = new Swiper('.name .swiper-container', {
    //     slidesPerView: 3,
    //     navigation: {
    //         nextEl: '.name .swiper-button-next',
    //         prevEl: '.name .swiper-button-prev',
    //       },
    //     pagination: {
    //         el: '.name .swiper-pagination',
    //         clickable: true,
    //       },
    // });
    var swiper3 = new Swiper('.a1', {
        slidesPerView: 3,
        slidesPerGroup : 3,
        navigation: {
            nextEl: '.b1_1',
            prevEl: '.b1_2',
          },
        pagination: {
            el: '.test1',
            clickable: true,
          },
    });
    
    
}





function swiperSetting3(){
    var swiper4 = new Swiper('.a2', {
        slidesPerView: 3,
        slidesPerGroup : 3,
        navigation: {
            nextEl: '.b2_1',
            prevEl: '.b2_2',
          },
        pagination: {
            el: '.test2',
            clickable: true,
          },
    });
}





function swiperSetting4(){
    var swiper5 = new Swiper('.a3', {
        slidesPerView: 3,
        slidesPerGroup : 3,
        navigation: {
            nextEl: '.b3_1',
            prevEl: '.b3_2',
          },
        pagination: {
            el: '.test3',
            clickable: true,
          },
    });
}







function bestSellerClick(){
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
