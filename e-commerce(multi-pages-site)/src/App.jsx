import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router components
import Header from './sections/header/header.jsx';
import LogPage from './sections/login-signup/logpage.jsx'; // Importing the login page
import SignUpPage from './sections/login-signup/signup.jsx'; // Importing the signup page

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LogPage setIsLoggedIn={setIsLoggedIn} />} /> {/* Setting the login page as the default route */}
        <Route path="/login" element={<LogPage setIsLoggedIn={setIsLoggedIn} />} /> {/* Adding the login page route */}
        <Route path="/signup" element={<SignUpPage />} /> {/* Adding the signup page route */}
      </Routes>
    </Router>
  );
}

export default App;