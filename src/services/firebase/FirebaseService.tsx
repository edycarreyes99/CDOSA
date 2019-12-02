import FirebaseContext from "./FirebaseContext";
import app from 'firebase/app';
import 'firebase/auth';
import firebaseDevConfig from "./firebaseConfig";

const firebaseProdConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appID: process.env.appId,
    measurementId: process.env.measurementId
};

const firebaseConfig = process.env.NODE_ENV === 'production' ? firebaseProdConfig : firebaseDevConfig;

class FirebaseService {
    auth: app.auth.Auth;

    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    public login(email: string, password: string): void {
        this.auth.createUserWithEmailAndPassword(email, password).then((user) => {
            alert(user);
        }).catch(e => {
            alert(e);
        });
    }
}

export default FirebaseService;
export {FirebaseContext};