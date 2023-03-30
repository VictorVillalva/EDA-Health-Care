const DoctorCard = ({name,medicalCardId, email,phoneNumber, }) => {
    return(
        <div className="row">
            <div className="col-12">
                <div className="viewDoctor">
                    <div className="dataDoctor">
                        <div className="iconEstatus">
                            <img src={username} alt=""/>
                        </div>
                        <div className="dataDoctorEstatus">
                            <span className='optionDataDoctor'>Doctor: </span>
                            <span className='answerDataDoctor'>{name}</span>
                        </div>
                        <div className="dataDoctorEstatus">
                            <span className='optionDataDoctor'>Numero de cedula: </span>
                            <span className='answerDataDoctor'>{medicalCardId}</span>
                        </div>
                        <div className="dataDoctorEstatus">
                            <span className='optionDataDoctor'>Correo Electronico: </span>
                            <span className='answerDataDoctor'>{email}</span>
                        </div>
                        <div className="dataDoctorEstatus">
                            <span className='optionDataDoctor'>Numero de telefono: </span>
                            <span className='answerDataDoctor'>{phoneNumber}</span>
                        </div>
                        <div className="iconEstatus">
                            <button className='eliminateDoctor'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                     className="bi bi-x" viewBox="0 0 16 16">
                                    <path
                                        d="M9.061 8l3.97-3.97a.75.75 0 0 0-1.06-1.06L8 6.939 4.03 3.03a.75.75 0 0 0-1.06 1.06L6.939 8l-3.97 3.97a.75.75 0 1 0 1.06 1.06L8 9.061l3.97 3.97a.75.75 0 0 0 1.06-1.06L9.061 8z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DoctorCard;
