import app from 'firebase/app'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCEv7Wv2Nrb8RCCoAnQXUOhrn5Frz94Ttk",
    authDomain: "travel-chat-5f8af.firebaseapp.com",
    databaseURL: "https://travel-chat-5f8af.firebaseio.com",
    projectId: "travel-chat-5f8af",
    storageBucket: "travel-chat-5f8af.appspot.com",
    messagingSenderId: "644175810859",
};

const firebase = app.initializeApp(config)
const auth = firebase.auth()


export {
    firebase, auth
}