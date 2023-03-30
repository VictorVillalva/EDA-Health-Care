//HOOKS
import {useState, useEffect, useContext} from 'react';
import {TokenContext} from "../context/TokenContext.jsx";
import {UserContext} from "../context/UserContext.jsx";
//CSS
import '../assets/Styles/formLogin.css';
import Swal from 'sweetalert2'
//Images
//Atomos
import Button1 from '../Atom/Button1';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const FormLogin = () => {
    //navigate
    const navigate =useNavigate();
    //context variables
    const {setToken}=useContext(TokenContext);
    const {setUser}=useContext(UserContext);

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
                email,password
            }).then(function (res) {
                console.log(res.data)
                setToken(res.data.token);
                setUser(res.data.id);
                const role = res.data.role;
                axios.get(`https://healthcares.ddns.net/roles/${role}`)
                    .then(function (res) {
                        const rol = res.data.name;
                        switch (rol) {
                            case 'admin':{
                                navigate('/admin');
                            }break;
                            case 'patient':{
                                navigate('/userHome');
                            }break;
                            case 'doctor':{
                                navigate('/homeDoctor');
                            }break;

                        }


                    })
                    .catch()
            }).catch(function (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
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
