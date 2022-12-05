import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkp8m_eoum4D5GqRS9wsagNS8JaDTajJ4",
    authDomain: "prue-database.firebaseapp.com",
    databaseURL: "https://prue-database-default-rtdb.firebaseio.com",
    projectId: "prue-database",
    storageBucket: "prue-database.appspot.com",
    messagingSenderId: "37569267710",
    appId: "1:37569267710:web:9bcdd0348de81bd9cf62af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);