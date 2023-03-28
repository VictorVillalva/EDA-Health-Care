import React, { useState } from 'react';
import FormUpdateDoctor from '../organismo/FormUpdateDoctor';

const DoctorDetails = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [editing, setEditing] = useState(false);

    //Datos para probar que esto funciona
    const [doctor, setDoctor] = useState({
        firstName: 'Juan',
        lastName: 'Pérez',
        ident: '80197369433',
        phone: '+1234567890',
        email: 'juan.perez@example.com',
        password: 'password123'
    });

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = (newDoctor) => {
        // Aquí se podría enviar la información actualizada del paciente al servidor
        // mediante una llamada a una API

        setEditing(false);
        setDoctor(newDoctor);
        console.log('Datos actualizados del paciente:', newDoctor);
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
                        <th>Cedula Profesional (kg)</th>
                        <th>Numero Telefonico</th>
                        <th>Correo Electronico</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{doctor.firstName}</td>
                        <td>{doctor.lastName}</td>
                        <td>{doctor.ident}</td>
                        <td>{doctor.phone}</td>
                        <td>{doctor.email}</td>
                        <td>{showPassword ? doctor.password : '********'}</td>
                        <td>
                            <button onClick={toggleShowPassword}>
                                {showPassword ? 'Ocultar contraseñas' : 'Mostrar contraseñas'}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {editing ? (
                <FormUpdateDoctor doctor={doctor} onSubmit={handleSave} />
            ) : (
                <button onClick={handleEdit}>Editar datos</button>
            )}
        </>
    );
};

export default DoctorDetails;