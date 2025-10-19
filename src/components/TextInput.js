import React, { useState } from 'react';

function TextInput({ onMessageReceived }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onMessageReceived(text);
      setText('');
    }
  };

  return (
    <div className="text-input">
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message here..."
          rows="5"
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default TextInput;
