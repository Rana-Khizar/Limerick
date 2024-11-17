// src/forms/Form1.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Form1 = ({ formData, handleChange, handleNext }) => (
  <div>
    <h2>Form 1</h2>
    <Form>
      <Form.Group controlId="taxId">
        <Form.Label>Tax Identification Number</Form.Label>
        <Form.Control
          type="text"
          name="taxId"
          value={formData.taxId}
          onChange={handleChange}
        />
      </Form.Group>
      {/* Add other fields similarly */}
      <Button onClick={handleNext}>Next</Button>
    </Form>
  </div>
);

export default Form1;
