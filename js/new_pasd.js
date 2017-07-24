var green=document.documentElement.clientHeight;
console.log(green)
$("body").css("height",green+'px');
$(".submit a").click(function(){
	$(".success").stop().fadeIn()
})
$(".success").click(function(){
//	$(".success").stop().fadeOut()
	window.location.href = "../index.html";
})
var a=0;
$(".pasd-a2").click(function(){
	a++;
	$(this).toggleClass("pasd-a2-1")
	if(a%2==1){
		$("#pasd-ip").attr("type","text")
	}else{
		$("#pasd-ip").attr("type","password")
	}
})
