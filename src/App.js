// Import necessary libraries and components
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/Home";
import About from "./Components/About/About"
import Sidebar from "./Components/Sidebar/Sidebar"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
