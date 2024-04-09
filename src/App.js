//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Stage from './Stage';
import Puzzle from './Puzzle'

function App() {
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [currentStage, setCurrentStage] = useState(1);
  const [puzzleData, setPuzzleData] = useState({ description: 'Sample puzzle description'});

  const handleDoorClick = (doorNumber) => {
    setSelectedDoor(doorNumber);
    //show puzzle for selected door
    //can fetch puzzle data from backend api here
    setPuzzleData({ description: `Puzzle for Door ${doorNumber}` });
  };

  const handleAnswerSubmit = (answer) => {
    //check answer and update game state
    console.log(`Submitted answer: ${answer}`);
    //move to next stage??
    setCurrentStage((prevStage) => prevStage + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeQuest: Monty Hall Challenge</h1>
      </header>
      <main>
        <div className="game-container">
          <Stage 
          stageNumber={currentStage} 
          onDoorClick={handleDoorClick} />
          
          {selectedDoor && <Puzzle 
          puzzleData={puzzleData} 
          onAnswerSubmit={handleAnswerSubmit} />}
        </div>
      </main>
    </div>
  );
}

export default App; 
