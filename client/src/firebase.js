// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-48ca8.firebaseapp.com",
  projectId: "mern-blog-48ca8",
  storageBucket: "mern-blog-48ca8.appspot.com",
  messagingSenderId: "1065062984716",
  appId: "1:1065062984716:web:d0b85f4b2ef374d6db9229"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);