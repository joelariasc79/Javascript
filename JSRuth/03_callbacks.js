
function fetchData(callback) {
    console.log("Fetching data...");

    // Simulate an asynchronous operation with setTimeout
    setTimeout(function() {
        const data = { message: "Data fetched successfully!" };

      // Call the callback function with the fetched data
        callback(data);
    }, 2000); // Wait for 2 seconds
}

function processData(result) {
    console.log("Processing data:", result.message);
}

// Call fetchData and pass processData as the callback
fetchData(processData);
console.log("Continuing other tasks...");



function hola(result) {
    console.log("Hola: ", result.message);
}

fetchData(hola);

// Types of Callbacks
// Synchronous

const numbers = [1, 2, 3];


// numbers.forEach(callback) => {};

console.log("Print numbers*2:");
numbers.forEach(
    function(number) {
    console.log(number * 2); // This callback is executed synchronously for each number
});

console.log("Print numbers:");

numbers.forEach(
    function(number) {
    console.log(number); // This callback is executed synchronously for each number
});

