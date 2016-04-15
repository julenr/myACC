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

import moment from 'moment';

const validDateFormats = ['DD/MM/YYYY', 'DD-MM-YYYY', 'DD.MM.YYYY', 'DD.MM.YY', 'DD/MM/YY', 'DD-MM-YY'];

const formFields = [
  { template: '<h1>Vendor Details</h1>', className: 'group-label' },
  {
    className: 'row',
    fieldGroup: [
      {
        id: 'vendorID',
        key: 'vendorId',
        type: 'input',
        className: 'col-xs-6',
        templateOptions: {
          type: 'text',
          label: 'ACC Vendor ID',
          placeholder: 'Enter your ACC vendor ID',
          required: true,
          focus: true,
          maxlength: 12,
          onKeypress: ($viewValue = '', $modelValue, scope, key) => {
            scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength);
          },
          onBlur: (...args) => {
            return hideInfo(args[2]);
          },
          info: `This field can not be more than 12 characters long`
        },
        parsers: [toUpperCase],
        validators: {
          upperCase: {
            expression: (viewValue = '', modelValue = '', scope) => {
              scope.form[scope.name].$setViewValue(modelValue);
              scope.form[scope.name].$render();
              return true;
            }
          },
          hideInfo: {
            expression: (...args) => {
              return hideInfo(args[2]);
            }
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '12'}
      },
      {
        id: 'contractID',
        key: 'contractId',
        type: 'input',
        className: 'col-xs-6',
        templateOptions: {
          type: 'text',
          label: 'ACC Contract Number',
          placeholder: 'Enter your ACC Contract Number',
          maxlength: 8,
          onKeypress: ($viewValue = '', $modelValue, scope, key) => {
            scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength);
          },
          onBlur: (...args) => {
            return hideInfo(args[2]);
          },
          info: 'This field can not be more than 8 characters long'
        },
        validators: {
          hideInfo: {
            expression: (...args) => {
              return hideInfo(args[2]);
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
  { template: '<h1>Client Details</h1>', className: 'group-label' },
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
          maxlength: 20,
          onKeypress: ($viewValue = '', $modelValue, scope, key) => {
            scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength );
          },
          onBlur: (...args) => {
            return hideInfo(args[2]);
          },
          info: 'This field can not be more than 20 characters long'
        },
        validators: {
          hideInfo: {
            expression: (...args) => {
              return hideInfo(args[2]);
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
          maxlength: 25,
          onKeypress: ($viewValue = '', $modelValue, scope, key) => {
            scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength );
          },
          onBlur: (...args) => {
            return hideInfo(args[2]);
          },
          info: 'This field can not be more than 25 characters long'
        },
        validators: {
          hideInfo: {
            expression: (...args) => {
              return hideInfo(args[2]);
            }
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '25'}
      },
      {
        id: 'DOB',
        key: 'dob',
        type: 'datePicker',
        className: 'col-xs-4',
        templateOptions: {
          type: 'text',
          required: true,
          label: 'Date of Birth',
          value: moment().format('DD/MM/YYYY'),
          onChange: (...args) => {
            const field = args[2].form; //Scope.form
            field.DOA.$validate();
            field.invoiceDate.$validate();
            field['treatmentDate_0'].$validate(); //TODO: Validate All date fields generated dinamicaly
          }
        },
        validators: {
          checkFutureDate: {
            expression: (viewValue = '') => {
              return checkNotFutureDate(viewValue);
            },
            message: '"Can not be a future date"'
          }
        }
      },
      {
        id: 'NHI',
        key: 'nhi',
        type: 'input',
        className: 'col-xs-12',
        templateOptions: {
          type: 'text',
          label: 'National Health Index Number',
          placeholder: 'Enter Client NHI Number',
          maxlength: 7,
          onKeypress: ($viewValue = '', $modelValue, scope, key) => {
            const field = scope.form[scope.name];
            const realViewValue = field.$viewValue || '';
            const showInfo = (field.$untouched || (field.$touched && field.$valid));
            scope.options.data.showInfo = (showInfo && key.charCode && realViewValue.length === scope.options.templateOptions.maxlength);
          },
          onBlur: (...args) => {
            return hideInfo(args[2]);
          },
          info: 'This field can not be more than 7 characters long'
        },
        validators: {
          hideInfo: {
            expression: (...args) => {
              return hideInfo(args[2]);
            }
          },
          checkValidNHI: {
            expression: (viewValue = '', modelValue, scope) => {
              const value = modelValue || viewValue;
              if (viewValue === '') return true;
              return /([a-zA-Z]){3}([0-9]){4}/.test(value);
            },
            message: '"Value entered is not a valid NHI"'
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '7'}
      }
    ]
  },
  { template: '<h1>ACC Claim Details</h1>', className: 'group-label' },
  {
    className: 'row',
    fieldGroup: [
      {
        id: 'claimNumber',
        key: 'claimNumber',
        type: 'input',
        className: 'col-xs-12 col-md-3',
        templateOptions: {
          type: 'text',
          label: 'ACC Claim Number',
          placeholder: 'Enter Client ACC Claim Number',
          required: true,
          maxlength: 12,
          onKeypress: ($viewValue = '', $modelValue, scope, key)=> {
            const field = scope.form[scope.name];
            const realViewValue = field.$viewValue || '';
            const showInfo = (field.$untouched || (field.$touched && field.$valid));
            scope.options.data.showInfo = (showInfo && key.charCode && realViewValue.length === scope.options.templateOptions.maxlength);
          },
          onBlur: (...args) => {
            return hideInfo(args[2]);
          },
          info: 'This field can not be more than 12 characters long'
        },
        parsers: [toUpperCase],
        validators: {
          upperCase: {
            expression: (viewValue = '', modelValue = '', scope) => {
              scope.form[scope.name].$setViewValue(modelValue);
              scope.form[scope.name].$render();
              return true;
            }
          },
          hideInfo: {
            expression: (...args) => {
              return hideInfo(args[2]);
            }
          },
          checkValid: {
            expression: (viewValue = '', modelValue, scope) => {
              const value = modelValue || viewValue;
              return /^[A-Z]{2}[0-9]{8}$|^[A-Z]{2}[0-9]{5}$|^[A-Z][0-9]{6}$|^[0-9]{8}$|^[A-Z][0-9]{10}$|^[0-9]{11}$/.test(value);
            },
            message: '"This is not a valid Claim Number"'
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '12'}
      },
      {
        id: 'DOA',
        key: 'doa',
        type: 'datePicker',
        className: 'col-xs-12 col-md-3',
        templateOptions: {
          type: 'text',
          label: 'Date of accident',
          value: moment().format('DD/MM/YYYY'),
          onChange: (...args) => {
            const field = args[2].form; //Scope.form
            field.invoiceDate.$validate();
            field['treatmentDate_0'].$validate(); //TODO: Validate All date fields generated dinamicaly
          }
        },
        validators: {
          checkFutureDate: {
            expression: (viewValue = '') => {
              return checkNotFutureDate(viewValue);
            },
            message: '"Can not be a future date"'
          },
          checkIfAfterDOB: {
            expression: (viewValue = '', modelValue = '', scope) => {
              if(!moment(viewValue, validDateFormats, true).isValid()) return true;
              return !(moment(scope.form.DOA.$viewValue, validDateFormats, true) < moment(scope.form.DOB.$viewValue, 'DD/MM/YYYY', true));
            },
            message: '"Date of accident should be after Date of birth"'
          }
        }
      },
      {
        id: 'additionalComments',
        key: 'additionalComments',
        type: 'textarea',
        className: 'col-xs-12 col-md-6 comments',
        templateOptions: {
          type: 'text',
          label: 'Additional Comments',
          maxlength: 255,
          onKeypress: ($viewValue = '', $modelValue, scope, key) => {
            scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength);
          },
          onBlur: (...args) => {
            return hideInfo(args[2]);
          },
          info: 'This field can not be more than 255 characters long'
        },
        validators: {
          hideInfo: {
            expression: (...args) => {
              return hideInfo(args[2]);
            }
          }
        },
        data: {showInfo: false},
        ngModelElAttrs: {'maxlength': '255'}
      }
    ]
  },
  { template: '<h1>Treatment Details</h1>', className: 'group-label' },
  {
    type: 'treatmentDetail',
    key: 'treatmentDetails',
    templateOptions: {
      btnText: '+ Add another treatment',
      fields: [
        {
          className: 'row',
          fieldGroup: [
            {
              type: 'datePicker',
              key: 'treatmentDate',
              className: 'col-md-1 col-sm-4 col-xs-6 treatment-field treatment-date',
              templateOptions: {
                type: 'text',
                label: 'Treatment Date:',
                required: true
              },
              validators: {
                checkFutureDate: {
                  expression: (viewValue = '') => {
                    return checkNotFutureDate(viewValue);
                  },
                  message: '"Can not be a future date"'
                },
                checkIfAfterDOB: {
                  expression: (viewValue = '', modelValue = '', scope) => {
                    if(!moment(viewValue, validDateFormats, true).isValid()) return true;
                    return !(moment(viewValue, validDateFormats, true) < moment(scope.form.DOB.$viewValue, 'DD/MM/YYYY', true));
                  },
                  message: '"Treatment date should be after Date of birth"'
                },
                checkIfAfterDOA: {
                  expression: (viewValue = '', modelValue = '', scope) => {
                    if(!moment(viewValue, validDateFormats, true).isValid()) return true;
                    return !(moment(viewValue, validDateFormats, true) < moment(scope.form.DOA.$viewValue, 'DD/MM/YYYY', true));
                  },
                  message: '"Treatment date  should be after Date of accident"'
                },
                checkIfBeforeDOI: {
                  expression: (viewValue = '', modelValue = '', scope) => {
                    if(!moment(viewValue, validDateFormats, true).isValid()) return true;
                    return !(moment(viewValue, validDateFormats, true) > moment(scope.form.invoiceDate.$viewValue, 'DD/MM/YYYY', true));
                  },
                  message: '"Treatment date should be before Date of invoice"'
                }
              }
            },
            {
              type: 'input',
              key: 'providerId',
              className: 'col-md-1 col-sm-4 col-xs-6 treatment-field provider-id',
              templateOptions: {
                label: 'Provider ID:',
                placeholder: 'Provider ID',
                maxlength: 8,
                onKeypress: ($viewValue = '', $modelValue, scope, key) => {
                  scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength );
                },
                onBlur: (...args) => {
                  return hideInfo(args[2]);
                },
                info: 'This field can not be more than 8 characters long'
              },
              parsers: [toUpperCase],
              validators: {
                upperCase: {
                  expression: (viewValue = '', modelValue = '', scope) => {
                    scope.form[scope.name].$setViewValue(modelValue);
                    scope.form[scope.name].$render();
                    return true;
                  }
                },
                hideInfo: {
                  expression: (...args) => {
                    return hideInfo(args[2]);
                  }
                }
              },
              data: {showInfo: false},
              ngModelElAttrs: {'maxlength': '8'}
            },
            {
              type: 'input',
              key: 'field3',
              className: 'col-md-1 col-sm-4 col-xs-6 treatment-field service-codes',
              templateOptions: {
                label: 'Field 3:',
                placeholder: '',
                maxlength: 100,
                onKeypress: ($viewValue = '', $modelValue, scope, key) => {
                  scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength );
                },
                onBlur: (...args) => {
                  return hideInfo(args[2]);
                },
                info: 'This field can not be more than 10 characters long'
              },
              validators: {
                hideInfo: {
                  expression: (...args) => {
                    return hideInfo(args[2]);
                  }
                }
              },
              data: {showInfo: false},
              ngModelElAttrs: {'maxlength': '100'}
            },
            {
              type: 'input',
              key: 'field4',
              className: 'col-md-1 col-sm-4 col-xs-6 treatment-field facility',
              templateOptions: {
                label: 'Field 4:',
                placeholder: '',
                maxlength: 100,
                onKeypress: ($viewValue = '', $modelValue, scope, key) => {
                  scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength );
                },
                onBlur: (...args) => {
                  return hideInfo(args[2]);
                },
                info: 'This field can not be more than 6 characters long'
              },
              validators: {
                hideInfo: {
                  expression: (...args) => {
                    return hideInfo(args[2]);
                  }
                }
              },
              data: {showInfo: false},
              ngModelElAttrs: {'maxlength': '100'}
            },
            {
              type: 'select',
              key: 'feeBasedOn',
              className: 'col-xs-12 col-sm-4 treatment-field feeBasedOn',
              templateOptions: {
                label: 'Field 5',
                valueProp: 'name',
                options: [{name: 'Time'},{name: 'Distance'},{'name': 'Units'}]
              }
            },
            {
              type: 'input',
              key: 'field6',
              className: 'col-md-1 col-sm-4 col-xs-6 treatment-field fee',
              templateOptions: {
                label: 'Field 6',
                placeholder: '',
                maxlength: 100,
                onKeypress: ($viewValue = '', $modelValue, scope, key) => {
                  scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength );
                },
                onBlur: (...args) => {
                  return hideInfo(args[2]);
                },
                info: 'This field can not be more than 6 characters long'
              },
              validators: {
                hideInfo: {
                  expression: (...args) => {
                    return hideInfo(args[2]);
                  }
                }
              },
              data: {showInfo: false},
              ngModelElAttrs: {'maxlength': '100'}
            },
            {
              type: 'textarea',
              key: 'treatmentComments',
              className: 'col-xs-12 treatment-field treatmentsComments',
              templateOptions: {
                label: 'Treatment comments',
                type: 'text',
                maxlength: 255,
                onKeypress: ($viewValue = '', $modelValue, scope, key) => {
                  scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength );
                },
                onBlur: (...args) => {
                  return hideInfo(args[2]);
                },
                info: 'This field can not be more than 255 characters long'
              },
              validators: {
                hideInfo: {
                  expression: (...args) => {
                    return hideInfo(args[2]);
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
  },
  { template: '<h1>Invoice details</h1>', className: 'group-label' },
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
          maxlength: 20,
          onKeypress: ($viewValue = '', $modelValue, scope, key) => {
            scope.options.data.showInfo = (key.charCode && $viewValue.length === scope.options.templateOptions.maxlength );
          },
          onBlur: (...args) => {
            return hideInfo(args[2]);
          },
          info: 'This field can not be more than 20 characters long'
        },
        validators: {
          hideInfo: {
            expression: (...args) => {
              return hideInfo(args[2]);
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
          info: 'Invoices over 12 months old may need further ACC approval to release payment',
          onChange: (...args) => {
            const field = args[2].form; //Scope.form
            field['treatmentDate_0'].$validate(); //TODO: Validate All date fields generated dinamicaly
          }
        },
        validators: {
          checkOldDate: {
            expression: (viewValue = '', modelValue, scope) => {
              scope.options.data.showInfo = (moment(modelValue, 'DD/MM/YYYY', true).isValid() &&
                moment(modelValue, 'DD/MM/YYYY') < moment().subtract(12, 'months'));
              return true;
            }
          },
          checkFutureDate: {
            expression: (viewValue = '') => {
              return checkNotFutureDate(viewValue);
            },
            message: '"Can not be a future date"'
          },
          checkIfAfterDOB: {
            expression: (viewValue = '', modelValue = '', scope) => {
              if(!moment(viewValue, validDateFormats, true).isValid()) return true;
              return !(moment(scope.form.invoiceDate.$viewValue, validDateFormats, true) < moment(scope.form.DOB.$viewValue, 'DD/MM/YYYY', true));
            },
            message: '"Date of Invoice should be after Date of birth"'
          },
          checkIfBeforeDOA: {
            expression: (viewValue = '', modelValue = '', scope) => {
              if(!moment(viewValue, validDateFormats, true).isValid()) return true;
              return !(moment(scope.form.invoiceDate.$viewValue, validDateFormats, true) < moment(scope.form.DOA.$viewValue, 'DD/MM/YYYY', true));
            },
            message: '"Date of Invoice should be after Date of accident"'
          }
        },
        data: {showInfo: false}
      }
    ]
  }
];

function checkNotFutureDate(viewValue) {
  return (moment(viewValue, validDateFormats, true) > moment().startOf('day')) ? false : true;
}

function hideInfo(scope) {
  scope.options.data.showInfo = false;
  return true;
}

function toUpperCase(value) {
  return (value || '').toUpperCase();
}

export default formFields;