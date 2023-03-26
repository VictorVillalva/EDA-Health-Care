// import React, { useState } from 'react';
// import PatientForm from '../organisms/PatientForm';

// const initialPatientState = {
//   firstName: '',
//   lastName: '',
//   weight: '',
//   height: '',
//   phoneNumber: '',
//   email: '',
//   password: '',
// };

// const EditPatientPage = (props) => {
//   const [patient, setPatient] = useState(initialPatientState);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setPatient({ ...patient, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Lógica para guardar los datos del paciente
//   };

//   return (
//     <div>
//       <h1>Editar paciente</h1>
//       <PatientForm patient={patient} onChange={handleChange} onSubmit={handleSubmit} />
//     </div>
//   );
// };

// export default EditPatientPage;
