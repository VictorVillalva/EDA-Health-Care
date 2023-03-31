//Hooks
import {useContext, useEffect, useState} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

//CSS
import '../assets/Styles/estatusDiagnostico.css';
import '../assets/Styles/button10.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../context/UserContext.jsx";
import Swal from "sweetalert2";


const EstatusDiagnostico = () => {
    const navigate = useNavigate();
    const {user} = useContext(UserContext)
    const [bpm, setBPM] = useState(0);
    const [barraRitmoCardiaco, setBarraRitmoCardiaco] = useState(null);
    const [barraSignosVitales, setBarraSignosVitales] = useState(null);
    useEffect(()=>{
        axios.get(`https://healthcares.ddns.net/data/${user}`,).then(function (res) {
            console.log(res.data.bpm)
            setBPM(res.data.bpm)
            let bp = (bpm*12)/10
            setBarraRitmoCardiaco(bp)
        }).catch(function (err) {
            console.log(err)
        })
    },[])

    const sendNotification=()=>{

        axios.post('https://healthcares.ddns.net/sns/sendNotification',{
            message:"paciente en riesgo, ingrese a su centro de atencion medico mas cercano",
            subject:"ALERTA"
        },).then(function (res) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch(function (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo a salido mal,intente de nuevo!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        })
    }

    return (
    <div className='container cardEstatus'>
        <div className="row">
            <div className="informationEstatus">
                <h2>Estatus de Diagnostico</h2>
            </div>
        </div>
        <div className="row">
          <div className="estatusCard">
            <div className="ritmoCardiaco">
              <h5 className='textRitmoCardiaco'>Ritmo cardiaco</h5>
                <ProgressBar className="ritmo-cardiaco-barra" variant="danger" now={barraRitmoCardiaco} label={`${barraRitmoCardiaco}%`} />
            </div>
            <div className="signosVitales">
              <h5 className='textSignosVitales'>Signos Vitales</h5>
                <ProgressBar className="signos-vitales-barra" variant="danger" now={barraSignosVitales} label={`${barraSignosVitales}%`} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="barraDiagnostico">
            <div className="progressDiagnostico">
              <CircularProgressbar
                styles={buildStyles({
                          pathColor: '#F71735',
                          textColor: '#000000'
                        })}
                value={bpm}
                text={`${bpm}`}
              />
            </div>
          </div>
        </div>
        <div>
            <div className="notification">
                <h5 className='textNotificacion'>Desea notificar la situacion?</h5>
            </div>
            <div className="buttonContainer">
                <button className='button-si' onClick={sendNotification}>Si</button>
                <button className='button-no' onClick={()=>navigate('/userHome')}>No</button>
            </div>
        </div>
        <div className="row">
          <div className="botonSalirDiagnostico">
            <button className='button1' onClick={()=>navigate('/userHome')}>Salir</button>
          </div>
        </div>
    </div>
  )
}

export default EstatusDiagnostico;

