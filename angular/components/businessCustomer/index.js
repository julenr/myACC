import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './businessCustomer.routes';
import BusinessCustomerController from './businessCustomer.controller';

export default angular.module('controller.businessCustomer', [uirouter])
  .config(routing)
  .controller('BusinessCustomerController', BusinessCustomerController)
  .name;