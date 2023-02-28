import React from "react";
import "./HeroSection.css"; // Import the CSS file for styling

function HeroSection() {
  return (
    <>
      <section className="hero-container">
        <h1 className="hero-heading">Welcome to Verifwala.com</h1>
        <p className="hero-paragraph">
          This is Your Place to Learn the System Technologies like Verilog,
          System verilog.
        </p>
      </section>
      {/* <div className="button-container">
        <button className="hero-button">Learn More</button>
      </div> */}
    </>
  );
}

export default HeroSection;
