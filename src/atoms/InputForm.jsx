import React from 'react';
import '../assets/Styles/input-form.css';
const InputForm = ({type, name, value, onChange}) => {
  return (
  <input type={`${type}`} id={name} name={name}  value={value} onChange={onChange} className='input-form-input input-form'/>
  )
};
export default InputForm;
