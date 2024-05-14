const { addParticipantValidation } = require('./addParticipantValidation');
const { checkEventId } = require('./eventMiddleWare');

module.exports = {
    addParticipantValidation,
    checkEventId
}