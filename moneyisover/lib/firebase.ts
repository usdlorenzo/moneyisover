import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsvlYRE-EbU1tkg6ktyUv89qLI_ZqLJ64",
  authDomain: "money-is-over.firebaseapp.com",
  projectId: "money-is-over",
  storageBucket: "money-is-over.firebasestorage.app",
  messagingSenderId: "124562953594",
  appId: "1:124562953594:web:88b94970885f6cc19172c3",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
