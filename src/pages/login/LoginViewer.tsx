import React, {Component} from 'react';
import {isBrowser, isMobileOnly} from 'react-device-detect';
import Browser from './views/BrowserView';
import Mobile from './views/MobileView';
import Tablet from './views/TabletView'


class LoginViewer extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            isBrowser ? <Browser/> : isMobileOnly ? <Mobile/> : <Tablet/>
        );
    }
}

export default LoginViewer