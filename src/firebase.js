import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAQhF_Etv8mlVsTr4g8L2ysc7iOcADU8h0",
    authDomain: "clone-4860a.firebaseapp.com",
    databaseURL: "https://clone-4860a.firebaseio.com",
    projectId: "clone-4860a",
    storageBucket: "clone-4860a.appspot.com",
    messagingSenderId: "670475038414",
    appId: "1:670475038414:web:7a40f31384bd0705b7aa9f",
    measurementId: "G-K0KLH680FN"  
});

const auth = firebase.auth();

export {auth};