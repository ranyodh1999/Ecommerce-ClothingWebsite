import React from "react";
import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MRVW. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="https://twitter.com"> Twitter</a>,
          <a href="https://facebook.com"> Facebook</a>,
          <a href="https://instagram.com"> Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
