// Simple Fruit Basket Counter in JavaScript

let basket = 0;

function addFruit(quantity) {
  basket += quantity;
  console.log(`${quantity} fruit(s) added.`);
}

function removeFruit(quantity) {
  if (quantity <= basket) {
    basket -= quantity;
    console.log(`${quantity} fruit(s) removed.`);
  } else {
    console.log("Not enough fruits to remove.");
  }
}

function showTotal() {
  console.log(`Total fruits in basket: ${basket}`);
}

// Example usage:
addFruit(5);
removeFruit(2);
showTotal();