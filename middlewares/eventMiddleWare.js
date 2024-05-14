const  { Types } = require('mongoose');
const { Event } = require('../service/eventSchema');

module.exports = { 
    checkEventId: async(req, res, next) => {
    const { id } = req.params;

    const idIsValid = Types.ObjectId.isValid(id);
    if(!idIsValid) return next (new AppError(404, 'Event does not exist'));
    
    const eventExists = await Event.exists({ _id: id });
    if(!eventExists) return next(new AppError(404, 'Event does not exist'));

    next();
}

}