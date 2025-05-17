let person = {
    firstName: "Ruth",
    age: 21,
    address: {city: "San Jose"}
}

const { firstName, age } = person;
console.log(firstName); // Output: Ruth
console.log(age);       // Output: 21

const { city: currentCity } = person.address; // Renaming the property
console.log(currentCity); // Output: San Jose


