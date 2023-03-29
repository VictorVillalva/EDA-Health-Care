import React from 'react'
import { useState } from 'react';
//Components
import Header from '../components/HeaderWhite';
import Footer from '../components/Footer';
import Button10 from '../Atom/Button10';
//Image
import user from '../assets/Images/ContactsBlack.svg';
//CSS
import '../assets/Styles/adminPage.css';

const AdminPage = () => {
    const [createDoctor, setCreateDoctor] = useState(false);
    const [nombreDoctor, setNombreDoctor] = useState('');
    const [apellidoDoctor, setApellidoDoctor] = useState('');
    const [cedulaDoctor, setCedulaDoctor] = useState('');
    const [telDoctor, setTelDoctor] = useState('');
    const [emailDoctor, setEmailDoctor] = useState('');
    const [passwordDoctor, setPasswordDoctor] = useState('');


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
            <div className="row">
                <div className="col-2">
                    <div className="perfil-circle">
                        <img className="subirfoto-label"/>
                    </div>
                </div>
                <div className="col-2">
                    <h1 className="title-admin">Bienvenido</h1>
                    <span className='nameAdmin'>Nombre de admin</span>
                </div>
            </div>
        </div>
    </section>
    <hr />
    <section className='adminActions'>
        <div className="container">
            <div className="row adminAction">
                <div className="col-1"></div>
                <div className="col-4">
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
                            <form action="">
                                <div className="createDoctorItems">
                                    <span className='optionDoctor'>Nombre</span>
                                    <input type="text" className='inputDoctor' value={nombreDoctor} required/>
                                    <span className='optionDoctor'>Apellidos</span>
                                    <input type="text" className='inputDoctor' value={apellidoDoctor} required/>
                                    <span className='optionDoctor'>Cedula Profesional</span>
                                    <input type="number" className='inputDoctor' value={cedulaDoctor} required/>
                                    <span className='optionDoctor'>Numero Telefonico</span>
                                    <input type="tel" className='inputDoctor' value={telDoctor} required/>
                                    <span className='optionDoctor'>Correo Electronico</span> 
                                    <input type="email" className='inputDoctor' value={emailDoctor} required/>
                                    <span className='optionDoctor'>Contraseña</span>
                                    <input type="password" className='inputDoctor' value={passwordDoctor} required/>
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
            <div className="row">
                <div className="col-12">
                    <div className="viewDoctor">
                        <div className="dataDoctor">
                            <div className="iconEstatus">
                                <img src={user} alt="" />
                            </div>
                            <div className="dataDoctorEstatus">
                                <span className='optionDataDoctor'>Doctor: </span>
                                <span>Name doctor</span>
                            </div>    
                            <div className="dataDoctorEstatus">
                                <span className='optionDataDoctor'>Numero de cedula: </span>
                                <span>19293883</span>
                            </div>    
                            <div className="dataDoctorEstatus">
                                <span className='optionDataDoctor'>Correo Electronico: </span>
                                <span>asdfghjklñ</span>
                            </div>    
                            <div className="dataDoctorEstatus">
                                <span className='optionDataDoctor'>Numero de cedula: </span>
                                <span>19293883</span>
                            </div>    
                            <div className="dataDoctorEstatus">
                                <span className='optionDataDoctor'>Numero de cedula: </span>
                                <span>19293883</span>
                            </div> 
                            <div className="iconEstatus">
                                <button className='eliminateDoctor'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M9.061 8l3.97-3.97a.75.75 0 0 0-1.06-1.06L8 6.939 4.03 3.03a.75.75 0 0 0-1.06 1.06L6.939 8l-3.97 3.97a.75.75 0 1 0 1.06 1.06L8 9.061l3.97 3.97a.75.75 0 0 0 1.06-1.06L9.061 8z"/>
                                    </svg>
                                </button>
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
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
