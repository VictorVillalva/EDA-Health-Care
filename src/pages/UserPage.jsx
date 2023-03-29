//hooks
import React, {useState, useEffect, useContext} from 'react';
//CSS
import '../assets/Styles/userPage.css';
//COMPONENTES
import ButtonDiagnostic from "../Atom/ButtonDiagnostic.jsx";
import ButtonPairing from "../Atom/ButtonPairing.jsx";
import HealthStatus from "../components/HealthStatus.jsx";
import Footer from '../components/Footer';
import HeaderWhite from "../components/HeaderWhite.jsx";
import UserImageAndName from "../components/UserImageAndName.jsx";
import {TokenContext} from "../context/TokenContext.jsx";

function UserPage(props) {
    const [userData, setUserData] = useState('');
    const {token} =useContext(TokenContext);
const id ="64238283ab95e649b82ec351"

    useEffect(() => {
        fetch(`https://healthcares.ddns.net/patient/${id}`,{
            headers:{
                "content-type":"application/json",
                "x-access-token":`${token}`
            }

        })
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    return (
        <>
            <section className='headerUserPage'>
                <div className="container">
                    <div className="row">
                        <HeaderWhite />
                    </div>
                </div>
                <div className="user">
                    <UserImageAndName name={userData.name} imageSrc={userData.photoURL} />
                </div>
                <div className="buttons">
                    <ButtonDiagnostic className="btn" />
                    <ButtonPairing className="btn" />
                </div>
            </section>
            <hr className="separator" />
            <section className="userContent">
                <div className="container userContentContainer">
                    <div className="health-status">
                        <span>Estatus de Salud</span>
                        <div className="health-status-component">
                            <HealthStatus />
                        </div>
                    </div>
                </div>
            </section>
            <hr className="separator" />
            <section className='footerIndex'>
                <div className="container">
                    <div className="row footerCenter">
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserPage;
