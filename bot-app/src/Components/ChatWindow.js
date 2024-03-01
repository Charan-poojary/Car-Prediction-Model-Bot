import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatWindow = () => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput(''); 
  };

  return (
    <div className="chat-window">
      <div className="message-container">
      <h1>Car Price Predictor Bot</h1>     
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} placeholder="Type your car details..." />
        <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
      </form>
      </div>
    </div>
  );
};

export default ChatWindow;
