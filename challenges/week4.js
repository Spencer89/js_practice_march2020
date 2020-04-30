//Q1 - COMPLETE
function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let result = nums.filter(num =>
    (num < 1)
  )
  return result;
}

//Q2 - COMPLETE
function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
    let result = names.filter(name =>
      (name.charAt(0) === char)

    )
    return result
}

//Q3 - COMPLETE
function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let result = words.filter(phrase =>
    (phrase.charAt(0,1) === 'to')

  )
  return result
}

//Q4 - COMPLETE
function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let result = nums.filter(num =>
    (num % 1 === 0)
  )
  return result;
}

//Q5-***INCOMPLETE*** - Returns undefined
function getCities(users){ 
  let results= users.map(person =>
    (person.displayName)
    )
   return results;
}
  
 
    
    

//Q6 ***NEARLY COMPLETE - slight rounding error***
function getSquareRoots(nums) {
if (!nums) throw new Error ("nums is required");
let result = nums.map(x =>  Math.sqrt(x).toFixed(2));
return result
}


//Q7 - COMPLETE
function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  str =str.toLowerCase()
  let results = sentences.filter(sentence=>
    sentence.toLowerCase().includes(str) 
  )
  return results
}

//Q8- COMPLETE
function getLongestSides(triangles) {

 let results = triangles.map(individualLength => Math.max.apply(null, individualLength))
 return results
}

//Helpful article - https://stackoverflow.com/questions/41961809/find-largest-number-in-array-of-arrays
//Not sure how to use the apply method fully, removing the 'null' paramenter results in an array of infinity?

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
