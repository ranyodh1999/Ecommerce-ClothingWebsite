/* files name are same as getting an error to save it as customer and importing */
/*It's Custom instead of Checkout*/ 

import React, { useState, useContext } from 'react';  // 新增 useContext
import { ThemeContext } from "../ThemeContext";  // 新增
import './Checkout.css';

function Custom() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]); // State for storing uploaded image files

  const [errors, setErrors] = useState({});
  const { theme } = useContext(ThemeContext);  // 新增

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value.replace(/[^0-9]/g, ''));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = 'Name is required.';
    if (!sku) formErrors.sku = 'SKU is required.';
    if (!phoneNumber) formErrors.phoneNumber = 'Your phone number is required.';
    if (!email) formErrors.email = 'Please enter a valid email address for shipping updates.';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted with:", { name, sku, phoneNumber, email, description, images });
      // Handle form submission here
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.slice(0, 3 - images.length); // Limit to 3 images
    setImages([...images, ...newImages]);
  };

  const handleImageDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="checkout-container">
      <h4 className="section-title">Custom T-shirt Request</h4>
      <form className="form" noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-input"
            id="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <div className="feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="sku">SKU (Stock Keeping Unit)</label>
          <input
            type="text"
            className="form-input"
            id="sku"
            placeholder="Enter SKU number"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            required
          />
          {errors.sku && <div className="feedback">{errors.sku}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            className="form-input"
            id="phoneNumber"
            placeholder="Enter your Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
          {errors.phoneNumber && <div className="feedback">{errors.phoneNumber}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-input"
            id="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <div className="feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description (Max 5000 characters)</label>
          <textarea
            className="form-input"
            id="description"
            placeholder="Enter your description : Like size, units, colour, 'LOGO', Special request"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={5000}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            multiple
          />
          {images.length > 0 && (
            <div className="image-preview">
              {images.map((image, index) => (
                <div key={index} className="image-container">
                  <span className="image-name">{image.name}</span>
                  <button type="button" className="delete-button" onClick={() => handleImageDelete(index)}>D</button>
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="btn-submit" type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default Custom;
