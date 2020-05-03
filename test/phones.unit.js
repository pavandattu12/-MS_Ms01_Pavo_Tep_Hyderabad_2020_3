if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("phones.js", function () {

  describe("androidOS()", function () {
      it("returns random androidOS", function () {
          sinon.stub(faker.phones, 'androidOS').returns('Realme 5S');
          var androidOS = faker.phones.androidOS();

          assert.equal(androidOS, 'Realme 5S');
          faker.phones.androidOS.restore();
      });
  });

  describe("blackberryOS()", function () {
    it("returns random phones blackberryOS", function () {
      sinon.stub(faker.phones, 'blackberryOS').returns('Key One');
          var type = faker.phones.blackberryOS();

          assert.equal(blackberryOS, 'Key One');
          faker.phones.blackberryOS.restore();
      });
  });

  describe("IOS()", function () {
      it("returns random phones IOS", function () {
          sinon.stub(faker.phones, 'IOS').returns('iPhone 8');
          var IOS = faker.phones.IOS();

          assert.equal(IOS, 'iPhone 8');
          faker.phones.IOS.restore();
      });
  });

  
});
