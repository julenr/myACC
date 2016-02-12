import template from './root.template.html';
export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('root', {
      template,
      url: '/',
      controller: 'RootController',
      controllerAs: 'root'
    });
}