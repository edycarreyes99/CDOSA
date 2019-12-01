import React, {Component} from 'react';
import {isBrowser, isMobileOnly, isTablet} from 'react-device-detect';
import Browser from './views/BrowserView';
import Mobile from "./views/MobileView";


class Viewer extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            isBrowser ? <Browser/> : isMobileOnly ? <Mobile/> : isTablet ? <Browser/> : null
        );
    }
}

export default Viewer;