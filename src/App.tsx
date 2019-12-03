import React, {Component} from 'react';
import './App.scss';
import LoginPage from "./pages/Login/LoginPage";
import LoadingPage from './pages/Loading/LoadingPage';
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import app from 'firebase/app';
import * as firebase from 'firebase';

import {FirebaseAuthConsumer, FirebaseAuthProvider} from "@react-firebase/auth";
import firebaseConfig from "./services/firebase/firebaseConfig";

type props = {};
type state = { isLoading: boolean };

class App extends Component<props, state> {

    constructor(props: any) {
        super(props);
        this.state = {isLoading: true};
        app.initializeApp(firebaseConfig);
    }

    componentDidMount(): void {
        this.setState({isLoading: false});
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            this.state.isLoading ?
                <LoadingPage/> :
                <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
                    {
                        <FirebaseAuthConsumer>
                            {
                                ({isSignedIn, user, providerId}) => {
                                    console.log(isSignedIn);
                                    return isSignedIn ? <DashboardPage/> : <LoginPage/>;
                                }
                            }
                        </FirebaseAuthConsumer>
                    }
                </FirebaseAuthProvider>
        );
    }
}

export default App;
