exports = module.exports = {}

exports.range = function(start, end, inc) {
  var res = [];
  inc = typeof inc !== 'undefined' ? inc : 1;
  
  // what if inc is 0 ?

  if (inc > 0)
    for(var i=start; i <= end; i+=inc)
      res.push(i);
  else if (inc < 0) {
    console.log(
        'start: ' + start +
        ' end: ' + end +
        ' i: ' + i +
        ' res: ' + res
        );
    for(var i=start; i >= end; i+=inc)
      res.push(i);
  }
  else
    ; // do nowt and return []

  return res;
};
