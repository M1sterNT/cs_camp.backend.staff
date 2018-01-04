import * as firebase from 'firebase';
import { async } from '@firebase/util';
let config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "cscamp-af021",
    storageBucket: "",
    messagingSenderId: ""
};

firebase.initializeApp(config);

module.exports = firebase;