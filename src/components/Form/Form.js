import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/exports';
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
    console.log(form.email, form.password);
    props.onAuth(form.email, form.password);
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

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
