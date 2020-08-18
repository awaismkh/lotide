const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

let result = tail([5,6,7]);

console.log(tail([5,6,7]));

assertEqual(result[1], 'Labs');

