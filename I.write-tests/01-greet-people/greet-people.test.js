var greetPeople = require("./greet-people.js");

test("function to prefix hello", function() {
  var names = ["Adam", "Hannah", "Merlin", "Author"];

  var unchanged = ["Adam", "Hannah", "Merlin", "Author"];
  var expected = ["Hello Adam", "Hello Hannah", "Hello Merlin", "Hello Author"];
  var output = greetPeople(names);

  expect(output).toEqual(expected);
  expect(names).toEqual(unchanged);
});
