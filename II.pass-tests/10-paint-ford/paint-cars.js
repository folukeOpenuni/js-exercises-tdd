module.exports = function(cars, newColour) {
  //var arrOfCars = car.map();
  //var arrOfCars = [cars, unpaintedCars, ];
  var newCars = cars.map(x => Object.assign({}, x));
  newCars[0].colour = newColour;
  return newCars;
};
