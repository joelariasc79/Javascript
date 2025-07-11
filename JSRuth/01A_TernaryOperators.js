// 1. Assigning a value based on a condition:
const age = 20;

// Using if operator
if(age >= 18 ){
  isAdult = "Adult"
} else {
  isAdult = "Minor"
}

// Using if ternary operator
isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Output: Adult


const temperature = 15;
const weather = temperature > 20 ? "Warm" : "Cool";
console.log(weather); // Output: Cool

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Returning a value from a function:

function checkSign(number) {
  return number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
}

console.log(checkSign(5));   // Output: Positive
console.log(checkSign(-3));  // Output: Negative
console.log(checkSign(0));   // Output: Zero (nested ternary)

function checkSignWithSwitch(number) {
  return number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
}


// //////////////////////////////////////////////////////////////////////////////////////////////////////
// // 3. Using it within template literals:


const message1 = "User is 'logged' out";
console.log(message1)

const message2 = 'User is "logged" out';
console.log(message2)

// Error:
// const message3 = 'User is 'logged' out';
// console.log(message3)

const hola = "hola mundo";
const message4 = "User is ${hola}";
console.log(message4)


const message5 = `User is ${hola}`;
console.log(message5)

const isLoggedIn = true;
const message = `User is ${isLoggedIn ? "logged in" : "logged out"}.`;
console.log(message); // Output: User is logged in.

// //////////////////////////////////////////////////////////////////////////////////////////////////////
// // 4. Switch Example:
function getDayName(dayNumber) {
  let dayName;

  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      // break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid Day Number";
  }
  return dayName;
}

console.log(getDayName(0)); // Output: Monday
console.log(getDayName(3)); // Output: Wednesday
console.log(getDayName(7)); // Output: Invalid Day Number
console.log(getDayName("hello")); // Output: Invalid Day Number (strict equality check)