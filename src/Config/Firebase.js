// import firebase from "firebase/app";
// import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCZuHVKcnFgDad9icZZpFzEpTPPJFM5P34",
  authDomain: "assignment-18-91b5b.firebaseapp.com",
  projectId: "assignment-18-91b5b",
  storageBucket: "assignment-18-91b5b.appspot.com",
  messagingSenderId: "778864156501",
  appId: "1:778864156501:web:cac2aa1f339892cf4059dc",
  measurementId: "G-C3TC7Z37BV"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db=firebase.firestore();
  export const auth = firebase.auth();