import angular from 'angular';

import navBarController from './navBar.controller';
import navBarDirective from './navBar.directive';

export default angular.module('directives.navBar', [])
  .controller('navBarController', navBarController)
  .directive('navBar', navBarDirective)
  .name;