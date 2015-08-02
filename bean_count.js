exports = module.exports = {}

function countChar(val, ch) {
  var count = 0;
  for(var i=0; i<val.length; i++)
    if (val.charAt(i) == ch)
      count += 1;

  return count;
};

exports.countBs = function(val) {
  return countChar(val, 'B')
};
