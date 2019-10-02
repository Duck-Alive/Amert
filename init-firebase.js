// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyDpR_yxp-P71vhs3K5MaMlGmZQhTcBhCHc",
    authDomain: "chofix-450a5.firebaseapp.com",
    databaseURL: "https://chofix-450a5.firebaseio.com",
    projectId: "chofix-450a5",
    storageBucket: "chofix-450a5.appspot.com",
    messagingSenderId: "29140314831",
    appId: "1:29140314831:web:fb2c382a609469c3f425ba"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase with a "default" Firebase project
var defaultProject = firebase.initializeApp(firebaseConfig);

console.log(defaultProject.name);  // "[DEFAULT]"

// Option 1: Access Firebase services via the defaultProject variable
var defaultStorage = defaultProject.storage();
var defaultFirestore = defaultProject.firestore();

// Option 2: Access Firebase services using shorthand notation
defaultStorage = firebase.storage();
defaultFirestore = firebase.firestore();