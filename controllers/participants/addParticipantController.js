const { Event, Participant } = require("../../service/eventSchema");

const addParticipantController = async(req, res) => {
const { id } = req.params

  const event = await Event.findById(id);
  const newUserData = {
    owner: event.id,
    ...req.body,
  };

const newParticipant = await Participant.create(newUserData);


  res.status(200).json({
    newParticipant
  });

}

module.exports = { addParticipantController };