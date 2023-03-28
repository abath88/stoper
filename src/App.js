import { useRef, useState, useEffect } from 'react';

import Container from './components/Container/Container';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';

import './App.css';

function App() {
  const timerIdRef = useRef(null);
  const [time, setTime] = useState(0);

  const handleClearInterval = () => {
    if(timerIdRef.current){
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  }

  const start = () => {
    const startTime = Date.now() - time;

    timerIdRef.current = (setInterval(() => {
      setTime(Date.now() - startTime);
    }, 1));
  };

  const stop = () => {
    handleClearInterval();
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
       handleClearInterval();
    };
  }, []);

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
