//learn Javascript 
  
// 1. GROCERY LIST MANAGER

let grocery = ["rice", "beans"];

// Add yam and garri to the end
grocery.push("yam", "garri");

// Add salt to the beginning
grocery.unshift("salt");

// Remove the last item
let removedItem = grocery.pop();

console.log("1. Grocery List:", grocery);
console.log("Removed item:", removedItem);


// 2. THE CLASS REGISTER

let students = ["David", "Aisha", "David", "Tolu", "David"];

// Find first and last index of David
console.log("2. First David:", students.indexOf("David"));
console.log("Last David:", students.lastIndexOf("David"));

// Check if Aisha exists
console.log("Is Aisha registered?", students.includes("Aisha"));


// 3. SLICE - NO DAMAGE

let nums = [100, 200, 300, 400, 500, 600];

// Get a portion of the array
let newNums = nums.slice(1, 4);

console.log("3. New array:", newNums);
console.log("Original array:", nums);

// The original array did not change because slice()
// returns a new array without modifying the original.


// 4. SPLICE - REAL DAMAGE


let towns = ["Ikeja", "Lekki", "Ibadan", "Osogbo", "Abuja"];

// Remove Ibadan and Osogbo
towns.splice(2, 2);

// Add Ogbomoso and Ilorin at position 2
towns.splice(2, 0, "Ogbomoso", "Ilorin");

console.log("4. Final towns:", towns);


// 5. SEARCH & DELETE

let cart = ["phone", "charger", "powerbank", "cable"];

// Find the index of powerbank
let itemIndex = cart.indexOf("powerbank");

if (itemIndex != -1) {
    cart.splice(itemIndex, 1);
    console.log("5. Item removed");
} else {
    console.log("Item not found");
}

console.log("New cart:", cart);


// 6. JOIN THE SENTENCE

let words = ["JavaScript", "is", "very", "easy"];

// Join with spaces
console.log("6.", words.join(" "));

// Join with hyphens
console.log(words.join("-"));

// Convert using toString()
console.log(words.toString());



// 7. THE GUEST CHECK

let invited = ["Sola", "Tunde", "Bisi"];
let newGuest = "Kunle";

// Check if Kunle is already invited
if (!invited.includes(newGuest)) {
    invited.push(newGuest);
}

console.log("7. Final guest list:", invited);


// 8. FIND THE PRODUCT (OBJECT SEARCH)// 

let products = [
    {id: 1, name: "Shoe", price: 5000},
    {id: 2, name: "Bag", price: 3000},
    {id: 3, name: "Cap", price: 1500}
];

// Find product with id 2
let foundProduct = products.find(function(product) {
    return product.id === 2;
});

// Find its index
let productIndex = products.findIndex(function(product) {
    return product.id === 2;
});

console.log("8. Found product:", foundProduct);
console.log("Product index:", productIndex);


// 9. CLEAN AND MERGE

let a = ["a", "b", "c"];
let b = ["d", "e"];

// Remove c from a
a.pop();

// Merge a and b
let c = a.concat(b);

console.log("9. Merged array:", c);
console.log("Length:", c.length);


// 10. FINAL BOSS - CORRECT THE MISTAKE

let sentence = ["I", "am", "learing", "JavaScript"];

// Find the index of learing
let mistakeIndex = sentence.indexOf("learing");

// Replace learing with learning
sentence.splice(mistakeIndex, 1, "learning");

// Add today to the end
sentence.push("today");

// Join the words into a sentence
let correctSentence = sentence.join(" ");

console.log("10.", correctSentence);

