function randomArray(inputArray) {
  const outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    outputArray.push(Math.floor(Math.random() * 10));
  }

  return outputArray;
}

// Example usage:
const inputArray = [5, 7, 3, 7, 9];
const outputArray = randomArray(inputArray);

outputArray.forEach(num => console.log(num));