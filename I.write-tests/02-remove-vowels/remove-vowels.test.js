//import removedVowels from './remove-vowels';
var removedVowels = require("./remove-vowels");
//remove vowels from HI
test("remove vowels from word", function() {
  var removedVowels = "Hi";
  var expected = "H";

  var output = removedVowels(removedVowels);
  expect(output).toEqual(expected);
});

test.only("does not remove y", function() {
  var letterY = "y";
  var expected = "y";
  var output = removedVowels(letterY);

  expect(output).toEqual(expected);
});
