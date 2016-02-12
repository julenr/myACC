import template from './businessCustomer.template.jade';

export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('businessCustomer', {
      template,
      url: '/businessCustomer',
      menu: 'Business Customer',
      controller: 'BusinessCustomerController',
      controllerAs: 'businessCustomer'
    });
}

