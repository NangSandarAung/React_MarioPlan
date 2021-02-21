export const createProject = (project) => {
    return (dispatch, getState, {getFirebase}) => {
        // make asyn call to database
        // then dispatch as normal

        const firestore = getFirebase().firestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Pu',
            authorLastName: 'Tone',
            authorId: 12234,
            createdAt: new Date()
        }).then (() => {
            dispatch({type: 'CREATE_PROJECT', project: project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err: err});
        })
        
    }
}
