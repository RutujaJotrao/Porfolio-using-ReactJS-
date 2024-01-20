import React from "react";
import "./About.css";
import Data from "../Data.json";

const About = () => {
  return (
    <div className="about-me" id="about">
      <h2>{Data.about_title}</h2>
      <p>{Data.about_quote}</p>
      <br/>
      <div className="info-columns">
        <div className="column">
          <ul>
            <li>
              <strong>Birthday:</strong> {Data.bdate}
            </li>
            <li>
              <strong>Degree:</strong> {Data.degree}
            </li>
            <li>
              <strong>City:</strong> {Data.city}
            </li>
          </ul>
        </div>

        <div className="column">
          <ul>
            <li>
              <strong>Age:</strong> {Data.age}
            </li>
            <li>
              <strong>Email:</strong> {Data.email}
            </li>
            <li>
              <strong>Phone:</strong> {Data.phone}
            </li>
            <li>
              <strong>Freelance:</strong> {Data.freelance}
            </li>
          </ul>
        </div>

        <div className="column">
          <div className="skills-poll">
            <div>
              <span>{Data.lang_first}</span>
              <div className="poll-bar" style={{ width: "89%" }}></div>
            </div>
            <div>
              <span>{Data.lang_second}</span>
              <div className="poll-bar" style={{ width: "84%" }}></div>
            </div>
            <div>
              <span>{Data.lang_third}</span>
              <div className="poll-bar" style={{ width: "83%" }}></div>
            </div>
            <div>
              <span>{Data.lang_fourth}</span>
              <div className="poll-bar" style={{ width: "83%" }}></div>
            </div>
            <div>
              <span>{Data.lang_fifth}</span>
              <div className="poll-bar" style={{ width: "83%" }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <button className="info-btn">{Data.button1}</button>
        <button className="info-btn">{Data.button2}</button>
      </div>
      {/* Education Pathway */}
      <div className="column">
        <h4>Education</h4>
        <ul>
          {Data.education.map((item, index) => (
            <li key={index}>
              <b>{item.year}</b> - {item.clg}, {item.per}
            </li>
          ))}
        </ul>
      </div>
      
      <br/><br/>
      {/* Education Pathway */}
      <div className="column">
        <h4>Experience</h4>
        <ul>
          {Data.experience.map((item, index) => (
            <li key={index}>
            <b>{item.year}</b> - {item.company}, {item.Position}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
