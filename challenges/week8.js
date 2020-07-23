//Q1 
const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  //create a variable called index, which is equal to the index of nums
  let index = nums.indexOf(n);
  //if the index is greater than or equal to zero AND less than the length of numbers minus 1
  if (index >= 0 && index < nums.length - 1) {
    //create a variable called next which will be equal to nums, 
    //but with index increased by 1
    let next = nums[index + 1];
    //return next
    return next
  }
  //otherwise return null
  else return null
};


//Q2
const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let arr = str.split('');
  //declare a new variable which is str split into single numbers
  let ones = 0;
  //create a counter for 1s
  let zeros = 0;
  //create a counter for zeros
  let obj = {
    1: ones,
    0:zeros
  }
  //create an object which contains the variable ones and zeros against a tally
  arr.forEach(num => num === "1" ? ones++ : zeros++)  
  //loop over the split array and for each time it iterates, if the element is equal to
  //1 then one increases by 1, and if false, then zero increases by 1. 
  return obj; 
  // return the object
};


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

//Q6 - COMPLETE
const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let count = 0;
  //create count
  for(let key in haystack) {
  //loop through each key in the haystack object
    if(haystack[key].toString().toLowerCase().search(searchTerm.toLowerCase()) !== -1)
    count++
  //if the key of that haystack in a lower case strong does not equal -1 then count
  // will increase by one. Note:.search() will return -1 if search term not found
  }
  return count > 0;
  //return the count which is greater than zero
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
