import React from 'react';
import './Portfolio.css'; 

const Projects = ({ projects }) => {
  return (
    <div className="projects-container">
      <h2>{projects.portfolio_title}</h2>
      
      <div className="projects-list">
        {projects.projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-used">
              <strong>Technologies used:</strong> {project.tech_used.join(', ')}
            </div>
            <div className="project-links">
              <a href={project.demo_link} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.source_code_link} target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
