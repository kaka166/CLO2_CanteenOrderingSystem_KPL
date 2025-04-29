// const { warungs } = require('./config');
// const { addToCart, viewCart, updateCart, removeFromCart } = require('./cart');
// const { checkout } = require('./order');
// const { input } = require('./utils');

function runApp() {
  console.log("=== Selamat datang di Canteen Ordering System ===");

  const username = input("Masuk sebagai (Username/Guest): ");
  console.log(`Halo, ${username}!\n`);

  console.log("Pilih Warung:");
  warungs.forEach(w => console.log(`${w.id}. ${w.name}`));

  const warungId = parseInt(input("Masukkan nomor warung: "));
  const selectedWarung = warungs.find(w => w.id === warungId);

  if (!selectedWarung) {
    console.log("Warung tidak ditemukan.");
    return;
  }

  console.log(`\nMenu di ${selectedWarung.name}:`);
  selectedWarung.menu.forEach(m => {
    console.log(`${m.id}. ${m.name} - Rp${m.price}`);
  });

  while (true) {
    console.log("\n=== Menu ===");
        console.log("1. Tambah ke Keranjang");
        console.log("2. Lihat Keranjang");
        console.log("3. Update Jumlah di Keranjang");
        console.log("4. Hapus Item dari Keranjang");
        console.log("5. Checkout");
        console.log("6. Keluar");
    
        const choice = input("Pilih opsi: ");
  }
}

module.exports = { runApp };