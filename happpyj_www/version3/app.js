// 메뉴 클릭 or 스크롤시 그 화면으로 
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop() + $(window).height();

    //if( scrollTop > $("#section1").offset().top ){
    //    $("#section1").addClass("show");
    //}
    //if( scrollTop > $("#section2").offset().top ){
    //    $("#section2").addClass("show");
    //}
    //if( scrollTop > $("#section3").offset().top ){
    //    $("#section3").addClass("show");
    //}
    //if( scrollTop > $("#section4").offset().top ){
    //    $("#section4").addClass("show");
    //}
    //if( scrollTop > $("#section5").offset().top ){
    //    $("#section5").addClass("show");
    //} 
    //if( scrollTop > $("#section6").offset().top ){
    //    $("#section6").addClass("show");
    //}
    //if( scrollTop > $("#section7").offset().top ){
    //    $("#section7").addClass("show");
    //}
    //if( scrollTop > $("#section8").offset().top ){
    //    $("#section8").addClass("show");
    //}
    //if( scrollTop > $("#section9").offset().top ){
    //    $("#section9").addClass("show");
    //}

    //for문
    //for( let i=1; i<=$(".content__item").length; i++ ) {
    //   if( scrollTop > $("#section" + i).offset().top ){
    //       $("#section" + i).addClass("show");
    //   }
    //}

    // each문
    $(".content__item").each(function(index){
        if( scrollTop > $(this).offset().top ){
            $(this).addClass("show");
            $(".paraNav ul li").eq(index).addClass("active").siblings().removeClass("active");
        } 
    });

    //출력
    $(".paraScroll span").text(parseInt(scrollTop));
});

