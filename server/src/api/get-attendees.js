'use strict';
const axios = require('axios');

const meetupId = 'Women-Who-Code-DC';

module.exports = async(req, res, next) => {

  const eventId = req.params.id;
  const eventsUrl = `https://api.meetup.com/${meetupId}/events/${eventId}/attendance`;

  axios.get(eventsUrl, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }}).then(function(response, err) {
    if (err){
      res.json({
        status: err.status,
        message: err
      });
    }
    const attendeesList = [];
    response.data.map((r) => {
      const attendeeObj = {
        memberName: r.member.name,
        photo: r.member.photo ? r.member.photo.highres_link : '',
        host: r.member.event_context.host,
        rsvp: r.rsvp.response,
        guest: r.rsvp.guests
      };

      attendeesList.push(attendeeObj);
    });

    return res.json(attendeesList);
  });
};
