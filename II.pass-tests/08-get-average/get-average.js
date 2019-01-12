// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

module.exports = function average(items) {
  var numbers = items.filter(item => typeof item === "number");
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};
