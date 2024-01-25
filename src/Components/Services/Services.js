// Services.jsx
import React from 'react';
import Data from "../../Data.json";
import './Services.css';
import Sidebar from '../Sidebar/Sidebar';

const Services = () => {
  const renderSkills = (techArray, heading) => {
    return (
      <div className="skill-category">
        <h3>{heading}</h3>
        <div className="skill-list">
          {techArray.map((tech, index) => (
            <div key={index} className="skill-item">
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
    <Sidebar/>
    <div className="service" style={{  marginLeft: "260px", width: "calc(100vw - 260px)" }}>
      <h2>{Data.services.title}</h2>
      <div className="skill-container">
        {renderSkills(Data.services.frontend_tech, 'Frontend Technologies')}
        {renderSkills(Data.services.backend_tech, 'Backend Technologies')}
        {renderSkills(Data.services.other_tech, 'Other Technologies')}
      </div>
    </div>
  </>
  );
};

export default Services;
