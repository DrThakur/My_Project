import React from "react";
import "./CardSection.css"; // Import the CSS file for styling

function CardSection() {
  return (
    <section className="card-container">
      <div className="card">
        {/* <img
          src="path/to/card-image-1.jpg"
          alt="Card 1"
          className="card-image"
        /> */}
        <h2 className="card-heading">Verilog</h2>
        <p className="card-paragraph">
          Verilog, standardized as IEEE 1364, is a hardware description language
          (HDL) used to model electronic systems. It is most commonly used in
          the design and verification of digital circuits at the
          register-transfer level of abstraction.
        </p>
        <a href="/" className="card-link">
          Verilog Tutorial
        </a>
        <a href="/" className="card-link">
          Verilog TestBench
        </a>
        <a href="/" className="card-link">
          Verilog Examples
        </a>
        <a href="/" className="card-link">
          Verilog Questions
        </a>
      </div>
      <div className="card">
        {/* <img
          src="path/to/card-image-2.jpg"
          alt="Card 2"
          className="card-image"
        /> */}
        <h2 className="card-heading">System Verilog</h2>
        <p className="card-paragraph">
          SystemVerilog, standardized as IEEE 1800, is a hardware description
          and hardware verification language used to model, design, simulate,
          test and implement electronic systems. SystemVerilog is based on
          Verilog and some extensions, and since 2008, Verilog is now part of
          the same IEEE standard.
        </p>
        <a href="/" className="card-link">
          Learn More
        </a>
      </div>
      <div className="card">
        {/* <img
          src="path/to/card-image-3.jpg"
          alt="Card 3"
          className="card-image"
        /> */}
        <h2 className="card-heading">UVM</h2>
        <p className="card-paragraph">
          The Universal Verification Methodology is a standardized methodology
          for verifying integrated circuit designs. UVM is derived mainly from
          the OVM which was, to a large part, based on the eRM for the e
          Verification Language developed by Verisity Design in 2001.
        </p>
        <a href="/" className="card-link">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default CardSection;
