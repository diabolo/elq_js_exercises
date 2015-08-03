var expect = require('chai').expect;
var util  = require("../reverse.js")

var tests = [
  { args: [1,2], expected: [2,1] },
  { args: [], expected: [] },
  { args: [1], expected: [1] },
  { args: [1,2,3], expected: [3,2,1] },
  { args: [1,2,3,4], expected: [4,3,2,1] },
  { args: [1,1,2,3,5], expected: [5,3,2,1,1] },
];

describe('reverseArray', function() {
  tests.forEach(function(test) {
    it('reverses ' + test.args + ' to ' + test.expected, function() {
      expect(util.reverseArray(test.args)).to.eql(test.expected);
    });
  });
});

describe('reverseArrayInPlace', function() {
  it('changes the original array', function() {
    arr = [];
    expect(util.reverseArrayInPlace(arr)).to.equal(arr);
  });

  tests.forEach(function(test) {
    it('reverses ' + test.args + ' to ' + test.expected, function() {
      expect(util.reverseArrayInPlace(test.args)).to.eql(test.expected);
    });
  });
});


