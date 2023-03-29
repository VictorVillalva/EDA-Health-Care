import React from 'react'
//Components
import Header from '../components/HeaderWhite';
import Footer from '../components/Footer';
//CSS


//Image

const DoctorPage = () => {
  return (
    <>
    <section className='headerDoctorPage'>
        <Header />
    </section>
    <section className='doctorData'>
        <div className="container">
            <div className="row"></div>
        </div>
    </section>
    <section className="doctorActions"></section>
    <section className='footerDoctorPage'></section>
    </>
  )
}

export default DoctorPage;