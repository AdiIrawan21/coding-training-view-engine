const express = require("express"); // import module express.js
const app = express(); // membuat aplikasi express
const port = 3001; // konfigurasi port

app.set("view engine", "ejs"); //informasi menggunakan ejs

app.get("/", (req, res) => {
  res.render("home"); // merender view home.ejs untuk route root ("/")
});

app.get("/about", (req, res) => {
  res.render("about", { nama: "Adi Irawan" }); // mengirim data object nama ke views about.ejs
});

app.get("/contact", (req, res) => {
  // Mendefinisikan variabel `contacts` untuk menyimpan data kontak
  let contacts = [];
  // Mengecek apakah variabel `contacts` kosong
  if (contacts.length === 0) {
    // Jika variabel `contacts` kosong, maka render halaman `contact.ejs`
    // dengan data `contacts` yang bernilai `null` dan pesan "Data tidak tersedia"
    res.render("contact", {
      contacts: null,
      pesan: "Data tidak tersedia",
    });
  } else {
    // Jika variabel `contacts` tidak kosong, maka render halaman `contact.ejs`
    // dengan data `contacts` yang sudah terisi
    res.render("contact", { contacts });
  }
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Page not found : 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // menampilkan pesan bahwa port sedang berjalan
});
