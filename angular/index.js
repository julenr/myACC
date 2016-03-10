if(__BOOTSTRAP__) { //Only add Bootstrap for local development. WebSphere already has added it
  require ('bootstrap/dist/css/bootstrap.css');
}
import './styles/screen.less';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';

import 'babel-polyfill';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-datepicker';
import ngRedux from 'ng-redux';

import routing from './index.config';
import root from './components/root';
import businessCustomer from './components/businessCustomer';
import navBar from './components/navbar';
import customerService from './services/customer';

angular
  .element(document)
  .ready(function (){
    const appName = 'myAccApp';
    const body = document.getElementsByTagName("body")[0];
    const app = angular.module(appName,
      [
        uirouter,
        ngAnimate,
        ngRedux,
        root,
        businessCustomer
      ])
      .config(routing);

    angular.bootstrap(body, [app.name], {strictDi: true});
  });
