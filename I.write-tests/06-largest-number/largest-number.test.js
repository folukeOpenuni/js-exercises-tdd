var largestNum = require("./largest-number.js");

test("get largest number in an array", function() {
  var num = [3, 21, 88, 4, 36];
  var unchanged = [3, 21, 88, 4, 36];

  var expected = 88;
  var output = largestNum(num);

  expect(output).toEqual(expected);
  expect(num).toEqual(unchanged);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
