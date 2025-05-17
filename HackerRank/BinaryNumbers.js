/*
        Task
        Given a base- integer, , convert it to binary (base-). Then find and print the base- integer denoting
        the maximum number of consecutive 's in 's binary representation. When working with different bases,
        it is common to show the base as a subscript.

        Example

        The binary representation of 125 is . In base , there are the maximum of 5 consecutive ones in two groups.
*/

function findMaxConsecutiveOnes(n) {
    // Convert the number to a binary string
    const binaryString = n.toString(2);
    const binaryCharArray = binaryString.split("");
  
    let count = 0;
    let max = 0;
  
    for (const bin of binaryCharArray) {
      count = (bin === "1") ? count + 1 : 0;
      max = Math.max(max, count);
    }
  
    return max;
  }
  
  // Example usage
  const n = 125;
  const maxConsecutiveOnes = findMaxConsecutiveOnes(n);
  console.log("max: " + maxConsecutiveOnes); // Output: 3