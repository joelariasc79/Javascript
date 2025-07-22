// Validacion de ObjetosL



// Example Object
const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};

// Example Object (missing some properties)
const anotherUser = {
    id: 2,
    name: "Bob",
    isActive: false
};

// Example: Undefined object
let nonExistentUser; // This variable is undefined

// Example: Null object
const nullUser = null;


// --- 1. Validar si un objeto existe (no es null ni undefined) ---

function checkIfObjectExists(obj) {
    if (obj !== null && typeof obj !== 'undefined') {
        console.log(`Object exists: ${JSON.stringify(obj)}`);
        return true;
    } else {
        console.log(`Object does NOT exist (is null or undefined).`);
        return false;
    }
}

console.log("\n--- Checking if objects exist ---");
checkIfObjectExists(user);           // Object exists
checkIfObjectExists(nonExistentUser); // Object does NOT exist
checkIfObjectExists(nullUser);      // Object does NOT exist
checkIfObjectExists({});             // Object exists (empty object)


// --- 2. Validar si un objeto existe Y tiene una propiedad específica ---

function checkIfObjectAndPropertyExist(obj, propertyName) {
    if (obj !== null && typeof obj !== 'undefined') {
        // Use 'in' operator to check if property exists on the object (or its prototype chain)
        // or obj.hasOwnProperty(propertyName) to check only its own properties
        if (propertyName in obj) {
            console.log(`Object exists and has property '${propertyName}'. Value: ${obj[propertyName]}`);
            return true;
        } else {
            console.log(`Object exists but does NOT have property '${propertyName}'.`);
            return false;
        }
    } else {
        console.log(`Object does NOT exist, so it cannot have property '${propertyName}'.`);
        return false;
    }
}

console.log("\n--- Checking if object and property exist ---");
checkIfObjectAndPropertyExist(user, "name");       // Object exists and has property 'name'. Value: Alice
checkIfObjectAndPropertyExist(user, "age");        // Object exists but does NOT have property 'age'.
checkIfObjectAndPropertyExist(anotherUser, "email"); // Object exists but does NOT have property 'email'.
checkIfObjectAndPropertyExist(nonExistentUser, "name"); // Object does NOT exist, so it cannot have property 'name'.
checkIfObjectAndPropertyExist(nullUser, "name");     // Object does NOT exist, so it cannot have property 'name'.


// --- 3. Validar si un objeto existe, tiene una propiedad Y esa propiedad tiene un valor específico ---

function checkObjectPropertyAndValue(obj, propertyName, expectedValue) {
    if (obj !== null && typeof obj !== 'undefined') {
        if (propertyName in obj) {
            // Check if the property's value matches the expected value
            if (obj[propertyName] === expectedValue) {
                console.log(`Object exists, has property '${propertyName}', and its value matches '${expectedValue}'.`);
                return true;
            } else {
                console.log(`Object exists, has property '${propertyName}', but its value ('${obj[propertyName]}') does NOT match '${expectedValue}'.`);
                return false;
            }
        } else {
            console.log(`Object exists but does NOT have property '${propertyName}'.`);
            return false;
        }
    } else {
        console.log(`Object does NOT exist, so it cannot have property '${propertyName}' with value '${expectedValue}'.`);
        return false;
    }
}

console.log("\n--- Checking object, property, and specific value ---");
checkObjectPropertyAndValue(user, "name", "Alice");     // Matches
checkObjectPropertyAndValue(user, "name", "Bob");       // Does not match
checkObjectPropertyAndValue(user, "isActive", true);    // Matches
checkObjectPropertyAndValue(user, "isActive", false);   // Does not match
checkObjectPropertyAndValue(anotherUser, "name", "Bob"); // Matches
checkObjectPropertyAndValue(anotherUser, "email", "bob@example.com"); // Object exists but does NOT have property 'email'.
checkObjectPropertyAndValue(nonExistentUser, "name", "Alice"); // Object does NOT exist.
checkObjectPropertyAndValue(user, "address", { street: "123 Main St", city: "Anytown" }); // Be careful with object comparisons: this will be false because objects are compared by reference, not value.

// --- Handling nested properties safely (Optional Chaining introduced in ES2020) ---

// Without Optional Chaining (older way, requires nested checks)
function getCitySafelyOldWay(obj) {
    if (obj && obj.address && obj.address.city) {
        return obj.address.city;
    }
    return undefined; // Or null, or throw an error
}

// With Optional Chaining (?.) (ES2020+)
function getCitySafelyNewWay(obj) {
    return obj?.address?.city;
}

console.log("\n--- Checking nested properties safely ---");
console.log("User's city (old way):", getCitySafelyOldWay(user));           // Anytown
console.log("Another User's city (old way):", getCitySafelyOldWay(anotherUser)); // undefined (because no address property)
console.log("Non-existent User's city (old way):", getCitySafelyOldWay(nonExistentUser)); // undefined

console.log("User's city (new way):", getCitySafelyNewWay(user));           // Anytown
console.log("Another User's city (new way):", getCitySafelyNewWay(anotherUser)); // undefined
console.log("Non-existent User's city (new way):", getCitySafelyNewWay(nonExistentUser)); // undefined

// Checking nested property existence and value with optional chaining
function checkNestedPropertyAndValue(obj, path, expectedValue) {
    const value = path.reduce((acc, part) => acc && acc[part], obj);
    if (typeof value !== 'undefined' && value === expectedValue) {
        console.log(`Nested property '${path.join('.')}' exists and matches '${expectedValue}'. Value: ${value}`);
        return true;
    } else {
        console.log(`Nested property '${path.join('.')}' does NOT exist or does not match '${expectedValue}'. Value: ${value}`);
        return false;
    }
}

// Or, even simpler with optional chaining directly if you just need the boolean:
function checkNestedPropertyAndValueSimple(obj, propertyPath, expectedValue) {
    // Example: propertyPath could be 'address.city'
    // This is more complex to generalize with optional chaining directly without eval or complex parsing.
    // Let's stick to the manual check with ?. or the reduce pattern.

    // A more direct way for specific known paths:
    if (obj?.address?.city === expectedValue) {
        console.log(`Object has address.city and it matches '${expectedValue}'.`);
        return true;
    } else {
        console.log(`Object does NOT have address.city matching '${expectedValue}'.`);
        return false;
    }
}


console.log("\n--- Checking specific nested property value ---");
checkNestedPropertyAndValueSimple(user, 'address.city', 'Anytown'); // Matches
checkNestedPropertyAndValueSimple(anotherUser, 'address.city', 'Anytown'); // Does NOT have address.city