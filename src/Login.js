// Login.js
import React, { useState } from 'react';
import './css/login.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform your authentication logic here
    // For simplicity, I'm just checking if username and password are not empty
    if (username !== '' && password !== '') {
      // Validate if the username is a valid email address
      if (!isValidEmail(username)) {
        setError('Please enter a valid email address');
      } else {
        // Store login time and device information in localStorage
        const currentTime = new Date().toLocaleString();
        const currentDevice = navigator.userAgent;
        localStorage.setItem('loginTime', currentTime);
        localStorage.setItem('loginDevice', currentDevice);
        
        setIsLoggedIn(true);
        setError('');
      }
    } else {
      setError('Please enter username and password');
    }
  };
  const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
