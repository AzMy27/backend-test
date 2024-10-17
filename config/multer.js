const multer = require("multer");
// Konfigurasi multer untuk menyimpan gambar
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/"); // Folder untuk menyimpan file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Nama file
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
