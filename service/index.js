//index.js
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');


const authCookieName = 'token';

// The service port may be set on the command line
// declared below with WebSocket in mind
//const port = process.argv.length > 2 ? process.argv[2] : 4000;

const port = process.argv.length > 2 ? process.argv[2] : 4000;

server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

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

//says duplicate listener, but can't find original

// const httpService = app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

peerProxy(server);


// WebSocket stuff

// const { WebSocketServer } = require('ws');
// // const express = require('express');
// // const app = express();

// // Serve up our webSocket client HTML
// app.use(express.static('./public'));

// // Create a websocket object
// const wss = new WebSocketServer({ noServer: true });

// // Handle the protocol upgrade from HTTP to WebSocket
// server.on('upgrade', (request, socket, head) => {
//   wss.handleUpgrade(request, socket, head, function done(ws) {
//     wss.emit('connection', ws, request);
//   });
// });

// // Keep track of all the connections so we can forward messages
// let connections = [];
// let id = 0;

// wss.on('connection', (ws) => {
//   const connection = { id: ++id, alive: true, ws: ws };
//   connections.push(connection);

//   // Forward messages to everyone except the sender
//   ws.on('message', function message(data) {
//     connections.forEach((c) => {
//       if (c.id !== connection.id) {
//         c.ws.send(data);
//       }
//     });
//   });

//   // Remove the closed connection so we don't try to forward anymore
//   ws.on('close', () => {
//     const pos = connections.findIndex((o, i) => o.id === connection.id);

//     if (pos >= 0) {
//       connections.splice(pos, 1);
//     }
//   });

//   // Respond to pong messages by marking the connection alive
//   ws.on('pong', () => {
//     connection.alive = true;
//   });
// });

// // Keep active connections alive
// setInterval(() => {
//   connections.forEach((c) => {
//     // Kill any connection that didn't respond to the ping last time
//     if (!c.alive) {
//       c.ws.terminate();
//     } else {
//       c.alive = false;
//       c.ws.ping();
//     }
//   });
// }, 10000);
