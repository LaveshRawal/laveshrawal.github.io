
import React from "react";
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBFykCe_1MG_wBFTZOwCo0p9N9sEpOKCVk",
  authDomain: "fir-chats-1dd8b.firebaseapp.com",
  projectId: "fir-chats-1dd8b",
  storageBucket: "fir-chats-1dd8b.appspot.com",
  messagingSenderId: "308204612233",
  appId: "1:308204612233:web:ae5a645828215883223458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = ()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
}