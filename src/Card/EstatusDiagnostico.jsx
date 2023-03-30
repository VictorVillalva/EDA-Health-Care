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


const EstatusDiagnostico = () => {
    const navigate = useNavigate();
    const {user} = useContext(UserContext)
    const [bpm, setBPM] = useState(0);
    const [barraRitmoCardiaco, setBarraRitmoCardiaco] = useState(0);
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




    const [barraSignosVitales, setBarraSignosVitales] = useState(50);

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
                <ProgressBar variant="danger" now={barraRitmoCardiaco} />
            </div>
            <div className="signosVitales">
              <h5 className='textSignosVitales'>Signos Vitales</h5>
                <ProgressBar variant="danger" now={barraSignosVitales} />
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
        <div className="row">
          <div className="botonSalirDiagnostico">
            <button className='button1' onClick={()=>navigate('/userHome')}>Salir</button>
          </div>
        </div>
    </div>
  )
}

export default EstatusDiagnostico;

