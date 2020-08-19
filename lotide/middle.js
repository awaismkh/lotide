function eqArrays(arr1,arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every(function (value, index) { return value === arr2[index]});
} else {return false;}
};

function assertArraysEqual(arr1,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`Assertion Passed: ${arr1} = ${arr2}`)
  }
  else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

// we need a function, which takes an array and returns the value in the middle of the array

// if the length of the array is less than 3, the function should return an empty function

// if length of array is odd, return middle value

// if length of array is even, return the two values in the middle

const middle = function(array) {
  midvals = [];
  if (array.length > 2 && array.length % 2 === 1) {
    midvals.push(array[Math.floor(array.length/2)]);
  }
  else if (array.length > 2 && array.length % 2 === 0) {
    midvals.push(array[Math.ceil((array.length/2) - 1)]);
    midvals.push(array[Math.floor(array.length/2)]);
    
  }
  else {return midvals;}

  return midvals;
}

console.log(middle([1,2,3,4,99]));

