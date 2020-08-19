const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log('Assertion Passed: ' + actual + '===' + expected);
  } else {
    console.log('Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

function eqArrays(arr1,arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every(function (value, index) { return value === arr2[index]});
} else {return false;}
};

