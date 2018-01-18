import firebase from 'firebase'


// Initialize Firebase
const config = {
    apiKey: "AIzaSyB_eD3sEDtTZ2i2A2EspKt78zTYdfkQEJk",
    authDomain: "waldek-sandbox.firebaseapp.com",
    databaseURL: "https://waldek-sandbox.firebaseio.com",
    projectId: "waldek-sandbox",
    storageBucket: "waldek-sandbox.appspot.com",
    messagingSenderId: "1066698975405"
};
firebase.initializeApp(config);

export const database = firebase.database();