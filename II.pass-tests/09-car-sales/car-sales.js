module.exports = function(cars) {
  var totals = {};
  cars.forEach(car => {
    if (totals[car.make]) {
      totals[car.make] += car.price;
    } else {
      totals[car.make] = car.price;
    }
  });
  return totals;
};
