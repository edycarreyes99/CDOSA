import React, {Component} from 'react';

const FirebaseContext = React.createContext(null);

export class withFirebase extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <FirebaseContext.Consumer>
            {firebase => <Component {...this.props} firebase={firebase}/>}
        </FirebaseContext.Consumer>;
    }
}

export default FirebaseContext;