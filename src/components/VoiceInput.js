import React, { useState, useEffect } from 'react';

function VoiceInput({ onMessageReceived }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Initialize Speech Recognition API
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      
      recognitionInstance.onresult = (event) => {
        const current = event.resultIndex;
        const transcriptText = event.results[current][0].transcript;
        setTranscript(transcriptText);
        
        if (event.results[current].isFinal) {
          onMessageReceived(transcriptText);
        }
      };
      
      recognitionInstance.onend = () => {
        setIsListening(false);
      };
      
      setRecognition(recognitionInstance);
    }
  }, [onMessageReceived]);

  const startListening = () => {
    if (recognition) {
      setTranscript('');
      recognition.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="voice-input">
      <div className="voice-controls">
        <button 
          onClick={isListening ? stopListening : startListening}
          className={isListening ? 'recording' : ''}
        >
          {isListening ? '⏹ Stop Recording' : '🎤 Start Recording'}
        </button>
      </div>
      {transcript && (
        <div className="transcript">
          <p><strong>Transcript:</strong> {transcript}</p>
        </div>
      )}
      {!recognition && (
        <p className="error">Speech recognition is not supported in this browser.</p>
      )}
    </div>
  );
}

export default VoiceInput;
