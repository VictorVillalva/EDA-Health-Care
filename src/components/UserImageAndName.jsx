import React from 'react';
import '../assets/Styles/UserImageAndName.css';

function UserImageAndName({ name, imageSrc }) {
    return (
        <>
            <div className="user-container">
                <div className="user-image-container">
                    <img className="user-image" src={imageSrc} alt="User" />
                </div>
                <div className="user-details">
                    <span className="welcome">Bienvenido</span>
                    <div className="user-name">{name}</div>
                </div>
            </div>
        </>
    );
}

export default UserImageAndName;
