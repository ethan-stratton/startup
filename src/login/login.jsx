import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Check if the user is already logged in by checking localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      // Auto-login if credentials are found
      navigate('/dashboard');
    }
  }, [navigate]);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Store the username and password in localStorage for future authentication
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to dashboard after successful login
    navigate('/dashboard');
  };

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='btn btn-primary mt-3'>
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
