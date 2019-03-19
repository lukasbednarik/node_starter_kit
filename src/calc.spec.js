const expect = require('chai').expect;

const divide = require('./calc').divide;

describe("calc division", function() {
  describe("when dividing correctly", function() {
    it("works", function() {
      expect(divide(1, 1)).to.equal(1);
    });
  });

  describe("when dividing by zero", function() {
    it("throws", function() {
    });
  });
});