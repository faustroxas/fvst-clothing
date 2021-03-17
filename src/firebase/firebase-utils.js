import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDGR1FUpOSVZQ3U9voQxFPjsJNoqwG8kdM",
    authDomain: "fvst-clothing.firebaseapp.com",
    projectId: "fvst-clothing",
    storageBucket: "fvst-clothing.appspot.com",
    messagingSenderId: "1075242028495",
    appId: "1:1075242028495:web:ad84b9a4523415bc1a96ba",
    measurementId: "G-B6D2T01KKC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase