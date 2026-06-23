let cart = [];

function addToCart(item, quantity) {
  const found = cart.find((c) => c.item.id === item.id);
  if (found) {
    found.quantity += quantity;
  } else {
    cart.push({ item, quantity });
  }
}

function removeFromCart(itemId) {
  cart = cart.filter((c) => c.item.id !== itemId);
}

function updateCart(itemId, newQty) {
  const found = cart.find((c) => c.item.id === itemId);
  if (found) {
    found.quantity = newQty;
  }
}

function viewCart() {
        `${idx + 1}. ${c.item.name} - Rp${c.item.price} x ${c.quantity}`,
      );
    });
    console.log("");
  }
}

function clearCart() {
  cart = [];
}

function getCart() {
  return cart;
}

module.exports = {
  addToCart,
  removeFromCart,
  updateCart,
  viewCart,
  clearCart,
  getCart,
};
