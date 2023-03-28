import react from "react";
import '../assets/Styles/avatar.css';

function Avatar({ src, className }) {
  return <img src={src} alt="Avatar" className={`${className}`} />;
}

export default Avatar;
