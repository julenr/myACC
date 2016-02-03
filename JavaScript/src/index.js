import 'bootstrap/dist/css/bootstrap.css';
import './styles/screen.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';

import routing from './index.config'
import app from './components/app';
import businessCustomer from './components/businessCustomer';
import navbar from './components/navbar/navbar.directive';
import customerService from './services/customer.service';

angular.module('myAccApp',
    [   uirouter,
        ngCookies,
        ngResource,
        app,
        businessCustomer,
        navbar,
        customerService
    ])
    .config(routing);
