$(function() {
	//文本框失去焦点后
	$('form :input').blur(function() {
		var $parent = $(this).parent();
		$parent.find(".formtips").remove();
		if($(this).is("#username")) {
			if(this.value == "") {
				var errorMsg = "<img src='img/false.png'/>";
				$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
			} else if(this.value.length < 5 || this.value.length > 10) {
				var errorMsg = "<img src='img/false.png'/>";
				$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
			} else {
				var okMsg = "<img src='img/true.png'/>";
				$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
			}
		}
		if($(this).is("#pass")) {
			pwd = this.value;
			if(this.value == "") {
				var errorMsg = "<img src='img/false.png'/>";
				$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
			} else if(this.value.length < 6 || this.value.length > 24) {
				var errorMsg = "<img src='img/false.png'/>";
				$parent.append('<span class="formtips onError">' + errorMsg + '</span>');
			} else {
				var okMsg = "<img src='img/true.png'/>";
				$parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
			}
		}
	}).keyup(function() {
		$(this).triggerHandler("blur");
	}).focus(function() {
		$(this).triggerHandler("blur");
	}); //end blur

	//提交，最终验证。
	$('#send').click(function() {
		$("form :input.required").trigger('blur');
		var numError = $('form .onError').length;
		if(numError) {
			return false;
		}
		window.location.href = "html/grzy.html";
	});
})