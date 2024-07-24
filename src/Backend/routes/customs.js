const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Custom = require("../models/Custom");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("photo"), async (req, res) => {
  try {
    console.log("Request Body: ", req.body);
    console.log("File: ", req.file);

    const { name, email, phone, sku, description } = req.body;
    if (!req.file) {
      return res.status(400).json({ msg: "Photo is required" });
    }
    const photo = req.file.filename;

    const newCustom = new Custom({
      name,
      email,
      phone,
      sku,
      photo,
      description,
    });

    await newCustom.save();

    res.status(200).json({ msg: "Form submitted successfully" });
  } catch (err) {
    console.error("Error in POST /api/custom:", err);
    res.status(500).json({ msg: "Error submitting form" });
  }
});

module.exports = router;
