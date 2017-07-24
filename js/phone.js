var app=angular.module("myApp",[]);
app.controller("aa",function($scope,$interval){
	$scope.date="发送验证码"
	$scope.send=function(){
		$scope.now=new Date(2017,7,22,11,23,00).getTime();
		$scope.future=new Date(2017,7,22,11,24,00).getTime();
		$scope.timer=$interval(function(){
			$scope.noww=new Date().getTime();
			$scope.flag=$scope.now<=$scope.noww;
			$scope.future-=1000;
			if($scope.future<=$scope.now){
				$interval.cancel($scope.timer);
				$scope.date="重新获取"
			}
			else{
				$scope.date=($scope.future-$scope.now)/1000+'s';
			}
		},1000)
	}
	$scope.backh=function(){
		window.history.back()
	}
})
