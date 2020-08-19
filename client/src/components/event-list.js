import React from 'react';
import EventCard from './event-card';
import Search from "./search";

const EventList = ({events}) => {
    return <div>
        <Search/>
        {events ? events.map((event,index) =>
            <EventCard key={index} event={event}/>
        ) : <div>Loading</div>
        }
    </div>
}

export default EventList;
