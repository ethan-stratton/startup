const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
//const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// // GetScores
// secureApiRouter.get('/scores', async (req, res) => {
//   const scores = await DB.getHighScores();
//   res.send(scores);
// });

// // SubmitScore
// secureApiRouter.post('/score', async (req, res) => {
//   const score = { ...req.body, ip: req.ip };
//   await DB.addScore(score);
//   const scores = await DB.getHighScores();
//   res.send(scores);
// });

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



// const express = require('express');
// const uuid = require('uuid');
// const app = express();
// const port = process.argv.length > 2 ? process.argv[2] : 4000;

// // Use express.json() middleware to parse incoming JSON bodies
// app.use(express.json());

// // Mock users data (you can replace this with a real database in production)
// const users = {
//   'test@example.com': { password: 'password123' },  // Example login
// };


// // Registration route: allows new users to sign up
// app.post('/api/auth/register', (req, res) => {
//   const { email, password } = req.body;

//   // Check if the email already exists in the "database" (users object)
//   if (users[email]) {
//     return res.status(409).json({ msg: 'User already exists' });
//   }

//   // Add the new user to the "database"
//   users[email] = { password };

//   // Optionally, create a new token for the new user and return it
//   const token = uuid.v4();
//   users[email].token = token;

//   // Return a success message and the new user's token
//   res.status(201).json({ msg: 'User registered successfully', token });
// });

// // Login route: allows existing users to log in
// app.post('/api/auth/login', (req, res) => {
//   const { email, password } = req.body;
//   const user = users[email];

//   // Validate user credentials
//   if (user && user.password === password) {
//     // Create a new token on successful login
//     const token = uuid.v4();
//     user.token = token;
//     res.json({ token });
//   } else {
//     res.status(401).json({ msg: 'Unauthorized' });
//   }
// });

// app.post('/api/auth/logout', (req, res) => {
//     // Optionally invalidate the token here if tracking on server side
//     // For example, by storing a "blacklist" of invalidated tokens
  
//     // No actual action needed for token-based auth in this case, since the token is client-side
//     res.status(200).send({ msg: 'Logged out successfully' });
//   });

// // Serve static files (your React build) from the 'public' directory
// app.use(express.static('public'));

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
