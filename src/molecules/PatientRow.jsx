import React from "react";
import Button2 from "./Button2";
import Avatar from "../atoms/Avatar";
import "../assets/Styles/patientRow.css";

const PatientRow = (props) => {
  return (
    <tr className="table-patient">

      <td className="contacts">
        <Avatar src={props.photo} className={"image-2"} />
      </td>
      <td className="spanTable">{props.name}</td>
      <td className="spanTable">{props.signosVitales}</td>
      <td className="spanTable">{props.dolorDeCabeza ? "Sí" : "No"}</td>
      <td className="spanTable">{props.fiebre ? "Sí" : "No"}</td>
      <td className="spanTable">{props.edemas ? "Sí" : "No"}</td>
      <td className="spanTable">{props.zumbido ? "Sí" : "No"}</td>
      <td className="spanTable">{props.dolorEpigastrio ? "Sí" : "No"}</td>
      <td>
        <Button2 text={"Ver más detalles"} />
      </td>
    </tr>
  );
};

export default PatientRow;
