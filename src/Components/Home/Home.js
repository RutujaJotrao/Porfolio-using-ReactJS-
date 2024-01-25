import React from "react";
import { useSpring, animated } from "react-spring";
import "./Home.css";
import Data from "../../Data.json";
import Sidebar from "../Sidebar/Sidebar";

const HomePage = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <>
    <Sidebar/>
    <animated.div className="home-page"  style={{  marginLeft: "260px", width: "calc(100vw - 260px)" }}>
      <div className="content">
        <p>
          <b>{Data.context}</b>
          <i>
            <b>{Data.fnm}</b>
          </i>
        </p>
        <p>Web Developer | Designer</p>
        <h5>{Data.quote}</h5>

        {/*<button onClick={() => {
          const element=document.getElementById('about');
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }}>Resume</button>*/}

        {/*<img src={require(`../Assets/${Data?.path}`)} alt="profile" />*/}
      </div>
    </animated.div>
    </>
  );
};

export default HomePage;
