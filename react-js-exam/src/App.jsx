import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogPage from './login/logpage.jsx';
import SignUpPage from './signup/signup.jsx';
import HomePage from './Todo-page/crud-todo.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<LogPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<LogPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
