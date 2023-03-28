import { useState, useEffect } from 'react';

import Container from './components/Container/Container';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';

import './App.css';

function App() {
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);

  const start = () => {
    const startTime = Date.now() - time;

    setTimer(setInterval(() => {
      setTime(Date.now() - startTime);
    }, 1))
  };

  const stop = () => {
    if(timer) clearInterval(timer); 
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <Container>
      <Timer time={time}/>
      <div>
        <Button onClick={start}>start</Button>
        <Button onClick={stop}>stop</Button>
        <Button onClick={reset}>reset</Button>
      </div>
    </Container>
  );
}

export default App;
