import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDhtI1l7xm5hpv8S6RnMFb-GM-tDgrcibY",
  authDomain: "tiktok---jornada-1a74b.firebaseapp.com",
  projectId: "tiktok---jornada-1a74b",
  storageBucket: "tiktok---jornada-1a74b.appspot.com",
  messagingSenderId: "1005086181356",
  appId: "1:1005086181356:web:21d9ae9a4874b222d922c9",
  measurementId: "G-D8R9T4Y5LJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
