// loop through all phrase to see that all letters print individually

// create a finl object to which you will push all the letters from the phrase

// when letter 

function letterPositions(sentence) {
  let result = {};
  let indiv = sentence.split('');
  console.log(indiv.entries());
  for (let [index, letter] of indiv.entries()) {
  if (result[letter]) {result[letter].push(index);}

  else {result[letter] = [index];}
  }
  return result;
}

console.log(letterPositions('lighthouse in the house'));
