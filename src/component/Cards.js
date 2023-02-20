import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cards = () => {
  return (
    <>
      <CardBox>
        <Card>
          <CardImg src="/images/login-background.jpg" />
          <CardBody>
            <h5>Verilog</h5>
            <p>
              Verilog, standardized as IEEE 1364, is a hardware description
              language (HDL) used to model electronic systems. It is most
              commonly used in the design and verification of digital circuits
              at the register-transfer level of abstraction.
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
          <CardImg src="/images/login-background.jpg" />
          <CardBody>
            <h5>System Verilog</h5>
            <p>
              Verilog, standardized as IEEE 1364, is a hardware description
              language (HDL) used to model electronic systems. It is most
              commonly used in the design and verification of digital circuits
              at the register-transfer level of abstraction.
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
          <CardImg src="/images/login-background.jpg" />
          <CardBody>
            <h5>UVM</h5>
            <p>
              Verilog, standardized as IEEE 1364, is a hardware description
              language (HDL) used to model electronic systems. It is most
              commonly used in the design and verification of digital circuits
              at the register-transfer level of abstraction.
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
  width: 300px;
  overflow: hidden;
  border-radius: 4px;
  margin: 10px 20px;
`;
const CardImg = styled.img`
  width: 300px;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;

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
