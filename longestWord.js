/*
Q. Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.
 */


// Constraints:
//? The input string may contains alphabetic characters, digits, spaces, and punctuation.
//? The input string non-empty.
//? The input string may contain multiple words separated by spaces.

// Note:
//? If the input string is empty or contains only whitespace, the function shoudl return an false.
//? The function should  ignore leading and trailing whitespace when determining the longest word.

const findLongestWord =(str)=>{
    if(str.trim().length===0){
        return false;
    }
    words=str.split(" ");

    // console.log(strArr);
    /*
    words =words.sort((a,b)=>a.length-b.length);
    // console.log(words);
    return words.at(-1);
    */

    //using reduce method.
   return words.reduce(
    (accum,curWord)=>(curWord.length>accum.length?curWord:accum),""
   );
};

console.log(
    findLongestWord("The deadman has risen")
);
