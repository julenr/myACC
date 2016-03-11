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

import navBarController from './navBar.controller';
import navBarDirective from './navBar.directive';

export default angular.module('directives.navBar', [])
  .controller('navBarController', navBarController)
  .directive('navBar', navBarDirective)
  .name;