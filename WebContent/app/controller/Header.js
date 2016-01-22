empModule.directive('header', function(){
	return {
		restrict: 'A',
		templateUrl: "./app/views/Header.html",
		controller: 'headerController'
	}
	
});

empModule.controller('headerController', function($scope) {
	$scope.message ="EMPLOYEE PORTAL";
	
});