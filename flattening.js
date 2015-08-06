exports = module.exports = {}

function _flat(arr) {
  return arr.reduce(function(prev, curr) {
    if (curr instanceof Array)
      return prev.concat(_flat(curr));
    else
      return prev.concat(curr);
  },[]);
}

exports.flatten = function(arr) {
  return _flat(arr);
}
