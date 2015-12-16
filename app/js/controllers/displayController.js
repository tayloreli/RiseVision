'use strict'

riseApp.controller('displayController',
	function displayController($scope, displayList){
		$scope.displays = displayList;
		$scope.message = "Hello World";
		
		listDisplay("", "", "", "", "", "", function (jsonResp, rawResp, type) {
			var resultJson = (jsonResp.result) ? jsonResp.result : jsonResp;
			$scope.displays = resultJson.items;
			$scope.$apply();
		});
	}
);