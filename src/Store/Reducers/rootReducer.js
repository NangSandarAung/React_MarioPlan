import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer }from 'react-redux-firebase'; //for authenthication
import 'firebase/firestore' // <- needed if using firestore

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer  //for user authenthication
});

export default rootReducer;
