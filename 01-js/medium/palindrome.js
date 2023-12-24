/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var newStr = str.replace(/[^\w\s]/gi, "");
  let strArr = newStr.toLowerCase().split(" ").join("").split("");
  let reverseStr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    reverseStr.push(strArr[i]);
  }
  if (strArr.join("") === reverseStr.join("")) {
    return true;
  }
  return false;
}

isPalindrome("Eva, can I see bees in a cave?");

module.exports = isPalindrome;
