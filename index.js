var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var name = item
 var price = parseInt(Math.random() * 100)
 var addCart = {itemName: name, itemPrice: price}
 cart.push(addCart)
 return name + " has been added to your cart."
}

function viewCart() {
 
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
