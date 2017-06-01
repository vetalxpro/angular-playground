describe('View: Phone details', () => {

  beforeEach(function () {
    browser.get('/phones/nexus-s');
  });

  it('should display placeholder page with `phoneId`', () => {
    expect(element(by.binding('$ctrl.phoneId')).getText()).toBe('nexus-s');
  });

});
