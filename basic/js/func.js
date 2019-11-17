// anomynous function
var magic1 = function() {
  return new Date();
}

var magic2 = () => {
  return new Date();
}

var magic3 = () => new Date();
const magic4 = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5]));

// arrow function and high order function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(x => x * x)
  ;
  return squaredIntegers;
}

const increment = (function() {
  return function increment(number, value=1) {
    return number + value;
  };
})();

const increment2 = (() => (number, value=1) => number + value)();

const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  }
})();

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // const maxOfTomorrow = forecast.tomorrow.max;
  const {tomorrow : { max: maxOfTomorrow }} = forecast;
  return maxOfTomorrow;
}

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  let { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}
 const SOURCE = [1,2,3,4,5,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [,,...arr] = list;
  return arr;
}

const STATS = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (function() {
  return function half({max, min}) {
    return (max + min) / 2.0;
  };
})();
