//Image 
import logo from '../assets/Images/carbon_apple.svg';
import user from '../assets/Images/user.svg';
//CSS
import '../assets/Styles/header.css'; 
 

const Header = () => {
  return (
    <div className="container">
      <div className="row headerPage">
        <div className="col-1"></div>
        <div className="col-2">
          <img src={logo} alt="" id='logoHealthCare'/>
          <span className='titlePage'>HealthCare</span>
        </div>
        <div className="col-5"></div>
        <div className="col-3">
          <nav className='options'>
            <a href="" className='option'>Inicio</a>
            <a href="" className='option'>Servicio</a>
            <a href="" className='option'><img src={user} id='imgUserHeader'/></a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;

