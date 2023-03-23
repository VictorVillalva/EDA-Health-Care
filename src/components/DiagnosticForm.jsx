import React from 'react';
import '../assets/Styles/diagnosticForm.css';


function DiagnosticForm(props) {
    return (
        <>
            <div>
                <form className="register-form">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required/>

                    <label htmlFor="apellidos">Apellidos:</label>
                    <input type="text" id="apellidos" name="apellidos" required/>


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

                    <button className="actualizar-btn" type="submit">Actualizar</button>
                </form>
            </div>
        </>
    );
}

export default DiagnosticForm;
