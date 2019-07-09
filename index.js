var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObj = {};
 itemObj.itemName = item;
 itemObj.itemPrice = Math.floor(Math.random() * 100) + 1;
 
 cart.push(itemObj);
 return `${itemObj.itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } 
  
  var list = "In your cart, you have ";
  
  for(let i = 0; i < cart.length; i++) {
    var item = cart[i];
    
    if (i === cart.length - 1) {
      list += `${item.itemName} at $${item.itemPrice}.`
    } else if (i === cart.length - 2) {
      list += `${item.itemName} at $${item.itemPrice}, and `
    } else {
      list += `${item.itemName} at $${item.itemPrice}, `
    }
  }
  
  return list;
}

function total() {
  var receit = 0;
  for(let i = 0; i < cart.length; i++){
    var item = cart[i];
    receit += item.itemPrice;
  }
  return receit;
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  // write your code here
}


