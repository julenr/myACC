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

import template from './navBar.template.html';

export default function navBarDirective() {
  return {
    template,
    restrict: 'AE',
    replace: true,
    transclude: false,
    scope: {
      title: '@'
    },
    controller: 'navBarController',
    controllerAs: 'ctrl'
  };
}
