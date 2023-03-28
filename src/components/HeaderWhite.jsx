//Image
import logo from '../assets/Images/carbon_apple_red.svg';
import user from '../assets/Images/user_black.png';
//CSS
import '../assets/Styles/headerWhite.css';


const Header = () => {
    return (
        <>
            <div className="container">
                <div className="row headerPage">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <img src={logo} alt="" />
                        <span className='titlePage'>HealthCare</span>
                    </div>
                    <div className="col-5"></div>
                    <div className="col-3">
                        <nav className='options'>
                            <a href="" className='option'>Inicio</a>
                            <a href="" className='option'>Servicio</a>
                            <a href="" className='option'><img src={user}/></a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;

