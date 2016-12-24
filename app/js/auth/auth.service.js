'use strict';

angular.module('auth.services', ['ngCookies'])
.constant('host', 'http://localhost:5001')
.constant('clientToken', 'ocbl-client-token')
.factory('AuthService', [ '$http', '$cookies', 'API', 'host', 'clientToken', function($http, $cookies, API, host, clientToken) {

	var service = {
			users : [],
			groups : [],
			key: 'user-list',
	};

	service.saveToken = function(token){
		localStorage[clientToken] = token;
	}

	service.getToken = function() {
		return localStorage[clientToken];
	}

	service.isLoggedIn = function() {
		var token = service.getToken();
		//console.log('in auth.isLoggedIn token=' + token);
		if (token && token != 'undefined') {
			var payload = JSON.parse($window.atob(token.split('.')[1]));

			return payload.exp > Date.now() / 1000;
		} else {
			return false;
		}
	};

  /**
  * @name register
  * @desc Try to register a new user
  * @param {user} user The user entered in form by the user
  * @returns {Promise}
  * @memberOf auth.services.AuthService
  */
  service.register = function(user){
    return $http.post(host + '/api/v1/accounts/', user);
  }

	serviec.logIn = function(user) {
		return $http.post(host + '/api/v1/login', user).then(loginSuccessFn, loginErrorFn);

		function loginSuccessFn(data, status, headers, config) {
	    service.saveToken(data.token);
	  }

		function loginErrorFn(data, status, headers, config) {
			console.error('login failure!');
		}
	};

	service.logOut = function() {
		localStorage.removeItem(clientToken);
	};

  return service;
}]);
