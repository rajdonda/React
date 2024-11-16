import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Add.css'; 

export default function Add() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { name, email, pass, date, gender, course, status };
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    const updatedRecords = [...storedRecords, newRecord];

    localStorage.setItem('records', JSON.stringify(updatedRecords));

    setName('');
    setEmail('');
    setPass('');
    setDate('');
    setGender('');
    setCourse('');
    setStatus('');

    alert('Record added successfully!');
    navigate('/View');
  };

  return (
    <div className="add-form-container">
      <div className="form-card">
        <h2>Add New Record</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              placeholder="Enter your course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <input
              type="text"
              placeholder="Enter your status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <Link to="/View" className="view-link">View All Records</Link>
      </div>
    </div>
  );
}
