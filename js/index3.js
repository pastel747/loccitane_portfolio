$(document).ready(function(){
    headeropacity();
    price();
    headercategory();
    hambmenuClick();
});



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


