import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDLFXgHBr1aqxpniPWjMcmbM55JhC5_UcM",
  authDomain: "derry-world.firebaseapp.com",
  projectId: "derry-world",
  storageBucket: "derry-world.firebasestorage.app",
  messagingSenderId: "976660041168",
  appId: "1:976660041168:web:8795c53b0d62a102b7fdd5",
  measurementId: "G-L4DW3VLGR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async(name,email,password)=>{
 try {
   const res = await createUserWithEmailAndPassword(auth,email,password)
   const user = res.user
  await addDoc(collection(db, "users"), {
    uid: user.uid,
    name,
    authProvider: "local",
    email
})
 } catch (error) {
    console.log(error)
        toast.error(error.code.split('/')[1].split("-").join(" "))
 }
}


const login = async(email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split("-").join(" "))
    }
}

const logOut = async()=>{
    try {
       await signOut(auth)
    } catch (error) {
        console.log(error)
        toast.error(error)
    }
}

export {auth,db,login,signUp,logOut}