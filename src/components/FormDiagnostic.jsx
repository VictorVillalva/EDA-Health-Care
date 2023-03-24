import React from 'react';
import '../assets/Styles/formDiagnostic.css';


function FormDiagnostic(props) {
    return (
        <>
            <div className="col-6">
                <form className="diagnostico-form">
                    <h2>Diagnóstico</h2>
                    <hr />

                    <div className="form-group">
                        <label htmlFor="dolor-cabeza">Dolor de cabeza</label>
                        <div className="option-container">
                            <label htmlFor="dolor-cabeza-si">
                                <input type="checkbox" id="dolor-cabeza-si" name="dolor-cabeza" value="si" />
                                Si
                            </label>
                            <label htmlFor="dolor-cabeza-no">
                                <input type="checkbox" id="dolor-cabeza-no" name="dolor-cabeza" value="no" />
                                No
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="zumbido-oidos">Zumbido de oídos</label>
                        <div className="option-container">
                            <label htmlFor="zumbido-oidos-si">
                                <input type="checkbox" id="zumbido-oidos-si" name="zumbido-oidos" value="si" />
                                Si
                            </label>
                            <label htmlFor="zumbido-oidos-no">
                                <input type="checkbox" id="zumbido-oidos-no" name="zumbido-oidos" value="no" />
                                No
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="dolor-epigastrio">Dolor en el epigastrio</label>
                        <div className="option-container">
                            <label htmlFor="dolor-epigastrio-si">
                                <input type="checkbox" id="dolor-epigastrio-si" name="dolor-epigastrio" value="si" />
                                Si
                            </label>
                            <label htmlFor="dolor-epigastrio-no">
                                <input type="checkbox" id="dolor-epigastrio-no" name="dolor-epigastrio" value="no" />
                                No
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="edemas-miembros">Edemas en miembros inferiores o superiores (hinchazón)</label>
                        <div className="option-container">
                            <label htmlFor="edemas-miembros-si">
                                <input type="checkbox" id="edemas-miembros-si" name="edemas-miembros" value="si" />
                                Si
                            </label>
                            <label htmlFor="edemas-miembros-no">
                                <input type="checkbox" id="edemas-miembros-no" name="edemas-miembros" value="no" />
                                No
                            </label>
                        </div>
                    </div>

                    <hr />

                    <button type="submit">Iniciar</button>
                </form>
            </div>
        </>
    );
}

export default FormDiagnostic;