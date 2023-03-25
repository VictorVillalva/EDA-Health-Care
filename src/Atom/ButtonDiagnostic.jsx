import '../assets/Styles/buttonDiagnostic.css';

const Button = () => {
    return (
        <>
            <div className="button-container">
                <span className="button-text">Realizar Diagnostico</span>
                <button className="base-btn">
                    <img src="src/assets/Images/buttonDiagnostic.png" className="diagnostic-btn" alt="Button Image"/>
                </button>
            </div>
        </>
    )
}

export default Button
