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
