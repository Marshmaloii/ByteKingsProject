const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the 'Public' directory
app.use(express.static(path.join(__dirname, 'Public')));

// Define routes to serve each HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/pages/Index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/pages/BKHomePage.html'));
});

app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/pages/BKShopPage.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/pages/BKAboutPage.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/pages/BKLogin.html'));
});

app.get('/more', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/pages/BKMorePage.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
