import share from "../assets/Images/ShareBlack.svg";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; //Icons

const dataDiagnostic = ({headache, earBuzz, epigastricPain, swelling}) => {

        // let {cabeza, ear,epi,swe} ='';
        // if (headache){cabeza="true"}

  return(
      <>
          <div className="container">

              <div className="row">
                  <div className="col-12">
                      <div className="estatus">
                          <div className="informationUser">
                              <div className="sintomasUser">
                                  <span className='sintoma'>Paciente </span>
                              </div>
                              <div className="sintomasUser">
                                  <span className='sintoma'>Dolor de Cabeza {headache}</span>
                                  {headache ? <FaCheckCircle className="icon-true" /> : <FaTimesCircle className="icon-false" />}
                              </div>
                              <div className="sintomasUser">
                                  <span className='sintoma'>Zumbido de Oido {earBuzz}</span>
                                  {earBuzz ? <FaCheckCircle className="icon-true" /> : <FaTimesCircle className="icon-false" />}
                              </div>
                              <div className="sintomasUser">
                                  <span className='sintoma'>Dolor en el epigastrio {epigastricPain}</span>
                                  {epigastricPain ? <FaCheckCircle className="icon-true" /> : <FaTimesCircle className="icon-false" />}
                              </div>
                              <div className="sintomasUser">
                                  <span className='sintoma'>Hinchazon {swelling}</span>
                                  {swelling ? <FaCheckCircle className="icon-true" /> : <FaTimesCircle className="icon-false" />}
                              </div>
                              <div className="iconUser">
                                  <a href={'/status'}>
                                    <img src={share} alt="" />
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <br/>
          </div>
      </>
  )
}
export default dataDiagnostic;
