import React from 'react'
import { useState } from 'react';
//Components
import Header from '../components/HeaderWhite';
import Footer from '../components/Footer';
//CSS
import '../assets/Styles/adminPage.css';

const AdminPage = () => {
    const [createDoctor, setCreateDoctor] = useState(false);

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
                          <h2>Hello Modal</h2>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                            perferendis suscipit officia recusandae, eveniet quaerat assumenda
                            id fugit, dignissimos maxime non natus placeat illo iusto!
                            Sapiente dolorum id maiores dolores? Illum pariatur possimus
                            quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                            placeat tempora vitae enim incidunt porro fuga ea.
                          </p>
                          <button className="close-doctor" onClick={toggleDoctor}>
                            CLOSE
                          </button>
                        </div>
                      </div>
                    )}
                </div>
                <div className="col-7"></div>
            </div>
        </div>
    </section>
    <section className='footerAdminPage'>
        <Footer />
    </section>
    </>
  )
}

export default AdminPage
