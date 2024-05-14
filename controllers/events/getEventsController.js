const { Event } = require("../../service/eventSchema");

const getEventsController = async(req, res) => {

    const events = await Event.find();
    res.status(200).json({
        events,
    });
};

module.exports = { getEventsController }