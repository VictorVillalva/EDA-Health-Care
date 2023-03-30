//Hooks
import React, {useContext, useEffect, useState} from 'react';
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
import {TokenContext} from "../context/TokenContext.jsx";
import {UserContext} from "../context/UserContext.jsx";
import Swal from "sweetalert2";
import axios from "axios";
import DataDiagnostic from "../Card/DataDiagnostic.jsx";


const HomePage = () => {
    //navigate
    // const navigate =useNavigate();
    //context variables
    const {token}=useContext(TokenContext);
    const {user}=useContext(UserContext);

    const [username, setUsername]=useState('');
    const [photoUrl, setPhotoUrl]=useState('');
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch(`https://healthcares.ddns.net/patient/${user}`,{
            headers:{
                "x-access-token":`${token}`
            }
        })  .then((response) => response.json())
            .then((data) => {setPhotoUrl(data.photoURL); setUsername(data.name +' '+data.lastName)})
            .catch((err) =>
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'User not Found!',
                    footer: '<b>error?</b><br/><span>Verifique que la informacion sea correcta e intente de nuevo</span>'
                })
            )},[])

    useEffect(()=>{
        fetch(`https://healthcares.ddns.net/diagnosis/${user}`,{
            headers:{
                "x-access-token":`${token}`
            }
        })  .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
            .catch((err) =>
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'User not Found!',
                    footer: '<b>error?</b><br/><span>Verifique que la informacion sea correcta e intente de nuevo</span>'
                })
            )},[])



  return (
    <>
    <section className="headerUserHome"><Header /></section>
    <section className="perfilUser">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <div className="perfil-circle">
                        <img className="subirfoto-label" src={photoUrl}/>
                    </div>
                </div>
                <div className="col-5">
                    <div className="datosUserWelcome">
                        <h1 className="welcomeUser">Bienvenido</h1>
                        <span className='nameUser'>{username}</span>
                    </div>
                </div>
                <div className="col-2">
                    <div className="diagnosticoDiv">
                        <span className="textActionUser">Realizar Diagnotico</span>
                        <a href="/test">
                        <img src={diag} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-2">
                    <div className="diagnosticoDiv">
                        <span className="textActionUser">Emparejamiento</span>
                        <a href="/sync">
                            <img src={sincro} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    </section>
    <hr />
    <section className="estatusPaciente">
        <div className="row">
            <div className="col-12">
                <h2 className='textEstatusDelPaciente'>
                    Estatus de Salud
                </h2>
            </div>
        </div>

        {
            data && data.map(d=>(
                <DataDiagnostic
                key={d.id}
                headache={d.headache}
                earBuzz={d.earBuzz}
                epigastricPain={d.epigastricPain}
                swelling={d.swelling}
                />
            ))
        }

    </section>
    <section className='footerUserPage'><Footer /></section>
    </>
  )
}

export default HomePage
