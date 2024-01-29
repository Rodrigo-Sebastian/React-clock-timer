import "./App.css";
import React, {useState, useEffect} from 'react';
import Clock from "./clock";
import Timer from "./timer";

function App() {

  const [timer, setTimer] = useState(300);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const App = () => {
    const [currenTimme, setCurrentTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date(). toLocaleTimeString());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  }

  return (
    <div>
    <Clock city="New York" timeZone="UTC-5" />
    <Clock city="Tokyo" timeZone="UTC+9" />
    <Timer startingTime={300} /> {}
    {}
  </div>
    );   
};

export default App;
