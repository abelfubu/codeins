import React from 'react';
import './Input.css';

const Input = (props) => {
  let inputElement = null;

  switch (props) {
    case 'input':
      inputElement = <input onChange={props.changed} />;
      break;
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value}
        />
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value}
        />
      );
  }
  return (
    <div className='Input'>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
