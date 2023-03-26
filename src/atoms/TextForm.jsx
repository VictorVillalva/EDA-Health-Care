import React from 'react'
import '../assets/Styles/text-form.css';
const TextForm = (props) => {
  return (
    <div className='text-form-container'>
      <label id='text' className='text-form-text text-form'>
        {props.text}
      </label>
    </div>
  )
};
export default TextForm;
