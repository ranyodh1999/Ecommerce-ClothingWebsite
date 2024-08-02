import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/Checkout.css";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { totalAmount, productIds } = location.state || {};

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const validateForm = () => {
    const cvvPattern = /^\d{3}$/;
    const contactPattern = /^\d{10}$/;

    const cardNumberPattern = /^\d{16}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const zipCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    if (!cvvPattern.test(cvv)) {
      alert("Invalid CVV. It should be 3 digits.");
      return false;
    }
    if (!contactPattern.test(contact)) {
      alert("Invalid phone number. It should be 10 digits.");
      return false;
    }
    if (!cardNumberPattern.test(cardNumber)) {
      alert("Invalid card number. It should be 16 digits.");
      return false;
    }

    if (!expiryDatePattern.test(expiryDate)) {
      alert("Invalid expiry date. Use MM/YY format.");
      return false;
    }

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear() % 100;
    const [enteredMonth, enteredYear] = expiryDate.split("/").map(Number);

    if (
      enteredYear < currentYear ||
      (enteredYear === currentYear && enteredMonth < currentMonth)
    ) {
      alert("Expiry date cannot be in the past.");
      return false;
    }

    if (address.trim() === "") {
      alert("Address cannot be empty.");
      return false;
    }

    if (city.trim() === "") {
      alert("City cannot be empty.");
      return false;
    }

    if (province.trim() === "") {
      alert("Province cannot be empty.");
      return false;
    }

    if (!zipCodePattern.test(zipCode)) {
      alert(
        "Invalid zip code. It should be a 6-character alphanumeric format."
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await axios.post("http://localhost:3001/api/checkout", {
        productIds,
        name,
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
      alert(res.data.msg);
      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Error during checkout");
    }
  };

  return (
    <div className="checkout-page">
      <div className="Checkout">
        <div className="card-checkout">
          <div className="card-body">
            <h2 className="card-title text-center">Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Contact:</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  placeholder="Enter your contact number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="province">Province:</label>
                <input
                  type="text"
                  className="form-control"
                  id="province"
                  placeholder="Enter your province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="zipCode">Zip Code:</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                  placeholder="Enter your zip code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  placeholder="Enter your card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  placeholder="Enter CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>

              <p>Total Amount: ${totalAmount}</p>
              <button type="submit" className="btn btn-success btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
