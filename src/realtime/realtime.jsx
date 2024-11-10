import React, { useState, useEffect } from 'react';

export function Realtime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update time every second (simulating real-time functionality)
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up the timer when the component unmounts
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
