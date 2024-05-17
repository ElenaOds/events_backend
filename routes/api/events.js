const express = require('express');
 
const { getEventsController, getEventByIdController, addParticipantController, getParticipantsController } = require('../../controllers/index');
const { asyncWrapper } = require('../../helpers/asyncWrapper');
const { checkEventId, addParticipantValidation } = require('../../middlewares/index');

const router = express.Router();

router.get('/', asyncWrapper(getEventsController));
router.get('/:id', checkEventId, asyncWrapper(getEventByIdController));
router.post('/:id/registration', addParticipantValidation, asyncWrapper(addParticipantController));
router.get('/:id/participants', asyncWrapper(getParticipantsController));

module.exports = { eventsRouter: router };