import FirebaseContext from "./FirebaseContext";
import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from "./firebaseConfig";

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