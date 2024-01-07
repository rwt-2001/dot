import { FirebaseApp, initializeApp } from "firebase/app";

export const initializeFirebase = async () => {
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBASE_AUTHDOMAIN,
        projectId: process.env.FIREBASE_PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
        appId: process.env.FIREBASE_APPID,
        measurementId: process.env.FIREBASE_MEASUREMENTID
    };
    try {
        await initializeApp(firebaseConfig);
    } catch {
        console.log("Unable to initialize firebase");
    }
}
