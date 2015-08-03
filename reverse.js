exports = module.exports = {}

exports.reverseArray = function(arr) {
  res = [];

  for(var i=arr.length-1; i>=0; i--)
    res.push(arr[i]);

  return res;
}
