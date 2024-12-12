import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './crud-todo.css';

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const generateRandomId = () => {
    return Math.floor(Math.random() * 10000); // Generate a random ID between 0 and 9999
  };

  const addTodo = () => {
    if (todo) {
      const newId = generateRandomId();
      const newTodos = [...todos, { id: newId, name, username, email, phone, todo }];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      resetForm();
    }
  };

  const editTodo = (index) => {
    const itemToEdit = todos[index];
    setTodo(itemToEdit.todo);
    setName(itemToEdit.name);
    setUsername(itemToEdit.username);
    setEmail(itemToEdit.email);
    setPhone(itemToEdit.phone);
    setEditIndex(index);
  };

  const updateTodo = () => {
    if (editIndex !== null) {
      const updatedTodos = todos.map((item, index) => 
        index === editIndex ? { ...item, todo, name, username, email, phone } : item
      );
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      resetForm();
      setEditIndex(null);
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const resetForm = () => {
    setTodo('');
    setName('');
    setUsername('');
    setEmail('');
    setPhone('');
  };

  const handleLogout = () => {
    navigate('/'); // Navigate to the login page
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button style={{ float: 'right' }} onClick={handleLogout}>Logout</button> {/* Logout button */}
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      {editIndex !== null ? (
        <button onClick={updateTodo}>Update Todo</button>
      ) : (
        <button onClick={addTodo}>Add Todo</button>
      )}
      <div className="todo-display">
        <h2>Added Todos</h2>
        {todos.length === 0 ? (
          <p>No todos added yet.</p>
        ) : (
          <ul>
            {todos.map((item, index) => (
              <li key={index} className="todo-item">
                <div className="todo-details">
                  <strong>{item.todo}</strong>
                  <span style={{ margin: '0 10px' }}>ID: {item.id}</span>
                  <span style={{ margin: '0 10px' }}>Name: {item.name}</span>
                  <span style={{ margin: '0 10px' }}>Username: {item.username}</span>
                  <span style={{ margin: '0 10px' }}>Email: {item.email}</span>
                  <span style={{ margin: '0 10px' }}>Phone: {item.phone}</span>
                </div>
                <button className="remove-button" onClick={() => removeTodo(index)}>Remove</button>
                <button className="edit-button" onClick={() => editTodo(index)}>Edit</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
