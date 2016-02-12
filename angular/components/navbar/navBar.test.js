import NavBarTemplate from './navBar.template.html';

describe('navBar', () => {

  describe('Template', () => {
    it('has property path', () => {
      expect(NavBarTemplate).to.match(/{{\s?route.path\s?}}/g);
    });
  });

});
