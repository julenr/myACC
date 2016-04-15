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


import CustomerService from './customer.service';

describe('Customer Service', () => {
  let service;

  beforeEach(angular.mock.module('myAccApp'));
  beforeEach(angular.mock.inject(function($http) {
    service = new CustomerService($http);
  }));


  it('is receiving data', function (){
    expect(true).to.be.ok;
    service.getCustomer(1)
      .then((data) => {
        expect(data.firstName).to.equal('Fake Nae');
      });

  });

});
