import React, { useState, useEffect } from "react";
import Wave from 'react-wavify';

const WaveSplit = () => {
  const [waveProps, setWaveProps] = useState({
    height: 48,
    amplitude: 70,
    speed: 0.2,
    points: 4
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { 
        setWaveProps({
          height: 30,
          amplitude: 20,
          speed: 0.2,
          points: 3
        });
      } else {
        setWaveProps({
          height: 49,
          amplitude: 70,
          speed: 0.2,
          points: 4
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Wave fill='#0f5e9c'
      paused={false}
      style={{ display: 'flex', width: '100%', height: 'auto' }}
      options={waveProps}
    />
  );
}

export default WaveSplit;