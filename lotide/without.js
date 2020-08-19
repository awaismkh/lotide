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

const without = function(source, itemsToRemove) {
  let reformed = [];
  source.forEach(function(orig) {
    if (!itemsToRemove.includes(orig)) {
      reformed.push(orig);
    }
  });
  return reformed;
};

console.log(without([1, 2, 3], [1])); 
