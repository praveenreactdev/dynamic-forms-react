import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var config = {
    apiKey: "AIzaSyArHwGrtKzrFA6va0NifSe72MtXk90WPb4",
    authDomain: "projectmanagment-ccb15.firebaseapp.com",
    databaseURL: "https://projectmanagment-ccb15.firebaseio.com",
    projectId: "projectmanagment-ccb15",
    storageBucket: "projectmanagment-ccb15.appspot.com",
    messagingSenderId: "959795582150"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({
     
  })

  export default firebase;