//Q1 
const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Loop through the array
  //if n === index
  //return index +1
  //else return null***issue here***
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === n) {
      return nums[i + 1];
    }else{null}

  
};


//Q2
const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");


//loop through the array
for(let i=0; i<str.length; i++){

//create your variables to store your counts for ones and zeros
let countZeros= 0;
let countOnes= 0;

//if the thing we loop through is a zer0, increase countZeros by 1
  if(str[i] === 0){
    countZeros = countZeros +1;
  }

//if the thing we loop through is not a zero, increase countOnes by one
  else{ (str[i] !== 0)

    countOnes = countOnes +1
  }

//create an object to store your answers and insert the counts  
  const frequencies ={0:`${countZeros}` , 1:`${countOnes}`};
    return frequencies;
}
}


//Q2 attempt 2 using technique for tallying from Harriettes video - works, but doesn't return any values that aren't within the string.







//Q3 - COMPLETE
const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let result = n.toString().split("").reverse().join("")
  return parseInt(result)
};

//Q4 - COMPLETE
const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  //first, flatten the array
  let flatArrs = [].concat.apply([], arrs);
  //then return this array using .reduce
    return flatArrs.reduce((a, b) => a + b)

};

//Q5-COMPLETE
//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-80.php
const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  //if array length is one or less, return as it is
  if (arr.length <= 1) { return arr } else {
    //else assign the first element and last element to be equal to the last element and first element
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  }

};

//Q6 - watch video first!
const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
 for(let key in haystack)
 
 return haystack[key]
  
};

//Q7 - COMPLETE
const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  //split the string into an array of seperate words, removing special characters, changing to lowercase
  const arr = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ");
  //create new object called frequencies where the tallies will be stored
  const frequencies = {};
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    //create a variable called words which represents each index of the loop
    const words = arr[i];
    //if there's no value already in frequencies for that word,return words within frequencies and add a value of 1
    if (frequencies[words] === undefined) {
      frequencies[words] = 1;
    }
    //if otherwise, return words within frequencies and add one to the value that's already there
    else { frequencies[words] += 1; }

  }
  return frequencies;
};




module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
