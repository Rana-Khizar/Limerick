import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
//import Home from './component/home';
import PaginatedForm from './component/PaginatedForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
  
   <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/form1" />} />
      <Route path="/*" element={<PaginatedForm />} />
    </Routes>
  </Router>
     
   </>
  );
}

export default App;
