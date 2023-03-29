import '../assets/Styles/buttonPairing.css';

const Button = () => {
    return (
        <>
                <div className="button-container-paring">
                    <span className="button-text-paring">Emparejar</span>
                    <a href="/sync">
                        <button className="base-btn-paring">
                            <img src="src/assets/Images/buttonPairing.png" className="pairing-btn" alt="Button Image"/>
                        </button>
                    </a>
                </div>
        </>
    )
}

export default Button
