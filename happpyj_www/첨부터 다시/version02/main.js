
// navbar 상단 고정
$(function() {
    var lnb = $("#lnb").offset().top;

    $(window).scroll(function() {
        
        var window = $(this).scrollTop();
        
        if(lnb <= window) {
        $("#lnb").addClass("fixed");
        }else{
        $("#lnb").removeClass("fixed");
        }
    })
});

//메뉴 펼침
$(document).ready(function(){
	$('.navList4').hover(function(){
		$('.dept01', this).slideDown(400);
		$(this).children('a:first').addClass("hov");
	}, function(){
		$('.dept01', this).slideUp(200);
		$(this).children('a:first').removeClass("hov");
	});
});







// home img 버튼 hover
var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
    snippet.forEach(function (snippet) {
        snippet.addEventListener('mouseout', function (event) {
        if (event.target.parentNode.tagName === 'figure') {
            event.target.parentNode.classList.remove('hover')
        } else {
            event.target.parentNode.classList.remove('hover')
        }
        });
    });
}






// skill 각 숫자마다 카운트 업 
var $services = $('.services');
var $counters = $('#section3');
var $counterData = $counters.find('h3')

var $serviceExecuted = false;
var $counterExecuted = false;

$(window).scroll(function(){
    var $currentSct = $(this).scrollTop();
    var $offset = 500;

    //service item 나타나기
    var $serviceThreshold = $('#section3').offset().top - $offset;

    //숫자 카운트업 애니메이션
    var $counterThreshold = $('#section3').offset().top - $offset;
    
    if($currentSct > $serviceThreshold){
        
        if(!$counterExecuted){
            $counterData.each(function(){
                var $current = $(this);
                var $target = $current.attr('data-rate');
                //animate, progress, rate
                $({rate: 0}).animate({rate :$target },{
                    duration: 2000, //2.0초
                    progress:function(){
                        document.getElementById("skill_percent1").style.fontSize = "40px";
                        document.getElementById("skill_percent2").style.fontSize = "40px";
                        document.getElementById("skill_percent3").style.fontSize = "40px";
                        document.getElementById("skill_percent4").style.fontSize = "40px";
                        document.getElementById("skill_percent5").style.fontSize = "40px";
                        var now = this.rate;
                        $current.text(Math.ceil(now)+'%');
                    }
                });
            });
            $counterExecuted = true;
            console.log($counterExecuted);
        }//counterExecuted if
    }//scroll if

}); // scroll event






/* project 이미지 슬라이드 */
( function($) {  
    $(document).ready(function() {

        var s           = $('.slider'),
            sWrapper    = s.find('.slider-wrapper'),
            sItem       = s.find('.slide'),
            btn         = s.find('.slider-link'),
            sWidth      = sItem.width(),
            sCount      = sItem.length,
            slide_date  = s.find('.slide-date'),
            slide_title = s.find('.slide-title'),
            slide_text  = s.find('.slide-text'),
            slide_more  = s.find('.slide-more'),
            slide_imgWrap = s.find('.slide_imgWrqp'),
            slide_wrap = s.find('.slide_HartAnimation'),
            sTotalWidth = sCount * sWidth;
        
        sWrapper.css('width', sTotalWidth);
        sWrapper.css('width', sTotalWidth);
        
        var clickCount  = 0;
        
        btn.on('click', function(e) {
            e.preventDefault();
    
            if( $(this).hasClass('next') ) {          
            ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
            } else if ( $(this).hasClass('prev') ) {          
            ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
            }
            TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
    
            //CONTENT ANIMATIONS  
            var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
            var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
    
            TweenLite.fromTo(slide_imgWrap, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
            TweenLite.fromTo(slide_wrap, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
            TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
            TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
            TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);  
        });
            
    });
  })(jQuery);

  $('.overlay').addClass('overlay-blue');






// project 탭 메뉴
var tabMenu = $("#tab_menu");

tabMenu.find("#tab_ul > li > .tab_page").hide(); //컨텐츠 내용을 숨겨주세요!
tabMenu.find("#tab_ul > li.active > .tab_page").show();

function tabList(e){
e.preventDefault();       //#의 기능을 차단
var target = $(this);
target.next().show().parent("#tab_ul > li").addClass("active").siblings("#tab_ul > li").removeClass("active").find(".tab_page").hide();
    //버튼을 클릭하면 ~ div를 보여주고
    //부모의 li 태그에 클래스 추가하고
    //형제의 li 태그에 클래스 제거하고
    //제거한 자식의 div 태그를 숨겨줌 
}

tabMenu.find("#tab_ul > li > a").click(tabList).focus(tabList);






//맥주따르기 Work_content2_animation        
var Work_content2_ani = document.querySelector('.Work_content2_ani');
var beerStream = document.querySelector('.beerStream');
var handle = document.querySelector('.handle');
var beerLiquid = document.querySelector('.beerLiquid');
var fullGlass = document.querySelector('.fullGlass');

TweenMax.set(Work_content2_ani, {
    xPercent:10,
    yPercent:0
})

var tl = new TimelineMax({ delay:1, repeat:-1 });
tl.timeScale(2.6)
tl.to(handle, 0.3, { rotation:30, transformOrigin:'50% 90%', ease:Back.easeIn })
.fromTo(beerStream, 4,{ y:-450 },{ y:250, ease:Linear.easeNone })
.to(handle, 0.3, { rotation:0, ease:Back.easeOut }, '-=2')

.fromTo(beerLiquid, 4, { y:200, x:80 },{ y:-15, x:0 },'-=3.8')

.staggerTo('.froth circle', 1.6, { attr:{r:'+=15',cy:'-=10'}, alpha:1, ease:Elastic.easeOut.config(1, 0.61)}, 0.1, '-=0.6')

.staggerTo('.beerBubbles circle', 3, { attr:{cy:'-=100'}, ease:Power1.easeIn, alpha:1 }, 0.1, '-=3')

.to(fullGlass, 2, { attr:{x:-400}, ease:Back.easeIn.config(0.5)})
.staggerTo('.beerBubbles circle',0.1, { attr:{cy:'+=100'}, alpha:0},0)
.staggerTo('.froth circle',0.1, { attr:{r:'-=15', cy:'+=10'}, alpha:0},0)
.to(fullGlass,0, { attr:{x:600} })

.set(beerLiquid,{ x:0, y:200 })

.to(fullGlass,2, { attr:{x:0}, ease:Back.easeOut.config(0.5)})

.to(fullGlass, 0.3, { rotation:16 })
