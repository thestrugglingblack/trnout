'use strict';

const EntryModel = require('../models/entry');

module.exports = async(req, res, next) => {
  const eventId = req.body.event.id;

  EntryModel.find({'event.id': eventId}, (err, entry) => {
    if (err){
      return res.status(500).send(err);
    }
    if (!entry || !entry.length){
      const newEntry = new EntryModel(req.body);

      newEntry.save(function(err) {
        if (err){
          return res.status(500).send(err);
        }
        return res.status(200).send(newEntry);
      });
    } else {
      const entryId = entry[0]._id;
      const currentAttendees = entry[0].attendees;

      const attendeeAlreadyPresent = currentAttendees.find((attendee) => attendee.memberName === req.body.attendees[0].memberName);
      if (attendeeAlreadyPresent){
        return res.status(200).send(req.body);
      } else {
        EntryModel.findByIdAndUpdate(entryId,
          {$push: {
            attendees: {
              $each: req.body.attendees,
              $sort: -1
            }
          }
          }, (err, entry) => {
            if (err){
              return res.status(500).send(err);
            }
            res.status(200).send({
              data: entry
            });
          });
      }
    }
  });
};
