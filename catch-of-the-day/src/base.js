import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZdMN9j3IpOQvxUWpq_KiSrXaFgdfPfZQ",
    authDomain: "fish-store-bojan.firebaseapp.com",
    databaseURL: "https://fish-store-bojan.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// Imenovani export 
export { firebaseApp };

// Default export 
export default base;