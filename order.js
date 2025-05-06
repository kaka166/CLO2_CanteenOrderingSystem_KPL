const { getCart, clearCart } = require('./cart');
const { generateOrderId, input, generateOrderDate } = require('./utils');

function checkout() {
  const cart = getCart();

  if (cart.length === 0) {
    console.log("\nKeranjang kosong. Tidak bisa checkout.\n");
    return;
  }

  console.log("\n=== Checkout ===");
  const orderId = generateOrderId();
  const orderDate = generateOrderDate();
  console.log(`No. Order: ${orderId}`);
  console.log(`Tanggal: ${orderDate}`);
  let total = 0;

  cart.forEach(c => {
    console.log(`- ${c.item.name} x ${c.quantity} = Rp${c.item.price * c.quantity}`);
    total += c.item.price * c.quantity;
  });

  console.log(`Total: Rp${total}`);

  console.log("\nPilih metode pembayaran:");
  console.log("1. Online (QR Code)");
  console.log("2. Datang ke Kantin");

  const choice = input("Pilih (1/2): ");

  if (choice === "1") {
    console.log("\nSilakan lakukan pembayaran via QR Code.");
  } else if (choice === "2") {
    console.log("\nSilakan datang ke kantin dan tunjukkan No. Order Anda.");
  } else {
    console.log("\nPilihan tidak valid.");
  }

  clearCart();
}

module.exports = { checkout };
