exports = module.exports = {}

function _flat(arr) {
  return arr.reduce(reducer,[]);
}

function reducer(prev, curr, idx, arr) {
  console.log('reducer ' + 
   ' prev: ' + JSON.stringify(prev) +
   ' curr: ' + JSON.stringify(curr) +
   ' idx: ' + JSON.stringify(idx) +
   ' arr: ' + JSON.stringify(arr)
   );
  if (curr instanceof Array)
    return prev.concat(_flat(curr));
  else
    return prev.concat(curr);
}

exports.flatten = function(arr) {
  return _flat(arr);
}
