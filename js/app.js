

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
      if( typeof response.data[i].venue === 'undefined' )
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
        console.log(eventData);

        addEvents(eventData);

  }
}

// parse through Rsvp Data
function parseRsvpData(response) {
  console.log("Parsing through data");
}

// add Events to HTML
function addEvents(events) {
  var source = $('#event-template').html();
  var template = Handlebars.compile(source);
  var $body = $('.content-wrapper');
    $body.append(template(events));

}

$(document).ready(function(){

// Initial UI
  $sideMenu = $('.side-menu');
  $contentArea = $('.col-md-9');
  $sideMenu.hide();
  $contentArea.remove('col-md-9 content-area').toggleClass("col-md-12 content-area");


  $eventLink = $(".events-link"); //events link
  $selectEvent = $("");

  //Events Link Action
  $eventLink.on('click',function(e){
    e.preventDefault();
    console.log("Active Link");
    //Adjust UI for events
    $sideMenu.show();
    $contentArea.remove('.col-md-12 content-area').toggleClass('.col-md-9 content-area');

    //makes API call for Women Who Code Events
    (function () {
        var eventsUrl = "https://api.meetup.com/Women-Who-Code-DC/events?&sign=true&photo-host=public&scroll=next_upcoming";
        fetchData(eventsUrl, parseEventsData)
      }());

  });

  //Selected Event Action
  $selectEvent.on('click', function(e, eventId) {
    e.preventDefault();
    console.log("Active Link for selected Event");
    (function () {
      var selectedEventUrl = ''+ eventId;
      console.log('The selected event url', selectedEventUrl);
      fetchData(selectedEventUrl, parseRsvpData);

    }());
  });

});




//////
// process.stdin.resume();
// process.stdin.setEncoding('ascii');
//
// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;
//
// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });
//
// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// });
//
// function readLine() {
//     return input_stdin_array[input_currentline++];
// }
//
// function main() {
//     var n = parseInt(readLine());
//     var arr = readLine().split(' ');
//     var arr = arr.map(Number);
//     console.log(arr)
//     var sum = 0;
//
//     for(var i = 0; i < arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum
//
// }
//
// main(4);
