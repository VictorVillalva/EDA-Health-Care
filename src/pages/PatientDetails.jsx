import React, { useState } from 'react';
import FormUpdate from './FormUpdate';

const PatientDetails = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [editing, setEditing] = useState(false);

    //Datos para probar que esto funciona
    const [patient, setPatient] = useState({
        firstName: 'Juan',
        lastName: 'Pérez',
        weight: 80,
        height: 1.8,
        phone: '+1234567890',
        email: 'juan.perez@example.com',
        password: 'password123'
    });

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = (newPatient) => {
        // Aquí se podría enviar la información actualizada del paciente al servidor
        // mediante una llamada a una API

        setEditing(false);
        setPatient(newPatient);
        console.log('Datos actualizados del paciente:', newPatient);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Peso (kg)</th>
                        <th>Altura (m)</th>
                        <th>Numero Telefonico</th>
                        <th>Correo Electronico</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{patient.firstName}</td>
                        <td>{patient.lastName}</td>
                        <td>{patient.weight}</td>
                        <td>{patient.height}</td>
                        <td>{patient.phone}</td>
                        <td>{patient.email}</td>
                        <td>{showPassword ? patient.password : '********'}</td>
                        <td>

                        </td>
                        <td>
                            <button onClick={toggleShowPassword}>
                                {showPassword ? 'Ocultar contraseñas' : 'Mostrar contraseñas'}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {editing ? (
                <FormUpdate patient={patient} onSubmit={handleSave} />
            ) : (
                <button onClick={handleEdit}>Editar datos</button>
            )}
        </>
    );
};

export default PatientDetails;