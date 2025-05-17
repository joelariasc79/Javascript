function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  // const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const cleanStr = str.toLowerCase();
  console.log("cleanStr: " + cleanStr)

  // Compare the string with its reversed version
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
const str1 = "racecar";
// const str2 = "A man, a plan, a canal: Panama";
const str3 = "hello world";

console.log(isPalindrome(str1)); // Output: true
// console.log(isPalindrome(str2)); // Output: true
console.log(isPalindrome(str3)); // Output: false