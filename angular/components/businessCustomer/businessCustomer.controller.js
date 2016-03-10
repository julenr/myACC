export default class BusinessCustomerController {
  constructor($state) {
    'ngInject';
    this.$state = $state;
    //CustomerService.getCustomer(1)
    //  .then((data) => {
    //    this.details = data;
    //  });
  }

  goToRoot(){
    console.log('ok');
    this.$state.go('invoice');
  }

}
