import angular from 'angular';

import CustomerService from './customer.service';

export default angular.module('services.customer-service', [])
  .service('CustomerService', CustomerService)
  .name;