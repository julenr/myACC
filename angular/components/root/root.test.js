import RootTemplate from './root.template.html';
import RootController from './root.controller';

describe('Root main component', () => {

  describe('Template', () => {
    it('has property name', () => {
      expect(RootTemplate).to.match(/{{\s?root.name\s?}}/g);
    });
  });

  describe('Controller', () => {
    const ctrl = new RootController();
    it('has property name and be equal to ACC', () => {
      expect(ctrl).to.have.property('name');
      expect(ctrl.name).to.equal('ACC');
      ctrl.changeName();
      expect(ctrl.name).to.equal('ES6-AngularJS-WebPack World');
    });
  });

});
