const express = require('express');
 
const { getEventsController, getEventByIdController, getParticipantController, addParticipantController } = require('../../controllers/index');
const { asyncWrapper } = require('../../helpers/asyncWrapper');
const { checkEventId } = require('../../middlewares/index');

const router = express.Router();

router.get('/', asyncWrapper(getEventsController));
router.get('/:id', checkEventId, asyncWrapper(getEventByIdController));
router.get('/:id/participants', asyncWrapper(getParticipantController));
router.post('/:id/participant', asyncWrapper(addParticipantController));


module.exports = { eventsRouter: router };