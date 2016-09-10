console.log("I AM WORKING");

$(document).ready(function () {

  var urlEvent="https://api.meetup.com/Women-Who-Code-DC/events/228457104";

  $.ajax({
    method: 'GET',
    url: urlEvent,
    dataType: 'jsonp',
    success: function (response) {
      addEventInfo(response);
    },
    error: function (error) {
      console.error(error);
    }
  });

});


function addEventInfo(response) {

  eventInfo = {
    name: response.data.name,
    location: response.data.venue.address_1,
    time: response.data.time,
    rsvps: response.data.yes_rsvp_count,
    info: response.data.description
  }
  console.log("THE RESPONSE", response);

  console.log("EVENT INFO", eventInfo);

  
}
addEventInfo();
