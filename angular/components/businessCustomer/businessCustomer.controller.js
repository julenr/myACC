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
