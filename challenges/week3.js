//Q1.COMPLETE

//Create a function called getSquares that takes in an array called numbers
function getSquares(nums) {
  nums.forEach(function (element, index, array) {
    array[index] = element * element;
  });
  return (nums);
}
/*https://stackoverflow.com/questions/19645186/square-each-number-in-an-array-in-javascript 
Used the above article as a guide*/



//Q2.COMPLETE
function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let capitalWords = words.map(word => { return word[0].toUpperCase() + word.substr(1); }
  );
  let singleString = capitalWords.join("")
  let camelCaseString = singleString.charAt(0).toLowerCase() + singleString.slice(1)
  return (camelCaseString);
}
//Used repl link from previous exercise as a guide https://repl.it/repls/JampackedRedundantKeygens
//Also used https://flaviocopes.com/how-to-uppercase-first-letter-javascript/


//Q3.
function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0
  //create a count that starts at 0
  for (let i = 0; i < people.length; i++) {
  //loop through people
    count += people[i]["subjects"].length;
  //the count will be equal to the length of the iterations of subjects
  } return count;
  //return the count
}





//Q4. 
function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
//create a variable 'isIngredient' and set to false as a default
  let isIngredient = false;
  //loop through the items in the menu
  for(let item of menu) {
    //if the item includes the ingredient
    if (item.ingredients.includes(ingredient)) {
      //change isIngredient to true
    isIngredient = true;
    }
    //return isIngredient 
}
return isIngredient }


//Q5.COMPLETE
//Used this article for reference: https://dev.to/mshin1995/back-to-basics-removing-duplicates-from-an-array-55he
function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicates = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) { duplicates.push(arr1[i]) }
    }
  }
  let sortedDuplicates = duplicates.sort();
  return sortedDuplicates.filter((a, b) => sortedDuplicates.indexOf(a) === b);
}



module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
