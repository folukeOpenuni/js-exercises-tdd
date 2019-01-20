var greetPeople = require("./greet-people.js");
test("print list of names prefixed with Hello", function() {
  // Arrange
  var names = ["Foluke", "Ahmad", "Paulina", "Mary", "Mariya"];
  // var unchanged = ["Foluke", "Ahmad", "Paulina", "Mary", "Mariya"];
  var expected = [
    "Hello Foluke",
    "Hello Ahmad",
    "Hello Paulina",
    "Hello Mary",
    "Hello Mariya"
  ];
  // Act
  var output = greetPeople(names);
  // Assert
  expect(output).toEqual(expected);
  //expect(names).toEqual(unchanged);
});
