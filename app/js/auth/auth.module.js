'use strict';

angular.module('auth', ['auth.controllers','ui.router'])
.config(['$stateProvider',function($stateProvider) {
	$stateProvider.state('login', {
		url : '/login',
		templateUrl : 'js/auth/views/login.html',
		// controller : 'AuthCtrl',
		// resolve: {
		// 	confPromise: ['confService', function(confService){
		// 		return userService.load();
		// 	}]
		// }
	})
  .state('register', {
		url : '/register',
		templateUrl : 'js/auth/views/register.html',
		controller : 'AuthCtrl',
		controllerAs: 'vm'
		// resolve: {
		// 	confPromise: ['confService', function(confService){
		// 		return userService.load();
		// 	}]
		// }
	});

}]);
