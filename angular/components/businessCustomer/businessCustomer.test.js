import BusinessCustomerTemplate from './businessCustomer.template.jade';

window.env = {apiHost: ''};

describe('Business Customer component', () => {
  let ctrl;

  beforeEach(angular.mock.module('myAccApp'));
  beforeEach(angular.mock.inject(function($controller, CustomerService) {
    ctrl = $controller('BusinessCustomerController', CustomerService );
  }));

  describe('Template', () => {
    it('has property details', () => {
      expect(BusinessCustomerTemplate()).to.match(/.details./g);
    });
  });

  describe('Controller', () => {
    it('controller', () => {
    });
  });

});
