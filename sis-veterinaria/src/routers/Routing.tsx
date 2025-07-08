import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Citas from '../pages/Citas';
import LoginForm from '../components/LoginForm';


//import Login from '../components/Login';



function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Ruta para el componente de citas */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/citas" element={<Citas />} />

          {/* Puedes agregar más rutas aquí según sea necesario */}
         
        </Routes>
      </Router>
    </>
  )
}

export default Routing