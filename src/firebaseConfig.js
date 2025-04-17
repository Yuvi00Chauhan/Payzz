import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxPjuj05VQqeDl6P_af81sWJa_cljFYZE",
  authDomain: "payzz-6de8e.firebaseapp.com",
  projectId: "payzz-6de8e",
  storageBucket: "payzz-6de8e.firebasestorage.app",
  messagingSenderId: "186880296183",
  appId: "1:186880296183:web:c338a8b2bf225b0c59fff2",
  measurementId: "G-TM7HK5EPR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);