import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Housing Project</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   // Check if the user is already logged in by checking localStorage
//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       // Auto-login if token is found
//       navigate('/dashboard');
//     }
//   }, [navigate]);

//   // Handle login
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Send a POST request to your backend for authentication
//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: username,
//           password: password,
//         }),
//       });

//       if (response.ok) {
//         // On success, get the token and store it
//         const data = await response.json();
//         localStorage.setItem('token', data.token); // Store the token in localStorage

//         // Optionally, store the username and password if needed
//         localStorage.setItem('username', username);
//         localStorage.setItem('password', password);

//         // Redirect to dashboard after successful login
//         navigate('/dashboard');
//       } else {
//         // Handle unauthorized errors (wrong credentials)
//         const errorData = await response.json();
//         setErrorMessage(errorData.msg || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setErrorMessage('An error occurred while trying to log in.');
//     }
//   };

//   return (
//     <main className="container-fluid bg-secondary text-center">
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="email" // Changed to email for better semantics
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
//           <button type="submit" className="btn btn-primary mt-3">
//             Login
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }
