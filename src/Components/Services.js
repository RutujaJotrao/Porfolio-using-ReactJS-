import React, { useState } from 'react';
import './Services.css';
import Data from '../Data.json';
import { FaFigma, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';
import { IoLogoElectron } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

const iconmobile = {
  "FaAndroid":<FaAndroid/>
}

const iconback = {
  "IoLogoElectron": <IoLogoElectron />,
  "IoLogoJavascript": <IoLogoJavascript />,
  "FaJava": <FaJava />,
  "DiMysql": <DiMysql />,
  "FaPhp": <FaPhp />
};


const iconMap = {
  "FaFigma": <FaFigma />,
  "FaHtml5": <FaHtml5 />,
  "FaCss3": <FaCss3 />,
  "FaBootstrap": <FaBootstrap />,
  "RiReactjsFill": <RiReactjsFill />
};

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='service'>
      <h2>{Data.services_title}</h2>


      <div style={{ display: 'flex', marginLeft:'110px' }}>
        <div style={{ marginTop: '18vh', borderRight: '2px solid gray', borderRadius: '10px', width: '53vh', padding: '7vh', height: '40vh' }}>
          <button className='btn1' onClick={() => handleButtonClick(Data.frontend)}>
            🚀 {Data.frontend}
          </button>
          <button className='btn1' onClick={() => handleButtonClick(Data.backend)}>
            🛠️ {Data.backend}
          </button>
          <button className='btn1' onClick={() => handleButtonClick(Data.mobile)}>
            📱 {Data.mobile}
          </button>
        </div>

        <div className='sub_div'>
          {selectedCategory === Data.frontend && (
            <>
              {Data.frontend_tech.map((item, index) => (
                <div key={index} className='tech-item'>
                  <div className='icon-div'>{iconMap[item.icon]}</div>
                  <div className='text-div'>
                    <h5>{item.name}</h5>
                  </div>
                </div>
              ))}
            </>
          )}

          {selectedCategory === Data.backend && (
            <>
              {Data.backend_tech.map((item, index) => (
                <div key={index} className='tech-item'>
                  <div className='icon-div'>{iconback[item.icon]}</div>
                  <div className='text-div'>
                    <h5>{item.name}</h5>
                  </div>
                </div>
              ))}
            </>
          )}

          {selectedCategory === Data.mobile && (
            <>
              {Data.mobile_tech.map((item, index) => (
                <div key={index} className='tech-item'>
                  <div className='icon-div'>{iconmobile[item.icon]}</div>
                  <div className='text-div'>
                    <h5>{item.name}</h5>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
