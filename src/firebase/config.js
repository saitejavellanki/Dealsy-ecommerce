
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyBC9uWw2T2z3swt7aSQ-jiQXNx0tLN6Ayg",
  authDomain: "eshop-ea68c.firebaseapp.com",
  projectId: "eshop-ea68c",
  storageBucket: "eshop-ea68c.appspot.com",
  messagingSenderId: "874450038158",
  appId: "1:874450038158:web:62162ec2b8d6e7078d48df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;