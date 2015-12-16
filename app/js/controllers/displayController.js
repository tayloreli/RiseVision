'use strict'

riseApp.controller('displayController',
	function displayController($scope, cmApiService){
		$scope.displays = [];
		$scope.message = "Hello World";
		
		cmApiService.execute('core.display.list').then(
			function(resp){
				console.log(resp);
			},
			function(reason){
				console.log(reason);
			}
		);
		listDisplay("", "", "", "", "", "", function (jsonResp, rawResp, type) {
			var resultJson = (jsonResp.result) ? jsonResp.result : jsonResp;
			$scope.displays = resultJson.items;
			$scope.$apply();
		});
	}
);