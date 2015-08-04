var expect = require('chai').expect;
var util = require('../flattening.js')

var tests = [
  { arg: [[1,2][3,4]], expected: [1,2,3,4] },
]

describe('flattening', function () {
  tests.forEach(function(test) {
    it('flattens ' + test.arg + ' to ' + test.expected, function() {
      expect(util.flatten(test.arg)).to.eql(test.expected);
    });
  });
});
