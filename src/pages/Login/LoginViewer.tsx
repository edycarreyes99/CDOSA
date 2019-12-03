import React, {Component} from 'react';
import {isBrowser, isTablet} from 'react-device-detect';
import LoginBrowserView from './views/LoginBrowserView';
import LoginMobileView from './views/LoginMobileView';
import LoginTabletView from './views/LoginTabletView';


class LoginViewer extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            isBrowser ? <LoginBrowserView/> : isTablet ? <LoginTabletView/> : <LoginMobileView/>
        );
    }
}

// @ts-ignore
export default LoginViewer