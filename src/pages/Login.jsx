//Imagenes
import elipse1 from '../assets/Images/Ellipse8.svg';
import email from '../assets/Images/mail.svg';
import facebook from '../assets/Images/Facebook2.svg';
import instagram from '../assets/Images/InstagramRed.svg';
import line1 from '../assets/Images/Line1.svg';
//Componentes
import FormLogin from '../components/FormLogin';
import Header from  '../components/Header';
import React from 'react'
import Footer from '../components/Footer';
//CSS
import '../assets/Styles/login.css';

const Login = () => {
  return (
    <>
    <section className='headerMainLogin'>
        <div className="container">
            <div className="row"><Header /></div>
            <div className="row componentsLogin">
                <div className="col-1"></div>
                <div className="col-4 descriptionColumn">
                    <span className='title-login'>Cuide su cuerpo</span>
                    <span className='subtitle-login'>Es el unico sitio que usted tiene para vivir</span>
                    <p className='description-login'>Lorem ipsum dolor sit amet consectetur. Quis condimentum in dignissim egestas accumsan lectus commodo aliquam. Convallis commodo quis diam faucibus sollicitudin et urna facilisis. Id placerat sed tortor est cursus. Gravida dictum orci nunc eget.</p>
                    <div className="linksAcounts">
                      <div className="email">
                        <img src={email} alt="" />
                        <span className='emailName'>HC@hotmail.com</span>
                      </div>
                      <div className="facebook">
                        <a href=""> <img src={facebook} alt="" className='FBRed' /></a>
                      </div>
                      <div className="instagram">
                        <a href=""> <img src={instagram} alt="" /></a>
                      </div>
                    </div>
                    <img src={line1} alt="" className='line1'/>
                </div>
                <div className="col-1"></div>
                <div className="col-1 loginColumn">
                  <FormLogin />
                </div>
              <div className="col-1"></div>
            </div>
        </div>
    </section>
    <section className='footerLogin'>
      <div className="container">
        <div className="row footerCenter">
          <Footer />
        </div>
      </div>
    </section>
    </>
  )
}

export default Login;
