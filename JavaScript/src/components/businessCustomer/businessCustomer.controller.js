export default class BusinessCustomerController {
  constructor(customerService) {
      customerService.getCustomer(1)
          .then((data) => {
              this.details = data;
          });
  }
}