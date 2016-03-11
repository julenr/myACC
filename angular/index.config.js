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