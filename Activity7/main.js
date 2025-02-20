// Part 1: Data Types

// Product Information
const productName = "T-Shirt";
const productId = Symbol("uniqueId");
const price = 25.99;
const isOnSale = true;
const quantity = 50;

// Data Type Identification
console.log(typeof productName); // string
console.log(typeof productId);   // symbol
console.log(typeof price);       // number
console.log(typeof isOnSale);    // boolean
console.log(typeof quantity);    // number

// Inventory Array
const inventory = [
  {
    productName: "T-Shirt",
    productId: Symbol("tshirt"),
    price: 25.99,
    isOnSale: true,
    quantity: 50
  },
  {
    productName: "Jeans",
    productId: Symbol("jeans"),
    price: 49.99,
    isOnSale: false,
    quantity: 30
  },
  {
    productName: "Sneakers",
    productId: Symbol("sneakers"),
    price: 75.00,
    isOnSale: true,
    quantity: 20
  }
];

// Part 2: Immutability

// Freezing a Product
Object.freeze(inventory[0]);

// Attempted Modifications
inventory[0].price = 19.99; // Will not change
inventory[0].discount = 10; // Will not be added
delete inventory[0].quantity; // Will not be deleted

console.log(inventory[0]); // check modifications happend

// Nested Objects
inventory[1].details = { color: "Blue", size: "M" };
Object.freeze(inventory[1]);
inventory[1].details.color = "Red"; // This will change
console.log(inventory[1]);

// Deep Freeze Function
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
}

deepFreeze(inventory[1]);
inventory[1].details.color = "Green"; // This will not change now
console.log(inventory[1]);

// Part 3: Restricted Modifications

// Sealing a Product
Object.seal(inventory[2]);

// Attempted Modifications
inventory[2].price = 60; // Allowed
inventory[2].description = "Comfortable shoes"; // Not added
delete inventory[2].quantity; // Not deleted

console.log(inventory[2]);

// Comparison of Object.freeze() vs. Object.seal()
// Object.freeze() makes objects fully immutable
// Object.seal() allows property modification but prevents adding/deleting

// Part 4: Variable Assignment and Mutability

// Primitive vs. Non-Primitive
let primitiveVar = 10;
let newPrimitive = primitiveVar;
newPrimitive = 20;
console.log(primitiveVar); // 10 (unchanged)

let nonPrimitiveVar = { value: 10 };
let newNonPrimitive = nonPrimitiveVar;
newNonPrimitive.value = 20;
console.log(nonPrimitiveVar.value); // 20 (changed)

// Part 5: Best Practices

// Choosing const, Object.freeze(), Object.seal()
// Use const for values that should not be reassigned.
// Use Object.freeze() formaking objects fully immutable.
// Use Object.seal() if gusto mag modify ng existing properties but this prevent adding/removing.

// Variable Naming Examples
let validName = "Hello"; // Valid
let $price = 100; // Valid
let _discount = 20; // Valid

// let 2number = 5; // Invalid (cannot start with a number)
// let my-variable = "test"; // Invalid (cannot use hyphens)
// let class = "reserved"; // Invalid (reserved keyword)

console.log("JavaScript Immutability and Data Management Example Completed");
