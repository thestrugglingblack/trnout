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
          console.log('Updated attendees array', entry);
          res.status(200).send({
            data: entry
          });
        });
    }
  });
};
