import React from 'react';

function TextOutput({ message }) {
  return (
    <div className="text-output">
      {message ? (
        <div className="output-display">
          <p>{message}</p>
        </div>
      ) : (
        <p className="placeholder">Waiting for input...</p>
      )}
    </div>
  );
}

export default TextOutput;
