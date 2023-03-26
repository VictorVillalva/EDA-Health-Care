import React from 'react'
import PropTypes from 'prop-types';
import '../assets/Styles/text-form.css'
const TextForm = (props) => {
  return (
    <div className='text-form-container'>
      <label id='text' className='text-form-text text-form'>
        {props.text}
      </label>
    </div>
  )
}
TextForm.propTypes = {
    text: PropTypes.string,
}

export default TextForm
