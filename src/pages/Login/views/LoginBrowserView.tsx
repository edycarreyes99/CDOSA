import React, {Component} from 'react';
import {BrowserView} from "react-device-detect";
import {Button, Col, Container, Form, FormGroup, Row} from "reactstrap";
import LoginImage from "../../../assets/images/SVG/backgroundLogin2.svg";
import {TextField} from "@material-ui/core";
import app from 'firebase/app';

type props = {};
type state = { email: string, password: string };

class LoginBrowserView extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {email: '', password: ''};
        this.login = this.login.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public async login(email: string, password: string): Promise<app.auth.UserCredential> {
        return await app.auth().signInWithEmailAndPassword(email, password).then(user => user);
    }

    async handleSubmit(event: any) {
        event.preventDefault();
        this.setState({email: event.target.email, password: event.target.password});
        console.log("Email: " + this.state.email + " Pass: " + this.state.password);
        try {
            await this.login(this.state.email, this.state.password);
        } catch (e) {
            alert(e);
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <BrowserView>
                <Row cols={2}>
                    <Col sm={6} md={6} lg={6} xs={6} className='d-flex justify-content-center align-items-center'>
                        <Form className='example-form' onSubmit={this.handleSubmit}>
                            <Container fluid={true} className='d-flex justify-content-center align-items-center'>
                                <div className="display-3 text-dark mb-2">
                                    ¡Bienvenido!
                                </div>
                            </Container>
                            <Container fluid={true} className='d-flex justify-content-center align-items-center'>
                                <h4 className="text-secondary mb-5">
                                    Inicia sesión con tu cuenta.
                                </h4>
                            </Container>
                            <Container fluid={true} className='d-flex justify-content-center align-items-center'>
                                <FormGroup>
                                    <TextField type="email" label="Email" variant="outlined"
                                               style={{width: 400}} className='mb-2' name='email'
                                               onChange={(event => this.setState({email: event.target.value}))}/>
                                    <br/>
                                    <TextField type="password" label="Contraseña" variant="outlined"
                                               style={{width: 400}} className='mt-2' name='password'
                                               onChange={(event => this.setState({password: event.target.value}))}/>
                                </FormGroup>
                            </Container>
                            <Container fluid={true} className='d-flex justify-content-center align-items-center mt-4'>
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
