'use strict';

angular.module('auth.services', [])
.factory('AuthService', [ '$http', '$q', 'API', function($http, $q, API) {

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
    return $http.post('/api/v1/accounts/', user);
  }

  return service;
}]);
