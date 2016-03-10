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