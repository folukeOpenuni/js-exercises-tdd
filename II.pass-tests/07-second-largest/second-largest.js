module.exports = function secondLargest(number) {
  // number.sort(function(a, b) {
  //   return a - b;
  // });
  // return number[1];

  var max = Math.max.apply(null, number); // get the max of the array
  number.splice(number.indexOf(max), 1); //remove max from the array
  return Math.max.apply(null, number); //get the 2nd max
};
