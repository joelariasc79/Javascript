const original = { a: 1, b: 2 };
const extra = { c: 3 };

const merged = { ...original, ...extra };
console.log(merged); // Output: { a: 1, b: 2, c: 3 }

const updated = { ...original, b: 5 }; // Overriding a property
console.log(updated); // Output: { a: 1, b: 5 }