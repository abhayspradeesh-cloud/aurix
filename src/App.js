import React, { useState } from 'react';
import './App.css';
import VoiceInput from './components/VoiceInput';
import VoiceOutput from './components/VoiceOutput';
import TextInput from './components/TextInput';
import TextOutput from './components/TextOutput';
import GestureInput from './components/GestureInput';
import GestureOutput from './components/GestureOutput';

function App() {
  const [message, setMessage] = useState('');
  const [inputMode, setInputMode] = useState('text');
  const [outputMode, setOutputMode] = useState('text');

  const handleMessageReceived = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aurix</h1>
        <p>Communicate using voice, text, or gestures</p>
        <p className="subtitle">Input and output supported in all three modes</p>
      </header>
      
      <main className="App-main">
        <section className="mode-selector">
          <div className="mode-group">
            <h3>Input Mode</h3>
            <div className="mode-buttons">
              <button 
                className={inputMode === 'text' ? 'active' : ''}
                onClick={() => setInputMode('text')}
              >
                Text
              </button>
              <button 
                className={inputMode === 'voice' ? 'active' : ''}
                onClick={() => setInputMode('voice')}
              >
                Voice
              </button>
              <button 
                className={inputMode === 'gesture' ? 'active' : ''}
                onClick={() => setInputMode('gesture')}
              >
                Gesture
              </button>
            </div>
          </div>
          
          <div className="mode-group">
            <h3>Output Mode</h3>
            <div className="mode-buttons">
              <button 
                className={outputMode === 'text' ? 'active' : ''}
                onClick={() => setOutputMode('text')}
              >
                Text
              </button>
              <button 
                className={outputMode === 'voice' ? 'active' : ''}
                onClick={() => setOutputMode('voice')}
              >
                Voice
              </button>
              <button 
                className={outputMode === 'gesture' ? 'active' : ''}
                onClick={() => setOutputMode('gesture')}
              >
                Gesture
              </button>
            </div>
          </div>
        </section>

        <section className="communication-area">
          <div className="input-area">
            <h3>Input</h3>
            {inputMode === 'text' && <TextInput onMessageReceived={handleMessageReceived} />}
            {inputMode === 'voice' && <VoiceInput onMessageReceived={handleMessageReceived} />}
            {inputMode === 'gesture' && <GestureInput onMessageReceived={handleMessageReceived} />}
          </div>
          
          <div className="output-area">
            <h3>Output</h3>
            {outputMode === 'text' && <TextOutput message={message} />}
            {outputMode === 'voice' && <VoiceOutput message={message} />}
            {outputMode === 'gesture' && <GestureOutput message={message} />}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
