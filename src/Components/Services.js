import React from 'react';
import './Services.css';
import Data from '../Data.json';
import { FaFigma, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';

const iconMap = {
  "FaFigma": <FaFigma />,
  "FaHtml5": <FaHtml5 />,
  "FaCss3": <FaCss3 />,
  "FaBootstrap": <FaBootstrap />,
  "RiReactjsFill": <RiReactjsFill />
};

const Services = () => {
  return (
    <div className='service'>
      <h2>{Data.services_title}</h2>

      <div style={{ display: 'flex' }}>
        <div style={{ marginTop: '18vh', borderRight: '2px solid gray', borderRadius: '10px', width: '53vh', padding: '7vh', height: '52vh' }}>
          <button className='btn1'>
            🚀 {Data.frontend}
          </button>
          <button className='btn1'>
            🛠️ {Data.backend}
          </button>
          <button className='btn1'>
            📱 {Data.mobile}
          </button>
          <button className='btn1'>
            🌐 {Data.other}
          </button>
        </div>

        <div className='sub_div'>
          {Data.frontend_tech.map((item, index) => (
            <div key={index} className='tech-item'>
              {iconMap[item.icon]}
              <h6>{item.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
