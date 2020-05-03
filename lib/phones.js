/**
 *
 * @namespace faker.phones
 */
var phones = function (faker) {
  var self = this;
  var fake = faker.fake;

  

  /**
   * androidOS
   *
   * @method faker.phones.androidOS
   */
  self.androidOS = function () {
    return faker.random.arrayElement(faker.definitions.phones.androidOS);
  };

  self.androidOS.schema = {
    "description": "Generates a phones androidOS.",
    "sampleResults": ["SONY XPERIA", "Google Pixel 2", "Nokia 8"]
  };


  /**
   * blackberryOS
   *
   * @method faker.phones.blackberryOS
   */
  self.blackberryOS = function () {
    return faker.random.arrayElement(faker.definitions.phones.blackberryOS);
  };

  self.blackberryOS.schema = {
    "description": "Generates a phones blackberryOS.",
    "sampleResults": ["Evolve Xr", "Key 2", "Aurora"]
  };

  /**
   * IOS
   *
   * @method faker.phones.type
   */
  self.type = function () {
    return faker.random.arrayElement(faker.definitions.phones.IOS);
  };

  self.IOS.schema = {
    "description": "Generates a phones IOS.",
    "sampleResults": ["iPhone SE, "iPhone 11 Pro Max", "iPhone Pro", "iPhone XR"]
  };

 
};

module["exports"] = phones;
