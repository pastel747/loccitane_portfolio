
$(document).ready(function(){
    // test1();
    // price();
    // priceTest();
    // priceTest2();
    priceTest3();



    $('ul.PD_align li a').click(function(e){
        // console.log(e);
        e.preventDefault();
    }); 
});



function price(){
    $('ul.PD_align li.high').click(function(){
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

    $('ul.PD_align li.high').click(function(){
        
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


    $('ul.PD_align li.high').click(function(){

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

    $('ul.PD_align li.high').click(function(){
        // var length = $('.product_face ol li').length();

        var a = $('.product_face ol li').eq(i).attr('data-price');
        var a1 = $('.product_face ol li').eq(i)

        $('.product_face ol li').each(function(){
            var T = $(this).attr('data-price');
            alert('t='+ T);
            alert('끝1');
            
            if( a>T ){
                a1.css('background','red');
            }else{
                a1.css('background','blue');
            }
        });
        alert('끝2');
        

        i++
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
    
}










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


