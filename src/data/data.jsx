import React, { useState, useEffect } from 'react';

export function Data() {
  const [apartmentData, setApartmentData] = useState(null);

  useEffect(() => {
    // Simulating a database call with a delay
    setTimeout(() => {
      const fetchedData = [
        { id: 1, title: "1-Bedroom Apartment", price: "$800/month", location: "Provo, UT" },
        { id: 2, title: "2-Bedroom Apartment", price: "$1200/month", location: "Orem, UT" },
        { id: 3, title: "Studio Apartment", price: "$650/month", location: "Salt Lake City, UT" }
      ];
      setApartmentData(fetchedData); // Update the state with the fetched data
    }, 2000); // Simulating 2 seconds delay
  }, []);

  return (
    <main className="container">
      <section className="database-content">
        <h2>Apartment Listings</h2>
        <div id="databaseData">
          {/* Conditionally render based on the state */}
          {apartmentData ? (
            <ul>
              {apartmentData.map((apartment) => (
                <li key={apartment.id}>
                  <h3>{apartment.title}</h3>
                  <p>Price: {apartment.price}</p>
                  <p>Location: {apartment.location}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading apartment data from the database...</p>
          )}
        </div>
      </section>

      <div className="image-placeholder">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Real Estate"
        />
      </div>
    </main>
  );
}
