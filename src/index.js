import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Store/Reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true //include if using firestore
}

//applymiddleware --> could take in a list of middleware
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reduxFirestore(fbConfig)
  ));

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};



ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
    
  </Provider>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
