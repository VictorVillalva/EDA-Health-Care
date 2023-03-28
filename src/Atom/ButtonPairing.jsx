import '../assets/Styles/buttonPairing.css';

const Button = () => {
    return (
        <>
            <div className="button-container">
                <span className="button-text">Emparejamiento</span>
                <button className="base-btn">
                    <img src="src/assets/Images/buttonPairing.png" className="pairing-btn" alt="Button Image"/>
                </button>
            </div>
        </>
    )
}

export default Button
