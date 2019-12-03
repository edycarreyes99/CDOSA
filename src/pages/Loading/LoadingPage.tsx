import React, {Component} from 'react';
import {Container} from "reactstrap";
import LogoCdosa from "../../assets/images/SVG/logo-comida.svg";
import {CircularProgress, withStyles} from "@material-ui/core";

const ColorCircularProgress = withStyles({
    root: {
        color: '#7b9345',
        width: 20
    },
})(CircularProgress);

class LoadingPage extends Component {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Container fluid={true}
                       style={{
                           minHeight: "100vh",
                           display: "flex",
                           flex: 1,
                           justifyContent: "center",
                           alignItems: "center"
                       }}>
                <Container>
                    <Container fluid={true} className="d-flex align-items-center justify-content-center mb-5">
                        <object width="200" data={LogoCdosa} type="image/svg+xml" aria-label='Logo'
                                className='svgStyle'/>
                    </Container>
                    <Container fluid={true} className="d-flex align-items-center justify-content-center">
                        <ColorCircularProgress/>
                    </Container>
                </Container>
            </Container>
        );
    }

}

export default LoadingPage;