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

import formFields from './form.fields';
import moment from 'moment';

export default class RootController {
  /*@ngInject*/
  constructor(InvoiceService) {
    this.invoiceService = InvoiceService;
    this.sessionValue = (sessionStorage.getItem('ACC')) ?
      JSON.parse(sessionStorage.getItem('ACC'))
      :
      'Initial session storage value';

    this.localValue = (localStorage.getItem('ACC')) ?
      JSON.parse(localStorage.getItem('ACC'))
      :
      'Initial local storage value';

    this.invoiceModel = {
      invoiceDate: moment().format('DD/MM/YYYY'),
      invoiceNumber: 'ACC567816',
      treatmentDetails: [
        {feeBasedOn: 'Time'}
      ]
    };
    this.invoiceFields = formFields;
    this.options = {};
  }

  onSubmit(){
    console.log('MODEL ', this.invoiceModel);
    this.invoiceService.sendInvoice(this.invoiceModel);
  }

  clearSessionStorage(){
    this.sessionValue = '';
    sessionStorage.removeItem('ACC');
  }

  clearLocalStorage(){
    this.localValue = '';
    localStorage.removeItem('ACC');
  }

  saveSessionStorage() {
    sessionStorage.setItem('ACC', JSON.stringify(this.sessionValue));
  }

  saveLocalStorage() {
    localStorage.setItem('ACC', JSON.stringify(this.localValue));
  }

}