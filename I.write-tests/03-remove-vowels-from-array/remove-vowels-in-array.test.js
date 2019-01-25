var removeVowels = require("./removeVowels-in-array.js");

test("remove vowels from all words in array", function() {
  // Arrange
  var words = ["Irina", "Etza", "Daniel"];
  var unchanged = ["Irina", "Etza", "Daniel"];

  var expected = ["rn", "tz", "dnl"];
  var output = removeVowels(words);

  expect(words).toBe(unchanged);
  expect(output).toBe(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
