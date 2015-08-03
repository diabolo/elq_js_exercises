exports = module.exports = {}

exports.range = function(start, end) {
  var res = [];

  for(var i=start; i <= end; i+=1) {
    res.push(i);
  };

  return res;
};
