import React from "react";
import "./projectcard.css";

function ProjectCard({ project }) {
  return (  
    <div className="project_card">
      <div className="project_info">
        <label className="project_title">{project.title}</label>
        <div className="project_links">
          {project.demo && (
            <a className="project_link" href={project.demo} target="_blank">
              <div className='link_button'>
                <i class="fas fa-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github&&(
              <a className="project_link" href={project.github} target="_blank">
              <div className='link_button'>
              <i class="devicon-github-original colored"></i>github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project_tags">
            {project.tags.map((tag)=>{
                return(
                        <label className="tag">{tag}</label>
                )
            })}
        </div>
      </div>
      <img src={project.image} className="project_photo" />
    </div>
  );
}

export default ProjectCard;
