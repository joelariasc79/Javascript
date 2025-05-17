/*
        Reduce a string of lowercase characters in range ascii[‘a’..’z’] by doing a series of
        operations. In each operation, select a pair of adjacent letters that match, and delete them.

        Delete as many characters as possible using this method and return the resulting string.
        If the final string is empty, return Empty String

        Example
        s= 'aab'

        aab shortens to b in one operation: remove the adjacent a characters.

        s = 'abba'
        Remove the two 'b' characters leaving 'aa'. Remove the two 'a' characters to leave ''. Return 'Empty String'.
*/

function superReducedString(str) {
    let i = 1;
  
    while (i < str.length) {
      if (str[i - 1] === str[i]) {
        // Remove adjacent duplicates
        str = str.slice(0, i - 1) + str.slice(i + 1);
        i = 1; // Reset index to check the remaining string
      } else {
        i++; // Move to the next character
      }
    }
  
    return str.length === 0 ? "Empty String" : str;
  }
  
  // Example usage
  const s1 = "abbac";
  const s2 = "aab";
  const s3 = "aabb";
  const s4 = "bbaca";
  
  const result1 = superReducedString(s1);
  const result2 = superReducedString(s2);
  const result3 = superReducedString(s3);
  const result4 = superReducedString(s4);
  
  console.log("result (abbac):", result1); // Output: "c"
  console.log("result (aab):", result2); // Output: "b"
  console.log("result (aabb):", result3); // Output: "Empty String"
  console.log("result (bbaca):", result4); // Output: "aca"
  
 