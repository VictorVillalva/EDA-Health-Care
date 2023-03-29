import React from 'react';
import '../assets/Styles/formSignUp.css';
import '../assets/Styles/formLogin.css';
import ButtonEntrar from "../Atom/ButtonEntrar.jsx";
import {useState} from "react";


function FormSignUp(props) {

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

                        <label htmlFor="altura">Altura (cm):</label>
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
