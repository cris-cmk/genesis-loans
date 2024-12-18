import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration (from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyDqJ1CKIZ2LuXEIq10ji_ZiXd-fRL3Gvfg",
    authDomain: "moringa-2abdf.firebaseapp.com",
    projectId: "moringa-2abdf",
    storageBucket: "moringa-2abdf.firebasestorage.app",
    messagingSenderId: "263203926621",
    appId: "1:263203926621:web:14a35175c1cfff9dae53b4",
    measurementId: "G-59VEEZ16Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
