const Content = {
  context: `import React, { useState } from 'react';

export const userContext = React.createContext({
  user: {},
  update: () => {},
});
  
export default (props) => {
  const [userData, setUserData] = useState({
    name: '',
    day: '',
    month: '',
    year: '',
    type: 'light',
  });

  const updateUser = (user) => {
    setUserData(user);
  };

  return (
    <userContext.Provider value={{ user: userData, update: updateUser }}>
      {props.children}
    </userContext.Provider>
  );
};`,
  provider: `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UserProvider from './context/user-context';
  
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root'),
);`,
  import: `import React, { useContext } from 'react';
  import { userContext } from '../context/user-context';
  import TextField from '@material-ui/core/TextField';
  import { makeStyles } from '@material-ui/core/styles';
  
  const Form = () => {
    const user = useContext(userContext).user;
    const updateUser = useContext(userContext).update;
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;  
      updateUser((prevUser) => {
        return {
          ...prevUser,
          [name]: value,
        };
      });
    };
  
    return (
      <div>
        <form className={classes.root} noValidate autoComplete='off'>
          <TextField
            id='name'
            label='Nombre'
            type='text'
            onChange={handleInputChange}
            value={user.name}
            name='name'
          />
        </form>
      </div>
    );
  };
  
  export default Form;`,
};

export default Content;
