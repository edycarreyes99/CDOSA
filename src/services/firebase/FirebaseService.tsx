// @ts-ignore
import FirebaseContext from "./FirebaseContext";
import app from 'firebase/app';
import 'firebase/auth';
import {Component} from "react";

type props = {};
type state = {};

class FirebaseService extends Component<props, state> {
    auth: app.auth.Auth;
    public user: any;

    constructor(props: any) {
        super(props);
        this.auth = app.auth();
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.signout = this.signout.bind(this);
    }

    public async login(email: string, password: string): Promise<app.auth.UserCredential> {
        return await this.auth.signInWithEmailAndPassword(email, password).then(user => user);
    }

    public async signup(email: string, password: string): Promise<app.auth.UserCredential> {
        return await this.auth.createUserWithEmailAndPassword(email, password).then(user => user);
    }

    public async signout(): Promise<void> {
        return await this.auth.signOut();
    }
}

export default FirebaseService;
export {FirebaseContext};