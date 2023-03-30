//Hooks
import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

//CSS
import '../assets/Styles/estatusDiagnostico.css';
import '../assets/Styles/button10.css';
import ProgressBar from 'react-bootstrap/ProgressBar';


const EstatusDiagnostico = () => {
  const [porcentaje, setPorcentaje] = useState(20);

    const [barraRitmoCardiaco, setBarraRitmoCardiaco] = useState(20);
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
                value={porcentaje}
                text={`${porcentaje}`}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="botonSalirDiagnostico">
            <button className='button1'>Salir</button>
          </div>
        </div>
    </div>
  )
}

export default EstatusDiagnostico;

