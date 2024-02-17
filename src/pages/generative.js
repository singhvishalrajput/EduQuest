import React, { useState } from 'react';


function Generative() {
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = () => {
    // Add logic to handle sending messages if needed
    const newMessages = [...chatMessages, { text: userInput, type: 'user' }];
    setChatMessages(newMessages);
    setUserInput('');
  };

  return (
    <div className="App">
      <h2>Upload a File</h2>
      <form action="http://localhost:3000/upload" method="post" encType="multipart/form-data">
        <input type="file" name="fileUpload" id="fileUpload" />
        <button type="submit">Upload File</button>
      </form>

      <div className="chat-container">
        <div className="chat-header">
          <h2>EduQuest Assistant</h2>
        </div>
        <div className="chat-body">
          {chatMessages.map((message, index) => (
            <div key={index} className={message.type}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            id="user-input"
            placeholder="Type your message..."
            value={userInput}
            onChange={handleChange}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Generative;