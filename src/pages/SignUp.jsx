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
            <section className='headerIndex'>
                <div className="container">
                    <div className="row"><Header /></div>
                    <div className="row">
                        <FormSignUp />
                        <div className="col-6 information">
                            <span className='title-1'>La felicidad es</span>
                            <span className='title-1'>una buena salud</span>
                            <span className='title-2'>y una mala memoria.</span>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ratione explicabo magnam, fuga delectus in eveniet aut libero praesentium pariatur excepturi quis sapiente nisi, aspernatur voluptates soluta ullam, ipsa omnis?</p>
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
