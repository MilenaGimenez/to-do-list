import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAsoddnuZIT6aqqLeWJ8OAu32IyF2YJtHE",
  authDomain: "todo-list-ac2a0.firebaseapp.com",
  projectId: "todo-list-ac2a0",
  storageBucket: "todo-list-ac2a0.appspot.com",
  messagingSenderId: "185678045488",
  appId: "1:185678045488:web:4bc72c63e60d0c02ef28f5"
};
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore() //guardar en variable la base de datos
  //export para hacerlo accesible a cualquier archivo de nuestra app