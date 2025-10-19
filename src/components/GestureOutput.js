import React from 'react';

function GestureOutput({ message }) {
  // Parse message to determine gesture type
  const getGestureAnimation = (msg) => {
    if (!msg) return null;
    
    // Simple mapping of common words to gesture emojis
    const msgLower = msg.toLowerCase();
    if (msgLower.includes('hello') || msgLower.includes('hi')) return '👋';
    if (msgLower.includes('ok') || msgLower.includes('good')) return '👌';
    if (msgLower.includes('thanks') || msgLower.includes('thank')) return '🙏';
    if (msgLower.includes('yes')) return '👍';
    if (msgLower.includes('no')) return '👎';
    if (msgLower.includes('stop') || msgLower.includes('wait')) return '✋';
    if (msgLower.includes('point')) return '👆';
    return '👋'; // Default gesture
  };

  const gesture = getGestureAnimation(message);

  return (
    <div className="gesture-output">
      {message ? (
        <div className="output-display">
          <div className="gesture-animation">
            <span className="gesture-emoji">{gesture}</span>
          </div>
          <p><strong>Message:</strong> {message}</p>
          <div className="info">
            <p><small>👉 Placeholder: Real gesture output would require animation or avatar with gesture synthesis</small></p>
          </div>
        </div>
      ) : (
        <p className="placeholder">Waiting for input...</p>
      )}
    </div>
  );
}

export default GestureOutput;
