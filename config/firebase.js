import * as firebase from 'firebase';
import { async } from '@firebase/util';
let config = {
    apiKey: "AIzaSyAT1fb8ZfNbNwcFV0P1u-d7t7RLnwtn-UQ",
    authDomain: "cscamp-af021.firebaseapp.com",
    databaseURL: "https://cscamp-af021.firebaseio.com",
    projectId: "cscamp-af021",
    storageBucket: "cscamp-af021.appspot.com",
    messagingSenderId: "73375847596"
};

firebase.initializeApp(config);

module.exports = firebase;