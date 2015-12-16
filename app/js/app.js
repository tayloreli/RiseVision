'use strict'

var riseApp = angular.module('riseApp', ['ui.router', 'cmGoogleApi']);

riseApp.config(function($stateProvider, $urlRouterProvider, googleClientProvider){
	googleClientProvider
		.loadGoogleAuth({
			cookie_policy: 'single_host_origin',
			hosted_domain: 'yescorise.herokuapp.com',
			fetch_basic_profile: true
		})
		.setClientId('1040382116862-f6rh7l7vgm173ndh8d1lneui1g57k8mm.apps.googleusercontent.com')
		.addScope('https://www.googleapis.com/auth/userinfo.email')
		.addApi('core','v1','https://rvaserver2.appspot.com/_ah/api')
		.addApi('oauth2', 'v2');
	
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home.html'
		})
		
		.state('displays', {
			url: '/displays',
			templateUrl: 'partials/displays.html',
			controller: 'displayController'
			/*resolve: {
				displayList: function($stateParams, $q){
					var parameters = {};
					
					var deferred = $q.defer();
					
					gapi.client.load(API_NAME, API_VER, function () {
						var request = gapi.client.core.display.list(parameters);
				
						request.execute(function (jsonResp, rawResp) {
							deferred.resolve(jsonResp.items);
						});
						return deferred.promise;
					}, ROOT);
				}
			}*/
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