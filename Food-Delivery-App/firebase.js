// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCX8cE2FnrWZe7KazjOwsHBaQwSsH9Z0jo",
    authDomain: "food-delivery-app-auth.firebaseapp.com",
    projectId: "food-delivery-app-auth",
    storageBucket: "food-delivery-app-auth.appspot.com",
    messagingSenderId: "960523020459",
    appId: "1:960523020459:web:c7c75b89ce328297392fee"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}
const auth = firebase.auth()
export { auth };