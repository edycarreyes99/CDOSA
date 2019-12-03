import React, {Component} from 'react';

class DashboardPage extends Component<{}, {}> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <h1>DashboardPage Works!.</h1>
        );
    }
}

export default DashboardPage;