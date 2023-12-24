/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let strArr = str.toLowerCase().split("");
  let vowelArray = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  strArr.map((char) => {
    if (vowelArray.includes(char)) {
      vowelCount += 1;
    }
  });
  return vowelCount;
}

module.exports = countVowels;
