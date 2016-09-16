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
  //loop through data
  for(var i=0; i < response.data.length; i++){

      // assign data path for each variable
      var eventId = response.data[i].id;
      var eventName = response.data[i].name;
      var eventTime = response.data[i].time;
      var eventDescription = response.data[i].description;
      var eventRsvpCount = response.data[i].yes_rsvp_count;

      //to address events that don't have venues
      if(typeof response.data[i].venue === 'undefined')
         {
           var eventLocationName = 'TBD';
           var eventAddress = 'TBD';
           var eventCity = 'TBD';
           var eventState = 'TBD';

         } else {
           var eventLocationName = response.data[i].venue.name;
           var eventAddress = response.data[i].venue.address_1;
           var eventCity = response.data[i].venue.city;
           var eventState = response.data[i].venue.state;
         }

        var eventData = {
          eventId: eventId,
          eventName: eventName,
          eventTime: eventTime,
          eventDescription: eventDescription,
          eventRsvpCount: eventRsvpCount,
          eventLocationName: eventLocationName,
          eventAddress: eventAddress,
          eventCity: eventCity,
          eventState: eventState
        }
        // console.log("Each event info", eventRsvpCount);

        //add eventData to page

         $postEventData = $('.event-data-section')
          $postEventData.append(
                                '<a href="\''+ eventData.eventId + '\"/><br>' +
                                '<h2>' + eventData.eventName + '</h2><br>' +
                                '<h3>' + eventData.eventLocationName +'</h3><br>' +
                                '<p>' + eventData.eventAddress + '<br> ' +
                                eventData.eventCity + ', ' +
                                eventData.eventState + '</p>' + eventData.eventDescription + ' ' + '<b>'+
                                eventData.eventRsvpCount + '</b> </a> <hr>'
                              );

  }


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
