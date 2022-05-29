'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const logger = require('./utils/logger');
const meetUpRoutes = require('../src/routes/meetup.routes');
const reportRoutes = require('../src/routes/report.routes');
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/trnout.sh', { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;

// Added check for DB connection
if (!db) {
  console.log('Error connecting db');
} else {
  console.log('Db connected successfully');
}

server.get('/status', (req, res) => {
  logger.info('Connecting to Trnout Service...');
  res.status(200).send('Trnout Service OK!');
});

server.get('/events', meetUpRoutes.getEvents);
server.get('/events/:id', meetUpRoutes.getEvent);
server.get('/events/:id/attendees', meetUpRoutes.getAttendees);
server.post('/attendance', reportRoutes.updateAttendance);


exports = module.exports = server;
