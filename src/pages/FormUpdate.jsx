import React, { useState } from "react";

import TextForm from "../atoms/TextForm";
import InputForm from "../atoms/InputForm";
import Button2 from "../molecules/Button2";
import '../assets/Styles/form-update.css'

const FormUpdate = ({ patient, onSave }) => {
    const [firstName, setFirstName] = useState(patient.firstName);
    const [lastName, setLastName] = useState(patient.lastName);
    const [weight, setWeight] = useState(patient.weight);
    const [height, setHeight] = useState(patient.height);
    const [phone, setPhone] = useState(patient.phone);
    const [email, setEmail] = useState(patient.email);
    const [password, setPassword] = useState(patient.password);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({
            firstName,
            lastName,
            weight,
            height,
            phone,
            email,
            password
        });
    };
    return (
        <form className="form-update-data-container" onSubmit={handleSubmit}>
            <div className="form-update-data-form-patient-data">
                <div className="form-update-data-container1">
                    <TextForm
                        text="Nombre"
                    ></TextForm>
                    <InputForm type="text" text2="on"></InputForm>
                </div>
                <div className="form-update-data-container2">
                    <TextForm
                        text="Apellido"
                    ></TextForm>
                    <InputForm type="text"></InputForm>
                </div>
                <div className="form-update-data-container3">
                    <TextForm
                        text="Peso (kg)"
                    ></TextForm>
                    <InputForm type="number"></InputForm>
                </div>
                <div className="form-update-data-container4">
                    <TextForm
                        text="Altura (m)"
                    ></TextForm>
                    <InputForm type="number"></InputForm>
                </div>
                <div className="form-update-data-container5">
                    <TextForm
                        text="Número Telefónico "
                    ></TextForm>
                    <InputForm type="tel" text2="tel"></InputForm>
                </div>
                <div className="form-update-data-container6">
                    <TextForm
                        text="Correo Electronico"
                    ></TextForm>
                    <InputForm type='email' text2="email"></InputForm>
                </div>
                <div className="form-update-data-container7">
                    <TextForm
                        text="Contraseña"
                    ></TextForm>
                    <InputForm type="password" ></InputForm>
                </div>
                <Button2 text="Actualizar" ></Button2>
            </div>
        </form>
    )
}

export default FormUpdate;