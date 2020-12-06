$(document).ready(function(){
    bestSellerClick();
    test();
});



function test(){
    var swiper1 = new Swiper('.swiper1', {
        slidesPerView: 3,
        // slidesPerGroup : 3,
        pagination: {
            el:'.swp1',
            clickable: true,
          },
        navigation: {
            nextEl: '.b1_1',
            prevEl: '.b1_2',
          },
            
        
    });
    var swiper2 = new Swiper('.swiper2', {
        slidesPerView: 3,
        // slidesPerGroup : 3,
        pagination: {
            el: '.swp2',
            clickable: true,
          },
        navigation: {
            nextEl: '.b2_1',
            prevEl: '.b2_2',
          },
    });
    
}

function bestSellerClick(){
    $('div>ul>li a').click(function(e){
        console.log(e);
        e.preventDefault();
    });
    $('div>ul>li').click(function(){
        // alert('클릭');
        $('div>ol>li').removeClass('slide_active');
        // $('.bestSeller>div>ol>li').css('display', 'none');
        var testIndex = $(this).index();
        // alert(testIndex);
        $('div>ol>li').eq(testIndex).addClass('slide_active');
        // alert('test');
        // $('.bestSeller>div>ol>li[testIndex]').css('display', 'block');
    });
}