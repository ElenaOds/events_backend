const { Event, Participant } = require("../../service/eventSchema");

const getParticipantsController = async(req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);

const participants = await Participant.find({owner: event.id});


  res.status(200).json({participants});

}

module.exports = { getParticipantsController };

