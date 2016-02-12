import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './root.routes';
import RootController from './root.controller';

export default angular.module('root', [uirouter])
  .config(routing)
  .controller('RootController', RootController)
  .name;