import React, { useState } from "react";

import TextForm from "../atoms/TextForm";
import InputForm from "../atoms/InputForm";
import Button2 from "../molecules/Button2";
import '../assets/Styles/form-update.css';

const FormUpdateDoctor = ({ doctor, onSubmit }) => {
    const [firstName, setFirstName] = useState(doctor.firstName);
    const [lastName, setLastName] = useState(doctor.lastName);
    const [ident, setIdent] = useState(doctor.ident);
    const [phone, setPhone] = useState(doctor.phone);
    const [email, setEmail] = useState(doctor.email);
    const [password, setPassword] = useState(doctor.password);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            firstName,
            lastName,
            ident,
            phone,
            email,
            password
        });
    };
    return (
        <form className="form-update-data-container" onSubmit={handleSubmit}>
            <div className="form-update-data-form-data">
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
                        text="Cedula Profesional"
                    ></TextForm>
                    <InputForm type="number" name={"ident"} value={ident} onChange={(e) => setIdent(e.target.value)}></InputForm>
                </div>
                <div className="form-update-data-container5">
                    <TextForm
                        text="Número Telefónico "
                    ></TextForm>
                    <InputForm type="tel" name={"phone"} value={phone} onChange={(e) => setPhone(e.target.value)}></InputForm>
                </div>
                <div className="form-update-data-container6">
                    <TextForm
                        text="Correo Electronico"
                    ></TextForm>
                    <InputForm type='email' name={"email"} value={email} onChange={(e) => setEmail(e.target.value)}></InputForm>
                </div>
                <div className="form-update-data-container7">
                    <TextForm
                        text="Contraseña"
                    ></TextForm>
                    <InputForm type="password" name={"password"} value={password} onChange={(e) => setPassword(e.target.value)} ></InputForm>
                </div>
                <Button2 type="submit" text="Actualizar"></Button2>
            </div>
        </form>
    )
};

export default FormUpdateDoctor;