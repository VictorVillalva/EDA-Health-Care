//Image
import logo from '../assets/Images/carbon_apple_red.svg';
import user from '../assets/Images/user_black.png';
//CSS
import '../assets/Styles/headerWhite.css';


const Header = () => {
    return (
        <>
            <div className="container">
                <div className="row headerPageBlack">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <img src={logo} alt="" id='logoHealthCareBlack'/>
                        <span className='titlePageBlack'>HealthCare</span>
                    </div>
                    <div className="col-5"></div>
                    <div className="col-3">
                        <nav className='options'>
                            <a href="/home" className='optionBlack'>Inicio</a>
                            <a href="" className='optionBlack'>Servicio</a>
                            <a href="" className='optionBlack'><img src={user} id='imgUserHeaderBlack'/></a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;

