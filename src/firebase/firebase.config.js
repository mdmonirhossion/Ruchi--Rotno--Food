// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_JYw3EOJ35VGvLz5B_2FXKxEi2Ew_9yk",
  authDomain: "ruchi-rotno-food.firebaseapp.com",
  projectId: "ruchi-rotno-food",
  storageBucket: "ruchi-rotno-food.firebasestorage.app",
  messagingSenderId: "178377050036",
  appId: "1:178377050036:web:d7bbf52cbf7691b551d4e1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);