import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebaase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "pgms-f007e.firebaseapp.com",
  projectId: "pgms-f007e",
  storageBucket: "pgms-f007e.appspot.com",
  messagingSenderId: "821809007795",
  appId: "1:821809007795:web:66da8e5629f79e8f9e34c6",
  measurementId: "G-DD6Y67Q4VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()

