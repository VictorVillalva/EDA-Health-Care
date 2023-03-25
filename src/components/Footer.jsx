//Image
import Facebook from '../assets/Images/Facebook.svg';
import Instagram from '../assets/Images/Instagram.svg';
import Phone from '../assets/Images/Phone.svg';
import Mail from '../assets/Images/Mail.svg';
import logo from '../assets/Images/carbon_apple_red.svg';
//CSS
import '../assets/Styles/footer.css';
const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2 copy">
            <span className='namePag'>
            <img src={logo} alt="" />
            Health Care
            </span>
            <span className='copyright'>©Healthcare2023 </span>
        </div>
        <div className="col-2"></div>
        <div className="col-2 contact">
            <span className='contactanos'>Contactanos</span>
            <a href="" className="contacts">
                <img src={Phone} alt=""/> (00) 000 000 0000
            </a>
            <a href="" className="contacts">
                <img src={Facebook} alt="" />  @HealthCare
            </a>
            <a href="" className="contacts">
                <img src={Instagram} alt="" />  @HealthCare
            </a>
            <a href="" className="contacts">
                <img src={Mail} alt="" />  HC@hotmail.com
            </a>
        </div>
        <div className="col-2 support">
            <span className='soporte'>Soporte</span>
            <a href="" className="supports">
                Privacidad y Politicas
            </a>
            <a href="" className="supports">
                FAQs
            </a>
            <a href="" className="supports">
                Terminos de Uso
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
