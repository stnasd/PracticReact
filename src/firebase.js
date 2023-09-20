import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDC44IKABMyPZKOXD4dcxU_UcBHvecUNi4",
    authDomain: "practicreact.firebaseapp.com",
    projectId: "practicreact",
    storageBucket: "practicreact.appspot.com",
    messagingSenderId: "352718734348",
    appId: "1:352718734348:web:2f2db041e1b16da58fda29",
    databaseURL: 'https://practicreact-default-rtdb.firebaseio.com'
};

export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export const auth = getAuth(appFirebase);