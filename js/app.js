console.log("WORK DAMM IT");
//generic method call
function fetchData(url, successResponse) {
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

//pull API key fromt text
function getKey() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", './api_key.txt', false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

//parse through Events Data
function parseEventsData(response) {

  //loop through data
  for(var i=0; i < response.results.length; i++){

      // assign data path for each variable
      var eventId = response.results[i].id;
      var eventName = response.results[i].name;
      var eventTime = response.results[i].time;
      var eventDescription = response.results[i].description;
      var eventRsvpCount = response.results[i].yes_rsvp_count;
      var eventUrl = response.results[i].event_url;

      //parse through event_url for true ID number
      var realId = eventUrl.substr(-10).slice(0,9);

      //to address events that don't have venues
      if( typeof response.results[i].venue === 'undefined' )
         {
           var eventLocationName = 'TBD';
           var eventAddress = 'TBD';
           var eventCity = 'TBD';
           var eventState = 'TBD';

         } else {
           var eventLocationName = response.results[i].venue.name;
           var eventAddress = response.results[i].venue.address_1;
           var eventCity = response.results[i].venue.city;
           var eventState = response.results[i].venue.state;
         }

        //place data in object
        var eventData = {
          realId: realId,
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

        //prints to HTML
        addEvents(eventData);
  //
  }
}

// parse through Rsvp Data
function parseRsvpData(response) {
  console.log("Parsing through data");
  console.log("RSVP Data", response);

  for (var i = 0; i < response.data.length; i++){
    var memberName = response.data[i].member.name;
    var memberGuestsNumber = response.data[i].guests;
    var memberRsvpStatus = response.data[i].response;
    var memberType = response.data[i].member.event_context.host;

    //pass template for memberBio
    if(!response.data[i].member.bio){
      memberBio = "Member of Women Who Code";
    } else {
      var memberBio = response.data[i].member.bio;
    }

    //parse for memberPhoto
    if(!response.data[i].member.photo || response.data[i].member.photo === "undefined"){
      memberPhoto = "http://www.clker.com/cliparts/6/J/I/R/a/t/black-afro-female-silhouette-md.png";
    } else {
      tmp = response.data[i].member.photo;
      tmpString = JSON.stringify(response.data[i].member.photo);
      tmpObj = JSON.parse(tmpString);
      var memberPhoto = tmpObj.photo_link
    }


    var memberData = {
      memberName: memberName,
      memberPhoto: memberPhoto,
      memberGuestsNumber: memberGuestsNumber,
      memberRsvpStatus: memberRsvpStatus,
      memberType: memberType,
      memberBio: memberBio
    }
    console.log(memberData);

    addRsvps(memberData);
  }

}

// add Events to HTML
function addEvents(events) {
  var source = $('#event-template').html();
  var template = Handlebars.compile(source);
  var $body = $('.content-wrapper');
    $body.append(template(events));

}

//add RSVPS to HTML
function addRsvps(members) {
  var source = $('#rsvp-template').html();
  var template = Handlebars.compile(source);
  var $body = $('.content-wrapper');
    $body.append(template(members));
}

$(document).ready(function(){

// Initial UI
  $sideMenu = $('.side-menu');
  $contentArea = $('.col-md-9');
  $sideMenu.hide();
  $contentArea.remove('col-md-9 content-area').toggleClass("col-md-12 content-area");

  //links for API calls
  $eventLink = $(".events-link"); //events link
  $selectEvent = $(".get-rsvp"); //rsvp value

  //Events Link Action
  $eventLink.on('click',function(e){
    e.preventDefault();
    console.log("Active Link");

    //Adjust UI for events
    $sideMenu.show();
    $contentArea.remove('.col-md-12 content-area').toggleClass('.col-md-9 content-area');

    //makes API call for Women Who Code Events
    (function () {

        var eventsUrl = "https://api.meetup.com/2/events?" + getKey() + "&sign=true&photo-host=public&rsvp=yes&group_urlname=Women-Who-Code-DC&limited_events=true&text_format=plain&status=upcoming&page=20";
        console.log(eventsUrl);
        //put the api key after the ?

        fetchData(eventsUrl, parseEventsData);
      }());
  });

    //Selected Event Action
    $(document).on('click', '.get-rsvp' ,function(e) {
      e.preventDefault();
      $('.content').empty();
      eventid = $(this).attr('id');

      (function (){
        var rsvpUrl = "https://api.meetup.com/Women-Who-Code-DC/events/" + eventid + "/rsvps?&sign=true&photo-host=public";
        //put the api key after the ?
        fetchData(rsvpUrl, parseRsvpData);
        $('.content:empty').remove();

      }());
    });

    //add user to event list
    $('.here').on('click', function(){
      tmp = []

    })

});
