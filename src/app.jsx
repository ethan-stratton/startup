import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className='app'>
        <header className="header">
          <img 
            src="https://img.freepik.com/free-vector/house-pin-location_24908-81998.jpg?w=1380" 
            alt="Real Estate Logo" 
            className="logo" 
          />
          <h1>Welcome to Student Real Estate Finder</h1>
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="dashboard.html">Dashboard</a></li>
              <li className="nav-item"><a className="nav-link" href="data.html">Data</a></li>
              <li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
              <li className="nav-item"><a className="nav-link" href="app.html">App</a></li>
            </ul>
          </nav>
        </header>

        <main className="container text-center">
          <p>Find the best student apartments near your campus!</p>
          <a href="login.html" className="btn btn-primary mt-3">Login to explore</a>

          <div className="image-placeholder mt-4">
            <img 
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Real Estate" 
              className="img-fluid" 
            />
          </div>
        </main>

        <footer className="footer bg-dark text-white-50 text-center py-3">
          <p>&copy; 2024 Student Real Estate Finder | Ethan Stratton | 
            <a href="https://github.com/ethan-stratton/startup" className="text-reset"> GitHub</a>
          </p>
        </footer>
      </div>
    );
}