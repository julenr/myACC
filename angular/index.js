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


if(__BOOTSTRAP__) { //Only add Bootstrap for local development. WebSphere already has added it
  require ('bootstrap/dist/css/bootstrap.css');
  require ('./assets/css/design.css');
  require ('./assets/css/ebusiness.css');
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
// import businessCustomer from './components/businessCustomer';
// import navBar from './components/navbar';
import invoiceService from './services/invoice';

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
        invoiceService
      ])
      .config(routing);

    angular.bootstrap(body, [app.name], {strictDi: true});
  });
