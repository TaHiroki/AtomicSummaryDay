import firebase from "firebase/app"

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBV2rXYDN0k3zVg5smWDwdufmW_A3V-JlU",
    authDomain: "nextsummaryday-a1440.firebaseapp.com",
    databaseURL: "https://nextsummaryday-a1440.firebaseio.com",
    projectId: "nextsummaryday-a1440",
    storageBucket: "nextsummaryday-a1440.appspot.com",
    messagingSenderId: "583230961017",
    appId: "1:583230961017:web:1d92d286de9c751368eba8"
  })
}

export default firebase
