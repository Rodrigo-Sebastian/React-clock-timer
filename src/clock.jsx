import React, { useState, useEffect } from 'react';

const Clock = ({ city, timeZone }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setCurrentTime(new Date().toLocaleTimeString());
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <div>
      <h2>{city} - {timeZone}</h2>
      <p>Current Time: {currentTime}</p>

      {}
      <div className="btns">
      <button className='pause_btn' onClick={handlePause}>Pause</button>
      <button className='resume_btn' onClick={handleResume}>Resume</button>
      </div>
    </div>
  );
};

export default Clock;