'use strict'

riseApp.controller('displayController',
	function displayController($scope){
		$scope.displays = [];
		$scope.message = "Hello World";
		
		$scope.getAllDisplays = function(){
			listDisplay("", "", "", "", "", "", function (jsonResp, rawResp, type) {
				console.log(jsonResp);
				// Because of the way the GAPI works the jsonResp object has got
				// a duplication of the data which comes under result element
				// So here we will output the result to avoid it if there is one.
				// There is the error case so result element would not exist on the json responce
				var resultJson = (jsonResp.result) ? jsonResp.result : jsonResp;
				var jsonData = JSON.stringify(resultJson, undefined, 2);
				$scope.displays = jsonData["items"];
				//output(syntaxHighlight(jsonData), type); // see output.js
			});
		}
	}
);