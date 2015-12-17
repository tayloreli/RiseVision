'use strict'

riseApp.controller('presentationController',
	function presentationController($scope){
		$scope.presentations = [];
		
		$scope.getAllPresentations = function(callback){
			var parameters = {};
				
			// loading and calling the api passing the parameter object
			gapi.client.load(API_NAME, API_VER, function () {
				var request = gapi.client.core.presentation.list(parameters);
		
				request.execute(function (jsonResp, rawResp) {
					callback(jsonResp, rawResp, 'listPresentationResult');
				});
			}, ROOT);
		}
		
		$scope.handleResponse = function(jsonResp, rawResp, type) {
			var resultJson = (jsonResp.result) ? jsonResp.result : jsonResp;
			$scope.presentations = resultJson.items ? resultJson.items : resultJson.message ;
			$scope.$apply();
		}
		
		$scope.getAllPresentations($scope.handleResponse);
	}
);