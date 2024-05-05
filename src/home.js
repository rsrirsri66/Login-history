// Home.js
import React, { useState, useEffect } from 'react';
import './css/login.css';


const Home = ({ setIsLoggedIn }) => {
  const [loginTime, setLoginTime] = useState('');
  const [loginDevice, setLoginDevice] = useState('');

  useEffect(() => {
    // Retrieve login time and login device from localStorage
    const storedLoginTime = localStorage.getItem('loginTime');
    const storedLoginDevice = localStorage.getItem('loginDevice');
    
    // Update state with stored values
    setLoginTime(storedLoginTime);
    setLoginDevice(storedLoginDevice);
  }, []);

  const handleLogout = () => {
    // Clear login time and login device from localStorage
    localStorage.removeItem('loginTime');
    localStorage.removeItem('loginDevice');
    
    // Set isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <div className="container home-page">
      
      <h2>Welcome to Home Page</h2>
      <p>Login Time: {loginTime}</p>
      <p>Login Device: {loginDevice}</p>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
