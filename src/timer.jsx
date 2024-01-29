import React, { useState, useEffect } from 'react';

const Timer = ({ startingTime }) => {
  const [remainingTime, setRemainingTime] = useState(startingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>Remaining Time: {Math.floor(remainingTime / 60)}:{remainingTime % 60}</p>
    </div>
  );
};

export default Timer;