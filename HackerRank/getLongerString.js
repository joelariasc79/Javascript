// The getLongerString method takes a string as input and returns the longest substring that has
//  all unique characters.

function getLongerString(str) {
  let maxLength = 0;
  let start = 0;
  let charPos = 0;
  const charSet = new Set();

  while (charPos < str.length) {
    const char = str[charPos];

    // If the character is not in the set, add it and increment the end pointer
    if (!charSet.has(char)) {
      charSet.add(char);
      charPos++;
      maxLength = Math.max(maxLength, charSet.size);
    } else {
      charSet.clear();
    }
  }

  return maxLength;
}

let iString = "sudbamdqual";
// iString = "sdbamqual";
// iString = "abcakgts"; // 5
console.log(getLongerString(iString));

