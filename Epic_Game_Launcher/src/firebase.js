// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0zwPwzu4kmVcwetN2UdovgOWmr-ak588",
  authDomain: "epic-game-launcher.firebaseapp.com",
  projectId: "epic-game-launcher",
  storageBucket: "epic-game-launcher.firebasestorage.app",
  messagingSenderId: "1043344479003",
  appId: "1:1043344479003:web:4eb32ff35542675f55b9be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();