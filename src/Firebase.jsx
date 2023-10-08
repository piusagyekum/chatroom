import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseconfig = JSON.parse(import.meta.env.VITE_FIREBASECONFIG)
const app = initializeApp(firebaseconfig)
export const auth = getAuth(app)
export const db = getFirestore(app)


