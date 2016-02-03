import angular from 'angular';
import uirouter from 'angular-ui-router';

function navbar() {
  return {
    restrict: 'AE',
    replace: true,
    transclude: false,
    scope: {
      title: '@'
    },
    controller: function ($scope, $location, $state) {

      $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1).split('/')[0];
        return page === currentRoute ? 'active' : '';
      };

      $scope.routes = [];

      angular.forEach($state.get(), function (value, key) {
        if (value.menu) {
          var routeitem = {};
          routeitem.path = value.url;
          routeitem.name = value.menu;
          $scope.routes.push(routeitem);
        }
      });
      $scope.isCollapsed = false;
    },
    template: '<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">' +
    '<div class="navbar-header">' +
    '<button type="button" class="navbar-toggle" ng-init="navCollapsed = true" ng-click="navCollapsed = !navCollapsed">' +
    '<span class="sr-only">Toggle navigation</span>' +
    '<span class="icon-bar"></span>' +
    '<span class="icon-bar"></span>' +
    '<span class="icon-bar"></span>' +
    '</button>' +
    '<a id="Ludicbrand" class="navbar-brand" href="/">' +
    '<span class="thin" ng-bind="title"></span>' +
    '</a>' +
    '</div>' +
    '<div class="collapse navbar-collapse" ng-class="!navCollapsed && \'in\'">' +
    '<ul class="nav navbar-nav">' +
    '<li ng-repeat="route in routes" data-ng-class="navClass(\'{{route.name}}\')">' +
    '<a ng-href="{{route.path}}" ng-bind="route.name"></a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</nav>'
  };
}

export default angular.module('directives.navbar', [])
    .directive('navbar', navbar)
    .name;