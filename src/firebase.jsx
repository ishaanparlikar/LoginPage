import firebase from "firebase/compat/app";
import 'firebase/compat/auth'

const app = firebase.initializeApp({

  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ,

  projectId:import.meta.env.VITE_FIREBASE_AUTH ,

  storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ,

  messagingSenderId:import.meta.env.VITE_FIREBASE_SENDER_ID ,

  appId:import.meta.env.VITE_FIREBASE_APP_ID

});

export const auth = app.auth()
export default app;