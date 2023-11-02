const express = require("express"); // import module express.js
const app = express(); // membuat aplikasi express
const port = 3001; // konfigurasi port
const contacts = require("./contacts.json"); // import module contacts.json

app.set("view engine", "ejs"); //informasi menggunakan ejs

app.get("/", (req, res) => {
  res.render("home"); // merender view home.ejs untuk route root ("/")
});

app.get("/about", (req, res) => {
  res.render("about", { nama: "Adi Irawan" }); // mengirim data object nama ke views about.ejs
});

app.get("/contact", (req, res) => {
  res.render("contact", { contact: contacts }); // mengirim data contacts.json ke views contact.ejs
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Page not found : 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // menampilkan pesan bahwa port sedang berjalan
});
