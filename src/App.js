import React from 'react';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
