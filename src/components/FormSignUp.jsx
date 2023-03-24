import React from 'react';
import '../assets/Styles/formSignUp.css';
import ButtonEntrar from "../Atom/ButtonEntrar.jsx";

function FormSignUp(props) {
    return (
        <>
            <div className="col-6">
                <form className="register-form">
                    <div className="components-form">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required/>

                        <label htmlFor="apellidos">Apellidos:</label>
                        <input type="text" id="apellidos" name="apellidos" required/>

                        <label>Género:</label>
                        <div>
                            <label htmlFor="masculino">
                                <input type="checkbox" id="masculino" name="genero"/>
                                Masculino
                            </label>
                            <label htmlFor="femenino">
                                <input type="checkbox" id="femenino" name="genero"/>
                                Femenino
                            </label>
                        </div>

                        <label htmlFor="fecha-nacimiento" className="birthDate">Fecha de nacimiento:</label>
                        <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" required/>

                        <label htmlFor="peso">Peso (kg):</label>
                        <input type="number" id="peso" name="peso" required/>

                        <label htmlFor="altura">Altura (cm):</label>
                        <input type="number" id="altura" name="altura" required/>

                        <label htmlFor="telefono">Número telefónico:</label>
                        <input type="tel" id="telefono" name="telefono" required/>

                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required/>

                        <label htmlFor="contrasena">Contraseña:</label>
                        <input type="password" id="contrasena" name="contrasena" required/>

                        <label htmlFor="tiene-doctor">¿Tiene doctor?</label>
                        <input type="checkbox" id="tiene-doctor" name="tiene-doctor"/>

                        <ButtonEntrar />
                    </div>
                </form>
            </div>
        </>
    );
}

export default FormSignUp;
