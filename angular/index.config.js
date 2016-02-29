import reducer from './redux/reducers/index';

export default function routing(
  $urlRouterProvider,
  $locationProvider,
  $ngReduxProvider,
  formlyConfigProvider,
  formlyApiCheck
) {
  'ngInject';
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
  $ngReduxProvider.createStoreWith(reducer, {});

  //Improve performance in production
  if(!__DEV__){
    //formlyApiCheck.disable();
    //formlyConfigProvider.disableWarnings = true;
  }

}