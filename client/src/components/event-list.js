import React from 'react';
import EventCard from './event-card';

const EventList = ({events, filterQuery}) => {
    const processsedList = () => {

        if(!filterQuery || filterQuery === ''){
            return  events.map((event,index) =>
                <EventCard key={index} event={event}/>
            )
        } else {
             return events.filter(e => e.eventName.toLowerCase().includes(filterQuery.toLowerCase())).map((filteredEvent, index) =>
                 <EventCard key={index} event={filteredEvent}/>
             )
        }
    }
    return <div>
        {events ? processsedList() : <div>Loading</div>
        }
    </div>
}

export default EventList;
