// src/HomePage.js
import React from "react";
import { useSpring, animated } from "react-spring";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./Home.css";
import Data from "../Data.json";
import About from "./About";

const HomePage = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.div className="home-page" style={fadeIn}>
      <div className="content">
        <p>
          <b>{Data.context}</b>
          <i>
            <b>{Data.fnm}</b>
          </i>
        </p>
        <p>Web Developer | Designer</p>
        <h5>{Data.quote}</h5>

      {/*  <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<About />} />
          </Routes>

          <Link to="/Home">
            <button>More About Me</button>
          </Link>
  </BrowserRouter> */ }

        <button>More About Me</button>
      </div>
    </animated.div>
  );
};

export default HomePage;
