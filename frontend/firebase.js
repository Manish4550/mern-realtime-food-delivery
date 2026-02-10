// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery-a10be.firebaseapp.com",
  projectId: "vingo-food-delivery-a10be",
  storageBucket: "vingo-food-delivery-a10be.firebasestorage.app",
  messagingSenderId: "958663725321",
  appId: "1:958663725321:web:5f86724779be6716e083d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app,auth}