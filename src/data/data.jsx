import React from 'react';

export function Data() {
  return (
    <main class="container">
        <section class="database-content">
            <h2>Apartment Listings</h2>
            <div id="databaseData">
                <p>Loading apartment data from the database...</p> 
            </div>
        </section>

        <div class="image-placeholder">
            <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Real Estate"></img>
        </div>
    </main>
  );
}