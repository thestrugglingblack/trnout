console.log("I AM WORKING");

$(document).ready(function () {
  var url="https://api.meetup.com/Women-Who-Code-DC/events/228457104/rsvps";

  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'jsonp',
    success: function(response){
      console.log("THE RESPONSE", response);
    },
    error: function(error) {
      console.log("THE ERROR", error);

    }
  });

  ///addEvent Information
  function adEventInfo (data){
    
    var addEvent = {
      eName: eName,
      eLocation: eLocation,
      eTime: eTime,
      eRsvps: eRsvps
    }
  }
});
