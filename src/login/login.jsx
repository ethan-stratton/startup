import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    // Mock function for authentication (replace with real authentication logic)
    const handleLogin = () => {
      // Example check for username and password (replace with real API/auth check)
      if (username === 'user' && password === 'pass') {
        // Redirect to dashboard on successful login
        navigate('/dashboard');
      } else {
        alert('Invalid username or password');
      }
    };
  
    return (
      <main className='container-fluid bg-secondary text-center'>
        <div className='login-container'>
          <h2>Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
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

// export function Login() {
//   return (
//     <main className='container-fluid bg-secondary text-center'>
//       <div>login displayed here</div>
//     </main>
//   );
// }