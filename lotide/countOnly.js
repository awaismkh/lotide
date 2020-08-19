// first, you're looping through allItems array to state all the items and the count of those items

// second, you're looping through itemsToCount object to see if each item from the array is true or not. 

// you're creating a final object which states the count number for each item IF true. 

function countOnly (allItems, itemsToCount) {
  var final = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {final[item] = 0;}
  }
  let nameKeys = Object.keys(final);
  for (let name of allItems) {
    for (let finalName of nameKeys) {
      if (finalName === name) {final[name] += 1;}
    }
    
  }
  return final; 
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);