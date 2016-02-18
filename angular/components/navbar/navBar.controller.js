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
