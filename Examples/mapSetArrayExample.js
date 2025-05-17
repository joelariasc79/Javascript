const myMap = new Map();

// Add key-value pairs
myMap.set("apple", 1);
myMap.set(2, "pear");
myMap.set(true, "banana");

// Access values
console.log(myMap.get("apple")); // Output: 1
console.log(myMap.get(2)); // Output: pear

// Check if a key exists
console.log(myMap.has("apple")); // Output: true
console.log(myMap.has("orange")); // Output: false

// Get the size of the Map
console.log(myMap.size); // Output: 3

// Delete a key-value pair
myMap.delete("apple");
console.log(myMap.get("apple")); // Output: undefined

// Clear the entire Map
myMap.clear();




// Set
const mySet = new Set();


// Using a for-of loop
for (const item of mySet) {
    console.log(item);
  }
  
  
  // Using a forEach loop
  mySet.forEach((item) => {
    console.log(item);
  });

// Use cases: 
// Removing duplicates for an Array
const arrayWithDuplicates = [1, 2, 3, 2, 1, 4];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray); // Output: [1, 2, 3, 4]


// Check for Unique Values
const hasUniqueValues = (array) => new Set(array).size === array.length;
console.log(hasUniqueValues([1, 2, 3])); // Output: true
console.log(hasUniqueValues([1, 2, 1])); // Output: false


const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Output: Set { 2, 3 }

// Union
const union = new Set([...setA, ...setB]);
console.log(union); // Output: Set { 1, 2, 3, 4 }





// List/Arrays:
const myArray = [1, 2, 3, "hello", true];
console.log(myArray[0]); // Output: 1

myArray[1] = 10;
console.log(myArray); // Output: [1, 10, 3, "hello", true]

myArray.push(4, "world"); // it adds two objects at the end of the array
console.log(myArray); // Output: [1, 10, 3, "hello", true, 4, "world"]
const lastElement = myArray.pop();
console.log(lastElement); // Output: "world"
console.log(myArray); // Output: [1, 10, 3, "hello", true, 4]

const firstElement = myArray.shift();
console.log(firstElement); // Output: 1
console.log(myArray); // Output: [10, 3, "hello", true, 4]

myArray.unshift(0, "start"); // 
console.log(myArray); // Output: [0, "start", 10, 3, "hello", true, 4]

const slicedArray = myArray.slice(2, 5);
console.log(slicedArray); // Output: [3, "hello", true]

myArray.splice(1, 2);
console.log(myArray); // Output: [0, "start", "hello", true, 4]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

const joinedString = myArray.join("-");
console.log(joinedString); // Output: 0-start-hello-true-4

const index = myArray.indexOf("hello");
console.log(index); // Output: 2