import React from 'react'
import Separator from '../../comman/saperater';
import { ProjectData } from '../../data/project'
import "./project.css"
import ProjectCard from './projectCard.jsx';
function Projects() {
    const data=ProjectData;
    return (

        <div className="project">
            <Separator />
            <label className='section_title'>Projects</label>
            <div>
                {data.map((project)=>{
                    return(
                        <ProjectCard project={project}/>
                        
                    )
                })}
            </div>

            
        </div>
    )
}

export default Projects
