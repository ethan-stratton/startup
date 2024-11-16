/*2. RealTime.jsx
Purpose: If your RealTime.jsx component involves real-time updates (like displaying live data or pushing updates to the client, for instance, through WebSockets or polling), then it will need an API that facilitates this kind of communication.
Service API calls needed:
WebSocket or Polling API: To listen to live data and push updates to the frontend.
GET /api/realtime-data (for polling updates periodically).
Example using WebSocket for real-time data: */

import React, { useState, useEffect } from 'react';

export function Realtime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <h1>Realtime Updates</h1>
        <p>Current time: {time}</p>
      </div>
    </main>
  );
}
