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
