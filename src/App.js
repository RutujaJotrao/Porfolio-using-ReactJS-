import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Data from "./Data.json";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Wrapper>
                <Home />
              </Wrapper>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio projects={Data} />} />
          <Route path="/contact" element={<Contact />} />

          </Routes>
      </BrowserRouter>
    </>
  );
}

const Wrapper = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div>
        {children}
      </div>
    </>
  );
};

export default App;
