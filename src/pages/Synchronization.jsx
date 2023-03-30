import React, {useContext} from 'react';
import { useState } from 'react';
//Components
import Header from '../components/Header';
import Footer from '../components/Footer';
//CSS
import '../assets/Styles/synchronization.css';
import {UserContext} from "../context/UserContext.jsx";

const Synchronization = () => {
    const [code, setCode] = useState('');
    const {user} =useContext(UserContext);

  return (
    <>
    <section className="headerSYNC">
        <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <span className='title-SYNC'>Codigo de Emparejamiento</span>
                    <div className="code">
                    <h3>{user}</h3>
                    </div>
                </div>
                <div className="buttonVolverSYNC">
                    <a href="/userHome"><button className='button-index'>Volver</button></a>
                </div>
            </div>
        </div>
    </section>
    <section className="footerSYNC">
        <Footer />
    </section>
    </>
  )
}

export default Synchronization;
