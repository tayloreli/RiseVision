'use strict'

riseApp.controller('displayController',
	function displayController($scope, displaysData){
		$scope.displays = displaysData.items;
		$scope.message = "Hello World";
	}
);