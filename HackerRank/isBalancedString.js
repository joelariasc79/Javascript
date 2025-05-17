/*
Task

       Given a string, determine if it is balanced or not.

       Input Format

       There will be multiple lines in the input file, each having a single non-empty string. You should read input till end-of-file.

       Output Format

       For each case, print 'true' if the string is balanced, 'false' otherwise.

       Sample Input

       {}()
       ({()})
       {}(
       []

       Sample Output

       true
       true
       false
       true
*/

function isBalancedString(str) {
  if (str.length % 2 === 1) {
    return false;
  }

  const openChars = '([{';
  const closeChars = ')]}';
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openChars.includes(char)) {
      stack.push(char);
    } else if (closeChars.includes(char)) {
      const openChar = stack.pop();
      // console.log("closeChars.indexOf(char): " + closeChars.indexOf(char));
      // console.log("openChars.indexOf(openChar): " + openChars.indexOf(openChar));
      console.log("closeChar: " + char);
      console.log("openChar: " + openChar);
      
      if (closeChars.indexOf(char) !== openChars.indexOf(openChar)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage:
const input1 = "({[]})";
const input2 = "({[])}";
const input3 = "({[]}";

console.log(isBalancedString(input1)); // Output: true
console.log(isBalancedString(input2)); // Output: false
console.log(isBalancedString(input3)); // Output: false