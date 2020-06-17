const Content = {
  inner: `<div dangerouslySetInnerHTML={{ __html: database.data }} />`,
  prevent: `event.preventDefault();`,
  input: `import React from 'react';
  import './Input.css';
  
  const Input = (props) => {
    let inputElement = null;
  
    switch (props.elementType) {
      case 'input':
        inputElement = <input {...props.elementConfig} value={props.value} />;
        break;
      case 'textarea':
        inputElement = <textarea {...props.elementConfig} value={props.value} />;
        break;
      default:
        inputElement = <input {...props.elementConfig} value={props.value} />;
    }
    return (
      <div className='Input'>
        <label>{props.label}</label>
        {inputElement}
      </div>
    );
  };
  
  export default Input;
  `,
  form: `import React, { useState } from 'react';
  import Input from '../Input/Input';
  
  const Form = (props) => {
    const [form] = useState([
      {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name',
        },
        label: 'Name',
        value: '',
      },
      {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email',
        },
        label: 'Email',
        value: '',
      },
      {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Your password',
        },
        label: 'Password',
        value: '',
      },
    ]);
    return (
      <div>
        <form action=''></form>
        {form.map((input) => (
          <Input
            key={input.label}
            label={input.label}
            elementType={input.elementType}
            elementConfig={input.elementConfig}
          />
        ))}
      </div>
    );
  };
  
  export default Form;`,
  exports: `export { add, subtract, increment, decrement } from './counter';

export { addResult, deleteResult } from './result';`,
};

export default Content;
