'use strict'

riseApp.controller('scheduleController',
	function scheduleController($scope){
		$scope.schedules = [];
		$scope.message = "Hello World";
		
		listSchedule("", "", "", "", "", "", function (jsonResp, rawResp, type) {
			var resultJson = (jsonResp.result) ? jsonResp.result : jsonResp;
			$scope.schedules = resultJson.items;
			$scope.$apply();
		});
	}
);