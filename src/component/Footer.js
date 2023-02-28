import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <footer>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
      >
        <p style={{ color: "black" }}>&copy; 2023 All Rights Reserved</p>
        <p style={{ color: "black" }}>
          Design and Developed by @Ankit Kumar Thakur
        </p>
        <Icon
          src="../../images/fb-icon.svg"
          alt="fb icon"
          width={40}
          height={40}
        />
        <Icon
          src="../../images/twitter-icon.svg"
          alt="twitter icon"
          width={40}
          height={40}
        />
        <Icon
          src="../../images/instagram-icon.svg"
          alt="instagram icon"
          width={40}
          height={40}
        />
      </div>
    </footer>
  );
};

export default Footer;

const footer = styled.div`
  height: 70px;
  // background: #090b13;
  // background: #000;
  color: #000;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Icon = styled.img`
  // filter: invert(1);
  margin: 5px;
`;

// style={{ background: "#090b13", color: "#fff", padding: "1rem" }}
