$(function() {
	$('#send').click(function() {
		$("form :input.required").trigger('blur');
		var numError = $('form .onError').length;
		if(numError) {
			return false;
		}
		$(".con-dl").click(function() {
			$(".wrap").css("display", "block")
		})		
	});		
	$("form :input").blur(function() {
		var tmppwd; //临时保存密码  
		var $parent = $(this).parent();
		$parent.find(".formtips").remove();
		if($(this).is("#mobile")) {
			if(this.value != "") {
				var reg = /^1\d{10}$/;	
				if(!reg.test(this.value)) {
					var errorMsg = "<img src='../img/false.png'/>";
					$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
				} else {
					var okMsg = "<img src='../img/true.png'/>";
					$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
				}
			}
		}
	}).keyup(function() {
		$(this).triggerHandler("blur");
	}).focus(function() {
		$(this).triggerHandler("blur");
	}); 
	$(".qu").click(function() {
		$(".wrap").css("display", "none")
	})
	$(".que").click(function() {
		$(".wrap").css("display", "none")
		window.location.href = "yzm.html";
	})	
})