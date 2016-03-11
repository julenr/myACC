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

import template from './root.template.html';

export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('invoice', {
      template,
      url: '/',
      controller: 'RootController',
      controllerAs: 'root'
    });

}