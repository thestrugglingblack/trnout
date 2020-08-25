import React from "react";
const AttendeeCard = ({attendee}) => {
    return <div>
        <label>Name:{attendee.memberName}</label> <br/>
        <img src={attendee.photo}  alt=''/> <br/>
        {attendee.host.host ? <label>Host: Yes</label> : ''}<br/>
        <label>RSVP: {attendee.rsvp}</label><br/>
        <label>Guest: {attendee.guest} </label><br/>
        <button>Check-in</button>
    </div>
};

export default AttendeeCard;
