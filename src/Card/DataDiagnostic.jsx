import share from "../assets/Images/ShareBlack.svg";
import React from "react";

const dataDiagnostic = ({headache, earBuzz, epigastricPain, swelling}) => {

        let {cabeza, ear,epi,swe} ='';
        if (headache){cabeza="true"}

  return(
      <>
          <div className="container">

              <div className="row">
                  <div className="col-12">
                      <div className="estatus">
                          <div className="informationUser">
                              <div className="sintomasUser">
                                  <span className='sintoma'>Paciente (x)</span>
                              </div>
                              <div className="sintomasUser">
                                  <span className='sintoma'>Sintoma uno(x) {headache}</span>

                              </div>
                              <div className="sintomasUser">
                                  <span className='sintoma'>Sintoma dos {earBuzz}  (x)</span>
                              </div>
                              <div className="sintomasUser">
                                  <span className='sintoma'>Sintoma tres {epigastricPain} (x)</span>
                              </div>
                              <div className="sintomasUser">
                                  <span className='sintoma'>Sintoma cuatro {swelling} (x)</span>
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
