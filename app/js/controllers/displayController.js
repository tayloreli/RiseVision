'use strict'

riseApp.controller('displayController',
	function displayController($scope){
		$scope.displays = [];
		$scope.message = "Hello World";
		
		$scope.getAllDisplays = function(callback){
			var parameters = {};
				
			// loading and calling the api passing the parameter object
			gapi.client.load(API_NAME, API_VER, function () {
				var request = gapi.client.core.display.list(parameters);
		
				request.execute(function (jsonResp, rawResp) {
					callback(jsonResp, rawResp, 'listDisplayResult');
				});
			}, ROOT);
		}
		
		$scope.handleResponse = function(jsonResp, rawResp, type) {
			var resultJson = (jsonResp.result) ? jsonResp.result : jsonResp;
			$scope.displays = resultJson.items ? resultJson.items : resultJson.message ;
			$scope.$apply();
		}
		
		$scope.getAllDisplays($scope.handleResponse);
	}
);