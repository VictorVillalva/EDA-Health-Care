import React, { useState } from "react";

import TextForm from "../atoms/TextForm";
import InputForm from "../atoms/InputForm";
import Button2 from "../molecules/Button2";
import '../assets/Styles/form-update.css';

const FormUpdate = ({ patient, onSubmit }) => {
    const [firstName, setFirstName] = useState(patient.firstName);
    const [lastName, setLastName] = useState(patient.lastName);
    const [weight, setWeight] = useState(patient.weight);
    const [height, setHeight] = useState(patient.height);
    const [phone, setPhone] = useState(patient.phone);
    const [email, setEmail] = useState(patient.email);
    const [password, setPassword] = useState(patient.password);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
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
                    <InputForm type="text" name={"firstName"} value={firstName} onChange={(e) => setFirstName(e.target.value)}></InputForm>
                </div>
                <div className="form-update-data-container2">
                    <TextForm
                        text="Apellido"
                    ></TextForm>
                    <InputForm type="text" name={"lastName"} value={lastName} onChange={(e) => setLastName(e.target.value)}></InputForm>
                </div>
                <div className="form-update-data-container3">
                    <TextForm
                        text="Peso (kg)"
                    ></TextForm>
                    <InputForm type="number" name={"weight"}  value={weight} onChange={(e) => setWeight(e.target.value)}></InputForm>
                </div>
                <div className="form-update-data-container4">
                    <TextForm
                        text="Altura (m)"
                    ></TextForm>
                    <InputForm type="number" name={"height"}  value={height} onChange={(e) => setHeight(e.target.value)}></InputForm>
                </div>
                <div className="form-update-data-container5">
                    <TextForm
                        text="Número Telefónico "
                    ></TextForm>
                    <InputForm type="tel" name={"phone"}  value={phone} onChange={(e) => setPhone(e.target.value)}></InputForm>
                </div>
                <div className="form-update-data-container6">
                    <TextForm
                        text="Correo Electronico"
                    ></TextForm>
                    <InputForm type='email' name={"email"}  value={email} onChange={(e) => setEmail(e.target.value)}></InputForm>
                </div>
                <div className="form-update-data-container7">
                    <TextForm
                        text="Contraseña"
                    ></TextForm>
                    <InputForm type="password" name={"password"}  value={password} onChange={(e) => setPassword(e.target.value)} ></InputForm>
                </div>
                <Button2 type="submit" text="Actualizar"></Button2>
            </div>
        </form>
    )
};

export default FormUpdate;