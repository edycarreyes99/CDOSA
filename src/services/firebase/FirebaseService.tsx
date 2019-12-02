import FirebaseContext from "./FirebaseContext";
import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from "./firebaseConfig";
import UserCredential = firebase.auth.UserCredential;
import {userInfo} from "os";

class FirebaseService {
    auth: app.auth.Auth;

    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    public async login(email: string, password: string): Promise<UserCredential> {
        return await this.auth.signInWithEmailAndPassword(email, password).then(user => user);
    }

    public async signup(email: string, password: string): Promise<UserCredential> {
        return await this.auth.createUserWithEmailAndPassword(email, password).then(user => user);
    }

    public async signout(): Promise<void> {
        return await this.auth.signOut();
    }
}

export default FirebaseService;
export {FirebaseContext};