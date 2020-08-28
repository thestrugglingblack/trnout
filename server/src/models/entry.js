'use strict';
const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
  event: {
    id: {
      type: String
    },
    eventName: {
      type: String
    },
    date: {
      type: String
    },
    time: {
      type: String
    },
    rsvp: {
      type: Number
    },
    online: {
      type: Boolean
    },
    venue: {
      type: String
    },
    desc: {
      type: String

    }
  },

  attendees: [
    {
      memberName: {
        type: String
      },
      guest: {
        type: Number
      },
      checkinTime: {
        type: String
      }
    }
  ]

});

// Export Entry model
const Entry = module.exports = mongoose.model('entry', entrySchema);
module.exports.get = function(callback, limit) {
  Entry.find(callback).limit(limit);
};

