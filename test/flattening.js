var expect = require('chai').expect;
var util = require('../flattening.js')

var tests = [
  { arg: [[1,2],[3,4]], expected: [1,2,3,4] },
  { arg: [[1,2],[3, [4,5]]], expected: [1,2,3,4,5] },
]

function arToS(arr) {
  return JSON.stringify(arr);
}

describe('flattening', function () {
  tests.forEach(function(test) {
    it('flattens ' + arToS(test.arg) + ' to ' + test.expected, function() {
      expect(util.flatten(test.arg)).to.eql(test.expected);
    });
  });
});
