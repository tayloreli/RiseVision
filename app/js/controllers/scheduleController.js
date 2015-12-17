'use strict'

riseApp.controller('scheduleController',
	function scheduleController($scope){
		$scope.schedules = [];
		$scope.message = "Hello World";
		
		$scope.getAllSchedules = function(callback){
			var parameters = {};
				
			// loading and calling the api passing the parameter object
			gapi.client.load(API_NAME, API_VER, function () {
				var request = gapi.client.core.schedule.list(parameters);
		
				request.execute(function (jsonResp, rawResp) {
					callback(jsonResp, rawResp, 'listScheduleResult');
				});
			}, ROOT);
		}
		
		$scope.handleResponse = function(jsonResp, rawResp, type) {
			var resultJson = (jsonResp.result) ? jsonResp.result : jsonResp;
			$scope.schedules = resultJson.items ? resultJson.items : resultJson.message ;
			$scope.$apply();
		}
		
		$scope.getAllSchedules($scope.handleResponse);
	}
);