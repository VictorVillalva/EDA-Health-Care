import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Styles/button2.css'
const Button2 = (props) => {
  return (
    <div className='button2-container button2'>
      <button
        type="submit"
        className="button2-button2 button"
      >
        <a className="button2-text">
          {props.text}
        </a>
      </button>
    </div >
  )
}
Button2.propTypes = {
  text: PropTypes.string,
}
export default Button2;
