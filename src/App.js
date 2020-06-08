import React from 'react';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter } from 'react-router-dom';
import Form from './components/Form/Form';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename='/codeins'>
        <SideBar />
        <Form />
      </BrowserRouter>
    </div>
  );
}

export default App;
