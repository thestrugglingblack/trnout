'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const logger = require('./utils/logger');
const meetUpRoutes = require('../src/routes/meetup.routes');
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/status', (req, res) => {
  logger.info('Connecting to Trnout Service...');
  res.status(200).send('Trnout Service OK!');
});

server.get('/events', meetUpRoutes.getEvents);
server.get('/events/:id', meetUpRoutes.getEvent);
server.get('/events/:id/attendees', meetUpRoutes.getAttendees);


exports = module.exports = server;
