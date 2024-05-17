const { Event } = require("../../service/eventSchema");

const getEventByIdController = async(req, res) => {
  const { id } = req.params;
  
  const event = await Event.findById(id);

    res.status(200).json({
        event,
    });
};

module.exports = { getEventByIdController }