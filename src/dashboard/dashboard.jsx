import React from 'react';
import { NavLink } from 'react-router-dom';

export function Dashboard() {
  return (
    <main className="container text-center">
      {/* Welcome Message */}
      <section className="dashboard-content">
        <h1>Welcome to Your Personalized Dashboard</h1>
        <p className="lead">Manage your student apartment search, track live updates, and explore the data from our real estate database.</p>
      </section>

      {/* Dashboard Features */}
      <section className="dashboard-features row text-center mt-5">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img 
              src="https://images.pexels.com/photos/1643381/pexels-photo-1643381.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" 
              className="card-img-top" 
              alt="Apartment Listing" 
            />
            <div className="card-body">
              <h5 className="card-title">Apartment Listings</h5>
              <p className="card-text">Browse available student apartments and find the best options for your budget and location.</p>
              <NavLink to="/data" className="btn btn-primary">View Listings</NavLink>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <img 
              src="https://images.pexels.com/photos/29296617/pexels-photo-29296617/free-photo-of-scenic-norwegian-fishing-village-with-boats.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              className="card-img-top" 
              alt="Real-time Updates" 
            />
            <div className="card-body">
              <h5 className="card-title">Real-time Updates</h5>
              <p className="card-text">Stay updated with live information about new apartment availability and pricing changes.</p>
              <NavLink to="/realtime" className="btn btn-primary">Check Live Updates</NavLink>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img 
              src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" 
              className="card-img-top" 
              alt="Data Dashboard" 
            />
            <div className="card-body">
              <h5 className="card-title">Data Dashboard</h5>
              <p className="card-text">Access all the data from our database, explore available apartments, and filter according to your needs.</p>
              <NavLink to="/data" className="btn btn-primary">View Data</NavLink>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}
