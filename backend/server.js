const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the frontend directory
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

// Basic API endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'success', message: 'Backend is running' });
});

// Fallback to index.html for any other requests (useful if we later add frontend routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
