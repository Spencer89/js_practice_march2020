/**Q1 - COMPLETE
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let total = 0;
  arr.forEach(n => {
    if (n % 5 === 0 || n % 3 === 0) {
      total += n;
    }
  })
  return total;
};

/**Q2 - COMPLETE
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String}
 * @returns {Boolean}
 */

const isValidDNA = str => {
  if (str === undefined) throw new Error("string is required");
  if (str === undefined) throw new Error("string is required");
  if (typeof str !== "string") throw new Error("string is required");

  let dna = 0;
  //create a counter for dna
  let notDNA = 0;
  //create a counter for NOT dna
  for (let i = 0; i < str.length; i++) {
  //loop through the string
    if (str[i] === "A" || str[i] === "T" || str[i] === "C" || str[i] === "G") dna++;
    else notDNA ++;
  }
  //if the string iteration is A OR T OR C OR G, dna should increase count by one
  //otherwise, notdna should increase by one
  return dna === 4 && notDNA === 0;
  //return dna in fours and not dna
};





/**Q3 - COMPLETE
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("string is required");
  if (typeof str !== "string") throw new Error("string is required");
  if (isValidDNA(str) === false) throw new Error("valid DNA string is required");

  let complementaryDNA = "";
  // create a new variable with a blank string
  for(let i = 0; i < str.length; i++) {
    //loop through the string
    if (str[i] === "T") complementaryDNA += "A";
    //if the iteration that we are looping through is T, the complementary DNA becomes A 
    else if (str[i] === "A") complementaryDNA += "T";
    //if the iteration that we are looping through is A, the complementary DNA becomes T 
    else if (str[i] === "C") complementaryDNA += "G";
    //if the iteration that we are looping through is c, the complementary DNA becomes G 
    else if (str[i] === "G") complementaryDNA += "C";
    //if the iteration that we are looping through is G, the complementary DNA becomes C 
  }
  return complementaryDNA;
};


/**Q4 - COMPLETE
 * https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  //if the number given is 1, return false
  if (n === 1) {
    return false;
  }
  //if the number given is 2, return true
  else if (n === 2) {
    return true;
    //else, create a loop through a number that goes upwards from two, by one digit it time 
    //and divide n by that digit
  } else {
    for (var x = 2; x < n; x++) {
      //if n divided by that digit is zero, it is not a prime so return false
      if (n % x === 0) {
        return false;
      }
    }
    //otherwise return true
    return true;
  }
};

/**Q5 - INCOMPLETE
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (typeof n !== "number") throw new Error("first argument must be a number");

  let contArr = [];
  //create an array called continuous array
  let newArr = [];
  //create an array called new array
  for(let i = 0; i < n; i++) {
    //loop through n number of time
    newArr.push(fill);
    //push the fill to the new array
    contArr.push(newArr);
    //push the new array to contArr
  }
  return contArr;
};

/**Q6
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let tally = 0;
  //create a count called tally
  staff.forEach(person => person.rota.forEach(d => d === day ? tally++ : ''));
  //for each person, loop through the rota of that person and if they have at least 
  //one day, increate the tally
  return tally >= 3;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
