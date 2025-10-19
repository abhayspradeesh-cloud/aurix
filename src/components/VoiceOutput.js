import React, { useEffect } from 'react';

function VoiceOutput({ message }) {
  useEffect(() => {
    if (message && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      window.speechSynthesis.speak(utterance);
    }
  }, [message]);

  return (
    <div className="voice-output">
      {message ? (
        <div className="output-display">
          <p>🔊 Speaking: {message}</p>
        </div>
      ) : (
        <p className="placeholder">Waiting for input...</p>
      )}
      {!('speechSynthesis' in window) && (
        <p className="error">Speech synthesis is not supported in this browser.</p>
      )}
    </div>
  );
}

export default VoiceOutput;
