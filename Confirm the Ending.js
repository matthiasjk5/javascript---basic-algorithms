// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// function confirmEnding(str, target) {
//   let result = true;

//   for (let i = str.length - 1, j = target.length - 1; j >= 0; i--, j--) {
//     if (str[i] === target[j]);
//     else {
//       result = false;
//       return result;
//     }
//   }
//   return result;
// }

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding('Congratulation', 'on'));
