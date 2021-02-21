export const createProject = (project) => {
    return (dispatch, getState, {getFirebase}) => {
   
        const firestore = getFirebase().firestore(); // make asyn call to database
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Pu',
            authorLastName: 'Tone',
            authorId: 12234,
            createdAt: new Date()
        }).then (() => {
             // then dispatch as normal
            dispatch({type: 'CREATE_PROJECT', project: project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err: err});
        })
        
    }
}
