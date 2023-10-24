// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6_yERXPYPwlcLaoAYopkiHB_14nStvNo",
  authDomain: "netflixgpt-573ac.firebaseapp.com",
  projectId: "netflixgpt-573ac",
  storageBucket: "netflixgpt-573ac.appspot.com",
  messagingSenderId: "684224895169",
  appId: "1:684224895169:web:acf70a5101cb1992e79c40",
  measurementId: "G-C7JN5PKTBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();