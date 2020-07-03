 import firebase from "firebase/app";
 import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyBUOcXUM79Z_sSEjZ5UWpb0NL83gLCrOHk",
    authDomain: "todoist-d2ec3.firebaseapp.com",
    databaseURL: "https://todoist-d2ec3.firebaseio.com",
    projectId: "todoist-d2ec3",
    storageBucket: "todoist-d2ec3.appspot.com",
    messagingSenderId: "95342383461",
    appId: "1:95342383461:web:5e19c75029a538cf73d18c"

});

export { firebaseConfig as firebase};
