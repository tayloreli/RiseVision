'use strict'

riseApp.controller('displayController',
	function displayController($scope){
		$scope.displays = [];
		$scope.message = "Hello World";
		
		$scope.getAllDisplays = function(){
			$scope.displays = listDisplay();
		}
	}
);