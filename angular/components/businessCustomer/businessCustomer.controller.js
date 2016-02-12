export default class BusinessCustomerController {
  /*@ngInject*/
  constructor(CustomerService) {
    CustomerService.getCustomer(1)
      .then((data) => {
        this.details = data;
      });
  }
}
