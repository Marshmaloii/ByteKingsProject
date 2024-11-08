const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Set the base directory to one level up from the Server folder
const baseDir = path.join(__dirname, '..');

// Serve static files from the 'Public' directory
app.use(express.static(path.join(baseDir, 'Public')));

// Define routes to serve each HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(baseDir, 'Public', 'pages', 'index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(baseDir, 'Public', 'pages', 'BKHomePage.html'));
});

app.get('/shop', (req, res) => {
    res.sendFile(path.join(baseDir, 'Public', 'pages', 'BKShopPage.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(baseDir, 'Public', 'pages', 'BKAboutPage.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(baseDir, 'Public', 'pages', 'BKLogin.html'));
});

app.get('/more', (req, res) => {
    res.sendFile(path.join(baseDir, 'Public', 'pages', 'BKMorePage.html'));
});

const history = require('connect-history-api-fallback');
app.use(history());


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Fallback route to serve index.html for unknown paths
app.get('*', (req, res) => {
    res.sendFile(path.join(baseDir, 'Public', 'pages', 'index.html'));
});

