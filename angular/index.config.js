import reducer from './redux/reducers/index';

export default function routing($urlRouterProvider, $locationProvider, $ngReduxProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $ngReduxProvider.createStoreWith(reducer, {});
}