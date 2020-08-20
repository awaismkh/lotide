// We need a function, which takes an array and loops through it until it finds a value that returns 
// true for the callback function. 


const takeUntil = function(array, callback) {
  let results = [];
  for (let x of array) {
  if (callback(x) !== true) {
     results.push(x);
  } else {
return results;
    }
  }
};



// --------------------------------------------
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);