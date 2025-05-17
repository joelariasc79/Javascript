function isAnagram(str1, str2) {
    // Check if the lengths are different
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Sort both strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;   
  
  }
  
  // Example usage:
  const str1 = "listen";
  const str2 = "silent";   
  
  
  if (isAnagram(str1, str2)) {
    console.log("The strings are anagrams.");
  } else {
    console.log("The strings are not anagrams.");
  }