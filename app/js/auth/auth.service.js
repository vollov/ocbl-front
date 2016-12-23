'use strict';

angular.module('auth.services', [])
.factory('AuthService', [ '$http', '$cookies', 'API', function($http, $cookies, API) {

	var service = {
			users : [],
			groups : [],
			key: 'user-list',
	};

  /**
  * @name register
  * @desc Try to register a new user
  * @param {user} user The user entered in form by the user
  * @returns {Promise}
  * @memberOf auth.services.AuthService
  */
  service.register = function(user){
    return $http.post('/api/v1/auth/login/', user);
  }


	serviec.logIn = function(user) {
		return $http.post(url + '/login', user).then(loginSuccessFn, loginErrorFn);

		function loginSuccessFn(data, status, headers, config) {
	    Authentication.setAuthenticatedAccount(data.data);
	    window.location = '/';
	  }

		function loginErrorFn(data, status, headers, config) {
			console.error('login failure!');
		}
	};

	service.logOut = function() {
		$window.localStorage.removeItem('beryl-client-token');
	};

	service.getAuthenticatedAccount = function () {
			if (!$cookies.authenticatedAccount) {
					return;
			}
			return JSON.parse($cookies.authenticatedAccount);
	}

	service.isAuthenticated = function() {
			return !!$cookies.authenticatedAccount;
	}

	service.setAuthenticatedAccount = function(account) {
			$cookies.authenticatedAccount = JSON.stringify(account);
	}

	service.unauthenticate = function() {
			delete $cookies.authenticatedAccount;
	}

  return service;
}]);
