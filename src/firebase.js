// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWySSDrg9HNHnNMoVkC8w72Uwvz71Tw-Q",
  authDomain: "products-e8e7d.firebaseapp.com",
  databaseURL: "https://products-e8e7d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "products-e8e7d",
  storageBucket: "products-e8e7d.appspot.com",
  messagingSenderId: "717987455455",
  appId: "1:717987455455:web:dab8a245da8ddce154646a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
