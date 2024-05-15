const { Event, Participant } = require("../../service/eventSchema");

const addParticipantController = async(req, res) => {

  const { id } = req.params
  const { name, email, birthdate, info } = req.body;
  const newUserData = {
    name,
    email, 
    birthdate, 
    info
  };

  const event = await Event.findById(id);
  const newParticipant = await Participant.create(newUserData);
    event.participants.push(newParticipant);
    await event.save();


  res.status(200).json(
   newParticipant
  );

}

module.exports = { addParticipantController };