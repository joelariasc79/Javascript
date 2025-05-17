// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation goes here (e.g., setTimeout, fetch)
//     setTimeout(() => {
//       resolve("Data fetched successfully!"); // Promise becomes fulfilled with this value
//     }, 2000); // Simulate a 2-second delay
// });


// async function fetchData() {
//     return "Data fetched!"; // This is equivalent to Promise.resolve("Data fetched!");
// }

// fetchData().then(result => console.log(result)); // Output: Data fetched!

// async function fetchDataWithError() {
//     throw new Error("Failed to fetch data"); // This is equivalent to Promise.reject(new Error("Failed to fetch data"));
// }

// fetchDataWithError().catch(error => console.error(error)); // Output: Error: Failed to fetch data

// ***********************************************************


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function processData() {
//     console.log("Start processing...");
//     await delay(2000); // Pause for 2 seconds
//     console.log("Data processed!");
//     return "Processing complete";
// }

// processData().then(result => console.log(result));
//   // Output (after 2 seconds):
//   // Start processing...
//   // Data processed!
//   // Processing complete

async function fetchDataAndProcess() {
    try {
        console.log("Fetching data...");
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const jsonData = await data.json();
        console.log("Data fetched:", jsonData);
        return jsonData;
    } catch (error) {
        console.error("Error fetching data:", error);
      throw error; // Re-throw the error to be caught by the caller
    }
}

fetchDataAndProcess().then(result => console.log("Final result:", result));