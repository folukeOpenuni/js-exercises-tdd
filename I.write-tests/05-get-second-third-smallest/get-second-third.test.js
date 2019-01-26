var getSecondThird = require("./get-second-third.js");
test("get second and third value", function() {
  var input = [90, 5, 11, 8, 6];
  var unchanged = [90, 5, 11, 8, 6];

  var expected = [6, 8];
  var output = getSecondThird(input);

  expect(output).toEqual(expected);
  expect(input).toEqual(unchanged);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
