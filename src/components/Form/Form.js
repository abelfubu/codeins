import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.submit(form);
    console.log(form);
    setForm({
      name: '',
      email: '',
      password: '',
    });
  };

  const changeH = (event) => {
    const { value, name } = event.target;
    setForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='Input'>
        <label htmlFor='name'>Name</label>
        <input
          onChange={changeH}
          type='text'
          name='name'
          placeholder='Your Name'
          value={form.name}
        />
        <label htmlFor='email'>Email</label>
        <input
          onChange={changeH}
          type='text'
          name='email'
          placeholder='Your Email'
          value={form.email}
        />
        <label htmlFor='password'>Password</label>
        <input
          onChange={changeH}
          type='password'
          name='password'
          value={form.password}
        />
      </div>
      <button>Enviar</button>
    </form>
  );
};

export default Form;
