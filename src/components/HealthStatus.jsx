
import '../assets/Styles/healthStatus.css';
import userIcon from '../assets/Images/user_black.png';
import shareIcon from '../assets/Images/share.png';
//HOOKs
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
//CSS
import '../assets/Styles/doctorPage.css';
import "react-circular-progressbar/dist/styles.css";



const HealthStatus = () => {
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

    const [headache, setHeadache] = useState(null);
    const [earBuzzing, setEarBuzzing] = useState(null);
    const [epigastricPain, setEpigastricPain] = useState(null);
    const [estatusPacient, setEstatusPacient] = useState(false);
    const [porcentaje, setPorcentaje] = useState(0);

    const togglerPacient = () =>{
        setEstatusPacient(!estatusPacient);
    }
    if(estatusPacient){
        document.body.classList.add('active-pacient');
    } else {
        document.body.classList.remove('active-pacient');
    }

    return (
        <>
            <div className="vital-signs-container">
                <img className="user-icon" src={userIcon} alt="User Icon" />
                <div className="vital-signs">
                    <span className="vital-signs-title">Signos Vitales:</span>
                    <span className="vital-signs-item">Dolor de Cabeza:{headache === true && <Checkmark />} {headache === false && <Xmark />}</span>
                    <span className="vital-signs-item">Zumbido de Oido:{earBuzzing === true && <Checkmark />} {earBuzzing === false && <Xmark />}</span>
                    <span className="vital-signs-item">Dolor en el Epigastrio:{epigastricPain === true && <Checkmark />} {epigastricPain === false && <Xmark />}</span>
                </div>
                <button className="share-button" onClick={togglerPacient}><img className="share-icon" src={shareIcon} alt="Share Icon" /></button>
                {estatusPacient && (
                                <div className="newPacient">
                                    <div  onClick={togglerPacient} className="overlay">
                                        <div className="pacient-content">
                                            <div className="title-estatus">
                                                <h1 className='pacienteProgresoEstatus'>Estatus de Diagnostico</h1>
                                            </div>
                                            <div className="name-pacient">
                                                <h6 className='pacienteProgresoEstatus'>Nombre paciente</h6>
                                            </div>
                                            <div className="estatusDataPacient">
                                                <h5 className='pacienteProgresoEstatus'>Ritmo Cardiaco</h5>
                                                <h5 className='pacienteProgresoEstatus'>--aqui va ritmo cardiado--</h5>
                                                <h5 className='pacienteProgresoEstatus'>Signos Vitales</h5>
                                                <h5 className='pacienteProgresoEstatus'>--aqui va signos vitales--</h5>
                                            </div>
                                            <div className="barra">
                                                <div className="progressDiagnostico">
                                                    <CircularProgressbar 
                                                    styles={buildStyles({
                                                        pathColor: '#F71735',
                                                        textColor: '#000000'
                                                    })}
                                                    value={porcentaje}
                                                    text={`${porcentaje}`}
                                                    />
                                                </div>
                                            </div>
                                            <div className="notificar">
                                                <h5 className='pacienteProgresoEstatus'>¿Desea notificar la situacion?</h5>
                                                <div className="button-decision">
                                                    <button className='button1'>Si</button>
                                                    <button className='button1'>No</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                )}
            </div>
        </>
    );
};

export default HealthStatus;

