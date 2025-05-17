// resolve means that the promise validation is a success
// reject means that is a failure

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation goes here (e.g., setTimeout, fetch)
    setTimeout(() => {
      const success = true; // Simulate success or failure

        if (success) {
            resolve("Data fetched successfully!"); // Promise becomes fulfilled with this value
        } else {
            reject("Failed to fetch data.");   // Promise becomes rejected with this reason
    }
    }, 2000); // Simulate a 2-second delay
});

myPromise.then(data => console.log("Resolved:", data));


const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Failed to fetch data.");
        }
    }, 2000);
});

myPromise1.catch(error => console.error("Rejected:", error));


const myPromise2 = new Promise((resolve, reject) => {
    // Asynchronous operation goes here (e.g., setTimeout, fetch)
    setTimeout(() => {
      const success = false; // Simulate success or failure

        if (success) {
            resolve("Data fetched successfully!"); // Promise becomes fulfilled with this value
        } else {
            reject("Failed to fetch data.");   // Promise becomes rejected with this reason
    }
    }, 2000); // Simulate a 2-second delay
});

myPromise2
    .then((data) => {
    // This function will be called if the promise is resolved (success)
    console.log("Success:", data); // Output: Success: Data fetched successfully! (after 2 seconds)
    // You can return another promise here to chain asynchronous operations
    return "Processed " + data;
    })
    .then((processedData) => {
    console.log("Further processing:", processedData); // Output: Further processing: Processed Data fetched successfully!
    })
    .catch((error) => {
    // This function will be called if the promise is rejected (failure)
    console.error("Error:", error);
    })
    .finally(() => {
    // This function will be called regardless of whether the promise was resolved or rejected
    console.log("Promise finished.");
    });

console.log("Promise initiated..."); // This will be logged immediately


// // This does not work because the api does not exist:
// fetch('https://api.example.com/data')
//     .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json(); // Returns a new Promise that resolves with the JSON data
//     })
//     .then(data => {
//     console.log('Data received:', data);
//     return processData(data); // Returns another Promise
//     })
//     .then(processedData => {
//     console.log('Processed data:', processedData);
//     })
//     .catch(error => {
//     console.error('Error:', error);
//     })
//     .finally(() => {
//     console.log('Fetch operation completed.');
//     });


const promise1a = Promise.resolve(3);
const promise2a = new Promise(resolve => setTimeout(() => resolve('hola'), 200));
const promise3a = 42;
const promise4a = 66;

// Promise.all(): This executes all the promises
Promise.all([promise1a, promise2a, promise3a, promise4a])
    .then(values => {
        console.log(values); // This will NOT be reached because promise4a rejects
    })
    .catch(error => {
        console.error("Promise.all rejected with:", error);
    // You can also log the error like this:
    // console.log("Error:", error);
    });


const promise1b = Promise.resolve(3);
const promise2b = new Promise(resolve => setTimeout(() => resolve('hola'), 200));
const promise3b = 42;
const promise4b = Promise.reject(43);
const promise5b = Promise.reject(66);

// Promise.all(): This executes all the promises, but if one fail execute the first promise that fails
Promise.all([promise1b, promise2b, promise3b, promise4b, promise5b])
    .then(values => {
        console.log(values); // This will NOT be reached because promise4a rejects
    })
    .catch(error => {
        console.error("Promise.all rejected with:", error);
    // You can also log the error like this:
    // console.log("Error:", error);
    });

const promiseA = new Promise(resolve => setTimeout(() => resolve('A'), 1000));
const promiseB = new Promise((resolve, reject) => setTimeout(() => reject('B'), 500));

const promiseC = new Promise((resolve, reject) => {
setTimeout(() => {
    const shouldResolve = false; // Or false to test rejection

    if (shouldResolve) {
        resolve('Resolved C');
    } else {
        reject('Rejected C');
    }
    }, 300);
});

// Promise.race(): this execute the first that ends:
Promise.race([promiseA, promiseB, promiseC])
    .then(value => console.log('Resolved:', value))
    .catch(reason => console.log('Rejected:', reason)); // Output: Rejected: B (because promiseB rejected first)
