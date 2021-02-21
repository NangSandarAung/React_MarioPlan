import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    const projectList = projects.map( project => {
        return (
            <ProjectSummary project={project} key={project.id}/>
        )
    })
    return(
        <div className="project-list section">
            {projectList}
        </div> 
    )
}

export default ProjectList;