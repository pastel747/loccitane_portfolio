$(document).ready(function(){
    swiperSetting2();  
    swiperSetting();
    test1(); 
    // swiperSetting3();
    // swiperSetting4();
    bestSellerClick();
    test2();
});

function swiperSetting2(){
  var swiper2 = new Swiper('.name1', {
      slidesPerView: 3,
      navigation: {
          nextEl: '.bn1-1',
          prevEl: '.bn1-2',
        },
      pagination: {
          el: '.pn1',
          clickable: true,
        },
      });
}

function swiperSetting(){
  var swiper = new Swiper('.slide0', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.slide0>.swiper-pagination',
        clickable: true,
      },
    }); 
}



// function swiperSetting3(){
//   var swiper3 = new Swiper('.name2 .swiper-container', {
//       slidesPerView: 3,
//       navigation: {
//           nextEl: '.name2 .swiper-button-next',
//           prevEl: '.name2 .swiper-button-prev',
//         },
//       pagination: {
//           el: '.name2 .swiper-container .swiper-pagination',
//           clickable: true,
//         },
//       });
// }
// function swiperSetting4(){
//   var swiper4 = new Swiper('.name3 .swiper-container', {
//       slidesPerView: 3,
//       navigation: {
//           nextEl: '.name3 .swiper-button-next',
//           prevEl: '.name3 .swiper-button-prev',
//         },
//       pagination: {
//           el: '.name3 .swiper-container .swiper-pagination',
//           clickable: true,
//         },
//       });
// }



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



        if(testIndex == 0){
          var swiper2 = new Swiper('.name1', {
            slidesPerView: 3,
            navigation: {
                nextEl: '.bn1-1',
                prevEl: '.bn1-2',
              },
            pagination: {
                el: '.pn1',
                clickable: true,
              },
            });
        }else if(testIndex == 1){
          var swiper3 = new Swiper('.name2', {
            slidesPerView: 3,
            navigation: {
                nextEl: '.bn2-1',
                prevEl: '.bn2-2',
              },
            pagination: {
                el: '.pn2',
                clickable: true,
              },
            });
        }else if(testIndex == 2){
          var swiper4 = new Swiper('.name3', {
            slidesPerView: 3,
            navigation: {
                nextEl: '.bn3-1',
                prevEl: '.bn3-2',
              },
            pagination: {
                el: '.pn3',
                clickable: true,
              },
            });
        }
    });


}


function test1(){
  
  $(window).scroll(function(){
    if( $('.banner').offset().top - 500 < $(window).scrollTop() ){
      // console.log('test');
      $('.banner').addClass('active');
      
    }
    if( $('.banner').offset().top < $(window).scrollTop() ){
      $('.banner').removeClass('active');
    }
  });
}



function test2(){

  $('label.mcheck').click(function(){
    $(this).toggleClass('labelActive');
  });
}