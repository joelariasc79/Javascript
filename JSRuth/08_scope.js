let globalVar = "I'm global!";

function checkScope() {
  console.log(globalVar); // Accessible here
}

checkScope();
console.log(globalVar);   // Also accessible here


function myFunction() {
    let localVar = "I'm local to myFunction!";
    console.log(localVar); // Accessible here

    var functionVar1 = "I'm function-scoped (due to var)!";
}

myFunction();
// console.log(functionVar1); // this cause an error because is function scoped
// console.log(localVar); // This would cause an error


if (true) {
    let blockVar = "I'm block-scoped!";
    const blockConst = "I'm also block-scoped!";
    var functionVar = "I'm function-scoped (due to var)!";
    console.log(blockVar);   // Accessible here
    console.log(blockConst);  // Accessible here
    console.log(functionVar); // Accessible here
}

// console.log(blockVar);   // This would cause an error
// console.log(blockConst);  // This would cause an error
console.log(functionVar); // Accessible here (due to var)

// La diferiencia entre 'let' y 'var' es:
// 'let' es siempre local dentro de funciones y de bloques como if, else for, while, ... se comporta como global
// 'var' es solo local en funciones, pero en bloques como if, else for, while se comporta como global
