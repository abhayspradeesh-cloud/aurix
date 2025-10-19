# Aurix - Multimodal Communication Platform

![Aurix Banner](https://img.shields.io/badge/Aurix-Multimodal%20Communication-blueviolet?style=for-the-badge)

**Aurix: Communicate using voice, text, or gestures. Input and output supported in all three modes.**

Aurix is a web application designed to make communication accessible for everyone, including people who can see but cannot speak. It provides three modes of communication: voice, text, and gestures, with flexible input and output options.

## 🌟 Features

- **📝 Text Input/Output**: Type messages and see them displayed
- **🎤 Voice Input/Output**: Speak to input messages and hear responses using Speech Recognition and Speech Synthesis APIs
- **✋ Gesture Input/Output**: Use camera for gesture-based communication (placeholder for ML integration)
- **🎭 Multimodal**: Switch seamlessly between input and output modes
- **📡 Real-time Processing**: Instant conversion between different communication modes
- **🎨 Beautiful UI**: Modern, responsive design with smooth animations

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Web Speech API** - Voice recognition and synthesis
- **MediaDevices API** - Camera access for gesture input
- **CSS3** - Modern styling with animations
- **HTML5** - Semantic markup

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser with Web Speech API support (Chrome recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abhayspradeesh-cloud/aurix.git
cd aurix
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📚 Project Structure

```
aurix/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/
│   │   ├── VoiceInput.js     # Voice input component
│   │   ├── VoiceOutput.js    # Voice output component
│   │   ├── TextInput.js      # Text input component
│   │   ├── TextOutput.js     # Text output component
│   │   ├── GestureInput.js   # Gesture input component (placeholder)
│   │   └── GestureOutput.js  # Gesture output component (placeholder)
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json          # Project dependencies
└── README.md             # This file
```

## 🎯 How It Works

### Input Modes

1. **Text Input**: Type your message in the text area and click "Send Message"
2. **Voice Input**: Click "Start Recording", speak your message, and click "Stop Recording"
3. **Gesture Input**: Click "Start Camera", perform a gesture, and click "Capture Gesture" (placeholder)

### Output Modes

1. **Text Output**: Message is displayed as text
2. **Voice Output**: Message is spoken using speech synthesis
3. **Gesture Output**: Message is represented as gesture animations/emojis (placeholder)

### Switching Modes

Use the mode selector buttons to switch between Text, Voice, and Gesture for both input and output independently.

## 📌 Roadmap

- [ ] Integrate ML model for real gesture recognition (TensorFlow.js or MediaPipe)
- [ ] Add gesture animation library for better output
- [ ] Implement message history
- [ ] Add user profiles and preferences
- [ ] Multi-language support
- [ ] Offline mode with service workers
- [ ] Mobile app version
- [ ] Real-time communication between users

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for educational and personal use.

## 👏 Acknowledgments

- Web Speech API for voice capabilities
- React community for excellent documentation
- All contributors and supporters

## 📞 Contact

For questions or suggestions, please open an issue in the repository.

---

**Made with ❤️ for accessible communication**
