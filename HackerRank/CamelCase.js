function countCamelCase(str) {
  // Initialize a counter for words
  let count = 1;

  // Iterate over the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    console.log(char);
    // Check for uppercase letters (excluding the first character)
    if (char.toUpperCase() === char && i !== 0) {
      count++;
    }
  }

  return count;
}

// Example usage
const s = "holaMundoAmigoCompadrePapa";
const wordCount = countCamelCase(s);
console.log("result:", wordCount); // Output: result: 5

// Print result twice for consistency with the original Java code
console.log("result:", wordCount);