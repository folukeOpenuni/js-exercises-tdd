module.exports = function removeMiddle(arr) {
  var array = [];
  var index = (arr.length - 1) / 2;
  array.push(arr[index]);
  arr.splice(index, 1);
  return array;
};
