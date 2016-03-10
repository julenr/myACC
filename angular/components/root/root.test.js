import RootTemplate from './root.template.html';
import RootController from './root.controller';

describe('Root main component', () => {

  describe('HTML Template', () => {
    it('has invoiceModel and invoiceFields properties', () => {
      expect(RootTemplate).to.match(/root.invoiceFields/g);
      expect(RootTemplate).to.match(/root.invoiceModel/g);
    });
  });

  describe('Invoice base Controller', () => {
    const ctrl = new RootController();
    it('has invoiceFields and invoiceModel objects ', () => {
      expect(ctrl).to.have.property('invoiceFields');
      expect(ctrl).to.have.property('invoiceModel');
    });
  });

  describe('Invoice formly form', function () {
    beforeEach(angular.mock.module('root'));
    var basicTemplate = '<formly-form model="model" fields="fields" form="form" options="options"></formly-form>';
    var $compile, scope, el, node, isolateScope, field, fieldNode, fieldScope, ctrl;

    beforeEach(inject(function (_$compile_, $rootScope, $controller) {
      $compile = _$compile_;
      scope = $rootScope.$new();
      ctrl = $controller('RootController', scope);
      scope.model = ctrl.invoiceModel;
      scope.fields = ctrl.invoiceFields;
    }));

    it('should compile', function () {
      compileAndSetupStuff();
      expect(scope).to.exist;
    });

    describe('ACC Vendor ID field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.vendorID).to.exist;
      });
      it('is required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.vendorID.$valid).to.be.false;
      });
      it('is valid entering \'AAAA1234\'', function () {
        compileAndSetupStuff();
        isolateScope.form.vendorID.$setViewValue('AAAA1234');
        expect(isolateScope.form.vendorID.$valid).to.be.true;
      });
    });

    describe('ACC Contract Number field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.contractID).to.exist;
      });
      it('is not required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.contractID.$valid).to.be.true;
      });
    });

    describe('First Name field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.firstName).to.exist;
      });
      it('is required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.firstName.$valid).to.be.false;
      });
      it('is valid entering \'AAAA1234\'', function () {
        compileAndSetupStuff();
        isolateScope.form.firstName.$setViewValue('AAAA1234');
        expect(isolateScope.form.firstName.$valid).to.be.true;
      });
    });

    describe('Surname field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.surname).to.exist;
      });
      it('is required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.surname.$valid).to.be.false;
      });
      it('is valid entering \'AAAA1234\'', function () {
        compileAndSetupStuff();
        isolateScope.form.surname.$setViewValue('AAAA1234');
        expect(isolateScope.form.surname.$valid).to.be.true;
      });
    });

    describe('Date of birth field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.DOB).to.exist;
      });
      it('is required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.DOB.$valid).to.be.false;
      });
      it('is valid entering \'01/01/2016\' \'01.01.2016\' \'01-01-2016\'', function () {
        compileAndSetupStuff();
        isolateScope.form.DOB.$setViewValue('01/01/2016');
        expect(isolateScope.form.DOB.$valid).to.be.true;
        isolateScope.form.DOB.$setViewValue('01.01.2016');
        expect(isolateScope.form.DOB.$valid).to.be.true;
        isolateScope.form.DOB.$setViewValue('01-01-2016');
        expect(isolateScope.form.DOB.$valid).to.be.true;
      });
      it('is invalid entering a future date', function () {
        compileAndSetupStuff();
        isolateScope.form.DOB.$setViewValue('01/01/2100');
        expect(isolateScope.form.DOB.$valid).to.be.false;
      });
    });

    describe('National Health Index Number field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.NHI).to.exist;
      });
      it('is not required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.NHI.$valid).to.be.true;
      });
      it('is valid entering \'AAA1234\'', function () {
        compileAndSetupStuff();
        isolateScope.form.NHI.$setViewValue('AAA1234');
        expect(isolateScope.form.NHI.$valid).to.be.true;
      });
      it('is invalid entering \'FFFFFFF\'', function () {
        compileAndSetupStuff();
        isolateScope.form.NHI.$setViewValue('FFFFFFF');
        expect(isolateScope.form.NHI.$valid).to.be.false;
      });
    });

    describe('ACC Claim Number field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.claimNumber).to.exist;
      });
      it('is required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.claimNumber.$valid).to.be.false;
      });
      it('is valid entering \'A1234567890\'', function () {
        compileAndSetupStuff();
        isolateScope.form.claimNumber.$setViewValue('A1234567890');
        expect(isolateScope.form.claimNumber.$valid).to.be.true;
      });
      it('is invalid entering \'FFFFFFFFFFF\'', function () {
        compileAndSetupStuff();
        isolateScope.form.claimNumber.$setViewValue('FFFFFFFFFFF');
        expect(isolateScope.form.claimNumber.$valid).to.be.false;
      });
    });

    describe('Date of accident field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.DOA).to.exist;
      });
      it('is not required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.DOA.$valid).to.be.true;
      });
      it('is valid entering \'01/01/2016\' \'01.01.2016\' \'01-01-2016\'', function () {
        compileAndSetupStuff();
        isolateScope.form.DOA.$setViewValue('01/01/2016');
        expect(isolateScope.form.DOA.$valid).to.be.true;
        isolateScope.form.DOA.$setViewValue('01.01.2016');
        expect(isolateScope.form.DOA.$valid).to.be.true;
        isolateScope.form.DOA.$setViewValue('01-01-2016');
        expect(isolateScope.form.DOA.$valid).to.be.true;
      });
      it('is invalid entering a future date', function () {
        compileAndSetupStuff();
        isolateScope.form.DOA.$setViewValue('01/01/2100');
        expect(isolateScope.form.DOA.$valid).to.be.false;
      });
      it('is invalid entering a date before DOB', function () {
        compileAndSetupStuff();
        isolateScope.form.DOB.$setViewValue('01/01/2016');
        isolateScope.form.DOA.$setViewValue('01/01/2015');
        expect(isolateScope.form.DOA.$valid).to.be.false;
      });
    });

    describe('Additional Comments field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.additionalComments).to.exist;
      });
      it('is not required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.additionalComments.$valid).to.be.true;
      });
    });

    describe('Invoice Number field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.invoiceNumber).to.exist;
      });
    });

    describe('Invoice Reference field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.invoiceReference).to.exist;
      });
      it('is not required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.invoiceReference.$valid).to.be.true;
      });
    });

    describe('Invoice Date field', function () {
      it('should exist', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.invoiceDate).to.exist;
      });
      it('is required', function () {
        compileAndSetupStuff();
        expect(isolateScope.form.invoiceDate.$valid).to.be.false;
      });
      it('is valid entering \'01/01/2016\' \'01.01.2016\' \'01-01-2016\'', function () {
        compileAndSetupStuff();
        isolateScope.form.invoiceDate.$setViewValue('01/01/2016');
        expect(isolateScope.form.invoiceDate.$valid).to.be.true;
        isolateScope.form.invoiceDate.$setViewValue('01.01.2016');
        expect(isolateScope.form.invoiceDate.$valid).to.be.true;
        isolateScope.form.invoiceDate.$setViewValue('01-01-2016');
        expect(isolateScope.form.invoiceDate.$valid).to.be.true;
      });
      it('is invalid entering a future date', function () {
        compileAndSetupStuff();
        isolateScope.form.invoiceDate.$setViewValue('01/01/2100');
        expect(isolateScope.form.invoiceDate.$valid).to.be.false;
      });
      it('is invalid entering a date before DOB', function () {
        compileAndSetupStuff();
        isolateScope.form.DOB.$setViewValue('01/01/2016');
        isolateScope.form.invoiceDate.$setViewValue('01/01/2015');
        expect(isolateScope.form.invoiceDate.$valid).to.be.false;
      });
    });

    function compileAndSetupStuff(value = '') {
      el = $compile(basicTemplate)(scope);
      scope.$digest();
      node = el[0];
      isolateScope = el.isolateScope();
    }

  });

});
