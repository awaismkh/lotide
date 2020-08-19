// first, we wanna loop through a sentence 

// check if all letters are being returned by themselves

// then, created an empty final object where I will store the keys (aka the letters) and their values (aka the count)

// if letter already occured, add it to previous count
// if not, set the count to 1

function countLetters(phrase) {
  let final = {};
  for (let letter of phrase) {
    if (Object.keys(final).includes(letter))
    {final[letter] += 1;}
    else {final[letter] = 1;}
    console.log(letter);
  }
    
  return final;
}

console.log(countLetters("lighthouse in the house"));