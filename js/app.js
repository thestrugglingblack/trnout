console.log("I AM WORKING");

var url="https://api.meetup.com/Women-Who-Code-DC/events/228457104/rsvps";

$.ajax({
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
