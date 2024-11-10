// Home.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <main className="container text-center">
      <h1>Welcome to the Student Real Estate Finder!</h1>
      <p>Your one-stop platform for finding the best student apartments near your campus.</p>
      
      {/* Call to action button for login */}
      <div className="mt-4">
        <NavLink to="/login" className="btn btn-primary btn-lg">
          Login to Get Started
        </NavLink>
      </div>

      {/* Background image or placeholder */}
      <div className="image-placeholder mt-5">
        <img 
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Real Estate" 
          className="img-fluid rounded"
        />
      </div>
    </main>
  );
}
