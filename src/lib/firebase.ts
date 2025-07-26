import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB2GR0NB6fY4kO4LsDa5kiUHC-mlX7Cn9E",
  authDomain: "blackstone-home-and-lawn.firebaseapp.com",
  databaseURL: "https://blackstone-home-and-lawn-default-rtdb.firebaseio.com",
  projectId: "blackstone-home-and-lawn",
  storageBucket: "blackstone-home-and-lawn.firebasestorage.app",
  messagingSenderId: "591939702000",
  appId: "1:591939702000:web:b6fd44a81fb2e7cbee4635",
  measurementId: "G-X77P047PMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;