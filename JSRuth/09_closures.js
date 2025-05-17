function outerFunction(outerVar) {
    function innerFunction(innerVar) {
    console.log(outerVar + " " + innerVar);
    }
    return innerFunction;
}

const myInnerFunction = outerFunction("Hello"); // outerFunction has finished executing
myInnerFunction("World!"); // "Hello World!" - innerFunction still remembers outerVar


// ejemplo que no es un closure:
function number() {
    return 1;
}

const numero = number();
console.log(numero);


// closure
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
// counter(); // not valid
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
// console.log(counter.count); // Error! count is not directly accessible

function multiplier(factor) {
    return function(number) {
      return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5));  // 10

const triple = multiplier(3);
console.log(triple(5));  // 15

// function delayedGreeting(name, delay) {
//     setTimeout(function() {
//       console.log(`Hello, ${name}!`); // The inner function closes over 'name'
//     }, delay);
// }

// delayedGreeting("Alice", 1000);