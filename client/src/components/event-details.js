import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'

import AttendeeList from './attendee-list';
import {retrieveEvent} from "../api/trnout-service";
import Search from "./search";

const EventDetails = () => {
    const [details, setDetails] = useState();
    const [query, setQuery] = useState();

    const location = useLocation();
    const eventId = location.pathname.split('/')[2];
    useEffect(()=> {
        const getEvent = async () => {
            const event = await retrieveEvent(eventId);
            setDetails(event);
            setQuery()

        };
        getEvent();
    }, [eventId]);

    const formatVenue = (venue) => {
        if(venue.name.includes('Online')){
            return 'Online';
        } else {
            return <div>
                <label>`${venue.name}`</label>
                <p>`${venue.address_1}</p><br/>
                <p>`${venue.city}`, `${venue.state}` `${venue.zip}`</p>
            </div>

        }
    };

    const handleQuery = (term) => {
        setQuery(term)
    };
    return <div>
        {details ? <div>
            <label>Event Name: {details.eventName}</label><br/>
            <label>Date: {details.date}</label><br/>
            <label>Time: {details.time}</label><br/>
            <label>Waitlist: {details.waitlist} </label><br/>
            <label>RSVP: {details.rsvp}</label><br/>
            <label>Venue:</label><br/>
            {formatVenue(details.venu)}<br/>
            <label>Online: {details.online}</label><br/>
            <a href={details.url}>Link</a><br/>
            <label>Description</label><br/>
            {details.desc}<br/>

            <h3>Attendees</h3><br/>
            <Search onSearch={handleQuery}/>
            <AttendeeList eventId={eventId} filterQuery={query}/>
        </div>: <div>Loading!</div>}

    </div>
}
export default EventDetails;
