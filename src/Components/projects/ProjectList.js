import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    const projectList = projects.map( project => {
        return (
            <Link to={'project/' + project.id} key={project.id}>
                <ProjectSummary project={project} key={project.id}/>
            </Link>
        )
    })
    return(
        <div className="project-list section">
            {projectList}
        </div> 
    )
}

export default ProjectList;