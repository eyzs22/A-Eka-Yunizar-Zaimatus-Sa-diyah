let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

// Fungsi untuk menampilkan antrian di console
function tampilkanAntrian() {
  console.log("Antrian saat ini:");
  if (antrian.length === 0) {
    console.log("Antrian kosong.");
  } else {
    for (let i = 0; i < antrian.length; i++) {
      console.log(`${i + 1}. ${antrian[i]}`);
    }
  }
  console.log("\n"); // Menambahkan baris kosong untuk memisahkan output
}

// Menampilkan antrian awal
tampilkanAntrian();

// Datang 1 pembeli
antrian.push("Nabila");
tampilkanAntrian();

// Datang 2 pembeli
antrian.push("Maza", "Elsi");
tampilkanAntrian();

// Antrian terakhir pulang
antrian.pop();
tampilkanAntrian();

// Antrian pertama selesai
antrian.shift();
tampilkanAntrian();

// Antrian kedua selesai
antrian.shift();
tampilkanAntrian();

// Tomi menyerobot antrian
antrian.splice(1, 0, "Tomi"); 
tampilkanAntrian();