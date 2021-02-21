export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();   //use this instance to communicate with the Project
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type:'LOGIN_ERROR', err: err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {

        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}