const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const app = express();

const corsOptions = {
  origin: 'http://127.0.0.1:5173',
  credentials: true,
};

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

https.createServer(options, app).listen(3000, () => {
  console.log(`Server is running on https://localhost:3000`);
});

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.setHeader('set-cookie', ['sessId=123;SameSite=None;secure=true']);
  res.send('hello world');
});
