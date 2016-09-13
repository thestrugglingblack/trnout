console.log("I AM WORKING");


//generic method call
function fetchData(url) {
  $.ajax({
    method: 'GET',
    url: url,
    dataType: 'jsonp',
    success: function (response) {
      console.log(response);
    },
    error: function (error){
      console.error(error);
    }
  });
}

//have it connected to button
function getEvents (response){
  var eventsUrl = "https://api.meetup.com/Women-Who-Code-DC/events?&sign=true&photo-host=public&scroll=next_upcoming";
  fetchData(eventsUrl);
}






// $(document).ready(function () {

  // var fetchData = function(url) {
  // var urlEvent="https://api.meetup.com/Women-Who-Code-DC/events/228457104";
  //
  //   $.ajax({
  //     method: 'GET',
  //     url: urlEvent,
  //     dataType: 'jsonp',
  //     success: function (response) {
  //       addEventInfo(response);
  //     },
  //     error: function (error) {
  //       console.error(error);
  //     }
  //   });
  // };


// });


// function addEventInfo(response) {

  // fetchData(urlEvent);

  // console.log(fetchData);
//   eventInfo = {
//     name: response.data.name,
//     location: response.data.venue.address_1,
//     time: response.data.time,
//     rsvps: response.data.yes_rsvp_count,
//     info: response.data.description
//   }
//   console.log("THE RESPONSE", response);
//
//   console.log("EVENT INFO", eventInfo);
//
//   $eventName = $('.event-name-label')
//   $eventName.append('<p>' + eventInfo.name + '</p>');
//
//
// }
// addEventInfo();
//
// function addRsvps(response) {
//
// }
