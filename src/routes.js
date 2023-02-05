import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import IndividualPeep from './pages/individualPeep';
import Login from './components/logIn';
import Register from './components/register';
const RoutesApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/peeps/:id' element={<IndividualPeep />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutesApp;
