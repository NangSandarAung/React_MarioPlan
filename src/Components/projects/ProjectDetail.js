import React from 'react';

const ProjectDetail = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-detail"> 
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project title - {id}</div>
                    <p>Test test test paragraph</p>
                </div>

                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted By Net Ninja</div>
                    <div>21st Feb, 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;