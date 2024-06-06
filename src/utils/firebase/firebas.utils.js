import { initializeApp } from "firebase/app";
import {
    getAuth, signInWithRedirect,
    signInWithPopup, GoogleAuthProvider
} from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDNSFB89tbcvO-rcm909yDZqtsGGfsqTHw",
    authDomain: "clothztm.firebaseapp.com",
    projectId: "clothztm",
    storageBucket: "clothztm.appspot.com",
    messagingSenderId: "339491257862",
    appId: "1:339491257862:web:941bb05fd52b628ee98d87"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGoogleProvider = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log('error creating the user ' + error.message);
        }
    }
    return userDocRef;
};