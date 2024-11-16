const express = require('express');
const uuid = require('uuid');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Use express.json() middleware to parse incoming JSON bodies
app.use(express.json());

// Mock users data (you can replace this with a real database in production)
const users = {
  'test@example.com': { password: 'password123' },  // Example login
};


// Registration route: allows new users to sign up
app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;

  // Check if the email already exists in the "database" (users object)
  if (users[email]) {
    return res.status(409).json({ msg: 'User already exists' });
  }

  // Add the new user to the "database"
  users[email] = { password };

  // Optionally, create a new token for the new user and return it
  const token = uuid.v4();
  users[email].token = token;

  // Return a success message and the new user's token
  res.status(201).json({ msg: 'User registered successfully', token });
});

// Login route: allows existing users to log in
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users[email];

  // Validate user credentials
  if (user && user.password === password) {
    // Create a new token on successful login
    const token = uuid.v4();
    user.token = token;
    res.json({ token });
  } else {
    res.status(401).json({ msg: 'Unauthorized' });
  }
});

app.post('/api/auth/logout', (req, res) => {
    // Optionally invalidate the token here if tracking on server side
    // For example, by storing a "blacklist" of invalidated tokens
  
    // No actual action needed for token-based auth in this case, since the token is client-side
    res.status(200).send({ msg: 'Logged out successfully' });
  });

// Serve static files (your React build) from the 'public' directory
app.use(express.static('public'));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
