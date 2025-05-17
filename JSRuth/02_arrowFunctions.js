let add = (a, b) => a + b;

// You use the sum function here:
console.log(add(5, 3)); // Output: 8

// map, reduce, 
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(number => number * 2);

// You use the sum function here:
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// 
// let numbers2 = [1, 2, 3, 4, 5];
// const doubled2 = [];
// for (let i = 0; i < numbers2.length; i++) {
//   doubled2.push(numbers2[i] * 2);
// }
// console.log(doubled2); // Output: [2, 4, 6, 8, 10]


// Rest parameters in JavaScript allow a function to accept an indefinite number of arguments as an array. 
// They are denoted by three 1  dots (...) followed by a parameter name

let sum = (...numbers) => {
    let total = 0;

    for (let number of numbers) {
        total += number;
        // is the same than:
        // total = total + number;
    }
    return total;
}; 

// You use the sum function here:
let suma1 = sum(1, 2, 3, 4);

console.log(suma1); // Output: 10
console.log(sum(1, 2, 3, 4, 5)); // Output: 15