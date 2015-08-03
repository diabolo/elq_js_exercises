var expect = require('chai').expect;
var util  = require("../reverse.js")

describe('reverseArray', function() {
  var tests = [
    { args: [1,2], expected: [2,1] },
    { args: [], expected: [] },
    { args: [1,1,2,3,5], expected: [5,3,2,1,1] },
  ];

  tests.forEach(function(test) {
    it('reverses ' + test.args + ' to ' + test.expected, function() {
      expect(util.reverseArray(test.args)).to.eql(test.expected);
    });
  });
});


