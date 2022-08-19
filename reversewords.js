/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/

function reverseWords(str) {
  let reversedString = str
    .split(' ')
    .map((item) => item.split('').reverse().join('').toString());
  reversedString = reversedString.join(' ');
  return reversedString;
}
