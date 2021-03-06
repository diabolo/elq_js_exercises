var expect = require('chai').expect;
var recurse = require("../recursion.js")

describe('isEven', function() {
  var tests = [
    { arg: 0, expected: true },
    { arg: 1, expected: false },
    { arg: 2, expected: true },
    { arg: 50, expected: true },
    { arg: 75, expected: false },
    { arg: -1, expected: false },
  ];

  tests.forEach(function(test) {
    it('knows ' + test.arg + ' is ' + (test.expected ? 'even' : 'odd'), function() {
      expect(recurse.isEven(test.arg)).to.equal(test.expected);
    });
  });
});
