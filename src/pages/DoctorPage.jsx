import React, { useState, useEffect } from 'react'
//Components
import Header from '../components/HeaderWhite';
import Footer from '../components/Footer';
//CSS
import '../assets/Styles/doctorPage.css';

//Image
import user from '../assets/Images/ContactsBlack.svg';
import share from '../assets/Images/ShareBlack.svg';

const DoctorPage = () => {
    const [pacient, setPacient] = useState(null);
    const [headache, setHeadache] = useState(null);
    const [earBuzzing, setEarBuzzing] = useState(null);
    const [epigastricPain, setEpigastricPain] = useState(null);

    useEffect(() =>{
        fetch(`......`)
        .then(responde => responde.json())
        .then (data => setPacient(data.data))
    },[])

    const Checkmark = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check" viewBox="0 0 16 16">
            <path d="M12.97 3.97a.75.75 0 0 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.97 2.97 6.97-6.97z"/>
        </svg>
    );
    
    const Xmark = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M9.061 8l3.97-3.97a.75.75 0 0 0-1.06-1.06L8 6.939 4.03 3.03a.75.75 0 0 0-1.06 1.06L6.939 8l-3.97 3.97a.75.75 0 1 0 1.06 1.06L8 9.061l3.97 3.97a.75.75 0 0 0 1.06-1.06L9.061 8z"/>
        </svg>
    );

  return (
    <>
    <section className='headerDoctorPage'>
        <Header />
    </section>
    <section className='doctorData'>
        <div className="container">
            <div className="row titleDoctorDataNameImage">
                <div className="col-2">
                    <div className="perfil-circle">
                        <img className="subirfoto-label"/>
                    </div>
                </div>
                <div className="col-2 nameDoctorTitle">
                    <h1 className='title-doctor'>Bienvenido</h1>
                    <span className='nameDoctor'>NOmbre Doctor</span>   
                </div>
            </div>
        </div>
    </section>
    <hr />
    <section className="doctorActions">
        <div className="container">
            <div className="row doctorAction">
                <div className="col-1"></div>
                <div className="col-5 opcDoctor">
                    <span className='textDoctorEstatus'>
                        Estatus de salud de Pacientes
                    </span>
                </div>
            </div>
            <div className="row checkPacient">
                <div className="col-12">
                    {pacient && (
                    <div className="viewPacient">
                        <div className="dataPacient">
                            <div className="iconEstatus">
                                <img src={user} alt="" />
                            </div>
                            <div className="dataPacientEstatus">
                                <span className='optionDataPacient'>Paciente: <span>nombre</span></span>
                            </div>
                            <div className="dataPacientEstatus">
                                <span className='optionDataPacient'>Dolor de Cabeza: {headache === true && <Checkmark />} {headache === false && <Xmark />}</span>
                            </div>
                            <div className="dataPacientEstatus">Zumbido de Oido: {earBuzzing === true && <Checkmark />} {earBuzzing === false && <Xmark />}
                            </div>
                            <div className="dataPacientEstatus">Dolor en el Epigastrio:{epigastricPain === true && <Checkmark />} {epigastricPain === false && <Xmark />}
                            </div>
                            <div className="dataPacienteEstatus">
                                <button className='estatus'><img src={share} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    )} 
                </div>
            </div>
        </div>
    </section>
    <hr />
    <section className='footerDoctorPage'>
        <Footer />
    </section>
    </>
  )
}

export default DoctorPage;