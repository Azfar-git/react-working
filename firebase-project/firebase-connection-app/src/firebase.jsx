// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpxvF-ZVqin02E3cvypCHnRlQUcyQWWZI",
  authDomain: "app-2e137.firebaseapp.com",
  projectId: "app-2e137",
  storageBucket: "app-2e137.firebasestorage.app",
  messagingSenderId: "1049229155385",
  appId: "1:1049229155385:web:98237f913d03b30eec41e8",
  databaseURL:"https://app-2e137-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);