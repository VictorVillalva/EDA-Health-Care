import React from 'react'
import '../assets/Styles/input-form.css';
// import PropTypes from 'prop-types';
const InputForm = (props,{value, onChange}) => {
  return (
  <input autoComplete={props.text2} id={props.id}  type={`${props.type}`} value={value} onChange={onChange} className='input-form-input input-form'/>
  )
}
// InputForm.propTypes = {
//   type: PropTypes.string,
//   text2: PropTypes.string,
//   id: PropTypes.string,
// }
export default InputForm;
