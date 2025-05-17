const animalPrototype = {
    speak: function() {
        console.log(`The ${this.name} says ${this.sound}.`);
    }
};

const lion = Object.create(animalPrototype);
lion.name = "Simba";
lion.sound = "Roar!";
lion.speak();     // Output: The Object says Roar!. (Note: constructor is Object here)

const elephant = Object.create(animalPrototype);
elephant.name = "Dumbo";
elephant.sound = "Trumpet!";


elephant.speak(); // Output: The Object says Trumpet!. (Note: constructor is Object here)

// To have the correct constructor name, you'd typically use classes or constructor functions.

// shape {base, height, area, ..., radio(no inherited)}
//        rectangle {base, height, area, ...}....
//        square {base, height, area, ...}.