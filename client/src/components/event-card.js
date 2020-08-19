import React from 'react';
import {Link} from "react-router-dom";

const EventCard = ({event}) => {
    return <div>
            <label>Event Name: {event.eventName}</label>
            <label>Date: {event.date}</label>
            <label>Time: {event.time}</label>
            <label>RSVP Count: {event.rsvp}</label>
        <Link to={`/events/${event.id}`}>
            View
        </Link>

        </div>
}

export default EventCard;
