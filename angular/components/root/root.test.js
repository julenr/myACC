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

import RootTemplate from './root.template.html';
import RootController from './root.controller';
import InvoiceSrv from '../../services/invoice/invoice.service';

describe('Root main component', () => {

  describe('HTML Template', () => {
    it('has invoiceModel and invoiceFields properties', () => {
      expect(RootTemplate).to.match(/root.invoiceFields/g);
      expect(RootTemplate).to.match(/root.invoiceModel/g);
    });
  });

  describe('Invoice base Controller', () => {
    const invoiceService = new InvoiceSrv();
    const ctrl = new RootController(invoiceService);
    it('has invoiceFields and invoiceModel objects ', () => {
      expect(ctrl).to.have.property('invoiceFields');
      expect(ctrl).to.have.property('invoiceModel');
    });
  });

  describe('Invoice formly form', function () {
    var basicTemplate = '<formly-form model="model" fields="fields" form="form" options="options"></formly-form>';
    var $compile, scope, el, node, isolateScope, ctrl;

    beforeEach(angular.mock.module('root'));
    beforeEach(angular.mock.module('invoice.service'));

    beforeEach(inject(function (_$compile_, $rootScope, $controller, InvoiceService) {
      $compile = _$compile_;
      scope = $rootScope.$new();
      ctrl = $controller('RootController', { $scope: scope, InvoiceService: InvoiceService} );
      scope.model = ctrl.invoiceModel;
      scope.fields = ctrl.invoiceFields;
      compileAndSetupStuff();
    }));

    it('should compile', function () {
      expect(scope).to.exist;
    });

    describe('ACC Vendor ID field', function () {
      it('should exist', function () {
        expect(isolateScope.form.vendorId).to.exist;
      });
      it('is required', function () {
        expect(isolateScope.form.vendorId.$valid).to.be.false;
      });
      it('is valid entering \'AAAA1234\'', function () {
        isolateScope.form.vendorId.$setViewValue('AAAA1234');
        expect(isolateScope.form.vendorId.$valid).to.be.true;
      });
    });

    describe('ACC Contract Number field', function () {
      it('should exist', function () {
        expect(isolateScope.form.contractID).to.exist;
      });
      it('is not required', function () {
        expect(isolateScope.form.contractID.$valid).to.be.true;
      });
    });

    describe('First Name field', function () {
      it('should exist', function () {
        expect(isolateScope.form.firstName).to.exist;
      });
      it('is required', function () {
        expect(isolateScope.form.firstName.$valid).to.be.false;
      });
      it('is valid entering \'AAAA1234\'', function () {
        isolateScope.form.firstName.$setViewValue('AAAA1234');
        expect(isolateScope.form.firstName.$valid).to.be.true;
      });
    });

    describe('Surname field', function () {
      it('should exist', function () {
        expect(isolateScope.form.surname).to.exist;
      });
      it('is required', function () {
        expect(isolateScope.form.surname.$valid).to.be.false;
      });
      it('is valid entering \'AAAA1234\'', function () {
        isolateScope.form.surname.$setViewValue('AAAA1234');
        expect(isolateScope.form.surname.$valid).to.be.true;
      });
    });

    describe('Date of birth field', function () {
      it('should exist', function () {
        expect(isolateScope.form.DOB).to.exist;
      });
      it('is required', function () {
        expect(isolateScope.form.DOB.$valid).to.be.false;
      });
      it('is valid entering \'01/01/2016\' \'01.01.2016\' \'01-01-2016\'', function () {
        isolateScope.form.DOB.$setViewValue('01/01/2016');
        expect(isolateScope.form.DOB.$valid).to.be.true;
        isolateScope.form.DOB.$setViewValue('01.01.2016');
        expect(isolateScope.form.DOB.$valid).to.be.true;
        isolateScope.form.DOB.$setViewValue('01-01-2016');
        expect(isolateScope.form.DOB.$valid).to.be.true;
      });
      it('is invalid entering a future date', function () {
        isolateScope.form.DOB.$setViewValue('01/01/2100');
        expect(isolateScope.form.DOB.$valid).to.be.false;
      });
    });

    describe('National Health Index Number field', function () {
      it('should exist', function () {
        expect(isolateScope.form.NHI).to.exist;
      });
      it('is not required', function () {
        expect(isolateScope.form.NHI.$valid).to.be.true;
      });
      it('is valid entering \'AAA1234\'', function () {
        isolateScope.form.NHI.$setViewValue('AAA1234');
        expect(isolateScope.form.NHI.$valid).to.be.true;
      });
      it('is invalid entering \'FFFFFFF\'', function () {
        isolateScope.form.NHI.$setViewValue('FFFFFFF');
        expect(isolateScope.form.NHI.$valid).to.be.false;
      });
    });

    describe('ACC Claim Number field', function () {
      it('should exist', function () {
        expect(isolateScope.form.claimNumber).to.exist;
      });
      it('is required', function () {
        expect(isolateScope.form.claimNumber.$valid).to.be.false;
      });
      it('is valid entering \'A1234567890\'', function () {
        isolateScope.form.claimNumber.$setViewValue('A1234567890');
        expect(isolateScope.form.claimNumber.$valid).to.be.true;
      });
      it('is invalid entering \'FFFFFFFFFFF\'', function () {
        isolateScope.form.claimNumber.$setViewValue('FFFFFFFFFFF');
        expect(isolateScope.form.claimNumber.$valid).to.be.false;
      });
    });

    describe('Date of accident field', function () {
      it('should exist', function () {
        expect(isolateScope.form.DOA).to.exist;
      });
      it('is not required', function () {
        expect(isolateScope.form.DOA.$valid).to.be.true;
      });
      it('is valid entering \'01/01/2016\' \'01.01.2016\' \'01-01-2016\'', function () {
        isolateScope.form.DOA.$setViewValue('01/01/2016');
        expect(isolateScope.form.DOA.$valid).to.be.true;
        isolateScope.form.DOA.$setViewValue('01.01.2016');
        expect(isolateScope.form.DOA.$valid).to.be.true;
        isolateScope.form.DOA.$setViewValue('01-01-2016');
        expect(isolateScope.form.DOA.$valid).to.be.true;
      });
      it('is invalid entering a future date', function () {
        isolateScope.form.DOA.$setViewValue('01/01/2100');
        expect(isolateScope.form.DOA.$valid).to.be.false;
      });
      it('is invalid entering a date before DOB', function () {
        isolateScope.form.DOB.$setViewValue('01/01/2016');
        isolateScope.form.DOA.$setViewValue('01/01/2015');
        expect(isolateScope.form.DOA.$valid).to.be.false;
      });
    });

    describe('Additional Comments field', function () {
      it('should exist', function () {
        expect(isolateScope.form.additionalComments).to.exist;
      });
      it('is not required', function () {
        expect(isolateScope.form.additionalComments.$valid).to.be.true;
      });
    });

    describe('Invoice Number field', function () {
      it('should exist', function () {
        expect(isolateScope.form.invoiceNumber).to.exist;
      });
    });

    describe('Invoice Reference field', function () {
      it('should exist', function () {
        expect(isolateScope.form.invoiceReference).to.exist;
      });
      it('is not required', function () {
        expect(isolateScope.form.invoiceReference.$valid).to.be.true;
      });
    });

    describe('Invoice Date field', function () {
      it('should exist', function () {
        expect(isolateScope.form.invoiceDate).to.exist;
      });
      it('is required', function () {
        expect(isolateScope.form.invoiceDate.$valid).to.be.false;
      });
      it('is valid entering \'01/01/2016\' \'01.01.2016\' \'01-01-2016\'', function () {
        isolateScope.form.invoiceDate.$setViewValue('01/01/2016');
        expect(isolateScope.form.invoiceDate.$valid).to.be.true;
        isolateScope.form.invoiceDate.$setViewValue('01.01.2016');
        expect(isolateScope.form.invoiceDate.$valid).to.be.true;
        isolateScope.form.invoiceDate.$setViewValue('01-01-2016');
        expect(isolateScope.form.invoiceDate.$valid).to.be.true;
      });
      it('is invalid entering a future date', function () {
        isolateScope.form.invoiceDate.$setViewValue('01/01/2100');
        expect(isolateScope.form.invoiceDate.$valid).to.be.false;
      });
      it('is invalid entering a date before DOB', function () {
        isolateScope.form.DOB.$setViewValue('01/01/2016');
        isolateScope.form.invoiceDate.$setViewValue('01/01/2015');
        expect(isolateScope.form.invoiceDate.$valid).to.be.false;
      });
      it('is invalid entering a date before DOA', function () {
        isolateScope.form.DOB.$setViewValue('01/01/2016');
        isolateScope.form.DOA.$setViewValue('10/01/2016');
        isolateScope.form.invoiceDate.$setViewValue('02/01/2016');
        expect(isolateScope.form.invoiceDate.$valid).to.be.false;
      });
    });
    
    // TREATMENTS DETAILS
    describe('Treatment Details Table', () => {
      describe('Date field', function () {
        it('should exist', function () {
          expect(isolateScope.form.treatmentDate_0).to.exist;
        });
        it('is required', function () {
          expect(isolateScope.form.treatmentDate_0.$valid).to.be.false;
        });
        it('is valid entering \'01/01/2016\' \'01.01.2016\' \'01-01-2016\'', function () {
          setValidDates();
          isolateScope.form.treatmentDate_0.$setViewValue('01/01/2016');
          expect(isolateScope.form.treatmentDate_0.$valid).to.be.true;
          isolateScope.form.treatmentDate_0.$setViewValue('01.01.2016');
          expect(isolateScope.form.treatmentDate_0.$valid).to.be.true;
          isolateScope.form.treatmentDate_0.$setViewValue('01-01-2016');
          expect(isolateScope.form.treatmentDate_0.$valid).to.be.true;
        });
        it('is invalid entering a future date', function () {
          setValidDates();
          isolateScope.form.treatmentDate_0.$setViewValue('01/01/2100');
          expect(isolateScope.form.treatmentDate_0.$valid).to.be.false;
        });
        it('is invalid entering a date before DOB', function () {
          setValidDates();
          isolateScope.form.DOB.$setViewValue('01/01/2016');
          isolateScope.form.treatmentDate_0.$setViewValue('01/01/2015');
          expect(isolateScope.form.treatmentDate_0.$valid).to.be.false;
        });
        it('is invalid entering a date before DOA', function () {
          setValidDates();
          isolateScope.form.DOB.$setViewValue('01/01/2016');
          isolateScope.form.DOA.$setViewValue('10/01/2016');
          isolateScope.form.treatmentDate_0.$setViewValue('02/01/2016');
          expect(isolateScope.form.treatmentDate_0.$valid).to.be.false;
        });
      });

      describe('Provider ID Field', function () {
        it('should exist', function () {
          expect(isolateScope.form.providerId_0).to.exist;
        });
        it('is not required', function () {
          expect(isolateScope.form.providerId_0.$valid).to.be.true;
        });
        it('is valid entering \'AAAA1234\'', function () {
          isolateScope.form.providerId_0.$setViewValue('AAAA1234');
          expect(isolateScope.form.providerId_0.$valid).to.be.true;
        });
      });
    });

    function compileAndSetupStuff() {
      el = $compile(basicTemplate)(scope);
      scope.$digest();
      node = el[0];
      isolateScope = el.isolateScope();
    }

    //Set valid dates for Date of birth, Date of accident and Date of invoice
    function setValidDates() {
      isolateScope.form.DOB.$setViewValue('01/01/2010');
      isolateScope.form.DOA.$setViewValue('02/02/2011');
      isolateScope.form.invoiceDate.$setViewValue('03/03/2017');
    }

  });

});
