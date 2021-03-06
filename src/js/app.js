

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var gfl = {};

gfl.app         = angular.module('gfl', ['ionic', 'gfl.controllers', 'gfl.services', 'ngCordova', 'ngResource']);
gfl.controllers = angular.module('gfl.controllers', []),
gfl.services    = angular.module('gfl.services', [])

.run(function($ionicPlatform, $rootScope) {
	$rootScope.VERSION = window.VERSION;
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
	.state('tab', {
		url: "/tab",
		abstract: true,
		templateUrl: "templates/tabs.html"
	})

	// Each tab has its own nav history stack:

	// .state('tab.dash', {
	// 	url: '/dash',
	// 	views: {
	// 		'tab-dash': {
	// 			templateUrl: 'templates/tab-dash.html',
	// 			controller: 'DashCtrl'
	// 		}
	// 	}
	// })

	// Custom stuff starts here

	.state('tab.camps', {
		url: '/camps',
		views: {
			'tab-camps': {
				templateUrl: 'templates/tab-camps.html',
				controller: 'CampsCtrl'
			}
		}
	})

	.state('tab.camps-register', {
		url: '/register',
		views: {
			'tab-camps': {
				templateUrl: 'templates/camps-register.html',
				controller: 'CampsRegisterCtrl'
			}
		}
	})
	

	.state('tab.trips', {
		url: '/trips',
		views: {
			'tab-trips': {
				templateUrl: 'templates/tab-trips.html',
				controller: 'TripsCtrl'
			}
		}
	})

	.state('tab.shop', {
		url: '/shop',
		views: {
			'tab-shop': {
				templateUrl: 'templates/tab-shop.html',
				controller: 'ShopCtrl'
			}
		}
	})

	.state('tab.calendar', {
		url: '/calendar',
		views: {
			'tab-calendar': {
				templateUrl: 'templates/tab-calendar.html',
				controller: 'CalendarCtrl'
			}
		}
	})

	.state('tab.about', {
		url: '/about',
		views: {
			'tab-about': {
				templateUrl: 'templates/tab-about.html',
				controller: 'AboutCtrl'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/camps');

});
