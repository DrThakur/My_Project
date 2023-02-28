import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cards = () => {
  return (
    <>
      <CardBox>
        <Card>
          <CardImg src="/images/card1.jpg" />
          <CardBody>
            <h5>Verilog</h5>
            <p>
              Verilog is a hardware description language (HDL) used for
              designing and simulating digital circuits. It is commonly used in
              the field of digital electronics and is often used by hardware
              engineers to model, simulate, and test digital circuits before
              they are manufactured.Verilog was first introduced in the 1980s
              and ...
            </p>
            <Button>
              <Link to="/verilog">Verilog Tutorial</Link>
            </Button>
            <Button>
              <Link to="/verilog">Verilog TestBench</Link>
            </Button>
            <Button>
              <Link to="/verilog">Verilog Examples</Link>
            </Button>
            <Button>
              <Link to="/verilog">Verilog Interview Questions</Link>
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg src="/images/card2.jpeg" />
          <CardBody>
            <h5>System Verilog</h5>
            <p>
              SystemVerilog is an extension of the Verilog hardware description
              language (HDL) that adds features to support verification of
              digital systems. SystemVerilog was developed by Accellera (a
              standards organization for electronic design automation) and was
              first introduced in 2002.SystemVerilog includes many features that
              are useful for verification, such as ....
            </p>
            <Button>
              <Link to="/system">System Verilog Tutorial</Link>
            </Button>
            <Button>
              <Link to="/system">System Verilog TestBench</Link>
            </Button>
            <Button>
              <Link to="/system">System Verilog Examples</Link>
            </Button>
            <Button>
              <Link to="/system">System Verilog Interview Questions</Link>
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg src="/images/card3.jpeg" />
          <CardBody>
            <h5>UVM</h5>
            <p>
              UVM stands for Universal Verification Methodology, which is a
              standardized methodology for developing testbenches and verifying
              integrated circuit designs in the semiconductor industry. UVM is
              based on the SystemVerilog hardware description language and is
              designed to provide a reusable and scalable approach to
              verification that can be applied ...
            </p>
            <Button>
              <Link to="/uvm">UVM Tutorial</Link>
            </Button>
            <Button>
              <Link to="/uvm">UVM TestBench</Link>
            </Button>
            <Button>
              <Link to="/uvm">UVM Examples</Link>
            </Button>
            <Button>
              <Link to="/uvm">UVM Interview Questions</Link>
            </Button>
          </CardBody>
        </Card>
        {/* <Card>
          <CardImg src="/images/login-background.jpg" />
          <CardBody>
            <h5>Interview Questions</h5>
            <p>
              Verilog, standardized as IEEE 1364, is a hardware description
              language (HDL) used to model electronic systems. It is most
              commonly used in the design and verification of digital circuits
              at the register-transfer level of abstraction.
            </p>
            <Button>
              <a to="/">System Verilog Tutorial</a>
            </Button>
            <Button>
              <a to="/">System Verilog TestBench</a>
            </Button>
            <Button>
              <a to="/">System Verilog Examples</a>
            </Button>
            <Button>
              <a to="/">System Verilog Interview Questions</a>
            </Button>
          </CardBody>
        </Card> */}
      </CardBox>
    </>
  );
};

export default Cards;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media only screen and (min-width: 480px) and (max-width: 768px) {
     {
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (max-width: 479px) {
     {
      font-size: 14px;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Card = styled.div`
  display: inline;
  border: 1px solid #555454;
  width: 400px;
  overflow: hidden;
  border-radius: 4px;
  margin: 10px 10px;
`;
const CardImg = styled.img`
  width: 400px;
  height: 200px;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: #000;

  h5 {
    font-size: 16px;
    margin-bottom: 0px;
  }
  p {
    font-size: 14px;
  }
`;
const Button = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  background: #8282eb;
  color: black;
  border: 1px solid white;
  margin-bottom: 10px;
  border-radius: 4px;
  text-align: center;
  padding-top: 10px;
  box-shadow: 2px 2px #f9f9f9;
`;
