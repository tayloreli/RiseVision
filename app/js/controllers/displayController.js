'use strict'

riseApp.controller('displayController',
	function displayController($scope, displaysData){
		$scope.displays;
		$scope.message = "Hello World";
		
		$scope.getAllDisplays = function(){
			$scope.displays = displaysData.items;
		}
	}
);