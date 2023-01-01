// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl9AxZyONg11vFSrV0_aqh1ag1UtaPC2Y",
  authDomain: "realtor-clone-55711.firebaseapp.com",
  projectId: "realtor-clone-55711",
  storageBucket: "realtor-clone-55711.appspot.com",
  messagingSenderId: "106413853323",
  appId: "1:106413853323:web:30da4c4255252655fca28e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
