'use strict';
const port = process.env.PORT || 6543;
const logger = require('./src/utils/logger');
const server = require('./src/server');

process.on('uncaughtException', (err) => {
  logger.error(err);
  process.exit(1);
});

server.listen(port, (err) => {
  if (err) throw err;
  logger.info(`Listening on http://localhost:${port}`, { event: 'launch'});
});
