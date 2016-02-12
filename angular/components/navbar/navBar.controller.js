import angular from 'angular';

export default class navBarController {
  /*@ngInject*/
  constructor($scope, $state) {
    this.routes = [
      {path: '/', name: 'Create invoice'},
      {path: '/', name: 'Upload invoices'},
      {path: '/', name: 'Invoice status'},
      {path: '/', name: 'Invoice submissions'},
      {path: '/', name: 'Payment advice'},
      {path: '/', name: 'Claim status'}
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
