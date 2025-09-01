// ==========================
// Part 1: Variables & Conditionals
// ==========================
let userName = "Alice"; // Variable declaration
let userAge = 20;

if (userAge >= 18) {
  document.getElementById("greeting").textContent = 
    `Hello ${userName}, you are an adult.`;
} else {
  document.getElementById("greeting").textContent = 
    `Hello ${userName}, you are under 18.`;
}

// ==========================
// Part 2: Functions
// ==========================
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(50, 3); // Example: $50 * 3
  document.getElementById("total").textContent = 
    `The total is $${total}`;
}

// Another custom function
function formatString(str) {
  return str.toUpperCase();
}
console.log(formatString("hello world")); // Logs: HELLO WORLD

// ==========================
// Part 3: Loops
// ==========================
// For loop example
let numbers = [1, 2, 3, 4, 5];
let listElement = document.getElementById("loopList");
for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = `Number: ${numbers[i]}`;
  listElement.appendChild(li);
}

// While loop example: countdown
let countdown = 5;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// ==========================
// Part 4: DOM Manipulation
// ==========================
// Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("domText").textContent = "The text has been changed!";
});

// Toggle a CSS class
document.getElementById("toggleClassBtn").addEventListener("click", function () {
  document.getElementById("domText").classList.toggle("highlight");
});

// Add new item to list
document.getElementById("addItemBtn").addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "New dynamic list item!";
  document.getElementById("domList").appendChild(li);
});
