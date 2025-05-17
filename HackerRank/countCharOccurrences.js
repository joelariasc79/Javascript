function countCharOccurrences(str) {
  const charCounts = {};

  for (const char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1;
    // console.log("char: " + char);
    // console.log("charCounts[char]: " + charCounts[char]);
    // console.log("charCounts: " + charCounts);
  }

  return charCounts;
}

// Example usage:
const str = "Hello, world!";
const charCounts = countCharOccurrences(str);

for ([char, count] of Object.entries(charCounts)) {
  // console.log(`${char}: ${count}`);
  console.log(char + " :" + count);
}
