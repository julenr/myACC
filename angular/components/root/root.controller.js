
export default class RootController {
  constructor() {
    this.sessionValue = (sessionStorage.getItem('ACC')) ?
      JSON.parse(sessionStorage.getItem('ACC'))
      :
      'Initial session storage value';

    this.localValue = (localStorage.getItem('ACC')) ?
      JSON.parse(localStorage.getItem('ACC'))
      :
      'Initial local storage value';

    this.invoiceModel = {};
    this.invoiceFields = [
      {
        key: 'vendorID',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'ACC Vendor ID',
          placeholder: 'Enter your ACC vendor ID',
          required: true,
          focus: true,
          maxlength: 12
        }
      }
    ];
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