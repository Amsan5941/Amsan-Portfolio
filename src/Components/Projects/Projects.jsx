import React from 'react';
import './Projects.css';
import Project_Data from '../../assets/projects_data';

const Projects = () => {
  return (
    <div id='project' className='projects'>
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-container">
        {Project_Data.map((project, index) => (
          <a 
            key={index} 
            href={project.p_link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            <div className="project-format"> 
              <h3>{project.p_no}</h3>
              <h2>{project.p_name}</h2>
              <p>{project.p_desc}</p>
              <div className="projects-visit">
                <p>🚀 Click To Visit Project!</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
