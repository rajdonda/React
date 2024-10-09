import { useState } from 'react'
import './App.css'
import Form from './form.jsx'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <Form formData={formData} handleSubmit={handleSubmit} />
  )
}

export default App
