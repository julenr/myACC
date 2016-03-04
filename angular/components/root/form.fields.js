/**
 * Created by RojoJ on 19/02/2016.
 */
import moment from 'moment';

const validDateFormats = ['DD/MM/YYYY', 'DD-MM-YYYY', 'DD.MM.YYYY', 'DD.MM.YY', 'DD/MM/YY', 'DD-MM-YY'];

const formFields = [
  { template: `<h1>Vendor Details</h1>` },
  {
    className: 'row',
    fieldGroup: [
      {
        id: 'vendorID',
        key: 'vendorID',
        type: 'input',
        className: 'col-xs-6',
        templateOptions: {
          type: 'text',
          label: 'ACC Vendor ID',
          placeholder: 'Enter your ACC vendor ID',
          required: true,
          focus: true,
          minlength: 1,
          maxlength: 12,
          onKeypress: function ($viewValue = '', $modelValue, scope, key){
            if(key.charCode && $viewValue.length === scope.options.templateOptions.maxlength){
              scope.options.data.showInfo = true;
            } else {
              scope.options.data.showInfo = false;
            }
          },
          onBlur: function ($viewValue = '', $modelValue, scope){
            scope.options.data.showInfo = false;
          },
          info: `This field can not be more than 12 characters long`
        },
        validators: {
          vendorID: {
            expression: function (viewValue = '', modelValue, scope){
              scope.options.data.showInfo = false;
              return true;
            }
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '12'}
      },
      {
        id: 'contractID',
        key: 'contractID',
        type: 'input',
        className: 'col-xs-6',
        templateOptions: {
          type: 'text',
          label: 'ACC Contract Number',
          placeholder: 'Enter your ACC Contract Number',
          required: false,
          maxlength: 8,
          onKeypress: function ($viewValue = '', $modelValue, scope, key) {
            if (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength) {
              scope.options.data.showInfo = true;
            } else {
              scope.options.data.showInfo = false;
            }
          },
          onBlur: function ($viewValue = '', $modelValue, scope) {
            scope.options.data.showInfo = false;
          },
          info: 'This field can not be more than 8 characters long'
        },
        validators: {
          contractID: {
            expression: function (viewValue = '', modelValue, scope) {
              scope.options.data.showInfo = false;
              return true;
            }

          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {
          'maxlength': '8'
        }
      }
    ]
  },
  { template: `<h1>Client Details</h1>` },
  {
    className: 'row',
    fieldGroup: [
      {
        id: 'firstName',
        key: 'firstName',
        type: 'input',
        className: 'col-xs-4',
        templateOptions: {
          type: 'text',
          label: 'First Name',
          placeholder: 'Enter Client First Name',
          required: true,
          minlength: 1,
          maxlength: 20,
          onKeypress: function ($viewValue = '', $modelValue, scope, key) {
            if(key.charCode && $viewValue.length === scope.options.templateOptions.maxlength ) {
              scope.options.data.showInfo = true;
            } else {
              scope.options.data.showInfo = false;
            }
          },
          onBlur: function ($viewValue = '', $modelValue, scope){
            scope.options.data.showInfo = false;
          },
          info: 'This field can not be more than 20 characters long'
        },
        validators: {
          vendorID: {
            expression: function (viewValue = '', modelValue, scope) {
              scope.options.data.showInfo = false;
              return true;
            }
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '20'}
      },
      {
        id: 'surname',
        key: 'surname',
        type: 'input',
        className: 'col-xs-4',
        templateOptions: {
          type: 'text',
          label: 'Surname',
          placeholder: 'Enter Client Surname',
          required: true,
          minlength: 1,
          maxlength: 25,
          onKeypress: function($viewValue = '', $modelValue, scope, key) {
            if(key.charCode && $viewValue.length === scope.options.templateOptions.maxlength ) {
              scope.options.data.showInfo = true;
            } else {
              scope.options.data.showInfo = false;
            }
          },
          onBlur: function ($viewValue = '', $modelValue, scope){
            scope.options.data.showInfo = false;
          },
          info: 'This field can not be more than 25 characters long'
        },
        validators: {
          vendorID: {
            expression: function (viewValue = '', modelValue, scope) {
              scope.options.data.showInfo = false;
              return true;
            }
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '25'}
      },
      {
        id: 'DOB',
        key: 'DOB',
        type: 'datePicker',
        className: 'col-xs-4',
        templateOptions: {
          type: 'text',
          required: true,
          label: 'Date of Birth',
          value: moment().format('DD/MM/YYYY'),
          onChange: function (viewValue = '', modelValue, scope) {
            console.log('DOB CHANGES');
            scope.form.DOA.$validate();
          }
        },
        validators: {
          checkFutureDate: {
            expression: function (viewValue = '', modelValue, scope) {
              return (moment(viewValue, validDateFormats, true) > moment().startOf('day')) ? false : true;
            },
            message: '"Can not be a future date"'
          }
        }
      }
    ]
  },
  { template: `<h1>ACC Claim Details</h1>` },
  {
    className: 'row',
    fieldGroup: [
      {
        id: 'NHI',
        key: 'NHI',
        type: 'input',
        className: 'col-xs-12',
        templateOptions: {
          type: 'text',
          label: 'National Health Index Number',
          placeholder: 'Enter your NHI Number',
          required: false,
          minlength: 1,
          maxlength: 7,
          onKeypress: function ($viewValue = '', $modelValue, scope, key) {
            const field = scope.form[scope.name];
            const realViewValue = field.$viewValue || '';
            const showInfo = (field.$untouched || (field.$touched && field.$valid));
            if(showInfo && key.charCode && realViewValue.length === scope.options.templateOptions.maxlength) {
              scope.options.data.showInfo = true;
            } else {
              scope.options.data.showInfo = false;
            }
          },
          onBlur: function ($viewValue = '', $modelValue, scope) {
            scope.options.data.showInfo = false;
          },
          info: 'This field can not be more than 7 characters long'
        },
        validators: {
          vendorID: {
            expression: function (viewValue = '', modelValue, scope) {
              scope.options.data.showInfo = false;
              return true;
            }
          },
          checkValidNHI: {
            expression: function (viewValue = '', modelValue, scope) {
              const value = modelValue || viewValue;
              if (viewValue === '') return true;
              return /([a-zA-Z]){3}([0-9]){4}/.test(value);
            },
            message: '"Value entered is not a valid NHI"'
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '7'}
      },
      {
        id: 'claimNumber',
        key: 'claimNumber',
        type: 'input',
        className: 'col-xs-12',
        templateOptions: {
          type: 'text',
          label: 'ACC Claim Number',
          placeholder: 'Enter Client ACC Claim Number',
          required: true,
          minlength: 1,
          maxlength: 12,
          onKeypress: function ($viewValue = '', $modelValue, scope, key) {
            const field = scope.form[scope.name];
            const realViewValue = field.$viewValue || '';
            const showInfo = (field.$untouched || (field.$touched && field.$valid));
            if(showInfo && key.charCode && realViewValue.length === scope.options.templateOptions.maxlength) {
              scope.options.data.showInfo = true;
            } else {
              scope.options.data.showInfo = false;
            }
          },
          onBlur: function ($viewValue = '', $modelValue, scope) {
            scope.options.data.showInfo = false;
          },
          info: 'This field can not be more than 12 characters long'
        },
        parsers: [toUpperCase],
        validators: {
          vendorID: {
            expression: function (viewValue = '', modelValue, scope) {
              scope.options.data.showInfo = false;
              return true;
            }
          },
          checkValid: {
            expression: function (viewValue = '', modelValue, scope) {
              const value = modelValue || viewValue;
              return /^[A-Z]{2}[0-9]{8}$|^[A-Z]{2}[0-9]{5}$|^[A-Z][0-9]{6}$|^[0-9]{8}$|^[A-Z][0-9]{10}$|^[0-9]{11}$/.test(value);
            },
            message: '"This not a valid Claim Number"'
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '12'}
      },
      {
        id: 'DOA',
        key: 'DOA',
        type: 'datePicker',
        className: 'col-xs-12',
        templateOptions: {
          type: 'text',
          required: false,
          label: 'Date of accident',
          value: moment().format('DD/MM/YYYY')
        },
        validators: {
          checkFutureDate: {
            expression: function (viewValue = '', modelValue, scope) {
              return (moment(viewValue, validDateFormats, true) > moment().startOf('day')) ? false : true;
            },
            message: '"Can not be a future date"'
          },
          checkIfAfterDOB: {
            expression: function (viewValue = '', modelValue = '', scope) {
              if(!moment(viewValue, validDateFormats, true).isValid()) return true;
              //Force to set Touched flag when the date cames from datepicker otherwise it remains untouched
              scope.form.DOA.$setTouched();
              //scope.form.DOA.$validate();
              const wrongDate = moment(scope.form.DOA.$viewValue, validDateFormats, true) < moment(scope.form.DOB.$viewValue, 'DD/MM/YYYY', true);
              console.info(scope);
              return !wrongDate;
            },
            message: '"Date of accident should be after Date of birth. Fix it and Click on Submit"'
          }
        },
        extras: {
          validateOnModelChange: true
        }
      },
      {
        id: 'additionalComments',
        key: 'additionalComments',
        type: 'textarea',
        className: 'col-xs-12',
        templateOptions: {
          type: 'text',
          label: 'Additional Comments',
          required: false,
          minlength: 1,
          maxlength: 255,
          onKeypress: function ($viewValue = '', $modelValue, scope, key) {
            if (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength) {
              scope.options.data.showInfo = true;
            } else {
              scope.options.data.showInfo = false;
            }
          },
          onBlur: function ($viewValue = '', $modelValue, scope) {
            scope.options.data.showInfo = false;
          },
          info: 'This field can not be more than 255 characters long'
        },
        validators: {
          vendorID: {
            expression: function (viewValue = '', modelValue, scope) {
              scope.options.data.showInfo = false;
              return true;
            }
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '255'}
      }
    ]
  },
  { template: `<hr><h1>Invoice details</h1>` },
  {
    className: 'row',
    fieldGroup: [
      {
        id: 'invoiceNumber',
        key: 'invoiceNumber',
        type: 'input',
        className: 'col-xs-12',
        templateOptions: {
          type: 'text',
          disabled: true,
          label: 'Invoice Number'
        }
      },
      {
        id: 'invoiceReference',
        key: 'invoiceReference',
        type: 'input',
        className: 'col-xs-6',
        templateOptions: {
          type: 'text',
          label: 'Invoice Reference',
          placeholder: 'Enter your ACC Invoice Reference',
          required: false,
          minlength: 1,
          maxlength: 20,
          onKeypress: function($viewValue = '', $modelValue, scope, key) {
            if(key.charCode && $viewValue.length === scope.options.templateOptions.maxlength ) {
              scope.options.data.showInfo = true;
            } else {
              scope.options.data.showInfo = false;
            }
          },
          onBlur: function ($viewValue = '', $modelValue, scope){
            scope.options.data.showInfo = false;
          },
          info: 'This field can not be more than 20 characters long'
        },
        validators: {
          vendorID: {
            expression: function (viewValue = '', modelValue, scope) {
              scope.options.data.showInfo = false;
              return true;
            }
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '20'}
      },
      {
        id: 'invoiceDate',
        key: 'invoiceDate',
        type: 'datePicker',
        className: 'col-xs-4',
        templateOptions: {
          type: 'text',
          required: true,
          label: 'Invoice Date',
          value: moment().format('DD/MM/YYYY'),
          info: 'Invoices over 12 months old may need further ACC approval to release payment'
        },
        validators: {
          checkOldDate: {
            expression: function(viewValue = '', modelValue, scope) {
              if(moment(modelValue, 'DD/MM/YYYY', true).isValid() &&
                moment(modelValue, 'DD/MM/YYYY') < moment().subtract(12, 'months')) {
                scope.options.data.showInfo = true;
              } else {
                scope.options.data.showInfo = false;
              }
              return true;
            }
          },
          checkFutureDate: {
            expression: function(viewValue = '', modelValue, scope) {
              return (moment(viewValue, validDateFormats, true) > moment().startOf('day')) ? false : true;
            },
            message: '"Can not be a future date"'
          },
          checkIfAfterDOB: {
            expression: function (viewValue = '', modelValue, scope) {
              return (moment(viewValue, validDateFormats, true) < moment(scope.model.DOB, 'DD/MM/YYYY', true)) ? false : true;
            },
            message: '"Date of Invoice should be after Date of birth. Fix it and Click on Submit"'
          }
        },
        extras: {
          validateOnModelChange: true
        },
        data: {showInfo: false}
      }
    ]
  }
  // THIS PART IS FOT THE NEXT SPRINT
  /*
  ,
  { template: `<h1>Treatment Details</h1>` },
  {
    type: 'treatmentDetail',
    key: 'treatmentDetails',
    templateOptions: {
      btnText: 'Add another service',
      fields: [
        {
          className: 'row',
          fieldGroup: [
            {
              type: 'datePicker',
              key: 'treatmentDate',
              className: 'col-xs-4',
              templateOptions: {
                label: 'Date:',
                required: true
              }
            },
            {
              type: 'input',
              key: 'serviceCode',
              className: 'col-xs-4',
              templateOptions: {
                label: 'Service Code:',
                placeholder: 'Enter code',
                required: true,
                minlength: 1,
                maxlength: 10,
                onKeypress: function($viewValue = '', $modelValue, scope, key) {
                  if(key.charCode && $viewValue.length === scope.options.templateOptions.maxlength ) {
                    scope.options.data.showInfo = true;
                  } else {
                    scope.options.data.showInfo = false;
                  }
                },
                onBlur: function ($viewValue = '', $modelValue, scope){
                  scope.options.data.showInfo = false;
                },
                info: 'This field can not be more than 10 characters long'
              },
              validators: {
                vendorID: {
                  expression: function (viewValue = '', modelValue, scope) {
                    scope.options.data.showInfo = false;
                    return true;
                  }
                }
              },
              data: {showInfo: false},
              ngModelElAttrs: {'maxlength': '10'}
            },
            {
              type: 'input',
              key: 'facility',
              className: 'col-xs-4',
              templateOptions: {
                label: 'Facility:',
                placeholder: 'Enter code',
                required: false,
                minlength: 1,
                maxlength: 6,
                onKeypress: function($viewValue = '', $modelValue, scope, key) {
                  if(key.charCode && $viewValue.length === scope.options.templateOptions.maxlength ) {
                    scope.options.data.showInfo = true;
                  } else {
                    scope.options.data.showInfo = false;
                  }
                },
                onBlur: function ($viewValue = '', $modelValue, scope){
                  scope.options.data.showInfo = false;
                },
                info: 'This field can not be more than 6 characters long'
              },
              validators: {
                vendorID: {
                  expression: function (viewValue = '', modelValue, scope) {
                    scope.options.data.showInfo = false;
                    return true;
                  }
                }
              },
              data: {showInfo: false},
              ngModelElAttrs: {'maxlength': '6'}
            },
            {
              key: 'additionalComments',
              type: 'textarea',
              templateOptions: {
                type: 'text',
                label: 'Additional Comments',
                required: false,
                minlength: 1,
                maxlength: 255,
                onKeypress: function($viewValue = '', $modelValue, scope, key) {
                  if(key.charCode && $viewValue.length === scope.options.templateOptions.maxlength ) {
                    scope.options.data.showInfo = true;
                  } else {
                    scope.options.data.showInfo = false;
                  }
                },
                onBlur: function ($viewValue = '', $modelValue, scope){
                  scope.options.data.showInfo = false;
                },
                info: 'This field can not be more than 255 characters long'
              },
              validators: {
                vendorID: {
                  expression: function (viewValue = '', modelValue, scope) {
                    scope.options.data.showInfo = false;
                    return true;
                  }
                }
              },
              data: {showInfo: false},
              ngModelElAttrs: {'maxlength': '255'}
            }
          ]
        }
      ]
    }
  }*/
];

function toUpperCase(value) {
  return (value || '').toUpperCase();
}

export default formFields;