exports = module.exports = {};

exports.isEven = function(val) {
  if (val > 1)
    return exports.isEven(val-2);
  else if (val == 1)
    return false;
  else
    return true;
};
