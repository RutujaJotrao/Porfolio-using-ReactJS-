// Import necessary libraries and components
import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import "./Home.css";
import Data from "../../Data.json";

const HomePage = () => {
  // Animation for fading in the home page
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

        {/* Link to navigate to the About page with animation */}
        <Link to="/about" className="about-link">
          About
        </Link>

        {/* ... (existing content) */}
      </div>
    </animated.div>
  );
};

export default HomePage;
