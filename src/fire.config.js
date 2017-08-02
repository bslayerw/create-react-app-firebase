import firebase from "firebase";
var config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "[API-KEY]",
  authDomain: "[APP_NAME].firebaseapp.com",
  databaseURL: "https://[APP_NAME].firebaseio.com",
  projectId: "[APP_NAME]",
  storageBucket: "[APP_NAME].appspot.com",
  messagingSenderId: "[ID]"
};
var fire = firebase.initializeApp(config);
export default fire;
