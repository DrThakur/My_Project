import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Verilog from "./component/Verilog";
import SystemVerilog from "./component/SystemVerilog";
import UVM from "./component/UVM";
import InterviewQuestions from "./component/InterviewQuestions";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="verilog/*" element={<Verilog />} />
        <Route path="system/*" element={<SystemVerilog />} />
        <Route path="uvm/*" element={<UVM />} />
        <Route path="interview/*" element={<InterviewQuestions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
