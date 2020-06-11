import React from 'react';
import SideBar from './components/SideBar/SideBar';
import { HashRouter } from 'react-router-dom';
import Form from './components/Form/Form';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <SideBar />
        {/* <Form /> */}
      </HashRouter>
    </div>
  );
}

export default App;
