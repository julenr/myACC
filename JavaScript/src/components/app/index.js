import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.routes';
import AppController from './app.controller';

export default angular.module('app', [uirouter])
    .config(routing)
    .controller('AppController', AppController)
    .name;