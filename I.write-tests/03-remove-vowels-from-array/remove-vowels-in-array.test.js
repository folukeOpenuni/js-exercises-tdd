var removeVowels = require("./remove-vowels-in-array.js");
test("remove vowels from all words in array", function() {
  var words = ["Irina", "Etza", "Daniel"];
  var unchanged = ["Irina", "Etza", "Daniel"];

  var expected = ["rn", "tz", "dnl"];
  var output = removeVowels(words);

  expect(words).toEqual(unchanged);
  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
