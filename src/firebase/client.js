import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBeW2R97tEWo3P00TSYJHqAQbdHvJBnRgk",
    authDomain: "concorcase-coderhouse.firebaseapp.com",
    projectId: "concorcase-coderhouse",
    storageBucket: "concorcase-coderhouse.appspot.com",
    messagingSenderId: "339718220416",
    appId: "1:339718220416:web:189e08d579706efb86d465"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);