import React, {useState} from "react";
import {updateAttendance} from "../api/trnout-service";
const AttendeeCard = ({attendee, event}) => {
    const [here, setHere] = useState(false);

    const submitAttendance = () => {
        const modifiedAttendee = {
            memberName: attendee.memberName,
            guest: attendee.guest,
            checkinTime: Date.now()
        };

        const attendanceObject = {
            event: {
                id: event.id,
                eventName: event.eventName,
                date: event.date,
                time: event.time,
                rsvp: event.rsvp,
                online: event.online,
                venue: event.venue.name.toLowerCase() === 'online' ? 'online' : `${event.venue.name} ${event.venue.address_1} ${event.venue.city} ,${event.venue.state} ${event.venue.zip}` ,
                desc: event.desc
            },
            attendees: [modifiedAttendee]
        };

        updateAttendance(attendanceObject).then((data) => {
            if(data){
                setHere(true);
            }
        })
    };
    return <div>
        <label>Name:{attendee.memberName}</label> <br/>
        <img src={attendee.photo}  alt=''/> <br/>
        {attendee.host.host ? <label>Host: Yes</label> : ''}<br/>
        <label>RSVP: {attendee.rsvp}</label><br/>
        <label>Guest: {attendee.guest} </label><br/>

        {
            here ? <div>Here</div> : <button  onClick={() => {
            submitAttendance();
            return false;}
            }>
                Check-In
            </button>
        }
    </div>
};

export default AttendeeCard;
