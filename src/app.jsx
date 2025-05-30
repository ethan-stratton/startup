import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Data } from './data/data';
import { Dashboard } from './dashboard/dashboard';
import { Realtime } from './realtime/realtime';
import { Home } from './home/home';
import { Search } from './search/search'
import { AuthState } from './login/authState'; //added


export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);


  return (
    <BrowserRouter>
      <div className='app'>
        <header className="header text-center py-5">
          <img 
            src="https://img.freepik.com/free-vector/house-pin-location_24908-81998.jpg?w=1380" 
            alt="Real Estate Logo" 
            className="logo mb-3" 
            style={{ maxWidth: '200px' }} 
          />
          <h1>Welcome to Student Real Estate Finder</h1>
          <p>Find the best student apartments near your campus!</p>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink className='nav-link' to='/'>Home</NavLink></li>
              <li className="nav-item"><NavLink className='nav-link' to='login'>Login</NavLink></li>
              <li className="nav-item"><NavLink className='nav-link' to='dashboard'>Dashboard</NavLink></li>
              <li className="nav-item"><NavLink className='nav-link' to='search'>Search</NavLink></li>
              <li className="nav-item"><NavLink className='nav-link' to='data'>Data</NavLink></li>
              <li className="nav-item"><NavLink className='nav-link' to='realtime'>Realtime</NavLink></li>
            </ul>
          </nav>
        </header>

        <Routes>
        <Route path='/' element={<Home />} />
        {/*<Route path='/login' element={<Login />} />*/}
          <Route
      path="/login"
      element={
        <Login
          userName={userName}
          authState={authState}
          onAuthChange={(userName, authState) => {
            setAuthState(authState);
            setUserName(userName);
          }}
        />
      }
    />
    {authState === AuthState.Authenticated ? (
      <>
      <Route path='/data' element={<Data />} />
      <Route path='/search' element={<Search />} />
      <Route path='/realtime' element={<Realtime />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </>
  ) : (
    <Route path="*" element={<NotFound />} />
  )}
        {/* <Route path='/data' element={<Data />} />
        <Route path='/search' element={<Search />} />\
        <Route path='/realtime' element={<Realtime />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} /> */}
        </Routes>

        <footer className="footer bg-dark text-white-50 text-center py-3">
          <p>&copy; 2024 Student Real Estate Finder | Ethan Stratton | 
            <a href="https://github.com/ethan-stratton/startup" className="text-reset"> GitHub</a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
