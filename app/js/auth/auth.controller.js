'use strict';

angular.module('auth.controllers', ['auth.services'])
.controller('NavCtrl', [function(){

}])
.controller('RegisterCtrl', ['$state', 'AuthService',
function($state, AuthService) {
  var vm = this;

	vm.user = {};

	vm.register = function() {

    return AuthService.register(vm.user).then(registerSuccessFn, registerErrorFn);

    function registerSuccessFn(data, status, headers, config) {
      AuthService.login(email, password);
    }

    function registerErrorFn(data, status, headers, config) {
      console.error('register failure!');
    }
	};

  activate();

  vm.activate = function() {
    // If the user is authenticated, they should not be here.
    if (AuthService.isAuthenticated()) {
      $state.go('profile');
    }
  }
	// $scope.logIn = function() {
	// 	authService.logIn($scope.user).error(function(error) {
	// 		$scope.error = error;
	// 	}).then(function() {
	// 		$state.go('users');
	// 	});
	// };
}])
.controller('LoginCtrl', ['$state', 'AuthService',
function($state, AuthService) {
  var vm = this;

	vm.user = {};

  activate();

  vm.activate = function() {
    // If the user is authenticated, they should not be here.
    if (AuthService.isAuthenticated()) {
      $state.go('profile');
    }
  }

  vm.login = function(){
    AuthService.login(vm.user);
  }

}]);
