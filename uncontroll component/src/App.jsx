import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`)
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
