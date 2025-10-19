import React, { useState, useRef, useEffect } from 'react';

function GestureInput({ onMessageReceived }) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [gestureData, setGestureData] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isCapturing) {
      startCamera();
    } else {
      stopCamera();
    }
  }, [isCapturing]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const captureGesture = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      
      // Placeholder: In a real app, you'd analyze the gesture here
      const message = 'Gesture captured - ' + new Date().toLocaleTimeString();
      setGestureData(message);
      onMessageReceived(message);
    }
  };

  return (
    <div className="gesture-input">
      <div className="gesture-controls">
        <button onClick={() => setIsCapturing(!isCapturing)}>
          {isCapturing ? '📹 Stop Camera' : '📷 Start Camera'}
        </button>
        {isCapturing && (
          <button onClick={captureGesture}>✋ Capture Gesture</button>
        )}
      </div>
      
      {isCapturing && (
        <div className="camera-feed">
          <video ref={videoRef} autoPlay width="320" height="240" />
          <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }} />
        </div>
      )}
      
      {gestureData && (
        <div className="gesture-result">
          <p><strong>Last Gesture:</strong> {gestureData}</p>
        </div>
      )}
      
      <div className="info">
        <p><small>👉 Placeholder: Real gesture recognition would require ML model integration (e.g., TensorFlow.js, MediaPipe)</small></p>
      </div>
    </div>
  );
}

export default GestureInput;
