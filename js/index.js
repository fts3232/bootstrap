var win=$(window),winH=win.height(),winW=win.width();
function resize(){
	winW=win.width();
    winH=win.height();
    $('.page').height(winH);
	$('#sitebar').height(winH-60);
	cH=$('#page-c .row').height();
	$('#page-c-swiper').height(cH/2);
	$('#page-c-swiper').css('margin-top','20%');
	}
resize();
win.resize(function(){
	resize();
});
videojs.options.flash.swf = "video-js.swf";

$(document).ready(function(){
	
	$(document).on('click','#page-d .tab',function(){
		i=$(this).index();
		$('#panel div').eq(i).removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide')
		})
	$(document).on('click','#page-b .tab',function(){
		i=$(this).index();
		$('#page-b-panel .page-b-panel-body').eq(i).removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide')
		if(i==4){
			mySwiper2.onResize();
			}
		})	
	page=0;
	$('.main').mousewheel(function(event, delta, deltaX, deltaY) {
		if(delta==1){
			page-=1;
			if(page<0){
				page=0;
				}
			}
		else{
			page+=1;
			if(page>4){
				page=4;
				}
			}
		 if(page==4){
			 offset=3*winH+200
			 }
	     else{
			 offset=page*winH
			 }
		 $('html,body').stop().animate({scrollTop: offset+'px'}, 800);
	});
	document.documentElement.style.overflow='hidden';
	var mySwiper = new Swiper ('#page-c-swiper', {
		loop: true,
		// 如果需要分页器
		pagination: '.swiper-pagination'
	  })   
	var mySwiper2 = new Swiper ('#page-b-swiper', {
		loop: true,
		slidesPerView : 5,

		spaceBetween:10
		
	  })        
	var mySwiper3 = new Swiper('#page-a-swiper',{


	  })
})