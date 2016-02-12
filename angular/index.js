import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css';
import './styles/screen.less';

import "babel-polyfill";
import angular from 'angular';
import uirouter from 'angular-ui-router';
import material from 'angular-material';

import routing from './index.config'
import root from './components/root';
import businessCustomer from './components/businessCustomer';
import navBar from './components/navbar';
import customerService from './services/customer';


angular
  .element(document)
  .ready(function (){
    let appName = 'myAccApp';
    let body = document.getElementsByTagName("body")[0];

    let app = angular.module(appName,
      [
        uirouter,
        root,
        navBar,
        businessCustomer,
        customerService
      ])
      .config(routing);

    angular.bootstrap(body, [app.name], {strictDi: true});
  });
