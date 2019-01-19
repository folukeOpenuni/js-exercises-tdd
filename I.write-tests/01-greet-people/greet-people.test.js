var greetPeople = require("./greet-people.js");
test("print list of names prefixed with Hello", function() {
  // Arrange
  var names = ["Abdul", "Ahmad", "Paulina", "Ibraham", "Mariya"];
  var unchanged = ["Abdul", "Ahmad", "Paulina", "Ibraham", "Mariya"];
  var expected = [
    "Hello Abdul",
    "Hello Ahmad",
    "Hello Paulina",
    "Hello Ibraham",
    "Hello Mariya"
  ];
  // var expected="Hello AbdulAhmadPaulinaIbrahamMariya"

  // Act
  var output = greetPeople(names);
  // Assert
  expect(output).toEqual(expected);
  expect(names).toEqual(unchanged);
});
