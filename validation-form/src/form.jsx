import React, { useState } from 'react';
import './Form.css'; // Make sure to import the CSS file

const Form = ({ formData, handleSubmit }) => {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    formData[e.target.name] = e.target.value;
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = 'Name is required';
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    return formErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
      handleSubmit();
      // Add API call or further logic here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Validation Form</h2>
      {submitted && <p className="form-success">Form submitted successfully!</p>}
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`form-input ${errors.password ? 'input-error' : ''}`}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
