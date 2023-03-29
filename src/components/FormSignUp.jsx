import React from 'react';
import '../assets/Styles/formSignUp.css';
import '../assets/Styles/formLogin.css';
import ButtonEntrar from "../Atom/ButtonEntrar.jsx";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";


function FormSignUp(props) {
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        genero: '',
        fechaNacimiento: '',
        peso: '',
        altura: '',
        telefono: '',
        email: '',
        contrasena: '',
        nombreContactoEmergencia: '',
        numeroContactoEmergencia: '',
        emailContactoEmergencia: '',
        claveDoctor:'',
        tieneDoctor: false,
    });

    const [error, setError] = useState(false);

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // a
        //Validacion de Fornulario
        // if([formData.nombre,formData.altura,formData.apellidos,formData.genero,formData.email,formData.contrasena,formData.peso,formData.telefono,formData.tieneDoctor,formData.fechaNacimiento].includes('')){ //Includes verifica
        //     console.log('Hay campos vacios')
        //     setError(true);
        //     return
        // }
        // setError(false);

        axios.post('https://healthcares.ddns.net/auth/signUp',{
         name:formData.nombre,
         lastname:formData.apellidos,
         gender: formData.genero,
         dateOfBirth:formData.fechaNacimiento,
         weight: formData.peso,
         height: formData.altura,
         phoneNumber: formData.telefono,
         email: formData.email,
         password:formData.contrasena,
         primaryDoctorId: formData.claveDoctor,
            photoURL: '',
            emergencyContact:{
                contactName:formData.nombreContactoEmergencia,
                contactPhoneNumber: formData.numeroContactoEmergencia,
                contactEmail:formData.emailContactoEmergencia
            }

        }).then(function (res) {

            navigate('/login')
        }).catch(function (err) {
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo ah salido mal, intenta de nuevo mas tarde o verifica tus credenciales',
                footer: '<a href="">recargar pagina</a>'
            })
        })
    };

        //show "clave doctor"
        const [hasDoctor, setHasDoctor] = useState({
            tieneDoctor: false,
            claveDoctor: ""
        });
        const [showClaveDoctorInput, setShowClaveDoctorInput] = useState(false);
        const handleInputChangeHasDoctor = (event) => {
            const target = event.target;
            const value = target.type === "checkbox" ? target.checked : target.value;
            const name = target.name;

            if (name === "tieneDoctor") {
                setShowClaveDoctorInput(value);
            }
            setFormData({
                ...formData,
                [name]: value
            });
        };
    return (
        <>
            <div className="col-6 formSingUp">
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="components-form">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="apellidos">Apellidos:</label>
                        <input
                            type="text"
                            id="apellidos"
                            name="apellidos"
                            value={formData.apellidos}
                            onChange={handleInputChange}
                            required
                        />

                        <label>Género:</label>
                        <div className='generos'>
                            <label htmlFor="masculino">
                                <input
                                    type="checkbox"
                                    id="masculino"
                                    name="genero"
                                    value="masculino"
                                    checked={formData.genero === 'masculino'}
                                    onChange={handleInputChange}
                                />
                                Masculino
                            </label>
                            <label htmlFor="femenino">
                                <input
                                    type="checkbox"
                                    id="femenino"
                                    name="genero"
                                    value="femenino"
                                    checked={formData.genero === 'femenino'}
                                    onChange={handleInputChange}
                                />
                                Femenino
                            </label>
                        </div>

                        <label htmlFor="fecha-nacimiento" className="birthDate">
                            Fecha de nacimiento:
                        </label>
                        <input
                            type="date"
                            id="fecha-nacimiento"
                            name="fechaNacimiento"
                            value={formData.fechaNacimiento}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="peso">Peso (kg):</label>
                        <input
                            type="number"
                            id="peso"
                            name="peso"
                            value={formData.peso}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="altura">Altura (m):</label>
                        <input
                            type="number"
                            id="altura"
                            name="altura"
                            value={formData.altura}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="telefono">Número telefónico:</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="email">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="contrasena">Contraseña:</label>
                        <input
                            type="password"
                            id="contrasena"
                            name="contrasena"
                            value={formData.contrasena}
                            onChange={handleInputChange}
                            required
                        />
                        {/*missing emergency contact*/}
                        <label htmlFor="nombreContactoEmergencia">Nombre Contacto de emergencia::</label>
                        <input
                            type="text"
                            id="nombreContactoEmergencia"
                            name="nombreContactoEmergencia"
                            value={formData.nombreContactoEmergencia}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="numeroContactoEmergencia">numero telofonico de emergencia:</label>
                        <input
                            type="tel"
                            id="numeroContactoEmergencia"
                            name="numeroContactoEmergencia"
                            value={formData.numeroContactoEmergencia}
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="emailContactoEmergencia">Correo electrónico de emergencia:</label>
                        <input
                            type="email"
                            id="emailContactoEmergencia"
                            name="emailContactoEmergencia"
                            value={formData.emailContactoEmergencia}
                            onChange={handleInputChange}
                            required
                        />
                        {/*till here*/}

                        <div>
                            <label htmlFor="tiene-doctor">
                                ¿Tiene un doctor asignado?
                                <input
                                    type="checkbox"
                                    id="tiene-doctor"
                                    name="tieneDoctor"
                                    checked={formData.tieneDoctor}
                                    onChange={handleInputChangeHasDoctor}
                                />
                            </label>
                        </div>
                        {showClaveDoctorInput && (
                            <div>
                                <label htmlFor="clave-doctor">Ingrese clave del doctor:</label>
                                <input
                                    type="text"
                                    id="clave-doctor"
                                    name="claveDoctor"
                                    value={formData.claveDoctor}
                                    onChange={handleInputChange}
                                />
                            </div>
                        )}
                        <div className="submit-button">
                            <ButtonEntrar buttonText="Registrarse" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FormSignUp;
