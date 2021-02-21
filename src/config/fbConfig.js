import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBoPPgbaJ1Fa4RJzmsBL-tRLnIz0cuurVs",
  authDomain: "react-marioplan-1223a.firebaseapp.com",
  projectId: "react-marioplan-1223a",
  storageBucket: "react-marioplan-1223a.appspot.com",
  messagingSenderId: "683150527440",
  appId: "1:683150527440:web:881c524c3b80d74b5887d5",
  measurementId: "G-J69BFKCVL8"
  };
  // Initialize Firebase
  //this allow our react project to connect our firebase project
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  //to update changes in the firebase library how it works with time stamps
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;