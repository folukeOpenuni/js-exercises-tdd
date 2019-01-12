function addNumbers(numbers) {
  var total = 0;
  numbers.forEach(item => (total += item));
  return total;
}
module.exports = addNumbers;
