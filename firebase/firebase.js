
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAl2SA582mUiWmlR0g_Xgo-l09KYopXGbY",
  authDomain: "portfolio-db4cb.firebaseapp.com",
  projectId: "portfolio-db4cb",
  storageBucket: "portfolio-db4cb.appspot.com",
  messagingSenderId: "641864145191",
  appId: "1:641864145191:web:8189e464a0b5c75dd6f102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore()

export {db}