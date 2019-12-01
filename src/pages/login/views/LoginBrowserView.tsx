import React, {Component} from 'react';
import {BrowserView} from "react-device-detect";
import {Button, Col, Container, Form, FormGroup, Row} from "reactstrap";
import LoginImage from "../../../assets/images/SVG/backgroundLogin2.svg";
import {TextField} from "@material-ui/core";

class LoginBrowserView extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <BrowserView>
                <Row cols={2}>
                    <Col sm={6} md={6} lg={6} xs={6} className='d-flex justify-content-center align-items-center'>
                        <Form className='example-form'>
                            <Container fluid={true} className='d-flex justify-content-center align-items-center'>
                                <div className="display-3 text-dark mb-2">
                                    ¡Bienvenido!
                                </div>
                            </Container>
                            <Container fluid={true} className='d-flex justify-content-center align-items-center'>
                                <h4 className="text-secondary mb-5">
                                    Inicia Sesión con tu cuenta.
                                </h4>
                            </Container>
                            <Container fluid={true} className='d-flex justify-content-center align-items-center'>
                                <FormGroup>
                                    <TextField type="email" label="Email" variant="outlined"
                                               style={{width: 500}} className='mb-2'/>
                                    <br/>
                                    <TextField type="password" label="Contraseña" variant="outlined"
                                               style={{width: 500}} className='mt-2'/>
                                </FormGroup>
                            </Container>
                            <Container fluid={true} className='d-flex justify-content-center align-items-center mt-5'>
                                <Button type="submit" color='danger' className="text-light mx-auto">
                                    Iniciar Sesión
                                </Button>
                            </Container>
                        </Form>
                    </Col>
                    <Col sm={6} md={6} lg={6} xs={6} className='d-xs-none'>
                        <object data={LoginImage} type="image/svg+xml" aria-label='Logo' className='svgStyle'/>
                    </Col>
                </Row>
            </BrowserView>
        );
    }
}

export default LoginBrowserView;
