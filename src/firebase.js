// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxobG1BhkZkJ0i96wzdhTY60WjkNo4ADo",
  authDomain: "bgsmblore092025.firebaseapp.com",
  projectId: "bgsmblore092025",
  storageBucket: "bgsmblore092025.firebasestorage.app",
  messagingSenderId: "740098367181",
  appId: "1:740098367181:web:32fc4306a32ba788c29384",
  measurementId: "G-EDPH8Z3GT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);