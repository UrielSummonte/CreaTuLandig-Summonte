// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPUcSimsLyIuW25-AeKZQ9xMc_6-ac8AQ",
  authDomain: "catasohes.firebaseapp.com",
  projectId: "catasohes",
  storageBucket: "catasohes.appspot.com",
  messagingSenderId: "3303674018",
  appId: "1:3303674018:web:188c77cd3ac7d307e4c7fb",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
