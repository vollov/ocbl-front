'use strict';

angular.module('auth.controllers', [])
.controller('NavCtrl', [function(){

}]).controller('AuthCtrl', ['$state', 'AuthService',
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
}]);
