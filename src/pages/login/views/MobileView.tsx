import React, {Component} from 'react';
import {MobileOnlyView} from "react-device-detect";

class Mobile extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <MobileOnlyView>
                <div className='d-flex justify-content-center align-items-center'>
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
                </div>
            </MobileOnlyView>
        );
    }
}

export default Mobile;
