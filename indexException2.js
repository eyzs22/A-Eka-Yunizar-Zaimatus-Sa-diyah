function divideNumbers(num1, num2) {
    try {
        // Memeriksa apakah input adalah angka
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Input harus berupa angka.");
        }

        // Memeriksa apakah num1 antara 1 dan 2, dan num2 adalah 0
        if (num1 > 1 && num1 < 2 && num2 === 0) {
            throw new Error("Angka antara 1 dan 2 tidak boleh dibagi dengan 0.");
        }

        // Memeriksa apakah pembagi adalah nol (untuk kasus umum)
        if (num2 === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }

        // Melakukan pembagian
        const result = num1 / num2;
        return result;
    } catch (error) {
        // Mengembalikan pesan kesalahan
        return error.message;
    }
}

// Menangani pengiriman form
document.getElementById('divisionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai dari input
    const num1Input = document.getElementById('num1').value.trim();
    const num2Input = document.getElementById('num2').value.trim();

    // Memeriksa apakah input kosong
    if (num1Input === '' || num2Input === '') {
        document.getElementById('errorMessage').textContent = "Kedua angka harus diisi.";
        document.getElementById('result').textContent = ''; // Kosongkan hasil
        return; // Hentikan eksekusi lebih lanjut
    }

    // Memeriksa apakah salah satu input adalah 0
    if (num1Input === '0' || num2Input === '0') {
        document.getElementById('errorMessage').textContent = "Angka tidak boleh 0.";
        document.getElementById('result').textContent = ''; // Kosongkan hasil
        return; // Hentikan eksekusi lebih lanjut
    }

    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    // Memanggil fungsi pembagian
    const result = divideNumbers(num1, num2);

    // Menampilkan hasil atau pesan kesalahan
    if (typeof result === 'string') {
        // Jika hasil adalah string, itu berarti ada kesalahan
        document.getElementById('errorMessage').textContent = result; // Tampilkan pesan kesalahan
        document.getElementById('result').textContent = ''; // Kosongkan hasil
    } else {
        // Jika tidak ada kesalahan, tampilkan hasil
        document.getElementById('errorMessage').textContent = ''; // Kosongkan pesan kesalahan
        document.getElementById('result').textContent = result; // Tampilkan hasil
    }
});