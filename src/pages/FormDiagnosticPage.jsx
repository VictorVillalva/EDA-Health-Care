import React, {useContext} from 'react';
import FormDiagnostic from "../Card/FormDiagnostic.jsx";
import HeaderWhite from "../components/HeaderWhite.jsx";
import Footer from "../components/Footer.jsx";

function FormDiagnosticPage(props) {


    return (
        <>
            <section className='headerUserDiag'>
                <div className="container">
                    <div className="row">
                        <HeaderWhite />
                    </div>
                </div>
            </section>
            <hr className="separator" />
            <section className="userContent">
                <div className="form-diagnostic">
                    <FormDiagnostic />
                </div>
            </section>

            <hr className="separator" />
            <section className='footerIndex'>
                <div className="container">
                    <div className="row footerCenter">
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
}

export default FormDiagnosticPage;
