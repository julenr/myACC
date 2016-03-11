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

export default class navBarController {
  /*@ngInject*/
  constructor($state) {
    this.routes = [
      {path: '/', name: 'Create invoice'}
    ];

    angular.forEach($state.get(), (value, key) => {
      if (value.menu) {
        let routeitem = {};
        routeitem.path = value.url;
        routeitem.name = value.menu;
        this.routes.push(routeitem);
      }
    });
  }
}
