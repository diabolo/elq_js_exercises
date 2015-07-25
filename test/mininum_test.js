var assert = require("assert")
var min = require("../min.js")

describe('min', function(){
  it('should return min of two values', function(){
    assert.equal(0, min(0,1));
    assert.equal(1, min(5,1));
  });
});


