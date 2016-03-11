//
//
//              Created by
//            __ _____ __    _____ _____    _____ _____    __ _____
//         __|  |  |  |  |  |   __|   | |  | __  |     |__|  |     |
//        |  |  |  |  |  |__|   __| | | |  |    -|  |  |  |  |  |  |
//        |_____|_____|_____|_____|_|___|  |__|__|_____|_____|_____|
//
//                on 11/03/2016
//                   isusk246@gmail.com
//
//

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './businessCustomer.routes';
import BusinessCustomerController from './businessCustomer.controller';

export default angular.module('controller.businessCustomer', [uirouter])
  .config(routing)
  .controller('BusinessCustomerController', BusinessCustomerController)
  .name;