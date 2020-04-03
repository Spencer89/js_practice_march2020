//Q1
function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
 /*return the string with character at index zero as a capital 
plus the string from index 1
Stack overflow: https://stackoverflow.com/questions/1026069/
how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

POSSIBLE EDGE CASE: word = phrase starts with a symbol such as @  */}

//Q2
function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] +"." + lastName[0];
  /* return index zero of first name, followed by a full stop, followed
   by index zero of second name
   
  POSSIBLE EDGE CASE: firstName, lastName start with space, number or symbol
  POSSIBLE EDGE CASE: Double-barrelled names?
 */
}
//Q3
function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let updatedPrice = originalPrice + (originalPrice * (vatRate/100));
  return ( Math.floor(updatedPrice * 100) / 100 );}
  /* To calculate VatRate of originalPrice multiply originalPrice by vatPrice divided
   by 100, then add that on to originalPrice. This gives correct answer but test only 
   takes upto two decimal spaces, whereas this gives a true answer
   Attempted Math.floor : ( Math.floor(variable * 100) / 100 )
   Not entirely sure why this works but possibly because dividing by 100 gives us
    two digits after the decimal point, so perhaps if we wanted three places 
    after the decimal we might do ( Math.floor(num * 1000) / 1000 ) ?
    
    POSSIBLE EDGE CASE:variables are entered as a string rather than number
    POSSIBLE EDGE CASE:vatrate is entered with a % sign included
    */


//Q4
function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let updatedPrice = originalPrice - (originalPrice * (reduction/100));
  return ( Math.floor(updatedPrice * 100) / 100 );}
  /* Same as above, but minusing the percentage rather than adding

  POSSIBLE EDGE CASE:variables are entered as a string rather than number
  POSSIBLE EDGE CASE:reduction is entered with a % sign included
  */


//Q5
function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let halfWay;
  if (str.length % 2 == 1)
  {halfWay = str.length/2;
  return str.substring(halfWay, halfWay + 1)}
  halfWay = str.length / 2-1;
  return str.substring(halfWay, halfWay + 2)}
  /* Found this example on stack overflow and adapted it https://stackoverflow.com/questions/
  58260647/create-a-function-middlethat-returns-the-middle-character-s-of-a-word
  -if-a-wo:
  Create a variable called halfway to help us pin point where halfway through our
  string is. First check if the string length divided by 2 gives us a remainder of
   1, which means the string is odd so return a substring with the indicies of the
  halfway point and halfway point plus one (because we only want one number)
  Then for all remaining non-odd numbers, the halfway point will be the string
   length, divided by 2 (halved),and one less that  that (to make room for returning
  the two middle numbers) then return a substring with the indicies of the halfway
  point and halfway point plus two (because we want the two middle numbers) 
  
   POSSIBLE EDGE CASE:What if someone entered punctuation, such as a full stop
    after the string. This could skew the middle point
  */

//Q6
function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return  word.split('').reverse().join('')
}
/* Found an example on stack overflow: https://stackoverflow.com
/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript
We want to return our input, but first we split it apart each time there is a
 space, reverse it, and then join it back together each time there is a space.

  POSSIBLE EDGE CASE:What if words are hyphenated or / rather than spaced?
*/

//Q7***
function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
   
  
}
/* We want to do something using forEach. We don't need to loop 
through because forEach() is declarative, rather than imperitive. For each item,
 we want item.reverse(), suggestions on slack around using the reverseWords code, 
 or using map()?
 */

//Q8***
function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0
  {for(let i = 0; i< countLinuxUsers.length; i++)
  if(users[i].type === "Linux")
  count++}
  {return count}}
  /* We want to loop through an array full of objects.
   If users.type === "Linux" we want count ++
  return the count.
  The test returns 1...which indicates that the loop is 
  finding the first linux match and then stopping prematurely.
   I have moved return count into {} to separate it.
   Q-how do i continue the loop once the condition has been met,
    to search for other instances of the condition being met?
  
     POSSIBLE EDGE CASE:linux with a small "l"
  */


//Q9
function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  
    let summation = scores.reduce((accumulator,currentValue) =>
    {return accumulator + currentValue})
   let nonRoundedAnswer =  (summation / (scores.length))
     return (Math.ceil(nonRoundedAnswer*100)/100)
    }
    
  /*
  Used a completed codewars challenge for a template on this one.
  We have created a variable called summation which entails the 
  array being reduced down into a value and an accumulator and returns 
  them added together as a total. Then, created a variable called nonRounded 
  answer which divides this total by the number of items in the array which gives
   us a true total. Then we use Math.ceil to round upwards, and *100 /100 to round
   up to two decimal places.
 
    POSSIBLE EDGE CASE:scores are entered as strings instead of numbers
  */


//Q10
function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n % 3 === 0 && n % 5 === 0)
  {return "fizzbuzz"}
  else if ( n % 3 === 0)
  {return "fizz"}
  else if ( n % 5 === 0)
  {return "buzz"}
  else {return n}}
  /* If the number divides by both 3 & 5 -> fizzbuzz, if the number divides 
  by 3 -> fizz, if the number divides by 5 ->buzz, and anything else, just return
  n as it is.
  
   POSSIBLE EDGE CASE:n is a string or other data type
  */


module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
