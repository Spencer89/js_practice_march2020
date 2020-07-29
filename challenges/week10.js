
//Q1 - COMPLETE
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  //split number into an array of separate digits
  const singleDigits = n.toString().split('').map(Number);
  //make a new variable called 'results' and set it to the array of digits with reduce
  let results = singleDigits.reduce(
    (accumulator, currentValue) => accumulator + currentValue)
  //return results
  return results;
};



//Q2

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) throw new Error("end is required");
  if (typeof start !== "number" || typeof start !== "number" || typeof step !== "number") {
    throw new Error("start, end and step must be numbers");
  }
  if (step < 1 || step > end) throw new Error("step must be greater than 1 and less than end");

  let arr = [];
  //create a new array
  for (let i = start; i <= end; i += step) {
    //create a loop that goes all the way to the end

    arr.push(i);
    //push i to the array
  }
  return arr;
  //return the array
};




//Q3

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 * 
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  let usageForDay = [];
  //create a new array 
  let topUser = [];
  //create another new array
  users.forEach(user => user.screenTime.forEach(d => {
    //loop through each users screen time for each day
    if (d.date === date) {
      //if the date given is the same as the date
      for (let key in d.usage) {
        //loop through the usage
        if (d.usage.hasOwnProperty(key)) {
          //if it exists
          usageForDay.push(d.usage[key]);
          //push it to the usage for day variable
        }
      }
      topUser.push(user.username)
      //push the username to top user
    }
  }));
  if (usageForDay.reduce((a, b) => a + b) >= 100) return topUser;
  //return the top usr using reduce
  else return []
  //otherwise return empty array
};


//Q4

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr.charAt(0) !== "#") throw new Error("# Hash needed at start of hexStr");
  const red = parseInt(hexStr.slice(1, 3), 16);
  const green = parseInt(hexStr.slice(3, 5), 16);
  const blue = parseInt(hexStr.slice(5, 7), 16);
  return `rgb(${red},${green},${blue})`
  // in hexadecimal system, F means 16
  //https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
};


//Q5
/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (!Array.isArray(board)) throw new Error("board must be an array");
  let myWinner = null; board[0][0] === board[0][1] && board[0][1] === board[0][2] ? myWinner = board[0][0] : 0;
  board[1][0] === board[1][1] && board[1][1] === board[1][2] ? myWinner = board[1][0] : 0;

  board[2][0] === board[2][1] && board[2][1] === board[2][2] ? myWinner = board[2][0] : 0;

  board[0][0] === board[1][0] && board[1][0] === board[2][0] ? myWinner = board[0][0] : 0;

  board[0][1] === board[1][1] && board[1][1] === board[2][1] ? myWinner = board[0][1] : 0;

  board[0][2] === board[1][2] && board[1][2] === board[2][2] ? myWinner = board[0][2] : 0;

  board[0][0] === board[1][1] && board[1][1] === board[2][2] ? myWinner = board[0][0] : 0;

  board[2][0] === board[1][1] && board[1][1] === board[2][0] ? myWinner = board[2][0] : 0;
  return myWinner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
