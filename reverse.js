exports = module.exports = {}

exports.reverseArray = function(arr) {
  res = [];

  for(var i=arr.length-1; i>=0; i--)
    res.push(arr[i]);

  return res;
}

exports.reverseArrayInPlace = function(arr) {
  stop = Math.floor(arr.length/2)
  for(var i=arr.length-1, j=0; i>=stop; i--,j++) {
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr;
}
