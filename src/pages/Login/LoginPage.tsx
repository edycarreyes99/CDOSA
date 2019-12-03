import React, {Component} from 'react';
import './LoginPage.scss';
import LoginViewer from "./LoginViewer";


class LoginPage extends Component {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className='login-page d-flex justify-content-center align-items-center'>
                <LoginViewer/>
            </div>
        );
    }
}

export default LoginPage;