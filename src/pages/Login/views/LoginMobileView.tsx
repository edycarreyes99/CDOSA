import React, {Component} from 'react';
import {isAndroid, MobileOnlyView} from "react-device-detect";
import {Container} from 'reactstrap';
import CdosaLogo from '../../../assets/images/SVG/logo-comida.svg';
import PlayStoreBadge from '../../../assets/images/badges/googlePlayStoreBadge.png';
import AppStoreBadge from '../../../assets/images/badges/appStoreBadge.png';

class LoginMobileView extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <MobileOnlyView>
                <div className='d-flex justify-content-center align-items-center'>
                    <Container fluid={true}>
                        <Container fluid={true} className='text-center mb-5'>
                            <object data={CdosaLogo} type="image/svg+xml" aria-label='Logo'
                                    style={{maxHeight: '100vh', maxWidth: '40vw'}}
                                    className='mx-auto'/>
                        </Container>
                        <Container fluid={true}>
                            <p className='text-center text-secondary text-body'>
                                Para poder utilizar CDOSA en dispositivos {isAndroid ? 'Android' : 'iOS'} tienes que
                                descargar la aplicacion para moviles dando click en el siguiente botón:
                            </p>
                        </Container>
                        <Container fluid={true} className='text-center mt-5'>
                            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                                {
                                    isAndroid
                                        ?
                                        <img src={PlayStoreBadge} alt="Get it on PlayStore" width={200}/>
                                        :
                                        <img src={AppStoreBadge} alt="Get it on AppStore" width={200}/>
                                }
                            </a>
                        </Container>
                    </Container>
                </div>
            </MobileOnlyView>
        );
    }
}

export default LoginMobileView;
