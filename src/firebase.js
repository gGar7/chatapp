import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



  const firebaseConfig = {
    apiKey: "AIzaSyDMK-_QydjRUnPl8HY4KBvq_rWfFeX82cM",
    authDomain: "chatapp-fbf47.firebaseapp.com",
    projectId: "chatapp-fbf47",
    storageBucket: "chatapp-fbf47.appspot.com",
    messagingSenderId: "460127599039",
    appId: "1:460127599039:web:901fea43a5dd0cc1bc490a",
    measurementId: "G-3KB5FQ75VL"
  };


// Initializing Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
