import '../assets/Styles/buttonDiagnostic.css';
import { useState } from 'react';
import Diagno from '../Card/FormDiagnostic';

const Button = () => {
    const [diagnostic, setDiagnostic] = useState(false);
    
    const togglerDiagnostic = () =>{
        setDiagnostic(!diagnostic);
    }
    if(diagnostic){
        document.body.classList.add('active-diagnostic');
    } else {
        document.body.classList.remove('active-diagnostic');
    }
    return (
        <>
            <div className="button-container">
                <span className="button-text">Realizar Diagnostico</span>
                <button onClick={togglerDiagnostic} className="base-btn">
                    <img src="src/assets/Images/buttonDiagnostic.png" className="diagnostic-btn" alt="Button Image"/>
                </button>
            </div>
            {diagnostic && (
                <div className="newDiagnostic">
                    <div onClick={togglerDiagnostic} className="overlay"></div>
                    <Diagno />
                </div>
            )}
        </>
    )
}

export default Button
