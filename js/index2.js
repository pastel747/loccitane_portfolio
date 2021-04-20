
$(document).ready(function(){
    // categoryText();
    priceTest3();
    price();
    ct_stOpen();
    stSelectText();
    headercategory();
    hambmenuClick();

    $('ul.PD_sort li a').click(function(e){
        e.preventDefault();
    }); 
});


function headercategory(){
    var category = $('header>div nav');

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

// function categoryText(){
//     var title = $('.product_face>h2').html();
//     var categoryName = $('.product_face').attr('data-name');

//     $('.PD_categoryButton>p').html(categoryName);
//     title = 
// }

function stSelectText(){
    var sortButton = $('.PD_sortButton p');
    var sortSelect;
    $('.PD_sort li>a').click(function(){
        sortButton.html('');
        sortSelect = $(this).html();
        sortButton.html(sortSelect);
    });
}

function ct_stOpen(){
    var categoryButton = $('.PD_categoryButton p');
    var sortButton = $('.PD_sortButton p');

    categoryButton.click(function(){
        $(this).toggleClass('ctButtonActive');
        $('.PD_category').toggleClass('ctButtonActive');
    });
    sortButton.click(function(){
        $(this).toggleClass('stButtonActive');
        $('.PD_sort').toggleClass('stButtonActive');
    });
    
}


function price(){
    $('ul.PD_sort li.high').click(function(){
        $('.product_face ol li').each(function(){
            // alert( $(this).attr('data-price') );
            // var priceTest = $(this).attr('data-price');
            var priceTest = $('.product_face ol li').attr('data-price');

            // alert();
            consolo.log(priceTest);
            // alert();

            // if(priceTest){
                // 비교해서 오더 바꾸기 -> +1 연산 써서 또는 -1해서 반복
            // }

        });
    });
}

function priceTest(){

    $('ul.PD_sort li.high').click(function(){
        
        // var test = $('.product_face ol li').length;
        
        // for (var i = 1; i <= test; i++){
        //     console.log(i);
        // }

        // console.log(
        //     $(this).attr('data-price').sort(function(a,b){
        //         return a-b;
        //     })
        // );
        
        var arr = [];

        $('.product_face ol li').each(function(){
            var priceTest = $(this).attr('data-price');
        });
        $('.product_face ol li').each(function(){
            arr.push( $(this).attr('data-price') );
            
        });
        // console.log(arr);
        alert(arr);
        arr.sort(function(a, b){
            return b - a;
            
        });
        alert(arr);

        

        if( $('.product_face ol li').attr('data-price') == b ){
            $(this).css({background : red});
        }
    });
}

function priceTest2(){


    $('ul.PD_sort li.high').click(function(){

        var length = $('.product_face ol li').length();

        $('.product_face ol li').each(function(){
            // var test = $('.product_face ol li').each(function(){
            //     $(this).eq().attr('data-price');
            // });


            // li들 값을 비교, if 사용

            var test = $(this).attr('data-price');
            var test2 = $('.product_face ol li').each(function(){
                $(this).attr('data-price');
            });

            alert(test);
            alert('끝');

            for( i=1; i<=length; i++ ){

            }

            // if( $(this).attr('data-price') > test2 ){
            // 
            // }

        });
    });
    
}



function priceTest3(){
    var i = 0;

    $('ul.PD_sort li.high').click(function(){
        // var length = $('.product_face ol li').length();

        // var a = $('.product_face ol li').eq(i).attr('data-price');
        // var a1 = $('.product_face ol li').eq(i)

        $('.product_face ol li').each(function(){
            var T = $(this).attr('data-price');
            $(this).css('order', -T);

            // alert('t='+ T);
            // alert('끝1');
            
            // if( a>T ){
            //     a1.css('background','red');
            // }else{
            //     a1.css('background','blue');
            // }
        });
        // alert('끝2');
        

        // i++
        // var b = $('.product_face ol li').eq(i).attr('data-price');

        // alert(a+'와'+b);
        // alert('끝');

        

        // $('.product_face ol li').each(function(){

        //     var a = $('.product_face ol li').eq(i).attr('data-price');
        //     i++
        //     var b = $('.product_face ol li').eq(i).attr('data-price');

            // alert(a+'와'+b);
            // alert('끝');
            
            // if( a>b ){
            //     alert('b가 a보다 크거나 같다.');
            // }else{
            //     alert('a가 b보다 크거나 같다.');
            // }
        // });
        // alert('끝2');
        
    });
    $('ul.PD_sort li.row').click(function(){
        
        $('.product_face ol li').each(function(){
            var T = $(this).attr('data-price');
            $(this).css('order', T);

        });
        
    });

    $('ul.PD_sort li.hot').click(function(){
        
        $('.product_face ol li').each(function(){
            $(this).css('order', 0);

            if($(this).hasClass('hot')){
                $(this).css('order', -1);
            }
        });
        
    });

    $('ul.PD_sort li.new').click(function(){
        
        $('.product_face ol li').each(function(){
            $(this).css('order', 0);

            if($(this).hasClass('new')){
                $(this).css('order', -1);
            }
        });
        
    });
    
}





// function price(){
//     var priceObject = '';

//     var down1 = '';
//     var up1 = '';
//     var total1 = '';

//     var down2 = '';
//     var up2 = '';
//     var total2 = '';


//     $('.pd_price').each(function(){
//         priceObject = $(this).html();
//         var priceLength = $(this).html().length;

        
//         if( priceObject.length>3||priceObject.length<=5 ){
//             down1 = priceObject.substr(2, 3);
//             up1 = priceObject.substr(0, 2);
//             total1 = up1 +','+ down1;

//             $(this).html(total1);

//         }else if( priceObject.length == 6 ){
//             down2 = priceObject.substr(3, 3);
//             up2 = priceObject.substr(0, 3);
//             total2 = up2 +','+ down2;
            
//             $(this).html(total2);
//         }
            
//     });
// }


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







// function test(){
//     $('.pd_price').each(function(){
//         var priceObject = $(this).html();
//         $(this).digits(priceObject);

//     });
    
// }




// function test1(){
    // var tab1index = $('.PD_category li.tab1').index();

    // $('ul>li>a').click(function(e){
    //     e.preventDefault();
    // });
    

    // $('.PD_category li').click(function(){
    //     var categortClass = $(this).attr('class');

    //     $('section.product_face ol li').removeClass('show');

    //     $('section.product_face ol li').each(function(){
    //         if($(this).hasClass(categortClass)){
    //             $(this).addClass('show');
    //             // 여기 this는 ol li each에 대한 this이다.
    //         }else if(categortClass == 'tab0'){
    //             $('section.product_face ol li').addClass('show');
    //         }
    //     });
    // }); 





    // $('.PD_category li.tab0').click(function(){
    //     $('section.product_face ol li').addClass('show');
    // }); 
    
    // $('.PD_category li.tab1').click(function(){
    //     $('section.product_face ol li').removeClass('show');
    //     $('section.product_face ol li.tab1').addClass('show');
    // }); 

    // $('.PD_category li.tab2').click(function(){ 
    //     $('section.product_face ol li').removeClass('show');
    //     $('section.product_face ol li.tab2').addClass('show');
    // }); 

    // $('.PD_category li.tab3').click(function(){ 
    //     $('section.product_face ol li').removeClass('show');
    //     $('section.product_face ol li.tab3').addClass('show');
    // });

    // $('.PD_category li.tab4').click(function(){
    //     $('section.product_face ol li').removeClass('show');
    //     $('section.product_face ol li.tab4').addClass('show');
    // }); 

    // $('.PD_category li.tab5').click(function(){ 
    //     $('section.product_face ol li').removeClass('show');
    //     $('section.product_face ol li.tab5').addClass('show');
    // });

    // $('.PD_category li.tab6').click(function(){
    //     $('section.product_face ol li').removeClass('show');
    //     $('section.product_face ol li.tab6').addClass('show');
    // }); 

    // $('.PD_category li.tab7').click(function(){ 
    //     $('section.product_face ol li').removeClass('show');
    //     $('section.product_face ol li.tab7').addClass('show');
    // });

// }


