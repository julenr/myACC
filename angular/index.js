import 'bootstrap/dist/css/bootstrap.css';
import './styles/screen.less';

import "babel-polyfill";
import angular from 'angular';
import uirouter from 'angular-ui-router';
import formly from 'angular-formly';
import formlyTemplateBootstrap from 'angular-formly-templates-bootstrap';

import ngRedux from 'ng-redux';

import routing from './index.config'
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
        formly,
        formlyTemplateBootstrap,
        ngRedux,
        root
      ])
      .config(routing);

    angular.bootstrap(body, [app.name], {strictDi: true});
  });
