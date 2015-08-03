var expect = require('chai').expect;
var util  = require("../range.js")

describe('range', function() {
  var tests = [
    { args: [1,3], expected: [1,2,3]},
    { args: [-1,2], expected: [-1,0,1,2]},
    { args: [3,0,-1], expected: [3,2,1,0]},
  ];

  tests.forEach(function(test) {
    it('knows range ' + test.args + ' is ' + test.expected, function() {
      expect(util.range.apply(this, test.args)).to.eql(test.expected);
    });
  });
});
