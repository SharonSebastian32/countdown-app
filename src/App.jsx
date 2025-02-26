import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./App.css"; // Import your CSS file

const renderTime = ({ remainingTime }) => {
 
  return (
    <div className="timer">
       <div className="value">{remainingTime}</div>
     </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>
        
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={300}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className="info">
      
      </p>
    </div>
  );
}

export default App;
