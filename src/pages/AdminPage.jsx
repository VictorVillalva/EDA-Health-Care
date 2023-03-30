import React, {useContext, useEffect} from 'react'
import { useState } from 'react';
//Components
import Header from '../components/HeaderWhite';
import Footer from '../components/Footer';
import Button10 from '../Atom/Button10';
//Image
import user from '../assets/Images/ContactsBlack.svg';
//CSS
import '../assets/Styles/adminPage.css';
import {useNavigate} from "react-router-dom";
import {TokenContext} from "../context/TokenContext.jsx";
import {UserContext} from "../context/UserContext.jsx";
import Swal from "sweetalert2";
import DoctorCard from "../Card/DoctorCard.jsx";
import axios from "axios";

const AdminPage = () => {
    //navigate
   // const navigate =useNavigate();
    //context variables
    const {token}=useContext(TokenContext);
    const {user}=useContext(UserContext);

    const [username, setUsername]=useState('');
    const [photoUrl, setPhotoUrl]=useState('');
    const [data, setData]=useState([]);

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

    //card use Effect
    useEffect(()=>{
        fetch('https://healthcares.ddns.net/doctor/all',{
            headers:{
                "x-access-token":`${token}`
            }
        }).then((response)=>response.json())
            .then(data=>setData(data)).catch(
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'connection error!',
                footer: '<b>error?</b><br/><span>Verifique que la informacion sea correcta e intente de nuevo</span>'
            })
        )
    },[])


    const [createDoctor, setCreateDoctor] = useState(false);
    const [nombreDoctor, setNombreDoctor] = useState('');
    const [apellidoDoctor, setApellidoDoctor] = useState('');
    const [cedulaDoctor, setCedulaDoctor] = useState('');
    const [telDoctor, setTelDoctor] = useState('');
    const [emailDoctor, setEmailDoctor] = useState('');
    const [passwordDoctor, setPasswordDoctor] = useState('');

    const handlerChangeName =(e)=>{
        setNombreDoctor(e.target.value)
    }
    const handlerChangelastName =(e)=>{
        setApellidoDoctor(e.target.value)
    }
    const handlerChangeCedula =(e)=>{
        setCedulaDoctor(e.target.value)
    }
    const handlerChangePhone =(e)=>{
        setTelDoctor(e.target.value)
    }
    const handlerChangeEmail =(e)=>{
        setEmailDoctor(e.target.value)
    }
    const handlerChangePassword =(e)=>{
        setPasswordDoctor(e.target.value)
    }


const CreateDoctor =(e)=>{
        e.preventDefault();
    console.log('oh no')

    axios.post('https://healthcares.ddns.net/doctor',{
     name:nombreDoctor,
     lastName:apellidoDoctor,
     gender:'doctor',
     dateOfBirth:'',
     phoneNumber: telDoctor,
     email:emailDoctor,
     password:passwordDoctor,
     photoURL:'',
     medicalCardId:cedulaDoctor,
    role:"doctor"
    },{
        headers:{
            "x-access-token": `${token}`
        }
    }).then(function (res) {
        console.log(res)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1500
        })
    }).catch(function (err){
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'creation not possible!',
            footer: '<b>error?</b><br/><span>Verifique que la informacion sea correcta e intente de nuevo</span>'
        })
    })

}
    const toggleDoctor = () =>{
        setCreateDoctor(!createDoctor);
    }
    if(createDoctor){
        document.body.classList.add('active-doctor');
    }else{
        document.body.classList.remove('active-doctor');
    }

  return (
    <>
    <section className='headerAdminPage'>
        <Header />
    </section>
    <section className='adminData'>
        <div className="container">
            <div className="row titleAdminDataNameImage">
                <div className="col-2">
                    <div className="perfil-circle">
                        <img className="subirfoto-label" src={photoUrl}/>
                    </div>
                </div>
                <div className="col-2 nameAdminTitle">
                    <h1 className="title-admin">Bienvenido</h1>
                    <span className='nameAdmin'>{username}</span>
                </div>
            </div>
        </div>
    </section>
    <hr />
    <section className='adminActions'>
        <div className="container">
            <div className="row adminAction">
                <div className="col-1"></div>
                <div className="col-4 opcAdministrador">
                    <span className="textAdminAction">
                        Opciones de administrador
                    </span>
                </div>
                <div className="col-7"></div>
            </div>
            <div className="row createDoctor">
            <div className="col-1"></div>
                <div className="col-4">
                    <form action=''>
                        <div className="checkCreateDoctor">
                            <span className='textCreateDoctor'>Crear cuenta doctor</span>
                            <input
                            type="checkbox"
                            name="createDoctor"
                            onClick={toggleDoctor}
                            />
                        </div>
                    </form>
                    {createDoctor && (
                        <div className="newDoctor">
                        <div onClick={toggleDoctor} className="overlay"></div>
                        <div className="doctor-content">
                            <form action=" " onSubmit={CreateDoctor}>
                                <div className="createDoctorItems">

                                    <span className='optionDoctor'>Nombre</span>
                                    <input type="text" className='inputDoctor' value={nombreDoctor} onChange={handlerChangeName} required/>
                                    <span className='optionDoctor'>Apellidos</span>
                                    <input type="text" className='inputDoctor' value={apellidoDoctor} onChange={handlerChangelastName} required/>
                                    <span className='optionDoctor'>Cedula Profesional</span>
                                    <input type="text" className='inputDoctor' value={cedulaDoctor} onChange={handlerChangeCedula} required/>
                                    <span className='optionDoctor'>Numero Telefonico</span>
                                    <input type="tel" className='inputDoctor' value={telDoctor} onChange={handlerChangePhone} required/>
                                    <span className='optionDoctor'>Correo Electronico</span>
                                    <input type="email" className='inputDoctor' value={emailDoctor} onChange={handlerChangeEmail} required/>
                                    <span className='optionDoctor'>Contraseña</span>
                                    <input type="password" className='inputDoctor' value={passwordDoctor} onChange={handlerChangePassword} required/>

                                </div>
                                <div className="button10div">
                                    <Button10 />
                                </div>
                            </form>
                        </div>
                      </div>
                    )}
                </div>
                <div className="col-7"></div>
            </div>
           {/*aca va la card*/}
            {
              data && data.map(d =>(
                  <DoctorCard
                      key={d._id}
                      name={d.name}
                      medicalCardId={d.medicalCardId}
                      email={d.email}
                      phoneNumber={d.phoneNumber}
                  />

                ))
            }
        </div>
    </section>
    <hr />
    <section className='footerAdminPage'>
        <Footer />
    </section>
    </>
  )
}

export default AdminPage
