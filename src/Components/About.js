import React from "react";

function About() {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "sanf-serif, Georgia",
        fontSize: "22px",
        margin: "30px",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "700px",
        border: "3px solid black",
        padding: "5px",
        borderRadius: "10px",
        borderBlockStyle: "",
      }}
    >
      <h2>About Us</h2>
      <p>Welcome to our Website</p>
      <div style={{ textAlign: "left" }}>
        <p>
          The ecommerce clothing website is a group project for the course CS
          476. Various kinds of T-shirts are available on this website such as
          full sleeve, half sleeve, round neck, and collared T-shirts. The
          purpose of the website is to provide a smooth customer experience.
        </p>
        <p>
          One of the standout features of our website is the custom design
          option. Customers can use this option to submit their desired design
          they want to print on T-shirts with the SKU of that T-shirt.
        </p>
        <p>
          We are committed to the customer satisfaction. Thanks for visting our
          website, we look forward to serving you.
        </p>
      </div>
    </div>
  );
}

export default About;
