// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASdwMgtLm-5epU-_Up1-DFUm3RMCTDEQY",
  authDomain: "assignment-10-project-42e6d.firebaseapp.com",
  projectId: "assignment-10-project-42e6d",
  storageBucket: "assignment-10-project-42e6d.firebasestorage.app",
  messagingSenderId: "393857693711",
  appId: "1:393857693711:web:2938b4a62659716f0acb7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);