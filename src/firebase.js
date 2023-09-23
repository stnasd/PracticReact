import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDiNzVW48s5d4rfohT_pgHLwg150lhgq5w",
    authDomain: "reactpractic2.firebaseapp.com",
    projectId: "reactpractic2",
    storageBucket: "reactpractic2.appspot.com",
    messagingSenderId: "808196092824",
    appId: "1:808196092824:web:b163d1585c796e19ed71ed",
    databaseURL: "https://reactpractic2-default-rtdb.firebaseio.com"
};

export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export const auth = getAuth(appFirebase);


