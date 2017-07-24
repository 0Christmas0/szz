	window.onload=function(){
		(function(win,doc){
		
		win.onresize=function(){
			change();
		};
		change()
		function change(){
			
			var oFs=doc.documentElement.clientWidth/(320/20);
		
			doc.documentElement.style.fontSize=oFs+'px';
			
		}
		
	})(window,document)
	
}
	//设置字体
	$(function(){
		
		//消消乐页面js部分开始
	//设置消消 乐页面的下拉框
		$("#sc").click(function(){
			window.history.back()
		})
		$("#slide").click(function(){
			document.addEventListener('touchmove', function (event) {
event.preventDefault();
}, false);
			$(".sli_down").stop().slideToggle(500);
			
		})
		$(".sli_down p").hover(function(){
			$(this).toggleClass("active")
		})
		//消消乐下拉部分结束
		//消消乐前进按钮开始
//		$("#yue").click(function(){
//			window.history.forward()
//		});
//		$("#cz").click(function(){
//			window.history.forward()
//		})
      //前进按钮结束
     //消消乐js部分结束
	 //充值页面js部分开始	
		//后退功能按钮
		$("#sc_goback").click(function(){
			window.history.back()
		});
		//后退功能按钮结束
		//下拉部分代码

	   var dj=0;
        $("#ipt").click(function(){
		dj++;
		if(dj%2==0){
			$("#ipt").attr("checked",true);
		}
		else{
			$("#ipt").attr("checked",false);
		  }
	    })
			$("#slide").click(function(){
			$(".slide_down").stop().slideToggle(500);
			$("#slide").stop().toggleClass("auo")
		});
		
		
		$(".slide_down p").hover(function(){
			$(this).toggleClass("acc")
		});
		
		
		$("#slide_t").click(function(){
			$(".slide_down_t").stop().slideToggle(500);
			$("#slide_t").stop().toggleClass("auo")
		});
		
		
		$(".slide_down_t p").hover(function(){
			$(this).toggleClass("acc")
		});

		
		
		//充值页面js部分结束
		
		//余额页面js部分开始
		
		//后退按钮
		$("#ico").click(function(){
			window.history.back()
		});
		//弹框显示隐藏
		$("#btn").click(function(){
			$(".tankuan").css("display","block");
			$(".tm").css("display","block");
			
		});
		
		
		$("#ipt").click(function(){
			$(".tankuan").css("display","none");
			$(".tm").css("display","none");
		})
		
	})
