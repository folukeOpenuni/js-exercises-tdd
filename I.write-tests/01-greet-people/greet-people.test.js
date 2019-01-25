var greetPeople = require("./greet-people.js");
test("print list of names prefixed with Hello", function() {
  var arrOfNames = ["King", "Queen", "Jester"];
  var unchanged = ["King", "Queen", "Jester"];
  var expected = ["Hello King", "Hello Queen", "Hello Jester"];

  //var output greetPeople(arrOfName);
  var output = greetPeople(arrOfNames);
  expect(output).toBe(expected);
  expect(arrOfNames).toEqual(unchanged);
});
