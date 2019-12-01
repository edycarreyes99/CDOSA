import React, {Component} from 'react';
import './App.scss';
import LoginPage from "./pages/login/LoginPage";

class App extends Component {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <LoginPage/>
        );
    }
}

export default App;
