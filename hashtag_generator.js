/*
Q. You are required to implement a function generatHash that generates a hash tag from  a given input string. The hash tag should be constructed as follow:
->The input string should be converted to a hash tag format,where each word is capitalized and concatenated together without spaces.
->If the length of the input string is geater than 280 characters or if the input string is empty or contains only whitespace,the function should return false.
-> Otherwise, the function should return the generated hash tag prefixed with #.
 */

const generateHash = (str) => {
  if (str.length > 280 || str.trim() === 0) {
    return false;
  }
  str = str.split(" ");
//   console.log(str)
 str = str.map((currElem)=>
    // return currElem.charAt(0).toUpperCase()+currElem.slice(1).toLowerCase();
    currElem.replace(currElem[0],currElem[0].toUpperCase())
 )
//  console.log(str)
 str = `#${str.join("")}`;
//  console.log(str)
return str;
};
console.log(generateHash("Mahendra singh dhoni is the greatest of all time."));
