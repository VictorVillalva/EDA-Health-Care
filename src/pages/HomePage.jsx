//Hooks
import React from 'react';
//Image
import diag from '../assets/Images/diagnostico.svg';
import sincro from '../assets/Images/sicronizar.svg';
import user from '../assets/Images/ContactsBlack.svg';
import share from '../assets/Images/ShareBlack.svg';
//Components
import Header from '../components/HeaderWhite';
import Footer from '../components/Footer';
import EstatusDiagnostico from '../Card/EstatusDiagnostico';

//CSS
import '../assets/Styles/homePage.css';


const HomePage = () => {
  return (
    <>
    <section className="headerUserHome"><Header /></section>
    <section className="perfilUser">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <div className="perfil-circle">
                        <img className="subirfoto-label"/>
                    </div>
                </div>
                <div className="col-5">
                    <div className="datosUserWelcome">
                        <h1 className="welcomeUser">Bienvenido</h1>
                        <span className='nameUser'>{"nombre de usuario va aqui"}</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="diagnosticoDiv">
                        <span className="textActionUser">Realizar Diagnotico</span>
                        <img src={diag} alt="" />
                    </div>
                </div>
                <div className="col-2">
                    <div className="diagnosticoDiv">
                        <span className="textActionUser">Emparejamiento</span>
                        <img src={sincro} alt="" />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    </section>
    <hr />
    <section className="estatusPaciente">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className='textEstatusDelPaciente'>
                        Estatus de Salud
                    </h2>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="estatus">
                        <div className="informationUser">
                            <div className="iconUser">
                                <img src={user} alt="" />
                            </div>
                            <div className="sintomasUser">
                                <span className='sintoma'>Paciente (x)</span>
                            </div>
                            <div className="sintomasUser">
                                <span className='sintoma'>Sintoma uno img (x)</span>
                            </div>
                            <div className="sintomasUser">
                                <span className='sintoma'>Sintoma uno img (x)</span>
                            </div>
                            <div className="sintomasUser">
                                <span className='sintoma'>Sintoma uno img (x)</span>
                            </div>
                            <div className="iconUser">
                                <img src={share} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <div className="row">
                <EstatusDiagnostico />
            </div>
        </div>
    </section>
    <section className='footerUserPage'><Footer /></section>
    </>
  )
}

export default HomePage
