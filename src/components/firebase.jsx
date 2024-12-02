// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDS9Z-6dADIcUyngz26ZyFeF1S2Bvn2nak",
    authDomain: "codingassignment-78d5b.firebaseapp.com",
    projectId: "codingassignment-78d5b",
    storageBucket: "codingassignment-78d5b.firebasestorage.app",
    messagingSenderId: "781919215567",
    appId: "1:781919215567:web:8a00b84248c6491dfd7cba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;