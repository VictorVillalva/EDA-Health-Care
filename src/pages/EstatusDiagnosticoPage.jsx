import React from 'react';
import EstatusDiagnostico from "../Card/EstatusDiagnostico.jsx";
import HeaderWhite from "../components/HeaderWhite.jsx";
import Footer from "../components/Footer.jsx";

function EstatusDiagnosticoPage(props) {
    return (
        <>
            <section className='headerUserHome'>
                <div className="container">
                    <div className="row">
                        <HeaderWhite />
                    </div>
                </div>
            </section>
            <hr />
            <section className="userContent">
                <div className="status-diagnostic">
                    <EstatusDiagnostico />
                </div>
            </section>
            <hr className="separator" />
            <section className='footerUserHome'>
                <div className="container">
                    <div className="row footerCenter">
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
}

export default EstatusDiagnosticoPage;
