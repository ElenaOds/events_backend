const mongoose = require("mongoose");


const participantSchema = new mongoose.Schema( {
  name: {
      type: String,
      required:  [true, 'Name is required'],
  },
  email: {
      type: String,
      required: [true, 'Email is required'],
  },
  birthdate: {
    type: Date,
    },
  info: {
      type: String,
      enum: ['social media', 'friends', 'found myself'],
      required: [true, 'Please choose the data'],
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "Event",
    },
},
);

const eventsSchema = new mongoose.Schema( {
    title: {
      type: String,
    },
    description: {
        type: String,
      },
      event_date: {
      type: Date,
    },
    organizer: {
        type: String,
      },
  },
);

  
const Event = mongoose.model('Event', eventsSchema);
const Participant = mongoose.model('Participant', participantSchema);

module.exports = {
  Event,
  Participant
};