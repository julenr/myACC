import RootTemplate from './root.template.html';
import RootController from './root.controller';

describe('Root main component', () => {

  describe('Template', () => {
    it('has property invoiceModel', () => {
      expect(RootTemplate).to.match(/root.invoiceFields/g);
    });
  });

  describe('Invoice Controller', () => {
    const ctrl = new RootController();
    it('has invoiceFields object ', () => {
      expect(ctrl).to.have.property('invoiceFields');
    });

  });

});
