/*

Given two strings of lowercase English letters, A and B, perform the following operations:

Sum the lengths of A and B..
Determine if A is lexicographically larger than B (i.e.: does B come before A in the dictionary?).
Capitalize the first letter in A and B and print them on a single line, separated by a space.

Input Format

The first line contains a string A. The second line contains another string B. The strings are comprised of only lowercase English letters.

Output Format

There are three lines of output:
For the first line, sum the lengths of A and B.
For the second line, write Yes if A is lexicographically greater than B otherwise print No instead.
For the third line, capitalize the first letter in both A and B and print them on a single line, separated by a space.

Sample Input

hello
java

Sample Output

9
No
Hello Java

Explanation

String A is "hello" and B is "java".

A has a length of 5, and B has a length of 4; the sum of their lengths is 9.
When sorted alphabetically/lexicographically, "hello" precedes "java"; therefore, A is not greater than B and the answer is No.

When you capitalize the first letter of both A and B and then print them separated by a space, you get "Hello Java".
* */


function compareStrings(strA, strB) {
    // Calculate the sum of lengths
    const totalLength = strA.length + strB.length;
  
    // Check lexicographic order
    const isALarger = strA.localeCompare(strB) > 0;
  
    // Capitalize first letters
    // const capitalizedA = strA[0].toUpperCase() + strA.slice(1);
    // const capitalizedB = strB[0].toUpperCase() + strB.slice(1);

    // console.log("strA[0]: " + strA[0]); // H
    // console.log("strA.slice(1): " + strA.slice(1)); //ello
  
    // Print the results
    // console.log(totalLength);
    console.log(isALarger ? "Yes" : "No");
    // console.log(`${strA} ${strB}`);
  }
  
  // Read input strings
  // const strA = prompt("Enter string A:");
  // const strB = prompt("Enter string B:");

  const strA = "Hello";
  const strB = "My Baby";
  
  // // Call the function and print output
  compareStrings(strA, strB);