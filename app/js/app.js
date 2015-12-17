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
			controller: 'displayController'
		})
		
		.state('schedules', {
			url: '/schedules',
			templateUrl: 'partials/schedules.html',
			controller: 'scheduleController'
		})
		
		.state('presentations', {
			url: '/presentations',
			templateUrl: 'partials/presentations.html',
			controller: 'presentationController'
		})
});