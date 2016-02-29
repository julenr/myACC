import formFields from './form.fields';
import moment from 'moment';

export default class RootController {
  /*@ngInject*/
  constructor() {
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
      invoiceNumber: 'ACC567815',
      DOB: '',
      treatmentDetails: [
        {
          investmentName:'abc',
          investmentDate:(new Date()).toDateString(),
          stockIdentifier:''
        },
        {
          investmentName:'abc',
          investmentDate:(new Date()).toDateString(),
          stockIdentifier:''
        }
      ]
    };
    this.invoiceFields = formFields;
    this.options = {};

  }

  onSubmit(){
    console.info(this.invoiceModel);
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