// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//authentication
import { getAuth } from "firebase/auth";
//firebase database
import { getFirestore } from "firebase/firestore";
//firebase storage
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBby0ZelMLboy9iq4o35LZySXD3A2SMPs8",
  authDomain: "makemytravel-dcdb8.firebaseapp.com",
  projectId: "makemytravel-dcdb8",
  storageBucket: "makemytravel-dcdb8.appspot.com",
  messagingSenderId: "864568925669",
  appId: "1:864568925669:web:b65f0d7f3bf201ae6d230c",
  measurementId: "G-T839CZ027Y",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let auth = getAuth(firebaseApp);
export let db = getFirestore(firebaseApp);
export let storage = getStorage(firebaseApp);

export default firebaseApp;
