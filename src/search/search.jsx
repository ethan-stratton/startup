/*. Search.jsx
Purpose: This component would likely be used to search for a specific item, like a real estate listing, within the application.
Service API calls needed:
GET /api/search: To fetch search results from the backend.
GET /api/filters (optional): To fetch possible filters for the search query (e.g., location, price range, etc.).*/ 


import React, { useState } from 'react';

export function Search() {
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [apartmentMessage, setApartmentMessage] = useState('Loading available apartments...');

  const applyFilters = () => {
    setApartmentMessage(
      `Showing apartments in: ${location || 'Any Location'}, Max Price: ${maxPrice || 'Any Price'}`
    );
  };

  return (
    <div className="container-fluid bg-secondary text-center">
      <header className="header">
        <img
          src="https://img.freepik.com/free-vector/house-pin-location_24908-81998.jpg?w=1380"
          alt="Real Estate Logo"
          className="logo"
        />
        <h1>Available Apartments</h1>
        <p id="userPlaceholder">Welcome, [User's Name]</p>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/data">Database Data</a></li>
          <li><a href="/realtime">Live Updates</a></li>
        </ul>
      </nav>

      <main className="container">
        <section id="appComponent" className="app-component">
          <h2>Explore Apartments</h2>
          <p>Use the filters below to find your ideal apartment.</p>
          <div className="filter-section">
            <label htmlFor="locationFilter">Location:</label>
            <input
              type="text"
              id="locationFilter"
              placeholder="Enter city or neighborhood"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <label htmlFor="priceFilter">Max Price:</label>
            <input
              type="number"
              id="priceFilter"
              placeholder="Enter max price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />

            <button type="button" onClick={applyFilters}>Apply Filters</button>
          </div>

          <div id="apartmentListings">
            <p>{apartmentMessage}</p>
          </div>
        </section>

        <div className="image-placeholder">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Real Estate"
          />
        </div>
      </main>

      <footer className="footer">
        <p>
          &copy; 2024 Student Real Estate Finder |{' '}
          <a href="https://github.com/ethan-stratton/startup">GitHub</a>
        </p>
      </footer>
    </div>
  );
}
