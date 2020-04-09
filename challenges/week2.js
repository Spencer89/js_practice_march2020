
//Q1. COMPLETE
function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  { return sandwich.fillings }
}

//Q2. COMPLETE
function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === 'Manchester') { return true; }
  else { return false; }
}

//Q3. COMPLETE
function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let amountOfBuses = people / 40
  { return Math.ceil(amountOfBuses) }
}

//Q4. COMPLETE
function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === "sheep")
      count++
  { return count; }
}

//Q5. ***INCOMPLETE***
function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let firstLetter = person.postCode;
  let correctCity = person.city;
  if((firstLetter.charAt(0) === "M") && (correctCity === "Manchester" ))
  {return true;} else 
  {return false;}
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
