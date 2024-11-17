// src/PaginatedForm.js
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Form1 from './forms/Form1';
import Form2 from './forms/Form2';
import Form3 from './forms/Form3';
import Form4 from './forms/Form4';
import Form5 from './forms/Form5';

const PaginatedForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    taxId: '',
    contactFirstName: '',
    // Add other fields here
    isAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleNext = (nextPath) => {
    navigate(nextPath);
  };

  const handlePrevious = (prevPath) => {
    navigate(prevPath);
  };

  return (
    <Routes>
      <Route
        path="/form1"
        element={<Form1 formData={formData} handleChange={handleChange} handleNext={() => handleNext('/form2')} />}
      />
      <Route
        path="/form2"
        element={<Form2 formData={formData} handleChange={handleChange} handlePrevious={() => handlePrevious('/form1')} handleNext={() => handleNext('/form3')} />}
      />
      <Route
        path="/form3"
        element={<Form3 formData={formData} handleChange={handleChange} handlePrevious={() => handlePrevious('/form2')} handleNext={() => handleNext('/form4')} />}
      />
      <Route
        path="/form4"
        element={<Form4 formData={formData} handleChange={handleChange} handlePrevious={() => handlePrevious('/form3')} handleNext={() => handleNext('/form5')} />}
      />
      <Route
        path="/form5"
        element={<Form5 formData={formData} handleChange={handleChange} handlePrevious={() => handlePrevious('/form4')} />}
      />
    </Routes>
  );
};

export default PaginatedForm;
