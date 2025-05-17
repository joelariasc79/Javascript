let person = {
    name: "John",
    "last name": "Barajas",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello!");
    }
};

console.log("Object Literal:");
person.greet();
console.log(person.name);
console.log(person["name"]); 
console.log(person["last name"]);


console.log("\nIterate Over an Object 1 (using for statement):");
for (let key in person) {
    console.log(key + ": " + person[key]);
}


for (let key in person) {
    if (person.hasOwnProperty(key)) { // Important to check hasOwnProperty
        console.log(key + ": " + person[key]);
    }
}

// key and attribute are the same
// Object.keys(person): significa todas las key del objeto person
// Object.keys(person).forEach: significa que va a iterar por todos los key de person. 
// forEach: significa po cada uno 
console.log("\nIterate Over an Object 2 (Using Arrow Function - keys):");
Object.keys(person).forEach(key => {
    console.log(key + ": " + person[key]);
});

console.log("\nIterate Over an Object 3 (Using Arrow Function - entries(key,value)):");
Object.entries(person).forEach(([key, value]) => {
    console.log(key + ": " + value);
});

console.log("\nIterate Over an Object Values:");
Object.values(person).forEach(value => {
    console.log(value);
});


person.name = "Esther";
person["name"] = "Esther";
console.log("\nNew person.name: " + person.name);
// Adding a property:

person.job = "Developer";
console.log("\nNew property: " + person.job);

delete person.name;
console.log("\nDeleted property: " + person.name);


let person1 = new Object();

person1.name = "Jane Smith";
person1.age = 25;
person1.city = "London";
person1.greet = function() {
    console.log("Hi!");
};

person1.greet();
console.log(person1.name);


console.log("\nConstructor:");

class Person {

    constructor(firstName, age, city) {
        this.name = firstName;
        this.age = age;
        this.city = city;
    }

    greet() {
        console.log("Hi, my name is " + this.name);
    }
}


const person2 = new Person("John", 30, "New York");
person2.greet(); // Here, the constructor was called when `new Person()` was used.
console.log(person2.name);
