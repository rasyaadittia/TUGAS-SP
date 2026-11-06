const express = require('express');
const app = express();

const PORT = 3000;

// Route pertama: Halaman utama
app.get('/', (req, res) => {
    res.send('Selamat datang di Mini Web Server Kelompok Chernobyl!');
});

// Route kedua: Informasi server
app.get('/info', (req, res) => {
    res.send({
        nama: 'Mini Web Server',
        status: 'Server Aktif',
        waktu: new Date().toLocaleString('id-ID')
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});