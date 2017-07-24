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