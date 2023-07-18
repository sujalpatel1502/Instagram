import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyAHj9hWppXvmueHg4pY1eR9Ui4sQkvIMHI",
    authDomain: "instagram-c11fc.firebaseapp.com",
    projectId: "instagram-c11fc",
    storageBucket: "instagram-c11fc.appspot.com",
    messagingSenderId: "34445834941",
    appId: "1:34445834941:web:cd7e013d92581082ef55d4"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)