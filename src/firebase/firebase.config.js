// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSaU9iYx43LRVyGMGkNQ1BO4rH_fF1C7E",
  authDomain: "arcadex-gamehub.firebaseapp.com",
  projectId: "arcadex-gamehub",
  storageBucket: "arcadex-gamehub.firebasestorage.app",
  messagingSenderId: "401567256586",
  appId: "1:401567256586:web:de682bf56a85650a158ff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;