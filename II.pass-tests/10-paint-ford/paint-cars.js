module.exports = function(car) {
  //var arrOfCars = car.map();
  //var arrOfCars = [cars, unpaintedCars, ];
  var newCar = Object.assign({ colour: "Pink" }, car);
  return newCar;
};
