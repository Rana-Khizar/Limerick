// src/forms/Form2.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Form2 = ({ formData, handleChange, handleNext, handlePrevious }) => (
  <div>
    <h2>Form 2</h2>
    <Form>
      <Form.Group controlId="contactFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="contactFirstName"
          value={formData.contactFirstName}
          onChange={handleChange}
        />
      </Form.Group>
      {/* Add other fields similarly */}
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </Form>
  </div>
);

export default Form2;
