import React from "react";
import TableHeader from "../atoms/TableHeader";
import DoctorWelcome from "../molecules/DoctorWelcome";
import PatientRow from "../molecules/PatientRow";
import "../assets/Styles/patienttable.css";

const PatientsTable = ({ nameDoctor, lastName, photoDoctor, patients }) => {
  return (
    <div className="main">
      <div className="container-0">
        <div >
          <DoctorWelcome
            nameDoctor={nameDoctor}
            photoDoctor={photoDoctor}
            lastName={lastName}
          />
        </div>
        <table className="before-table-patient-2">
          <TableHeader />
          <tbody>
            {patients.map((patient) => (
              <PatientRow
                key={patient.id}
                photo={patient.photo}
                name={patient.name}
                signosVitales={patient.signosVitales}
                dolorDeCabeza={patient.dolorDeCabeza}
                fiebre={patient.fiebre}
                edemas={patient.edemas}
                zumbidos={patient.zumbidos}
                dolorEpigastrico={patient.dolorEpigastrico}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientsTable;
