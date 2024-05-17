const { getEventsController } = require('./events/getEventsController');
const { addParticipantController } = require('./participants/addParticipantController');
const { getParticipantsController } = require('./participants/getParticipantsController');
const { getEventByIdController } = require('./events/getEventByIdController');

module.exports = {
    getEventsController,
    getEventByIdController,
    addParticipantController,
    getParticipantsController,
}