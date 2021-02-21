import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetail = (props) => {
    const { project } = props;
    if (project) {
        return (
            <div className="container section project-detail">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project title - { project.title }</div>
                    <p>{ project.content }</p>
                </div>

                <div className="card-action gret lighten-4 grey-text">
                    <div>{ project.authorFirstName } { project.authorLastName}</div>
                    <div>{project.CreatedAt}</div>
                </div>
            </div>
        </div>
        )
    }
    return (
        <div className="container">
            <p>Loading Project.....</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects['id'] : null;
    return {
        project: project
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetail);