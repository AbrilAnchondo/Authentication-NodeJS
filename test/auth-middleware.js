const expect = require("chai").expect;
const jwt = require("jsonwebtoken");

const authMiddleware = require("../middleware/authenticated");

//mocha describe function allows to group tests
// gives a header to know to which area the tests belong
describe("Auth middleware", function () {
  it("should throw err if Authorization header is missing", function () {
    // creating a req obj
    // return null to simulate the missing Authorization header

    const req = {
      get: function (header) {
        return null;
      },
    };
    // res, passing empty dummy obj, not testing anything about the res
    // passing an empty function instead of next() so it gets called without throwing an error, it just does nothing

    // want mocha and chai to call the function authMiddleware
    // so passing only a reference
    // bind the arg when the testing framework calls the function
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
      "NOT AUTHENTICATED!"
    );
  });

  it("should throw an error if Authorization header is composed of only one string", function () {
    const req = {
      get: function (header) {
        return "abc";
      },
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });

  it("should throw an error if the token cannot be verified", function () {
    const req = {
      get: function (header) {
        return "Bearer abc";
      },
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });
});
