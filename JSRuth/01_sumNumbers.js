// funciones:
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

// Division:

let a = 5;
let b = 4;
let c = a / b;
console.log("Division Resultado: " + c);
console.log("");

// Modulo: es el residuo de la division
a = 0;
b = 4;
c = a % b
console.log("Modulo Resultado: 0 % 4: " + c);

a = 1;
b = 4;
c = a % b
console.log("Modulo Resultado: 1 % 4: " + c);


a = 2;
b = 4;
c = a % b
console.log("Modulo Resultado: 2 % 4: " + c);

a = 3;
b = 4;
c = a % b
console.log("Modulo Resultado: 3 % 4: " + c + " porque 4 * 0 = 0 y sobran 3 para llegar a 3");

a = 4;
b = 4;
c = a % b
console.log("Modulo Resultado: 4 % 4: " + c + " porque 4 * 1 = 4 y sobran 0 para llegar a 4");

a = 5;
b = 4;
c = a % b
console.log("Modulo Resultado: 5 % 4: " + c+ " porque 4 * 1 = 4 y sobran 1 para llegar 5");

a = 6;
b = 4;
c = a % b
console.log("Modulo Resultado: 6 % 4: " + c+ " porque 4 * 1 = 4 y sobran 2 para llegar 6");

a = 7;
b = 4;
c = a % b
console.log("Modulo Resultado: 7 % 4: " + c);

a = 8;
b = 4;
c = a % b
console.log("Modulo Resultado: 8 % 4: " + c);

console.log("");

a = 3;
b = 3;
c = a % b
console.log("Modulo Resultado: 3 % 3: " + c);

a = 4;
b = 3;
c = a % b
console.log("Modulo Resultado: 4 % 3: " + c);

a = 5;
b = 3;
c = a % b
console.log("Modulo Resultado: 5 % 3: " + c);

a = 6;
b = 3;
c = a % b
console.log("Modulo Resultado: 6 % 3: " + c);



// Increment ad decrement by 1

a = 6;
console.log("Numero original: " + a);
a++;
console.log("Despues de a++: " + a);
a++;
console.log("Despues de a++: " + a);

++a;
console.log("Despues de ++a: " + a);
a--;
console.log("Despues de a--: " + a);
--a;
console.log("Despues de --a: " + a);


// Assignment Operators: 
console.log("Assignment Operators: ");
console.log("Using ");
a = 6;
console.log("Antes de a+=4: " + a);
a += 4;
// a += 4; is the same as a = a + 4;
console.log("Despues de a += 4: " + a);
a -= 4;
console.log("Despues de a -= 4: " + a);
a *= 4;
a = a * 4;
console.log("Despues de a *= 4: " + a);
a /= 4;
console.log("Despues de a /= 4: " + a);
a %= 4;
console.log("Despues de a %= 4: " + a);

// Modulo: residuo de la division: 
console.log(67%7);
console.log(60%7);


// Logical Operators: 
console.log("");
console.log("Logical Operators: ");
a = 2;
b = 5;
c = a;

// && (AND):
console.log("&&: significa AND");
console.log("");

if(a === 2 && b === 5){
    console.log("true: a===2 AND b==5");
}
else{
    console.log("false: a!==2 OR b1!==5");
}



a = 2;
b = 5;
console.log("");
if(a === 3 && b === 5){
    console.log("true: a===3 AND b==5");
}
else{
    console.log("false: a!==3 OR b1!==5");
}



a = 2;
b = 5;
c = 6;
console.log("");
if(a === 2 && b === 5 && c===6){
    console.log("true: a===2 AND b==5 AND c==6");
}
else{
    console.log("false: a!==3 OR b1!==5 OR c!==6");
}



const anotherUser = {
    id: 2,
    name: "Bob",
    isActive: false
};

let user;

// si a es user es undefined, ya no se evalua si user.id es 2
// como es un AND, los dos deben ser verdadero y como la primera condicion es falsa entonces la codicion siempre es falsa, 
// entonces ya no es necesario evualar user.id ==2 
// Esto a veces se usa como ver si un objecto existe y despues preguntar si ese objeto tiene cierto valor
// ya que si preguntas directamente si el objeto tiene determinado valor y es el objecto es undefined, el programa generara un error. 

if (user !== undefined && user.id === 2){
    console.log("The object user has an id of 2");
}else{
    console.log("The object user is undefined or does not have id = 2"); 
}

anotherUser
if (anotherUser !== undefined && anotherUser.id === 2){
    console.log("The object anotherUser has an id of 2");
}else{
    console.log("The object anotherUser is undefined or des not have id = 2"); 
}


// || (OR):
a = 2;
b = 5;
console.log("||: significa OR");
console.log("");

// se a es igual a 2, ya no se evalua si b es igual a 5, ya que como la primera condicion es verdadera,
// aunque b sea deferente a 5, la condicion siempre sera verdadera


if(a === 2 || b === 5){
    console.log("true: a===2 OR b==5");
}
else{
    console.log("false: a!==2 OR b1!==5");
}

a = 2;
b = 5;
console.log("");
if(a === 3 || b === 5){
    console.log("true: a===3 OR b==5");
}
else{
    console.log("false: a!==3 OR b1!==5");
}


a = 2;
b = 5;
console.log("");
if(a === 3 || b === 6){
    console.log("true: a===3 OR b==6");
}
else{
    console.log("false: a!==3 OR b1!==6");
}

// ! (NOT):
a = 2;
console.log("!: significa not");
console.log("");
if(!(a === 2)){
    console.log("true: not(a!==2)");
}
else{
    console.log("false: not(a===2)");
}

a = 2;
console.log("");
if(!(a === 3)){
    console.log("true: not(a!==3)");
}
else{
    console.log("false: not(a===3)");
}

 // /////////////////////////////////////////////

console.log("");
console.log("Functions: ");


console.log("");
console.log("Potencia: Forma 1:");
a = 2;
b = 3;
c = Math.pow(a, b);
console.log("2 a la 3 -> 2 * 2 = 4 * 2 = 8: " + c);

console.log("Potencia: Forma 2:");
c = a**b;
console.log("2 a la 3 -> 2 * 2 = 4 * 2 = 8: " + c);
// Math.pow(a, b); es lo mismo que a**b;


 // /////////////////////////////////////////////
console.log("");
console.log("String Functions: ");
// String son textos

let str = "Hello, world!";
console.log(str.length); // Output: 13
// length: es tamano


// Contatenacion de strings:
// Ejemplo 1:
str1 = "SELECT * FROM users WHERE name = "
str2 = "'Juan' OR 1=1;"
sql = str1 + str2 // "SELECT * FROM users WHERE name = 'Juan' OR 1=1";
console.log("sql: " + sql)

// Ejemplo 2:
const str1 = "Hello, ";
// str1 = "hola"; si reasigno un valor a un const(constante), el programa genera un error 
const str2 = "world!";
let combinedStr1 = str1 + str2; // Hello. world
// combinedStr1 = "hola"; no hay problema reasignar un valor a un let o var

// Contatenacion de strings:
// concatenate: concatenar
console.log(combinedStr1); // Output: "Hello, world!"


// // You can also use the `+` operator for concatenation:
const combinedStr2 = str1.concat(str2);
console.log(combinedStr2); // Output: "Hello, world!"
// str1 + str2; y str1.concat(str2); es lo mismo



// /////////////////////////////////////////////

// Funcion CharAt();
// char: significa letra
// String: significa palabra o texto.

str = "Hello";

// charAt(): significa: la letra en la posicion x
console.log(str.charAt(0)); // Output: "H"
console.log(str.charAt(1)); // Output: "e"

// Unicode: es un sistema de codificacion universal que es usado por:
// json, html, API, ...
console.log(str.charCodeAt(0)); // Output: 72 (Unicode of 'H'): 1001000
// 1110 - > 14 (Binary Code)
// 9 - > 10 -> 11
// 0 -> 0, 1 -> 1, 2 -> 10, 3 -> 11, 4 -> 100 
// A -> 1110 -> 14
// 0 -> Off
// 1 -> On








// /////////////////////////////////////////////

str = "JavaScript";
// el substring incluye desde el caracter en la posicion de la izquierda hasta la posicion de la derecha -1
// Esto obtiene los caracteres de la posicion 0 a la 3
console.log(str.substring(0, 4)); // Output: "Java"
console.log(str.substr(0, 4)); // Output: "Java"

// Esto obtiene los caracteres de la posicion 2 a la 4
console.log(str.substring(2, 5)); // Output: "vaS"
console.log("hola"); 


str = "Hello, world world!";
// indexOf: retorna la posicion en que se encuentra por primera vez el substring en el string, de izquierda ala derecha, la posicion que regresa
// es la posicion con respecto a l inicio del string 
console.log(str.indexOf("world")); // Output: 7

str = "Hello, world!";
// indexOf: retorna la posicion en que se encuentra por primera vez el substring en el string, de izquierda ala derecha, la posicion que regresa
// es la posicion con respecto a l inicio del string 
console.log(str.indexOf("o")); // Output: 4

str = "Hello, world!";
// lastIndexOf: retorna la posicion en que se encuentra el substring en el string, de derecha ala a izquerda por primera vez, la posicion que regresa
// es la posicion con respecto a l inicio del string 
console.log(str.indexOf("o")); // Output: 4
console.log(str.lastIndexOf("o")); // Output: 8. This is the first o starting from the end. But the position starts from the begining


str = "Hello, World!";
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(str.toLowerCase()); // Output: "hello, world!"


str = "   Hello, World!   ";
console.log(str.trim()); // Output: "Hello, World!"

// this is an Array: ["apple", "banana", "orange"]
// also you can call it List
str = "apple, banana,orange";
fruits = str.split(","); 
console.log(fruits); // Output: ["apple", " banana", "orange"]

str = "apple banana orange";
fruits = str.split(" "); 
console.log(fruits); // Output: ["apple", "banana", "orange"]


str = "apple, banana, orange,pineapple";
fruits = str.split(", "); 
console.log(fruits); // Output:  ['apple', 'banana', 'orange,pineapple']


const myArray = ["apple", "banana", "cherry"];
const joinedString1 = myArray.join(", ");
console.log(joinedString1); // Output: "apple, banana, cherry"

// Join with a hyphen:
myArray = ["apple", "banana", "cherry"];
const joinedString2 = myArray.join("-");
console.log(joinedString2); // Output: "apple-banana-cherry"

// Join with an empty string (creates a single string with no separator):
myArray = ["apple", "banana", "cherry"];
const joinedString3 = myArray.join("");
console.log(joinedString3); // Output: "applebananacherry"


str = "Hello, world!";
let newStr = str.replace("world", "everyone");
console.log(newStr); // Output: "Hello, everyone!"