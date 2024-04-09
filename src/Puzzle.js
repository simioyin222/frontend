import React, { useState } from 'react';

const Puzzle = ({ puzzleData, onAnswerSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    onAnswerSubmit(answer);
    setAnswer('');
  };

  return (
    <div className="puzzle-container">
      <h3>Puzzle</h3>
      <p>{puzzleData.description}</p>
      <input
        type="text"
        placeholder="Enter your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Puzzle;