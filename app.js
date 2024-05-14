const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const dotenv = require('dotenv');

const { eventsRouter } = require('./routes/api/events')
// const { participantRouter } = require = ('./routes/api/participants.js')

dotenv.config({ path: './.env'});

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/events', eventsRouter);
// pp.use('/api/participants', participantRouter);

app.all('*', (req, res) => {
    res.status(404).json({ message: 'Not found' })
  });
  
  app.use((error, req, res, next) => {
    const msg = Array.isArray(error.message) ? error.message.join(';') : error.message;
    
     res.status(error.status || 500).json({ 
      msg,
      stack: error.stack
      });
  });
  
  module.exports = app;