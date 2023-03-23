//HOOKS
import React, {useState, useEffect, useRef} from 'react';
//CSS
import '../assets/Styles/formLogin.css';
//Images
//Atomos
import Button1 from '../Atom/Button1';

const FormLogin = () => {
        
  return (
    <div className='container'>
        <div className="row">
            <div className="col-6">
            </div>
            <div className="col-5 columnasForm">
                <form action="" className='formLogin'>
                    <div className="formLoginComponentes">
                        <div className="componentes">
                            <span className="opt primerOpt">Email</span>
                            <input type="email" className='answer'/>
                            <span className="opt">Password</span>
                            <input type="password" className='answer confipers'/>
                            <div className="buttonEdir">
                                <Button1 />
                            </div>
                            <span className='linkRegistro primeroLink'>¿Aun no estas registrado?</span>
                            <span className='linkRegistro segundaLink'>Da <a className='linkR'> click aqui </a> para registrate</span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-1"></div>
        </div>
    </div>
  )
}

export default FormLogin
