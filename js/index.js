$(document).ready(function(){
    swiperSetting2();  
    swiperSetting();
    // test1(); 
    // swiperSetting3();
    // swiperSetting4();
    bestSellerClick();
    headeropacity();
    price();
    headercategory();
    hambmenuClick();
    hambmenuPlace();
});


function hambmenuPlace(){
  
}


function headercategory(){
  var category = $('header>div nav');
  var hambOpen = $('header>div nav.menuActive');

  $('.mcheck').click(function(){
    $(this).toggleClass('hambActive');
    $(category).toggleClass('menuActive');

    if(category.hasClass('menuActive')){
      $('header').addClass('headerActive');
      $('body').addClass('scrollCancle');
    }else{
      $('header').removeClass('headerActive');
      $('body').removeClass('scrollCancle');
    }
  });
}




function hambmenuClick(){
  var incategory = $('li.incategory');
  incategory.click(function(){
    $(this).parent().toggleClass('categoryActive');
  });
}


function swiperSetting2(){
  var swiper2 = new Swiper('.name1', {
      slidesPerView: 1,
      navigation: {
          nextEl: '.bn1-1',
          prevEl: '.bn1-2',
        },
      pagination: {
          el: '.pn1',
          clickable: true,
        },
      breakpoints: {
          600: {
              slidesPerView: 2
          },
          1000: {
            slidesPerView: 3
          }
        }
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




function bestSellerClick(){
    $('.bestSeller>div>ul>li>a').click(function(e){
        // console.log(e);
        e.preventDefault();
    });
    $('.bestSeller>div>ul>li').click(function(){
        // alert('클릭');
        $('.bestSeller>div>ul>li').removeClass('categoryActive');
        $('.bestSeller>div>ol>li').removeClass('slide_active');
        // $('.bestSeller>div>ol>li').css('display', 'none');
        var testIndex = $(this).index();
        // alert(testIndex);
        $(this).addClass('categoryActive')
        $('.bestSeller>div>ol>li').eq(testIndex).addClass('slide_active');
        // alert('test');
        // $('.bestSeller>div>ol>li[testIndex]').css('display', 'block');



        if(testIndex == 0){
          var swiper2 = new Swiper('.name1', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.bn1-1',
                prevEl: '.bn1-2',
              },
            pagination: {
                el: '.pn1',
                clickable: true,
              },
            breakpoints: {
              600: {
                  slidesPerView: 2
              },
              1000: {
                slidesPerView: 3
              }
            }
            });
        }else if(testIndex == 1){
          var swiper3 = new Swiper('.name2', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.bn2-1',
                prevEl: '.bn2-2',
              },
            pagination: {
                el: '.pn2',
                clickable: true,
              },
            breakpoints: {
              600: {
                  slidesPerView: 2
              },
              1000: {
                slidesPerView: 3
              }
            }
            });
        }else if(testIndex == 2){
          var swiper4 = new Swiper('.name3', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.bn3-1',
                prevEl: '.bn3-2',
              },
            pagination: {
                el: '.pn3',
                clickable: true,
              },
            breakpoints: {
              600: {
                  slidesPerView: 2
              },
              1000: {
                slidesPerView: 3
              }
            }
            });
        }
    });


}


// function test1(){
  
//   $(window).scroll(function(){
//     if( $('.loccitane_banner').offset().top - 500 < $(window).scrollTop() ){
//       // console.log('test');
//       $('.loccitane_banner').addClass('active');
      
//     }
//     if( $('.loccitane_banner').offset().top < $(window).scrollTop() ){
//       $('.loccitane_banner').removeClass('active');
//     }
//   });
// }


function headeropacity(){
  var windowTop = $(window).scrollTop();
  var windowAfterTop;

  $(window).scroll(function(){
    windowAfterTop = $(window).scrollTop();
    if( windowTop >= windowAfterTop ){
      $('header').addClass('headerActive');
    }else{
      $('header').removeClass('headerActive');
    }

    windowTop = windowAfterTop;
  });
  
}

function price(){
  // 상품 가격에 ','을 붙이는 작업 
  var priceObject = '';

  var down1 = '';
  var up1 = '';
  var total1 = '';



  $('.pd_price').each(function(){
      priceObject = $(this).html();
      var priceLength = priceObject.length;
      // var priceLength = $(this).html().length;
      
      if( priceLength == 4){
          down1 = priceObject.substr(1);
          up1 = priceObject.substring(0, 1);
          total1 = up1 +','+ down1 + '원';
          $(this).html(total1);

      }else if( priceObject.length == 5 ){
          down1 = priceObject.substr(2, 3);
          up1 = priceObject.substr(0, 2);
          total1 = up1 +','+ down1 + '원';
          $(this).html(total1);

      }else if( priceObject.length == 6 ){
          down1 = priceObject.substr(3, 3);
          up1 = priceObject.substr(0, 3);
          total1 = up1 +','+ down1 + '원';
          $(this).html(total1);
      }
  });
}


