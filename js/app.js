//generic method call
function fetchData(url, successResponse) {
    var data;
      $.ajax({
          method: 'GET',
          async: false,
          url: url,
          dataType: 'jsonp',
          success: successResponse,
          error: function (error){
            console.error(error);
          }
      });
}


//parse through Events Data
function parseEventsData(response) {
  // console.log(response);
  data = response;
  console.log(data);

  //loop through data
  for(var i = 0; i < data.data.length; i++){
    console.log("this data", data.data[i]);
  }

  //post data to html

}

$(document).ready(function(){

  $eventLink = $(".events-link"); //events link

  //Events Link
  $eventLink.on('click',function(e){
    e.preventDefault();
    console.log("Active Link");
    (function () {
        var eventsUrl = "https://api.meetup.com/Women-Who-Code-DC/events?&sign=true&photo-host=public&scroll=next_upcoming";
        fetchData(eventsUrl, parseEventsData)
      }());

  });
});





//
//




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
