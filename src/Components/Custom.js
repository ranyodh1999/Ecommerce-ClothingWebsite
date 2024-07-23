import React, { useState, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../ThemeContext";  // 新增
import "./CSS/Custom.css"; // Ensure the path is correct

function CustomRequest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
  const { theme } = useContext(ThemeContext);  // 新增

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("photo", photo);
    formData.append("description", description);

    try {
      const res = await axios.post("http://localhost:3001/api/users/custom", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(res.data.msg);
    } catch (err) {
      console.error(err);
      alert("Error during custom request submission");
    }
  };

  return (
    <div className="custom-request-page">
      <div className="CustomRequest">
        <div className="card-request">
          <div className="card-body">
            <h2 className="card-title text-center">Custom Request</h2>
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
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
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
                <label htmlFor="photo">Photo:</label>
                <input
                  type="file"
                  className="form-control"
                  id="photo"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  className="form-control"
                  id="description"
                  placeholder="Enter the description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomRequest;
