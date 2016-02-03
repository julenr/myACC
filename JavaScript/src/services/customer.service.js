//(function(){
//
//  'use strict';
//
//  angular.module('myAccApp')
//    .factory('customerService', CustomerService);
//
//  function CustomerService($http) {
//
//    var service = this;
//    service.getCustomer = getCustomer;
//
//    return service;
//
//    function getCustomer(id) {
//      return $http.get(portalContext  + '/json/customer/' + id)
//        .then(function(data) {
//          return data.data;
//        });
//    }
//  }
//})();


import angular from 'angular';

class CustomerService {
  constructor($http) {
    this.$http = $http;
  }

  getCustomer(id) {
    return this.$http.get(`/json/customer/${id}`)
        .then(function(data) {
          return data.data;
        });
  }
}

export default angular.module('services.customer-service', [])
    .service('customerService', CustomerService)
    .name;
