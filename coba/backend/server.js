const express = require('express');
const winston = require('winston');

const app = express();

// Konfigurasi logger dengan Winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
  ],
});

app.get('/', function(req, res) {
  // Log pesan info ke konsol
  logger.info('Received a request to the root endpoint.');
  res.send('Hello, World!');
});

app.listen(5000, function() {
  logger.info('Web application is listening on port 5000');
});
