import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [showError, setShowError] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [passwordRequirementsError, setPasswordRequirementsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowError(false);
        setPasswordMismatch(false);
        setPasswordRequirementsError(false);

        if (email === '' || password === '' || confirmPassword === '') {
            setShowError(true);
            return;
        }
        if (password !== confirmPassword) {
            setPasswordMismatch(true);
            return;
        }
        if (password.length < 4 || !/[!@#$%^&*]/.test(password) || !/\d/.test(password)) {
            setPasswordRequirementsError(true);
            return;
        }

        const userId = Math.random().toString(36).substr(2, 9);
        localStorage.setItem(userId, JSON.stringify({ email, password }));

        console.log('Email:', email);
        console.log('Password:', password);
        setIsSignedUp(true);
    };

    useEffect(() => {
        if (isSignedUp) {
            console.log('User signed up successfully');
            navigate('/login');
        }
    }, [isSignedUp, navigate]);

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className={`signup-container ${isSignedUp ? 'hidden' : ''}`} style={{
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
            <div className="signup-form" style={{
                backgroundColor: '#ffffff',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                width: '400px',
                textAlign: 'center'
            }}>
                <h2 className="text-center" style={{ color: '#4a4a4a', marginBottom: '20px' }}>Create Account</h2>
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
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label" style={{ color: '#4a4a4a' }}>Confirm Password:</label>
                        <div className="input-group">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{ borderColor: '#007bff', borderRadius: '5px' }}
                            />
                            <span className="input-group-text" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff', borderRadius: '5px', width: '100%' }}>Sign Up</button>
                </form>
                {showError && (
                    <div className="alert alert-danger mt-3" role="alert">
                        Please fill in all fields to proceed.
                    </div>
                )}
                {passwordMismatch && (
                    <div className="alert alert-danger mt-3" role="alert">
                        Passwords do not match. Please try again.
                    </div>
                )}
                {passwordRequirementsError && (
                    <div className="alert alert-danger mt-3" role="alert">
                        Password must be at least 4 characters long and include at least one symbol and one number.
                    </div>
                )}
                <button onClick={handleLoginRedirect} className="btn btn-secondary mt-3" style={{ backgroundColor: '#6c757d', borderColor: '#6c757d', borderRadius: '5px', width: '100%' }}>Go to Login</button>
            </div>
        </div>
    );
};

export default SignUpPage;
