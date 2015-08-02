var expect = require('chai').expect;
var beanCount = require("../bean_count.js")

describe('beanCount', function() {
  describe('countBs', function() {
    var tests = [
      { arg: '', expected: 0 },
      { arg: 'B', expected: 1 },
      { arg: 'xxffdff', expected: 0 },
      { arg: 'xBffBfB', expected: 3 },
    ];

    tests.forEach(function(test) {
      it('knows there are ' +
          test.expected +
          ' B\'s in ' +
          test.arg, function() {
        expect(beanCount.countBs(test.arg)).to.equal(test.expected);
      });
    });
  });
});
