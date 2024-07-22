const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  const {
    productIds,
    name,
    email,
    contact,
    address,
    city,
    province,
    zipCode,
    cardNumber,
    expiryDate,
    cvv,
    totalAmount,
  } = req.body;

  try {
    const newOrder = new Order({
      productIds,
      name,
      email,
      contact,
      address,
      city,
      province,
      zipCode,
      cardNumber,
      expiryDate,
      cvv,
      totalAmount,
    });

    await newOrder.save();

    res.status(200).json({ msg: "Order placed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error placing order" });
  }
});

module.exports = router;
