$(function() {
	$(".z-draw").click(function(){
		window.history.back()
	})
	$(".entry").click(function() {
		$(".c-cont-stat").toggle()
	})

	$('.c-cont-nav ul li').click(function(){
		$('.c-cont-nav ul li').removeClass('active');
		$('.c-cont-ctr1>ul').removeClass('show');
		$(this).addClass('active');	
		$('.c-cont-ctr1>ul').eq($(this).index()).addClass('show');
	})	
})