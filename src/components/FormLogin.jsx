//HOOKS
import {useState, useEffect, useContext} from 'react';
import Swal from 'sweetalert2'

import axios from "axios";
//CSS
import '../assets/Styles/formLogin.css';
//Images
//Atomos
import Button1 from '../Atom/Button1';
import {UserContext} from "../context/UserContext.jsx";
import {TokenContext} from "../context/TokenContext.jsx";
import {useNavigate} from "react-router-dom";

const FormLogin = () => {
    const navigate =useNavigate();
    const {user,setUser} = useContext(UserContext)
    const {token,setToken} = useContext(TokenContext)
    //Declaracion de Variables para los campos que tenemos
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        //Validacion de Formulario
        if([ email,password ].includes('')){ //Includes verifica que al menos uno tenga campo vacion, manda que esta vacio
            console.log('Hay al menos un campo vacio')
            setError(true);
            return
        }
        setError(false);

        axios.post('https://healthcares.ddns.net/auth/signIn',{
            email, password
        }).then(function (res) {
            // console.log(res.data.token)
            setToken(res.data.token)


            navigate('/userPage')
        }).catch(function (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo ah salido mal, intenta de nuevo mas tarde o verifica tus credenciales',
                footer: '<a href="">recargar pagina</a>'
            })
        })


    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-5 columnasForm">
                <form action=""
                className='formLogin'
                onSubmit={handleSubmit}
                >
                    <div className="formLoginComponentes">
                        <div className="componentes">
                            <span className="opt primerOpt">Email</span>
                            <input
                            type="email"
                            className='answer'
                            value={email}
                            onChange={ (e) => setEmail(e.target.value) }
                            />
                            <span className="opt">Password</span>
                            <input
                            type="password"
                            className='answer confipers'
                            value={password}
                            onChange={ (e) => setPassword(e.target.value) }
                            />
                            <div className="buttonEdir">
                                <Button1 />
                            </div>
                            {error && (
                                <div className='alerta-login'>
                                    <span className='alerta-login-descripcion'>Todos los campos son obligatorios</span>
                                </div>
                            )}
                            <span className='linkRegistro primeroLink'>¿Aun no estas registrado?</span>
                            <span className='linkRegistro segundaLink'>Da <a className='linkR' href="signUp"> click aqui </a> para registrate</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormLogin
