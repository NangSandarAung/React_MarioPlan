export const createProject = (project) => {
    return (dispatch, getState) => {
        // make asyn call to database
        // then dispatch as normal
        dispatch({type: 'CREATE_PROJECT', project: project});
    }
}
