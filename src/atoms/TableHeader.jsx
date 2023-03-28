import React from "react";
import "../assets/Styles/tableheader.css";

const TableHeader = () => {
  return (
    <>
      <thead className="">
        <tr>
          <th className="spanTable">Foto del paciente</th>
          <th className="spanTable">Nombre</th>
          <th className="spanTable">Signos vitales</th>
          <th className="spanTable">Dolor De Cabeza</th>
          <th className="spanTable">Fiebre</th>
          <th className="spanTable">Edemas</th>
          <th className="spanTable">Zumbido en Oidos</th>
          <th className="spanTable">Dolor Epigastrio </th>
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
