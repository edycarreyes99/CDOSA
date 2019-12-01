import React, {Component} from 'react';
import {Row, Col} from "reactstrap";
import './LoginPage.scss';
import LoginImage from '../../assets/images/SVG/backgroundLogin2.svg'

class LoginPage extends Component {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className='login-page d-flex justify-content-center align-items-center'>
                <Row cols={2}>
                    <Col sm={6} md={6} lg={6} xs={6} className='d-flex justify-content-center align-items-center'>
                        <form className="example-form">
                            <div className="container-fluid d-flex align-items-center justify-content-center">
                                <div className="display-3 text-dark mb-5">
                                    ¡Bienvenido!
                                </div>
                            </div>

                            <div className="container-fluid d-flex align-items-center mt-4">
                                <button type="submit" className="btn btn-danger text-light mx-auto">Iniciar Sesión
                                </button>
                            </div>
                        </form>
                    </Col>
                    <Col sm={6} md={6} lg={6} xs={6}>
                        <object data={LoginImage} type="image/svg+xml" aria-label='Logo' className='svgStyle'/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginPage;