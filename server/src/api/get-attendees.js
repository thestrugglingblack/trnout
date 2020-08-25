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
      return res.json({
        status: false,
        message: err
      });
    }
    const attendeesList = [];
    response.data.map((r) => {
      const attendeeObj = {
        memberName: r.member.name,
        photo: r.member.photo ? r.member.photo.highres_link : '',
        host: r.member.event_context ? r.member.event_context : 'member',
        rsvp: r.rsvp.response,
        guest: r.rsvp.guests
      };

      attendeesList.push(attendeeObj);
    });

    return res.json(attendeesList);
  }).catch((err) => {
    if (err.message.includes('400')){
      return res.json({
        status: false,
        code: 400,
        message: err
      });
    }
    return res.json({
      status: false,
      error: err.message
    });
  });
};
