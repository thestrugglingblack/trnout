'use strict';
const axios = require('axios');

const meetupId = 'Women-Who-Code-DC';

module.exports = async(req, res, next) => {
  const eventsUrl = `https://api.meetup.com/${meetupId}/events`;

  axios.get(eventsUrl, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }}).then(function(response, err) {

    if (err){
      return res.json({
        status: err.status,
        message: err
      });
    }

    const eventsList = [];
    response.data.map((d) => {
      const eventObj = {
        duration: d.duration,
        id: d.id,
        eventName: d.name,
        date: d.local_date,
        time: d.local_time,
        waitlist: d.waitlist_count,
        rsvp: d.yes_rsvp_count,
        venue: d.venue,
        online: d.is_online_event,
        url: d.link,
        desc: d.description
      };

      eventsList.push(eventObj);
    });
    return res.json(eventsList);
  });
};
