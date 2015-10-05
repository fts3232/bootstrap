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
	$(document).on('click','#page-a-tab .tab',function(){
		i=$(this).index();
		$('#page-a-panel .panel').eq(i).removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide')
		})
	$(document).on('click','#page-d-tab .tab',function(){
		i=$(this).index();
		$('#page-d-panel .panel').eq(i).removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide')
		})
	var mySwiper = new Swiper ('#page-a-swiper', {
		loop: true,
		slidesPerView : 5,
		spaceBetween:10,
		// 如果需要分页器
		pagination: '.swiper-pagination'
	  })   
	page=0;
	
})