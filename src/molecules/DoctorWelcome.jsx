import React, {useState} from "react";
import Avatar from "../atoms/Avatar";
import "../assets/Styles/doctorWelcome.css";
import Button2 from "./Button2";
function DoctorWelcome({ nameDoctor, photoDoctor, lastName }) {
  const [editing, setEditing] = useState(false);

  //Datos para probar que esto funciona
  const [doctor, setDoctor] = useState({
    photoDoctor: photoDoctor,
    firstName: `${nameDoctor}`,
    lastName: `${lastName}`,
    ident: "80197369433",
    phone: "+1234567890",
    email: "juan.perez@example.com",
    password: "password123",
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (newDoctor) => {
    // Aquí se podría enviar la información actualizada del paciente al servidor
    // mediante una llamada a una API

    setEditing(false);
    setDoctor(newDoctor);
    console.log("Datos actualizados del paciente:", newDoctor);
  };
  return (
    <div className="doctor-card">
      <div className="photo-doctor">
        <Avatar src={photoDoctor} className="image"></Avatar>
      </div>
      <div className="container-1">
        <h1 className="text">
          Bienvenido
          <br />
          {nameDoctor} {lastName}
        </h1>
        {editing ? (
        <FormUpdateDoctor doctor={doctor} onSubmit={handleSave} />
      ) : (
        <Button2 text={"Editar Datos"}  onClick={handleEdit} className={'top=0px'}/>
      )}
      </div>
      
    </div>
  );
}

export default DoctorWelcome;
