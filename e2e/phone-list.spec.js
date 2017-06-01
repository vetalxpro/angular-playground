
describe('PhoneCat Application', function () {

  describe('phoneList', function () {

    beforeEach(function () {
      browser.get('/');
    });

    it('should filter the phone list as a user types into the search box', function () {
      const phoneList = element.all(by.repeater('phone in $ctrl.phones'));
      const query = element(by.model('$ctrl.query'));

      expect(phoneList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(8);
      query.clear();
    });

    it('should render phone specific links', function () {
      const query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

      element.all(by.css('md-card a')).first().click();
      expect(browser.getCurrentUrl()).toContain('/phones/nexus-s');
    });

  });

});
