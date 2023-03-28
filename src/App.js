import { useState, useEffect } from 'react';

import Container from './components/Container/Container';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';

import './App.css';

function App() {
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState({timePass: 0, prevTime: 0, });

  const start = () => {
    setTime(prev => {return { timePass: prev.timePass, prevTime: Date.now()}});

    setTimer(setInterval(() => {
      setTime(prev => {return { timePass: prev.timePass + (Date.now() - prev.prevTime), prevTime: Date.now()}});
    }, 1))
  };

  const stop = () => {
    if(timer) clearInterval(timer); 
  };

  const reset = () => {
    setTime({timePass: 0, prevTime: 0}); 
    
  };

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <Container>
      <Timer time={time.timePass}/>
      <div>
        <Button onClick={start}>start</Button>
        <Button onClick={stop}>stop</Button>
        <Button onClick={reset}>reset</Button>
      </div>
    </Container>
  );
}

export default App;
