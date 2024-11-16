const express = require('express');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;  // Allow dynamic port assignment

// Serve static files (your React build) from the 'public' directory
app.use(express.static('public'));

// Endpoint example: serving data from backend
app.get('/api/quotes', (req, res) => {
  res.json({ quote: 'This is a sample quote.' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
