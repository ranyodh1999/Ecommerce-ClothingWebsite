import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/Custom.css";

function Custom() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sku, setSku] = useState("");
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const contactPattern = /^\d{10}$/;
    const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];

    if (!name) {
      alert("Name is required.");
      return false;
    }

    if (!contactPattern.test(phone)) {
      alert("Invalid phone number. It should be 10 digits.");
      return false;
    }

    if (!sku) {
      alert("SKU is required.");
      return false;
    }

    if (!photo) {
      alert("Photo is required.");
      return false;
    }

    if (!allowedImageTypes.includes(photo.type)) {
      alert("Invalid photo type. Only JPEG, PNG, and GIF are allowed.");
      return false;
    }

    if (!description) {
      alert("Description is required.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("sku", sku);
    formData.append("photo", photo);
    formData.append("description", description);

    try {
      const res = await axios.post(
        "http://localhost:3001/api/custom",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(res.data.msg);
      navigate("/home");
    } catch (err) {
      console.error("Error during form submission:", err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="custom-form-page">
      <div className="CustomForm">
        <div className="card-custom">
          <div className="card-body">
            <h2 className="card-title text-center">Custom Form</h2>
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
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sku">SKU:</label>
                <input
                  type="text"
                  className="form-control"
                  id="sku"
                  placeholder="Enter SKU"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="photo">Photo:</label>
                <input
                  type="file"
                  className="form-control"
                  id="photo"
                  accept="image/jpeg, image/png, image/gif"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  className="form-control"
                  id="description"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Submit
              </button>
              <p className="NOTE">
                Note: You can submit the details for your custom shirt. A member
                of our team will be in touch with you shortly with the total
                price for your custom t-shirt.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom;
