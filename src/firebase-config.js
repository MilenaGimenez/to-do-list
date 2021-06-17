import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPxiN6w1_GIspm2HAHSMP1EBIya2ldeRE",
    authDomain: "todolist-5977d.firebaseapp.com",
    projectId: "todolist-5977d",
    storageBucket: "todolist-5977d.appspot.com",
    messagingSenderId: "570680421845",
    appId: "1:570680421845:web:80414bbb21f79d4296215c"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore() //guardar en variable la base de datos
  //export para hacerlo accesible a cualquier archivo de nuestra app