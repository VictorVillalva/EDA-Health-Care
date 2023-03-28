//Imagenes
import elipse1 from '../assets/Images/Ellipse8.svg';
import email from '../assets/Images/mail.svg';
import facebook from '../assets/Images/Facebook2.svg';
import instagram from '../assets/Images/InstagramRed.svg';
//Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormSignUp from "../components/FormSignUp.jsx";
import React from 'react'
//css
import '../assets/Styles/formSignUp.css';

const SignUp = () => {
    return (
        <>
            <section className='headerSingUp'>
                <div className="container">
                    <div className="row">
                        <Header />
                    </div>
                    <div className="row signUpForm">
                        <FormSignUp />
                        <div className="col-6 information">
                            <span className='title-1'>La felicidad es</span>
                            <span className='title-1'>una buena salud</span>
                            <span className='title-2'>y una mala memoria.</span>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ratione explicabo magnam, fuga delectus in eveniet aut libero praesentium pariatur excepturi quis sapiente nisi, aspernatur voluptates soluta ullam, ipsa omnis?</p>
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
                        </div>
                    </div>
                </div>
            </section>
            <section className='footerIndex'>
                <div className="container">
                    <div className="row footerCenter">
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;
