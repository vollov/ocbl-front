'use strict';

angular.module('auth.controllers', ['auth.services'])
.controller('NavCtrl', [function(){

}])
.controller('AuthCtrl', ['$state', 'AuthService',
function($state, AuthService) {
  var vm = this;

	vm.user = {};

	vm.register = function() {

    AuthService.register(vm.user);
		// authService.register($scope.user).error(function(error) {
		// 	$scope.error = error;
		// }).then(function() {
		// 	$state.go('home');
		// });
	};

	// $scope.logIn = function() {
	// 	authService.logIn($scope.user).error(function(error) {
	// 		$scope.error = error;
	// 	}).then(function() {
	// 		$state.go('users');
	// 	});
	// };
}])
.controller('LoginController', ['$state', 'AuthService',
function($state, AuthService) {
  var vm = this;

	vm.user = {};

  activate();

  function activate() {
    // If the user is authenticated, they should not be here.
    if (AuthService.isAuthenticated()) {
      $location.url('/');
    }
  }

  vm.login = function(){
    Authentication.login(vm.email, vm.password);
  }

}]);
