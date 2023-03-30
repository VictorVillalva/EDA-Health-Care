//HOOKs
import React, {useState, useEffect, useContext} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
//Components
import Header from '../components/HeaderWhite';
import Footer from '../components/Footer';

//CSS
import '../assets/Styles/doctorPage.css';
import "react-circular-progressbar/dist/styles.css";
//Image
import user from '../assets/Images/ContactsBlack.svg';
import share from '../assets/Images/ShareBlack.svg';
import {TokenContext} from "../context/TokenContext.jsx";
import {UserContext} from "../context/UserContext.jsx";
import Swal from "sweetalert2";
import axios from "axios";

const DoctorPage = () => {
    //navigate
    // const navigate =useNavigate();
    //context variables
    const {token}=useContext(TokenContext);
    const {user}=useContext(UserContext);

    const [username, setUsername]=useState('');
    const [photoUrl, setPhotoUrl]=useState('');

    useEffect(()=>{
        fetch(`https://healthcares.ddns.net/doctor/${user}`,{
            headers:{
                "x-access-token":`${token}`
            }
        })  .then((response) => response.json())
            .then((data) => {setPhotoUrl(data.photoURL); setUsername(data.name +' '+data.lastName)})
            .catch((err) =>
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'data error!',
                    footer: '<b>error? </b><br/><span> encontramos un error, espacio en mantenimento</span>'
                })
            )},[])

    const [pacient, setPacient] = useState([]);
    const [headache, setHeadache] = useState(null);
    const [earBuzzing, setEarBuzzing] = useState(null);
    const [epigastricPain, setEpigastricPain] = useState(null);
    const [estatusPacient, setEstatusPacient] = useState(false);
    const [porcentaje, setPorcentaje] = useState(0);

    // useEffect(() =>{
    //     axios.post('https://healthcares.ddns.net/patient/doctor',{
    //         primaryDoctorId:`${user}`
    //     },{
    //         headers:{
    //             "x-access-token":`${token}`
    //         }
    //     }).then(function (res) {
    //         setData(res.data)
    //         console.log(data)
    //     }).catch(function (err) {
    //         console.log(err)
    //     })
    // },[])


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
    <section className='headerDoctorPage'>
        <Header />
    </section>
    <section className='doctorData'>
        <div className="container">
            <div className="row titleDoctorDataNameImage">
                <div className="col-2">
                    <div className="perfil-circle">
                        <img className="subirfoto-label" src={photoUrl}/>
                    </div>
                </div>
                <div className="col-2 nameDoctorTitle">
                    <h1 className='title-doctor'>Bienvenido</h1>
                    <span className='nameDoctor'>{username}</span>
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
