import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    valid: false,
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

    if (form.password.length > 4) {
      setForm((prevValue) => ({ ...prevValue, valid: true }));
      // message = <p>Good Job</p>;
    }
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
          required
        />
        <label htmlFor='email'>Email</label>
        <input
          onChange={changeH}
          type='email'
          name='email'
          placeholder='Your Email'
          value={form.email}
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          onChange={changeH}
          type='password'
          name='password'
          value={form.password}
          required
        />
      </div>
      {form.valid ? <button>Enviar</button> : <button disabled>Enviar</button>}
    </form>
  );
};

export default Form;
