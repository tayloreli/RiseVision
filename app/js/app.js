'use strict'

var riseApp = angular.module('riseApp', ['ui.router']);

riseApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home.html'
		})
		
		.state('displays', {
			url: '/displays',
			templateUrl: 'partials/displays.html',
			controller: 'displayController',
			resolve: {
				displayList: function($stateParams, $q){
					var parameters;
					
					var deferred = $q.defer();
					
					gapi.client.load(API_NAME, API_VER, function () {
						var request = gapi.client.core.display.list(parameters);
				
						request.execute(function (jsonResp, rawResp) {
							deferred.resolve(jsonResp, rawResp);
						});
						return deferred.promise;
					}, ROOT);
				}
			}
		})
		
		.state('schedules', {
			url: '/schedules',
			templateUrl: 'partials/schedules.html',
			controller: 'scheduleController'
		})
		
		.state('presentations', {
			url: '/presentations',
			templateUrl: 'partials/presentations.html'
		})
});