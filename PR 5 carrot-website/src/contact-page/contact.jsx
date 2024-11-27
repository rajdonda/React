import React, { useState } from "react";
import "./contact.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    review: "",
    randomId: Math.random().toString(36).substr(2, 9),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    set(ref(db, 'contacts/' + formData.randomId), formData)
      .then(() => {
        alert("Data submitted successfully!");
        setFormData({ name: "", contact: "", email: "", review: "", randomId: Math.random().toString(36).substr(2, 9) });
      })
      .catch((error) => {
        alert("Error submitting data: " + error);
      });
  };

  return (
    <div className="container contact-page">
      <h1 className="text-primary text-center">Contact Us</h1>
      <p className="text-muted text-center">If you have any questions, feel free to reach out to us!</p>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number:</label>
          <input type="tel" className="form-control" name="contact" value={formData.contact} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Review (max 250 words):</label>
          <textarea className="form-control" name="review" maxLength="250" value={formData.review} onChange={handleChange} />
        </div>
        <input type="hidden" name="randomId" value={formData.randomId} />
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Contact;
