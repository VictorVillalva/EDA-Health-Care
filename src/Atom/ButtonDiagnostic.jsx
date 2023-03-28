import '../assets/Styles/buttonDiagnostic.css';

const Button = () => {
    return (
        <>
            <div className="button-container-diagnostic">
                <span className="button-text-diagnostic">Realizar Diagnostico</span>
                <button className="base-btn-diagnostic">
                    <img src="src/assets/Images/buttonDiagnostic.png" className="diagnostic-btn" alt="Button Image"/>
                </button>
            </div>
        </>
    )
}

export default Button
