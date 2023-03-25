import React from 'react';
import Footer from '../components/Footer';
import HeaderWhite from "../components/HeaderWhite.jsx";
import UserImageAndName from "../components/UserImageAndName.jsx";
import '../assets/Styles/userPage.css';
import ButtonDiagnostic from "../Atom/ButtonDiagnostic.jsx";
import ButtonPairing from "../Atom/ButtonPairing.jsx";
import HealthStatus from "../components/HealthStatus.jsx";


function UserPage(props) {
    return (
        <>
            <section className='headerUserPage'>
                <div className="container">
                    <div className="row"><HeaderWhite /></div>
                </div>
                <div className="user">
                    <UserImageAndName name="John Smith" imageSrc="src/assets/Images/UserImageTest.jpg" />

                </div>
                <div className="buttons">
                    <ButtonDiagnostic className="btn"/>
                    <ButtonPairing className="btn" />
                </div>
            </section>

            <hr className="separator" />

            <section className="userContent">
                <div className="container">
                    <div className="health-status">
                        <span>Estatus de Salud</span>
                        <div className="health-status-component">
                            <HealthStatus />
                        </div>
                    </div>
                </div>
            </section>


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

export default UserPage;
