function maxConsecutiveSum(arr, k) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const iarr = [4, 5, -3, 3, 7];
const k = 3;

console.log(maxConsecutiveSum(iarr, k));