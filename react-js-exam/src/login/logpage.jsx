import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LogPage = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowError(false);

        if (email === '' || password === '') {
            setShowError(true);
            return;
        }

        const users = Object.keys(localStorage).map(userId => JSON.parse(localStorage.getItem(userId)));
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            console.log('Email:', email);
            console.log('Password:', password);
            setIsLoggedIn(true);
            navigate('/home');
        } else {
            setShowError(true);
        }
    };

    const handleSignUpRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className={`login-container ${showError ? 'hidden' : ''}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}>
            <div className="blur-background" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />
            <div className="login-form" style={{
                backgroundColor: '#ffffff',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                width: '400px',
                textAlign: 'center'
            }}>
                <h2 className="text-center" style={{ color: '#4a4a4a', marginBottom: '20px' }}>Login</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ color: '#4a4a4a' }}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ borderColor: '#007bff', borderRadius: '5px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" style={{ color: '#4a4a4a' }}>Password:</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ borderColor: '#007bff', borderRadius: '5px' }}
                            />
                            <span className="input-group-text" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', borderRadius: '5px', width: '100%' }}>Login</button>
                </form>
                {showError && (
                    <div className="alert alert-danger mt-3" role="alert">
                        Email or password is incorrect. Please try again.
                    </div>
                )}
                <button onClick={handleSignUpRedirect} className="btn btn-secondary mt-3" style={{ backgroundColor: '#6c757d', borderColor: '#6c757d', borderRadius: '5px', width: '100%' }}>Go to Sign Up</button>
            </div>
        </div>
    );
};

export default LogPage;
