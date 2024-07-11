const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, 'src')));

// Serve the "dist" directory for production builds
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Serve the "static" directory for other static files
app.use('/static', express.static(path.join(__dirname, 'static')));

// Serve the "static" directory for other static files
app.use('/chatterbox', express.static(path.join(__dirname, 'chatterbox')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get("/test", (req, res) => {
    res.sendFile(path.join(__dirname, "test.html"));
});
app.get("/text-to-image", (req, res) => {
    res.sendFile(path.join(__dirname, "examples", "text-to-image.html"));
});
app.get("/voice-assistant", (req, res) => {
    res.sendFile(path.join(__dirname, "examples", "voice-assistant.html"));
});
app.get('/production', (req, res) => {
    res.sendFile(path.join(__dirname, 'production.html'));
});

app.listen(port, () => {
    console.log(`Development server running at http://localhost:${port}`);
});
