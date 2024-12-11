import React, { useState, useEffect } from 'react';
import './chatStyles.css';


export function Realtime() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [name, setName] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const ws = new WebSocket(`${protocol}://${window.location.host}/ws`);

    ws.onopen = () => {
      appendSystemMessage('connected');
    };

    ws.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      appendMessage('friend', chat.name, chat.msg);
    };

    ws.onclose = () => {
      appendSystemMessage('disconnected');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error', error);
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const appendSystemMessage = (msg) => {
    setMessages((prevMessages) => [...prevMessages, { from: 'system', msg }]);
  };

  const appendMessage = (cls, from, msg) => {
    setMessages((prevMessages) => [...prevMessages, { from, msg }]);
  };

  const sendMessage = () => {
    if (socket && newMessage && name) {
      appendMessage('me', 'me', newMessage);
      socket.send(JSON.stringify({ name, msg: newMessage }));
      setNewMessage('');
    }
  };

  return (
    
    <div className="chat-container">
      <h2>Chat Room</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>
            <span className={msg.from === 'me' ? 'me' : 'friend'}>
              {msg.from}:
            </span>{' '}
            {msg.msg}
          </p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          disabled={!name}
        />
        <button onClick={sendMessage} disabled={!name}>
          Send
        </button>
      </div>
    </div>
  );
}
