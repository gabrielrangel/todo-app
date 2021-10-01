import * as firebase from "firebase/app";

import * as auth from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCzK_PeC4ViAIpVP0LHj1RQTX9Z2dpkeIY",
    authDomain: "todo-9f7e9.firebaseapp.com",
    projectId: "todo-9f7e9",
    storageBucket: "todo-9f7e9.appspot.com",
    messagingSenderId: "1865364771",
    appId: "1:1865364771:web:ea65de44a2810579dbc896"
};

firebase.initializeApp(firebaseConfig)

export { firebase, auth };