//hooks
import React, { useState, useEffect } from 'react';
//CSS
import '../assets/Styles/userPage.css';
//COMPONENTES
import ButtonDiagnostic from "../Atom/ButtonDiagnostic.jsx";
import ButtonPairing from "../Atom/ButtonPairing.jsx";
import HealthStatus from "../components/HealthStatus.jsx";
import Footer from '../components/Footer';
import HeaderWhite from "../components/HeaderWhite.jsx";
import UserImageAndName from "../components/UserImageAndName.jsx";

function UserPage(props) {
    const [userData, setUserData] = useState('');
    const [diagnostic, setDiagnostic] = useState(false);

    const [estatusPacient, setEstatusPacient] = useState(false);
    const togglerPacient = () =>{
        setEstatusPacient(!estatusPacient);
    }
    if(estatusPacient){
        document.body.classList.add('active-pacient');
    } else {
        document.body.classList.remove('active-pacient');
    }



    // useEffect(() => {
    //     fetch('https://example-api.com/user-data')
    //         .then(response => response.json())
    //         .then(data => setUserData(data));
    // }, []);

    return (
        <>
            <section className='headerUserPage'>
                <div className="container">
                    <div className="row">
                        <HeaderWhite />
                    </div>
                </div>
                <div className="user">
                    <UserImageAndName name={userData.name} imageSrc={userData.imageSrc} />
                </div>
                <div className="buttons">
                    <div className="button-container-diagnostic">
                        <span className="button-text-diagnostic">Realizar Diagnostico</span>
                        <button className="base-btn-diagnostic" onClick={togglerPacient}>
                            <img src="src/assets/Images/buttonDiagnostic.png" className="diagnostic-btn" alt="Button Image"/>
                        </button>
                    </div>
                    {estatusPacient && (
                        <div className="newPacient">
                            <div  onClick={togglerPacient} className="overlay">
                                <div className="pacient-content">
                                    <div className="title-estatus">
                                        <h1 className='pacienteProgresoEstatus'>Diagnostico</h1>
                                    </div>
                                    <hr />
                                    <div className="estatusDataPacient">
                                        <h5 className='pacienteProgresoEstatus'>Dolor de Cabeza</h5>
                                        <div className="optionsDiag">
                                            <span>SI <input type="checkbox" /></span>
                                            <span>NO <input type="checkbox" /></span>
                                        </div>
                                        <h5 className='pacienteProgresoEstatus'>Zumbido de oidos</h5>
                                        <div className="optionsDiag">
                                            <span>SI <input type="checkbox" /></span>
                                            <span>NO <input type="checkbox" /></span>
                                        </div>
                                        <h5 className='pacienteProgresoEstatus'>Dolor en el epigastrio</h5>
                                        <div className="optionsDiag">
                                            <span>SI <input type="checkbox" /></span>
                                            <span>NO <input type="checkbox" /></span>
                                        </div>
                                        <h5 className='pacienteProgresoEstatus'>Edemas en miembros inferiores o superiores (hinchazón)</h5>
                                        <div className="optionsDiag">
                                            <span>SI <input type="checkbox" /></span>
                                            <span>NO <input type="checkbox" /></span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="iniciarDiag">
                                        <button className='button1'>Iniciar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <ButtonPairing className="btn" />
                </div>
            </section>
            <hr className="separator" />
            <section className="userContent">
                <div className="container userContentContainer">
                    <div className="health-status">
                        <span>Estatus de Salud</span>
                        <div className="health-status-component">
                            <HealthStatus />
                        </div>
                    </div>
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

export default UserPage;
