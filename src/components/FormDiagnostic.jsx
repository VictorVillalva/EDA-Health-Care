import React from 'react';
import '../assets/Styles/formDiagnostic.css';
import {useState} from "react";


function FormDiagnostic(props) {

    const [formState, setFormState] = useState({
        'dolor-cabeza': false,
        'zumbido-oidos': false,
        'dolor-epigastrio': false,
        'edemas-miembros': false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // a
    };

    return (
        <>
            <div className="col-6">
                <form className="diagnostico-form" onSubmit={handleSubmit}>
                    <h2>Diagnóstico</h2>
                    <hr />

                    <div className="form-group">
                        <label htmlFor="dolor-cabeza">Dolor de cabeza</label>
                        <div className="option-container">
                            <label htmlFor="dolor-cabeza-si">
                                <input
                                    type="checkbox"
                                    id="dolor-cabeza-si"
                                    name="dolor-cabeza"
                                    value="si"
                                    checked={formState['dolor-cabeza']}
                                    onChange={handleCheckboxChange}
                                />
                                Si
                            </label>
                            <label htmlFor="dolor-cabeza-no">
                                <input
                                    type="checkbox"
                                    id="dolor-cabeza-no"
                                    name="dolor-cabeza"
                                    value="no"
                                    checked={!formState['dolor-cabeza']}
                                    onChange={handleCheckboxChange}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="zumbido-oidos">Zumbido de oídos</label>
                        <div className="option-container">
                            <label htmlFor="zumbido-oidos-si">
                                <input
                                    type="checkbox"
                                    id="zumbido-oidos-si"
                                    name="zumbido-oidos"
                                    value="si"
                                    checked={formState['zumbido-oidos']}
                                    onChange={handleCheckboxChange}
                                />
                                Si
                            </label>
                            <label htmlFor="zumbido-oidos-no">
                                <input
                                    type="checkbox"
                                    id="zumbido-oidos-no"
                                    name="zumbido-oidos"
                                    value="no"
                                    checked={!formState['zumbido-oidos']}
                                    onChange={handleCheckboxChange}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="dolor-epigastrio">Dolor en el epigastrio</label>
                        <div className="option-container">
                            <label htmlFor="dolor-epigastrio-si">
                                <input
                                    type="checkbox"
                                    id="dolor-epigastrio-si"
                                    name="dolor-epigastrio"
                                    value="si"
                                    checked={formState['dolor-epigastrio']}
                                    onChange={handleCheckboxChange}
                                />
                                Si
                            </label>
                            <label htmlFor="dolor-epigastrio-no">
                                <input
                                    type="checkbox"
                                    id="dolor-epigastrio-no"
                                    name="dolor-epigastrio"
                                    value="no"
                                    checked={!formState['dolor-epigastrio']}
                                    onChange={handleCheckboxChange}
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="edemas-miembros">Edemas en los miembros</label>
                        <div className="option-container">
                            <label htmlFor="edemas-miembros-si">
                                <input
                                    type="checkbox"
                                    id="edemas-miembros-si"
                                    name="edemas-miembros"
                                    value="si"
                                    checked={formState['edemas-miembros']}
                                    onChange={handleCheckboxChange}
                                />
                                Si
                            </label>
                            <label htmlFor="edemas-miembros-no">
                                <input
                                    type="checkbox"
                                    id="edemas-miembros-no"
                                    name="edemas-miembros"
                                    value="no"
                                    checked={!formState['edemas-miembros']}
                                    onChange={handleCheckboxChange}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    );
}

export default FormDiagnostic;
